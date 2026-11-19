# T07 — Permission-dialog gag · BUILD RECORD · Attempt 2

Practice Cycle 008 Wave 7 · 2026-11-15 · Artifact dir: `hidden_files/study/recreations/T07-permission-dialog-gag/`
This record is score-blind and neutral: construction facts, check names/results, and the final source hash only.

## Final source

- `recreation.html` sha256: `6a2146e2979a793b80f4129455663c4dcfc115f59df8200e25b575a6f26abdfc`
- Preserved prior attempt: `recreation-attempt-1.html` sha256 `8f3143da574862b954a4b6e7c8c1d2e61b64439507197f8d937a5d9c26103933` — re-verified unchanged after the working file's overwrite.
- Segment evidence file: `segment.mp4` sha256 `2ca2a09d848d9fb00965c0900ad0fb7548821b18bdb93bb2f097ad69075cfb43` (960×540, 9.000 s).

## Anchor re-derivation (segment-time origin, this cycle)

Spot re-derivation by frame extraction from `segment.mp4` at 30 fps (frames n75 ≈ t2.5 s, n165 ≈ t5.5 s, n195 ≈ t6.5 s; modal-region pixel classification): green selection pixels present at t2.5 s (19 px in the modal crop), no green/orange selection pixels at t5.5 s, orange selection pixels present at t6.5 s (108 px). Consistent with the plan's measured table (finals land ≈2.13 s green / modal 3 unselected at 5.5 s / final lands ≈6.10 s orange) within the plan's ±100 ms binding tolerance. Bound anchors: modal windows 1700 / 1830 / 2500 ms; land delays 930 / 1000 / 1370 ms; derived holds 770 / 830 / 1130 ms; cycle 6030 ms.

## Construction facts

- Single self-contained HTML file; no external references (no `src=`/`href=` asset loads; system monospace stack only); background tiles are code-drawn divs.
- CONFIG is grouped: content · timing · layout · type · palette · tiles · behavior · container · modalScale. Timing holds two authoritative arrays (modalWindowsMs, landDelaysMs); holds and cycle duration are derived (hold = window − landDelay; cycle = Σ windows). An override pair with landDelay ≥ window is rejected atomically to defaults and written to the validation record.
- State sequence per modal: arrival (flash state only for modal index 0, 120 ms, no selection shown) → unselected dwell → final selection lands directly → hold → instant replacement. No code path renders a non-final selection. Default finalSelections [0, 0, 2].
- Selection styling is per-option-index from CONFIG palette.selectionStyles (index 0 green pair, index 1 green pair, index 2 orange pair, index 3 blue pair), with a named fallback style recorded in the validation record when an index has no entry.
- Scheduling is an absolute event table from a single origin; a late callback applies every event whose scheduled boundary has passed, in order (catch-up), and later scheduled boundaries do not move. Pause records the pause instant; resume shifts the origin by the pause duration.
- Layout: modal left-anchored at 5% of stage width, width ratio 0.56 at segment scale; at stage widths ≤480 px the width ratio is 0.94 (stage cap). Fit is computed from canvas-measured text at bold weight for the title and for option rows including the marker box and numbering prefix, plus border (2×2 px) and padding. Long-text policy is a CONFIG value: "expand-wrap" (expand to cap, wrap to at most 2 lines, then reject with a validation-record entry) or "reject" (any line needing wrap is rejected with a validation-record entry).
- Normalization runs before first render: strict full-string numeric parsing, colour grammar validation, fractional finals rounded then clamped, missing finals resolved by the "previous" policy, timing arrays extended by repeating the last entry; every rejection/default/clamp is appended to an observable validation record (in-page array, mirrored as a count in the root element's dataset).
- Container surface: emits ready / state / complete signals (postMessage to parent + DOM CustomEvent); CONFIG container.runs bounds the number of cycles (default unbounded); the message handler accepts a command only when the event source is the parent window, the origin is in the CONFIG allowlist, and the command is one of play/pause/restart.
- `comparison.html`: recreation side re-pointed (grouped-CONFIG description, ≈6.03 s cycle, count-changing swap URL with 4 requests × 4 options and finals 0|0|2|3). The ORIGINAL side (labels, segment, windowing) is unchanged.

## Own checks (run dir `own-checks-T07.js`, node, all against the final source above)

Result: **19 pass, 0 fail.**

- Timeline sequence mapping: landed finals [0,0,2]; no non-final state carries a selection; land instants [930, 2700, 4900] ms.
- Derived timing: cycle 6030 ms; holds [770, 830, 1130] ms; window shares ≈28/31/41%; scheduled event offsets equal the table values.
- Timing-pair rejection: landDelay ≥ window override rejected atomically, validation entry recorded.
- Flash: exactly one flash state (modal 0), 120 ms, no selection during it.
- Per-row selection styles: index 0 green, index 2 orange, index 3 distinct configured value; mutating the index-3 entry changes the resolved style.
- Displayed-state fit at 360×640 and 960×540 (defaults): option size ≥14 px at 360 px stage, title−option gap ≥3 px, modal height ≤ stage height, modal width ≤ 94% cap; long-request fixture resolves under the wrap policy; reject-policy fixture records rejected lines.
- Validation effects: malformed numeric suffix rejected; fractional final rounded/clamped; invalid colour defaulted; negative scale rejected.
- Missing-finals mapping: 4-request fixture with finals [0,0] lands [0,0,0,0] with two recorded defaults.
- Pause/resume arithmetic: origin shift preserves the remaining dwell (200 ms) to the next event across an arbitrary wall-clock gap.
- Message validation: parent source + allowlisted origin + known command accepted; same-origin different sender rejected (reason "source"); foreign origin rejected; unknown command rejected.
- Finite run: `runs=1` parses; the stop condition derives from the 6030 ms cycle.
- Count-changing swap: 4 requests × 4 options, finals [0,0,2,3] land in order; timing arrays extended to 4 entries with recorded entries; 4th-row style resolved; fit holds at 360 px.
- Interaction fixture: long 4-option fixture at 360 px — wrapped states enumerated per line (≤2 lines or rejected), modal height fits.
- Purity grep on the final source: zero hits for specimen-media/caption/external patterns; no palette literals in the stylesheet block; no specimen chrome text. Asset inventory: the recreation loads nothing external.
- CONFIG consumption census: 79 leaf keys walked; every key's mutation changed a computed or rendered effect in the census snapshot (timeline, layouts at two widths plus a long-text fixture, missing-finals resolution, fallback style, tile geometry, signal names, message validation) — 79 consumed, 0 unconsumed.

PIXEL-UNVERIFIED: all geometry/readability statements above rest on the source-bound displayed-state model; no rendered-pixel verification was performed.

## Printed limitations

- A flash state is rendered only at the first arrival (modal index 0) — the only arrival for which frame evidence of a flash is in the record. No flash is rendered at the other arrivals.
- All geometry and readability statements rest on the source-bound model named above; no rendered-pixel verification was performed.
