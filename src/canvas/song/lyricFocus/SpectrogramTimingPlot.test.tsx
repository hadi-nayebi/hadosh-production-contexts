import {useState} from 'react';
import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import Plot,{sourceTimeAtPointer} from './SpectrogramTimingPlot';
afterEach(()=>cleanup());
it('maps actual CSS bounds to source time at different zooms and clamps shared boundaries',()=>{expect(sourceTimeAtPointer(250,100,300,24,27,25,26)).toBe(25.5);expect(sourceTimeAtPointer(250,100,600,25,26,25,26)).toBe(25.25);expect(sourceTimeAtPointer(-10,100,300,24,27,25,26)).toBe(25);expect(sourceTimeAtPointer(900,100,300,24,27,25,26)).toBe(26);expect(()=>sourceTimeAtPointer(0,0,0,1,2,1,2)).toThrow();});
it('captures mouse/touch drag, releases it, restores cancelled gestures and supports keyboard refinement',()=>{
 vi.stubGlobal('PointerEvent',MouseEvent);
 function Fixture(){const [n,setN]=useState(25.5);return <Plot start={24} end={27} min={25} max={26} value={n} disabled={false} onChange={setN}><span>{n}</span></Plot>}
 render(<Fixture/>);const el=screen.getByRole('slider');Object.defineProperty(el,'getBoundingClientRect',{value:()=>({left:100,width:300})});el.setPointerCapture=vi.fn();el.hasPointerCapture=()=>true;el.releasePointerCapture=vi.fn();
 fireEvent.pointerDown(el,{button:0,clientX:220});expect(el.getAttribute('aria-valuenow')).toBe('25.2');fireEvent.pointerMove(el,{clientX:280});expect(el.getAttribute('aria-valuenow')).toBe('25.8');fireEvent.pointerUp(el,{clientX:280});expect(el.releasePointerCapture).toHaveBeenCalled();
 fireEvent.pointerDown(el,{button:0,clientX:240});fireEvent.pointerCancel(el);expect(el.getAttribute('aria-valuenow')).toBe('25.8');fireEvent.keyDown(el,{key:'ArrowLeft'});expect(Number(el.getAttribute('aria-valuenow'))).toBeCloseTo(25.79);fireEvent.keyDown(el,{key:'End'});expect(el.getAttribute('aria-valuenow')).toBe('26');vi.unstubAllGlobals();
});
it('routes wheel and two-pointer pinch to viewport changes without editing timing',()=>{
 class TestPointer extends MouseEvent {pointerId:number;pointerType:string;constructor(type:string,init:any){super(type,init);this.pointerId=init.pointerId;this.pointerType=init.pointerType;}}
 vi.stubGlobal('PointerEvent',TestPointer);
 vi.stubGlobal('ResizeObserver',class {observe(){} disconnect(){}});
 const edit=vi.fn(),pan=vi.fn(),zoom=vi.fn();
 render(<Plot start={20} end={26} min={0} max={238} value={22} disabled={false} onChange={edit} pan={{center:23,onChange:pan,onZoom:zoom}}><span/></Plot>);
 const el=screen.getByRole('slider');Object.defineProperty(el,'getBoundingClientRect',{value:()=>({left:100,width:600})});el.setPointerCapture=vi.fn();el.hasPointerCapture=()=>true;el.releasePointerCapture=vi.fn();
 fireEvent.wheel(el,{clientX:400,deltaY:-50,deltaX:0});expect(zoom).toHaveBeenCalledWith(Math.exp(.5),.5);
 fireEvent.pointerDown(el,{button:0,clientX:300,pointerId:1,pointerType:'touch'});
 fireEvent.pointerDown(el,{button:0,clientX:500,pointerId:2,pointerType:'touch'});
 fireEvent.pointerMove(el,{clientX:600,pointerId:2,pointerType:'touch'});
 expect(zoom).toHaveBeenLastCalledWith(1.5,.5,350/600);
 fireEvent.pointerUp(el,{pointerId:2,pointerType:'touch'});
 expect(edit).not.toHaveBeenCalled();
 vi.unstubAllGlobals();
});
