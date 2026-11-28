"""Extract frames 1290–4072 of L r4 for mobile playback, copying every complete GOP."""
from argparse import ArgumentParser
import hashlib
from pathlib import Path
import subprocess
from tempfile import TemporaryDirectory

FPS=24
START=1290
IDR=1375
END=4073
MASTER_SHA='dd9c21a4438eb188f2b3b8275917fb6a2a0911fa7b9e7736b8dd343c7a33e324'


def ff(*args):
    subprocess.run(['ffmpeg','-nostdin','-hide_banner','-loglevel','error','-y',*map(str,args)],check=True)


def hashes(path):
    return [line.rsplit(',',1)[1].strip() for line in path.read_text().splitlines() if line.startswith('0,')]


def build(source, output):
    with source.open('rb') as handle:
        digest=hashlib.file_digest(handle,'sha256').hexdigest()
    if digest!=MASTER_SHA:raise ValueError('Input must be the reviewed L r4 master.')
    output.parent.mkdir(parents=True,exist_ok=True)
    with TemporaryDirectory(dir=output.parent) as tmp:
        w=Path(tmp)
        # Only 85 original predictive frames precede the next independently decodable frame.
        ff('-threads',3,'-ss',START/FPS,'-i',source,'-map','0:v:0','-an','-frames:v',IDR-START,
           '-c:v','libx264','-preset','veryfast','-crf',10,'-profile:v','high','-level:v','3.1',
           '-pix_fmt','yuvj420p','-color_range','pc','-colorspace','bt470bg',
           '-chroma_sample_location','center','-x264-params','repeat-headers=1:keyint=250:ref=1:bframes=2:scenecut=0',
           '-threads',3,'-video_track_timescale',12288,w/'head.mp4')
        ff('-i',w/'head.mp4','-map','0:v','-c','copy','-bsf:v','h264_mp4toannexb','-muxdelay',0,'-muxpreload',0,w/'head.ts')
        ff('-ss',f'{IDR/FPS:.6f}','-i',source,'-map','0:v','-an','-c:v','copy',
           '-bsf:v','h264_mp4toannexb','-mpegts_flags','+resend_headers','-muxdelay',0,'-muxpreload',0,w/'rest.ts')
        (w/'parts.ffcat').write_text(f'ffconcat version 1.0\nfile head.ts\nduration {(IDR-START)/FPS:.9f}\nfile rest.ts\n')
        ff('-f','concat','-safe',0,'-i',w/'parts.ffcat','-map','0:v','-c','copy',
           '-tag:v','avc1','-an','-video_track_timescale',12288,'-movflags','+faststart',w/'silent.mp4')
        ff('-threads',2,'-i',source,'-map','0:v','-an','-vf',
           f'trim=start_frame={START}:end_frame={END},setpts=PTS-STARTPTS','-threads',2,
           '-f','framehash','-hash','sha256',w/'reference.sha')
        ff('-threads',2,'-i',w/'silent.mp4','-map','0:v','-threads',2,
           '-f','framehash','-hash','sha256',w/'output.sha')
        original, result=hashes(w/'reference.sha'),hashes(w/'output.sha')
        boundary=IDR-START
        if len(result)!=END-START or result[boundary:]!=original[boundary:]:
            raise RuntimeError('Frame count or decoded original GOPs changed.')
        (w/'silent.mp4').replace(output)
        print(f'{boundary} recoded prefix frames; {len(result)-boundary} verified copied frames.')

if __name__=='__main__':
    p=ArgumentParser(description=__doc__)
    p.add_argument('source',type=Path);p.add_argument('output',type=Path)
    a=p.parse_args();build(a.source.resolve(),a.output.resolve())
