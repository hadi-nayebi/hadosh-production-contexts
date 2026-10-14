import { it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import DoorwayChorus from "./DoorwayChorus";
import { doorwayWord } from "./DoorwayWords";
import { infinityCuts, infinityCamera, infinityLandmarks } from "./doorwayDirection";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
afterEach(cleanup);
it("keeps world registration while advancing six distinct views and one occupied-window return", () => {
  const annotation = performances[0].annotation as Annotation,
    before = JSON.stringify(annotation),
    start = 63.7,
    end = 75.7;
  const cuts = infinityCuts(start, end, annotation.audioHash);
  const r = render(<DoorwayChorus annotation={annotation} time={start} start={start} end={end} />);
  for (let i = 0; i < 7; i++) {
    r.rerender(
      <DoorwayChorus annotation={annotation} time={cuts[i] + 0.3} start={start} end={end} />,
    );
    expect(document.querySelector(`[data-infinity-image="${i}"]`)).not.toBeNull();
    if (i === 6) expect(document.querySelector("[data-registered-room-in-window]")).not.toBeNull();
  }
  for (let i = 0; i < 6; i++) {
    const c = infinityCamera(68, start, i),
      [x, y, diameter] = infinityLandmarks[i];
    expect(x + c.x).toBe(50);
    expect(y + c.y).toBeCloseTo(infinityLandmarks[0][1] + infinityCamera(68, start, 0).y);
    expect(c.scale * diameter).toBeCloseTo(
      infinityCamera(68, start, 0).scale * infinityLandmarks[0][2],
    );
  }
  expect(JSON.stringify(annotation)).toBe(before);
});
it("does not skip look at its anchor and holds it only until the following lyric", () => {
  const a = structuredClone(performances[0].annotation) as Annotation;
  const words = a.items.filter((i) => i.groupId.endsWith(":section:4") && i.kind === "lyric");
  const look = words.find((i) => /^look\W*$/i.test(i.text))!;
  const timing =
    a.wordTiming?.intervals ??
    a.items.flatMap((i, j) =>
      i.kind === "lyric" ? [{ id: i.id, start: a.boundaries[j], end: a.boundaries[j + 1] }] : [],
    );
  const cue = timing.find((w) => w.id === look.id)!;
  expect(doorwayWord(a, cue.start)?.id).toBe(look.id);
  const r = render(
    <DoorwayChorus annotation={a} time={cue.start + 0.02} start={63.7} end={75.7} />,
  );
  expect(document.querySelector("[data-doorway-word]")?.textContent).toBe(look.text);
});

it("holds the saved look cue through 69.59 and hands over at 69.60 without changing anchors", () => {
  const a = structuredClone(performances[0].annotation) as Annotation;
  const words = a.items.filter((i) => i.kind === "lyric" && i.groupId.endsWith(":section:4"));
  const look = words.find((i) => /^look\W*$/i.test(i.text))!;
  const next = words[words.indexOf(look) + 1];
  a.wordTiming = {
    ...a.wordTiming!,
    intervals: [
      { id: look.id, start: 69.1, end: 69.48 },
      { id: next.id, start: 69.6, end: 69.7 },
    ],
  };
  const before = JSON.stringify(a);
  expect(doorwayWord(a, 69.1)?.text).toBe(look.text);
  expect(doorwayWord(a, 69.59)?.text).toBe(look.text);
  expect(doorwayWord(a, 69.6)?.id).toBe(next.id);
  expect(JSON.stringify(a)).toBe(before);
});
