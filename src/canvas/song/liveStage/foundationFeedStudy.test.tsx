import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationBrowserStudy";
import study, { feedEvents, feedStateAt } from "./foundationFeedStudy";
import blocking from "./foundation-feed-blocking.json";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
it("preserves the source, complete scored sequence and all other chapters", () => {
  for (const k of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(study.scenes.slice(0, 24)).toEqual(previous.scenes.slice(0, 24));
  expect(study.scenes.slice(36)).toEqual(previous.scenes.slice(36));
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("saves before ranking and retains local limits without revealing the hidden mechanism", () => {
  expect(feedEvents["feed-04"]).toBeLessThan(feedEvents["feed-05"]);
  expect(feedStateAt(feedEvents["feed-04"] - 1).saved).toBe(false);
  expect(feedStateAt(feedEvents["feed-04"]).saved).toBe(true);
  expect(feedStateAt(feedEvents["feed-05"] - 1).ranked).toBe(false);
  const signal = study.objects.find((o) => o.id === "v15-feed-05-saved-signal")!;
  const post = study.objects.find((o) => o.id === "v15-feed-05-post-garden")!;
  expect(signal.motion!.at(-1)!.frame).toBeLessThan(post.motion![1].frame);
  expect(feedStateAt(3239)).toEqual({
    saved: true,
    ranked: true,
    muted: true,
    localChoice: true,
    orderingVisible: false,
  });
});
it("keeps muted and hidden posts absent in subsequent shots", () => {
  const shop = study.objects.find((o) => o.id === "v15-feed-06-post-shop")!;
  expect(shop.exitFrame).toBe(feedEvents["feed-06"] + 1);
  for (const id of [
    "v15-feed-07-post-shop",
    "v15-feed-09-post-shop",
    "v15-feed-10-post-shop",
    "v15-feed-11-post-shop",
    "v15-feed-12-post-shop",
  ])
    expect(study.objects.find((o) => o.id === id)!.hidden).toBe(true);
  const garden = study.objects.find((o) => o.id === "v15-feed-09-post-garden")!;
  expect(garden.exitFrame).toBe(feedEvents["feed-09"] + 1);
  for (const id of [
    "v15-feed-10-post-garden",
    "v15-feed-11-post-garden",
    "v15-feed-12-post-garden",
  ])
    expect(study.objects.find((o) => o.id === id)!.hidden).toBe(true);
});
it("keeps every scored action within its lyric or instrumental cue and excludes a hold", () => {
  for (const s of blocking.shots) {
    const active = study.words.filter(
      (w) => w.enterFrame <= s.eventFrame && w.exitFrame > s.eventFrame,
    );
    if (s.expectedPhraseIds.length)
      expect(active.some((w) => s.expectedPhraseIds.includes(w.phraseId))).toBe(true);
    else expect(active).toHaveLength(0);
    if (s.eventType === "continuity-hold") expect(s.timingScore).toBeNull();
    else {
      const d = Math.abs(s.eventFrame / 30 - s.observedBeat.seconds);
      expect(
        70 * Math.max(0, 1 - (d / 0.15) ** 2) + 30 * Math.min(1, s.observedBeat.strength),
      ).toBeCloseTo(s.timingScore!, 2);
    }
  }
});
it("renders each feed shot before, during and after its event with screen-fixed original lyrics", () => {
  for (const s of blocking.shots)
    for (const frame of [s.startFrame, s.eventFrame, s.endFrame - 1]) {
      const html = renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />);
      expect(html).not.toMatch(/NaN|undefined/);
      expect(html).toContain("data-feed-");
    }
  const first = study.objects.findIndex((o) => o.kind === "lyric-block");
  expect(study.objects.slice(first).every((o) => o.kind === "lyric-block")).toBe(true);
});
