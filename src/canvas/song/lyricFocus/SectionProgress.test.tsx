import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import SectionProgress, { sectionCompletion, songSectionIntervals } from "./SectionProgress";
import { wordTiming } from "./wordTiming";
afterEach(cleanup);
const source = performances[0].annotation as Annotation;
it("covers every song section using saved boundaries without replacing sections with visual containers", () => {
  const before = JSON.stringify(source),
    sections = songSectionIntervals(source, {});
  expect(sections).toHaveLength(16);
  expect(sections[0].start).toBe(0);
  expect(sections.at(-1)!.end).toBe(source.duration);
  sections.slice(1).forEach((s, i) => expect(s.start).toBe(sections[i].end));
  expect(JSON.stringify(source)).toBe(before);
});
it("withdraws review and fix credit after timing changes and never infers human approval", () => {
  const a = structuredClone(source);
  a.revision = 39;
  a.wordTiming = { ...wordTiming(a), revision: 41 };
  const p = sectionCompletion(a, 6);
  expect(p.percent).toBe(70);
  expect(p.checks.find((c) => c.label === "Your scene approval")!.done).toBe(false);
  a.revision++;
  expect(sectionCompletion(a, 6).percent).toBe(40);
  a.audioHash = "different-take";
  expect(sectionCompletion(a, 6).percent).toBe(0);
});
it("seeks by section and slider while following playback without changing source data", () => {
  const before = JSON.stringify(source),
    media = document.createElement("audio"),
    seek = vi.fn();
  const r = render(
    <SectionProgress annotation={source} audio={{ current: media }} labels={{}} onSeek={seek} />,
  );
  fireEvent.click(r.getByRole("button", { name: /6\. Phone/ }));
  expect(seek).toHaveBeenLastCalledWith(songSectionIntervals(source, {})[5].start + 0.001);
  fireEvent.change(r.getByRole("slider"), { target: { value: "96.5" } });
  expect(seek).toHaveBeenLastCalledWith(96.5);
  media.currentTime = 170;
  fireEvent(media, new Event("timeupdate"));
  expect(r.getByRole("slider").getAttribute("value")).toBe("170");
  expect(JSON.stringify(source)).toBe(before);
});
