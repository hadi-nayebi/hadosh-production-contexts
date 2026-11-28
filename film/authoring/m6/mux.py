"""Mux the checked picture, with the three original L chapter mixes after Unit One."""
from pathlib import Path
import argparse,json,sys,wave,subprocess
def assemble(film,runtime,head,tail,output,work):
    sys.path.insert(0,str(film.resolve()))
    from render import audio_stems, combine
    project=json.loads((runtime/'video.json').read_bytes())
    chapter_frames=[]
    audio=work/'mix.wav'
    with wave.open(str(audio),'wb') as out:
        out.setparams((1,2,24000,0,'NONE','not compressed'))
        for entry in project['units']:
            unit_path=runtime/entry['src']
            unit=json.loads(unit_path.read_bytes())
            frames=round(unit['duration']*24)
            chapter_frames.append(frames)
            out.writeframesraw(audio_stems(unit,unit_path.parent,frames))
    if chapter_frames!=[1242,1489,748,546]:
        raise ValueError(f'Unexpected chapter boundaries: {chapter_frames}')
    matched_tail=work/"l-tail-timescale.mp4"
    subprocess.run(["ffmpeg","-v","error","-y","-i",str(tail),"-map","0:v:0","-c:v","copy","-video_track_timescale","24000",str(matched_tail)],check=True)
    combine([(head,chapter_frames[0]),(matched_tail,sum(chapter_frames[1:]))],audio,output,work)
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    for k in ['film','runtime','head','tail','output','work']:p.add_argument(k,type=Path)
    args=p.parse_args();assemble(**vars(args))
