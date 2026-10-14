import { useState } from "react";
import { previewKeys, buildWordPreview, previewStale, previewHistory } from "./wordPreviewStore";
import { parseAnnotation, type Annotation } from "./audioAnnotation";
import { initialDraft } from "./model";
import { wordTiming } from "./wordTiming";
import { activeWord } from "./WordVideoFrame";
import { afterEach, it, expect, vi } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import FullAudioView, { previewAnchor } from "./FullAudioView";
import packages from "./v0Performance.json";
import { eligibleAnchors, approveAnchor } from "./anchorReview";
import type { Performance } from "./audioAnchors";
vi.mock("./SourceSpectrogram", () => ({
  default: ({ full }: any) => <div>{full.overlay(0, 6)}</div>,
}));
afterEach(() => {
  cleanup();
  localStorage.clear();
});
it("never labels an unsaved moved timestamp approved while preserving unchanged receipts", async () => {
  const p = packages[0] as Performance;
  const a = eligibleAnchors(p.annotation, p.containers, p.phrases)[0];
  const approved = { ...a, status: "approved" as const };
  expect(previewAnchor(approved, approved.time)).toBe(approved);
  expect(previewAnchor(approved, approved.time + 0.1).status).toBe("stale");
  expect(previewAnchor({ ...a, status: "automatic pending" }, a.time + 0.1).status).toBe(
    "manual pending",
  );
  expect(approved.status).toBe("approved");
});
it("does not carry a clean edit to a different anchor; empty input blocks leaving", async () => {
  const p = packages[0] as Performance,
    anchors = eligibleAnchors(p.annotation, p.containers, p.phrases),
    dirty = vi.fn(),
    back = vi.fn();
  render(
    <FullAudioView
      viewKey="test-view"
      annotation={p.annotation}
      anchors={anchors}
      audio={{ current: null }}
      url=""
      onSave={() => true}
      onOpen={() => {}}
      onBack={back}
      repairActive={false}
      onDirty={dirty}
    />,
  );
  const starts = screen.getAllByRole("button", { name: /word start/ });
  fireEvent.pointerDown(starts[0], { pointerId: 1 });
  expect(starts[0].isConnected).toBe(true);
  expect(screen.queryByRole("heading")).toBeNull();
  fireEvent.pointerUp(starts[0], { pointerId: 1 });
  await act(async () => {
    fireEvent.click(starts[0]);
  });
  fireEvent.change(screen.getByRole("combobox", { name: "Visible anchor kinds" }), {
    target: { value: "phrase" },
  });
  expect(screen.queryByRole("heading")).toBeNull();
  expect(screen.queryByRole("button", { name: /Come · word start/ })).toBeNull();
  fireEvent.change(screen.getByRole("combobox", { name: "Visible anchor kinds" }), {
    target: { value: "word" },
  });
  await act(async () => {
    fireEvent.click(screen.getAllByRole("button", { name: /word start/ })[0]);
  });
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /^Unlock/ }));
  });
  await act(async () => {
    fireEvent.click(screen.getAllByRole("button", { name: /word start/ })[1]);
  });
  expect(screen.queryByRole("textbox")).toBeNull();
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /^Unlock/ }));
  });
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "" } });
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "← All sections" }));
  });
  expect(back).not.toHaveBeenCalled();
  expect(
    screen
      .getAllByRole("status")
      .map((node) => node.textContent)
      .join(" "),
  ).toContain("Keep time inside");
  expect(dirty).toHaveBeenLastCalledWith(true);
  expect(
    (screen.getByRole("combobox", { name: "Visible anchor kinds" }) as HTMLSelectElement).disabled,
  ).toBe(true);
  await act(async () => {
    fireEvent.click(screen.getAllByRole("button", { name: /^word:/ })[0]);
  });
  expect(
    screen
      .getAllByRole("status")
      .map((node) => node.textContent)
      .join(" "),
  ).toContain("Save or discard");
});
for (const raw of packages)
  it(`Full audio save, focused handoff, preview, undo and source isolation: ${raw.id}`, async () => {
    const p = raw as Performance,
      source = p.annotation,
      keys = previewKeys(source, true),
      other = packages.find((x) => x.id !== p.id)!.annotation as Annotation;
    const otherKeys = previewKeys(other, true);
    localStorage.setItem(otherKeys.saved, JSON.stringify(other));
    const untouched = localStorage.getItem(otherKeys.saved);
    const first = wordTiming(source).intervals[0],
      later = (first.start + first.end) / 2,
      opened = vi.fn();
    function Fixture() {
      const [a, setA] = useState(source);
      return (
        <FullAudioView
          viewKey={`view:${source.audioHash}`}
          annotation={a}
          anchors={eligibleAnchors(a, p.containers, p.phrases)}
          audio={{ current: null }}
          url=""
          onSave={(next) => {
            const checked = parseAnnotation(
              JSON.stringify(next),
              initialDraft(),
              source.audioHash,
              source.duration,
              source,
            );
            localStorage.setItem(keys.saved, JSON.stringify(checked));
            setA(checked);
            return true;
          }}
          onOpen={opened}
          onBack={() => {}}
          repairActive={false}
          onDirty={() => {}}
        />
      );
    }
    render(<Fixture />);
    const before = await buildWordPreview(localStorage, source, true, async () => {});
    await act(async () => {
      fireEvent.click(screen.getAllByRole("button", { name: /word start/ })[0]);
    });
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^Unlock/ }));
    });
    fireEvent.change(screen.getByRole("textbox"), { target: { value: String(later) } });
    const unsaved = await buildWordPreview(localStorage, source, true, async () => {});
    expect(activeWord(unsaved.version.annotation, first.start)?.id).toBe(first.id);
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Save anchor" }));
    });
    const saved = JSON.parse(localStorage.getItem(keys.saved)!);
    expect(previewStale(before.version.annotation, saved)).toBe(true);
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Open focused editor" }));
    });
    expect(opened.mock.calls.at(-1)?.[0].time).toBe(later);
    const updated = await buildWordPreview(localStorage, source, true, async () => {});
    expect(activeWord(updated.version.annotation, first.start)).toBeNull();
    expect(activeWord(updated.version.annotation, later)?.id).toBe(first.id);
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Undo timing adjustment" }));
    });
    const undone = await buildWordPreview(localStorage, source, true, async () => {});
    expect(activeWord(undone.version.annotation, first.start)?.id).toBe(first.id);
    expect(localStorage.getItem(otherKeys.saved)).toBe(untouched);
    expect(previewHistory(localStorage, source, keys.history)).toHaveLength(4);
  });

