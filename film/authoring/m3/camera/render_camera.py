"""Composite the five optical handoffs of the original, keeping one tracked physical landmark across each join."""
from pathlib import Path
import sys,json,subprocess as sp,math
import argparse
HOME=Path(__file__).resolve().parent
parser=argparse.ArgumentParser(description='Rebuild the 660-frame registered camera movement')
parser.add_argument('reference',type=Path,help='Original L r4 camera-pass.mp4, extracted from its HTML')
parser.add_argument('output',type=Path)
args=parser.parse_args()
import cv2 as cv
import numpy as np
from scipy.spatial import Delaunay
from scipy.interpolate import PchipInterpolator
W=args.output.parent;source=args.reference;dest=args.output;cv.setNumThreads(2)
import zipfile
art_zip=zipfile.ZipFile(HOME/'plates.zip')
width,height=1280,720;cap=cv.VideoCapture(str(source))
# Fixed parent images + individual knot coordinates are retained as editable build inputs.
def frame(i):
 cap.set(cv.CAP_PROP_POS_FRAMES,i);ok,b=cap.read();assert ok;return b
def plate(i):return cv.resize(cv.imdecode(np.frombuffer(art_zip.read('%02d.jpg'%i),np.uint8),cv.IMREAD_COLOR),(width,height),interpolation=cv.INTER_LANCZOS4)
samples={}
def register(name,img,pts):samples[name]=(img,np.float32(pts))
# Distant spillway, reservoir, stack base, high valley and one near lower route.
register('grid',frame(94),[(.158,.199),(.544,.175),(.847,.22),(.498,.37),(.33,.54),(.72,.60)])
register('valley',plate(6),[(.20,.183),(.548,.195),(.814,.216),(.475,.39),(.36,.55),(.68,.65)])
register('road-mid',plate(8),[(.253,.19),(.55,.20),(.79,.209),(.475,.423),(.34,.60),(.69,.71)])
register('road',frame(166),[(.25,.197),(.552,.208),(.809,.238),(.457,.442),(.294,.624),(.661,.737)])
# Coast light, two coast directions, sky/horizon and nearby surface texture.
register('city',plate(29),[(.80,.29),(.55,.34),(.89,.37),(.50,.22),(.39,.60),(.73,.57)])
register('horizon',plate(31),[(.70,.33),(.50,.405),(.87,.45),(.49,.154),(.35,.67),(.76,.74)])
register('shore',plate(33),[(.60,.49),(.51,.51),(.70,.49),(.49,.15),(.42,.67),(.68,.70)])
register('coast',plate(34),[(.50,.59),(.44,.61),(.60,.51),(.49,.13),(.41,.71),(.60,.67)])
# Florida tip, Yucatán, Carolina, northeastern seaboard, Texas coast, and Atlantic.
register('curvature',plate(36),[(.400,.903),(.25,.94),(.56,.77),(.62,.62),(.24,.76),(.76,.89)])
register('continent',plate(37),[(.622,.796),(.42,.91),(.69,.62),(.755,.496),(.43,.704),(.83,.813)])
register('globe',plate(38),[(.487,.372),(.423,.397),(.51,.31),(.53,.266),(.378,.332),(.573,.387)])
register('final',frame(604),[(.521,.655),(.501,.665),(.526,.639),(.533,.626),(.501,.644),(.55,.655)])
def ease(q):q=np.clip(q,0,1);return q*q*(3-2*q)
border=np.float32([(-.05,-.05),(.5,-.05),(1.05,-.05),(-.05,.5),(1.05,.5),(-.05,1.05),(.5,1.05),(1.05,1.05)])
gw,gh=164,94;gy,gx=np.mgrid[0:gh,0:gw];xy=np.float32(np.c_[gx.ravel()/(gw-1),gy.ravel()/(gh-1)])
rampX=np.linspace(0,1,width,dtype=np.float32)[None,:];rampY=np.linspace(0,1,height,dtype=np.float32)[:,None]
def warp(im,src,dst):
 # Piecewise affine geometry, sampled on a coarse grid and reconstructed at delivery size.
 tri=Delaunay(dst);ids=tri.find_simplex(xy);v=tri.transform[ids];local=(v[:,:2]@(xy-v[:,2])[:,:,None])[:,:,0];weights=np.c_[local,1-local.sum(1)]
 arr=(src[tri.simplices[ids]]*weights[:,:,None]).sum(axis=1).reshape(gh,gw,2).astype('f4')
 mx=cv.resize(arr[:,:,0],(width,height),interpolation=cv.INTER_CUBIC)*(width-1);my=cv.resize(arr[:,:,1],(width,height),interpolation=cv.INTER_CUBIC)*(height-1)
 return cv.remap(im,mx,my,cv.INTER_CUBIC,borderMode=cv.BORDER_REFLECT101)
def morph(keyA,keyB,q):
 a,pa=samples[keyA];b,pb=samples[keyB];t=ease(q);pts=(1-t)*pa+t*pb
 sa=np.vstack([pa,border]);sb=np.vstack([pb,border]);dst=np.vstack([pts,border])
 aa=warp(a,sa,dst);bb=warp(b,sb,dst)
 # Move the transition through depth after geometry matches. Avoid a full-field double horizon.
 alpha=ease(np.clip((t-.24*(1-rampY)-.05*rampX)/.71,0,1))[:,:,None]
 return np.uint8(aa*(1-alpha)+bb*alpha)
