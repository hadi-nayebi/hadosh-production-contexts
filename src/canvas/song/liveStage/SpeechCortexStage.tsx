import LiveStage from './LiveStage';
import project from './cortexSpeechStudy';
export default function SpeechCortexStage(){
 const raw=new URLSearchParams(window.location.search).get('frame');const f=raw===null?3345:Number(raw);
 return <LiveStage defaultProject={project} storageKey="canvas-foundation-v34" initialFrame={Number.isInteger(f)&&f>=0&&f<6804?f:3345} workspaceLabel="EXPERIMENTAL v34 · speech builds cortex · visual acceptance pending"/>;
}
