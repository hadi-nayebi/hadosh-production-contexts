"""Render the changed scenes and rebuild the fixed-camera cut from the preceding master."""
import argparse
import asyncio
import json
import subprocess
import sys
from pathlib import Path
from tempfile import TemporaryDirectory
from playwright.async_api import async_playwright
from assemble_master import mux
from render_examples import run as render_examples

SOURCE = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(SOURCE))
import film
import render


async def render_shot(runtime, project, unit, frames, chromium, work, destination):
    entry = next(e for e in project['units'] if e['id'] == unit)
    cache = work / unit
    async with async_playwright() as pw:
        with render.chapter_server(film.FilmHandler, runtime, project, entry) as url:
            parts = await render.chapter(pw, str(chromium), url, cache, frames)
    listing = work / (unit+'.ffconcat')
    listing.write_text('ffconcat version 1.0\n' + ''.join(
        f"file '{p.relative_to(work)}'\nduration {n / 24:.12f}\n" for p,n in parts))
    subprocess.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',str(listing),
                    '-an','-c:v','copy','-movflags','+faststart',str(destination)],check=True)


def build(previous, output, chromium, work):
    runtime = work / 'runtime'
    film.unpack(runtime)
    project = json.loads((runtime / 'video.json').read_bytes())
    entry = next(e for e in project['units'] if e['id']=='unit-02')
    isolated = work / 'example-stage'
    isolated.mkdir()
    (isolated / 'video.json').write_text(json.dumps({**project,'units':[entry],'review':[entry['id']]}))
    (isolated / 'units').symlink_to(runtime / 'units',target_is_directory=True)
    (isolated / 'index.html').symlink_to(runtime / 'index.html')
    examples = work / 'examples.mp4'
    table = work / 'table.mp4'
    turn = work / 'turn.mp4'
    render_examples(isolated, examples, chromium, False)
    asyncio.run(render_shot(runtime,project,'unit-03',748,chromium,work,table))
    asyncio.run(render_shot(runtime,project,'unit-04',64,chromium,work,turn))
    mux(previous,examples,table,turn,work/'mux',output)


if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('previous',type=Path)
    parser.add_argument('output',type=Path)
    parser.add_argument('--chromium',required=True,type=Path)
    args=parser.parse_args()
    with TemporaryDirectory() as directory:
        build(args.previous.resolve(),args.output.resolve(),args.chromium.resolve(),Path(directory))
