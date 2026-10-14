import { it, expect } from "vitest";
import { saveFullView } from "./fullViewStore";
it("allows view-only changes but protects drafts changed by another tab", () => {
  const map = new Map<string, string>(),
    store = {
      getItem: (k: string) => map.get(k) ?? null,
      setItem: (k: string, v: string) => {
        map.set(k, v);
      },
    };
  const first = saveFullView(store, "view", null, { span: 6, id: "a", draft: null });
  const zoom = saveFullView(store, "view", first, { span: 3, id: "a", draft: null });
  const draft = saveFullView(store, "view", first, { span: 6, id: "a", draft: { edit: "2" } });
  expect(() =>
    saveFullView(store, "view", zoom, { span: 3, id: "b", draft: { edit: "5" } }),
  ).toThrow("Another tab");
  expect(store.getItem("view")).toBe(draft);
  expect(() => saveFullView(store, "view", zoom, { span: 30, id: "b", draft: null })).toThrow(
    "Another tab",
  );
  expect(saveFullView(store, "view", draft, { span: 6, id: "a", draft: null })).toContain(
    '"draft":null',
  );
});

import { timingDraftBase, matchesTimingDraft } from "./fullViewStore";
import packages from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
it("keeps compact drafts exact across edits and recovers legacy full bases", () => {
  const a = structuredClone(packages[1].annotation) as Annotation;
  const base = timingDraftBase(a);
  expect(base.length).toBeLessThan(JSON.stringify(a).length);
  expect(matchesTimingDraft(base, a)).toBe(true);
  expect(matchesTimingDraft(JSON.stringify(a), a)).toBe(true);
  a.boundaries[1] += 0.01;
  expect(matchesTimingDraft(base, a)).toBe(false);
});
