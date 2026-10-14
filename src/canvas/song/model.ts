import { renderLyrics } from "./production";
export const stages = ["Context", "Lyrics", "Music", "Timing", "Scenes", "Review"] as const;
export type Stage = 0 | 1 | 2 | 3 | 4 | 5;
export type Origin = "source_explicit" | "source_derived" | "agent_draft" | "human_authored";
export interface Claim {
  id: string;
  text: string;
  source: string;
  origin: Origin;
}
export interface Line {
  id: string;
  section: string;
  text: string;
  claim: string;
  origin: Origin;
}
export interface Take {
  style: string;
  id: string;
  name: string;
  provider: string;
  filename: string;
  size: number;
  modified: number;
  notes: string;
  revision: number;
}
export interface Cue {
  line: string;
  start: number;
  end: number;
}
export interface Scene {
  id: string;
  cue: string;
  title: string;
  detail: string;
  color: string;
  origin: Origin;
}
export interface ArrangementSection {
  id: string;
  label: string;
  kind: "instrumental" | "vocal";
  bars: number;
  lines: string[];
  direction: string;
}
export interface SongProject {
  arrangement?: ArrangementSection[];
  schema: "canvas-song-v1";
  title: string;
  audience: string;
  message: string;
  style: string;
  claims: Claim[];
  lines: Line[];
  takes: Take[];
  selected: string;
  cues: Cue[];
  scenes: Scene[];
  revisions: number[];
  approved: (number | null)[];
  notes: string;
  checks: boolean[];
}
export const uid = () => crypto.randomUUID();
export function blankProject(): SongProject {
  return {
    schema: "canvas-song-v1",
    title: "Untitled song",
    audience: "",
    message: "",
    style: "",
    claims: [],
    lines: [],
    takes: [],
    selected: "",
    cues: [],
    scenes: [],
    revisions: [1, 1, 1, 1, 1, 1],
    approved: [null, null, null, null, null, null],
    notes: "",
    checks: [false, false, false],
  };
}
export function demoProject(): SongProject {
  const p = blankProject();
  p.title = "Who owns your toaster?";
  p.audience = "Professionals discovering user-owned Agentic AI";
  p.message = "Models supply intelligence. Your inspectable harness preserves your working system.";
  p.style =
    "Playful electro-pop, clear conversational vocal, rhythmic verses, memorable chorus. 60–90 seconds.";
  p.claims = [
    {
      id: "power",
      text: "Models supply replaceable intelligence; the harness organizes its use.",
      source:
        "Hadosh Academy principle supplied in this conversation; attach the final article before approval.",
      origin: "source_explicit",
    },
    {
      id: "memory",
      text: "A user-owned harness can retain context, jobs, rules, verification and experience.",
      source:
        "Hadosh Academy project purpose; ownership depends on actual inspectability and portability.",
      origin: "source_explicit",
    },
  ];
  p.lines = [
    {
      id: "l1",
      section: "Verse",
      text: "You pay for the power, you still own the toast,",
      claim: "power",
      origin: "agent_draft",
    },
    {
      id: "l2",
      section: "Verse",
      text: "So why does your work disappear with the ghost?",
      claim: "memory",
      origin: "agent_draft",
    },
    {
      id: "l3",
      section: "Chorus",
      text: "Keep the context, keep the keys,",
      claim: "memory",
      origin: "agent_draft",
    },
    {
      id: "l4",
      section: "Chorus",
      text: "Change the engine when you please.",
      claim: "power",
      origin: "agent_draft",
    },
  ];
  return p;
}
export function revise(p: SongProject, stage: Stage, change: Partial<SongProject>): SongProject {
  const next = {
    ...p,
    ...change,
    revisions: [...p.revisions],
    approved: [...p.approved],
    checks: [false, false, false],
  };
  next.revisions[stage]++;
  for (let i = stage; i < 6; i++) next.approved[i] = null;
  return next;
}
export function isApproved(p: SongProject, i: number) {
  return p.approved[i] === p.revisions[i];
}
export function problems(p: SongProject, stage: Stage): string[] {
  const issues: string[] = [];
  if (stage > 0 && !isApproved(p, stage - 1)) issues.push(`Approve ${stages[stage - 1]} first.`);
  if (
    stage === 0 &&
    (!p.message.trim() ||
      !p.audience.trim() ||
      !p.claims.length ||
      p.claims.some((c) => !c.text.trim() || !c.source.trim()))
  )
    issues.push("Provide an audience, central message and sourced claims.");
  if (
    stage === 1 &&
    (!p.lines.length ||
      p.lines.some((l) => !l.text.trim() || !p.claims.some((c) => c.id === l.claim)))
  )
    issues.push("Every lyric line needs text and a linked claim.");
  if (
    stage === 1 &&
    p.arrangement?.length &&
    (p.arrangement.some(
      (s) => !s.label.trim() || !s.direction.trim() || (s.kind === "vocal" && !s.lines.length),
    ) ||
      p.lines.some((l) => !p.arrangement!.some((s) => s.lines.includes(l.id))))
  )
    issues.push("Every lyric must appear in a named vocal section with direction.");
  const take = p.takes.find((t) => t.id === p.selected);
  if (
    stage === 2 &&
    (!take || take.revision !== p.revisions[1] || take.style !== p.style || !p.style.trim())
  )
    issues.push("Select a take made against the current lyrics and specify musical direction.");
  if (stage === 3) {
    let last = 0;
    if (!p.lines.length || p.cues.length !== p.lines.length) issues.push("Time every lyric line.");
    for (const l of p.lines) {
      const c = p.cues.find((c) => c.line === l.id);
      if (!c || c.start < last || c.end <= c.start) {
        issues.push("Timings must be ordered, non-overlapping and have positive duration.");
        break;
      }
      last = c.end;
    }
  }
  if (
    stage === 4 &&
    (!p.cues.length ||
      p.scenes.length !== p.cues.length ||
      p.cues.some(
        (c) => !p.scenes.some((s) => s.cue === c.line && s.title.trim() && s.detail.trim()),
      ))
  )
    issues.push("Give every timed lyric a scene title and visual direction.");
  if (stage === 5 && p.checks.some((c) => !c)) issues.push("Complete the three review checks.");
  return issues;
}
export function approve(p: SongProject, stage: Stage): SongProject {
  const errors = problems(p, stage);
  if (errors.length) throw Error(errors.join(" "));
  const next = { ...p, approved: [...p.approved] };
  next.approved[stage] = p.revisions[stage];
  return next;
}
export function packet(p: SongProject) {
  return {
    kind: "canvas-song-production-request",
    version: 1,
    contextRevision: p.revisions[0],
    lyricsRevision: p.revisions[1],
    title: p.title,
    audience: p.audience,
    message: p.message,
    claims: p.claims,
    style: p.style,
    lyrics: renderLyrics(p),
    arrangement: p.arrangement,
    instruction:
      "Produce an original song using these lyrics and direction. Preserve approved conceptual claims. Return audio as a local file; record provider, filename and lyric revision. Do not publish or spend without owner authorization.",
  };
}
export function parseProject(raw: string, resetReview = true): SongProject {
  const p = JSON.parse(raw) as SongProject;
  const str = (v: unknown) => typeof v === "string" && v.length <= 100000;
  const origins = ["source_explicit", "source_derived", "agent_draft", "human_authored"];
  const array = (v: unknown): v is unknown[] => Array.isArray(v) && v.length <= 2000;
  if (
    !p ||
    p.schema !== "canvas-song-v1" ||
    !["title", "audience", "message", "style", "notes", "selected"].every((k) =>
      str(p[k as keyof SongProject]),
    ) ||
    !array(p.claims) ||
    !array(p.lines) ||
    !array(p.takes) ||
    !array(p.cues) ||
    !array(p.scenes)
  )
    throw Error("Not a valid Canvas song project.");
  if (
    !array(p.revisions) ||
    p.revisions.length !== 6 ||
    p.revisions.some((n) => !Number.isSafeInteger(n) || n < 1) ||
    !array(p.approved) ||
    p.approved.length !== 6 ||
    p.approved.some((n) => n !== null && (!Number.isSafeInteger(n) || n < 1)) ||
    !array(p.checks) ||
    p.checks.length !== 3 ||
    p.checks.some((x) => typeof x !== "boolean")
  )
    throw Error("Invalid revision or review state.");
  const rows = [...p.claims, ...p.lines, ...p.takes, ...p.scenes];
  if (rows.some((r) => !r || !str(r.id)) || new Set(rows.map((r) => r.id)).size !== rows.length)
    throw Error("Invalid or duplicate record identifiers.");
  if (
    p.claims.some((c) => !str(c.text) || !str(c.source) || !origins.includes(c.origin)) ||
    p.lines.some(
      (l) =>
        !str(l.text) ||
        !str(l.section) ||
        !str(l.claim) ||
        !origins.includes(l.origin) ||
        !p.claims.some((c) => c.id === l.claim),
    )
  )
    throw Error("Invalid claim or lyric provenance.");
  if (
    p.takes.some(
      (t) =>
        !["name", "provider", "filename", "notes", "style"].every((k) => str(t[k as keyof Take])) ||
        ![t.size, t.modified, t.revision].every((n) => Number.isSafeInteger(n) && n >= 0),
    ) ||
    (p.selected && !p.takes.some((t) => t.id === p.selected))
  )
    throw Error("Invalid audio metadata.");
  if (
    p.cues.some(
      (c) =>
        !c ||
        !p.lines.some((l) => l.id === c.line) ||
        !Number.isFinite(c.start) ||
        !Number.isFinite(c.end) ||
        c.start < 0 ||
        c.end < c.start,
    ) ||
    new Set(p.cues.map((c) => c.line)).size !== p.cues.length
  )
    throw Error("Invalid timing references.");
  if (
    p.scenes.some(
      (s) =>
        !p.cues.some((c) => c.line === s.cue) ||
        !str(s.title) ||
        !str(s.detail) ||
        !/^#[0-9a-f]{6}$/i.test(s.color) ||
        !origins.includes(s.origin),
    ) ||
    new Set(p.scenes.map((s) => s.cue)).size !== p.scenes.length
  )
    throw Error("Invalid scene references.");
  if (
    p.arrangement !== undefined &&
    (!array(p.arrangement) ||
      new Set(p.arrangement.map((s) => s.id)).size !== p.arrangement.length ||
      p.arrangement.some(
        (s) =>
          !s ||
          !str(s.id) ||
          !str(s.label) ||
          !str(s.direction) ||
          !["vocal", "instrumental"].includes(s.kind) ||
          !Number.isSafeInteger(s.bars) ||
          s.bars < 1 ||
          s.bars > 128 ||
          !array(s.lines) ||
          s.lines.some((id) => !p.lines.some((l) => l.id === id)) ||
          (s.kind === "instrumental" && s.lines.length > 0),
      ))
  )
    throw Error("Invalid arrangement sections.");
  // Imported approvals are re-established locally; an external file cannot approve itself.
  return resetReview
    ? { ...p, approved: [null, null, null, null, null, null], checks: [false, false, false] }
    : p;
}
