"""Capture Unit Four with the production renderer at native resolution and 24 fps."""
import argparse, asyncio, json, subprocess, sys
from pathlib import Path
from playwright.async_api import async_playwright

async def render_board(runtime, renderer, chromium, work, out):
    sys.path.insert(0,str(renderer.resolve()))
    import film,render
    project=json.loads((runtime/'video.json').read_bytes())
    entry=next(u for u in project['units'] if u['id']=='unit-04')
    unit=json.loads((runtime/entry['src']).read_bytes())
    async with async_playwright() as pw:
        with render.chapter_server(film.FilmHandler,runtime,project,entry) as url:
            items=await render.chapter(pw,str(chromium),url,work,round(unit['duration']*24))
    segments=work/'segments.ffconcat'
    segments.write_text('ffconcat version 1.0\n'+''.join(f"file '{p.resolve()}'\nduration {n/24:.12f}\n" for p,n in items))
    subprocess.run(['ffmpeg','-loglevel','error','-y','-f','concat','-safe','0','-i',segments,'-an','-c:v','copy','-movflags','+faststart',out],check=True)

if __name__=='__main__':
    pars=argparse.ArgumentParser(description=__doc__)
    for name in ('runtime','renderer','chromium','cache','output'):
        pars.add_argument(name,type=Path)
    a=pars.parse_args()
    asyncio.run(render_board(a.runtime.resolve(),a.renderer,a.chromium,a.cache.resolve(),a.output))
