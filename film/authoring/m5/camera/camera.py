"""Rebuild the 432-frame M5 camera pass from the signed-off M4 source and storyboard plates.

Coordinates use image fractions. All dolly layers use a single fixed optical axis
per leg. The outward camera translates along that ray at three registered depths.
The direct cut to the coast is a change from street-level to aerial perspective.
"""
import argparse
import json
import math
import subprocess
from pathlib import Path

import cv2 as cv
import numpy as np
from scipy.interpolate import PchipInterpolator

W, H = 1280, 720
SIZE = np.array([W, H])
FPS = 24
FRAMES = 432
ROOT = Path(__file__).resolve().parent
cv.setNumThreads(2)

def path(xs, ys):
    return PchipInterpolator(xs, ys)

def load(name):
    pic = cv.imread(str(ROOT / 'plates' / name))
    assert pic is not None and pic.shape[:2] == (H, W), name
    return pic

def polygon(points, feather=0):
    matte = np.zeros((H, W), np.uint8)
    cv.fillPoly(matte, [np.int32(np.round(np.array(points)*SIZE))], 255, cv.LINE_AA)
    return cv.GaussianBlur(matte, (0, 0), feather) if feather else matte

def texture(image, alpha=None):
    # Mipmaps prefilter distant photographs, including their coverage at the edges.
    pix = image if alpha is None else np.dstack([image*(alpha[...,None]/255),alpha]).round().astype('uint8')
    mip = [pix]
    while min(mip[-1].shape[:2]) > 16:
        mip.append(cv.pyrDown(mip[-1]))
    return mip

def draw(canvas, tex, scale, origin, destination, background=False):
    anchor = np.asarray(destination) * SIZE - np.asarray(origin) * SIZE * scale
    idx = max(0, min(len(tex)-1, int(math.log2(1/max(1.e-9, scale)))))
    src = tex[idx]
    ratio = 2**idx
    x0,y0 = np.maximum(0,np.floor(anchor)).astype(int)
    x1,y1 = np.minimum(SIZE,np.ceil(anchor+SIZE*scale)).astype(int)
    if background:
        x0,y0,x1,y1=0,0,W,H
    if x1<=x0 or y1<=y0:
        return canvas
    transform = np.float32([[scale*ratio,0,anchor[0]-x0],[0,scale*ratio,anchor[1]-y0]])
    patch = cv.warpAffine(src, transform, (x1-x0,y1-y0), flags=cv.INTER_LINEAR,
                          borderMode=cv.BORDER_REPLICATE if background else cv.BORDER_CONSTANT)
    dst = canvas[y0:y1,x0:x1]
    if patch.shape[-1] == 3:
        dst[:] = patch
    else:
        a = patch[:,:,3:4].astype('float32')/255
        dst[:] = np.rint(dst*(1-a)+patch[:,:,:3]).clip(0,255).astype('uint8')
    return canvas

def zoom_about(canvas,tex,z,origin,dest):
    return draw(canvas,tex,z,origin,dest,True)

def apply_gain(pic, level, mask):
    return (pic * (1-mask[:,:,None]/255*(1-level))).clip(0,255).astype('uint8')

def frame_at(cap, index):
    cap.set(cv.CAP_PROP_POS_FRAMES,index)
    ok,img=cap.read()
    assert ok, index
    return img

