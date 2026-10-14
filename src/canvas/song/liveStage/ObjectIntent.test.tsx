import { afterEach, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import ObjectIntent, { contextForObject, IntentChain, type ComponentContext } from "./ObjectIntent";
import ledger from "./director-ledger.json";
const contexts = ledger.componentContexts as ComponentContext[];
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
it("requires both document and object identity, preventing rationale leaking into older versions", () => {
  expect(
    contextForObject(contexts, "full-song-ai-monitor-layers-v2", "ai-page-learning-0")?.id,
  ).toBe("s02-page-correction");
  expect(contextForObject(contexts, "full-song-v6", "ai-page-learning-0")).toBeUndefined();
  expect(contextForObject(contexts, "full-song-ai-monitor-layers-v2", "unknown")).toBeUndefined();
});
it("shows rationale and evidence limits separately with the supporting plan link", () => {
  render(<IntentChain context={contexts[0]} />);
  expect(screen.getByText("Still unverified:")).toBeTruthy();
  expect(screen.getByText("Why separate items:")).toBeTruthy();
  expect(screen.getByRole("link").getAttribute("href")).toBe(
    `/songs/director#${contexts[0].proposalId}`,
  );
});
it("reports missing context without inventing a rationale", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true, json: async () => ({ componentContexts: contexts }) }),
  );
  render(<ObjectIntent documentId="full-song-v6" objectId="ai-page-learning-0" />);
  expect(await screen.findByText(/No authored causal context/)).toBeTruthy();
});

it("links readability intent back to its own editable version", () => {
  const context = contextForObject(contexts, "full-song-ai-readability-v3", "ai-page-learning-0");
  expect(context?.id).toBe("s02-page-correction-readability-v3");
  expect(context?.reviewHref).toBe("/songs/live-ai-readability?inspect=ai-page-learning-0");
  expect(context?.documents).toEqual(["full-song-ai-readability-v3"]);
});
