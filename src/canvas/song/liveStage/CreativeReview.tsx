import toasterScorecard from "./toaster-study-scorecard.json";
import scorecard from "./full-song-scorecard.json";
export default function CreativeReview({
  seconds,
  study = false,
}: {
  seconds: number;
  study?: boolean;
}) {
  const section = (study ? toasterScorecard : scorecard).sections.find(
    (s) => seconds >= s.startSeconds && seconds < s.endSeconds,
  );
  if (!section) return null;
  return (
    <details>
      <summary>Scene evaluation · {section.title}</summary>
      <p>
        {study
          ? "Partial toaster-study review at stated timestamps, not approval."
          : "Partial review of pinned V6, not approval."}{" "}
        Changes in your draft have not been rescored.
      </p>
      <p>
        <a href="/songs/director" target="_blank" rel="noreferrer">
          Director ledger: scene purpose, components and verification gaps
        </a>
      </p>
      {section.scores.map((s) => (
        <div key={s.criterion}>
          <strong>
            {s.criterion}: {s.score === null ? "N/A" : `${s.score}/5`}
          </strong>
          <p>{s.example}</p>
          <p>Next adjustment: {s.fix}</p>
          <small>{s.method}</small>
        </div>
      ))}
    </details>
  );
}
