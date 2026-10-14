import {expect,it} from 'vitest';
import previous from './fullWordMotionStudy';
import project from './illustratedToasterStudy';
import {pinnedSeamMatrix} from './pinnedSeam';
import {validateScene} from './scene.mjs';
it('preserves recording, cues, word treatment and all non-toaster scenes',()=>{
 expect(project.source).toEqual(previous.source);expect(project.words).toEqual(previous.words);
 expect(project.lyricBoundaryPolicy).toEqual(previous.lyricBoundaryPolicy);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 for(let i=0;i<project.scenes.length;i++)if(![56,57,58,59,60,61,63].includes(i))expect(project.scenes[i]).toEqual(previous.scenes[i]);
 for(const o of previous.objects.filter(o=>o.kind==='lyric-anchor'))expect(project.objects.find(n=>n.id===o.id)).toEqual(o);
});
it('keeps the entire sleeve seam stationary throughout the lowering action',()=>{
 const seam=project.objects.find(o=>o.id==='v30-bread-arm')!.limb!.pinnedSeam!;
 for(let angle=0;angle<=20;angle+=.5){
  const [a,b,c,d,e,f]=pinnedSeamMatrix(seam,angle);
  for(const t of [0,.25,.5,.75,1]){
   const x=seam[0].x+(seam[1].x-seam[0].x)*t,y=seam[0].y+(seam[1].y-seam[0].y)*t;
   expect(a*x+c*y+e).toBeCloseTo(x,8);expect(b*x+d*y+f).toBeCloseTo(y,8);
  }
 }
});
it('rejects degenerate or invalid attachment metadata',()=>{
 for(const seam of [[],[{x:0,y:0},{x:0,y:0}],[{x:-1,y:0},{x:10,y:10}],null]){
  const draft=structuredClone(project);(draft.objects.find(o=>o.id==='v30-bread-arm')!.limb as any).pinnedSeam=seam;
  expect(()=>validateScene(draft)).toThrow();
 }
});
