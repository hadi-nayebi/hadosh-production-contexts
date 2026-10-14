import previous from './foundationSpaceStudy';
import {validateScene} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v24';p.revision=1;
p.origin='v24 capsule leading-surface contact repair. Same four camera views and source/cut clock as v23; surface contact replaces center-to-surface timing. No creative approval.';
for(const s of p.scenes.slice(5,8))s.description+=' v24: inward capsule tip reaches unit sphere at the assigned beat; shrinking remains surface anchored. Default geometry verification only; edited offsets require renewed contact review.';
export default validateScene(p);
