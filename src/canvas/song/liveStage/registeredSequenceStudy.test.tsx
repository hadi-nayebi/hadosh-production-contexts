import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {imagePose} from './views.mjs';
import previous from './cortexSequenceStudy';
import project from './registeredSequenceStudy';
import SceneArtwork from './SceneArtwork';
import {activeFoundationWord} from './FoundationWordLayer';
it('preserves recording, lyrics, every cut and untouched chapters',()=>{
 expect(project.source).toEqual(previous.source);
 expect(project.words).toEqual(previous.words);
 expect(project.arrangement).toEqual(previous.arrangement);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(project.scenes.slice(0,8)).toEqual(previous.scenes.slice(0,8));
 expect(project.scenes.slice(36)).toEqual(previous.scenes.slice(36));
});
it('uses registered views with editable projected content and no detached diagram hands',()=>{
 for(const s of project.scenes.slice(8,36)){
  expect(project.assets?.some(a=>a.id===s.views?.[0].assetId)).toBe(true);
  for(const id of s.objectIds){const o=project.objects.find(o=>o.id===id)!;expect(o.kind).not.toBe('story-browser-hand');expect(o.kind).not.toBe('story-browser-bench');if(o.contentPlane)expect(o.contentPlane?.corners).toHaveLength(4);}
  const frame=Math.floor((s.start+s.end)/2),html=renderToStaticMarkup(<SceneArtwork project={project} frame={frame}/>);
  expect(html).not.toContain('data-lyric-block=');
  expect(html).not.toContain('NaN');
  expect((html.match(/data-lyric-word=/g)||[]).length).toBe(activeFoundationWord(project,frame)?1:0);
 }
});

it('preserves relative motion when graphics are registered on a screen',()=>{
 for(const o of project.objects.filter(o=>o.contentPlane&&o.motion)){
  const id=o.id.replace(/^v29-\d+-/,'');const source=previous.objects.find(o=>o.id===id)!;
  for(const frame of [o.enterFrame,Math.floor((o.enterFrame+o.exitFrame)/2),o.exitFrame-1]){
   const actual=imagePose(project,o.id,frame,false),old=imagePose(previous,id,frame,false);
   expect(actual.x).toBeCloseTo(o.x+(old.x-source.x)*o.width/source.width);
   expect(actual.y).toBeCloseTo(o.y+(old.y-source.y)*o.height/source.height);
  }
 }
});
