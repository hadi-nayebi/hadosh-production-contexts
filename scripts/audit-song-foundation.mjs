import {createServer} from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
// Read-only source/media audit. Writes only the explicitly requested report.
const [modulePath,outputPath]=process.argv.slice(2);
if(!modulePath||!outputPath)throw Error('Usage: node scripts/audit-song-foundation.mjs /src/canvas/song/liveStage/cortexSpeechStudy.ts /absolute/report.json');
const root=process.cwd(),server=await createServer({server:{middlewareMode:true},appType:'custom'});
let project,words,metrics,gate;
try{
 project=(await server.ssrLoadModule(modulePath)).default;
 words=(await server.ssrLoadModule('/src/canvas/song/liveStage/wordJourneyCoverage.ts')).wordJourneyCoverage(project);
 metrics=(await server.ssrLoadModule('/src/canvas/song/liveStage/foundationMetrics.ts')).foundationMetrics(project);
 gate=(await server.ssrLoadModule('/src/canvas/song/liveStage/foundationGate.ts')).foundationGate(project);
}finally{await server.close();}
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const assets=project.assets.map(a=>{
 const file=path.resolve(root,'public',a.path.replace(/^\//,''));
 if(!file.startsWith(path.resolve(root,'public')+path.sep))throw Error('Asset outside public root');
 const exists=fs.existsSync(file),sha256=exists?hash(file):null;
 return {id:a.id,path:a.path,exists,bytes:exists?fs.statSync(file).size:null,expectedSha256:a.sha256??null,sha256,hashMatches:a.sha256?sha256===a.sha256:null,libraryId:a.libraryId??null};
});
const audio=path.resolve(root,'public/previews/l1-original.mp3');
const report={generatedAt:new Date().toISOString(),documentId:project.documentId,revision:project.revision,sourceModule:modulePath,scope:'Source/render-treatment coverage and local asset integrity. Not continuous playback, listening, physical staging or creative approval.',metrics,wordCoverage:words,gate,audio:{path:'/previews/l1-original.mp3',exists:fs.existsSync(audio),sha256:fs.existsSync(audio)?hash(audio):null,expectedSha256:project.source.sha256},assets,scenes:project.scenes.map(s=>({id:s.id,title:s.title,start:s.start,end:s.end,seconds:(s.end-s.start)/project.composition.fps,href:`http://127.0.0.1:5186/songs/live-${project.documentId.replace(/^full-song-/,'')}?frame=${s.start}`,boundary:s.boundaryIntent??null,viewAssetIds:(s.views??[]).map(v=>v.assetId),words:words.rows.filter(w=>w.sceneIds.includes(s.id)).map(w=>({wordId:w.wordId,status:w.status})),creativeReview:'unreviewed'}))};
fs.mkdirSync(path.dirname(outputPath),{recursive:true});fs.writeFileSync(outputPath,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({documentId:report.documentId,metrics,wordCoverage:{...words,rows:undefined},assets:{total:assets.length,missing:assets.filter(a=>!a.exists).map(a=>a.id),mismatched:assets.filter(a=>a.hashMatches===false).map(a=>a.id),unhashed:assets.filter(a=>a.hashMatches===null).map(a=>a.id)},audioMatches:report.audio.sha256===project.source.sha256,detailsUnlocked:gate.detailsUnlocked},null,2));
