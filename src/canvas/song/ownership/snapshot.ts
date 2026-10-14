import content from "./departments-current.json";
import suno from "./departments-suno.json";
import { blankProject, type SongProject } from "../model";
import type { Snapshot } from "./review";

// Pinned copy, not an independently authored creative record. Refresh only from Departments.
export const sourceCommit = "6b985a5bccaf98a38bb4aef802476567beb8ff82";
const base = `https://github.com/${content.canonical.repository}/blob/${sourceCommit}`;
const historyPath = "research/canvas-song-ownership/iterations/2026-10-09-visual-first.md";
export const snapshot: Snapshot = {
  suno: { ...suno, sourceUrl: `${base}/${content.sunoPacketPath}` },
  title: content.title,
  revision: content.revision,
  source: {
    repository: content.canonical.repository,
    ref: content.canonical.branch,
    commit: sourceCommit,
    path: content.canonical.path,
    url: `${base}/${content.canonical.path}`,
    jobUrl: content.ownerJob,
  },
  message:
    "Browser choices → platform-owned social personalization → user-controlled or platform-owned Agentic AI → the toaster. LLM intelligence is the electricity; the harness is the appliance.",
  lyricConstraint: content.lyricConstraint.text,
  claims: content.claims.map((c) => ({
    id: c.id,
    text: c.text,
    sources: c.sourceIds.map((id) => content.sources.find((s) => s.id === id)!.url),
  })),
  sections: content.sections.map((s) => ({
    id: s.id,
    title: s.title,
    purpose: s.purpose,
    vocalMode: s.vocalMode,
    lyrics: [
      ...(s.spoken?.length
        ? ["[Spoken]", ...s.spoken, ...(s.lyrics.length ? ["[Sung]"] : [])]
        : []),
      ...s.lyrics,
      ...(s.hook?.length ? ["[Hook]", ...s.hook] : []),
    ],
    visual: s.visual.description,
    actions: s.visual.actions,
    onScreenText: s.visual.onScreenText,
    assets: s.visual.assets,
    status: `${s.status} · ${s.approval} · ${s.visual.status}`,
    claims: s.claimIds,
  })),
  decisions: [
    {
      title: "Story sequence",
      detail: content.storySpine.order.join(" → "),
      status: content.storySpine.status,
    },
    {
      title: "Wording, music and scenes",
      detail:
        "The browser verse is the strongest base. Later wording and motion design still need review.",
      status: content.approvals.wording
        ? "Source marks wording approved"
        : "Provisional; not approved",
    },
    {
      title: "Visual workflow",
      detail: `${content.production.visualEngine} components and described actions; no generative footage required.`,
      status: content.production.stage,
    },
    ...content.reviewNotes.map((detail, i) => ({
      title: `Review note ${i + 1}`,
      detail,
      status: "Departments review guidance",
    })),
  ],
  iterations: [
    {
      title: `Current candidate · ${content.revision}`,
      detail:
        "Paired lyric, purpose, claim and motion descriptions. Current working content; cadence and scene design remain open.",
      status: "Current / provisional",
      url: `${base}/${historyPath}`,
    },
    {
      title: "Visual-first treatment · r1",
      detail:
        "The first paired treatment is archived in Departments. It remains available for comparing later lyric and scene changes.",
      status: "Superseded by r2",
      url: `${base}/research/canvas-song-ownership/iterations/visual-first-r1.json`,
    },
    {
      title: "Earlier toaster-first pilot and lyric passes",
      detail:
        "Preserved in Canvas PR #2 and the owner history. Not the current sequence or a Suno handoff.",
      status: "Superseded",
      url: "https://github.com/hadi-nayebi/hadosh-production-contexts",
    },
  ],
  assetStatus: `${content.assets.length} descriptions · ${content.assets.filter((a) => a.file !== null).length} completed files`,
  audioStatus:
    content.music.audioFile === null
      ? "No audio generated or attached"
      : "See Departments media record",
  renderStatus:
    content.production.renderFile === null
      ? "No render · timing not aligned"
      : "See Departments render record",
};
export function ownershipProject(): SongProject {
  const p = blankProject();
  return {
    ...p,
    title: content.title,
    audience: "People learning how to control the AI systems around their work",
    message: snapshot.message,
    style: content.music.currentDirection,
    notes: `Provisional Departments snapshot ${content.revision} at ${sourceCommit}. ${snapshot.source.url}. Canonical workflow, decisions and content remain in Departments. Local production edits require reconciliation. No audio, assets or render generated.`,
    claims: content.claims.map((c) => ({
      id: c.id,
      text: c.text,
      source: c.sourceIds.map((id) => content.sources.find((s) => s.id === id)!.url).join("\n"),
      origin: "source_derived",
    })),
    lines: content.sections.flatMap((s) =>
      [...(s.spoken ?? []), ...s.lyrics, ...(s.hook ?? [])].map((text, i) => ({
        id: `keys-${s.id}-${i}`,
        section: s.title,
        text,
        claim: s.claimIds[0],
        origin: "agent_draft",
      })),
    ),
  };
}