def glow(im,x,y,amp,r=4,color=(96,183,245)):
 x=int(x*width);y=int(y*height);radius=int(r*4);x0=max(x-radius,0);x1=min(x+radius+1,width);y0=max(y-radius,0);y1=min(y+radius+1,height)
 yy,xx=np.mgrid[y0:y1,x0:x1];g=amp*np.exp(-((xx-x)**2+(yy-y)**2)/(2*r*r));d=im[y0:y1,x0:x1];d[:]=np.minimum(255,d+g[:,:,None]*np.array(color))
def optic(im,i):
 # Smoothly build the matched cold chassis light into the warmer conductor at distance.
 if 33<=i<=92:
  z=(i-33)/59;px=np.interp(z,[0,.37,.58,1],[.497,.50,.50,.68]);py=np.interp(z,[0,.37,.58,1],[.435,.431,.43,.52])
  glow(im,px,py,.54*np.sin(np.pi*z),2.0+2.5*z)
 # Counter relief restores the plug, hand and toaster in the original exposure ramp.
 if 375<i<539:
  amount=ease((i-375)/37)*(1-ease((i-505)/34));lut=np.uint8(np.clip((np.arange(256)/255)**(1-.18*amount)*255,0,255));im=cv.LUT(im,lut)
 return im
grid=[(94,'grid'),(119,'valley'),(143,'road-mid'),(166,'road')]
city=[(530,'city'),(543,'horizon'),(552,'shore'),(562,'coast')]
earth=[(569,'curvature'),(580,'continent'),(593,'globe'),(604,'final')]
# Reuse the actual registered single-rim pullback for the last leg. Align intermediate source to its rim.
def globe_last(q):
 a,pa=samples['globe'];b,pb=samples['final'];z=ease(q)
 # Fit the actual planet rim and independently registered Florida location. The disk stays circular.
 def disk(im):
  grey=cv.cvtColor(im,cv.COLOR_BGR2GRAY);mask=(grey>30).astype('uint8')*255;contours,_=cv.findContours(mask,cv.RETR_EXTERNAL,cv.CHAIN_APPROX_NONE)
  pts=max(contours,key=cv.contourArea);(cx,cy),rr=cv.minEnclosingCircle(pts);return np.array([cx,cy]),rr
 if not hasattr(globe_last,'disks'):globe_last.disks=[disk(a),disk(b)]
 (ca,ra),(cb,rb)=globe_last.disks;rad=math.exp((1-z)*math.log(ra)+z*math.log(rb));center=(1-z)*ca+z*cb
 pro=[]
 for im,c,r in [(a,ca,ra),(b,cb,rb)]:
  k=rad/r;mat=np.float32([[k,0,center[0]-k*c[0]],[0,k,center[1]-k*c[1]]]);pro.append(cv.warpAffine(im,mat,(width,height),flags=cv.INTER_CUBIC,borderMode=cv.BORDER_REPLICATE))
 return cv.addWeighted(pro[0],1-z,pro[1],z,0)
from orbit_repair import OrbitRepair
from window_exit import WindowExit
from counter_join import CounterJoin
orbit_fix=OrbitRepair(plate,frame(604));exit_fix=WindowExit(plate);counter_fix=CounterJoin(frame)
cap.release();cap=cv.VideoCapture(str(source))
enc=sp.Popen(['ffmpeg','-v','error','-y','-f','rawvideo','-pix_fmt','bgr24','-s','1280x720','-r','24','-i','-','-an','-c:v','libx264','-preset','veryfast','-crf','16','-g','8','-threads','3','-pix_fmt','yuv420p','-movflags','+faststart',str(dest)],stdin=sp.PIPE)
for i in range(660):
 ok,im=cap.read();assert ok
 for points in [grid,city,earth]:
  for (a,x),(b,y) in zip(points,points[1:]):
   if a<=i<b:im=globe_last((i-a)/(b-a)) if x=='globe' else morph(x,y,(i-a)/(b-a));break
 if 562<=i<569:
  # Both native world plates share curvature. A short exposure-matched push carries one coast into focus.
  x=(i-562)/7;aa=samples['coast'][0];bb=samples['curvature'][0];q=ease(x);im=cv.addWeighted(aa,1-q,bb,q,0)
 if 417<=i<=448:im=counter_fix(i)
 if 507<i<530:im=exit_fix(i,im)
 if 580<=i<=624:im=orbit_fix(i)
 im=optic(im,i);enc.stdin.write(im.tobytes())
enc.stdin.close();assert enc.wait()==0;cap.release()
(W/'zoom-authoring.json').write_text(json.dumps({'registeredOrbit':[580,624],'registeredCounter':[417,448],'windowOcclusion':[508,529],'grid':grid,'city':city,'earth':earth,'landmarks':{k:v[1].tolist() for k,v in samples.items()},'fps':24,'frames':660},indent=2));print(dest)
