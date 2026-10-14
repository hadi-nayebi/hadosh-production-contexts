import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './openingClarityStudy';
import project from './browserHoldStudy';
import SceneArtwork from './SceneArtwork';
import {validateScene} from './scene.mjs';
import {foundationMetrics} from './foundationMetrics';
it('preserves source and schedule while distinguishing two holds from cuts',()=>{
 expect(project.source).toEqual(previous.source);expect(project.words).toEqual(previous.words);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(foundationMetrics(project).declaredHolds).toBe(2);
 for(const s of project.scenes.slice(16,19)){expect(s.camera?.map(({frame,...pose})=>pose)).toEqual([{zoom:1.65,x:.68,y:.4}]);expect(s.views?.[0].assetId).toBe('ai-monitor-ots-v1');}
});
it('keeps cumulative controls across internal boundaries',()=>{
 const render=(frame:number)=>renderToStaticMarkup(<SceneArtwork project={project} frame={frame}/>);
 expect(render(1475)).not.toContain('data-control-state="installed"');
 for(const frame of [1490,1521,1600,1610,1690])expect(render(frame)).toContain('data-control-state="installed"');
 expect(render(1570)).not.toContain('Inspector');expect(render(1600)).toContain('Inspector');expect(render(1690)).toContain('theme: your-colors;');
});

it('allows controls to move within the physical screen without changing other components',()=>{
 const moved=structuredClone(project);const controls=moved.objects.find(o=>o.id==='v32-browser-controls')!;
 expect(controls.x).toBe(930);expect(controls.width).toBe(286);controls.x+=10;
 expect(()=>validateScene(moved)).not.toThrow();
 expect(moved.objects.find(o=>o.id==='v32-browser-shell')).toEqual(project.objects.find(o=>o.id==='v32-browser-shell'));
});
