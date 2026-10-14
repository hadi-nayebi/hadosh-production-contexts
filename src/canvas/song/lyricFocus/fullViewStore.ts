type Store = Pick<Storage, "getItem" | "setItem">;
function draftToken(raw: string | null) {
  const view = JSON.parse(raw || "null");
  return JSON.stringify({
    draft: view?.draft ?? null,
    id: view?.draft ? view.id : null,
    retainedDraft: view?.retainedDraft ?? null,
  });
}
/** View-only changes may coexist; a foreign draft can never be replaced implicitly. */
export function saveFullView(store: Store, key: string, previous: string | null, next: unknown) {
  const current = store.getItem(key);
  if (current !== previous && draftToken(current) !== draftToken(previous))
    throw Error(
      "Another tab changed this timeline draft. Your current fields are retained here; save a copy before reloading.",
    );
  const raw = JSON.stringify(next);
  store.setItem(key, raw);
  return raw;
}

/** Exact current editing dependencies, excluding duplicated immutable evidence and undo history. */
export function timingDraftBase(a: import("./audioAnnotation").Annotation) {
  return JSON.stringify({
    schema: "timing-draft-base-v2",
    audioHash: a.audioHash,
    lyricStamp: a.lyricStamp,
    duration: a.duration,
    phraseTiming: a.phraseTiming,
    revision: a.revision,
    boundaries: a.boundaries,
    items: a.items.map((i) => [i.id, i.text, i.kind, i.groupId, i.phraseId]),
    words: a.wordTiming && { revision: a.wordTiming.revision, intervals: a.wordTiming.intervals },
    review: a.review,
  });
}
export function matchesTimingDraft(base: unknown, a: import("./audioAnnotation").Annotation) {
  return typeof base === "string" && (base === timingDraftBase(a) || base === JSON.stringify(a));
}
