import LiveStage from './LiveStage';
import project from './openingClarityStudy';
export default function OpeningCandidateStage(){
 const raw=new URLSearchParams(window.location.search).get('frame');const f=raw===null?480:Number(raw);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v31" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:480} workspaceLabel="EXPERIMENTAL v31 · opening clarity · visual acceptance pending"/>;
}
