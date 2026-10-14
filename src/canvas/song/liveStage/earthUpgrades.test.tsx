import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { validateScene, sceneAt } from "./scene.mjs";
import { cameraAt } from "./camera.mjs";
import { imagePose } from "./views.mjs";
import SceneArtwork from "./SceneArtwork";
import seed from "./earth-upgrade-seed.json";
const p = validateScene(seed);
afterEach(cleanup);
it("absorbs moving tokens, retains capabilities, and introduces questions only as networks grow", () => {
  const { container, rerender } = render(<SceneArtwork project={p} frame={45} />);
  expect(container.querySelector('[data-upgrade-token="power"]')).toBeTruthy();
  expect(container.querySelector('[data-earth-capability="power"]')).toBeNull();
  expect(imagePose(p, "earth-token-power", 70).x).toBeGreaterThan(
    imagePose(p, "earth-token-power", 10).x,
  );
  rerender(<SceneArtwork project={p} frame={300} />);
  expect(container.querySelectorAll("[data-upgrade-token]")).toHaveLength(0);
  expect(container.querySelectorAll("[data-earth-capability]")).toHaveLength(3);
  expect(container.querySelectorAll("[data-upgrade-badge]")).toHaveLength(3);
  expect(container.textContent).not.toContain("What is internet");
  expect(container.querySelector("[data-internet-checklist]")).toBeNull();
  rerender(<SceneArtwork project={p} frame={405} />);
  expect(container.querySelector('[data-earth-message-link="UCLA-SRI"]')).toBeTruthy();
  expect(container.querySelector('[data-arpanet="localized"]')).toBeNull();
  rerender(<SceneArtwork project={p} frame={555} />);
  for (const q of ["What is internet", "Who is internet", "When is internet"])
    expect(container.textContent).toContain(q);
  const q = p.objects.filter((o) => o.id.startsWith("inside-question-"));
  expect(new Set(q.map((o) => o.x)).size).toBe(3);
});
it("alternates approaches with two interior invitations and ends in a separate Web reveal", () => {
  expect([550, 600, 660, 720, 765, 840].map((f) => sceneAt(p, f).id)).toEqual([
    "internet-questions-approach",
    "invitation-inside-one",
    "earth-approach-two",
    "invitation-inside-two",
    "house-approach",
    "web-window-payoff",
  ]);
  expect(p.arrangement?.[0].endFrame).toBe(870);
  expect(p.arrangement?.[1].sourceStartFrame).toBe(720);
});

it("keeps the painted Earth through the local link without an opaque replacement", () => {
  const { container, rerender } = render(<SceneArtwork project={p} frame={344} />);
  const earth = () =>
    container.querySelector('[data-scene-object="inside-earth"] image')?.getAttribute("href");
  const painted = earth();
  expect(painted).toBeTruthy();
  for (const frame of [345, 360, 405, 479, 480]) {
    rerender(<SceneArtwork project={p} frame={frame} />);
    expect(earth()).toBe(painted);
    const link = container.querySelector("[data-earth-local-link]");
    if (frame < 480) {
      expect(link).toBeTruthy();
      expect(link?.querySelector("ellipse, polygon, rect, image")).toBeNull();
      expect(link?.querySelector("[data-earth-message-link]")?.getAttribute("fill")).toBe("none");
    } else expect(link).toBeNull();
  }
});
it("holds the same closed interior and camera until the single window opening", () => {
  const { container, rerender } = render(<SceneArtwork project={p} frame={749} />);
  const images = () =>
    Array.from(container.querySelectorAll("image")).map((i) => i.getAttribute("href"));
  const before = images();
  const sash = () =>
    container.querySelector('[data-opening-prop="window-sash"] path')?.getAttribute("d");
  const closed = sash();
  expect(closed).toBeTruthy();
  for (const frame of [750, 779, 780]) {
    rerender(<SceneArtwork project={p} frame={frame} />);
    expect(images()).toEqual(before);
    expect(sash()).toBe(closed);
    expect(container.textContent).not.toContain("THE WEB IS BORN");
  }
  for (const [a, b] of [
    [749, 750],
    [779, 780],
  ])
    expect(cameraAt(sceneAt(p, a), a)).toEqual(cameraAt(sceneAt(p, b), b));
  rerender(<SceneArtwork project={p} frame={840} />);
  expect(sash()).not.toBe(closed);
  expect(container.textContent).toContain("THE WEB IS BORN");
});
