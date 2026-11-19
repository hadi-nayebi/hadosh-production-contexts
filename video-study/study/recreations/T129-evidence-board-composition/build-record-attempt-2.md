# build-record — T129 evidence-board composition · attempt 2 · practice Cycle 018 Wave 17
Artifact: hidden_files/study/recreations/T129-evidence-board-composition/
Governing: practice INSTRUCTION §3+§5; plan = Cycle 017 plan-T129.md (binding, Codex-plan-reviewed) + its review's six findings, consumed as printed below. Bar: avg ≥85 AND every lens ≥70. PIXEL-UNVERIFIED stands over the whole attempt (no browser binary in this seat; all geometry is source-modelled, on the same unrotated-rect + stamp-rotated-bbox model basis as attempt 1).

## Result
Final recreation.html SHA-256: **936578a6dd7cff92df7a043dca70dd2191673ad640021d011c2a933e88106553**
Scores (filed in scores.md, bound to codex/attempt-2/lens-<lens>.md): motion 93 · timing 96 · purity 100 · reusability 78 · readability 84 — avg **90.2**, min 78, delta vs 81.0 = **+9.2** → **PASS**. WHY: not owed (beating attempt). Attribution: **BUNDLED** (checkpoints isolate stage bundles; only the final build was scored).

## Preservation (before any mutation; content copies, create-once)
Baseline: Cycle 018 run dir preservation-baseline.txt (T129 recreation.html at 84491b05…dabf6). Copies made and hash-verified BEFORE the first edit, distinct inodes from the working files:
- recreation.html → recreation-attempt-1.html (sha 84491b05e3d38bae5111c61fe3ff43077d5fbe489dc0f55b942194ab1b4dabf6, matches baseline)
- comparison.html → comparison-attempt-1.html (sha 4f94d732f43d6f8dfc4e49014c43736e5d736158ca6c6dfe3da328e5acb56fe0)
- fit-table.md → fit-table-attempt-1.md · config-census.md → config-census-attempt-1.md · build-record.md → build-record-attempt-1.md
Post-overwrite census: after the working file's first overwrite and again at close, recreation-attempt-1.html still hashes to the baseline value; checkpoint copies verified inode-independent at each stage (below). scores.md was appended only (attempt-1 record and the plan scaffold unchanged above the attempt-2 section). No prior codex/ returns, frames, or segment.mp4 were touched.

## Overwrite manifest (plan-review finding 4's form)
| source (attempt-1 state) | preservation path | baseline sha |
|---|---|---|
| recreation.html | recreation-attempt-1.html | 84491b05…dabf6 |
| comparison.html | comparison-attempt-1.html | 4f94d732…6fe0 |
| fit-table.md | fit-table-attempt-1.md | (attempt-2 leg filed at fit-table-attempt-2.md; live fit-table.md refreshed from it after preservation) |
| config-census.md | config-census-attempt-1.md | (attempt-2 leg filed at config-census-attempt-2.md; live config-census.md refreshed from it after preservation) |
| build-record.md | build-record-attempt-1.md | (this record takes the attempt-tagged path build-record-attempt-2.md; build-record.md untouched) |
| scores.md | append-only — no preservation copy; the attempt-2 section is appended below the scaffold | 46f9dc34…e9 pre-append (Cycle 018 baseline) |

