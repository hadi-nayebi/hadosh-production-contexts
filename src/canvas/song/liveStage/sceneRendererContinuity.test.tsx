import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './fullWordMotionStudy';
import current from './illustratedToasterStudy';
import SceneArtwork from './SceneArtwork';
it('keeps all unchanged browser and phone shots identical when the document is versioned',()=>{
 for(const scene of previous.scenes.slice(8,36)){
  const frame=Math.floor((scene.start+scene.end)/2);
  const before=renderToStaticMarkup(<SceneArtwork project={previous} frame={frame}/>);
  const after=renderToStaticMarkup(<SceneArtwork project={current} frame={frame}/>);
  expect(after).toBe(before);
 }
});
it('retains registered screen rendering for a newly named full-song document',()=>{
 const renamed={...current,documentId:'full-song-foundation-new-draft'};
 for(const frame of [1300,1500,2400,2900]){
  const html=renderToStaticMarkup(<SceneArtwork project={renamed} frame={frame}/>);
  expect(html).toContain('Character and physical screen');
  expect(html).toContain('matrix3d(');
 }
});
