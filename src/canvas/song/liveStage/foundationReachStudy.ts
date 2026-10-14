import previous from './foundationSpatialStudy';
import {validateScene} from './scene.mjs';
const p=structuredClone(previous);
p.documentId='full-song-foundation-v21';p.revision=1;
p.origin='v20 with shorter arm segments and reachable work placement. Bench-mounted power socket replaces an unreachable rear-wall socket. Original source and cut clock preserved. Visual acceptance pending.';
for(const o of p.objects.filter(o=>o.spatial)){
 o.suggestion='reach-v21';
 if(['toaster','bread','dial'].includes(o.spatial!.role))o.spatial!.position[2]=.3;
 if(o.spatial!.role==='outlet')o.spatial!.position[2]=.925;
 o.note+=' v21: reachable bench layout; arm segments0.36m; bread/toaster/dial moved together toward the owner. Power socket has a support to the bench. Contact choreography remains source-clocked. This is agent blocking, not approved style.';
}
p.scenes[57].spatialCamera={position:[1.8,2.3,1.0],target:[0,1.5,.38],fov:38};
p.scenes[58].spatialCamera={position:[1.6,1.75,1.55],target:[.58,1.25,.35],fov:33};
p.scenes[59].spatialCamera={position:[-.8,1.8,1.75],target:[.12,1.3,.38],fov:33};
for(const s of p.scenes.slice(56,64))s.description+=' v21: shorter, reachable arm and near-side appliance; bench-mounted power connection. Full action review pending.';
export default validateScene(p);
