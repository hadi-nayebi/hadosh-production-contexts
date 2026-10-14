import { useState } from "react";
import { validateScene, type Scene } from "./scene.mjs";
export default function ProductionIntervals({
  project,
  change,
}: {
  project: Scene;
  change: (fn: () => Scene) => void;
}) {
  const [start, setStart] = useState(""),
    [end, setEnd] = useState(""),
    [description, setDescription] = useState("");
  if (!project.production) return null;
  const production = project.production;
  const intervals: { startMs: number; endMs: number; description: string; status: string }[] = [];
  let cursor = 0;
  for (const island of production.islands) {
    if (island.startMs > cursor)
      intervals.push({
        startMs: cursor,
        endMs: island.startMs,
        description: "Unfinished",
        status: "gap",
      });
    intervals.push(island);
    cursor = island.endMs;
  }
  if (cursor < production.durationMs)
    intervals.push({
      startMs: cursor,
      endMs: production.durationMs,
      description: "Unfinished",
      status: "gap",
    });
  return (
    <details className="production-intervals">
      <summary>Whole song · authored islands and unfinished gaps</summary>
      <p>
        Work anywhere in the {Math.round(production.durationMs / 1000)}s recording. This player
        renders only 48.10–72.10s. Other intervals are saved briefs, awaiting their own scene
        documents.
      </p>
      <ol>
        {intervals.map((i) => (
          <li key={i.startMs}>
            <small>
              {(i.startMs / 1000).toFixed(2)}–{(i.endMs / 1000).toFixed(2)}s · {i.status}
            </small>{" "}
            {i.description}
          </li>
        ))}
      </ol>
      <div className="live-fields">
        <label>
          From second
          <input
            aria-label="Island start second"
            type="number"
            step=".1"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label>
          To second
          <input
            aria-label="Island end second"
            type="number"
            step=".1"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
      </div>
      <label>
        Scene idea anywhere in the song
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={2000}
        />
      </label>
      <button
        disabled={!start || !end || !description.trim()}
        onClick={() =>
          change(() =>
            validateScene({
              ...project,
              revision: project.revision + 1,
              production: {
                ...production,
                islands: [
                  ...production.islands,
                  {
                    id: `brief-${project.revision}-${start}`,
                    startMs: Math.round(Number(start) * 1000),
                    endMs: Math.round(Number(end) * 1000),
                    description: description.trim(),
                    status: "brief",
                  },
                ].sort((a, b) => a.startMs - b.startMs),
              },
            }),
          )
        }
      >
        Save interval brief
      </button>
      <small>Local scene planning only. Departments remains the canonical job record.</small>
    </details>
  );
}
