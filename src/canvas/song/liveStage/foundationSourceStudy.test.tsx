import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./aiOwnershipStudy";
import study, { sourceBindings } from "./foundationSourceStudy";
import schedule from "./scored-editorial-sequence-v12.json";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";

it("assembles every source-constrained interval while preserving source and prior versions", () => {
  for (const key of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[key]).toEqual(previous[key]);
  expect(study.documentId).not.toBe(previous.documentId);
  expect(study.scenes.map((s) => [s.start, s.end])).toEqual(
    schedule.shots.map((s) => [s.startFrame, s.endFrame]),
  );
  expect(study.scenes).toHaveLength(76);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
  expect(sourceBindings.every((s) => s.actionFulfillment === "unverified")).toBe(true);
  expect(schedule.detailWorkUnlocked).toBe(false);
});
it("performs every shot at entry, middle, and exit without missing references", () => {
  for (const s of study.scenes)
    for (const frame of [s.start, Math.floor((s.start + s.end) / 2), s.end - 1]) {
      const markup = renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />);
      expect(markup).toContain("Live illustrated song scene");
      expect(markup).not.toMatch(/NaN|undefined/);
    }
});
it("places retained model replacement inside its intended source clause", () => {
  const a = study.objects.find((o) => o.id === "harness-14:s08-model-a")!;
  const b = study.objects.find((o) => o.id === "harness-14:s08-model-b")!;
  const shot = study.scenes.find((s) => s.id === "foundation-v12-harness-14")!;
  const words = study.words.filter((w) => w.phraseId === "utterance-32");
  expect(a.exitFrame).toBe(b.enterFrame);
  expect(b.enterFrame).toBeGreaterThan(shot.start);
  expect(b.enterFrame).toBeLessThan(shot.end);
  expect(b.enterFrame).toBeGreaterThanOrEqual(Math.min(...words.map((w) => w.enterFrame)));
  expect(b.enterFrame).toBeLessThan(Math.max(...words.map((w) => w.exitFrame)));
});
it("retimes the actual toaster pop into final-say rather than freezing a late recall", () => {
  const s = study.scenes.find((s) => s.id === "foundation-v12-toaster-08")!;
  const board = study.objects.find(
    (o) => s.objectIds.includes(o.id) && o.kind === "story-toaster",
  )!;
  expect(board.performanceClock).toEqual({
    timelineStart: s.start,
    timelineEnd: s.end,
    sourceStart: 5480,
    sourceEnd: 5525,
  });
  const start = renderToStaticMarkup(<SceneArtwork project={study} frame={s.start} />);
  const mid = renderToStaticMarkup(
    <SceneArtwork project={study} frame={Math.floor((s.start + s.end) / 2)} />,
  );
  expect(mid).not.toBe(start);
});
it("rejects malformed or unbounded performance mappings in imported projects", () => {
  for (const clock of [
    { timelineStart: 20, timelineEnd: 20, sourceStart: 0, sourceEnd: 90 },
    { timelineStart: 0, timelineEnd: 90, sourceStart: 100, sourceEnd: 99 },
    { timelineStart: 0, timelineEnd: 90, sourceStart: 0, sourceEnd: 6805 },
    { timelineStart: 0.5, timelineEnd: 90, sourceStart: 0, sourceEnd: 60 },
  ]) {
    const p = structuredClone(study);
    p.objects.find((o) => o.performanceClock)!.performanceClock = clock;
    expect(() => validateScene(p)).toThrow("Invalid source performance clock");
  }
});

it("keeps original lyric holds above retained foreground components", () => {
  const firstCaption = study.objects.findIndex((o) => o.kind === "lyric-block");
  expect(study.objects.slice(firstCaption).every((o) => o.kind === "lyric-block")).toBe(true);
  for (const o of study.objects.filter((o) => o.kind === "lyric-block")) {
    const phrase = o.id.replace("foundation-", "");
    expect(o.text!.replace(/\n/g, " ")).toBe(
      study.words
        .filter((w) => w.phraseId === phrase)
        .map((w) => w.text)
        .join(" "),
    );
  }
});
