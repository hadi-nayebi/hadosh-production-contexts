import {it,expect} from "vitest";
import {render,cleanup} from "@testing-library/react";
import RegisteredDevice from "./RegisteredDevice";
it("pins devices to the desk and brings the laptop keyboard under the hands",()=>{
 for(let i=0;i<9;i++){
  const r=render(<RegisteredDevice index={i} placement={{x:66,y:57,scale:1}} opacity={1} scale={.9}/>);
  const device=r.container.firstElementChild as HTMLElement;
  expect(device.style.left).toBe(i===8?'65%':'78%');expect(device.style.top).toBe(i===8?'73%':'68%');
  expect(device.style.width).toBe(i===8?'32%':'26%');
  expect(device.style.transformOrigin).toBe('50% 100%');
  expect(device.style.transform).toContain('translate(-50%,-100%)');
  cleanup();
 }
});
