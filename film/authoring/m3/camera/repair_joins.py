"""Render the short corrected inserts against the existing 660-frame M3 camera. Output ranges are half-open."""
import argparse
import hashlib
import subprocess
from pathlib import Path
import cv2
import numpy as np
from scipy.interpolate import PchipInterpolator

WIDTH, HEIGHT = 1280, 720
# Match the same pictured objects in valley, plant, and road views. Coordinates are native camera pixels.
# Spillway, ridge, central distant lines, stack, corridor, buildings, nearest tower, ground and water.
VALLEY = np.array([
 [(238,129),(490,160),(709,136),(1057,104),(1113,104),(1053,159),(1112,163),(652,248),(606,349),(343,319),(963,324),(355,408),(935,410),(196,339),(746,332),(1114,379),(638,431),(589,458),(691,458),(602,482),(677,482),(618,548),(661,547),(417,464),(868,460),(757,650),(930,613)],
 [(367,120),(519,137),(740,128),(1017,103),(1044,102),(1016,135),(1045,136),(654,172),(648,225),(421,231),(964,239),(301,392),(977,410),(151,297),(816,291),(1149,340),(636,382),(558,425),(715,427),(577,463),(700,463),(603,570),(678,569),(454,453),(871,455),(743,650),(925,608)],
 [(321,103),(448,115),(735,114),(1058,77),(1090,77),(1057,124),(1089,124),(585,172),(577,232),(355,228),(918,249),(154,371),(769,399),(51,311),(680,290),(1205,314),(401,369),(345,403),(458,405),(357,435),(448,436),(377,533),(433,533),(280,423),(632,438),(429,635),(483,603)],
], dtype=np.float32)
# Outlet perimeter/plug, cable, toaster body/slots/lever/indicator, sill and counter anchors.
KITCHEN = np.array([
 [(134,119),(257,134),(257,435),(134,449),(197,311),(197,377),(310,355),(439,480),(580,555),(706,545),(800,484),(818,264),(899,242),(1070,237),(1175,249),(1206,272),(1217,513),(1039,538),(809,505),(1110,485),(1171,475),(1154,429),(684,279),(807,278),(809,421),(688,423),(521,547),(678,438),(859,84),(1066,55),(825,1)],
 [(28,305),(107,307),(107,484),(29,494),(78,421),(81,458),(146,447),(257,514),(401,578),(593,567),(725,526),(731,389),(782,378),(860,375),(951,385),(974,398),(977,552),(862,565),(724,535),(916,530),(947,521),(945,437),(503,376),(585,376),(584,464),(505,463),(303,575),(464,471),(667,261),(891,93),(671,0)],
], dtype=np.float32)
GX,GY = np.meshgrid(np.linspace(0,1,WIDTH,dtype=np.float32),np.linspace(0,1,HEIGHT,dtype=np.float32))

def smooth(value):
    unit = np.clip(value, 0, 1)
    return unit*unit*(3-2*unit)

def tower_patch(base, image_a, image_b, points_a, points_b, target, q):
    # Fit each photographed tower onto one fixed seven-point lattice.
    # This makes its legs and arms move as a single object.
    ids = slice(16, 23)
    a, b, target = points_a[ids], points_b[ids], target[ids]
    def warp(image, points):
        matrix = np.linalg.lstsq(np.c_[points, np.ones(len(points))], target, rcond=None)[0].T
        return cv2.warpAffine(image, matrix, (WIDTH, HEIGHT), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT101)
    first, last = warp(image_a, a), warp(image_b, b)
    fade = smooth((q - .08 - .25*GX)/.40)[:, :, None]
    delta = last.astype(np.float32) - first.astype(np.float32)
    low = cv2.GaussianBlur(delta, (0,0), 8)
    patch = first.astype(np.float32) + delta*fade + low*(smooth(q)-fade)
    hull = cv2.convexHull(np.vstack([a, b, target]).astype(np.float32)).round().astype(np.int32)
    mask = np.zeros((HEIGHT, WIDTH), np.uint8)
    cv2.fillConvexPoly(mask, hull, 255)
    mask = cv2.dilate(mask, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (49, 33)))
    mask = cv2.GaussianBlur(mask, (0,0), 12.72).astype(np.float32)[:, :, None]/255
    mask *= smooth(min(q/.14, (1-q)/.14))
    return np.clip(base.astype(np.float32)*(1-mask)+patch*mask, 0, 255).astype(np.uint8)

