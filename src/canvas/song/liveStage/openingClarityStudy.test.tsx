import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './registeredSequenceStudy';
import project from './openingClarityStudy';
import SceneArtwork from './SceneArtwork';
import {activeFoundationWord} from './FoundationWordLayer';
it('preserves recording, all song words and cuts, and later chapters',()=>{
 expect(project.source).toEqual(previous.source);expect(project.words).toEqual(previous.words);expect(project.arrangement).toEqual(previous.arrangement);
 expect(project.scenes.slice(8)).toEqual(previous.scenes.slice(8));
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
});
it('keeps editorial words separate from sung lyrics and displays only one at a time',()=>{
 const labels=project.objects.filter(o=>o.id.startsWith('v31-')&&o.kind==='text');
 for(let f=354;f<724;f++){
  expect(labels.filter(o=>f>=o.enterFrame&&f<o.exitFrame)).toHaveLength(1);
  expect(activeFoundationWord(project,f)).toBeNull();
 }
});
it('removes detached hand and pills while retaining earlier consequences',()=>{
 for(const s of project.scenes.slice(0,8))expect(s.objectIds.some(id=>id==='v13-window-grip'||id.startsWith('v13-capsule-'))).toBe(false);
 const html=renderToStaticMarkup(<SceneArtwork project={project} frame={710}/>);
 for(const kind of ['electricity','transistors','computers'])expect(html).toContain(`data-earth-consequence="${kind}"`);
 expect(html).not.toContain('data-lyric-block=');
});
