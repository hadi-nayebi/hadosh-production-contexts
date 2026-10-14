import { currentAuditions } from "./currentAuditions";
import ListeningDesk from "./ListeningDesk";
import type { ListeningTake } from "./listening";
import { useState } from "react";
import { download } from "./export";
import { parseAuditions, type AuditionRound } from "./auditions";
import type { Stage } from "./model";
const KEY = "canvas-song-auditions-v1";
export default function ProductionRoadmap({ open }: { open: (stage: Stage) => void }) {
  const [round, setRound] = useState<AuditionRound | null>(() => {
    try {
      return parseAuditions(localStorage.getItem(KEY) || "");
    } catch {
      return currentAuditions;
    }
  });
  const [listening, setListening] = useState<ListeningTake | null>(
    () =>
      round?.takes.find((t) => t.url === localStorage.getItem("canvas-listening-selected")) ||
      round?.takes[0] ||
      null,
  );
  const [message, setMessage] = useState("");
  if (listening)
    return (
      <section aria-label="Song production roadmap">
        <div className="listening-topline">
          <label>
            Song version
            <select
              aria-label="Song version"
              value={listening.url}
              onChange={(e) => {
                const t = round?.takes.find((t) => t.url === e.target.value);
                if (t) {
                  localStorage.setItem("canvas-listening-selected", t.url);
                  setListening(t);
                }
              }}
            >
              {round?.takes.map((t) => (
                <option key={t.url} value={t.url}>
                  {t.title} · {t.duration}
                </option>
              ))}
            </select>
          </label>
          <button onClick={() => setListening(null)}>All takes & production stages</button>
        </div>
        <nav className="listening-workflow" aria-label="Production workflow">
          <button onClick={() => open(1)}>01 Lyrics</button>
          <span>↔</span>
          <button aria-current="step">02 Song & ideas</button>
          <span>→</span>
          <button onClick={() => open(2)}>03 Verify</button>
          <span>→</span>
          <button onClick={() => open(3)}>04 Timing</button>
          <span>→</span>
          <button onClick={() => open(4)}>05 Visuals</button>
        </nav>
        <ListeningDesk key={listening.url} take={listening} />
      </section>
    );
  return (
    <section aria-label="Song production roadmap">
      <p className="song-kicker">PRODUCTION / EXPLORE FIRST, REFINE AFTER SELECTION</p>
      <h1>Find the song. Then build its world.</h1>
      <p>
        We are iterating lyrics and musical style. Compare the same words across styles, then revise
        the words for your favorite direction. A style preference does not approve the lyrics or
        lock the audio.
      </p>
      <div className="song-actions">
        <button onClick={() => open(1)}>Edit working lyrics</button>
        <button onClick={() => open(2)}>Open music takes</button>
        <label className="song-file">
          Import audition round
          <input
            type="file"
            accept=".json"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              try {
                const next = parseAuditions(await file.text());
                localStorage.setItem(KEY, JSON.stringify(next));
                setRound(next);
                setListening(next.takes[0] || null);
                if (next.takes[0])
                  localStorage.setItem("canvas-listening-selected", next.takes[0].url);
                setMessage(
                  "Audition links saved in this browser. Audio and verification are separate.",
                );
              } catch (error) {
                setMessage(error instanceof Error ? error.message : "Import failed.");
              }
              e.target.value = "";
            }}
          />
        </label>
        {round && (
          <button onClick={() => download("song-auditions.json", JSON.stringify(round, null, 2))}>
            Export audition round
          </button>
        )}
      </div>
      <p role="status">{message}</p>
      {round && !listening && (
        <section aria-label="Style auditions">
          <h2>{round.title}</h2>
          <p>{round.lyricRevision}</p>
          <p>
            <strong>
              {round.creditsBefore - round.creditsAfter} credits used ·{" "}
              {round.creditsAfter.toLocaleString()} remaining
            </strong>{" "}
            at this round’s balance check. Keep at least 200 credits for completing and repairing
            the chosen song; this is a planning reserve, not a provider lock.
          </p>
          <div className="song-two">
            {round.takes.map((t) => (
              <article className="song-card" key={t.url}>
                <h3>{t.title}</h3>
                <p>
                  {t.style} · {t.duration}
                </p>
                <p className="song-muted">
                  Suno audition · lyrics unverified · audio not imported by this link
                </p>
                <div className="song-actions">
                  <button
                    onClick={() => {
                      localStorage.setItem("canvas-listening-selected", t.url);
                      setListening(t);
                    }}
                  >
                    Listen + describe a passage
                  </button>
                  <a href={t.url} target="_blank" rel="noreferrer">
                    Listen in Suno ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p>
            Listen for clear words, energy, an inviting opening, gentle urgency in social media, and
            an optimistic AI return. Choose a style before detailed visual production.
          </p>
        </section>
      )}
      <h2>The production stages</h2>
      <div className="song-two">
        <article className="song-card">
          <h3>1 · Lyrics ↔ song experiments</h3>
          <p>
            Keep lyric versions and style prompts together. Compare takes, note what works, and
            return to the lyrics as often as needed.
          </p>
          <button onClick={() => open(1)}>Open lyrics</button>
        </article>
        <article className="song-card">
          <h3>2 · Bring back the files</h3>
          <p>
            Download the candidate audio from Suno, record its song link and exact lyric/style
            version, then attach it in Music. Preserve earlier takes. Export the project metadata
            for continuity.
          </p>
          <button onClick={() => open(2)}>Import in Music</button>
        </article>
        <article className="song-card">
          <h3>3 · Verify, then choose a ready song</h3>
          <p>
            Independently transcribe the audio; compare every lyric in order for missing, changed,
            repeated or added words. Listen to flagged passages and the complete track. Explicitly
            approve any intentional differences.
          </p>
          <p className="song-muted">
            Verification reports currently run outside this dashboard. An automated match is not
            listening approval; the Music approval button does not yet enforce verification.
          </p>
        </article>
        <article className="song-card">
          <h3>4 · Machine timing → your final refinement</h3>
          <p>
            Work from the selected, verified audio. Existing controls edit start/end times or
            capture the playhead, with project Undo and export.
          </p>
          <p className="song-muted">
            The audition listening desk now supports passage looping and slower playback. Planned
            for the timing editor: import word/line alignment, zoomable waveform, keyboard nudges,
            frame display at export FPS, and protected human corrections. Current provisional timing
            is equal spacing, not audio alignment.
          </p>
          <button onClick={() => open(3)}>Open current timing editor</button>
        </article>
        <article className="song-card">
          <h3>5 · Visual scenes, including instrumental passages</h3>
          <p>
            Give every vocal and instrumental section a start, end, visual action and transition.
            Refine scene assets once the song is chosen. Instrumental regions need listening
            confirmation; silence in a transcript is not enough.
          </p>
          <button onClick={() => open(4)}>Open scene planning</button>
        </article>
        <article className="song-card">
          <h3>6 · Review and export</h3>
          <p>
            Review the whole performance, preserve the final audio and timing metadata, and export
            playback. Planned audio clip exports use confirmed boundaries; moving a timestamp should
            not create a new audio file.
          </p>
          <button onClick={() => open(5)}>Open review</button>
        </article>
      </div>
      <h2>What happens while nobody sings?</h2>
      <p>Proposed visual actions; exact boundaries wait for the chosen audio.</p>
      <ol>
        <li>
          <strong>Intro:</strong> separate computers connect; packets move between them; a browser
          opens onto the shared web.
        </li>
        <li>
          <strong>Before social media:</strong> people and posts form a network; useful discoveries
          appear, then attention signals start shaping a feed.
        </li>
        <li>
          <strong>Before AI:</strong> notes, tools and a model assemble into a workspace with
          visible controls.
        </li>
        <li>
          <strong>Between AI verses:</strong> a correction becomes a readable note; the next task
          reuses it. Show memory, not model retraining.
        </li>
        <li>
          <strong>Before the toaster reveal:</strong> hold the model-to-tool connection, leaving the
          analogy unrevealed until its spoken line.
        </li>
        <li>
          <strong>Outro:</strong> return to the connected internet; switch tools while carrying the
          work forward, with the person holding the controls.
        </li>
      </ol>
    </section>
  );
}
