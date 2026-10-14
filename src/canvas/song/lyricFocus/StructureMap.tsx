import { useState } from "react";
import type { Draft } from "./model";
import { songStructure } from "./structure";
export default function StructureMap({
  draft,
  activeId,
  disabled = false,
  onNavigate,
}: {
  draft: Draft;
  activeId: string;
  disabled?: boolean;
  onNavigate: (id: string) => void;
}) {
  const marks = songStructure(draft);
  const [inspected, setInspected] = useState<string | null>(null);
  const current = marks.find((m) => m.id === activeId);
  return (
    <nav className="structure-map" aria-label="Song structure">
      <div className="structure-groups">
        {[...new Set(marks.map((m) => m.arc))].map((arc) => (
          <div
            className="structure-group"
            role="group"
            aria-label={arc}
            key={arc}
          >
            {marks
              .filter((m) => m.arc === arc)
              .map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={`structure-mark ${m.kind}`}
                  aria-label={m.label}
                  title={m.label}
                  aria-current={m.id === activeId ? "location" : undefined}
                  disabled={disabled}
                  onFocus={() => setInspected(m.label)}
                  onMouseEnter={() => setInspected(m.label)}
                  onMouseLeave={() => setInspected(null)}
                  onBlur={() => setInspected(null)}
                  onClick={() => {
                    setInspected(m.label);
                    onNavigate(m.id);
                  }}
                >
                  <span aria-hidden="true">
                    {m.kind === "chorus"
                      ? "◇"
                      : m.kind === "instrumental"
                        ? "∿"
                        : "━"}
                  </span>
                </button>
              ))}
          </div>
        ))}
      </div>
      <p aria-live="polite">
        {inspected || current?.label || "Song structure"}
      </p>
    </nav>
  );
}
