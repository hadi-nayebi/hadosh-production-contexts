import LiveStage from './LiveStage';
import project from './browserHoldStudy';
export default function BrowserCandidateStage(){
 const raw=new URLSearchParams(window.location.search).get('frame');const f=raw===null?1690:Number(raw);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v32" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:1690} workspaceLabel="EXPERIMENTAL v32 · browser customization hold · visual acceptance pending"/>;
}
