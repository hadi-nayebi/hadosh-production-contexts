import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import seed from "./typography-seed.json";
import previous from "./next-seed.json";
import { validateScene } from "./scene.mjs";
import { cameraAt, cameraPose } from "./camera.mjs";
import { imagePose } from "./views.mjs";
import SceneArtwork from "./SceneArtwork";
afterEach(cleanup);
it("preserves recorded words and timing while separating action and speech groups", () => {
  const p = validateScene(seed);
  const transcript = (ws: typeof p.words) =>
    ws.map((w) => [w.id, w.text, w.sourceStart, w.sourceEnd, w.enterFrame, w.exitFrame]);
  expect(transcript(p.words)).toEqual(transcript(previous.words));
  expect(p.documentId).not.toBe(previous.documentId);
  const words = p.objects.filter((o) => o.kind === "word");
  expect(new Set(words.map((o) => o.textFlow?.role))).toEqual(
    new Set(["action", "speech", "question"]),
  );
  expect(
    new Set(
      words
        .filter((o) => o.wordId && p.words.find((w) => w.id === o.wordId)?.phraseId === "p01")
        .map((o) => o.textFlow?.group),
    ).size,
  ).toBe(2);
  expect(
    words
      .filter((o) => o.textFlow?.role === "speech")
      .every((o) => o.textAnchor?.objectId === o.textFlow?.speakerId),
  ).toBe(true);
});
it("keeps camera and word overlays continuous at frames 449–453", () => {
  const p = validateScene(seed),
    s = p.scenes[1];
  for (let frame = 450; frame <= 453; frame++) {
    const a = cameraAt(s, frame - 1),
      b = cameraAt(s, frame);
    expect(Math.abs(a.zoom - b.zoom)).toBeLessThan(0.001);
    expect(Math.abs(a.tx - b.tx)).toBeLessThan(1);
    expect(Math.abs(a.ty - b.ty)).toBeLessThan(1);
    for (const o of p.objects.filter((o) => o.kind === "word" && s.objectIds.includes(o.id))) {
      const x = cameraPose(imagePose(p, o.id, frame - 1), a),
        y = cameraPose(imagePose(p, o.id, frame), b);
      expect(Math.abs(x.x - y.x)).toBeLessThan(1);
      expect(Math.abs(x.y - y.y)).toBeLessThan(1);
    }
  }
});
it("closes the explicit context menu on Inspect and uses a clean inspector plate", () => {
  const p = validateScene(seed);
  const { container, rerender } = render(<SceneArtwork project={p} frame={100} />);
  expect(container.textContent).toContain("Right-click");
  rerender(<SceneArtwork project={p} frame={101} />);
  expect(container.textContent).not.toContain("Right-click");
  expect(JSON.stringify(p.objects.find((o) => o.id === "screen")?.views)).toContain("clean");
});
it("rejects broken callout targets", () => {
  const p = structuredClone(seed),
    o = p.objects.find((o) => o.textFlow?.target)!;
  o.textFlow!.target!.objectId = "missing";
  expect(() => validateScene(p)).toThrow("Invalid lyric treatment");
});
