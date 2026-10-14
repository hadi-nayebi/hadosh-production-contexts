import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import before from './cortexSpeechStudy';
import project from './fullWordMotionStudy';
import {wordJourneyCoverage} from './wordJourneyCoverage';
import FoundationWordLayer from './FoundationWordLayer';
it('covers all source words without changing source timing or earlier version data',()=>{
 expect(project.source).toEqual(before.source);expect(project.words).toEqual(before.words);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(before.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 const c=wordJourneyCoverage(project);expect(c.journey+c.shortHold).toBe(425);expect(c.static+c.hidden+c.missing+c.mixed).toBe(0);
 expect(wordJourneyCoverage(before).static).toBe(396);
});
it('holds a crossing word on its original route without resetting at the cut',()=>{
 const c=wordJourneyCoverage(project);const row=c.rows.find(r=>r.sceneIds.length>1&&r.status==='journey')!;
 const next=project.scenes.find(s=>s.id===row.sceneIds[1])!;
 const render=(f:number)=>renderToStaticMarkup(<FoundationWordLayer project={project} frame={f}/>);
 const beforeMarkup=render(next.start-1),afterMarkup=render(next.start);
 const anchor=(html:string)=>html.match(/data-scene-object="([^"]+)"/)?.[1];
 expect(anchor(afterMarkup)).toBe(anchor(beforeMarkup));expect((afterMarkup.match(/data-lyric-word=/g)||[]).length).toBe(1);
});
it('renders every timed cue with only one word and no subtitle plate',()=>{
 for(const row of wordJourneyCoverage(project).rows){const html=renderToStaticMarkup(<FoundationWordLayer project={project} frame={Math.floor((row.startFrame+row.endFrame)/2)}/>);expect((html.match(/data-lyric-word=/g)||[]).length).toBe(1);expect(html).not.toContain('<rect');}
});

it('shows mutually exclusive note states and preserves the reopened content',()=>{
 const scene=project.scenes.find(s=>s.start===4030)!;
 const text=(frame:number)=>project.objects.filter(o=>scene.objectIds.includes(o.id)&&o.kind==='text'&&frame>=o.enterFrame&&frame<o.exitFrame).map(o=>o.text);
 expect(text(4090)).toContain('Saved');expect(text(4090)).not.toContain('Reopen note →');
 expect(text(4095)).toEqual(['Reopen note →']);
 expect(text(4118)).toContain('Clear words.');expect(text(4118)).toContain('Reopened · same note');expect(text(4118)).not.toContain('Saved');expect(text(4118)).not.toContain('Reopen note →');
});
