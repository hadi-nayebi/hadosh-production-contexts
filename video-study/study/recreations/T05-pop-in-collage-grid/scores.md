# T05 — Pop-in Collage Grid · SCORES

Technique: T05 (packet P1, "Look What I Can Do" @ 0:24–0:35) · Consumer: transitions · diagram containers
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 0:23.5–0:35.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 005, Wave 3)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 76 | codex/lens-motion.md |
| Timing / tempo match | 74 | codex/lens-timing.md |
| Construction purity | 97 | codex/lens-purity.md |
| Reusability / parameterization | 62 | codex/lens-reusability.md |
| Readability | 78 | codex/lens-readability.md |

**Arithmetic:** (76 + 74 + 97 + 62 + 78) / 5 = 387 / 5 = **77.4 average** · minimum lens **62**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 7.6 and reusability (62) breaks the 70 floor. Tier: **IN PROGRESS** (attempt 2 routes to the practice job, lowest-scored first).

### Priced cures (convergent findings first, Amendment A1)

**CONVERGENT — named by 2+ lenses; primary cures for attempt 2:**
1. **Pop scale is broken (motion 76 + reusability 62).** The inline `style.transform = scale(popScaleFrom)` on each panel overrides the `.panel.on { transform: scale(1) }` class rule, so panels never scale up — they fade in at 82% size and stay there. The technique's "small pop reveal" is only half-delivered (opacity yes, scale no). Cure: drive the start scale through a CSS custom property set from CONFIG (or toggle transform in JS at pop time); verify computed transform before/during/after a pop.
2. **CONFIG-completeness claim is false (timing 74 + purity 97 + reusability 62).** CSS transition tracks (.18s/.12s in the `.on` rule), easing, lyric placement/width, typography floors, cursor/check styling, canvas 320×180 and SVG 160×96 design spaces, and several drawing colors live outside CONFIG; `mutedColor` is declared but unused. Cure: move transition/easing/layout/typography constants into CONFIG (or narrow the claim), wire `mutedColor`, and separate runtime state (`_cv`) out of the declarative panel objects.
3. **Temporal alignment to the specimen is off (motion 76 + timing 74).** The recreation starts from an empty field and reaches only 3 panels at the specimen's 0:27 moment (evidence: 5), and all discovery ends at 5.7s leaving a 6.3s arrival-free hold + a loop reset that cuts to an empty field for 200ms. Cure: start with the two evidence-supported panels (waveform + sequencer, present by 0:23), align arrivals to specimen timestamps across the whole window, and design the loop-reset boundary explicitly.

**Single-lens cures:**
4. **Readability at phone size (78):** 7px panel labels truncate to ~10 chars inside 64.5px panels, hiding the identifying filename behind similar "agent-" prefixes; grid-to-lyric clearance is only ~3px at 360px (grid bottom 125.6px vs lyric top ~128.6px). Cure: short distinct display labels with the identifying word first, a dark label strip over artwork, more grid/lyric clearance, and a rendered 360px readability check.
5. **Reuse safeguards (62):** panel count beyond cols×rows overflows silently; unknown panel types render blank; malformed URL values silently coerce (pop → 0, colors unchecked); shortened duration can strand scheduled content. Cure: validated config schema with actionable errors, a renderer registry for panel types, and geometry/timeline validation.
6. **Purity note (97, no rebuild required):** construction is fully procedural (canvas + SVG + DOM text, zero specimen media) — retain the prohibition; the only deduction was the CONFIG-completeness claim under cure 2.

