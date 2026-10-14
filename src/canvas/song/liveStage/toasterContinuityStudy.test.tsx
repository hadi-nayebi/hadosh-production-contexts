import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './registeredSequenceStudy';
import project from './toasterContinuityStudy';
import SceneArtwork from './SceneArtwork';
import {activeFoundationWord} from './FoundationWordLayer';
it('preserves the audio, words, cuts and preceding chapters',()=>{
 expect(project.source).toEqual(previous.source);
 expect(project.words).toEqual(previous.words);
 expect(project.arrangement).toEqual(previous.arrangement);
 expect(project.scenes.slice(0,56)).toEqual(previous.scenes.slice(0,56));
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
});
it('renders every changed shot with retained assets and only the active lyric word',()=>{
 for(const s of project.scenes.slice(56,74)){
  expect(s.spatialCamera).toBeUndefined();
  for(const v of s.views||[])expect(project.assets?.some(a=>a.id===v.assetId)).toBe(true);
  for(const id of s.objectIds)expect(project.objects.some(o=>o.id===id)).toBe(true);
  const frame=Math.floor((s.start+s.end)/2),html=renderToStaticMarkup(<SceneArtwork project={project} frame={frame}/>);
  expect(html).not.toContain('NaN');expect(html).not.toContain('data-lyric-block=');
  expect((html.match(/data-lyric-word=/g)||[]).length).toBe(activeFoundationWord(project,frame)?1:0);
 }
});
