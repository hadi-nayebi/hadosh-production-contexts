import previous from './fullWordMotionStudy';
import retained from './toasterContinuityStudy';
import {validateScene} from './scene.mjs';

const p=structuredClone(previous);
p.documentId='full-song-foundation-v36';p.revision=1;
p.origin='v36 illustrated toaster experiment on v35. Existing recording, word routes and cut schedule preserved. Sleeve attachment, insertion and action continuity require visual verification; not creatively approved.';
for(const asset of retained.assets||[])if(!p.assets!.some(a=>a.id===asset.id))p.assets!.push(structuredClone(asset));
const sourceObjects=new Map(retained.objects.map(o=>[o.id,o]));
const currentObjects=new Map(p.objects.map(o=>[o.id,o]));
for(const index of [56,57,58,59,60,61,63]){
 const scene=p.scenes[index],source=retained.scenes[index];
 const lyrics=scene.objectIds.filter(id=>['lyric-anchor','lyric-block'].includes(currentObjects.get(id)?.kind||''));
 const visualIds=source.objectIds.filter(id=>!['lyric-anchor','lyric-block'].includes(sourceObjects.get(id)?.kind||''));
 for(const id of visualIds)if(!p.objects.some(o=>o.id===id))p.objects.push(structuredClone(sourceObjects.get(id)!));
 delete scene.spatialCamera;
 scene.views=structuredClone(source.views);scene.defaultView=source.defaultView;scene.viewCues=[];
 scene.camera=structuredClone(source.camera);scene.approachCamera=true;scene.boundaryTransitionFrames=0;
 scene.objectIds=[...visualIds,...lyrics];scene.title=source.title;
 scene.description=`v36 agent proposal: ${source.title}. Illustrated action states restore the retained workshop and character. Preserve source lyric and cut evidence. Bread lowering is animated; plug and dial plates currently show end states only. Verify sleeve attachment, slot occlusion, bread count and object positions across cuts. No creative acceptance.`;
}
// Hold the sleeve attachment fixed while lowering the distal arm. This is a
// deformation study; it must not be mistaken for a finished articulated rig.
const arm=p.objects.find(o=>o.id==='v30-bread-arm')!;
const point=(x:number,y:number)=>({x:x*1280/1672,y:y*1280/1672});
arm.limb!.pinnedSeam=[point(810,357),point(762,439)];
arm.limb!.degrees=20;
arm.label='Bread lowering · fixed sleeve seam';
arm.note='Affine deformation fixes the sleeve-edge line while lowering the hand. Verify limb contour, bread distortion and toaster insertion. Plug and dial remain unanimated states. No physical-action acceptance.';
export default validateScene(p);
