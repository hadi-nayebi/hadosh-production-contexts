import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import RoomSequence from "./RoomSequence";
import { roomBounds, roomDefaults, roomEvents } from "./roomDirection";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
describe("room sequence", () => {
  it("changes the character to a keyboard-free laptop pose with the final device",()=>{
    const e=roomEvents(a,roomDefaults).find(e=>e.kind==="device"&&e.index===8)!;
    render(<RoomSequence annotation={a} time={e.time+roomDefaults.fade+.01}/>);
    const laptop=document.querySelector('[data-room-object="laptop-pose"]') as HTMLElement;
    const desktop=document.querySelector('[data-room-object="seated-registered"]') as HTMLElement;
    expect(laptop.style.opacity).toBe('1');
    expect(desktop.style.opacity).toBe('0');
  });
  it("renders every event entrance and preserves the source anchors", () => {
    const before = JSON.stringify(a);
    const r = render(<RoomSequence annotation={a} time={roomBounds(a)!.start} />);
    for (const e of roomEvents(a, roomDefaults)) {
      r.rerender(<RoomSequence annotation={a} time={e.time + .05} />);
      expect(document.querySelector('[data-testid="room-sequence"]')).not.toBeNull();
    }
    expect(document.querySelector('[data-room-object="seated-registered"]')).not.toBeNull();
    expect(document.querySelector('[data-room-object="head"]')).toBeNull();
    expect(JSON.stringify(a)).toBe(before);
  });
  it("reaches the last intermediate camera image before the chorus", () => {
    render(<RoomSequence annotation={a} time={roomDefaults.turnEnd} />);
    expect(document.querySelector('[data-room-camera]')?.getAttribute('data-room-camera')).toBe('7.000');
  });
  it("keeps the computer-feed tiles above the character and screen during the upgrade passage",()=>{
    const e=roomEvents(a,roomDefaults).find(e=>e.kind==="upgrade")!;
    render(<RoomSequence annotation={a} time={e.time+.5}/>);
    const tile=document.querySelector('[data-computer-feed]') as HTMLElement;
    const body=document.querySelector('[data-room-object="seated-registered"]') as HTMLElement;
    expect(tile).not.toBeNull();
    expect(Number(tile.style.zIndex)).toBeGreaterThan(Number(body.style.zIndex));
    expect(tile.parentElement!.style.opacity).toBe('1');
  });
});
