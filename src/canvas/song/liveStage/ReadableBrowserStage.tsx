import LiveStage from './LiveStage';
import project from './browserReadabilityStudy';
export default function ReadableBrowserStage(){
 const raw=new URLSearchParams(window.location.search).get('frame');const f=raw===null?1690:Number(raw);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v33" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:1690} workspaceLabel="EXPERIMENTAL v33 · browser readability · visual acceptance pending"/>;
}
