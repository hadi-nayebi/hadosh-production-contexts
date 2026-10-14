import previous from './foundationUpgradeStudy';
import retained from './cortex-recovery-source-v9-r3.json';
import {validateScene, type SceneObject, type Setting} from './scene.mjs';

// Recover the actual saved r3 artwork and component edits, not a reconstruction
// from the older source-module default. Keep the measured foundation cut clock.
const p=structuredClone(previous);
p.documentId='full-song-foundation-v27';
p.revision=1;
p.origin=`v27 restores the character and owned cortex removed by v16. Recovery source ${retained.sourceDocument} r${retained.sourceRevision}, SHA256 ${retained.sourceSnapshotSha256}. Existing source, words and cut evidence preserved. Recovery and cut-to-action alignment require visual review; no creative acceptance.`;
const originals=retained.objects as unknown as SceneObject[];
const originalIds=new Set(originals.map(o=>o.id));
const prefix=(id:string)=>originalIds.has(id)?`v27-recovered:${id}`:id;
function rename(value:unknown):unknown {
  if(typeof value==='string')return prefix(value);
  if(Array.isArray(value))return value.map(rename);
  if(value && typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,rename(v)]));
  return value;
}
const objects=rename(structuredClone(originals)) as SceneObject[];
const byId=new Map(objects.map(o=>[o.id,o]));
const cortexIds=originals.filter(o=>o.id==='owned-cortex'||o.parentId==='owned-cortex').map(o=>prefix(o.id));
const sourceScenes=retained.scenes as unknown as Setting[];
for(const shot of p.scenes.filter(s=>s.start>=3240 && s.end<=5000)){
  // Maximum overlap chooses a retained composition; timing changes are explicit
  // extensions at the shot edges. Internal action clocks remain source-based.
  const source=sourceScenes.reduce((best,s)=>{
    const overlap=(x:Setting)=>Math.max(0,Math.min(shot.end,x.end)-Math.max(shot.start,x.start));
    return overlap(s)>overlap(best)?s:best;
  },sourceScenes[0]);
  const lyrics=shot.objectIds.filter(id=>p.objects.find(o=>o.id===id)?.kind==='lyric-block');
  const ids=source.objectIds.filter(id=>originalIds.has(id)).map(prefix);
  const wide=source.views?.some(v=>v.assetId==='headset-workshop-cleanplate-v1');
  if(wide)ids.push(...cortexIds,prefix('headset-seated-character'));
  shot.objectIds=[...new Set(ids),...lyrics];
  shot.views=structuredClone(source.views);
  shot.defaultView=source.defaultView;
  shot.viewCues=structuredClone(source.viewCues);
  shot.camera=(source.camera??[]).map(k=>({...k,frame:Math.max(shot.start,Math.min(shot.end-1,k.frame))})).filter((k,i,a)=>i===0||k.frame>a[i-1].frame);
  delete shot.spatialCamera;
  shot.title=`Cortex recovery · ${source.title}`;
  shot.description=`Recovery of ${source.id} from saved v9 r3 (${source.start}–${source.end}). ${source.description} Foundation cut ${shot.start}–${shot.end} unchanged. Composition selected by interval overlap; original internal action clocks retained. Adjacent repeated compositions and lyric/action alignment remain unverified. This recovery is not a completed scene-sequence pass.`;
  for(const id of ids){
    const o=byId.get(id)!;
    // Preserve cumulative growth: never move a cortex entrance earlier.
    if(!cortexIds.includes(id) && o.enterFrame!==undefined && o.enterFrame<=source.start)
      o.enterFrame=Math.min(o.enterFrame,shot.start);
    if(o.exitFrame!==undefined && o.exitFrame>=source.end)o.exitFrame=Math.max(o.exitFrame,shot.end);
  }
}
for(const o of objects){
  if(cortexIds.includes(o.id) && o.exitFrame===4980)o.exitFrame=5000;
  o.note=`Recovered ${o.id.replace('v27-recovered:','')} from saved v9 r3; ${o.note||''}`;
}
const used=new Set(p.scenes.flatMap(s=>s.objectIds));
// Parent groups must survive even if a composition only lists their children.
for(let pass=0;pass<4;pass++)for(const o of objects)if(used.has(o.id)&&o.parentId)used.add(o.parentId);
const captions=p.objects.filter(o=>o.kind==='lyric-block');
p.objects=[...p.objects.filter(o=>o.kind!=='lyric-block'&&used.has(o.id)),...objects.filter(o=>used.has(o.id)),...captions];
const assets=new Map(p.assets!.map(a=>[a.id,a]));
for(const asset of retained.assets)if(!assets.has(asset.id))assets.set(asset.id,asset);
p.assets=[...assets.values()];
export default validateScene(p);
