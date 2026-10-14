import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './browserReadabilityStudy';
import project from './cortexSpeechStudy';
import {cortexSpeechPose} from './cortexSpeechPose';
import FoundationWordLayer from './FoundationWordLayer';
import {imagePose} from './views.mjs';
it('preserves source and timing and retains old scene objects independently',()=>{
 expect(project.source).toEqual(previous.source);expect(project.words).toEqual(previous.words);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(previous.objects.find(o=>o.id==='v28-side:v27-recovered:neural-node-0')?.width).toBe(9);
 const n=project.objects.find(o=>o.id==='v28-side:v27-recovered:neural-node-0')!;
 expect(n.enterFrame).toBe(3324);expect(n.exitFrame).toBe(5000);
 const pose=imagePose(project,n.id,3400,false);expect(pose.x).toBeGreaterThan(550);expect(pose.x).toBeLessThan(1000);
});
it('provides readable hold between mouth entrance and cortex landing, prioritizing short words',()=>{
 const mouth={x:453,y:327},read={x:700,y:354},target={x:624,y:260};
 expect(cortexSpeechPose(0,0,16,mouth,read,target)).toMatchObject({...mouth,phase:'enter',scale:.3});
 expect(cortexSpeechPose(7,0,16,mouth,read,target)).toMatchObject({...read,phase:'read',scale:1});
 expect(cortexSpeechPose(15,0,16,mouth,read,target).phase).toBe('join');
 for(let f=0;f<4;f++)expect(cortexSpeechPose(f,0,4,mouth,read,target)).toMatchObject({...read,phase:'read',scale:1});
});
it('renders one moving word with editable anchors, without a subtitle plate',()=>{
 const html=renderToStaticMarkup(<FoundationWordLayer project={project} frame={3345}/>);
 expect((html.match(/data-lyric-word=/g)||[]).length).toBe(1);expect(html).toContain('data-word-phase="read"');expect(html).not.toContain('<rect');
 expect(project.objects.filter(o=>o.wordJourney)).toHaveLength(4);
});
