"""Render Unit One silent at the master resolution from the runnable HTML package."""
import argparse,base64,functools,json,subprocess,threading
from pathlib import Path
from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from playwright.sync_api import sync_playwright
def render(folder,dest,chromium,start,end):
 class Handler(SimpleHTTPRequestHandler):
  def log_message(self,*a):pass
 http=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Handler,directory=str(folder)))
 threading.Thread(target=http.serve_forever,daemon=True).start()
 with sync_playwright() as pw:
  b=pw.chromium.launch(executable_path=chromium,args=['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-zygote','--renderer-process-limit=1','--num-raster-threads=1','--disable-accelerated-2d-canvas'])
  p=b.new_page(viewport={'width':1280,'height':720},device_scale_factor=1)
  p.goto(f'http://127.0.0.1:{http.server_port}',wait_until='domcontentloaded')
  p.wait_for_function("window.filmPlayer?.ready || document.querySelector('#message').textContent",timeout=60000)
  assert p.evaluate('filmPlayer.ready'),p.locator('#message').inner_text()
  p.evaluate("""() => {document.querySelector('#action').style.display='none';
   for(const a of document.querySelectorAll('audio')) {let t=0;Object.defineProperty(a,'currentTime',{get:()=>t,set:v=>{t=v}});}
  }""")
  cdp=p.context.new_cdp_session(p)
  dest.parent.mkdir(parents=True,exist_ok=True)
  enc=subprocess.Popen(['ffmpeg','-loglevel','error','-y','-f','image2pipe','-framerate','24','-vcodec','mjpeg','-i','-','-an','-c:v','libx264','-threads','2','-preset','veryfast','-crf','16','-pix_fmt','yuv420p','-movflags','+faststart',str(dest)],stdin=subprocess.PIPE)
  try:
   for f in range(start,end):
    p.evaluate("""async t=>{filmPlayer.seek(t);await Promise.race([Promise.all([...document.images].filter(i=>i.src&&!i.complete).map(i=>i.decode())),new Promise(r=>setTimeout(r,350))]); await Promise.race([new Promise(r=>requestAnimationFrame(r)),new Promise(r=>setTimeout(r,70))])}""",(f+.12)/24)
    im=cdp.send('Page.captureScreenshot',{'format':'jpeg','quality':94,'optimizeForSpeed':True})
    enc.stdin.write(base64.b64decode(im['data']))
    if (f-start)%24==0: print(f,flush=True)
  finally:
   enc.stdin.close();rc=enc.wait();b.close()
  if rc:raise RuntimeError('ffmpeg exit '+str(rc))
if __name__=='__main__':
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('folder',type=Path);p.add_argument('output',type=Path);p.add_argument('chromium')
 p.add_argument('--start',type=int,default=0);p.add_argument('--end',type=int,default=1242);a=p.parse_args()
 render(a.folder,a.output,a.chromium,a.start,a.end)
