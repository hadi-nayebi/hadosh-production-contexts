"""Render the editable M3 film. Requires Playwright/Chromium, ffmpeg and ffprobe.
Run: python render.py M3.mp4 --source path/to/M3 --cache path/to/checkpoints
"""
import argparse
import asyncio
import base64
import contextlib
import functools
import hashlib
import importlib.util
import json
import subprocess
import tempfile
import threading
import wave
from array import array
from http.server import ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

from playwright.async_api import async_playwright

FPS = 24
CHUNK = 64
SEEK = """async t => {
  filmPlayer.seek(t);
  const videos = [...document.querySelectorAll('video')].filter(v => v.offsetWidth && v.offsetHeight);
  await Promise.all(videos.map(async v => {
    if (v.seeking) {
      await new Promise(ok => {
        const ready = () => { v.removeEventListener('seeked', ready); ok(); };
        v.addEventListener('seeked', ready, {once:true});
        if (!v.seeking) ready();
      });
    }
    if (v.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      await new Promise(ok => v.addEventListener('loadeddata',ok,{once:true}));
    }
    // A cold compositor surface can still be empty after “seeked”. Copy the
    // actual decoded displayed frame into this chapter's video plane first.
    // The canvas inherits all scene transforms, masks, opacity, and stacking.
    let canvas = v.__captureSurface;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('aria-hidden','true');
      Object.assign(canvas.style, {position:'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none'});
      v.insertAdjacentElement('afterend',canvas);
      v.__captureSurface = canvas;
      v.style.visibility = 'hidden';
    }
    if (canvas.width !== v.videoWidth || canvas.height !== v.videoHeight) {
      canvas.width = v.videoWidth;
      canvas.height = v.videoHeight;
    }
    if (!canvas.width || !canvas.height) throw Error('Video has no decoded picture at '+t);
    canvas.getContext('2d',{alpha:false}).drawImage(v,0,0);
  }));
  await Promise.all([...document.images].filter(im => im.src && !im.complete).map(im => im.decode()));
  await new Promise(ok => requestAnimationFrame(() => requestAnimationFrame(ok)));
}"""

def probe(path):
    raw = subprocess.check_output(['ffprobe', '-v', 'error', '-show_streams', '-of', 'json', path])
    return json.loads(raw)['streams']

@contextlib.contextmanager
def chapter_server(handler, folder, project, entry):
    registry = json.dumps(dict(project, units=[entry], review=[entry['id']])).encode()

    class Handler(handler):
        def log_message(self, *args):
            pass

        def do_GET(self):
            if urlsplit(self.path).path != '/video.json':
                return super().do_GET()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(registry)))
            self.end_headers()
            self.wfile.write(registry)

        def copyfile(self, source, output):
            try:
                super().copyfile(source, output)
            except (BrokenPipeError, ConnectionResetError):
                pass  # Chromium closes preloaded media range requests as it seeks.

    with ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Handler, directory=str(folder))) as server:
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            yield f'http://127.0.0.1:{server.server_port}/index.html'
        finally:
            server.shutdown()
            thread.join()

def validate_ids(unit):
    seen = set()
    pending = [unit['root']]
    while pending:
        node = pending.pop()
        identifier = node.get('id')
        if not identifier or identifier in seen:
            raise ValueError(f"{unit['id']}: missing or duplicate node ID {identifier!r}")
        seen.add(identifier)
        pending.extend(node.get('children', []))

def audio_stems(unit, folder, frame_count):
    # M3 provides one full-chapter 24 kHz, mono PCM WAV per audio node.
    tracks = [node for node in unit['root']['children'] if node['type'] == 'audio']
    if len(tracks) != 2:
        raise ValueError(f"{unit['id']}: expected speech and music")
    streams = []
    for node in tracks:
        if node.get('gain', 1) != 1 or node.get('offset', 0) != 0 or node['time'] != [0, unit['duration']]:
            raise ValueError(f"{unit['id']}: unsupported audio timing or gain")
        src = folder / unit['assets'][node['asset']]['src']
        with wave.open(str(src), 'rb') as reader:
            if reader.getparams()[:4] != (1, 2, 24000, frame_count * 1000):
                raise ValueError(f'Unexpected stem format or duration in {src}')
            streams.append(array('h', reader.readframes(reader.getnframes())))
    return array('h', (max(-32768, min(32767, a+b)) for a,b in zip(*streams))).tobytes()

async def capture(pw, chromium, url, directory, start, end):
    browser = await pw.chromium.launch(executable_path=chromium, args=[
        '--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--renderer-process-limit=1',
        '--disable-accelerated-2d-canvas','--disable-renderer-backgrounding','--mute-audio'])
    try:
        page = await browser.new_page(viewport={'width':1280,'height':720}, device_scale_factor=1)
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        await page.goto(url, wait_until='domcontentloaded', timeout=25000)
        await page.wait_for_function("window.filmPlayer?.ready || document.querySelector('#message').textContent.length", timeout=30000)
        if not await page.evaluate('filmPlayer.ready'):
            raise ValueError(await page.locator('#message').inner_text())
        # HTML playback derives its live clock from audio. Offline capture explicitly
        # supplies every time and mixes those exact stems after the video is complete.
        await page.evaluate("""() => {
          document.querySelector('#action').style.display='none';
          for (const a of document.querySelectorAll('audio')) {
            let time=0;
            Object.defineProperty(a,'currentTime',{get:()=>time,set:v=>{time=v}});
          }
        }""")
        cdp = await page.context.new_cdp_session(page)
        for f in range(start, end):
            target = directory / f'{f:05}.jpg'
            if target.exists():
                continue
            await asyncio.wait_for(page.evaluate(SEEK, (f+.12)/FPS), timeout=10)
            shot = await asyncio.wait_for(cdp.send('Page.captureScreenshot',
                {'format':'jpeg','quality':94,'optimizeForSpeed':True}),timeout=10)
            if errors:
                raise ValueError(errors)
            temp = target.with_suffix('.part')
            temp.write_bytes(base64.b64decode(shot['data']))
            temp.replace(target)
    finally:
        await asyncio.wait_for(browser.close(), timeout=6)

