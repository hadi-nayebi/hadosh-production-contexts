# Canvas production surface

This directory owns the project-specific production dashboard. Origin remains the generic harness;
keep Canvas domain behavior here instead of embedding it in `.codex` transport or generic server
infrastructure.

## Product invariant

Canvas converts source audio and transcript evidence into reusable production components, then into
an HTML-performed illustrated scene. It does not require generated video and does not reuse the
source video's filmed imagery.

## Provenance invariant

Never blur source evidence with interpretation. Every later production value must be attributable to
one of: source explicit, source derived, agent expansion, or human authored/approved. Stage 1 begins
with source transcript records and preserves `original_text` even when the working text is edited.

## Media boundary

Raw source media stays local and untracked. Store metadata and millisecond ranges during editing. Do
not generate hundreds of physical audio clips merely because a component boundary moved. Export or
render clips only at a downstream boundary that actually requires independent files.

## Interaction rules

- Every stage exposes what enters, what the human can change, and what leaves.
- Human edits are first-class structured state, not prompt fragments.
- Destructive actions must be reversible or explicitly confirmed.
- Long media must not be fully decoded merely to draw a waveform; use precomputed peaks when that
  feature is added.
- Keep components modular. Do not reproduce Origin's large single-file application pattern.

## Verification

Pure schema, import, timing, split, merge, ordering, and provenance behavior belongs in
deterministic tests. Browser checks must cover keyboard navigation, local-file reattachment,
playback boundaries, responsive layout, and project round trips before Stage 1 is called
production-ready.
