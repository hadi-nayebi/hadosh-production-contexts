import { afterEach, expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import previous from "./aiCheckStudy";
import study from "./aiPermissionStudy";
import SceneArtwork from "./SceneArtwork";
import { validateScene, editObject } from "./scene.mjs";
afterEach(cleanup);
it("preserves source and stable lyric identities while splitting only the permission interval", () => {
  expect(study.source).toEqual(previous.source);
  expect(study.arrangement).toEqual(previous.arrangement);
  expect(study.words).toEqual(previous.words);
  expect(study.composition).toEqual(previous.composition);
  for (let i = 1; i < study.scenes.length; i++)
    expect(study.scenes[i].start).toBe(study.scenes[i - 1].end);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("holds body fixed and delays the local consequence until after forearm contact", () => {
  const v = render(<SceneArtwork project={study} frame={3855} />);
  expect(v.container.textContent).toContain("Waiting");
  expect(v.container.textContent).not.toContain("Saved locally");
  expect(
    v.container
      .querySelector('[data-scene-object="s04-person"] [data-limb-angle]')
      ?.getAttribute("data-limb-angle"),
  ).toBe("0");
  v.rerender(<SceneArtwork project={study} frame={3879} />);
  expect(
    v.container
      .querySelector('[data-scene-object="s04-forearm"] [data-limb-angle]')
      ?.getAttribute("data-limb-angle"),
  ).toBe("7");
  expect(v.container.textContent).not.toContain("Saved locally");
  v.rerender(<SceneArtwork project={study} frame={3880} />);
  expect(v.container.textContent).toContain("Saved locally");
  v.rerender(<SceneArtwork project={study} frame={3885} />);
  expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(0);
});
it("validates editable arm timing and rejects invalid masks and unsafe rotations", () => {
  const arm = study.objects.find((o) => o.id === "s04-forearm")!;
  expect(
    editObject(study, arm.id, { animation: { startFrame: 3845, endFrame: 3870 } }).objects.find(
      (o) => o.id === arm.id,
    )?.animation?.endFrame,
  ).toBe(3870);
  expect(() => editObject(study, arm.id, { limb: { ...arm.limb!, degrees: 90 } })).toThrow(
    /articulated/,
  );
  expect(() => editObject(study, arm.id, { limb: { ...arm.limb!, polygon: [] } })).toThrow(
    /articulated/,
  );
});

it("keeps component context and return links scoped to this isolated version", async () => {
  const { default: ledger } = await import("./director-ledger.json");
  const contexts = ledger.componentContexts.filter((c) => c.documents.includes(study.documentId!));
  for (const id of [
    "s04-person",
    "s04-forearm",
    "s04-wait",
    "s04-local-choice",
    "s04-saved",
    "s04-preview-kept",
    ...study.objects.filter((o) => o.id.startsWith("lyric-26-")).map((o) => o.id),
  ]) {
    const context = contexts.find((c) => c.objectIds.includes(id));
    expect(context, id).toBeDefined();
    expect(context!.reviewHref).toMatch(/^\/songs\/live-ai-permission\?inspect=/);
    expect(ledger.proposals.some((p) => p.id === context!.proposalId)).toBe(true);
  }
});
