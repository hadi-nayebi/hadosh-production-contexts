import LiveStage from './LiveStage';
import project from './illustratedToasterStudy';
export default function IllustratedToasterStage(){
 const f=Number(new URLSearchParams(location.search).get('frame')??5106);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v36" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:5106} workspaceLabel="EXPERIMENTAL v36 · illustrated toaster contact · verification pending"/>;
}
