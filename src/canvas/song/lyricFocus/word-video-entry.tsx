import {Composition,registerRoot} from 'remotion';
import {WordVideoRemotion} from './WordVideoRemotion';
import performances from './v0Performance.json';
import sources from './v0Candidates.json';
import type {Annotation} from './audioAnnotation';
const source=sources[0];
function Root(){return <Composition id="WordPreview" component={WordVideoRemotion} fps={60} width={1280} height={720}
 durationInFrames={Math.ceil(source.decodedDuration*60)}
 defaultProps={{annotation:performances[0].annotation as Annotation,audioUrl:new URL(source.audioUrl,'http://127.0.0.1:5187').href}}
 calculateMetadata={({props})=>({durationInFrames:Math.ceil(props.annotation.duration*60)})}/>;}
registerRoot(Root);
