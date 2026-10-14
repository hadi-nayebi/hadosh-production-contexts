import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import FeedProfile from "./FeedProfile";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
import { sourceFrameAt } from "../wordMotion/arrangement.mjs";
import inside from "./inside-seed.json";
import feed from "./inside-feed-seed.json";
afterEach(cleanup);
it("extends the opening without changing its words, media or existing scene objects", () => {
  const p = validateScene(feed);
  expect(p.words).toEqual(inside.words);
  expect(p.assets).toEqual(inside.assets);
  expect(p.objects.slice(0, inside.objects.length)).toEqual(inside.objects);
  expect(p.scenes.slice(0, inside.scenes.length)).toEqual(inside.scenes);
  expect(sourceFrameAt(p, 2642)).toBe(2162);
  expect(sourceFrameAt(p, 2643)).toBeNull();
  expect(p.composition.durationInFrames).toBe(3003);
});
it("moves ranked cards while retaining the original interaction order", () => {
  const { container, rerender } = render(
    <svg>
      <FeedProfile age={200} />
    </svg>,
  );
  const card = (name: string) =>
    container.querySelector(`[data-feed-card="${name}"]`)!.getAttribute("transform");
  const before = card("input:Travel");
  expect(card("ranked:Gardens")).toBe("translate(800 246)");
  rerender(
    <svg>
      <FeedProfile age={300} />
    </svg>,
  );
  expect(card("ranked:Gardens")).toBe("translate(800 70)");
  expect(card("ranked:Travel")).toBe("translate(800 246)");
  expect(card("input:Travel")).toBe(before);
});
it("pairs the new lyric captions with the mechanism and labels missing vocals", () => {
  const p = validateScene(feed);
  const { container, rerender } = render(<SceneArtwork project={p} frame={2650} />);
  expect(container.textContent).toContain("A pause, a tap, another clue.");
  expect(container.textContent).toContain("vocals pending");
  rerender(<SceneArtwork project={p} frame={2950} />);
  expect(container.textContent).toContain("But can I change that map of me?");
  expect(container.textContent).toContain("Inferred interests");
});
