"""Retain the original electron analogy, then play one physical/cognitive comparison.

Input is the reviewed M3 Unit Two JSON and the 364-frame optical camera map.
The window, cable and coastal glints are registered to the retimed photograph.
"""
import argparse,bisect,json,math
from pathlib import Path
import numpy as np
from scipy.interpolate import PchipInterpolator,CubicHermiteSpline
FPS=24
OLD_ENTRY=57.971666666666664
LOCAL_ENTRY=758/FPS
DURATION=1122/FPS
CAMERA_FRAMES=364
def to_new(f): return round(OLD_ENTRY+f/FPS,9)
def sample(track,t,fallback):
 if track is None:return fallback
 if isinstance(track,(int,float)):return track
 if t<=track[0][0]:return track[0][1]
 if t>=track[-1][0]:return track[-1][1]
 i=bisect.bisect_left([p[0] for p in track],t);a,b=track[i-1],track[i]
 r=(t-a[0])/(b[0]-a[0]);mode=b[2] if len(b)>2 else 'smooth'
 q=r if mode=='linear' else (float(r>=1) if mode=='hold' else r*r*(3-2*r))
 return a[1]+(b[1]-a[1])*q
def walk(node):
 yield node
 for child in node.get('children',[]):yield from walk(child)

def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('original',type=Path);p.add_argument('map',type=Path);p.add_argument('output',type=Path);args=p.parse_args()
 u=json.loads(args.original.read_bytes());m=json.loads(args.map.read_bytes())
 frames=m['outputToSource'];assert len(frames)==CAMERA_FRAMES and np.all(np.diff(frames)>0)
 crop=m.get('opticalScale',[1.0]*len(frames));assert len(crop)==len(frames)
 cxy=m.get('opticalCenter',[.72,.62]);cx,cy=cxy[0]*1000,cxy[1]*562.5
 oldmap=np.asarray(u['visualTimeline'])
 # Small early rack zoom is a single shot. Interpolate in actual viewer time
 # through its internal camera poses. Hold only the actual reading stops.
 n=next(n for n in walk(u['root']) if n['id']=='group-2')
 for attr in ('scale','x','y'):
  old=n['tracks'][attr]
  vx=np.asarray([p[0] for p in old]);sx=np.interp(vx,oldmap[:,1],oldmap[:,0]);sy=np.asarray([p[1] for p in old]);sy=np.log(sy) if attr=='scale' else sy
  rate=PchipInterpolator(sx,sy).derivative()(sx);rate[[0,-1]]=0
  curve=CubicHermiteSpline(sx,sy,rate);times=np.unique(np.r_[sx,np.arange(math.ceil(sx[0]*FPS),math.floor(sx[-1]*FPS)+1)/FPS])
  out=curve(times);out=np.exp(out) if attr=='scale' else out
  n['tracks'][attr]=[[round(float(np.interp(t,oldmap[:,0],oldmap[:,1])),9),round(float(v),7),'linear'] for t,v in zip(times,out)]
 # Remove explanatory panels and obsolete invisible branches. Only the working
 # industrial mechanism and the continuous widening picture accompany the line.
 drop={'valley-0120-0166','retreat-0488-0502','industry-opening-state','industry-margin','tested-scheduling-result','m1-evidence-steam','m1-evidence-motor','m1-evidence-math','m1-evidence-compute','two-schedules-same-jobs'}
 u['root']['children']=[n for n in u['root']['children'] if n['id'] not in drop]
 nodes={n['id']:n for n in walk(u['root'])}
 camera=nodes['blade-through-orbit'];camera['time']=[OLD_ENTRY,to_new(CAMERA_FRAMES)]
 u['duration']=DURATION
 u['visualTimeline']=[p for p in u['visualTimeline'] if p[0]<LOCAL_ENTRY and p[1]<OLD_ENTRY]+[[LOCAL_ENTRY,OLD_ENTRY],[DURATION,to_new(CAMERA_FRAMES)]]
 for k in ['m1-speech','m1-music']:nodes[k]['time']=[0,DURATION]
 u['audioCues']['L17-physical']=79.855-41.25;u['audioCues']['L17-cognitive']=83.805-41.25
 # Keep a short warmth-to-sand handoff using the same final grain coordinates
 # on the settled earth and first desk frame.
 for key in ('m1-orbit-leather-grain','orbit-to-leather'):
  n=nodes[key];offset=to_new(CAMERA_FRAMES)-85.47
  n['time']=[round(x+offset,9) for x in n['time']]
  for prop,v in n['tracks'].items():
   if isinstance(v,list):n['tracks'][prop]=[[round(f+offset,9),*rest] for f,*rest in v]
 for key in ('toaster-power-indicator','chassis-lip-to-grid-feeder','destination-kitchen-pane-reflection','coastal-light-through-curvature','pylon-to-valley-junction','distant-cooling-tower-exposure'):
  n=nodes[key];tracks=n['tracks'];a,b=n['time'];first=max(0,bisect.bisect_left(frames,(a-OLD_ENTRY)*FPS-1e-5));end=min(len(frames),bisect.bisect_left(frames,(b-OLD_ENTRY)*FPS-1e-5))
  if end<=first:
   u['root']['children'].remove(n);continue
  out={k:[] for k in tracks};n['time']=[to_new(first),to_new(end)]
  out.update((k,[]) for k in ('x','y','scale'))
  for f in range(first,end):
   t=OLD_ENTRY+frames[f]/FPS
   for prop in out:
    base={'x':n['box'][0],'y':n['box'][1],'scale':1,'opacity':1,'angle':0}[prop];v=sample(tracks.get(prop),t,base)
    if prop in ('x','y'):
     dim=0 if prop=='x' else 1
     origin=n.get('origin',[0,0])[dim]*n['box'][2+dim];cen=(cx,cy)[dim]
     v=(v+origin-cen)*crop[f]+cen-origin
    if prop=='scale':v*=crop[f]
    out[prop].append([to_new(f),round(v,6),'linear'])
  n['tracks']=out
 u.pop('industrialMechanism',None)
 u['cameraPath']={'fps':24,'playbackFrames':CAMERA_FRAMES,'sourceEdition':'M3','sourceFrames':660,'startsAtLocalFrame':758,'frameMap':'authoring/m4/camera-map.json'}
 args.output.parent.mkdir(exist_ok=True,parents=True);args.output.write_text(json.dumps(u,ensure_ascii=False,separators=(',',':')))
if __name__=='__main__':main()
