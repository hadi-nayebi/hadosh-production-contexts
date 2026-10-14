import ProductionRoadmap from "./ProductionRoadmap";
import VisualReview from "./ownership/VisualReview";
import { snapshot, ownershipProject } from "./ownership/snapshot";
import { toasterProject } from "./toaster";
import ToasterProgress from "./ToasterProgress";
import ContextStage from "./ContextStage";
import LyricsStage from "./LyricsStage";
import MusicStage from "./MusicStage";
import TimingStage from "./TimingStage";
import ScenesStage from "./ScenesStage";
import ReviewStage from "./ReviewStage";
import { useEffect, useRef, useState } from "react";
import { api } from "../../api";
import {
  approve,
  blankProject,
  demoProject,
  isApproved,
  packet,
  parseProject,
  problems,
  revise,
  stages,
  uid,
  type SongProject,
  type Stage,
  type Take,
} from "./model";
import { download, playbackHTML, readDataURL } from "./export";
import "./song.css";
import "./listening-room.css";
const KEY = "canvas-song-studio-v1";
export default function SongStudio() {
  const [project, setProject] = useState<SongProject>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? parseProject(raw, false) : ownershipProject();
    } catch {
      return blankProject();
    }
  });
  const [view, setView] = useState<"visual" | "production" | "roadmap">("roadmap");
  const [stage, setStage] = useState<Stage>(0);
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState<SongProject[]>([]);
  const [files, setFiles] = useState<Record<string, File>>({});
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [clock, setClock] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(project));
    } catch {
      setStatus("Browser storage is full or unavailable. Export the project to preserve changes.");
    }
  }, [project]);
  useEffect(
    () => () => {
      Object.values(urls).forEach(URL.revokeObjectURL);
    },
    [urls],
  );
  function commit(next: SongProject) {
    setHistory((h) => [...h.slice(-39), project]);
    setProject(next);
  }
  function edit(s: Stage, change: Partial<SongProject>) {
    commit(revise(project, s, change));
  }
  const selected = project.takes.find((t) => t.id === project.selected);
  const currentCue = project.cues.find((c) => clock >= c.start && clock < c.end);
  const currentScene = project.scenes.find((s) => s.cue === currentCue?.line);
  const issues = problems(project, stage);
  if (
    stage === 3 &&
    audio.current &&
    Number.isFinite(audio.current.duration) &&
    project.cues.some((c) => c.end > audio.current!.duration + 0.02)
  )
    issues.push("Timings cannot extend beyond the selected audio.");
  async function requestLyrics() {
    const body = JSON.stringify({
      task: "Draft original song lyrics as a Canvas song project JSON. Preserve claim IDs and map each lyric to a claim; mark proposed lyrics agent_draft. No publishing or spend.",
      ...packet(project),
      project,
      instruction:
        "Draft original lyrics linked to these claims. Return canvas-song-v1 JSON with agent_draft provenance. Do not generate audio, publish, or spend.",
    });
    if (body.length > 2000) {
      download("song-agent-request.json", body);
      setStatus(
        "Full request downloaded. Supply this file to your CLI agent; it exceeds the Feedback message limit.",
      );
      return;
    }
    setBusy(true);
    try {
      await api.submitFeedback({
        kind: "update",
        body,
        pagePath: "/songs",
        pageLabel: "Canvas / Song studio / Lyrics draft",
      });
      setStatus(
        "Lyrics request saved through Origin Feedback. Import the returned project JSON for review.",
      );
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Request failed.");
    } finally {
      setBusy(false);
    }
  }
  function attach(file: File, take?: Take) {
    if (!file.type.startsWith("audio/")) {
      setStatus("Choose an audio file.");
      return;
    }
    if (
      take &&
      (file.name !== take.filename ||
        file.size !== take.size ||
        file.lastModified !== take.modified)
    ) {
      setStatus("This file does not match the saved take metadata. Add it as a new take.");
      return;
    }
    const id = take?.id || uid();
    setFiles((f) => ({ ...f, [id]: file }));
    // URLs are derived from files; rebuilding avoids retaining revoked URLs after state updates.
    if (!take)
      edit(2, {
        takes: [
          ...project.takes,
          {
            id,
            name: file.name,
            provider: "External / specify provider",
            filename: file.name,
            size: file.size,
            modified: file.lastModified,
            notes: "",
            revision: project.revisions[1],
            style: project.style,
          },
        ],
      });
    setStatus(take ? "Audio reattached." : "Candidate added against current lyric revision.");
  }
  useEffect(() => {
    const next = Object.fromEntries(
      Object.entries(files).map(([id, file]) => [id, URL.createObjectURL(file)]),
    );
    setUrls(next);
    return () => Object.values(next).forEach(URL.revokeObjectURL);
  }, [files]);
  function seedTiming() {
    const duration = audio.current?.duration;
    const span =
      Number.isFinite(duration) && duration ? duration : Math.max(1, project.lines.length) * 4;
    edit(3, {
      cues: project.lines.map((l, i) => ({
        line: l.id,
        start: Number(((span * i) / project.lines.length).toFixed(2)),
        end: Number(((span * (i + 1)) / project.lines.length).toFixed(2)),
      })),
      scenes: [],
    });
    setStatus("Provisional equal-spacing created. Align each lyric by listening before approval.");
  }
  async function exportHTML(embed: boolean) {
    try {
      const f = files[project.selected];
      if (embed && !f) throw Error("Reattach the selected audio first.");
      if (embed && f.size > 80 * 1024 * 1024)
        throw Error("For audio larger than 80 MB, export HTML with local reattachment.");
      download(
        "song-playback.html",
        playbackHTML(project, embed ? await readDataURL(f) : ""),
        "text/html",
      );
      setStatus("HTML playback exported.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Export failed.");
    }
  }
  function nav(index: number) {
    setStage(index as Stage);
    window.scrollTo(0, 0);
  }
  const stageProps = {
    project,
    files,
    edit,
    commit,
    setStatus,
    busy,
    requestLyrics,
    urls,
    attach,
    audio,
    clock,
    setClock,
    seedTiming,
    currentScene,
    currentCue,
    exportHTML,
  };
  return (
    <div className={`song-studio ${view === "roadmap" ? "song-listening-room" : ""}`}>
      <div className="song-actions song-view-switch" aria-label="Studio workspace">
        <a href="/songs/live">Live scene stage ↗</a>
        <a href="/songs/words">Word timing editor ↗</a>
        <a href="/previews/browser-doorway.html">Browser motion sample ↗</a>
        <button aria-pressed={view === "visual"} onClick={() => setView("visual")}>
          Lyrics + motion review
        </button>
        <button aria-pressed={view === "production"} onClick={() => setView("production")}>
          Production stages
        </button>
        <button aria-pressed={view === "roadmap"} onClick={() => setView("roadmap")}>
          Listening room
        </button>
        <a href="/comic">Cartoon workbench</a>
      </div>
      {view === "roadmap" && (
        <ProductionRoadmap
          open={(s) => {
            setStage(s);
            setView("production");
          }}
        />
      )}
      {view === "visual" && <VisualReview key={snapshot.source.commit} snapshot={snapshot} />}
      <div hidden={view !== "production"}>
        <div className="song-heading">
          <div>
            <p className="song-kicker">CANVAS / SONG PRODUCTION</p>
            <h1>
              Make the idea
              <br />
              <em>worth repeating.</em>
            </h1>
            <p>
              Build a song from inspectable context. Shape each step, compare the results, and keep
              the final performance yours.
            </p>
          </div>
          <div className="song-project-tools">
            <label>
              Project title
              <input value={project.title} onChange={(e) => edit(0, { title: e.target.value })} />
            </label>
            <div className="song-actions">
              <button
                onClick={() => download("canvas-song.json", JSON.stringify(project, null, 2))}
              >
                Export project
              </button>
              <label className="song-file">
                Import project
                <input
                  type="file"
                  accept=".json"
                  onChange={async (e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    try {
                      const p = parseProject(await f.text());
                      commit(p);
                      setFiles({});
                      setStatus("Imported. Reattach local audio and re-establish approvals.");
                    } catch (error) {
                      setStatus(error instanceof Error ? error.message : "Invalid file.");
                    }
                    e.target.value = "";
                  }}
                />
              </label>
              <button
                disabled={!history.length}
                onClick={() => {
                  const previous = history.at(-1);
                  if (previous) {
                    setProject(previous);
                    setHistory(history.slice(0, -1));
                    setStatus("Previous edit restored.");
                  }
                }}
              >
                Undo
              </button>
            </div>
            <div className="song-actions">
              <button
                onClick={() => {
                  commit(demoProject());
                  setFiles({});
                  setStatus(
                    "Superseded illustrative toaster example loaded. Not the current creative handoff.",
                  );
                }}
              >
                Load superseded toaster example
              </button>
              <button
                onClick={() => {
                  commit(toasterProject());
                  setFiles({});
                  setStage(1);
                  setStatus("Superseded toaster pilot loaded. Not the current creative handoff.");
                }}
              >
                Load superseded toaster pilot
              </button>
              <a href="/comic">Cartoon workbench ↗</a>
            </div>
            <p className="song-muted">
              This is a separate local production working copy. Review proposals are reconciled in
              Departments before refreshing it. Nothing here changes the canonical snapshot.
            </p>
            <button
              onClick={() => {
                commit(ownershipProject());
                setFiles({});
                setStatus(
                  "Pinned Departments content loaded as a local production copy. Undo restores the previous project.",
                );
              }}
            >
              Load pinned Departments content
            </button>
            <small>Autosaved in this browser · JSON preserves context · audio stays local</small>
          </div>
        </div>
        {project.lines.some((l) => l.id.startsWith("toaster-")) && <ToasterProgress />}
        <nav className="song-stages" aria-label="Song production stages">
          {stages.map((name, i) => (
            <button
              key={name}
              aria-current={i === stage ? "step" : undefined}
              onClick={() => nav(i)}
            >
              <small>
                0{i + 1} · {isApproved(project, i) ? "APPROVED" : "DRAFT"}
              </small>
              <strong>{name}</strong>
            </button>
          ))}
        </nav>
        <div className="song-layout">
          <section className="song-workspace" aria-label={`${stages[stage]} workspace`}>
            <div className="song-stage-intro">
              <p className="song-kicker">STEP 0{stage + 1}</p>
              <h2>
                {
                  [
                    "Give the song something to say.",
                    "Turn the claim into a chorus.",
                    "Find the take worth keeping.",
                    "Let the words set the timing.",
                    "Make the meaning visible.",
                    "Listen. Inspect. Carry it forward.",
                  ][stage]
                }
              </h2>
              <p>
                {
                  [
                    "Input: source claims and audience. Output: a reviewed creative brief.",
                    "Input: approved brief. Output: editable lyric lines linked to claims.",
                    "Input: approved lyrics and musical direction. Output: a selected local audio take.",
                    "Input: selected song. Output: reviewed lyric timestamps in seconds.",
                    "Input: timed lyrics. Output: scene cards performed in HTML.",
                    "Input: approved scenes. Output: reviewed portable playback and production context.",
                  ][stage]
                }
              </p>
            </div>
            {stage === 0 && <ContextStage {...stageProps} />}
            {stage === 1 && <LyricsStage {...stageProps} />}
            {stage === 2 && <MusicStage {...stageProps} />}
            {stage === 3 && <TimingStage {...stageProps} />}
            {stage === 4 && <ScenesStage {...stageProps} />}
            {stage === 5 && <ReviewStage {...stageProps} />}
            <div className="song-approval">
              <div>
                <strong>
                  {isApproved(project, stage)
                    ? "Approved at current revision"
                    : "Review before continuing"}
                </strong>
                {issues.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </div>
              <button
                className="song-primary"
                disabled={
                  !!issues.length ||
                  isApproved(project, stage) ||
                  (stage === 5 && !urls[project.selected])
                }
                onClick={() => {
                  try {
                    commit(approve(project, stage));
                    setStatus(`${stages[stage]} approved at revision ${project.revisions[stage]}.`);
                  } catch (e) {
                    setStatus(String(e));
                  }
                }}
              >
                Approve {stages[stage]}
              </button>
            </div>
          </section>
          <aside className="song-lineage">
            <p className="song-kicker">HOW CONTEXT BECOMES THE PRODUCT</p>
            <h3>
              One idea.
              <br />A visible trail.
            </h3>
            <ol>
              {stages.map((s, i) => (
                <li key={s}>
                  <button onClick={() => nav(i)}>
                    <strong>{s}</strong>
                    <span>
                      r{project.revisions[i]} ·{" "}
                      {isApproved(project, i) ? "approved" : "needs review"}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <p>
              {project.claims.length} claims → {project.lines.length} lines → {project.takes.length}{" "}
              takes → {project.cues.length} cues → {project.scenes.length} scenes
            </p>
            <div className="song-lineage-note">
              <strong>Edits travel downstream.</strong>
              <p>
                Changing an earlier step clears later approvals. Your edits remain available for
                revision.
              </p>
            </div>
            {selected && (
              <p>
                Selected: {selected.name}
                <br />
                {files[selected.id] ? "Audio attached locally" : "Audio needs reattachment"}
              </p>
            )}
          </aside>
        </div>
        <p className="song-status" role="status">
          {status ||
            "Local production workspace. Current lyrics and scenes are provisional; no generation is requested."}
        </p>
      </div>
    </div>
  );
}
