import {
  snapshots,
  latestReviewReady,
  snapshotDate,
  snapshotHref,
  latestAudioBacked,
  audioCoverageLabel,
} from "./snapshots/registry";
import "./productions.css";
const versions = [
  {
    title: "Full song · first layer",
    duration: "3:47",
    status: "Original audio throughout · provisional lyric timing",
    href: "/songs/live-full-song",
    summary:
      "Room and Earth opening, browser workshop, personalized feed, agent harness, editable notes and tools, toaster and closing chorus. Embodied phone and harness scenes; independent lyric words; detail pass pending.",
    revision: "Separate full-song draft v1; all prior drafts preserved.",
  },
  {
    title: "Original audio + room/Earth opening",
    duration: "36.3s",
    status: "Audio throughout · first fit · not Study 03",
    href: "/songs/live-original-combined",
    summary:
      "Existing original recording from zero, four spoken lines, Earth capabilities and Web reveal into the first verse. Word alignment remains provisional.",
    revision: "Separate draft; previous saved edits preserved.",
  },
  {
    title: "Earth upgrades → Internet → inside invitation",
    duration: "89.1s",
    status: "Current visual draft · NOT review-ready · opening MP3 missing",
    href: "/songs/live-earth-upgrades",
    summary:
      "Moving upgrade tokens transform Earth; network growth introduces spatial questions, alternating approaches and the Web window reveal. Audio alignment and full playback review are blocked.",
    revision: "Separate draft; prior studies are retained as superseded history.",
  },
  {
    title: "Cumulative questions + localized ARPANET",
    duration: "100.1s",
    status: "Silent timing study • audio only 40–88.1s",
    href: "/songs/live-questions-arpanet",
    summary:
      "Three questions held together, a gradual turn toward Earth, then one UCLA–SRI signal before later network growth. Existing browser and feed sections retained.",
    revision: "Separate draft r1; prior snapshots and local drafts preserved.",
  },
  {
    title: "Inside opening + feed study",
    duration: "100.1s",
    status: "Silent timing study • audio only 40–88.1s",
    href: "/songs/live-inside-feed",
    summary:
      "Inside-window opening and existing browser verse, followed by taps becoming inferred interests and a ranked feed. Opening score and new vocals are pending.",
    revision: "Separate draft r1; previous opening edits are preserved.",
  },
  {
    title: "Inside-window opening",
    duration: "88.1s",
    status: "Silent timing study • audio only 40–88.1s",
    href: "/songs/live-inside",
    summary:
      "Repeated inside-room views and gradually connected Earth; the closed window opens once before the first sung verse.",
    revision: "Separate draft r1",
  },
  {
    title: "Opening + browser story",
    duration: "72.1s",
    status: "Earlier opening · your saved draft preserved",
    href: "/songs/live-opening",
    summary:
      "Earth, workshop and browser story in one extended composition. Opening direction is still being revised.",
    revision: "Seed r36; your saved local revision takes precedence.",
  },
  {
    title: "Browser verse · character clearance",
    duration: "35.8s",
    status: "Working comparison",
    href: "/songs/live-clearance",
    summary: "Moves ‘seams’ clear of the character. Separate from the extended opening.",
    revision: "Seed r34",
  },
  {
    title: "Browser verse · v7",
    duration: "35.8s",
    status: "Earlier review candidate · unapproved",
    href: "/songs/live-dance-review",
    summary:
      "Full-body character, newspaper and browser history. This is the shorter excerpt, not the extended opening.",
    revision: "Seed r33",
  },
];
export default function Productions() {
  return (
    <section className="song-productions" aria-labelledby="productions-title">
      <p className="production-kicker">Who Owns Your Toaster? / Visual development</p>
      <h1 id="productions-title">Production versions</h1>
      <p>
        Review a pinned snapshot or open an editable working version. Working versions keep their
        own saved edits in this browser.
      </p>
      <aside>
        <strong>Audio baseline: R7 · L1</strong>
        <span>
          Visual revisions below are separate from the audio take. These are live previews, not
          final renders or approved music videos. Audio must be available on this laptop.
        </span>
      </aside>
      {latestAudioBacked && (
        <p>
          <a href={snapshotHref(latestAudioBacked.id)}>
            Open audio-backed review · {latestAudioBacked.durationSeconds}s
          </a>{" "}
          — original recording throughout; combined first fit, not final approval.
        </p>
      )}
      <aside aria-labelledby="current-drafts-title">
        <h2 id="current-drafts-title">Current scene drafts</h2>
        <p>
          <a href="/songs/live-foundation-v18">Full foundation with finale · v18</a> — all chapters
          blocked; full visual and meaning review pending.
        </p>
        <p>
          <a href="/songs/live-foundation-v17">Toaster action sequence · v17</a> — bread, power and
          owner control; rough foundation unverified.
        </p>
        <p>
          <a href="/songs/live-foundation-v16">Harness task sequence · v16</a> — persistent page,
          instruction and model choice; rough foundation unverified.
        </p>
        <p>
          <a href="/songs/live-foundation-v15">Feed cause/consequence blocking · v15</a> — saved
          signals, ordering and local choices; full foundation unverified.
        </p>
        <p>
          <a href="/songs/live-foundation-v14">Browser action blocking · v14</a> — physical
          source/control proxies; full foundation unverified.
        </p>
        <p>
          <a href="/songs/live-foundation-v13">Opening action blocking · v13</a> — moving Earth and
          capsule contacts; foundation remains incomplete.
        </p>
        <p>
          <a href="/songs/live-foundation-v12">Open 76-shot foundation · v12</a> — source-anchored
          retained-action assembly; story and visual review pending. Details locked.
        </p>
        <p>
          <a href="/songs/live-foundation">Compare 71-shot diagnostic · v11</a>
        </p>
        <a href="/songs/live-ai-ownership">Open latest AI draft · S08–S12 owned workspace · v9</a>
        <span>
          Includes the earlier S02–S07 studies and a first pass of S08–S12: model replacement, human
          choice, page editing and retained work. Opens at the supplier change in the full song.
          Continuous audiovisual review, timing and creative acceptance remain outstanding.
        </span>
        <details>
          <summary>Compare earlier AI drafts</summary>
          <ul>
            <li>
              <a href="/songs/live-ai-crown">S05 retained instruction · v8</a>
            </li>
            <li>
              <a href="/songs/live-ai-harness">S07 owned tool rules · v7</a>
            </li>
            <li>
              <a href="/songs/live-ai-memory">S06 editable memory · v6</a>
            </li>
            <li>
              <a href="/songs/live-ai-permission">S04 human permission · v5</a> — earlier local-save
              depiction
            </li>
            <li>
              <a href="/songs/live-ai-check">S03 source and preview · v4</a>
            </li>
            <li>
              <a href="/songs/live-ai-readability">S02 monitor readability · v3</a>
            </li>
          </ul>
        </details>
        <span>
          Each draft keeps its own saved edits. These study numbers are separate from the pinned
          full-song versions below. Opening a draft does not replace another version.
        </span>
        <a href="/songs/director#s08-s12-owned-workspace-2026-10-11">
          Inspect the latest scene intention and evidence
        </a>
      </aside>
      <aside aria-label="Review readiness">
        <strong>
          {latestReviewReady ? "Latest review-ready version" : "No creatively approved version yet"}
        </strong>
        {latestReviewReady ? (
          <a href={snapshotHref(latestReviewReady.id)}>Open verified review</a>
        ) : (
          <span>
            Original-audio first fit is playable throughout. Exact word alignment and subjective
            musical review remain pending; Study 03 is not integrated.
          </span>
        )}
        <a href="/songs/live-full-song">Open full song · audio and visuals throughout</a>
        <a href="/songs/live-toaster-retained">Toaster retained words · separate draft v3</a>
        <a href="/songs/live-toaster-match">Toaster / provider match · separate draft v2</a>
        <a href="/songs/live-toaster-contact">Toaster contact study · separate draft · 166–192s</a>
      </aside>
      <h2>Archived timing studies</h2>
      <p>
        Review links use a pinned scene and ignore browser edits. Open a separate draft to make
        changes. Your existing opening draft remains at{" "}
        <a href="/songs/live-opening">Opening + browser story</a>.
      </p>
      <ul aria-label="Timestamped snapshots">
        {snapshots.map((s) => (
          <li key={s.id}>
            <div className="production-status">
              {audioCoverageLabel(s.audio.arrangement)}
              <span>{s.durationSeconds}s</span>
            </div>
            <h2>{s.title}</h2>
            <p>
              <time dateTime={s.createdAt}>{snapshotDate(s.createdAt)}</time> · America/Detroit
            </p>
            <small>Stored timestamp: {s.createdAt}</small>
            <p>{s.changes}</p>
            <a href={snapshotHref(s.id)}>Inspect archived study →</a>
            {" · "}
            <a href={`${snapshotHref(s.id)}/draft`}>Open separate draft →</a>
            <details>
              <summary>Source and media references</summary>
              <p>
                Scene and arrangement are pinned. Asset versions and hashes are recorded in the
                scene. Local media must match those references. This is a live preview, not a frozen
                video render.
              </p>
              <a href={`https://github.com/hadi-nayebi/hadosh-production-contexts>
                Source revision {s.sourceCommit.slice(0, 7)}
              </a>
              <pre>
                {JSON.stringify({ ...s, scene: undefined, assets: s.scene.assets }, null, 2)}
              </pre>
            </details>
          </li>
        ))}
      </ul>
      <h2>Editable working versions</h2>
      <ol>
        {versions.map((v) => (
          <li key={v.href}>
            <div className="production-status">
              {v.status}
              <span>{v.duration}</span>
            </div>
            <h2>{v.title}</h2>
            <p>{v.summary}</p>
            <small>{v.revision}</small>
            <a href={v.href}>Open live · {v.title} →</a>
          </li>
        ))}
      </ol>
      <details>
        <summary>Older compositions · preserved archive</summary>
        <ul>
          <li>
            <a href="/songs/live-dance">Browser dance v6 · 35.8s</a>
          </li>
          <li>
            <a href="/songs/live-refinement">Scene props and entrances · v5</a>
          </li>
          <li>
            <a href="/songs/live-original">Original typography · v4 · 24s</a> — also available at
            /songs/live; existing saved edits preserved.
          </li>
        </ul>
      </details>
      <p>
        Creative workflow and decisions belong to{" "}
        <a href="https://github.com/hadi-nayebi/hadosh-production-contexts">Departments</a>
        . This list only opens Canvas compositions.
      </p>
    </section>
  );
}