Own checks before the wave (build-record.md §5): swap test PASS (labels + 2 lyric lines + `pop2` 2400→900ms reordering discovery at t=1000 + `accentOrange` #e8a04c→#ff5fa2, all measured in a node DOM-stub harness running the real script) · purity grep 0 hits · `node --check` clean on both scripts · segment ffprobe-verified (h264, 960×540, 12.000 s). Pixel render not exercisable from the build seat (no browser binary) — the comparison page is the render surface; two lenses independently priced that limitation into their findings (label truncation and clearance were computed from source geometry, not rendered).

## Attempt 2 — 2026-11-14 (practice Cycle 004, Wave 3)

Final source: `recreation.html` · sha256 `7a4b25f1a6f0705931b0cebe87f3c690f5e2a1b8025e3491a51bb3e9b6ac182f` (all five lenses fired against this identical sha; payloads preserved create-once at `codex/attempt-2/instr-<lens>.txt`).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 87 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 84 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 68 | codex/attempt-2/lens-reusability.md |
| Readability | 73 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (87 + 84 + 100 + 68 + 73) / 5 = 412 / 5 = **82.4 average** · minimum lens **68**.
**Signed delta vs Attempt 1:** 82.4 − 77.4 = **+5.0** (motion +11 · timing +10 · purity +3 · reusability +6 · readability −5).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 2.6 and reusability (68) breaks the 70 floor. Tier stays **IN PROGRESS**.
**WHY (floor rule): NOT OWED** — 82.4 beats the prior 77.4. The priced gaps below carry the next attempt.
**PIXEL-UNVERIFIED** — carried from the build record into this outcome filing: no browser binary exists in the session (PATH/cache probe negative); all rendered-pixel claims (font metrics, contrast, visible pop, boundary interpolation) rest on modelled checks only. Two lenses priced this limitation independently.

### Private mapping (cure → neutral check name in build-record-attempt2.md)

Pop scale → Check P1 · CONFIG completeness → Checks C1/C2 · Temporal alignment → Checks T1/T2 · Labels + clearance → Check R1 · Validation + registry → Checks V1/V2/V3.

### Per-cure diagnostics (ledger in build-record-attempt2.md; integrated regression on the frozen source: 38/38 harness assertions PASS)

- **Pop scale:** mechanism verified as an effect mapping (off-state = configured 0.82 via custom property, on-state = 1, both transition tracks configured) — motion lens confirms the mechanism is valid (87).
- **CONFIG completeness:** scope statement in the build record is exact; `mutedColor` wired to brand line + check marks and asserted; runtime canvas refs separated from panel objects. Reusability lens (68) found the claim's weak point is validation depth, not coverage — see gaps.
- **Temporal alignment:** arrival table filed in the build record (segment start 0:23.5; waveform + sequencer = initial state, not arrivals; arrivals 1200/2300/3400 → 5 panels at recreation 3500 ms = source 0:27; spiral 5600). The unevidenced 6.3 s hold is removed; the remaining completed-grid hold carries lyric completion (≈8160 ms). Timing lens (84) prices the 2200 ms planet→spiral gap as a cadence exception and the reset boundary as the weak point.
- **Labels + clearance:** short labels (identifying word first), dark strip, clearance modelled 11.2 px ≥ 10 px minimum. Readability lens (73) caught a modelling error in my own check: the label-fit model omitted the panel's two 1 px borders, overstating available width by 2 px (49.6 claimed vs ≈47.6 actual against 49.5 px of modelled text) — the longest labels intrude into the check reservation. Priced as gap R-1 below; my Check R1 evidence is corrected by this finding, not by the harness.
- **Validation + registry:** 9 named-warning cases asserted (panel overflow capped, unknown type → fallback renderer, malformed URL pop/type/color, short duration + stranding, label/lyric width). Reusability lens found three real defects my cases missed — priced as gaps U-1/U-2/U-3 below.

### E1 stop-rule findings (constraints in Attempt-1 returns that scores.md Attempt 1 did not price; all folded into the priced cure families — none changed cure scope, so the build proceeded; filed here per CA-4)

1. Reusability return: brand styling outside CONFIG — folded into the CONFIG cure (brand text/position/size/minimum/color now configured).
2. Reusability return: validation of invalid dimensions / excessive gaps / lyric-grid overlap / long lyric lines unpriced — folded into the validation cure as modelled LABEL_TOO_WIDE / LYRIC_TOO_WIDE / BAD_GEOMETRY rules.
3. Reusability return: configuration-only swaps into BOTH a transition and a diagram composition as verification — folded into own checks as Check V3 (URL swap + 2×3 composition).
4. Readability return: constrain/wrap configurable lyric text — folded in as the modelled LYRIC_TOO_WIDE rule (warning form; corrective handling still owed — gap U-4).
5. Purity return: per-type scene geometry constants — resolved by the narrowed configuration-scope claim in the build record (design spaces + all drawing colors configured; shape coordinates are authored code), the narrowing the cure plan expressly allows.

### Preservation (vs the run's preservation-baseline.txt)

- `recreation-attempt-1.html` created create-once BEFORE any mutation; sha256 `33ab757868d01adf417eca36609c219b1d2190cbec83d3629eea416876fab490` = baseline ✓.
- `comparison-preserved-attempt-1.html` snapshot create-once before mutation (CA-3); sha256 `0dc698068ebed434fd45fb3fa8f69f8cd59a00ab83166679b9f5908ee1e6a54a` = baseline ✓ (recorded here; the seat's V3 census re-verifies).
- Attempt-1 immutables (build-record.md, segment.mp4, codex/lens-*.md, codex/instr-*.txt) untouched — hashes re-verified against baseline at filing.
- comparison.html: NOT re-pointed — the configuration interface was extended (new keys, type override) without breaking the existing surface; the comparison page's swap parameters remain lawful and its ORIGINAL side is unchanged (E5).

### Priced gaps for Attempt 3 (from the Attempt-2 returns)

- **U-1 (reusability 68 — fallback integrity):** `DEFAULTS` is cloned from the editable CONFIG object itself, so an invalid value authored directly in CONFIG "falls back" to itself. Cure: independent factory defaults captured separately from the shipped configuration; color validation must also reject out-of-range rgba channels.
- **U-2 (reusability 68 — registry safety):** registry lookup uses inherited-property semantics — a type named `constructor` passes the check and crashes instead of falling back. Cure: own-property lookup or a prototype-free registry, asserted with the `constructor` case.
- **U-3 (reusability 68 — numeric validation breadth):** fractional/infinite grid dimensions, NaN duration, and unvalidated pop/reset/lyric/typography/seed/design-space values pass. Cure: finite + range validation across all numeric keys, containment asserted for resolved geometry.
- **U-4 (reusability 68 + readability 73 — warnings without correction):** LABEL_TOO_WIDE / LYRIC_TOO_WIDE / DURATION_STRANDS_CONTENT warn but leave the offending values active; lyric completion is never checked against loop duration. Cure: corrective handling (shrink-to-fit policy, schedule rejection, or layout adjustment) with the corrected result asserted — a warning alone is not a safeguard.
- **U-5 (reusability 68 — scope residue):** font families, lyric weight, prompt/cursor spacing, and the responsive scale floor (0.55 clamp) remain hardcoded; SVG design-space changes do not scale authored artwork coordinates; the `initial` flag is declared but never consumed (initial visibility is purely a popAtMs consequence). Cure: configure or explicitly bound each; make `initial` operational (an initial panel renders arrived regardless of arrival-time edits, or the flag is removed and the semantics documented).
- **R-1 (readability 73 — label-fit model):** the fit model must subtract panel borders (2× border width) and the check reservation from available width; lyric width model must include prompt + margin + cursor footprint. Re-assert under the longest supported labels after correction; rendered phone-size evidence remains owed (PIXEL-UNVERIFIED stands).
- **M/T-1 (motion 87 + timing 84 — loop boundary):** the reset fade drives every panel toward zero, reading as a near-empty field, and the 120 ms opacity transition smooths the continuously-updated fade variable, so sampled fade values do not prove displayed opacity; initial panels may also animate on load because transitions are never suppressed for the initial state; lyric lines vanish abruptly at wrap. Cure: preserve the initial pair through the reset (fade only later arrivals), suppress transitions for initial-state and reset application, and verify displayed boundary behavior in a browser when a route exists.
- **T-2 (timing 84 — cadence exception):** the planet→spiral gap is 2200 ms against the ~1–1.2 s evidenced cadence (sparse frames cannot settle the exact moment; the exception is recorded, not hidden). The 2000 ms minimum-duration literal sits outside CONFIG — move it in.

## Attempt 3 — 2026-11-16 (practice Cycle 014, Wave 13)

Final source: `recreation.html` · sha256 `7d4a5da7d12ec75d1d20ff06836cbc47a12efee30cbe0cbf72ea2b8e1d507cac` (all five lenses fired against this identical sha; payloads + returns preserved create-once at `codex/attempt-3/`; manifest at `payload-manifest-attempt3.md`, anchor scan 0 hits).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 91 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 84 | codex/attempt-3/lens-timing.md |
| Construction purity | 100 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 78 | codex/attempt-3/lens-reusability.md |
| Readability | 85 | codex/attempt-3/lens-readability.md |

**Arithmetic:** (91 + 84 + 100 + 78 + 85) / 5 = 438 / 5 = **87.6 average** · minimum lens **78**.
**Signed delta vs Attempt 2:** 87.6 − 82.4 = **+5.2** (motion +4 · timing ±0 · purity ±0 · reusability +10 · readability +12).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 2.6 and every lens clears the floor (minimum 78). Tier: **RECREATED** candidate — hand-off filed to the style-library board with this scores.md pointer; the tier move is style-library's act.
**WHY (floor rule): NOT OWED** — 87.6 beats the prior 82.4. `jev-plateau` does not fire.
**PIXEL-UNVERIFIED** — carried from the build record: no browser binary exists in the session; three lenses priced the missing rendered evidence independently (boundary interpolation, longest-lyric margin, artwork recognition).

### Build summary (full record: build-record-attempt3.md)

Staged build under the checkpoint gate (4 stages, checkpoints + stage own-checks filed create-once in this directory; attribution BUNDLED). All eight priced cures landed: independent factory defaults + range-checked rgba (U-1) · prototype-free registry with own-property lookups (U-2) · finite/range validation across all numeric keys with the minimum-duration key itself validated first under a printed normalization order (U-3) · corrective handling — shrink-to-fit with fit-wins truncation, atomic rejection of stranding/completion-breaking overrides, incompletable lines rejected from rendering (U-4) · scope residue into CONFIG (font families, lyric weight, prompt/cursor spacings, scale floor) + SVG artwork scaling with the design space + `initial` operational on effective arrival 0 (U-5) · border-aware label-fit model + lyric footprint model, one model for validation and layout (R-1) · per-panel reset form — initial pair holds fade 1, lyrics fade with the window, transitions suppressed at load and at the wrap frame (M/T-1) · 2200 ms cadence exception filed with its evidence bound + `minDurationMs` in CONFIG (T-2). Own checks: 86/86 PASS (`own-check-attempt3.txt`). A-C008 legs on the new attempt, pre-scoring: `fit-table-attempt3.md` (4 advisory hits, 0 container-fit) · `config-census-attempt3.md` (0 hits, 93/93 keys consumed). Preservation census at close: attempt-1 + attempt-2 copies and all comparison copies sha-match the baseline; comparison.html not re-pointed (override interface unchanged).

### Priced residuals (for the record; none blocks the pass)

- **Reusability (78):** cross-field combination classes remain — individually valid geometry can still compose to negative panel widths; lyric placement lacks containment/clearance validation; the check reservation assumes a single glyph regardless of check-text length; arbitrary font-family strings are accepted while the fit model is monospace-only (envelope printed in the build record, not enforced); fallback consistency after cross-field edits (factory duration vs a raised configured minimum; minimum vs reference after pair edits); pop arrivals inside the reset window and simultaneous arrivals pass without warnings; an arbitrarily long digit-only URL seed can parse to Infinity. The return's BODY-WRITE asks for a final cross-field validation pass.
- **Motion (91) + Timing (84):** the continuously updated fade target still rides the 120 ms CSS opacity transition, so displayed opacity can lag the clock at the boundary; the timing return also notes transition suppression covers panels, not the lyric opacity transition at wrap. Both returns ask for clock-driven reset opacity / suppression on the lyric path + browser verification. Timing holds at 84: the 2200 ms final interval (filed exception) and the long completed-grid hold are priced as before.
- **Readability (85):** the longest lyric line fits with 1.94 px modelled spare — fragile to real font metrics; rendered phone-size evidence remains the owed proof (PIXEL-UNVERIFIED).
- **Deferred inventory (plan D-2, unchanged):** post-5600 ms specimen densification and lyric line start times remain outside the priced inventory.
