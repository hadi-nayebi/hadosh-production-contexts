import { useEffect, useState } from "react";
import { download } from "../export";
import {
  changedSections,
  initialReview,
  parseReview,
  reviewPacket,
  reviseProposal,
  type Proposal,
  type ReviewState,
  type Snapshot,
} from "./review";
import "./review.css";
import SunoFields from "./SunoFields";
import EarlierReviews from "./EarlierReviews";

export default function VisualReview({ snapshot }: { snapshot: Snapshot }) {
  const key = `canvas-song-review-v1:${snapshot.source.commit}`;
  const [storageWarning, setStorageWarning] = useState("");
  const [state, setState] = useState<ReviewState>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? parseReview(raw, snapshot) : initialReview(snapshot);
    } catch {
      return initialReview(snapshot);
    }
  });
  const [sectionId, setSectionId] = useState(snapshot.sections[0].id);
  const [history, setHistory] = useState<ReviewState[]>([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) parseReview(raw, snapshot);
    } catch {
      setStorageWarning(
        "Saved review could not be read. It has not been overwritten. Export your working proposal to preserve it.",
      );
    }
  }, [key, snapshot]);
  // Only explicit edits/imports are persisted, so a malformed stored review is never silently lost.
  function save(next: ReviewState) {
    setHistory((h) => [...h.slice(-39), state]);
    setState(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
      setStorageWarning("");
    } catch {
      setStorageWarning("Browser storage is unavailable. Export this proposal before leaving.");
    }
  }
  function edit(patch: Partial<Omit<Proposal, "sectionId">>) {
    save(reviseProposal(state, sectionId, patch));
  }
  const section = snapshot.sections.find((s) => s.id === sectionId)!;
  const proposal = state.proposals.find((s) => s.sectionId === sectionId)!;
  const baseline = initialReview(snapshot).proposals.find((s) => s.sectionId === sectionId)!;
  const changes = changedSections(state, snapshot);
  return (
    <section className="visual-review" aria-label="Visual-first song review">
      <div className="review-overview">
        <div>
          <h2>{snapshot.title}</h2>
          <p>{snapshot.message}</p>
          <p className="review-provisional">
            Working treatment · lyrics and motion remain provisional
          </p>
        </div>
        <div className="review-evidence">
          <a href={snapshot.source.jobUrl}>Departments owner · PR #316</a>
          <a href={snapshot.source.url}>Canonical snapshot · {snapshot.revision}</a>
          <small>Source commit {snapshot.source.commit.slice(0, 12)}</small>
          <small>
            Local proposal r{state.revision} · {changes} changed{" "}
            {changes === 1 ? "section" : "sections"}
          </small>
        </div>
      </div>
      <div className="review-media" aria-label="Production availability">
        <p>
          <strong>Audio</strong>
          <span>{snapshot.audioStatus}</span>
        </p>
        <p>
          <strong>Assets</strong>
          <span>{snapshot.assetStatus}</span>
        </p>
        <p>
          <strong>Render</strong>
          <span>{snapshot.renderStatus}</span>
        </p>
      </div>
      <SunoFields packet={snapshot.suno} sourceUrl={snapshot.suno.sourceUrl} />
      <EarlierReviews currentCommit={snapshot.source.commit} />
      <p className="review-ownership">
        Departments owns workflow, decisions and creative history. Edits here are local proposals;
        export them for reconciliation. They do not update Departments or approve the song.
      </p>
      <div className="song-actions">
        <button
          onClick={() => {
            download(
              "who-holds-the-keys-review.json",
              JSON.stringify(reviewPacket(state, snapshot), null, 2),
            );
            setMessage(
              "Review proposal exported. Reconcile it in Departments before changing canonical content.",
            );
          }}
        >
          Export review proposal
        </button>
        <label className="song-file">
          Import review proposal
          <input
            type="file"
            accept=".json"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              try {
                if (file.size > 2000000) throw Error("Review files must be smaller than 2 MB.");
                const next = parseReview(await file.text(), snapshot);
                save(next);
                setMessage("Local proposal imported. Canonical content is unchanged.");
              } catch (error) {
                setMessage(error instanceof Error ? error.message : "Invalid review file.");
              }
              e.target.value = "";
            }}
          />
        </label>
        <button
          disabled={!history.length}
          onClick={() => {
            const previous = history.at(-1);
            if (!previous) return;
            setState(previous);
            setHistory(history.slice(0, -1));
            try {
              localStorage.setItem(key, JSON.stringify(previous));
            } catch {
              setStorageWarning("Undo applied in memory. Export to preserve it.");
            }
            setMessage("Previous local edit restored.");
          }}
        >
          Undo review edit
        </button>
      </div>
      {(message || storageWarning) && <p role="status">{storageWarning || message}</p>}
      <nav className="review-chapters" aria-label="Story chapters">
        {snapshot.sections.map((s, i) => (
          <button
            key={s.id}
            aria-label={`${String(i + 1).padStart(2, "0")} ${s.title}`}
            aria-current={s.id === sectionId ? "step" : undefined}
            onClick={() => setSectionId(s.id)}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {s.title}
          </button>
        ))}
      </nav>
      <article
        key={section.id}
        className="review-pair"
        aria-label={`${section.title} lyric and scene`}
      >
        <header>
          <h3>{section.title}</h3>
          <p>{section.purpose}</p>
          <details>
            <summary>Meaning to preserve, not required sung words</summary>
            <p>{snapshot.lyricConstraint}</p>
            {section.claims.map((id) => {
              const claim = snapshot.claims.find((c) => c.id === id)!;
              return (
                <p key={id}>
                  {claim.text}{" "}
                  {claim.sources.map((url, i) => (
                    <a key={url} href={url}>
                      Source {i + 1}{" "}
                    </a>
                  ))}
                </p>
              );
            })}
          </details>
          <small>
            {section.vocalMode} · {section.status}
          </small>
        </header>
        <div className="review-columns">
          <div>
            <h4>What we hear</h4>
            <label>
              Proposed lyrics
              <textarea
                rows={Math.max(8, Math.min(18, proposal.lyrics.split("\n").length))}
                value={proposal.lyrics}
                onChange={(e) => edit({ lyrics: e.target.value })}
              />
            </label>
          </div>
          <div>
            <h4>What we see</h4>
            <p className="song-muted">On-screen emphasis: {section.onScreenText.join(" · ")}</p>
            <label>
              Proposed Remotion scene
              <textarea
                rows={12}
                value={proposal.visual}
                onChange={(e) => edit({ visual: e.target.value })}
              />
            </label>
            <p className="song-muted">
              Descriptive motion plan. No animation, beat alignment or generated footage is implied.
            </p>
          </div>
        </div>
        <details className="review-original">
          <summary>Compare with pinned Departments wording</summary>
          <div className="review-columns">
            <pre>{baseline.lyrics}</pre>
            <pre>{baseline.visual}</pre>
          </div>
        </details>
        <div className="review-columns review-notes">
          <div>
            <h4>Assets to build</h4>
            <ul>
              {section.assets.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <small>Planned components, not completed asset files.</small>
            {section.claims.length > 0 && (
              <p className="song-muted">Claim references: {section.claims.join(", ")}</p>
            )}
          </div>
          <div>
            <label>
              Review direction
              <select
                value={proposal.verdict}
                onChange={(e) => edit({ verdict: e.target.value as Proposal["verdict"] })}
              >
                <option value="unreviewed">Not reviewed locally</option>
                <option value="revise">Needs another pass</option>
                <option value="discuss">Ready to discuss with Hadi</option>
              </select>
            </label>
            <label>
              Why should the words or motion change?
              <textarea
                value={proposal.notes}
                onChange={(e) => edit({ notes: e.target.value })}
                placeholder="For example: let the profile form before the next lyric explains ranking."
              />
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            save(reviseProposal(state, sectionId, baseline));
            setMessage("Section restored from the snapshot. Undo can recover your proposal.");
          }}
        >
          Restore this section from source
        </button>
      </article>
      <div className="review-columns review-records">
        <section>
          <h3>Decisions from Departments</h3>
          {snapshot.decisions.map((d) => (
            <article key={d.title}>
              <h4>{d.title}</h4>
              <small>{d.status}</small>
              <p>{d.detail}</p>
            </article>
          ))}
        </section>
        <section>
          <h3>Iteration history</h3>
          {snapshot.iterations.map((i) => (
            <article key={i.title}>
              <h4>
                <a href={i.url}>{i.title}</a>
              </h4>
              <small>{i.status}</small>
              <p>{i.detail}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
