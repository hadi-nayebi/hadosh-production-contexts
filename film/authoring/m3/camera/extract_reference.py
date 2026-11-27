from pathlib import Path
import base64,hashlib,json,re,sys
s=Path(sys.argv[1]).read_bytes()
if hashlib.sha256(s).hexdigest()!='e97950f47f36584ce0535bf7ffd9a7c6628ac3b46238c1fe9f31f5e3d8a350f8':
    raise ValueError('Expected the verified L r4 standalone player')
d=json.loads(re.search(rb'<script type="application/x-film-files">(.*?)</script>',s,re.S).group(1))
Path(sys.argv[2]).write_bytes(base64.b64decode(d['units/02/camera-pass.mp4'][1]))
