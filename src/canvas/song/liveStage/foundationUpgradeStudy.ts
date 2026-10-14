import previous from './foundationSurfaceStudy';
import {validateScene} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v25';p.revision=1;
p.origin='v25 distinct upgrade consequences: power lights shared geographic sites; switches connect those sites; computer windows operate at the connected sites. Source and beat/cut clocks unchanged. Foundation only; no acceptance.';
const descriptions=['Power contact lights cities on the rotating surface.','Switch contact grows connections between those same lit cities.','Computer contact opens active windows on the connected sites.'];
for(let i=0;i<3;i++){
 p.scenes[5+i].description+=' v25: '+descriptions[i]+' Existing cuts and physical contact are retained; incoming/outgoing continuity still needs review.';
 const prop=p.objects.find(o=>o.id===`v13-capability-${['power','switch','computer'][i]}`)!;
 prop.note+=' v25 performed consequence: '+descriptions[i]+' Hide/show and source-clock interval are editable. Anchors are shared with previous upgrades; geometric appearance remains rough.';
}
export default validateScene(p);
