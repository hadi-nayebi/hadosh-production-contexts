# T11 — Code-review UI + stamp slam · BUILD RECORD (Attempt 2, practice Cycle 008 Wave 7, 2026-11-15)

Governing: practice INSTRUCTION.md §3+§5 · plan-T11.md as amended by RUN.md §2 (CA-W1/W2/W3, T11 CA-1..CA-4) · bounded_probe_discipline (probes capped ≤6000 chars; no breaches).

## §1 Segment re-observation (CA-1 / CA-W3) — filed in Execute
Method: ffmpeg extracted frames at 2 fps from the artifact's segment.mp4 (segment-relative time = frame index × 0.5s; segment cut 55.5–65.5s, ffprobe duration 10.000s re-verified attempt 1). Frames viewed firsthand this cycle:
- ~2.5s: card #1111, approvals 118, stamp ALREADY slammed over the arch, right panel reads "Pull request merged / Merged".
- ~3.5s: card #1112 "ship: i-have-a-blocker.mp4", approvals 120, review panel, no stamp.
- ~4.5s: card #1113, approvals 150, checks panel present (incl. a temperature row), no stamp.
- ~5.5s: full-frame horizontal blur frame (a card transition in progress).
- ~6.5s: card #1115, approvals 700, no stamp. ~7.5s: card #1115, approvals 799, stamp slammed, "Merged".
- ~8.5s: card #1116 "ship: dont-wait.mp4", approvals 800, checks show prod down. ~9.0s: same card, checks fixed.
- ~9.5s: the segment cuts away to a comic-grid overview.
Resolution (CA-W3): in the segment, a stamp lands per merged card (observed on at least two cards), not only once at the end, and sampled card dwell is roughly 2s rather than a measured 1.3s. The 1300ms period and any single terminal-stamp reading are therefore filed as **UNRESOLVED fidelity claims** — provenance disclosure is not anchor clearance. The build below follows the plan's binding construction (absolute timeline; terminal sequence derived under the plan's invariants: checks-ready < stampAt, hold ≥800ms, no card start whose counter crosses the loop), and does not claim the segment proves those anchors.

## §2 Construction (neutral technique facts)
- One self-contained HTML file; all variables in a CONFIG object at the top of the script; URL overrides for titles/stamp/cardMs/accent/bg pass through a validation function — an invalid effective configuration is rejected atomically (recorded in an observable rejected list) and the default configuration renders instead.
- Scheduling is a single absolute timeline: an event table is computed from CONFIG (card starts, counter starts/ends, checks-ready, stamp, stamp-hide, loop). Displayed state is a pure function of loop phase, so a frame that skips several checkpoints reconstructs exactly the state those checkpoints produce, in event order; pause stores the phase and resume shifts the time origin by the paused span; loop rollover is phase modulo and resets the stamp.
- Derived terminal sequence (from CONFIG, computed not literal): card starts 0/1300/…/7800ms · counter span 950ms · final counter ends 8750ms · checks-ready 8800ms · stamp 8900ms · stamp hide 9900ms · held interval 870ms · loop 10000ms. No card starts after the final card.
- Card transitions: one envelope per swap (360ms), swap at the envelope midpoint, horizontal travel 120px, blur peaking at the midpoint with a horizontal streak transform, opacity 1 throughout.
- Approvals counter: per-card span derived from the card interval when a shorter interval is configured (span = min(counterMs, interval − whip/2)); a small blur applies only during the first 60% of the span and is zero for the final 40%.
- Checks panel: row states, status-pill text and tone are data in CONFIG; check-state colors, pill tones, and palette colors are applied via CSS custom properties at init. The merge checks state is selected by a CONFIG index at the checks-ready checkpoint.
- Arch: code-drawn pointillist pointed arch; geometry constants (profile knee, half-width ramp, leg gap, band frequency/phase/threshold, dark-cell ratio) and the three glyph characters live in CONFIG; each cell renders as a span whose class is colored from CONFIG palette entries.
- Reviewer figures are DOM figures (head, arms, body, legs) built from CONFIG figure dimensions; counts per card are CONFIG data.
- Type sizes (checks 12px, pill 11px, headings, stats) are CONFIG values applied at init.

## §3 Own checks (own-checks-T11.js in the run directory, node)
43 assertions, all PASS. Coverage: timeline invariants at the default configuration and at cardMs=900 (counter intervals disjoint, no counter crosses the loop, checks-ready before stamp, hold ≥800ms); skipped-frame equivalence (jumping directly to phases after final-counter-end, checks-ready, stamp, stamp-hide, and across loop rollover reproduces the densely stepped state); checkpoint states (before the stamp: not slammed; after slam: held at scale 1 with merge checks shown; at loop restart: stamp reset, first card); whip effects (opacity 1 at every sampled phase, travel equals CONFIG, envelope duration equals CONFIG); counter blur zero in the settle window; a CONFIG consumption census over 77 leaf keys with zero unconsumed; per-family mutation effects (arch glyph, whip distance, stamp slam duration, merge index, check-state/pill/type families); validation rejection of three invalid configurations; the swap configuration valid with its timeline holding; a source-bound displayed-state fit model at 360px width and 300px minimum height including the wrapped-header state (modelled totals 264px single-line / 281px wrapped, both ≤300px) — modelled, PIXEL-UNVERIFIED (no render route; standing limitation); purity grep zero hits and zero external assets. Asset inventory: zero external assets — all DOM/CSS/JS, arch code-drawn.

## §4 Deviations (printed)
- D1: comparison.html NOT updated — the recreation's interface (play/pause/restart commands, swap URL parameters) is unchanged, so per the plan it is re-pointed only on an interface change; its descriptive note still cites the previous attempt's stamp timing literal. The ORIGINAL side is untouched.
- D2: Segment observation (§1) shows stamps recurring per merged card in the specimen; the build implements the plan's terminal-sequence construction. The divergence is filed here and in §1, and the affected fidelity claims are marked UNRESOLVED rather than resolved.
- D3: palette entries red/amber from the prior attempt were removed rather than consumed (they duplicated the check-state colors, which are the consumed source); no other prior CONFIG key was dropped silently — archRed/archDark/archLight are now consumed by the arch glyph classes.

## §5 Final source binding
recreation.html sha256: `7af40af280d88fc0e8b5912a5f841909d722650a080244c5a491392591404a57`
Preserved prior attempt: recreation-attempt-1.html sha256 `479ac27eeec24b441efa9753f0a40749d7226719d57c0a494f9929407d918539` (re-verified after the working file's overwrite; unchanged).
