import { it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import MoonEraClock, { moonCues } from "./MoonEraClock";
import { audioAssetsFor } from "./stemAnalysis";
afterEach(cleanup);
const hash = "e54ac0e2f053eb1b5289c5bf19040d2883045b361612f3ae73ea02341440c0fd";
it("advances all sixteen phases on existing drum events and expires before the Web celebration", () => {
  const cues = moonCues(hash, 9.5, 25.2275);
  const beats = audioAssetsFor(hash)!.lanes.find((l) => l.id === "stem-drums")!.events;
  expect(cues).toHaveLength(16);
  for (let i = 1; i < 16; i++) {
    expect(cues[i].time).toBeGreaterThan(cues[i - 1].time);
    expect(beats.some((e) => e.id === cues[i].eventId && e.time === cues[i].time)).toBe(true);
  }
  const r = render(
    <MoonEraClock hash={hash} time={24.7} start={9.5} end={25.2275} imageIndex={8} pulse={0} />,
  );
  expect(document.querySelector('[data-moon-phase="15"]')).not.toBeNull();
  expect(document.querySelector("[data-era-year]")?.getAttribute("data-era-year")).toBe("1989");
  r.rerender(
    <MoonEraClock hash={hash} time={25.2275} start={9.5} end={25.2275} imageIndex={8} pulse={0} />,
  );
  expect(document.querySelector("[data-moon-era-clock]")).toBeNull();
});