## Cures landed, stage by stage (checkpoint gate honoured: each stage began only after the prior checkpoint filed)
**Stage 1 — readability pair + hold (14/14 stage checks).** C-HOLD: CONFIG holdMs 3000 added; cycleMs 16950 kept as an asserted sum (checkpointsOk asserts cycleMs − typingEnd == holdMs and holdMs ≥ 2500); phase allocation before typing unchanged. C-STAMP-SEP: geom.photoZones {stampZoneH 41, captionGapPx 2, captionPadBottomPx 2}; the stamp centres in the stamp zone at the top of the photo card; its rotated bbox (106.1×40.1 at centre (271,132.5), y 112.4–152.6) is asserted disjoint from the caption zone (y 155–195) at hold. C-CARD-FIT: photoCard.h removed as an independent literal; height = photoCardHeight() asserted sum 2×cardBorderPx + stampZoneH + captionGapPx + (wrapped lines × exhibitLabelPx × exhibitLineHeight) + captionPadBottomPx = 89 px at the default 2-line wrap. Feasibility measurement (§2.1 conflict 2, plan-review finding 3's full layout calculation — stamp bbox, glyph, wrapped caption, borders, gaps, transformed bounds, containment, collisions): a taller card at y 128 crosses the stage bottom (203), so the photo exhibit's CONFIG y moved 128→110 (bottom 199 ✓); the portrait card height 60→54 with its shoulders glyph refit inside the card (a supporting geometry adjustment for the same feasibility constraint, recorded here, not a separate cure), chip gapY 4→2; portrait chip bottom = 108 ≤ photo top 110 ✓; photo vs note x-disjoint (202 ≥ 192) ✓; stamp bbox inside stage ✓; stamp hierarchy unchanged (22 px, 1.38×). Also stampPadY 5→2 (stamp box 26 px; bbox height 40.1 fits the 41 px zone).
**Stage 2 — reusability structure (16/16 stage checks).** R1: exhibits gained stable id + enterAtMs + enterKind (rise/slide/fade as data); stateAt publishes exhibitProgress keyed by id; render() iterates the whole layout array and animates each element from its own entry data — no code path names exhibits[0]/[1]. R2: noteRoute.from/to are ids ("note" → "car-photo"); endpoints resolve through anchorPoint() with CONFIG fromAnchor/toAnchor against the target's actual layout rect (the photo-height assumption is deleted; the endpoint y uses the asserted card height). R3: single stamp ownership — the stamped exhibit's own stamp string is the only stamp-text source; the global stamp key keeps angle/atMs only and the pair-equality checkpoint is deleted with the duplication; validateConfig() runs before layout (ids present/unique, finite fields, at most one stamped exhibit, route ids resolvable) and reports through checkpointsOk; a board with no stamped exhibit lays out with stamp null and passes.
**Stage 3 — keys + validation (14/14 stage checks).** R4: geom.chipPadY wired into map-label chips (layout textTop/textH + render padding/line-height) in addition to the portrait chip; type.exhibitLineHeight wired into the portrait chip (line-height style + chip height sum = max(portraitChip.h, 2×chipPadY + lines × exhibitLabelPx × exhibitLineHeight) = 44 px); palette.field REMOVED (the stage ground renders palette.map; the key that promised a separate field colour no longer stands). Adversarial validation set executed (A-C011-2): non-finite enterAtMs/beatMs rejected · null exhibits reported without throwing · empty exhibits reported · absent note reported without throwing · single oversized token caught by the line-overflow checkpoint · narrower-stage resize recompute re-prices containment · duplicate id rejected.
**Stage 4 — variants + self-start (no source change).** R5 swap variants S1–S10 executed at logic level (reordered · added · removed exhibits · no-stamp board · changed endpoints/anchors · longer multi-line label growing the card by formula · palette · geometry · timing incl. holdMs/cycleMs pair). Self-start: the file auto-plays on load under its own startup path and stateAt reaches the completed ending (SS1–SS2). Source comments scanned: neutral section headers only — no cure codes or commentary in the payload surface.

## Checkpoints (create-once, content copies, inode ≠ working file 5070760)
1. checkpoints/attempt-2/stage-1.html (inode 5284465) + stage-1-checks.txt — 14 PASS
2. checkpoints/attempt-2/stage-2.html (inode 5285736) + stage-2-checks.txt — 16 PASS
3. checkpoints/attempt-2/stage-3.html (inode 5286243) + stage-3-checks.txt — 14 PASS
4. checkpoints/attempt-2/stage-4.html (inode 5286902) + stage-4-checks.txt — full suite 35 PASS (stage 4 made no source change; its copy is byte-identical to the final file)

## Own-check suite on the final source (35/35 PASS)
Effect mappings E1–E10 (hold measured at typing end and cycle−1 and incomplete 1 ms before · stamp/caption disjoint at hold · stamp fully visible · caption inside card · card height asserted at 2-line and multi-line wraps · per-exhibit timing by id · connector endpoint from actual target height) · CONFIG consumption census C1–C4: 87/87 leaf keys consumed (mutation + application-site census; R4's three keys named consumed/removed) · literal census L1–L2 (whitelist per-literal in config-census-attempt-2.md; no content literal classified structural) · swap S1–S10 · purity P1–P2 (grep 0 hits; inventory code-only) · CSS parse CSS1–CSS3 (11 declarations parse, braces balanced, no empty values) · self-start SS1–SS2 · displayed/wrapped states W1–W2 (all wrapped lines inside inner widths; hold-state pairwise exhibit disjointness on the layout model).
Suite history (honest record): the first full-suite run scored 31/35 — all four failures were suite-method defects, not build defects (a variant label wrapping to 4 lines where the test asserted 3; a consumption snapshot blind to render-only keys, cured by adding the application-site leg; a CONFIG-block split offset misreading two formula constants). The suite was corrected and re-run to 35/35 on the unchanged final source; the checkpoint-4 output is the corrected run.

## Pre-scoring legs (Amendment A-C008, on the final source)
- Measured-fit leg → fit-table-attempt-2.md (live fit-table.md refreshed from it): **HITs 0** (watch: 16 px ink 11.46 px).
- Config-census leg → config-census-attempt-2.md (live config-census.md refreshed from it): **HITs 0** (87/87 consumed).

## Payload manifest + wave
Manifest: codex/attempt-2/payload-manifest.md (allowlist, exclusions, anchor scan — filed BEFORE firing; assembled payloads scanned: no cure/delta/target language; source comments neutral). Payloads: codex/attempt-2/instr-<lens>.txt (create-once). Header note: the standing header carries the Execute tasking's prescribed decision line (whether attempt 2 beats 81.0 and passes the bar); no per-lens prior scores, targets, or cure commentary appear in any payload.
Firing note: the first motion firing returned an empty file through the -o route (preserved create-once as codex/attempt-2/lens-motion-run1-empty.md, 0 bytes) and was re-fired once on the identical payload and final source; the re-fire's return is lens-motion.md. All five filed returns judge the identical final sha (verified on disk by the timing/purity/motion/readability returns).

## Lens scores as filed
motion 93 · timing 96 · purity 100 · reusability 78 · readability 84 → avg 90.2, min 78, delta +9.2 → PASS. Full filing + cure-by-cure outcomes + residual findings: scores.md, Attempt 2 section.

## Comparison
comparison.html updated at close for the changed cycle (16.95 s: asymmetry note, recreation label, sync divisor); the ORIGINAL side (label + segment.mp4 video element) is byte-unchanged. Prior comparison preserved at comparison-attempt-1.html.

## Plan-review findings — disposition in this build
(1) Anchor leakage: payloads carry only this attempt's neutral timing facts; no prior-attempt basis or dispute text was fed (the plan's §2 A-C010-3 both-bases feeding was NOT executed, on the Execute tasking's score-blind instruction — printed here as the governing deviation, priced: timing rose 90→96 without it). (2) Attribution: BUNDLED printed in scores.md and here; per-stage own-check receipts stand in the checkpoints, and no cure-level score attribution is claimed. (3) Feasibility: the full layout calculation (stamp bbox + glyph + wrapped caption + borders + gaps) is the Stage-1 measurement above. (4) Preservation: overwrite manifest above; all preserved hashes re-verified at close. (5) Split branch: not triggered (R1–R3 landed without rewriting the phase machine); no deferral of R4/R5 either — all eight cures attempted. (6) Close evidence: scores.md files actual scores, cure status, residual defects, and the next disposition (residual findings carried forward there).

## Deferrals standing (from the plan, unchanged)
D1 newspaper exhibit (absent from the measured assembly sub-window) · D2 note line "HOSPITAL" (premise conflict deferred with its risk priced in the plan; no attempt-2 return priced the omission) · D3 16 px type enlargement (watch carried in fit-table-attempt-2.md) · D4 pixel verification (PIXEL-UNVERIFIED).
A-C011-3 consequence, pre-printed by the plan and now triggered: readability has priced perception against source proxies for two consecutive attempts — attempt 3's plan must change the construction family for the priced surface or obtain pixel/render evidence. (Attempt 2 PASSes; this binds the NEXT plan, it does not reopen this verdict.)
Tier hand-off on PASS: owed to style-library's board with the scores.md pointer — the tier move is style-library's act; this record is the pointer's source.

## Clean re-score note (Cycle 018, Codex Condense REGRADE cure)
The attempt-2 scores in this record came from the contaminated run-1 wave (payload header carried the prior average). A clean, score-blind re-score of the identical final source (SHA-256 936578a6dd7cff92df7a043dca70dd2191673ad640021d011c2a933e88106553) was fired as run-2 (motion via run-3 after a 0-byte run-2 return): motion 94 · timing 98 · purity 100 · reusability 68 · readability 86 — avg 89.2, min 68, delta +8.2 vs 81.0 → FAIL vs the bar (min lens <70). Full filing: scores.md, "Attempt 2 — CLEAN RE-SCORE" section; clean payloads + anchor scan: codex/attempt-2/payload-manifest.md run-2 section.
