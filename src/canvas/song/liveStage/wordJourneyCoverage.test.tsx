import {expect,it} from 'vitest';
import project from './cortexSpeechStudy';
import {wordJourneyCoverage} from './wordJourneyCoverage';
it('accounts for every timed word without claiming partial implementation as full coverage',()=>{
 const c=wordJourneyCoverage(project);
 expect(c.timed).toBe(425);expect(c.journey).toBeGreaterThan(0);expect(c.static).toBeGreaterThan(c.journey);
 expect(c.journey+c.shortHold+c.static+c.mixed+c.hidden+c.missing).toBe(c.timed);
 expect(c.rows.find(r=>r.wordId==='lyric-21-00')?.status).toBe('journey');
 expect(c.rows.find(r=>r.wordId==='lyric-21-04')?.status).toBe('short-hold');
});
it('recomputes from edits and rejects timing bound to another source',()=>{
 const changed=structuredClone(project);changed.objects.find(o=>o.id==='v34-reading-3307')!.hidden=true;
 expect(wordJourneyCoverage(changed).hidden).toBeGreaterThan(0);
 changed.source.sha256='0'.repeat(64);expect(wordJourneyCoverage(changed).timed).toBe(0);
});
