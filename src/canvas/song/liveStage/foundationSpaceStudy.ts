import previous from './foundationDepthStudy';
import {validateScene,type Setting} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v23';p.revision=1;
p.origin='v23 four-shot space foundation: real sphere rotation and depth-buffered capsules; preserves source and musical cut schedule. Agent blocking, not approved style.';
const cameras:NonNullable<Setting["spatialCamera"]>[]=[{position:[0,1.2,4.4],target:[0,0,0],fov:39},{position:[3,.6,2.3],target:[1.05,.2,.15],fov:40},{position:[1.7,.9,-1.7],target:[.3,0,0],fov:45},{position:[1.9,1.8,1.4],target:[.5,.15,.1],fov:39}];
for(let i=0;i<4;i++){p.scenes[4+i].spatialCamera=cameras[i];p.scenes[4+i].description+=' v23 shared rotating Earth; physical capsule approach/contact and growing surface response. Camera changes establish travel, approach, reverse orbital response, then computer/window arrival. Motion review pending.';}
export default validateScene(p);
