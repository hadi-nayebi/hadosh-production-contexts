import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './illustratedToasterStudy';
import project from './ownershipRepriseStudy';
import SceneArtwork from './SceneArtwork';
import {wordJourneyCoverage} from './wordJourneyCoverage';
it('retains the recording, cut evidence, all lyric cues and earlier chapters',()=>{
 expect(project.source).toEqual(previous.source);expect(project.words).toEqual(previous.words);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(project.scenes.slice(0,62)).toEqual(previous.scenes.slice(0,62));
 expect(wordJourneyCoverage(project)).toEqual(wordJourneyCoverage(previous));
});
it('keeps the final reprise in the illustrated world with no detached diagram hands',()=>{
 for(const i of [62,64,65,66,67,68,69,70,71,72,73]){
  const s=project.scenes[i];expect(s.spatialCamera).toBeUndefined();expect(s.views?.length).toBeGreaterThan(0);
  const objects=project.objects.filter(o=>s.objectIds.includes(o.id));
  expect(objects.some(o=>o.kind==='story-browser-hand'||o.kind==='story-feed-hand')).toBe(false);
  const html=renderToStaticMarkup(<SceneArtwork project={project} frame={Math.floor((s.start+s.end)/2)}/>);
  expect(html).not.toContain('NaN');expect(html).not.toContain('data-lyric-block=');
  if(i===65){expect(html).toContain('Character and physical screen');expect(html).toContain('matrix3d(');}
  if([62,69,70,71].includes(i)){
   expect(html).toContain(`data-scene-object="v37-${i}-v27-recovered:s08-person"`);
   expect(html).toContain('headset-character-chair-v1.png');
   expect((html.match(/data-scene-object="[^"]*neural-node-/g)||[]).length).toBe(30);
  }
 }
});
it('retains every mature cortex node through model change and the final return',()=>{
 for(const i of [62,69,70,71]){
  const s=project.scenes[i],nodes=project.objects.filter(o=>s.objectIds.includes(o.id)&&o.id.includes('neural-node-'));
  expect(nodes).toHaveLength(30);
  for(const node of nodes){expect(node.enterFrame).toBe(s.start);expect(node.exitFrame).toBe(s.end);expect(node.hidden).not.toBe(true);}
 }
});
it('does not reconnect the model during the outgoing owner hold',()=>{
 for(const frame of [6318,6397]){
  const html=renderToStaticMarkup(<SceneArtwork project={project} frame={frame}/>);
  expect(html).toContain('Disconnected');expect(html).not.toContain('Model B');
 }
});
