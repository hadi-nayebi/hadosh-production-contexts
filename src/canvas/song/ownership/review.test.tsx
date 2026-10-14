import { afterEach, describe, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { snapshot, ownershipProject } from "./snapshot";
import {
  changedSections,
  initialReview,
  parseReview,
  reviewPacket,
  reviseProposal,
} from "./review";
import VisualReview from "./VisualReview";
import { parseProject } from "../model";
afterEach(() => {
  cleanup();
  localStorage.clear();
});
describe("Departments snapshot and local review boundary", () => {
  test("imports current story in order without inventing production artifacts or approval", () => {
    expect(snapshot.sections.map((s) => s.id)).toEqual([
      "opening",
      "browser",
      "social",
      "harness",
      "accumulation",
      "toaster",
    ]);
    const p = ownershipProject();
    expect(parseProject(JSON.stringify(p))).toEqual(p);
    expect(p.title).toBe("Who Holds the Keys?");
    expect(p.takes).toEqual([]);
    expect(p.cues).toEqual([]);
    expect(p.scenes).toEqual([]);
    expect(p.approved.every((a) => a === null)).toBe(true);
    expect(p.lines.some((l) => l.text.includes("L-L-M"))).toBe(true);
  });
  test("review round trips retain source baseline and local proposals without mutating canonical content", () => {
    const original = JSON.stringify(snapshot);
    const next = reviseProposal(initialReview(snapshot), "browser", {
      lyrics: "Alternative line",
      notes: "More room for motion",
      verdict: "revise",
    });
    const packet = reviewPacket(next, snapshot);
    expect(changedSections(next, snapshot)).toBe(1);
    expect(packet.baseline.find((s) => s.sectionId === "browser")!.lyrics).toContain("Netscape");
    expect(parseReview(JSON.stringify({ ...packet, approved: true }), snapshot)).toEqual(next);
    expect(JSON.stringify(snapshot)).toBe(original);
  });
  test("foreign revisions, duplicate sections and malformed proposals are rejected", () => {
    const p = initialReview(snapshot);
    expect(() =>
      parseReview(JSON.stringify({ ...p, source: { ...p.source, commit: "wrong" } }), snapshot),
    ).toThrow(/different Departments snapshot/);
    expect(() =>
      parseReview(
        JSON.stringify({ ...p, proposals: [p.proposals[0], ...p.proposals.slice(0, -1)] }),
        snapshot,
      ),
    ).toThrow(/Invalid review/);
    expect(() =>
      parseReview(
        JSON.stringify({
          ...p,
          proposals: p.proposals.map((s) => ({ ...s, verdict: "approved" })),
        }),
        snapshot,
      ),
    ).toThrow(/Invalid review/);
    expect(() => parseReview("null", snapshot)).toThrow();
  });
  test("edits autosave, stay distinct from source, survive reload and can be undone", () => {
    const view = render(<VisualReview snapshot={snapshot} />);
    fireEvent.click(screen.getByRole("button", { name: /02 A doorway/ }));
    fireEvent.change(screen.getByLabelText("Proposed lyrics"), {
      target: { value: "A new doorway line" },
    });
    expect(screen.getByText(/1 changed section/)).toBeTruthy();
    expect(view.container.querySelector(".review-original pre")!.textContent).toContain(
      "Back when the web was young,",
    );
    view.unmount();
    render(<VisualReview snapshot={snapshot} />);
    fireEvent.click(screen.getByRole("button", { name: /02 A doorway/ }));
    expect((screen.getByLabelText("Proposed lyrics") as HTMLTextAreaElement).value).toBe(
      "A new doorway line",
    );
    fireEvent.click(screen.getByRole("button", { name: "Restore this section from source" }));
    expect((screen.getByLabelText("Proposed lyrics") as HTMLTextAreaElement).value).toContain(
      "Netscape",
    );
    fireEvent.click(screen.getByRole("button", { name: "Undo review edit" }));
    expect((screen.getByLabelText("Proposed lyrics") as HTMLTextAreaElement).value).toBe(
      "A new doorway line",
    );
  });
  test("corrupt storage is surfaced and is not overwritten on opening", () => {
    const key = `canvas-song-review-v1:${snapshot.source.commit}`;
    localStorage.setItem(key, "bad json");
    render(<VisualReview snapshot={snapshot} />);
    expect(screen.getByRole("status").textContent).toContain("has not been overwritten");
    expect(localStorage.getItem(key)).toBe("bad json");
  });
});
