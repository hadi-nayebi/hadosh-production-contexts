/// <reference types="node" />
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import LiveStage from "../liveStage/LiveStage";
import { snapshots, snapshotDate, snapshotHref } from "./registry";
beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
it.each(snapshots)("pins $id scene bytes and media versions", (s) => {
  const bytes = readFileSync(`src/canvas/song/snapshots/${s.id}.json`);
  expect(createHash("sha256").update(bytes).digest("hex")).toBe(s.sceneSha256);
  expect(snapshotDate(s.createdAt)).toContain("2026");
  expect(snapshotHref(s.id)).toBe(`/songs/snapshots/${s.id}`);
  expect(s.audio.arrangement.reduce((sum, c) => sum + c.durationMs, 0) / 1000).toBe(
    s.durationSeconds,
  );
  for (const asset of s.scene.assets) {
    const data = readFileSync(`public${asset.path}`);
    expect(createHash("sha256").update(data).digest("hex")).toBe(asset.sha256);
  }
});
it("ignores local drafts in review mode, permits seeking, and never writes storage", () => {
  const s = snapshots.find((s) => s.id === "2026-10-11T020537Z")!,
    key = `canvas-snapshot-draft:${s.id}`;
  const saved = JSON.stringify({ ...s.scene, revision: 999 });
  localStorage.setItem(key, saved);
  sessionStorage.setItem(`${key}:recovery`, saved);
  const localWrite = vi.spyOn(Storage.prototype, "setItem");
  render(
    <LiveStage
      defaultProject={s.scene}
      storageKey={key}
      readOnly
      draftHref={`${snapshotHref(s.id)}/draft`}
    />,
  );
  expect(screen.getByLabelText("Draft status").textContent).toContain("r36");
  expect(screen.queryByRole("button", { name: "Document" })).toBeNull();
  expect(screen.queryByRole("button", { name: "Objects" })).toBeNull();
  expect(screen.queryByLabelText("Scene objects")).toBeNull();
  fireEvent.change(screen.getByLabelText("Song time"), { target: { value: "300" } });
  expect(screen.getByLabelText("Song clock").textContent).toContain("10.00s");
  expect(localWrite).not.toHaveBeenCalled();
  expect(localStorage.getItem(key)).toBe(saved);
});
it("opens a separately saved editable draft without reading the user's opening draft", () => {
  const s = snapshots.find((s) => s.id === "2026-10-11T020537Z")!;
  localStorage.setItem("canvas-browser-opening-v1", "user-owned-r40-preserved");
  render(<LiveStage defaultProject={s.scene} storageKey={`canvas-snapshot-draft:${s.id}`} />);
  fireEvent.click(screen.getByRole("button", { name: "Document" }));
  fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
  expect(localStorage.getItem("canvas-browser-opening-v1")).toBe("user-owned-r40-preserved");
  expect(JSON.parse(localStorage.getItem(`canvas-snapshot-draft:${s.id}`)!).revision).toBe(36);
});
