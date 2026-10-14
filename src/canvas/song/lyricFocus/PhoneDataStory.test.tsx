import { expect, it, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import PhoneDataStory, { attentionDepartures } from "./PhoneDataStory";
afterEach(cleanup);
it("uses supplied musical onsets after an action, never fabricated repeated offsets", () => {
  const beats = [{ time: 10.1 }, { time: 10.6 }, { time: 10.91 }],
    before = JSON.stringify(beats);
  expect(attentionDepartures(10, beats).map((x) => x.time)).toEqual([10.1, 10.6]);
  expect(attentionDepartures(12, beats)).toEqual([{ time: 12, lane: "vocal-anchor-fallback" }]);
  expect(JSON.stringify(beats)).toBe(before);
});
it("marks signals collected only after the actual first packet arrives, including backward seeks", () => {
  const cues = { pause: 10, save: 13, clue: 16, feed: 18, choose: 20 },
    beats = [{ time: 10.2, strength: 0.8 }];
  const view = render(<PhoneDataStory time={11.29} cues={cues} beats={beats} />);
  expect(
    document.querySelector("[data-collected-signals]")?.getAttribute("data-collected-signals"),
  ).toBe("0");
  view.rerender(<PhoneDataStory time={11.31} cues={cues} beats={beats} />);
  expect(
    document.querySelector("[data-collected-signals]")?.getAttribute("data-collected-signals"),
  ).toBe("1");
  view.rerender(<PhoneDataStory time={10.9} cues={cues} beats={beats} />);
  expect(
    document.querySelector("[data-collected-signals]")?.getAttribute("data-collected-signals"),
  ).toBe("0");
});