def build(m4, output):
    cap=cv.VideoCapture(str(m4),cv.CAP_FFMPEG,[cv.CAP_PROP_N_THREADS,1])
    assert int(cap.get(cv.CAP_PROP_FRAME_COUNT))==364
    reference={i:frame_at(cap,i) for i in [152,279]}
    # The M4 shot contains the installed plug, the toaster and the real countertop.
    # Keep the gesture and avoid interpolating through hand occlusions.
    cap.set(cv.CAP_PROP_POS_FRAMES,152)
    last_frame=151; action=None
    # Frame 320 of the M5 preceding rack shot. The port sits below the top rail.
    rack=load('rack-entry.png');blade=load('00.jpg')
    rack_axis=(.472,.542); slot_axis=(.569,.486)
    rack_hole=polygon([(.35,.535),(.555,.509),(.558,.546),(.347,.580)],1.0)
    rack_frame=texture(rack,255-rack_hole)
    blade_hole=polygon([(.39,.398),(.747,.426),(.746,.548),(.386,.563)],1.6)
    blade_frame=texture(blade,255-blade_hole)
    # One static, unwarped terrain plate contains both the visible pylon and road.
    terrain=load('10.jpg')
    lamps=polygon([(.16,.51),(.64,.51),(.90,.60),(.82,.91),(.31,.94)],18)
    # Roll off just the brightest warm reflections. Keep the actual lamps lit.
    warm=np.clip((terrain[:,:,2].astype('float32')-terrain[:,:,0]-25)/100,0,1)
    hot=np.clip((np.max(terrain,axis=2).astype('float32')-100)/110,0,1)
    terrain=apply_gain(terrain,.54,(lamps*warm*hot).astype('uint8'))
    valley=texture(terrain)
    home=reference[152]
    # The patch follows the hillside, woods, veranda and wet roadway of one real
    # photograph. Its geometry and spatial feather are constant throughout.
    home_m=polygon([(.10,.56),(.25,.39),(.42,.32),(.52,.28),(.70,.011),(.74,.01),(.995,.23),(.998,.97),(.03,.985),(.08,.71)],13)
    home_layer=texture(home,home_m)
    # Match the roof and kitchen window to the house at the bend of the valley road.
    home_scale=.208
    home_tl=np.array([.844,.395])-home_scale*np.array([.716,.051])
    valley_axis=np.array([.343,.572])
    home_focus=np.array([.65,.53])
    home_center=home_tl+home_scale*home_focus
    # Approaching the chosen window: one projection of the route. The inherited
    # house footage takes over after the camera has passed its photographic edges.
    times=[0,12,34,64,85,106,138,165,180]
    rack_z=path([0,12,34,64,85],[1,1.35,5.0,43,90])
    blade_z=path([0,12,34,64,85],[.16,.25,.84,7.3,19])
    valley_z=path(times,[.98,1.10,1.30,1.53,1.63,1.78,2.5,5.05,7.1])
    travel=path([0,58,85,106,138,165,180],[0,0,.045,.25,.75,.975,1])
    pixel_target=path([0,34,73,106,145,180],
                      [[rack_axis[0],rack_axis[1]],[.492,.524],[.493,.520],[.482,.494],[.51,.51],[.5,.5]])
    # Retain plug and toaster action exactly from M4. At first both are still
    # moving toward the same point. Relax the overscan while M4 moves inside.
    action_map=path([180,193,216,243,270,288],[152,168,196,224,254,279])
    overscan=path([180,193,210,288],[7.1*home_scale,1.24,1.,1.])
    # An existing domestic facade surrounds the room once we are outside its
    # window. Empty panes share the same city behind the room, at its own depth.
    inside=reference[279]
    # Cut on the actual glass openings, leaving the continuous metal frames,
    # top cabinets and the sill in the photographic foreground.
    glass=np.zeros((H,W),np.uint8)
    for left,right in [(.467,.499),(.514,.570),(.581,.641),(.663,.729),
                       (.743,.814),(.828,.904),(.927,.997)]:
        for top,bottom in [(.003,.168),(.209,.550)]:
            part=polygon([(left,top+.005),(right,top),(right,bottom),(left,bottom+.003)],.6)
            glass=np.maximum(glass,part)
    room=texture(inside)
    glazing=texture(np.zeros((H,W,3),np.uint8),glass)
    facade=home
    shell=texture(facade,home_m)
    aperture=polygon([(.694,.427),(.901,.392),(.902,.717),(.692,.697)],1.0)
    aperture_tex=texture(np.zeros((H,W,3),np.uint8),aperture)
    citypic=load('27.jpg')
    # Match M4's dusk exposure at the pane; the practical lights remain present.
    city=texture(cv.convertScaleAbs(citypic,alpha=.50,beta=0))
    coast=texture(load('33.jpg'))
    continent=texture(load('37.jpg'))
    globe=texture(load('39.jpg'))
    # 447 independent SIFT inliers register plate 38 to full-disk plate 39.
    # This fixed high-resolution detail field ends inside the same Earth.
    close_globe=load('38.jpg')
    detail_m=polygon([(.19,.12),(.30,.045),(.62,.044),(.77,.14),(.82,.34),(.82,.67),
                      (.72,.83),(.60,.93),(.35,.91),(.21,.76),(.165,.44)],28)
    detail_tex=texture(close_globe,detail_m)
    room_axis=np.array([.741,.371]);city_axis=np.array([.697,.549])
    shell_axis=np.array([.692,.393])+room_axis*np.array([.217,.309])
    street_axis=home_tl+home_scale*shell_axis
    ray=room_axis
    dcurve=path([288,302,319,334,347,365],[0,.39,1.73,4.45,8.15,11.6])
    earth_anchor=np.array([.502,.335]);coast_anchor=np.array([.559,.481])
    continent_anchor=np.array([.642,.612])
    end_anchor=np.array([.499,.699])+(.55*(earth_anchor-np.array([.497,.470])))
    # A street photograph, an oblique shore and a view from orbit have different
    # vanishing points. Match-cut the light at the same screen location between
    # full, moving views; keep a fixed projection center within each leg.
    coast_scale=path([365,372,380],[2.30,1.69,1.21])
    region_scale=path([381,390,400],[2.55,1.77,1.34])
    final_scale=path([401,409,421,431],np.log([3.53,2.48,1.13,.55]))
    # The geographic point follows a radial trajectory toward a single film-space
    # vanishing point. Reset only the magnification unit when the plate changes.
    coast_start=ray
    region_start=end_anchor+1.21/2.30*(coast_start-end_anchor)
    final_start=end_anchor+1.34/2.55*(region_start-end_anchor)
    reg=[]
    enc=subprocess.Popen(['ffmpeg','-y','-v','error','-filter_threads','1','-filter_complex_threads','1','-f','rawvideo','-s','1280x720','-pix_fmt','bgr24','-r','24','-i','-','-an','-c:v','libx264','-threads','1','-preset','veryfast','-x264-params','rc-lookahead=0','-crf','16','-g','12','-pix_fmt','yuv420p','-movflags','+faststart',str(output)],stdin=subprocess.PIPE)
    for f in range(FRAMES):
        if f%48==0: print(f,flush=True)
        if f==181: del rack_frame,blade_frame,home_layer,rack,blade
        if f==289: cap.release();del action
        canvas=np.zeros((H,W,3),np.uint8)
        if f<180:
            u=float(travel(f));fix=valley_axis*(1-u)+home_center*u
            dest=pixel_target(f);z=float(valley_z(f))
            zoom_about(canvas,valley,z,fix,dest)
            draw(canvas,home_layer,z*home_scale,[0,0],dest+(home_tl-fix)*z)
            if f<85:
                draw(canvas,blade_frame,float(blade_z(f)),slot_axis,dest)
                draw(canvas,rack_frame,float(rack_z(f)),rack_axis,dest)
            if f==0: canvas=rack.copy()
        elif f<=288:
            index=round(float(action_map(f)))
            scale=float(overscan(f))
            while last_frame < index:
                success, action=cap.read();assert success;last_frame+=1
            if scale==1: canvas=action
            else:
                center=.5+(home_focus-.5)*(scale-1)/(7.1*home_scale-1)
                zoom_about(canvas,texture(action),scale,center,[.5,.5])
        elif f<365:
            distance=float(dcurve(f))
            rz=1/(1+distance/7);sz=5.55/(1+distance/1.02)
            cz=1.05/(1+distance/10);street_z=sz/home_scale
            zoom_about(canvas,valley,street_z,street_axis,ray)
            draw(canvas,shell,sz,shell_axis,ray)
            pane=canvas.copy()
            draw(pane,room,rz,room_axis,ray)
            distant=np.zeros_like(canvas)
            zoom_about(distant,city,cz,city_axis,ray)
            mask=np.full_like(canvas,255)
            draw(mask,glazing,rz,room_axis,ray)
            pane=cv.blendLinear(pane,distant,mask[:,:,0].astype('float32')/255,
                                1-mask[:,:,0].astype('float32')/255)
            # Leave the untouched, original facade under the photographic room
            # where the exterior oblique window extends beyond its source bounds.
            occlusion=np.full_like(canvas,255)
            draw(occlusion,aperture_tex,sz,shell_axis,ray)
            pane_mix=(1-occlusion[:,:,0].astype('float32')/255)
            canvas=cv.blendLinear(canvas,pane,1-pane_mix,pane_mix)
            reg.append({'frame':f,'leg':'window and city','ray':ray.tolist(),'roomScale':rz,'cityScale':cz,
                        'windowBarCorners':[(ray+rz*(np.array(pt)-room_axis)).tolist() for pt in [[.581,.209],[.641,.209]]],
                        'buildingRoofCorners':[(ray+cz*(np.array(pt)-city_axis)).tolist() for pt in [[.626,.503],[.718,.503]]]})
        else:
            if f<=380:
                label='city and coastline';z=float(coast_scale(f));start=coast_start;first=2.30
                src=coast;anchor=coast_anchor
                landmarks=[(.537,.482),(.553,.480),(.641,.507),(.68,.487)]
            elif f<=400:
                label='Eastern seaboard';z=float(region_scale(f));start=region_start;first=2.55
                src=continent;anchor=continent_anchor
                landmarks=[(.628,.618),(.642,.607),(.62,.719),(.627,.779)]
            else:
                label='Earth';z=float(np.exp(final_scale(f)));start=final_start;first=3.53
                src=globe;anchor=earth_anchor
                landmarks=[(.497,.341),(.506,.335),(.493,.377),(.498,.389)]
            screen=end_anchor+z/first*(start-end_anchor)
            zoom_about(canvas,src,z,anchor,screen)
            if label=='Earth':
                # Fixed similarity registration in the same geographic coordinate
                # system. The mask stays safely inside the single planetary limb.
                offset=np.array([208.611/W,103.976/H])
                draw(canvas,detail_tex,.67696*z,[0,0],screen+z*(offset-anchor))
            points=[(screen+z*(np.array(pt)-anchor)).tolist() for pt in landmarks]
            reg.append({'frame':f,'leg':label,'ray':end_anchor.tolist(),'scale':z,'landmarks':points})
        enc.stdin.write(canvas.tobytes())
    cap.release()
    enc.stdin.close()
    if enc.wait(): raise RuntimeError("Camera encoder failed")
    (output.with_suffix('.landmarks.json')).write_text(json.dumps(reg,indent=2))
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('m4_camera',type=Path);p.add_argument('output',type=Path)
    a=p.parse_args();build(a.m4_camera,a.output)
