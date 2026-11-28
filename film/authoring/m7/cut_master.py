"""Assemble the tighter cut from the reviewed L-radio master and the editable board."""
import argparse
import hashlib
import json
import subprocess
import sys
import wave
from pathlib import Path

PREVIOUS_SHA = '71172882e44a127a6afd7fc71814a411f450b047e14e948a9be5a4258cfb43ad'
FPS = 24
UNIT_TWO_START = 1242
# Independently decodable GOP boundaries in the verified previous master.
COPY_START = 2205
COPY_END = 3415
BOARD_START = 3479

def ff(*args):
    subprocess.run(['ffmpeg','-nostdin','-v','error','-y',*map(str,args)],check=True)

def copy_range(original,start,end,path):
    ff('-ss',f'{start/FPS:.8f}','-i',original,'-map','0:v:0','-an','-frames:v',end-start,
       '-c:v','copy','-video_track_timescale','24000',path)

def render_range(original,start,end,removed,path):
    criteria = [f'between(n,{start},{end-1})']
    for a,b in removed:
        criteria.append(f'not(between(n,{a},{b-1}))')
    # A balanced expression keeps libavfilter within its parser depth limit.
    while len(criteria)>1:
        criteria=[('('+criteria[i]+'*'+criteria[i+1]+')') if i+1<len(criteria)
                  else criteria[i] for i in range(0,len(criteria),2)]
    select=criteria[0]
    ff('-threads','2','-i',original,'-map','0:v','-an','-vf',
       f"select='{select}',settb=1/24000,setpts=N*1000",'-r',FPS,'-fps_mode','cfr',
       '-c:v','libx264','-preset','veryfast','-crf',12,'-profile:v','high','-level:v','3.1',
       '-threads',3,'-pix_fmt','yuvj420p','-color_range','pc','-video_track_timescale',24000,path)

def build(original,board,film_source,runtime,cut_map,work,output):
    with original.open('rb') as f:
        if hashlib.file_digest(f,'sha256').hexdigest()!=PREVIOUS_SHA:
            raise ValueError('Supply the original L-radio master named in the source README.')
    sys.path.insert(0,str(film_source.resolve()))
    from render import audio_stems,combine
    work.mkdir(parents=True,exist_ok=True)
    original_cuts=json.loads(cut_map.read_text())['pictureRemovedSourceIntervals']
    cuts=[(UNIT_TWO_START+a,UNIT_TWO_START+b) for a,b in original_cuts]
    if not cuts or any(a>=b for a,b in cuts) or any(b>c for (_,b),(c,_) in zip(cuts,cuts[1:])) or cuts[0][0]<UNIT_TWO_START or cuts[-1][1]>COPY_START:
        raise ValueError('Invalid ordered cut intervals')
    removed=sum(b-a for a,b in cuts)
    parts=[]
    for label,start,end,edit in [('opening',0,UNIT_TWO_START,False),
                                ('examples',UNIT_TWO_START,COPY_START,True),
                                ('camera-desk',COPY_START,COPY_END,False),
                                ('desk-ending',COPY_END,BOARD_START,True)]:
        path=work/(label+'.mp4')
        if edit:render_range(original,start,end,cuts if label=='examples' else [],path)
        else:copy_range(original,start,end,path)
        parts.append((path,end-start-(removed if label=='examples' else 0)))
    board_part=work/'board.mp4'
    ff('-i',board,'-map','0:v:0','-an','-c:v','copy','-video_track_timescale',24000,board_part)
    parts.append((board_part,546))
    project=json.loads((runtime/'video.json').read_bytes())
    counts=[]
    wav=work/'mix.wav'
    with wave.open(str(wav),'wb') as audio:
        audio.setparams((1,2,24000,0,'NONE','not compressed'))
        for entry in project['units']:
            p=runtime/entry['src']; data=json.loads(p.read_bytes())
            n=round(data['duration']*FPS);counts.append(n)
            audio.writeframesraw(audio_stems(data,p.parent,n))
    if counts!=[1242,1489-removed,748,546]:raise ValueError(counts)
    combine(parts,wav,output,work)

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    for name in ['original','board','film_source','runtime','cut_map','work','output']:
        p.add_argument(name,type=Path)
    build(**vars(p.parse_args()))
