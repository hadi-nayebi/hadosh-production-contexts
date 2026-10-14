import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import LiveStage from "./LiveStage";
import seed from "./seed.json";
import { validateScene, editObject } from "./scene.mjs";
import { readLargeCheckpoint, writeLargeCheckpoint } from "./largeCheckpoint";
vi.mock("./largeCheckpoint", () => ({
  readLargeCheckpoint: vi.fn(),
  writeLargeCheckpoint: vi.fn(),
}));
const key = "quota-scene-test";
beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.stubGlobal("indexedDB", {});
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  vi.mocked(readLargeCheckpoint).mockResolvedValue(null);
  vi.mocked(writeLargeCheckpoint).mockResolvedValue(null);
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});
async function edit() {
  render(<LiveStage storageKey={key} />);
  fireEvent.click(await screen.findByRole("button", { name: "Select Add" }));
  fireEvent.click(screen.getByRole("button", { name: "position" }));
  fireEvent.change(screen.getByLabelText("Object X"), { target: { value: "95" } });
  fireEvent.click(screen.getByRole("button", { name: "Document" }));
}
it("preserves old saves and only marks a quota-fallback save successful after transaction completion", async () => {
  localStorage.setItem("protected-old-version", "keep me");
  const original = Storage.prototype.setItem;
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (this: Storage, k, v) {
    if (k === key) throw new DOMException("full", "QuotaExceededError");
    original.call(this, k, v);
  });
  let finish!: (value: null) => void;
  vi.mocked(writeLargeCheckpoint).mockImplementation(
    () =>
      new Promise((resolve) => {
        finish = resolve;
      }),
  );
  await edit();
  fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
  expect(screen.getByLabelText("Draft status").textContent).toContain("UNSAVED CHANGES");
  expect(localStorage.getItem("protected-old-version")).toBe("keep me");
  const raw = vi.mocked(writeLargeCheckpoint).mock.calls[0][1];
  expect(JSON.parse(raw).objects.find((o: { id: string }) => o.id === "w001").x).toBe(95);
  finish(null);
  await waitFor(() =>
    expect(screen.getByLabelText("Draft status").textContent).toContain("saved local checkpoint"),
  );
  expect(localStorage.getItem(key)).toBeNull();
});
it("loads the newer IndexedDB checkpoint ahead of stale localStorage", async () => {
  localStorage.setItem(key, JSON.stringify(seed));
  const saved = editObject(validateScene(structuredClone(seed)), "w001", { x: 95 });
  vi.mocked(readLargeCheckpoint).mockResolvedValue(JSON.stringify(saved));
  render(<LiveStage storageKey={key} />);
  fireEvent.click(await screen.findByRole("button", { name: "Select Add" }));
  fireEvent.click(screen.getByRole("button", { name: "position" }));
  expect((screen.getByLabelText("Object X") as HTMLInputElement).value).toBe("95");
  expect(localStorage.getItem(key)).toBe(JSON.stringify(seed));
});
it("keeps the draft unsaved when both storage paths fail", async () => {
  const original = Storage.prototype.setItem;
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (this: Storage, k, v) {
    if (k === key) throw new DOMException("full", "QuotaExceededError");
    original.call(this, k, v);
  });
  vi.mocked(writeLargeCheckpoint).mockRejectedValue(new Error("Disk storage unavailable"));
  await edit();
  fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
  expect(await screen.findByText("Disk storage unavailable")).toBeTruthy();
  expect(screen.getByLabelText("Draft status").textContent).toContain("UNSAVED CHANGES");
});
it("does not expose an older editable draft if checkpoint lookup fails", async () => {
  localStorage.setItem(key, JSON.stringify(seed));
  vi.mocked(readLargeCheckpoint).mockRejectedValue(new Error("Storage blocked"));
  render(<LiveStage storageKey={key} />);
  expect((await screen.findByRole("alert")).textContent).toContain("Storage blocked");
  expect(screen.queryByRole("button", { name: "Document" })).toBeNull();
  expect(localStorage.getItem(key)).toBe(JSON.stringify(seed));
});
it("waits for the checkpoint transaction before exporting a saved revision", async () => {
  const original = Storage.prototype.setItem;
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (this: Storage, k, v) {
    if (k === key) throw new DOMException("full", "QuotaExceededError");
    original.call(this, k, v);
  });
  let finish!: (value: null) => void;
  vi.mocked(writeLargeCheckpoint).mockImplementation(
    () =>
      new Promise((resolve) => {
        finish = resolve;
      }),
  );
  const create = vi.fn(() => "blob:saved-test");
  vi.stubGlobal("URL", { createObjectURL: create, revokeObjectURL: vi.fn() });
  vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
  await edit();
  fireEvent.click(screen.getByRole("button", { name: "Export saved scene JSON" }));
  fireEvent.click(screen.getByRole("button", { name: "Save and export current revision" }));
  expect(create).not.toHaveBeenCalled();
  finish(null);
  await waitFor(() => expect(create).toHaveBeenCalledOnce());
});
it("imports a real full-song export over 500 KB only after confirmation and preserves the saved checkpoint", async () => {
  const { default: full } = await import("./aiHarnessStudy");
  const json = JSON.stringify(full, null, 2);
  expect(new TextEncoder().encode(json).length).toBeGreaterThan(500000);
  localStorage.setItem(key, JSON.stringify(seed));
  render(<LiveStage storageKey={key} />);
  fireEvent.click(await screen.findByRole("button", { name: "Document" }));
  const file = {
    size: new TextEncoder().encode(json).length,
    text: vi.fn().mockResolvedValue(json),
  };
  fireEvent.change(screen.getByLabelText("Import scene JSON"), { target: { files: [file] } });
  const use = await screen.findByRole("button", { name: "Use imported scene" });
  const read = () =>
    JSON.parse((screen.getByLabelText("Working draft JSON") as HTMLTextAreaElement).value);
  expect(read().documentId).toBe(seed.documentId);
  fireEvent.click(use);
  fireEvent.click(screen.getByRole("button", { name: "Document" }));
  expect(read().documentId).toBe(full.documentId);
  expect(read().words).toEqual(full.words);
  expect(localStorage.getItem(key)).toBe(JSON.stringify(seed));
  expect(screen.getByLabelText("Draft status").textContent).toContain("UNSAVED CHANGES");
});
it("rejects an oversized import before reading bytes and leaves the document intact", async () => {
  render(<LiveStage storageKey={key} />);
  fireEvent.click(await screen.findByRole("button", { name: "Document" }));
  const file = { size: 5_000_001, text: vi.fn() };
  fireEvent.change(screen.getByLabelText("Import scene JSON"), { target: { files: [file] } });
  expect(await screen.findByText("Scene file exceeds the 5 MB import limit")).toBeTruthy();
  expect(file.text).not.toHaveBeenCalled();
  expect(screen.queryByRole("button", { name: "Use imported scene" })).toBeNull();
  expect(
    JSON.parse((screen.getByLabelText("Working draft JSON") as HTMLTextAreaElement).value)
      .documentId,
  ).toBe(seed.documentId);
});
