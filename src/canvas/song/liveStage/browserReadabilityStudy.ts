import previous from './browserHoldStudy';
import {validateScene} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v33';p.revision=1;
p.origin='v33 phone-readability repair of the browser hold. Source audio, words, camera and action cue timings preserved. Phone visual acceptance and logo montage pending.';
for(const o of p.objects){if(!o.id.startsWith('v32-browser-'))continue;
 const old=o.id;o.id=old.replace('v32-','v33-');o.kind=o.kind.replace('customization','readable');
 for(const s of p.scenes)s.objectIds=s.objectIds.map(id=>id===old?o.id:id);
 if(o.id.endsWith('-controls')){o.x=735;o.y=127;o.width=500;o.height=212;}
 if(o.id.endsWith('-inspection')){o.x=0;o.y=428;o.width=1280;o.height=292;}
 o.note='Phone-readability repair: large privacy switch and style swatches make install/block/edit consequences legible on the same physical screen. Separate control and inspector objects remain editable. Audio cues inherited; reading and moving review pending.';
}
export default validateScene(p);
