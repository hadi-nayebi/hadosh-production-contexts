import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import previous from "./aiMemoryStudy";
import study from "./aiHarnessStudy";
import SceneArtwork from "./SceneArtwork";
import { editObject, validateScene } from "./scene.mjs";
afterEach(cleanup);
it("preserves recording, lyrics, arrangement and assets, with contiguous full-song coverage", () => {
  for (const key of ["source", "words", "arrangement", "composition", "assets"] as const)
    expect(study[key]).toEqual(previous[key]);
  expect(previous.scenes.find((s) => s.start === 4126)!.end).toBe(4309);
  for (let i = 1; i < study.scenes.length; i++)
    expect(study.scenes[i].start).toBe(study.scenes[i - 1].end);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("receives suggestions before allowing reading while publishing stays gated", () => {
  const v = render(<SceneArtwork project={study} frame={4126} />);
  for (const [frame, received, allowed, lyricCount] of [
    [4126, false, false, 10],
    [4201, false, false, 10],
    [4202, true, false, 10],
    [4214, true, true, 12],
    [4302, true, true, 12],
    [4126, false, false, 10],
  ] as const) {
    v.rerender(<SceneArtwork project={study} frame={frame} />);
    const text = v.container.textContent!;
    expect(text.includes("Words received")).toBe(received);
    expect(text.includes("Allowed ✓")).toBe(allowed);
    expect(text).toContain("Ask me first");
    expect(text).toContain("No tool access");
    expect(text).not.toContain("Page online");
    expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(lyricCount);
  }
  v.rerender(<SceneArtwork project={study} frame={4303} />);
  expect(v.container.querySelector('[data-scene-object="s07-harness"]')).toBeNull();
});
it("keeps independent rule edits round-trippable without touching source or prior draft", () => {
  const edited = validateScene(
    JSON.parse(
      JSON.stringify(
        editObject(study, "s07-publish-wait", {
          text: "Wait for approval",
          x: 430,
        }),
      ),
    ),
  );
  expect(edited.objects.find((o) => o.id === "s07-publish-wait")!.text).toBe("Wait for approval");
  expect(edited.objects.find((o) => o.id === "s07-read-allowed")).toEqual(
    study.objects.find((o) => o.id === "s07-read-allowed"),
  );
  expect(edited.words).toEqual(previous.words);
  expect(study.objects.find((o) => o.id === "s07-publish-wait")!.text).toBe("Ask me first");
});
it("links every S07 component and source word to its version-scoped context", async () => {
  const { default: ledger } = await import("./director-ledger.json");
  const contexts = ledger.componentContexts.filter((c) => c.documents.includes(study.documentId!));
  const scene = study.scenes.find((s) => s.start === 4126)!;
  for (const id of scene.objectIds) {
    const context = contexts.find((c) => c.objectIds.includes(id));
    expect(context, id).toBeDefined();
    expect(context!.reviewHref).toMatch(/^\/songs\/live-ai-harness\?inspect=/);
    expect(ledger.proposals.some((p) => p.id === context!.proposalId)).toBe(true);
  }
});
