import {createServer} from 'vite';
import {bundle} from '@remotion/bundler';
import {openBrowser,selectComposition,renderStill} from '@remotion/renderer';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const [modulePath,outputPath,workPath,audioPath,shotList]=process.argv.slice(2);
const selected=shotList?new Set(shotList.split(',').map(Number)):null;
if(selected&&[...selected].some(n=>!Number.isInteger(n)||n<1))throw Error('Shot list must be comma-separated positive integers.');
if(!modulePath||![outputPath,workPath,audioPath].every(v=>v&&path.isAbsolute(v)))
 throw Error('Usage: node scripts/render-foundation-review.mjs /src/.../study.ts /absolute/output /absolute/work /absolute/excerpt.wav');
const root=process.cwd(),hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
// A fresh work directory prevents stale bundles or asset links being reused.
if(fs.existsSync(workPath))throw Error('Choose a new work directory; existing render evidence is never overwritten.');
if(fs.existsSync(path.join(outputPath,'manifest.json')))throw Error('Choose a new output directory; a review manifest already exists.');
fs.mkdirSync(workPath,{recursive:true});fs.mkdirSync(outputPath,{recursive:true});
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
let project,timing;
try{
 project=(await server.ssrLoadModule(modulePath)).default;
 timing=(await server.ssrLoadModule('/src/canvas/song/liveStage/foundation-word-timing.json')).default;
}finally{await server.close();}
if(project.source.sha256!==timing.sourceSha256)throw Error('Word timing does not match the source recording.');
if(selected&&[...selected].some(n=>n>project.scenes.length))throw Error('Selected shot is outside this project.');
const sourceAudio=path.join(root,'public/previews/l1-original.mp3');
if(hash(sourceAudio)!==project.source.sha256)throw Error('Source audio hash mismatch.');
for(const asset of project.assets){
 const file=path.resolve(root,'public',asset.path.replace(/^\//,''));
 if(!file.startsWith(path.resolve(root,'public')+path.sep)||!asset.sha256||hash(file)!==asset.sha256)throw Error(`Unverified asset ${asset.id}`);
}
const empty=path.join(workPath,'empty-public');fs.mkdirSync(empty);
fs.writeFileSync(path.join(outputPath,'project.json'),JSON.stringify(project,null,2));
const serveUrl=await bundle({entryPoint:path.join(root,'src/canvas/song/liveStage/Composition.tsx'),publicDir:empty,outDir:path.join(workPath,'bundle'),enableCaching:false});
const link=(source,dest)=>{fs.mkdirSync(path.dirname(dest),{recursive:true});try{fs.linkSync(source,dest);}catch(error){if(error.code!=='EXDEV')throw error;fs.copyFileSync(source,dest);}};
for(const asset of project.assets)link(path.join(root,'public',asset.path),path.join(serveUrl,'public',asset.path));
link(audioPath,path.join(serveUrl,'public/excerpt.wav'));
const browserExecutable=process.env.CHROMIUM_EXECUTABLE||'/opt/google/chrome/chrome';
const browser=await openBrowser('chrome',{browserExecutable,chromiumOptions:{gl:'swangle'}});
const warnings=[];
const opts={serveUrl,inputProps:{project},browserExecutable,puppeteerInstance:browser,chromiumOptions:{gl:'swangle'},timeoutInMilliseconds:60000,onBrowserLog:log=>{warnings.push(log);}};
const rows=[],manifest={documentId:project.documentId,revision:project.revision,sourceModule:modulePath,sourceAudioSha256:project.source.sha256,renderAudioSha256:hash(audioPath),generatedAt:new Date().toISOString(),selectedShots:selected?[...selected]:null,scope:'One midpoint per selected segment (all segments if no selection). Not motion, complete audio playback, semantic approval or a proof that each boundary is a meaningful scene change.',rows};
try{
 const composition={...await selectComposition({...opts,id:'BrowserLiveScene'}),width:854,height:480};
 for(const [i,scene] of project.scenes.entries()){
  if(selected&&!selected.has(i+1))continue;
  const frame=Math.floor((scene.start+scene.end)/2),file=`shot-${String(i+1).padStart(2,'0')}.jpg`;
  await renderStill({...opts,composition,frame,imageFormat:'jpeg',jpegQuality:85,output:path.join(outputPath,file)});
  const words=timing.words.filter(w=>w.startFrame<scene.end&&w.endFrame>scene.start).map(w=>project.words.find(p=>p.id===w.wordId)?.text||'');
  rows.push({number:i+1,id:scene.id,title:scene.title,start:scene.start,end:scene.end,frame,words:words.join(' '),file,sha256:hash(path.join(outputPath,file)),href:`http://127.0.0.1:5186/songs/live-${project.documentId.replace(/^full-song-/,'')}?frame=${frame}`,review:'pending'});
  fs.writeFileSync(path.join(outputPath,'manifest.json'),JSON.stringify(manifest,null,2));
  console.log(`Rendered ${i+1}/${project.scenes.length} frame ${frame}`);
 }
}finally{
 fs.writeFileSync(path.join(outputPath,'browser-log.json'),JSON.stringify(warnings,null,2));
 await browser.close({silent:true});
}
