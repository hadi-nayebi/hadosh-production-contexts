import { afterEach, expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import previous from "./aiReadabilityStudy";
import study from "./aiCheckStudy";
import SceneArtwork from "./SceneArtwork";
import { validateScene, editObject } from "./scene.mjs";
afterEach(cleanup);
it("preserves the full source, lyric identities and continuous neighboring intervals", () => {
  expect(study.source).toEqual(previous.source);
  expect(study.arrangement).toEqual(previous.arrangement);
  expect(study.words).toEqual(previous.words);
  expect(study.composition).toEqual(previous.composition);
  expect(study.documentId).not.toBe(previous.documentId);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
  for (let i = 1; i < study.scenes.length; i++)
    expect(study.scenes[i].start).toBe(study.scenes[i - 1].end);
  for (const o of previous.objects.filter((o) => !o.id.startsWith("lyric-25-")))
    expect(study.objects.find((n) => n.id === o.id)).toEqual(o);
});
it("shows comparison then one local result without duplicate lyric sets at cuts", () => {
  const v = render(<SceneArtwork project={study} frame={3679} />);
  expect(v.container.textContent).toContain(
    "SOURCE NOTEOCT 14Illustrative dateworkshop.htmlBuild a simple pageOCT 14Preview →",
  );
  expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(9);
  const firstLine = Array.from(v.container.querySelectorAll('[data-text-role="lyric"]')).slice(
    0,
    4,
  );
  expect(new Set(firstLine.map((n) => n.getAttribute("y"))).size).toBe(1);
  expect(v.container.querySelector('[data-scene-object="ai-monitor-foreground"]')).toBeNull();
  v.rerender(<SceneArtwork project={study} frame={3722} />);
  expect(v.container.textContent).toContain(
    "Write · Edit · PreviewLOCAL PREVIEWBuild a simple page",
  );
  expect(v.container.textContent).not.toContain("Preview →");
  v.rerender(<SceneArtwork project={study} frame={3763} />);
  expect(v.container.querySelector('[data-scene-object="s03-desk"]')).toBeNull();
});
it("keeps tablet labels attached through a prop edit and independently editable after round trip", () => {
  const p = editObject(study, "s03-tablet", { x: 520 });
  const q = validateScene(JSON.parse(JSON.stringify(editObject(p, "s03-page-date", { x: 40 }))));
  expect(q.objects.find((o) => o.id === "s03-page-date")?.parentId).toBe("s03-tablet");
  expect(q.objects.find((o) => o.id === "s03-source")).toEqual(
    study.objects.find((o) => o.id === "s03-source"),
  );
});
