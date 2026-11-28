"""Render the locked Unit Two prefix using a served, unpacked one-unit runtime."""
import argparse,base64,json,math,subprocess,threading
from pathlib import Path
from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from functools import partial
from playwright.sync_api import sync_playwright
FPS=24
RETURN=571
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass

def run(root,out,chrome,review):
 out.parent.mkdir(parents=True,exist_ok=True)
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(root)))
 threading.Thread(target=server.serve_forever,daemon=True).start()
 try:
  with sync_playwright() as pw:
   browser=pw.chromium.launch(executable_path=str(chrome),args=['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--renderer-process-limit=1','--num-raster-threads=1','--disable-background-networking'])
   page=browser.new_page(viewport={'width':390 if review else 1280,'height':220 if review else 720},device_scale_factor=1)
   page.goto('http://127.0.0.1:'+str(server.server_address[1])+'/index.html')
   page.wait_for_function('window.filmPlayer?.ready',timeout=35000)
   page.eval_on_selector('#action',"""n=>n.style.display='none'""")
   cdp=page.context.new_cdp_session(page)
   if review:
    fs=[0,44,57,66,83,96,120,180,246,270,300,340,393,422,457,474,497,528,554,570,571,576,592]
    out.mkdir(exist_ok=True);stats={}
   else:
    fs=range(RETURN)
    cmd=['ffmpeg','-nostdin','-loglevel','error','-y','-f','image2pipe','-framerate','24','-c:v','mjpeg','-i','-','-an','-c:v','libx264','-preset','veryfast','-threads','3','-crf','12','-profile:v','high','-level:v','3.1','-pix_fmt','yuvj420p','-color_range','pc','-colorspace','bt470bg','-chroma_sample_location','center','-x264-params','repeat-headers=1:keyint=120:ref=1:bframes=2:scenecut=0','-video_track_timescale','24000','-movflags','+faststart',str(out)]
    enc=subprocess.Popen(cmd,stdin=subprocess.PIPE)
   try:
    for f in fs:
     page.evaluate("""async t=>{
        filmPlayer.seek(t);
        const imgs=[...document.images].filter(im=>im.src&&!im.complete);
        if(imgs.length) await Promise.all(imgs.map(im=>im.decode().catch(()=>{})));
        await new Promise(ok=>requestAnimationFrame(ok));
     }""",(f+.05)/FPS)
     if review:
      p=page.evaluate("""()=>{
          let take=id=>{let e=document.querySelector('[data-item="'+id+'"]');let r=e.getBoundingClientRect();return [r.x,r.y,r.width,r.height].map(v=>+v.toFixed(4))};
          return Object.fromEntries(['image-315','image-317','image-318','image-321','selected-interview','answer-case-1','image-331'].map(id=>[id,take(id)]))
        }""");stats[f]=p
     data=cdp.send('Page.captureScreenshot',{'format':'jpeg','quality':98,'optimizeForSpeed':True} if not review else {'format':'png'})
     buffer=base64.b64decode(data['data'])
     if review: (out/f'f{f:03}.png').write_bytes(buffer)
     else: enc.stdin.write(buffer)
    if review: (out/'bounds.json').write_text(json.dumps(stats,indent=2))
   finally:
    if not review:
     enc.stdin.close()
     if enc.wait()!=0:raise RuntimeError('Video encode failed')
    browser.close()
 finally:
  server.shutdown();server.server_close()
if __name__=='__main__':
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('film',type=Path);p.add_argument('output',type=Path);p.add_argument('--chromium',type=Path,required=True);p.add_argument('--review',action='store_true')
 a=p.parse_args();run(a.film,a.output,a.chromium,a.review)
