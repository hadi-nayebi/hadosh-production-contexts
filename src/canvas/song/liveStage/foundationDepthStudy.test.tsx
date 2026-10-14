import {expect,it} from 'vitest';
import original from './foundationReachStudy';
import depth from './foundationDepthStudy';
import {validateScene} from './scene.mjs';
it('isolates the renderer study while preserving source, editable props and every cut',()=>{
 for(const key of ['source','words','assets','composition','objects','arrangement'] as const)expect(depth[key]).toEqual(original[key]);
 expect(depth.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(original.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(depth.scenes.filter((_,i)=>i!==59)).toEqual(original.scenes.filter((_,i)=>i!==59));
 expect(original.scenes[59].spatialCamera!.position).toEqual([-.8,1.8,1.75]);
 expect(validateScene(JSON.parse(JSON.stringify(depth)))).toEqual(depth);
});
