"""Rebuild the L r4 radio master from this source and the checksum-pinned L r4 MP4."""
import argparse
import json
import subprocess
import sys
from pathlib import Path
from tempfile import TemporaryDirectory

from extract_l_picture import build as extract_original
from mux import assemble
from render_intro import render

FILM = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(FILM))
from film import unpack


def encode_original(master, dest, first, count):
    subprocess.run([
        'ffmpeg', '-v', 'error', '-y', '-threads', '2', '-i', str(master),
        '-vf', f'trim=start_frame={first}:end_frame={first + count},settb=1/24000,setpts=N*1000',
        '-an', '-r', '24', '-fps_mode', 'cfr', '-c:v', 'libx264', '-threads', '3',
        '-crf', '14', '-preset', 'veryfast', '-pix_fmt', 'yuv420p',
        '-video_track_timescale', '24000', str(dest)
    ], check=True)


def build(master, output, chromium, work):
    stage = work / 'runtime'
    unpack(stage)
    registry = json.loads((stage / 'video.json').read_bytes())
    chapter = {**registry, 'units': registry['units'][:1], 'review':['unit-01']}
    # The radio covers the artboard until the handoff. Render both established
    # scene groups during the overlap, and only the visible group elsewhere.
    intro_entry = chapter['units'][0]['src']
    unit_path = stage / intro_entry
    previews = {}
    for view in ('head', 'lock', 'body'):
        preview = work / view
        unit_dest = preview / intro_entry
        unit_dest.parent.mkdir(parents=True)
        (preview / 'video.json').write_text(json.dumps(chapter))
        (preview / 'index.html').symlink_to(stage / 'index.html')
        for asset_dir in unit_path.parent.iterdir():
            if asset_dir.is_dir():
                (unit_dest.parent / asset_dir.name).symlink_to(asset_dir, target_is_directory=True)
        unit = json.loads(unit_path.read_bytes())
        unit['root']['children'] = [
            n for n in unit['root']['children'] if n['type'] != 'audio'
            and (view == 'lock' or (n['id'] == 'radio-radio-introduction') == (view == 'head'))
        ]
        unit_dest.write_text(json.dumps(unit))
        previews[view] = preview
    tail = work / 'original.mp4'
    extract_original(master, tail)
    parts = []
    # The new clock reaches every original shot two seconds earlier than L.
    for start, end, changed in [(0,360,True),(360,456,False),(456,696,True),(696,1242,False)]:
        if changed:
            for first in range(start, end, 24):
                path = work / f'picture-{first:04d}.mp4'
                last = min(end,first+24)
                view = 'head' if last <= 279 else 'body' if first >= 288 else 'lock'
                render(previews[view], path, chromium, first, last)
                parts.append(path)
        else:
            path = work / f'original-{start:04d}.mp4'
            encode_original(master,path,start+48,end-start)
            parts.append(path)
    listing = work / 'intro.ffconcat'
    listing.write_text(''.join(f"file '{path.name}'\n" for path in parts))
    head = work / 'head.mp4'
    subprocess.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',str(listing),
                    '-vf','settb=1/24000,setpts=N*1000','-r','24','-fps_mode','cfr',
                    '-an','-c:v','libx264','-threads','3','-crf','15','-preset','veryfast',
                    '-pix_fmt','yuv420p','-video_track_timescale','24000',str(head)],check=True)
    assemble(FILM,stage,head,tail,output,work)


if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('original',type=Path)
    parser.add_argument('output',type=Path)
    parser.add_argument('--chromium',required=True)
    args=parser.parse_args()
    with TemporaryDirectory() as directory:
        build(args.original.resolve(),args.output.resolve(),args.chromium,Path(directory))
