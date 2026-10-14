import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import project from './cortexSequenceStudy';
import SceneArtwork from './SceneArtwork';
import timing from './foundation-word-timing.json';
import {activeFoundationWord} from './FoundationWordLayer';
it('provides every original word with a positive, non-overlapping interval',()=>{
 expect(timing.words.map(w=>w.wordId)).toEqual(project.words.map(w=>w.id));
 for(const [i,w] of timing.words.entries()){
  expect(w.endFrame).toBeGreaterThan(w.startFrame);
  if(i)expect(w.startFrame).toBeGreaterThanOrEqual(timing.words[i-1].endFrame);
  expect(activeFoundationWord(project,w.startFrame)?.wordId).toBe(w.wordId);
 }
});
it('renders one word without a subtitle plate in a saved foundation draft',()=>{
 for(const frame of [43,65,150,850,2450,3370,3450,4364]){
  const html=renderToStaticMarkup(<SceneArtwork project={project} frame={frame}/>);
  expect(html).not.toContain('data-lyric-block=');
  const active=activeFoundationWord(project,frame);
  expect((html.match(/data-lyric-word=/g)||[]).length).toBe(active?1:0);
 }
});
it('does not guess alignment for a different recording',()=>{
 expect(activeFoundationWord({...project,source:{...project.source,sha256:'changed'}},3370)).toBeNull();
});
