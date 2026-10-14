import { uid } from "./model";
import type { StageProps } from "./stageTypes";
export default function ArrangementEditor({ project, edit }: Pick<StageProps, "project" | "edit">) {
  const sections = project.arrangement || [];
  return (
    <details className="song-card">
      <summary>
        <strong>Arrangement · vocals need musical space</strong>
      </summary>
      <p>
        These are planned bars, not verified timestamps. Section tags steer generation; they cannot
        guarantee exact lengths or silence. Adjust the generated take after listening.
      </p>
      {sections.map((s, i) => (
        <article className="song-card" key={s.id}>
          <strong>
            {i + 1}. {s.label} · {s.kind}
          </strong>
          <label>
            Section label
            <input
              value={s.label}
              onChange={(e) =>
                edit(1, {
                  arrangement: sections.map((x) =>
                    x.id === s.id ? { ...x, label: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
          <label>
            Planned bars
            <input
              type="number"
              min="1"
              max="128"
              value={s.bars}
              onChange={(e) => {
                const bars = Number(e.target.value);
                if (Number.isInteger(bars) && bars >= 1 && bars <= 128)
                  edit(1, {
                    arrangement: sections.map((x) => (x.id === s.id ? { ...x, bars } : x)),
                  });
              }}
            />
          </label>
          <label>
            Musical and visual direction
            <textarea
              value={s.direction}
              onChange={(e) =>
                edit(1, {
                  arrangement: sections.map((x) =>
                    x.id === s.id ? { ...x, direction: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
          {s.kind === "vocal" && (
            <details>
              <summary>Included lyric phrases · {s.lines.length}</summary>
              {project.lines.map((l) => (
                <label key={l.id}>
                  <input
                    type="checkbox"
                    checked={s.lines.includes(l.id)}
                    onChange={(e) =>
                      edit(1, {
                        arrangement: sections.map((x) =>
                          x.id === s.id
                            ? {
                                ...x,
                                lines: e.target.checked
                                  ? project.lines
                                      .filter((y) => x.lines.includes(y.id) || y.id === l.id)
                                      .map((y) => y.id)
                                  : x.lines.filter((id) => id !== l.id),
                              }
                            : x,
                        ),
                      })
                    }
                  />
                  {l.text}
                </label>
              ))}
            </details>
          )}
          <div className="song-actions">
            <button
              disabled={i === 0}
              onClick={() => {
                const a = [...sections];
                [a[i - 1], a[i]] = [a[i], a[i - 1]];
                edit(1, { arrangement: a });
              }}
            >
              Move earlier
            </button>
            <button onClick={() => edit(1, { arrangement: sections.filter((x) => x.id !== s.id) })}>
              Remove section
            </button>
          </div>
        </article>
      ))}
      <button
        onClick={() =>
          edit(1, {
            arrangement: [
              ...sections,
              {
                id: uid(),
                label: "Instrumental Break",
                kind: "instrumental",
                bars: 4,
                lines: [],
                direction: "No vocals; continue the established motif.",
              },
            ],
          })
        }
      >
        Add instrumental break
      </button>
    </details>
  );
}
