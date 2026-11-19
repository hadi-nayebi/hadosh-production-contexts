# T07 — Permission-dialog gag · BUILD RECORD · Attempt 3

Practice Cycle 022 Wave 21 · 2026-11-17 · Artifact dir: `hidden_files/study/recreations/T07-permission-dialog-gag/`
This record is score-blind and neutral: construction facts, check names/results, and the final source hash only.

## Final source

- `recreation.html` sha256: `bf55ad56e85ba46b4305e7efa590095dd440e16d8fdafd3f1d515709f2ec3f7d`
- Preserved prior attempts: `recreation-attempt-2.html` sha256 `6a2146e2979a793b80f4129455663c4dcfc115f59df8200e25b575a6f26abdfc` (content copy, inode distinct from the working file, re-verified after the working file's overwrite) · `recreation-attempt-1.html` sha256 `8f3143da574862b954a4b6e7c8c1d2e61b64439507197f8d937a5d9c26103933` (untouched).
- Preserved comparison: `comparison-attempt-2.html` sha256 `3a08cb045e57046657e99e96aaf8eb84791fa8457d0b32b4da792da21d5177ba`.
- Segment evidence file: `segment.mp4` sha256 `2ca2a09d848d9fb00965c0900ad0fb7548821b18bdb93bb2f097ad69075cfb43` (960×540, 9.000 s).
- Prior fit/config leg outputs: none existed in the artifact directory before this attempt (inventoried absence); attempt-3 legs are filed new as `fit-table.md` + `config-census.md`.

## Anchors (bound, inherited from the resolved segment basis)

Modal windows 1700 / 1830 / 2500 ms; land delays 930 / 1000 / 1370 ms; derived holds 770 / 830 / 1130 ms; cycle 6030 ms; final selections [0, 0, 2]. No code path renders a non-final selection.

## Construction facts

- Single self-contained HTML file; no external references; background tiles are code-drawn divs.
- CONFIG is grouped: content · timing · layout · type · palette · tiles · behavior · container · modalScale — 106 leaf keys. Every technique value lives in CONFIG, including the marker glyph and numbering format, flash opacity, tile border width and opacity steps, padding floors/ratios, the expansion factor, the font-cap offset, the transparent keyword, fallback request/option text, and fallback timing constants. CONFIG typography (title weight, option weights, line heights) is applied to the rendered styles and to the measurement font spec.
- Fit model: basis construction is named in the source (font at the state's own weight · exact marker box · modal + border + row padding subtracted · border box). The model enumerates every reachable wrap state (per request title; per option × selected/unselected) with a word-level wrap simulation, an oversized-token flag, offset-aware height (top offset + modal height vs stage height) that is enforced (a failing height blocks the modal and records an entry), a hierarchy floor (the option size yields at the title cap rather than inverting the hierarchy), and enforced long-text policies: expand-wrap wraps within the cap or the line is withheld with a validation entry; reject marks lines rejected and the render path does not render them.
- Validation: every CONFIG group is validated with recorded outcomes — strict numeric parsing everywhere (string finals and string flash values parse numerically or are rejected with a record, never concatenated or NaN), negative timing recorded and replaced, timing pairs rejected atomically, flash constrained below the smallest land delay, colours grammar-checked, container run counts restricted to positive integers or unbounded (zero/negative/fractional rejected with a record). A magnitude sweep probes a 400-nines-class value against every numeric field (67 fields).
- Container contract: commands arrive in a namespaced, versioned envelope with a per-command payload schema (empty payload; extra keys rejected); source + origin allowlist retained. Signals distinguish a per-cycle completion from a single final completion emitted only when the configured run count is exhausted; unbounded runs emit no final completion.
- Elapsed processing: elapsed boundaries are processed in order (cycle counts, completion) separately from visible presentation — only the latest elapsed state is presented, missed intervals never stretch, and boundaries stay anchored to the original clock across delayed callbacks, for finite and unbounded runs; no state is presented after exhaustion.
- Scheduling: a single anchored origin drives an absolute event table; pause records the pause instant and resume shifts the origin by the pause duration; restart resets cycles and completion state.
- `comparison.html`: the recreation-side command sender now posts the namespaced envelope; Play/Pause/Restart were verified against the recreation's message validation for all three commands (envelope acceptance in the own-check suite). The ORIGINAL side (labels, segment media, windowing) is unchanged. Live rendered comparison interaction (pause-position preservation, restart) rests on the same origin-shift arithmetic the suite prices; rendered-pixel verification was not performed.

## Own checks (run dir `own-checks-T07-attempt3.js`, node, all against the final source above)

Result: **57 pass, 0 fail** — including: anchor timeline (finals, windows, holds, cycle); literal-removal and rendered-style consumption probes; wrap/rejection/offset/hierarchy probes; malformed-input set; run-count semantics; magnitude sweep (67 fields, finite throughout); envelope acceptance/rejection set; delayed-callback fixtures for finite and unbounded runs; comparison-envelope acceptance for play/pause/restart; count-changing swap (4 requests × 4 options, finals [0,0,2,3]); purity grep (no external loads, no specimen media, no captions); self-start.
- CONFIG consumption census: **106/106 leaf keys consumed, 0 unconsumed** (mutation-proven) — `config-census.md`.
- Literal census: no hex colours outside CONFIG; the transparent keyword appears once, in CONFIG; numeric literals outside CONFIG are a named structural whitelist — `config-census.md`.
- Measured-fit leg: `fit-table.md` (wrap states enumerated per layout: 9; phone option size 16 px ≥ 14 px floor; offset-aware height fits at 360×640 and 960×540).

PIXEL-UNVERIFIED: all geometry/readability statements rest on the source-bound displayed-state model; no rendered-pixel verification was performed.

## Printed limitations

- A flash state is rendered only at the first arrival (modal index 0) — the only arrival for which frame evidence of a flash is in the record.
- At very short stage heights (360×200 fixture) the offset-aware height check fails and the modal is withheld by enforcement, with a validation entry — the enforcement outcome, recorded in `fit-table.md`.
- Checkpoint staging was compressed into two source writes; checkpoint probes are filed per cure in the run record with attribution BUNDLED, and the post-first-overwrite preservation census (clean) was executed after the second write rather than before the second stage — both printed in the run's checkpoint record.
