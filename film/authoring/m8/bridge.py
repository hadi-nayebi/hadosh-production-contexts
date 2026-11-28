"""Capture the final editable table pose for the departing face of the slate.

Run after the edited Unit Three is staged with the L-tight player and before
rendering the first 64-frame Unit Four chunk. The library image is the only
asset on that departing face, and the original turn is unmodified.
"""
import argparse,asyncio,hashlib,json,sys
from io import BytesIO
from pathlib import Path
from PIL import Image
from playwright.async_api import async_playwright

async def bridge(stage, tools, chromium, out):
    sys.path.insert(0,str(tools.resolve()));import render,film
    project=json.loads((stage/'video.json').read_bytes())
    unit=next(e for e in project['units'] if e['id']=='unit-03')
    u3=json.loads((stage/unit['src']).read_bytes())
    target=out/'units/04';target.mkdir(parents=True,exist_ok=True)
    with render.chapter_server(film.FilmHandler,stage.resolve(),project,unit) as url:
        async with async_playwright() as pw:
            b=await pw.chromium.launch(executable_path=str(chromium),args=['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--disable-accelerated-2d-canvas'])
            page=await b.new_page(viewport={'width':1280,'height':720},device_scale_factor=1)
            await page.goto(url); await page.wait_for_function('window.filmPlayer?.ready',timeout=60000)
            await page.evaluate("document.querySelector('#action').style.display='none'")
            await page.evaluate(render.SEEK,u3['duration']-(1-.12)/24)
            await page.wait_for_timeout(180)
            snap=await page.screenshot(type='png')
            await b.close()
    Image.open(BytesIO(snap)).convert('RGB').save(target/'departing-table.webp',lossless=True,method=4)
    u4=json.loads((stage/'units/04/unit.json').read_bytes())
    pose=next(n for n in u4['root']['children'] if n['id']=='library')
    mounted=pose['asset']
    assert mounted=='matched-room'
    assert u4['assets'][mounted]['src']=='../03/approved/approved-library.webp'
    u4['assets'][mounted]={'src':'departing-table.webp','type':'image','size':[1280,720]}
    (target/'unit.json').write_text(json.dumps(u4,ensure_ascii=False,separators=(',',':')))
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    for n in ('stage','renderer','chromium','out'):p.add_argument(n,type=Path)
    a=p.parse_args();asyncio.run(bridge(a.stage,a.renderer,a.chromium,a.out))