def retreat_patch(base, plate_a, plate_b, source_a, source_b, target, q):
    # The outlet and toaster appear in different perspectives in the two photographs.
    # Interpolate their rigid camera maps across the empty backsplash between them.
    # Keeping all cord pixels in this region prevents orphaned plugs and doubled outlets.
    outlet = [0, 1, 2, 3]
    toaster = list(range(11, 21))
    x = GX * (WIDTH - 1)
    y = GY * (HEIGHT - 1)
    cross = smooth((x - (target[1, 0] + 65)) / (target[11, 0] - target[1, 0] - 130))
    
    def material(plate, source):
        maps = []
        for ids in [outlet, toaster]:
            mat = np.linalg.lstsq(np.c_[target[ids], np.ones(len(ids))], source[ids], rcond=None)[0]
            maps.append([x*mat[0,k] + y*mat[1,k] + mat[2,k] for k in (0,1)])
        coords = [(maps[0][k]*(1-cross) + maps[1][k]*cross).astype(np.float32) for k in (0,1)]
        graphic = cv2.remap(plate, *coords, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
        return graphic, coords

    first, ma = material(plate_a, source_a)
    last, mb = material(plate_b, source_b)
    # Transfer texture within three frames as the camera accelerates. This avoids a
    # lingering double outline on the cable when the two photographic slack curves differ.
    wipe = smooth((q - .40 + .11*GX) / .23)
    # Border pixels are visible only in the arriving photograph as the camera widens.
    margin_a=np.minimum.reduce([ma[0],WIDTH-1-ma[0],ma[1],HEIGHT-1-ma[1]])
    margin_b=np.minimum.reduce([mb[0],WIDTH-1-mb[0],mb[1],HEIGHT-1-mb[1]])
    wipe = np.maximum(wipe,1-smooth(margin_a/24))
    wipe = np.minimum(wipe,smooth(margin_b/24))
    patch = first.astype(np.float32)*(1-wipe[:,:,None]) + last.astype(np.float32)*wipe[:,:,None]
    # Feather the foreground against the retained camera above the countertop.
    top = np.interp(x[0],[0,180,410,600,750,1280],[30,30,65,160,135,155])
    mask = smooth((y-top[None,:])/90) * smooth((1279-x)/40)
    # Original first and last frame are reused exactly. Neighboring frames approach
    # them by the same trajectory, while late duplicated source pixels stay covered.
    if q < .13: mask *= smooth(q/.13)
    if q > .93: mask *= smooth((1-q)/.07)
    return np.clip(base*(1-mask[:,:,None]) + patch*mask[:,:,None],0,255).astype(np.uint8)

def insert(camera,output,section): 
    cap=cv2.VideoCapture(str(camera))
    if int(cap.get(cv2.CAP_PROP_FRAME_COUNT))!=660:raise ValueError('Expected 660-frame M3 registered camera')
    if section=='valley':keys=[119,143,166];landmarks=VALLEY
    else:keys=[487,502];landmarks=KITCHEN
    plates=[]
    for frame in keys:
        cap.set(cv2.CAP_PROP_POS_FRAMES,frame);ok,im=cap.read()
        if not ok:raise ValueError(f'Cannot decode source frame {frame}')
        plates.append(im)
    cap.set(cv2.CAP_PROP_POS_FRAMES,keys[0]+1)
    # These positions keep the photographed pilot registered to its existing golden light cue.
    lamp_x=PchipInterpolator([487,488,489,490,491,492,493,494,495,498,501,502],
                             [0,.06,.095,.14,.19,.24,.335,.39,.44,.875,.985,1])
    lamp_y=PchipInterpolator([487,489,492,495,498,501,502],[0,.028,.092,.21,.70,.97,1])
    if section=='valley': path=PchipInterpolator(keys,landmarks,axis=0)
    lo,hi=keys[0]+1,keys[-1]
    enc=subprocess.Popen(['ffmpeg','-loglevel','error','-y','-f','rawvideo','-pix_fmt','bgr24','-s','1280x720','-r','24','-i','pipe:0','-an','-c:v','libx264','-preset','veryfast','-crf','12','-threads','2','-g','8','-pix_fmt','yuv420p','-movflags','+faststart',str(output/f'{section}-{lo:04d}-{hi:04d}.mp4')],stdin=subprocess.PIPE)
    for i in range(lo,hi):
        ok,original=cap.read()
        if not ok:raise ValueError(f"Camera cannot decode frame {i}")
        if i in keys:im=plates[keys.index(i)]
        else:
            j=0 if i<keys[1] else 1;a,b=keys[j:j+2];q=(i-a)/(b-a);pa,pb=landmarks[j:j+2]
            if section=='valley':
                # Ease gently into endpoint velocity and cross the middle location without a full stop.
                tm=i
                if i<keys[0]+5:tm=keys[0]+5*((i-keys[0])/5)**2*(2-(i-keys[0])/5)
                if i>keys[-1]-5:tm=keys[-1]-5*((keys[-1]-i)/5)**2*(2-(keys[-1]-i)/5)
                pts=path(tm).astype(np.float32)
            else:
                pts=pa+(pb-pa)*np.float32([lamp_x(i),lamp_y(i)])
            im=original
            if section=='valley':
                im=tower_patch(im,plates[j],plates[j+1],pa,pb,pts,q)
            else:
                im=retreat_patch(im,plates[j],plates[j+1],pa,pb,pts,q)
        enc.stdin.write(im.tobytes())
    cap.release();enc.stdin.close()
    if enc.wait()!=0:raise RuntimeError('Patch encode failed')

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('registered_camera', type=Path)
    parser.add_argument('output', type=Path)
    args = parser.parse_args()
    if hashlib.sha256(args.registered_camera.read_bytes()).hexdigest() != '99f4f455e68372e6d57630f767c2e8428523812b8ef606b8ec1489e5e41b658a':
        raise ValueError('Use the supplied 660-frame registered M3 camera as the input')
    args.output.mkdir(exist_ok=True, parents=True)
    cv2.setNumThreads(1)
    for section in ['valley', 'retreat']:
        insert(args.registered_camera, args.output, section)
