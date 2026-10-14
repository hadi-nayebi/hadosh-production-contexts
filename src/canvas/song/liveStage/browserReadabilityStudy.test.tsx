import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import before from './browserHoldStudy';
import project from './browserReadabilityStudy';
import SceneArtwork from './SceneArtwork';
import {validateScene} from './scene.mjs';
it('preserves audio, lyric timing, camera hold and earlier version objects',()=>{
 expect(project.source).toEqual(before.source);expect(project.words).toEqual(before.words);
 expect(project.scenes.map(s=>[s.start,s.end,s.camera,s.boundaryIntent])).toEqual(before.scenes.map(s=>[s.start,s.end,s.camera,s.boundaryIntent]));
 expect(before.objects.find(o=>o.id==='v32-browser-controls')?.width).toBe(286);
 const changed=structuredClone(project);changed.objects.find(o=>o.id==='v33-browser-controls')!.x+=10;
 expect(()=>validateScene(changed)).not.toThrow();
});
it('performs cumulative blocking then inspection then a visible page change',()=>{
 const render=(frame:number)=>renderToStaticMarkup(<SceneArtwork project={project} frame={frame}/>);
 expect(render(1475)).not.toContain('data-control-state="installed"');
 expect(render(1476)).toContain('data-control-state="installed"');
 expect(render(1587)).not.toContain('Style editor');expect(render(1588)).toContain('Style editor');
 expect(render(1677)).toContain('fill="#a6b3a2"');expect(render(1678)).not.toContain('fill="#a6b3a2"');
 expect(render(1690)).toContain('Tracking');expect(render(1690)).toContain('Blocked');
});
