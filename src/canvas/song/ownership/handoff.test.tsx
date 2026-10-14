import { afterEach, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import content from "./departments-current.json";
import suno from "./departments-suno.json";
import { snapshot, sourceCommit } from "./snapshot";
import SunoFields from "./SunoFields";
import EarlierReviews, { earlierReviewKeys } from "./EarlierReviews";
import { initialReview } from "./review";
const descriptor = Object.getOwnPropertyDescriptor(navigator, "clipboard");
afterEach(() => {
  cleanup();
  localStorage.clear();
  if (descriptor) Object.defineProperty(navigator, "clipboard", descriptor);
  else Reflect.deleteProperty(navigator, "clipboard");
});
test("pinned Suno packet matches every ordered canonical lyric and exact style", () => {
  const lines = content.sections
    .flatMap((s) => [...(s.spoken ?? []), ...s.lyrics, ...(s.hook ?? [])])
    .filter((l) => l.trim());
  const packetLines = suno.lyrics.split("\n").filter((l) => l.trim() && !l.startsWith("["));
  expect(packetLines).toEqual(lines);
  expect(lines.length).toBe(90);
  expect(suno.style).toBe(content.music.style);
  expect(suno.style.length).toBe(949);
  expect(suno.exclude).toBe(content.music.exclude);
  expect(suno.revision).toBe(content.revision);
  expect(snapshot.suno.sourceUrl).toContain(sourceCommit);
  expect(snapshot.sections.at(-1)!.lyrics).not.toContain("[Sung]");
});
test("each copy control writes exactly its own pinned field", async () => {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
  render(<SunoFields packet={suno} sourceUrl={snapshot.suno.sourceUrl} />);
  fireEvent.click(screen.getByText("Copy Suno fields · provisional candidate"));
  for (const [key, label] of [
    ["title", "title"],
    ["style", "style"],
    ["exclude", "exclusions"],
    ["lyrics", "lyrics"],
  ] as const) {
    fireEvent.click(screen.getByRole("button", { name: `Copy ${label}` }));
    await waitFor(() => expect(writeText).toHaveBeenLastCalledWith(suno[key]));
    expect((screen.getByLabelText(`Suno ${label}`) as HTMLTextAreaElement).readOnly).toBe(true);
  }
});
test("clipboard failure selects the original text for manual copy", async () => {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText: vi.fn().mockRejectedValue(Error("Denied")) },
  });
  render(<SunoFields packet={suno} sourceUrl={snapshot.suno.sourceUrl} />);
  fireEvent.click(screen.getByText("Copy Suno fields · provisional candidate"));
  fireEvent.click(screen.getByRole("button", { name: "Copy style" }));
  await screen.findByText(/Clipboard unavailable/);
  const field = screen.getByLabelText("Suno style") as HTMLTextAreaElement;
  expect(document.activeElement).toBe(field);
  expect(field.selectionStart).toBe(0);
  expect(field.selectionEnd).toBe(suno.style.length);
});
test("source upgrades expose earlier reviews without replacing or importing them", () => {
  const oldCommit = "7c262f4a6d3fa260fc50fc3df4f5a8e38d8de077";
  const oldKey = `canvas-song-review-v1:${oldCommit}`;
  const old = JSON.stringify({
    ...initialReview(snapshot),
    source: { ...snapshot.source, commit: oldCommit },
  });
  localStorage.setItem(oldKey, old);
  localStorage.setItem(`canvas-song-review-v1:${sourceCommit}`, "current");
  localStorage.setItem("unrelated", "keep");
  expect(earlierReviewKeys(localStorage, sourceCommit)).toEqual([oldKey]);
  render(<EarlierReviews currentCommit={sourceCommit} />);
  expect(
    screen.getByRole("button", { name: `Export review from ${oldCommit.slice(0, 12)}` }),
  ).toBeTruthy();
  expect(localStorage.getItem(oldKey)).toBe(old);
  expect(localStorage.getItem("unrelated")).toBe("keep");
});
