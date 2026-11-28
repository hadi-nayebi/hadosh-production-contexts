"""Splice fixed-camera scenes into the reviewed 24 fps L-radio-tight master."""
import argparse
import hashlib
import json
import subprocess
from pathlib import Path

SOURCE_SHA256 = '9a48f891f1732bae3cccc0cdba327188211af403e31bcd0032122528bd85cd36'
FPS=24
EXAMPLES=1242
ZOOM=1813
NEXT_KEY=1843
TABLE=2473
BOARD=3221
END=3767

def ff(*args):
    subprocess.run(['ffmpeg','-nostdin','-v','error','-y',*map(str,args)],check=True)

def info(path):
    return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-of','json',str(path)]))['streams']

def normalized(path,out):
    ff('-i',path,'-map','0:v:0','-c:v','copy','-an','-video_track_timescale',24000,out)

def copied(source,start,end,out):
    ff('-threads',2,'-ss',f'{start/FPS:.9f}','-i',source,'-map','0:v:0',
       '-frames:v',end-start,'-an','-c:v','copy','-video_track_timescale',24000,out)

def mux(source,examples,table,board,work,output):
    with source.open('rb') as f:
        if hashlib.file_digest(f,'sha256').hexdigest()!=SOURCE_SHA256:
            raise ValueError('The supplied input is not the reviewed L-radio-tight master.')
    work.mkdir(parents=True,exist_ok=True)
    parts=[]
    def clip(name,start,end,changed=None):
        out=work/(name+'.mp4')
        if changed:normalized(changed,out)
        else:copied(source,start,end,out)
        parts.append((out,end-start))
    clip('opening',0,EXAMPLES)
    clip('examples',EXAMPLES,ZOOM,examples)
    # Recode only the original predictive frames before the first random-access point.
    pre=work/'zoom-head.mp4'
    ff('-threads',2,'-ss',f'{ZOOM/FPS:.9f}','-i',source,'-map','0:v:0','-frames:v',NEXT_KEY-ZOOM,
       '-an','-c:v','libx264','-preset','veryfast','-threads',2,'-crf',8,'-profile:v','high',
       '-level:v','3.1','-pix_fmt','yuvj420p','-color_range','pc','-video_track_timescale',24000,pre)
    parts.append((pre,NEXT_KEY-ZOOM))
    clip('zoom',NEXT_KEY,TABLE)
    clip('table',TABLE,BOARD,table)
    board_frames=int(info(board)[0]['nb_frames'])
    clip('board-entry',BOARD,BOARD+board_frames,board)
    if board_frames < END-BOARD:
        clip('board-original',BOARD+board_frames,END)
    concat=work/'picture.ffconcat'
    for p,n in parts:
        v=info(p)[0]
        if (int(v['nb_frames']),v['width'],v['height'],v['r_frame_rate'])!=(n,1280,720,'24/1'):
            raise ValueError((p,n,v))
    concat.write_text('ffconcat version 1.0\n'+''.join(
        f"file '{p.name}'\nduration {n/FPS:.12f}\n" for p,n in parts))
    draft=output.with_name(output.stem+'.writing.mp4')
    ff('-f','concat','-safe',0,'-i',concat,'-i',source,'-map','0:v:0','-map','1:a:0',
       '-c','copy','-video_track_timescale',24000,'-movflags','+faststart',draft)
    v,a=info(draft)
    if int(v['nb_frames'])!=END or abs(float(v['duration'])-END/FPS)>.001 or abs(float(a['duration'])-END/FPS)>.002:
        raise ValueError('Unexpected final frame count or stream duration')
    ff('-xerror','-threads',2,'-i',draft,'-f','null','-')
    draft.replace(output)

if __name__=='__main__':
    ap=argparse.ArgumentParser(description=__doc__)
    for k in ['source','examples','table','board','work','output']:
        ap.add_argument(k,type=Path)
    mux(**vars(ap.parse_args()))
