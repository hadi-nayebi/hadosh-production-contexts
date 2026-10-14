import LiveStage from './LiveStage';
import project from './ownershipRepriseStudy';
export default function OwnershipRepriseStage(){
 const f=Number(new URLSearchParams(location.search).get('frame')??5756);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v37" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:5756} workspaceLabel="EXPERIMENTAL v37 · ownership reprise · visual acceptance pending"/>;
}
