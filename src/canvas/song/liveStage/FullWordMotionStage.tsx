import LiveStage from './LiveStage';
import project from './fullWordMotionStudy';
export default function FullWordMotionStage(){
 const raw=new URLSearchParams(window.location.search).get('frame');const f=raw===null?1500:Number(raw);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v35" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:1500} workspaceLabel="EXPERIMENTAL v35 · full-song word blocking · visual acceptance pending"/>;
}
