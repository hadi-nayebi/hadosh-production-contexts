import { afterEach, beforeEach, it, expect, vi } from "vitest";
import { cleanup, render, screen, fireEvent, waitFor } from "@testing-library/react";
import WordVideoPreview from "./WordVideoPreview";
import { readPreviewHistory } from "./wordPreviewStore";
import packages from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
vi.mock("./wordPreviewStore", async (original) => ({
  ...(await original<typeof import("./wordPreviewStore")>()),
  readPreviewHistory: vi.fn(),
}));
const annotation = packages[0].annotation as Annotation,
  candidate = { annotation, audioUrl: "/test-recording.mp3" };
const history = [{ id: "prior", createdAt: "2026-10-12T00:00:00Z", annotation }];
beforeEach(() => {
  localStorage.clear();
  vi.mocked(readPreviewHistory).mockResolvedValue(history);
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true, arrayBuffer: async () => new ArrayBuffer(0) }),
  );
  vi.stubGlobal("crypto", {
    ...crypto,
    subtle: {
      digest: vi
        .fn()
        .mockResolvedValue(
          Uint8Array.from(annotation.audioHash.match(/../g)!, (b) => parseInt(b, 16)).buffer,
        ),
    },
  });
  vi.stubGlobal(
    "URL",
    class extends URL {
      static createObjectURL() {
        return "blob:test-recording";
      }
      static revokeObjectURL() {}
    },
  );
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
  localStorage.clear();
});
it("offers recording retry while retaining preview history and recoverable timing download", async () => {
  vi.mocked(fetch).mockRejectedValueOnce(Error("offline"));
  const { container } = render(<WordVideoPreview candidate={candidate} practice />);
  await screen.findByRole("button", { name: "Retry recording" });
  expect(screen.getByTestId("word-video-frame")).toBeTruthy();
  expect(
    screen
      .getByRole("button", { name: "Retry recording" })
      .compareDocumentPosition(screen.getByTestId("word-video-frame")) &
      Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
  expect(
    (screen.getByRole("button", { name: "Save reproducible preview data" }) as HTMLButtonElement)
      .disabled,
  ).toBe(false);
  fireEvent.click(screen.getByRole("button", { name: "Retry recording" }));
  await waitFor(() =>
    expect(container.querySelector("audio")?.getAttribute("src")).toBe("blob:test-recording"),
  );
  expect(screen.queryByRole("button", { name: "Retry recording" })).toBeNull();
  expect(
    screen.getByRole("combobox", { name: "Preview version", hidden: true }).textContent,
  ).toContain("2026-10-12");
});
it("retries failed history loading without writing or manufacturing a replacement version", async () => {
  vi.mocked(readPreviewHistory).mockRejectedValueOnce(Error("database busy"));
  render(<WordVideoPreview candidate={candidate} practice />);
  await screen.findByRole("button", { name: "Retry preview history" });
  expect(screen.queryByTestId("word-video-frame")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Retry preview history" }));
  await screen.findByTestId("word-video-frame");
  expect(screen.queryByRole("button", { name: "Retry preview history" })).toBeNull();
  expect(vi.mocked(readPreviewHistory)).toHaveBeenCalledTimes(2);
});
it("keeps phase-four dashboard usable while saved timing is still loading", async () => {
  let resolveHistory!: (v: typeof history) => void;
  vi.mocked(readPreviewHistory).mockReturnValueOnce(
    new Promise((resolve) => {
      resolveHistory = resolve;
    }),
  );
  const r = render(<WordVideoPreview candidate={candidate} practice sceneMode />);
  expect(screen.getByLabelText("Current live version").textContent).toContain(
    "loading saved timing",
  );
  expect(
    JSON.parse(r.container.querySelector("[data-live-review-receipt]")!.textContent!)
      .sceneLifetimes,
  ).toEqual([]);
  resolveHistory(history);
  await waitFor(() =>
    expect(r.container.querySelector("audio")?.getAttribute("src")).toBe("blob:test-recording"),
  );
  expect(r.container.querySelector('[data-testid="scene-video-frame"]')).not.toBeNull();
});
