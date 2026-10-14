import type { SongProject } from "./model";
export function download(name: string, text: string, type = "application/json") {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function playbackHTML(p: SongProject, audioData = ""): string {
  const data = JSON.stringify({
    title: p.title,
    lines: p.lines,
    cues: p.cues,
    scenes: p.scenes,
    audioData,
  }).replace(/</g, "\\u003c");
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Canvas song playback</title><style>body{margin:0;background:#111827;color:#fff;font:18px system-ui}main{max-width:960px;margin:auto;padding:28px}#stage{min-height:55vh;border-radius:24px;padding:40px;display:grid;align-content:center;transition:background .3s}h2{font-size:clamp(30px,7vw,70px)}p{line-height:1.6}audio{width:100%;margin:24px 0}label{display:block;padding:16px;background:#243047;border-radius:12px}input{max-width:100%}</style><main><h1 id="title"></h1><div id="stage"><h2 id="scene"></h2><p id="detail"></p><p id="lyric"></p></div><audio id="audio" controls></audio><label>Attach the selected song audio <input id="file" type="file" accept="audio/*"></label><p>Browser-performed scene cards and lyrics. Press Play after attaching audio.</p></main><script>const p=${data};const a=document.getElementById('audio');document.getElementById('title').textContent=p.title;if(p.audioData)a.src=p.audioData;let url;document.getElementById('file').onchange=e=>{if(url)URL.revokeObjectURL(url);const f=e.target.files[0];if(f){url=URL.createObjectURL(f);a.src=url;}};function draw(){const c=p.cues.find(c=>a.currentTime>=c.start&&a.currentTime<c.end);const s=p.scenes.find(s=>s.cue===c?.line);document.getElementById('scene').textContent=s?.title||'Ready to play';document.getElementById('detail').textContent=s?.detail||'';document.getElementById('lyric').textContent=p.lines.find(l=>l.id===c?.line)?.text||'';document.getElementById('stage').style.background=s?.color||'#243047';}a.ontimeupdate=draw;a.onseeked=draw;draw();</script></html>`;
}
export function readDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(Error("Cannot read audio."));
    r.readAsDataURL(file);
  });
}
