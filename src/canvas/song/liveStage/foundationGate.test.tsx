import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import project from './foundationDepthStudy';
import {evaluateDimension,foundationGate} from './foundationGate';
import FoundationGateReview from './FoundationGateReview';
const dimension=(values:(number|null)[],expected=values.length,hardFailures:string[]=[])=>evaluateDimension({id:'test',label:'Test',values,expected,hardFailures});
it('does not let strong averages conceal missing, invalid or failed evidence',()=>{
 expect(dimension([100,100]).passed).toBe(true);
 for(const values of [[100,null],[100,NaN],[100,101],[100,-1],[90,90],[100,100,79]])expect(dimension(values).passed).toBe(false);
 expect(dimension([100],2).passed).toBe(false);expect(dimension([],0).passed).toBe(false);
 expect(dimension([100,100],2,['Unreadable action']).passed).toBe(false);
});
it('keeps current high cut scores separate from unreviewed creative dimensions',()=>{
 const gate=foundationGate(project);expect(gate.dimensions[0].passed).toBe(true);
 expect(gate.dimensions[0].mean).toBeGreaterThan(90);expect(gate.dimensions[0].minimum).toBeGreaterThanOrEqual(80);
 expect(gate.detailsUnlocked).toBe(false);expect(gate.score).toBe(null);
 expect(gate.dimensions.slice(1).every(d=>d.mean===null&&!d.passed)).toBe(true);
});
it('invalidates copied timing evidence after source, source mapping or cut edits',()=>{
 for(const change of [(p:typeof project)=>{p.source.sha256='different';},(p:typeof project)=>{p.source.inMs=100;},(p:typeof project)=>{p.scenes[1].start++;}]){
  const p=structuredClone(project);change(p);expect(foundationGate(p).dimensions[0].passed).toBe(false);
 }
});
it('rejects missing coverage and shots longer than four seconds',()=>{
 const p=structuredClone(project);p.scenes[0].end=200;
 const g=foundationGate(p);expect(g.dimensions[0].hardFailures.some(s=>s.includes('2–4'))).toBe(true);expect(g.detailsUnlocked).toBe(false);
});
it('shows current-draft evidence instead of the superseded v6 creative scorecard',()=>{
 const html=renderToStaticMarkup(<FoundationGateReview project={project} frame={5253}/>);
 expect(html).toContain('details locked');expect(html).toContain(project.documentId);expect(html).toContain('Frequency-band values');expect(html).toContain('Unmeasured');expect(html).not.toContain('pinned V6');
});
