import { it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import WebsiteFlyby, { websiteFlights, websiteFlight } from "./WebsiteFlyby";
import DoorPortal from "./DoorPortal";
afterEach(cleanup);
it("shows the blue destination before crossing the doorway, without a solid dark replacement", () => {
  render(<DoorPortal time={61.5} chorusStart={63.68} />);
  expect(document.querySelector("[data-blue-door-aperture]")).not.toBeNull();
  expect(document.querySelector("[data-dark-door-aperture]")).toBeNull();
  expect((document.querySelector("[data-door-blue-world]") as HTMLElement).style.backgroundImage).toContain("infinity-window-return");
});
it("moves illustrative websites continuously along side lanes and clears them before window return", () => {
  const flights=websiteFlights(63.68,75.7,"unknown-source");
  for (const e of flights) {
    let x=websiteFlight(e.time,e.time,e.end,e.side).x;
    for(let t=e.time+.01;t<e.end;t+=.01){
      const p=websiteFlight(t,e.time,e.end,e.side);
      expect((p.x-x)*e.side).toBeGreaterThanOrEqual(0);
      expect(Math.abs(p.x-x)).toBeLessThan(2);
      expect(Math.abs(p.y-50)).toBeGreaterThanOrEqual(25);
      x=p.x;
    }
  }
  const r=render(<WebsiteFlyby time={65} start={63.68} end={75.7} hash="unknown-source" />);
  expect(document.querySelector("[data-website-page]")).not.toBeNull();
  r.rerender(<WebsiteFlyby time={72.5} start={63.68} end={75.7} hash="unknown-source" />);
  expect(document.querySelector("[data-website-page]")).toBeNull();
});