async def chapter(pw, chromium, url, directory, total):
    directory.mkdir(exist_ok=True)
    segments = []
    for start in range(0, total, CHUNK):
        end = min(total, start+CHUNK)
        target = directory / f'{start:05}-{end:05}.mp4'
        if target.exists():
            try:
                valid = int(probe(target)[0]['nb_frames']) == end-start
            except (subprocess.CalledProcessError, KeyError, ValueError, IndexError):
                valid = False
            if valid:
                segments.append((target,end-start))
                continue
        for attempt in range(5):
            try:
                await asyncio.wait_for(capture(pw, chromium, url, directory, start, end), timeout=95)
                break
            except ValueError:
                raise
            except Exception as error:
                if attempt==4:
                    raise
                print(f'Resuming {directory.name} at {start} after {error!r}', flush=True)
        tmp = target.with_suffix('.writing.mp4')
        subprocess.run(['ffmpeg','-v','error','-y','-framerate',str(FPS),'-start_number',str(start),
            '-i',str(directory/'%05d.jpg'),'-frames:v',str(end-start),'-an','-c:v','libx264',
            '-threads','2','-preset','veryfast','-crf','16','-pix_fmt','yuv420p','-movflags','+faststart',tmp],check=True)
        if int(probe(tmp)[0]['nb_frames'])!=end-start:
            raise ValueError(tmp)
        tmp.replace(target)
        for frame in range(start,end):
            (directory/f'{frame:05}.jpg').unlink(missing_ok=True)
        segments.append((target,end-start))
        print(f'{directory.name}: {end}/{total}',flush=True)
    return segments

def combine(segments, audio, output, folder):
    concat = folder/'timeline.ffconcat'
    def quote(path):
        return "'" + str(path.resolve()).replace("'", "'\\''") + "'"
    concat.write_text('ffconcat version 1.0\n'+''.join(
        f'file {quote(path)}\nduration {n/FPS:.12f}\n' for path,n in segments))
    temp = output.with_name(output.stem+'.writing.mp4')
    subprocess.run(['ffmpeg','-v','error','-y','-f','concat','-safe','0','-i',concat,'-i',audio,
         '-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','160k','-ar','48000',
         '-movflags','+faststart',temp],check=True)
    video,sound=probe(temp); total=sum(n for p,n in segments)
    if (int(video['nb_frames']),video['r_frame_rate'],video['width'],video['height'])!=(total,'24/1',1280,720):
        raise ValueError(video)
    if max(abs(float(s['duration'])-total/FPS) for s in [video,sound])>.002:
        raise ValueError('Track duration disagrees with source')
    subprocess.run(['ffmpeg','-v','error','-xerror','-threads','2','-i',temp,'-f','null','-'],check=True)
    temp.replace(output)

async def main(args):
    spec=importlib.util.spec_from_file_location('m3_film',args.source/'film.py')
    module=importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    with tempfile.TemporaryDirectory() as stage, tempfile.TemporaryDirectory() as temporary:
        stage=Path(stage); temporary=Path(temporary)
        manifest=module.unpack(stage)
        project=json.loads((stage/'video.json').read_bytes())
        async with async_playwright() as pw:
            marker=await pw.chromium.launch(executable_path=args.chromium,args=['--no-sandbox'])
            settings=manifest['standaloneSHA256']+'|'+marker.version+'|'+hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
            await marker.close()
            cache=args.cache/hashlib.sha256(settings.encode()).hexdigest()
            cache.mkdir(parents=True,exist_ok=True)
            segments=[]
            audio=temporary/'mix.wav'
            with wave.open(str(audio),'wb') as writer:
                writer.setparams((1,2,24000,0,'NONE','not compressed'))
                for entry in project['units']:
                    path=stage/entry['src']
                    unit=json.loads(path.read_bytes())
                    validate_ids(unit)
                    frames=round(unit['duration']*FPS)
                    writer.writeframesraw(audio_stems(unit,path.parent,frames))
                    with chapter_server(module.FilmHandler,stage,project,entry) as url:
                        segments.extend(await chapter(pw,args.chromium,url,cache/entry['id'],frames))
            combine(segments,audio,args.output,temporary)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('output',type=Path)
    parser.add_argument('--source',type=Path,default=Path(__file__).resolve().parent)
    parser.add_argument('--cache',type=Path,default=Path('render-cache'))
    parser.add_argument('--chromium',help='Path to a Chromium executable. Defaults to Playwright Chromium.')
    asyncio.run(main(parser.parse_args()))
