import type { Annotation } from "./audioAnnotation";
import type { Anchor } from "./anchorReview";

export default function TimingStatusBar({
  annotation,
  anchors,
  time,
  practice,
  saving,
  dirty,
  error,
}: {
  annotation: Annotation;
  anchors: Anchor[];
  time: number;
  practice: boolean;
  saving: boolean;
  dirty: boolean;
  error?: string;
}) {
  const words = annotation.items.filter((w) => w.kind === "lyric");
  const approved = new Set(anchors.filter((a) => a.status === "approved").map((a) => a.id));
  const approvedWords = words.filter(
    (w) => approved.has(`word:${w.id}:start`) && approved.has(`word:${w.id}:end`),
  ).length;
  const stale = anchors.filter((a) => a.status === "stale").length;
  const lastApproval = annotation.review?.approvals.at(-1)?.at;
  const state = error
    ? "Save needs attention"
    : saving
      ? "Saving…"
      : dirty
        ? "Unsaved changes"
        : `Saved r${annotation.revision} · w${annotation.wordTiming?.revision ?? 1}`;
  return (
    <footer className="timing-status-bar" aria-label="Timing status">
      <span className="timing-status-clock" aria-label="Playback status">
        {time.toFixed(2)} / {annotation.duration.toFixed(2)} s
      </span>
      <span className="timing-status-mode">{practice ? "Practice" : "Production"}</span>
      <span
        className={`timing-status-save ${error ? "has-error" : dirty ? "is-dirty" : ""}`}
        role="status"
      >
        {state}
      </span>
      <span
        className="timing-status-progress"
        title="Currently approved timing edges; historical receipts are in Details"
      >
        {approved.size}/{anchors.length} edges approved
      </span>
      <details className="timing-status-details">
        <summary aria-label="Timing status details" title="Recording and save details">
          Details
        </summary>
        <div>
          <strong>{annotation.filename}</strong>
          <p>
            {typeof location === "undefined" ? "" : location.origin} ·{" "}
            {practice ? "Practice copy" : "Production copy"}
          </p>
          <p>
            Timing r{annotation.revision} · words r{annotation.wordTiming?.revision ?? 1}. Saved in
            this browser; other addresses and modes have separate copies.
          </p>
          <p>
            {approvedWords}/{words.length} words have both edges approved · {stale} edges need
            reapproval.
          </p>
          <p>
            {annotation.review?.approvals.length ?? 0} approval receipts retained
            {lastApproval ? ` · latest ${new Date(lastApproval).toLocaleString()}` : ""}.
          </p>
          {dirty && <p>The displayed adjustment has not been committed to saved timing.</p>}
          {error && <p role="alert">{error}</p>}
        </div>
      </details>
    </footer>
  );
}