it("unlock and relock do not mutate human approval", async () => {
  const p = packages[0] as Performance,
    first = eligibleAnchors(p.annotation, p.containers, p.phrases).find(
      (a) => a.wordIndex !== undefined && a.edge === "start",
    )!,
    approved = approveAnchor(p.annotation, first),
    save = vi.fn();
  render(
    <FullAudioView
      viewKey="lock-check"
      annotation={approved}
      anchors={eligibleAnchors(approved, p.containers, p.phrases)}
      audio={{ current: null }}
      url=""
      onSave={save}
      onOpen={() => {}}
      onBack={() => {}}
      repairActive={false}
      onDirty={() => {}}
    />,
  );
  await act(async () => {
    fireEvent.click(screen.getAllByRole("button", { name: /word start/ })[0]);
  });
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /^Unlock/ }));
  });
  expect(screen.getByRole("button", { name: "Lock interval" })).toBeTruthy();
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Lock interval" }));
  });
  expect(screen.getByRole("button", { name: /^Unlock/ })).toBeTruthy();
  expect(save).not.toHaveBeenCalled();
  expect(screen.getByText(/✓ Approved/)).toBeTruthy();
});
it("does not resurrect a recovered adjustment as an old draft after saving it", async () => {
  const p = packages[0] as Performance,
    source = p.annotation,
    anchor = eligibleAnchors(source, p.containers, p.phrases).find(
      (a) => a.wordIndex !== undefined && a.edge === "start",
    )!;
  localStorage.setItem(
    "recovery-save",
    JSON.stringify({
      span: 6,
      center: 3,
      id: anchor.id,
      filter: "auto",
      draft: { base: JSON.stringify(source), edit: String(anchor.time + 0.01), move: null },
    }),
  );
  function Fixture() {
    const [a, setA] = useState(source);
    return (
      <FullAudioView
        viewKey="recovery-save"
        annotation={a}
        anchors={eligibleAnchors(a, p.containers, p.phrases)}
        audio={{ current: null }}
        url=""
        onSave={(next) => {
          setA(next);
          return true;
        }}
        onOpen={() => {}}
        onBack={() => {}}
        repairActive={false}
        onDirty={() => {}}
      />
    );
  }
  render(<Fixture />);
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Save anchor" }));
  });
  expect(screen.queryByText("Retained adjustment from earlier saved timing")).toBeNull();
  expect(JSON.parse(localStorage.getItem("recovery-save")!).draft).toBeNull();
});

it("saves the whole phrase group before internal navigation and stays put on save failure", async () => {
  const p = packages[1] as Performance,
    source = p.annotation;
  const save = vi.fn((_a: Annotation) => false),
    back = vi.fn();
  render(
    <FullAudioView
      viewKey="group-navigation"
      annotation={source}
      phrases={p.phrases}
      anchors={eligibleAnchors(source, p.containers, p.phrases)}
      audio={{ current: null }}
      url=""
      onSave={save}
      onOpen={() => {}}
      onBack={back}
      repairActive={false}
      onDirty={() => {}}
    />,
  );
  const region = screen.getByRole("button", { name: /^phrase: Come closer/ });
  await act(async () => {
    fireEvent.click(region);
  });
  expect(screen.queryByText("Phrase + 2 words")).toBeNull();
  expect(screen.queryByText("Unlock")).toBeNull();
  expect(screen.getByTitle("Unlock phrase and all 2 words")).toBeTruthy();
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /^Unlock/ }));
  });
  fireEvent.keyDown(region, { key: "ArrowRight" });
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "← All sections" }));
  });
  expect(back).not.toHaveBeenCalled();
  expect(screen.getByRole("button", { name: "Save interval" })).toBeTruthy();
  const submitted = save.mock.calls[0][0] as unknown as Annotation;
  const before = wordTiming(source).intervals;
  expect(wordTiming(submitted).intervals.slice(0, 2)).toEqual(
    before.slice(0, 2).map((w) => ({ ...w, start: w.start + 0.01, end: w.end + 0.01 })),
  );
  save.mockReturnValue(true);
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "← All sections" }));
  });
  expect(back).toHaveBeenCalledTimes(1);
  expect(JSON.parse(localStorage.getItem("group-navigation")!).draft).toBeNull();
});
