import { describe, it, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { sceneContainers, newScenePlan, parseScenePlan } from "./sceneContainers";
import { SceneVideoFrame } from "./SceneVideoFrame";
import { wordTiming } from "./wordTiming";
const a = performances[0].annotation as Annotation;
describe("scene foundation", () => {
  it("partitions exact duration and assigns each item once without changing anchors", () => {
    const before = JSON.stringify(a),
      n = sceneContainers(a),
      sections = n.filter((x) => x.parentId === "video");
    expect(sections[0].start).toBe(0);
    expect(sections.at(-1)!.end).toBe(a.duration);
    sections.slice(1).forEach((s, i) => expect(s.start).toBe(sections[i].end));
    const ids = n.flatMap((x) => x.itemIds);
    expect(ids.length).toBe(a.items.length);
    expect(new Set(ids).size).toBe(ids.length);
    expect(JSON.stringify(a)).toBe(before);
  });
  it("honors Hadi's removal of Come closer in the selected opening without deleting its source cues", () => {
    const before = JSON.stringify(a);
    const scene = sceneContainers(a).find((x) => x.id === "invitation")!;
    const second = wordTiming(a).intervals.find((x) => x.id === scene.itemIds[1])!;
    const props = { annotation: a, plan: newScenePlan(a) };
    const r = render(<SceneVideoFrame {...props} time={0} />);
    for (const time of [0, scene.start, second.start, second.end, scene.end]) {
      r.rerender(<SceneVideoFrame {...props} time={time} />);
      expect(document.querySelector('[data-scene-word="come"]')).toBeNull();
      expect(document.querySelector('[data-scene-word="closer"]')).toBeNull();
      expect(document.querySelector('[data-testid="opening-sequence"]')).not.toBeNull();
    }
    expect(scene.itemIds).toHaveLength(2);
    expect(JSON.stringify(a)).toBe(before);
    cleanup();
  });
  it("retains source identity and rejects malformed scene data", () => {
    const p = newScenePlan(a);
    expect(parseScenePlan(JSON.stringify(p), a)).toEqual(p);
    expect(() => parseScenePlan(JSON.stringify({ ...p, source: "other" }), a)).toThrow();
    expect(() =>
      parseScenePlan(
        JSON.stringify({
          ...p,
          looks: { video: { ...p.looks.invitation, image: "https://elsewhere" } },
        }),
        a,
      ),
    ).toThrow();
  });
});
