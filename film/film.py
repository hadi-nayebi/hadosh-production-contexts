"""Serve or unpack the exact editable film, or make a one-file offline edition."""
import argparse,base64,hashlib,io,json,mimetypes,shutil,zipfile
from pathlib import Path,PurePosixPath
from tempfile import TemporaryDirectory
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
ROOT=Path(__file__).resolve().parent

class FilmHandler(SimpleHTTPRequestHandler):
    """Honor single byte ranges used by HTML media elements when seeking."""
    def send_head(self):
        self.remaining=None
        header=self.headers.get('Range','')
        if not header.startswith('bytes=') or ',' in header:
            return super().send_head()
        path=Path(self.translate_path(self.path))
        if not path.is_file():return super().send_head()
        size=path.stat().st_size
        try:
            left,right=header[6:].split('-',1)
            if left:
                start=int(left);end=int(right) if right else size-1
            else:
                start=max(0,size-int(right));end=size-1
            end=min(end,size-1)
            if not (0<=start<=end<size):raise ValueError
        except ValueError:
            self.send_response(416);self.send_header('Content-Range',f'bytes */{size}');self.send_header('Content-Length','0');self.end_headers();return None
        source=path.open('rb');source.seek(start);self.remaining=end-start+1
        self.send_response(206);self.send_header('Content-Type',self.guess_type(str(path)));self.send_header('Content-Length',str(self.remaining));self.send_header('Content-Range',f'bytes {start}-{end}/{size}');self.end_headers();return source
    def end_headers(self):
        self.send_header('Accept-Ranges','bytes');super().end_headers()
    def copyfile(self,source,output):
        if self.remaining is None:return super().copyfile(source,output)
        remaining=self.remaining
        while remaining:
            data=source.read(min(65536,remaining))
            if not data:break
            output.write(data);remaining-=len(data)

def unpack(dest):
    manifest=json.loads((ROOT/'source-manifest.json').read_text())
    for pack in manifest['packs']:
        raw=b''.join((ROOT/part).read_bytes() for part in (pack.get('parts') or [pack['path']]))
        if hashlib.sha256(raw).hexdigest()!=pack['sha256']:raise ValueError('Damaged asset archive: '+pack['path'])
        with zipfile.ZipFile(io.BytesIO(raw)) as archive:
            for entry in archive.infolist():
                rel=PurePosixPath(entry.filename)
                if rel.is_absolute() or '..' in rel.parts:raise ValueError('Invalid asset path')
                dst=dest/str(rel);dst.parent.mkdir(parents=True,exist_ok=True)
                with archive.open(entry) as inp,dst.open('wb') as out:shutil.copyfileobj(inp,out)
    for name in manifest['loose']:
        target=dest/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ROOT/name,target)
    for name,sig in manifest['files'].items():
        if hashlib.sha256((dest/name).read_bytes()).hexdigest()!=sig:raise ValueError('Damaged source: '+name)
    return manifest

def pack_single(dest,out,manifest):
    files={}
    for key in manifest['files']:
        if key=='index.html':continue
        f=dest/key
        files[key]=[mimetypes.guess_type(f.name)[0] or 'application/octet-stream',base64.b64encode(f.read_bytes()).decode('ascii')]
    html=(dest/'index.html').read_text();marker='<script>\n';point=html.index(marker)
    block='<script type="application/x-film-files">'+json.dumps(files,separators=(',',':'),ensure_ascii=True)+'</script>\n'
    with out.open('x',encoding='utf-8') as stream:stream.write(html[:point]+block+html[point:])

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__);g=parser.add_mutually_exclusive_group();g.add_argument('--unpack',type=Path);g.add_argument('--standalone',type=Path);parser.add_argument('--port',type=int,default=8000);parser.add_argument('--serve-directory',type=Path);args=parser.parse_args()
    if args.serve_directory:
        ThreadingHTTPServer(('127.0.0.1',args.port),partial(FilmHandler,directory=str(args.serve_directory))).serve_forever();raise SystemExit
    if args.unpack:
        args.unpack.mkdir(exist_ok=False,parents=True);unpack(args.unpack)
    else:
        with TemporaryDirectory() as t:
            dest=Path(t);manifest=unpack(dest)
            if args.standalone:pack_single(dest,args.standalone,manifest)
            else:
                print(f'Open http://127.0.0.1:{args.port}/',flush=True)
                ThreadingHTTPServer(('127.0.0.1',args.port),partial(FilmHandler,directory=t)).serve_forever()
