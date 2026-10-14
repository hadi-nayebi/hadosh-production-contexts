import { useState, useRef } from "react";
import type { Annotation } from "./audioAnnotation";
import {
  newWordRepair,
  parseWordRepair,
  repairProblem,
  applyWordRepair,
  type WordRepair,
} from "./wordRepair";
export default function WordRepairEditor({
  annotation,
  storageKey,
  wordId,
  initialEdge,
  initialValue,
  onApply,
  onActive,
  onUnsaved,
}: {
  annotation: Annotation;
  storageKey: string;
  wordId: string;
  initialEdge: "start" | "end";
  initialValue: string;
  onApply: (a: Annotation) => boolean | Promise<boolean>;
  onActive: (active: boolean) => void;
  onUnsaved: (unsaved: boolean) => void;
}) {
  const [error, setError] = useState("");
  const storedRaw = useRef(localStorage.getItem(storageKey));
  const [draft, setDraft] = useState<WordRepair>(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const old = parseWordRepair(raw, annotation);
      return old;
    }
    const d = newWordRepair(annotation);
    const w = d.words.find((w) => w.id === wordId);
    if (w) w[initialEdge] = initialValue;
    return d;
  });
  const [center, setCenter] = useState(() => draft.words.findIndex((w) => w.id === wordId));
  const problem = repairProblem(annotation, draft);
  const baseChanged = draft.base !== JSON.stringify(annotation);
  const retained = !draft.active || baseChanged;
  function persist(next: WordRepair) {
    setDraft(next);
    try {
      if (localStorage.getItem(storageKey) !== storedRaw.current) throw Error();
      const raw = JSON.stringify(next);
      localStorage.setItem(storageKey, raw);
      storedRaw.current = raw;
      setDraft(next);
      onUnsaved(false);
      onActive(next.active);
      setError("");
      return true;
    } catch {
      onUnsaved(true);
      setError(
        "Repair could not be saved or changed in another tab. Current fields are retained here. Save a repair copy before reloading; another tab may hold a newer draft.",
      );
      return false;
    }
  }
  function change(id: string, edge: "start" | "end", value: string) {
    const next = structuredClone(draft);
    next.history.push(structuredClone(next.words));
    next.words.find((w) => w.id === id)![edge] = value;
    next.active = true;
    persist(next);
  }
  return (
    <section className="word-repair-editor" aria-label="Local word timing repair">
      {!retained && (
        <p>Repair neighboring words. Draft changes stay separate until you apply a valid repair.</p>
      )}
      <details open={retained ? undefined : true} className="repair-fields">
        <summary hidden={!retained}>View retained repair</summary>
        {draft.words.slice(Math.max(0, center - 1), center + 2).map((w) => (
          <div className="word-repair-row" key={w.id}>
            <strong>{annotation.items.find((i) => i.id === w.id)?.text}</strong>
            {(["start", "end"] as const).map((edge) => (
              <label key={edge}>
                {edge}
                <input
                  aria-label={`${annotation.items.find((i) => i.id === w.id)?.text} repair ${edge}`}
                  type="text"
                  inputMode="decimal"
                  value={w[edge]}
                  readOnly={retained}
                  onChange={(e) => change(w.id, edge, e.target.value)}
                />
              </label>
            ))}
          </div>
        ))}
        <button disabled={center <= 0} onClick={() => setCenter((i) => i - 1)}>
          Previous repair word
        </button>
        <button disabled={center >= draft.words.length - 1} onClick={() => setCenter((i) => i + 1)}>
          Next repair word
        </button>
      </details>
      <p role="status">
        {error ||
          (!draft.active
            ? "Previous repair retained. Start a new repair to change current timing."
            : baseChanged
              ? "Saved timing changed since this draft began. Draft retained; start a new repair from current timing."
              : problem || "Draft is valid and ready to apply.")}
      </p>
      {error && (
        <button
          onClick={async () => {
            const url = URL.createObjectURL(
              new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" }),
            );
            const link = document.createElement("a");
            link.href = url;
            link.download = `word-repair-${annotation.audioHash.slice(0, 8)}.json`;
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          }}
        >
          Save repair copy
        </button>
      )}
      {(!draft.active || baseChanged) && (
        <button
          onClick={async () => {
            try {
              const archive = JSON.parse(localStorage.getItem(`${storageKey}:history`) || "[]");
              if (!Array.isArray(archive)) throw Error();
              localStorage.setItem(`${storageKey}:history`, JSON.stringify([...archive, draft]));
              const next = newWordRepair(annotation);
              const word = next.words.find((w) => w.id === wordId);
              if (word) word[initialEdge] = initialValue;
              persist(next);
            } catch {
              setError("Previous repair could not be archived; retained unchanged.");
            }
          }}
        >
          Start new repair from saved timing
        </button>
      )}
      {!retained && (
        <>
          {error && (
            <button onClick={() => persist({ ...draft, active: true })}>Keep repair draft</button>
          )}
          <button
            disabled={!draft.history.length}
            onClick={async () => {
              const next = structuredClone(draft);
              next.words = next.history.pop()!;
              persist(next);
            }}
          >
            Undo repair edit
          </button>
          <button
            disabled={!!problem || !draft.active || baseChanged}
            onClick={async () => {
              try {
                if (localStorage.getItem(storageKey) !== storedRaw.current)
                  throw Error("Repair changed in another tab; reload before applying.");
                const next = applyWordRepair(annotation, draft);
                if (await onApply(next)) persist({ ...draft, active: false });
              } catch (e) {
                setError(e instanceof Error ? e.message : String(e));
              }
            }}
          >
            Apply valid repair
          </button>
          <button onClick={() => persist({ ...draft, active: false })}>Set repair aside</button>
        </>
      )}
    </section>
  );
}
