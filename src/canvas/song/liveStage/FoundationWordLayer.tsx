import {cameraAt} from './camera.mjs';
import {cortexSpeechPose} from './cortexSpeechPose';
import {createContext} from 'react';
import timing from './foundation-word-timing.json';
import {imagePose} from './views.mjs';
import type {Scene} from './scene.mjs';
export const SuppressPhraseBlocks=createContext(false);
export function activeFoundationWord(project:Scene,frame:number){
 if(project.source.sha256!==timing.sourceSha256)return null;
 const cue=timing.words.find(w=>frame>=w.startFrame&&frame<w.endFrame);
 if(!cue)return null;
 const word=project.words.find(w=>w.id===cue.wordId);
 return word?{...cue,text:word.text,phraseId:word.phraseId}:null;
}
export default function FoundationWordLayer({project,frame}:{project:Scene;frame:number}){
 const word=activeFoundationWord(project,frame);
 if(!word)return null;
 const block=project.objects.find(o=>o.id===`foundation-${word.phraseId}`);
 if(block?.hidden)return null;
 // Existing editable phrase placement remains an anchor. Move the performance
 // into the composition instead of preserving the rejected bottom caption band.
 const anchorFrame=project.lyricBoundaryPolicy==='word-start-scene'?word.startFrame:frame;
 const scene=project.scenes.find(s=>anchorFrame>=s.start&&anchorFrame<s.end);
 const anchor=project.objects.find(o=>o.kind==='lyric-anchor'&&scene?.objectIds.includes(o.id));
 if(anchor?.hidden)return null;
 const pose=anchor?imagePose(project,anchor.id,frame,false):null;
 const x=pose?pose.x+pose.width/2:block?block.x+block.width/2:640,y=pose?pose.y+64:block?Math.max(85,block.y-420):169;
 let travel=null;let camera=null;
 if(anchor?.wordJourney&&scene&&pose){
  const mouth=imagePose(project,anchor.wordJourney.mouthObjectId,frame,false);
  const nodes=project.objects.filter(o=>o.parentId===anchor.wordJourney!.targetGroupId&&o.kind==='story-node'&&!o.hidden).sort((a,b)=>a.enterFrame-b.enterFrame);
  const next=nodes.find(n=>n.enterFrame>=word.endFrame)??nodes.at(-1);
  if(next){const target=imagePose(project,next.id,frame,false);travel=cortexSpeechPose(frame,word.startFrame,word.endFrame,{x:mouth.x,y:mouth.y},{x,y},{x:target.x+target.width/2,y:target.y+target.height/2});camera=cameraAt(scene,frame);}
 }
 if(anchor?.wordRoute&&pose){
  const entry=imagePose(project,anchor.wordRoute.entryId,frame,false),exit=imagePose(project,anchor.wordRoute.exitId,frame,false);
  travel=cortexSpeechPose(frame,word.startFrame,word.endFrame,entry,{x,y},exit);
 }
 const fontSize=anchor?.wordRoute?Math.min(64,anchor.width/Math.max(1,word.text.length*.58)):64;
 return <svg viewBox="0 0 1280 720" aria-label="Sequential lyric word" style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}}>
  <g transform={camera?`translate(${camera.tx} ${camera.ty}) scale(${camera.zoom})`:undefined}><g data-word-phase={travel?.phase} transform={travel?`translate(${travel.x} ${travel.y}) scale(${travel.scale})`:undefined} opacity={travel?.opacity}>
  <text data-scene-object={anchor?.id} data-lyric-word={word.wordId} data-timing-status={word.status} x={travel?0:x} y={travel?0:y} textAnchor="middle" fontFamily="Georgia,serif" fontSize={fontSize} fontWeight={700} fill="#f3e9d0" stroke="#122a2d" strokeWidth={4} paintOrder="stroke" strokeLinejoin="round">{word.text}</text>
  </g></g>
 </svg>;
}
