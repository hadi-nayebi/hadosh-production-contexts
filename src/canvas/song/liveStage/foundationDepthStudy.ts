import previous from './foundationReachStudy';
import {validateScene} from './scene.mjs';
const p=structuredClone(previous);
p.documentId='full-song-foundation-v22';p.revision=2;
p.origin='v22 renderer comparison: identical v21 geometry, source and timing with standard depth-buffered Three.js rendering. Diagnostic only; no style approval.';
p.scenes[59].spatialCamera={position:[1.4,1.85,1.45],target:[.23,1.28,.5],fov:32};
export default validateScene(p);
