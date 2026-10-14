import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationSourceStudy";
import study from "./foundationOpeningStudy";
import { imagePose } from "./views.mjs";
import SceneArtwork from "./SceneArtwork";
it("preserves scored cuts, recording and all later scenes", () => {
  for (const key of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[key]).toEqual(previous[key]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(study.scenes.slice(8)).toEqual(previous.scenes.slice(8));
});
it("keeps each capsule contact attached to the moving Earth before its consequence", () => {
  for (const [name, frame] of [
    ["power", 511],
    ["switch", 600],
    ["computer", 690],
  ] as const) {
    const planet = imagePose(study, "v13-earth", frame);
    const capsule = imagePose(study, `v13-capsule-${name}`, frame);
    expect(capsule.x + capsule.width).toBeCloseTo(planet.x + 70, 5);
    expect(capsule.y + capsule.height / 2).toBeCloseTo(planet.y + 75, 5);
    const effect = study.objects.find((o) => o.id === `v13-capability-${name}`)!;
    expect(effect.enterFrame).toBe(frame + 1);
    for (const f of [frame + 1, 723]) {
      const a = imagePose(study, effect.id, f),
        b = imagePose(study, "v13-earth", f);
      expect([a.x, a.y, a.width, a.height]).toEqual([b.x, b.y, b.width, b.height]);
    }
  }
});
it("moves Earth and stars and clears the portal before the first orbital cut", () => {
  const first = imagePose(study, "v13-earth", 377),
    last = imagePose(study, "v13-earth", 723);
  expect(last.x - first.x).toBeGreaterThan(100);
  for (const frame of [298, 376, 377, 444, 511, 512, 545, 600, 601, 623, 690, 691, 723]) {
    const html = renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />);
    expect(html).not.toMatch(/NaN|undefined/);
    expect(html).toContain('data-foundation-action="parallax-travel"');
    expect(html.includes('data-foundation-action="window-passage"')).toBe(frame < 377);
    if (frame < 377)
      expect(html.indexOf('data-foundation-action="window-passage"')).toBeGreaterThan(
        html.indexOf('data-foundation-action="parallax-travel"'),
      );
  }
});
