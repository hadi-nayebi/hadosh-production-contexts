OpenAI Codex v0.169.0
--------
workdir: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
model: gpt-6.2-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1ef28-a9a3-7d80-8746-27a6e1bf1bea
--------
user
TASK: You are the jev-observe-exit judge for the recreation job, Wave 34. Judge ONLY item T204 from the record below, per the call definition that follows. Return ONE verdict for T204 (ADVANCE, ADVANCE-WITH-GAPS, or RETURN-TO-OBSERVE) with the six dimension scores (0-1), the primary classification if returned, and named gaps if any. End with a BODY-WRITE: line naming what your return files.

# Jev call — jev-observe-exit (recreation)

_Per-call definition from jev-call-template.md. Built 2026-11-14 (phase-guard augmentation). The judgment: a recreation wave may not enter Plan on a catalogue summary alone — Observe must have priced the queue, read the prior scores where they exist, seen the evidence frames, and carried the standing construction guidance into working memory._

## 1. What it judges
- Deliverable: the wave's Observe working memory — RUN.md gate-out block (§1: mechanics summary + sub-beat timings + variable list + named consumer) for each item in the wave (up to 5 owed items).
- Call point: recreation INSTRUCTION §1, at the gate out of Observe, before §2 Plan opens for any item in the wave. The verdict is advisory per item: applied, a RETURN-TO-OBSERVE item is held out of the wave's Plan (the wave proceeds with its advancing items; a held item never holds the wave hostage — same rule as jev-prewave §5); set aside, the miss is recorded in Condense. An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this Observe record can support a Plan for THIS recreation wave, item by item. Price, in order:
(1) QUEUE STATE PRICED — does the record state the recreation queue's current position (../QUEUE.md read this cycle), each item's queue number and OWED status, and the ownership split (Amendment A3 §3: this job owns FIRST attempts; an already-scored technique belongs to practice — a wave item that is a re-attempt is a routing defect, named)? T15 is the standing example: attempt 1 scored FAIL 78.5 on 2026-11-13, so T15 attempt 2 is practice's charge, never this job's wave item.
(2) PRIOR SCORES READ — for any item whose technique already has a scores.md or a verdict-history line (a techniques' family sibling counts: e.g. T16 shares T15's particle machinery), does the record cite the actual filed scores and cure list, or does it plan from the catalogue description alone? Planning that ignores a filed failure is the defect this leg exists to catch.
(3) MECHANICS SEEN, NOT SUMMARIZED — does the record carry the packet section's mechanics + sub-beat timings from firsthand viewing of the evidence frames and the source segment in motion (§1.1–1.2), with timings in seconds — or only a restatement of the TECHNIQUES.md one-liner? A mechanic the builder has not seen is a guess (§1.1).
(4) VARIABLES EXTRACTED — is the §1.3 variable list complete for this technique (text content, phrase count, timing/durations, palette, scale, direction, density — plus technique-specific variables), so Plan's parameter table has something to bind? A variable missing here becomes a hardcoded accident in Execute (§1.3).
(5) CONSTRUCTION GUIDANCE CARRIED — where the technique's family has standing guidance, is it IN the working memory, named? For particle-field techniques: the flow-field model (Amendment A5 §4: one constant flow field, borrowing with low-amplitude jitter, never-borrowed reserve fraction, release with velocity continuity) AND Owner Cure 1 (foreground/background intensity separation riding the borrow flag) AND Owner Cure 2 (strict phrase sequencing / phase exclusivity). For typography techniques: the typography construction precedent (Amendment A1 §2: runtime sampling of config-rendered text). Guidance that exists in INSTRUCTION but is absent from the wave's working memory is scored as absent.
(6) CONSUMER NAMED — §1.4: which production surface lifts this machinery (container type + owning lane), named per item, not "production generally."
(7) CODEX/OWNER INPUTS — were any Codex calls fired in this Observe (e.g. a record audit of a prior attempt's codex/ returns) with receipts filed, or is the absence printed? Does the wave need owner-only information (it almost never does — recreation prices from packets and filed scores); if claimed, is it routed as a named gap rather than silently assumed?
Score 0–1 per dimension (§4), classify defects from the taxonomy, return one verdict per item.

## 3. Context contract (masked view)
- FED: RUN.md Observe gate-out blocks · ../QUEUE.md recreation-queue section (current) · each item's packet digest.md technique section + TECHNIQUES.md entry · prior scores.md + verdict-history.md lines for the item and its named family siblings · INSTRUCTION Amendments A1/A3/A5 guidance lines relevant to the item's family · any Observe-phase Codex receipts filed this cycle.
- NEVER FED: the builder's confidence prose · HQ's supervision faces · scores from attempts not yet filed (unfiled scores do not exist).
- Ceiling: ≤32k tokens; packet sections enter as the technique's section only, never the whole digest; evidence frames are referenced by path/timestamp, never fed as images (text-only judge).

## 4. Output space
- Verdict classes (per item): **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE**.
- Dimensions (0–1): queue-state-priced · prior-scores-read · mechanics-seen · variables-extracted · guidance-carried · consumer-named. (1.0 = evidenced in the record with citations; 0.5 = asserted without citation; 0.0 = absent.)
- Rejection taxonomy (one primary per returned item): QUEUE-STALE (queue position/status not read this cycle) · REATTEMPT-MISROUTED (scored technique in a first-attempt wave) · SCORES-UNREAD (prior scores/cures exist, uncited) · MECHANICS-UNSEEN (no firsthand sub-beat record) · VARIABLES-THIN (variable list cannot bind a parameter table) · GUIDANCE-DROPPED (standing family guidance absent from working memory) · CONSUMER-VAGUE.
- Accepted profiles travel: cited in RUN.md at the Plan gate; ADVANCE-WITH-GAPS items carry their gap list into §2 as named Plan charges.

## 5. Floors and disposition
- Any dimension < 0.5 → RETURN-TO-OBSERVE for that item. GUIDANCE-DROPPED on a particle-field or typography item → RETURN-TO-OBSERVE at any other score (T15 attempt 1's founding lesson: the frozen-flow defect and both owner catches were guidance-shaped failures discovered only after the wave was spent).
- ADVANCE-WITH-GAPS requires every gap named with its Plan-phase cure; an unnamed gap is a RETURN.
- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + primary classification + disposition land in RUN.md either way.

## Call command
- Defined prompt + context assembly per §3, executed through the fleet's sealed decision-model route named in guards.md when bound. Binding the exact runner command here is the first firing's own first step. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**

## 6. Firing record and improvement
- Exemplars: (a) T15 Cycle-002's Observe record reconstructed from its RUN.md (must ADVANCE — mechanics, timings and consumer were recorded before building). (b) A constructed record proposing T15 as a wave item for attempt 2 (must RETURN-TO-OBSERVE as REATTEMPT-MISROUTED). (c) A constructed particle-technique record with no flow-field / Owner Cure 1 / Owner Cure 2 lines (must RETURN as GUIDANCE-DROPPED). (d) A constructed record whose variable list names only "text and color" for a timed multi-phrase technique (must RETURN as VARIABLES-THIN).
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all four must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it. First expected amendment pressure: whether family-sibling scores (leg 2) should be mandatory for all items or only same-machinery families — priced from the first waves' returns.
# Item T204 — Phase A record (Observe + Plan ONLY) · Wave 34 · Cycle 037 · 2026-11-18

**Item:** T204 — dot-grid identity system + withheld title · queue #95 · Packet #12 (Vox, "The Electoral College, explained", YouTube ajavsMbCapY, 488.301 s) · packet-local T03.
**Phase:** A only — no build script written, no artifact directory created (A9.2 gate order: the wave's exit gates fire on this record before Execute).
**Artifact directory (at Plan, for Execute):** `hidden_files/study/recreations/T204-dot-grid-identity-withheld-title/`
**Governing:** recreation INSTRUCTION.md §1/§2 + Amendments A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13 · RUN.md §§0b/1/2 (Wave 34).

---

## §1 — OBSERVE

### 1.1 Catalogue mechanics (cited)

- **Digest §T03** (`hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md`, lines 37–41): timestamps 0:28–0:37; "A field of black dots on a newsprint-textured ground assembles; the words 'Electoral College' land across it as red/blue split lettering. The same dot field is the substrate for the title, the threshold map (T07), and the outro. The title is withheld until 0:28 — after the misconception (T01) and the normal-system diagram (T02) are installed." Evidence: `ev/t32-title-dotgrid.jpg` · clip `clips/t03-grid-build.mp4` (28–36 s, "the assembly order is the claim").
- **Style-library entry** (`techniques-openings.md`, "### T204 — Dot-grid identity system + withheld title (P12 T03) ◆ — OWED #95"): repeats the digest mechanics and window; feeds opening · diagram · ending.
- **Register** (`TECHNIQUES.md` line 143): "the dot field assembles and the title lands across it — the assembly order is the claim (clip-cited)" · DESCRIBED — OWED #95.
- **Narration anchors** (`sentences.json`): 28.270 s "But in America we do it a little differently." · 31.369 s "The US is the only country that picks its president using something called the Electoral College." · 37.047 s "It's made up of delegates from each US state."

### 1.2 Motion census (A10.3) — firsthand, this run

29 frames extracted by the seat into this run's `census/` dir (17 from `clips/t03-grid-build.mp4` at 0.5 s spacing + 6 fine frames at the two transitions + 6 from `source.webm` bounding the window), **every frame viewed firsthand by the seat**. Clip↔source mapping: clip t = source t − 28.0 (production-record: clip = source 28–36 s; clip ffprobe: h264 1920×1080, 7.965 s). Cell counts measured by projection analysis of the viewed frames (threshold <200–210, per-row blob runs).

| # | Frame | Source t | SHA-256 (full) | State viewed |
|---|---|---|---|---|
| 1 | T204-census-src27.0s.jpg | 27.0 | fe6ce1ab5017877064b76e3f5e060b4fd0ba92fe8e527835ff5e394893936177 | Pre-state: T203 popular-vote scene full (ballot disc + split bar + winner figure). No grid. |
| 2 | T204-census-c0.0s.jpg | 28.0 | 0a531d1739db591e07e859641ea5748a58bc18c69c6595812779417718382c2b | T203 scene exiting left (disc half off-frame); balloons over figure. No grid. |
| 3 | T204-census-c0.5s.jpg | 28.5 | d2b26a17cc4f8b779c64f114fd502bea9c741e139ca475444396fbe5caa43bc9 | Exit continues; balloons dropping. No grid. |
| 4 | T204-census-c1.0s.jpg | 29.0 | ecef2a6c69e96106557653b0e93ea4d039c1a22b1b4fac7021960a7eb75d9686 | CNBC broadcast insert (KEY STATES board, presenter). Borrowed footage — not the technique. |
| 5 | T204-census-c1.5s.jpg | 29.5 | ae39bafdac61719e6f6bc61f16a02ae79fe799553f27a0a9332af5a7afcc019e | Broadcast insert holds. |
| 6 | T204-census-c2.0s.jpg | 30.0 | 6b236b7ec851e7de9e14866eb4b08c8416a7fd58075393c055d98f747d28923b | Broadcast insert holds (presenter pointing). |
| 7 | T204-census-c2.5s.jpg | 30.5 | 2e8222f0b7bd2c7c5df319380287d2e20754c264e7061c9a94a6230510424a93 | Broadcast insert holds. |
| 8 | T204-census-c3.0s.jpg | 31.0 | 3b46679e530b2c8bb92fc457a264b7707d56b2a67d38fe87226ad6b09cf6e4a1 | Broadcast insert, last census state before the cut. **Zero grid cells — zero-state anchor.** |
| 9 | T204-census-c3.2s.jpg | 31.2 | 6e9ca6277fdfdd931d583f3eedf8d5a8e791cd5af873fc4b0e3e161db4241796 | Still broadcast insert. Zero cells. |
| 10 | T204-census-c3.3s.jpg | 31.3 | 62466bed0a5867cb1d0f03b4c0f8d2eb22f55132e5b9d8a625d87df7464c83c7 | **ASSEMBLY ONSET:** cut to newsprint ground; 2 cols × 2 rows of square cells at the field's top-left origin, fading in (1 black, rest gray shades). |
| 11 | T204-census-c3.4s.jpg | 31.4 | 18613993e5b925acbd7202e4e2fceb971cf540830e1d69cca67cd60acffe3449 | 4 cols × 3 rows; fade front at right column (mid-gray) + bottom row (light gray). |
| 12 | T204-census-c3.5s.jpg | 31.5 | 412c6ca3e657c9b42723a6d15c5f7364f730e7e74b3f5ae6a21c729d4878cb64 | 5 cols × 3 rows = **15 cells** (measured); front still at right + bottom edges. |
| 13 | T204-census-c4.0s.jpg | 32.0 | 1f3d2a2a054848efc4d74e2d7281d52b3b8ca074e5e53ad37d3627f96a8d5ee7 | 17 cols × 8 rows = **136 cells** (measured); rightmost column gray. (Matches ev/t32's state — that still is this instant, an assembly still, not a title still.) |
| 14 | T204-census-c4.5s.jpg | 32.5 | 33a0c27db76037d7a63b8ff9aeaafc638a731317ce8527d1d7d3298751db499e | ≈25 cols × 12 rows; right column + bottom row gray (front chasing both leading edges). |
| 15 | T204-census-c5.0s.jpg | 33.0 | a75e48818083a56cd18abaa80c8791577ce87dfb7e5dd5da06235fb7d8007e61 | ≈31 cols × 15 rows; right column light-gray, bottom row mid-gray. |
| 16 | T204-census-c5.5s.jpg | 33.5 | 865d6d03bf74092a1b246a6174f3aca6da150e899722d7a707308d2145306c17 | **32 cols × 16 rows = 512 cells** (measured exactly); only the last column still gray. |
| 17 | T204-census-c6.0s.jpg | 34.0 | bd62426ba08c0f54962fcfc229c9717020497711faa9241095cb31918b3bc7f1 | Main field black + final partial row (row 17) mid-fade: 26 cells, offset right by ~3 columns. **Total 538 cells** (measured 539 with one fade-front split artifact — count stands 538 ±1, see §1.4 G3 disposition). No title band yet. |
| 18 | T204-census-c6.5s.jpg | 34.5 | 4d14a6f6ae7e450a21453a7dfaf2cdf20847cd245ba5448df7785762ed5d1d6d | **TITLE BAND LANDED** across the field's middle rows; white serif text revealed up to "Electoral" only; band's right portion still empty red. |
| 19 | T204-census-c6.6s.jpg | 34.6 | fbf886785aaed420e852f0943e6fe511566fd6591fb6f8582cb2b52bccbd9e58 | Reveal progressed: "Electoral Col". |
| 20 | T204-census-c6.7s.jpg | 34.7 | b363180a1bb6a4e4fdb5827b7c3c265ce65af92f622f55111bf0befb0b7b8886 | Reveal progressed: "Electoral Colleg". |
| 21 | T204-census-c6.8s.jpg | 34.8 | 7502ab84bf6dcb73fe24d992faba5dfa48f1d7ba99587a569d56ce34bedfddf9 | **Full title "Electoral College" revealed.** |
| 22 | T204-census-c6.9s.jpg | 34.9 | 70e7b33c56cd99565638bd2bdc8794f2356dc468047d32a736bcf20516a80f2f | Lockup hold (identical state). |
| 23 | T204-census-c7.0s.jpg | 35.0 | b25f0dea24874a46b8f8faf0bc52ef87c128f1adf73cbb98d0fa019a6c6d5b40 | Lockup hold. |
| 24 | T204-census-c7.5s.jpg | 35.5 | eea774cff1988daba2382e8d902908efa01d86f3c3e6efa975bd198ac0d986a2 | Lockup hold. |
| 25 | T204-census-c7.9s.jpg | 35.9 | 4e5f21640f3c60fb85bc5b0b3bb81319e36a6c1afae12364994d9b0cd1cf41c7 | Lockup hold (clip end). |
| 26 | T204-census-src36.0s.jpg | 36.0 | be85076fa06821fa0b369c87cb3046b72d64d2059bb2ee88ff4958e13f6c6ff3 | Lockup hold continues past the clip's end. |
| 27 | T204-census-src36.2s.jpg | 36.2 | be85076fa06821fa0b369c87cb3046b72d64d2059bb2ee88ff4958e13f6c6ff3 | Byte-identical frame to 36.0 — the hold is fully static ≥0.2 s here. |
| 28 | T204-census-src36.5s.jpg | 36.5 | de03f7faa169e2c8d8d1f498af0336964cfe8ce41dbb3fe65356f61ff50ce4c0 | Title still up; dark state-outline strokes BEGIN drawing over the field — the next technique's onset (T210 handoff). **T204 window closes.** |
| 29 | T204-census-src37.5s.jpg | 37.5 | 7ebb81280758a20634e40758cd60f252ac1d1ab47a92263e02f9a0b5879517d6 | Title gone; state outlines complete over the field (T210's state — outside this item). |

**Motion findings (A10.3 form):**
- **What forms when:** (i) 31.30 ±0.05 s — the square-cell field begins at a fixed top-left origin on the bare newsprint ground, growing as an expanding rectangle (rightward + downward fronts) whose newest cells fade gray→black, the fade front riding the leading right column and bottom row; (ii) 34.0 s — the field completes at 538 cells (32×16 + a 26-cell partial last row offset ~3 cols right — one cell per electoral vote); (iii) ~34.3 s — the title band lands across the field's middle (rows 8–9 zone) as flat color blocks (teal head block · red main block · steel-blue bottom strip · pale bottom-right block · dark top strip), fully occluding the cells behind it; (iv) 34.3–34.8 s — the white serif title reveals left-to-right inside the band at letter pace ("Electoral" by 34.5 · "Col" 34.6 · "Colleg" 34.7 · full 34.8).
- **Holds how long:** completed field alone ≈0.3 s (34.0→34.3); full lockup static from 34.8 to ≥36.2 (≥1.4 s, hash-identical frames at 36.0/36.2), ending when the outline handoff begins ~36.3–36.5.
- **Dissolves how:** it does not dissolve inside its window — the title exits by being replaced under the next technique (state outlines draw over the field from ~36.3; title gone by 37.5). The exit belongs to T210's transition, not to T204.
- **Sub-beats:** the assembly is one continuous growth, not per-row steps (counts 4 → 15 → 136 → ~300 → ~465 → 512 → 538 across 31.3→34.0 — decelerating fronts, fast first second); the last row is a separate late beat (births 33.5–34.0, after the 16-row body completes); the band precedes its text (band full-width while text still revealing); the sponsor watermark ("Presented by ABSOLUT", top-right, visible in source frames) is specimen branding, NOT part of the technique — excluded.
- **Corrections to the catalogue prose (priced from the census, not the digest):** (1) the "dots" are **square cells**; (2) the lettering is **white**, not "red/blue split" — the red/blue split lives in the **band blocks behind** the white serif text; (3) the digest window 0:28–0:37 conflates setup with technique: 28.0–31.2 inside it is the prior scene's exit + a CNBC broadcast insert (borrowed footage, not recreatable, not this technique); the technique proper is **31.3–36.5**; (4) the digest's "threshold map (T07)" cross-reference is wrong — packet T07 is the TX/VT House-stage count; the threshold grid-map is packet T09 = library T210 (see codex-observe finding 4).

### 1.3 Variables (§1.3 — every property that could change without changing the technique)

Content: title text (and its word split) · cell total / cols / rows / last-row cells / last-row offset. Geometry: field position + extent (fractions of stage) · cell size-to-pitch ratio · origin corner. Timing: withhold/pre-roll duration · assembly duration · per-cell fade duration · growth-front shape (keyframe table) · last-row lag · band-in duration · text-reveal duration · hold duration. Palette: cell ink · ground color · ground-texture intensity · band block colors + their span fractions · title color. Type: title font family · title size relative to band. Direction: growth direction (origin corner + front axes) · reveal direction. Density: pitch (cells per stage width) at fixed extent.

### 1.4 Prior / family scores read (§1 resource 3)

No prior attempt for T204 (no artifact directory, no verdict-history line — confirmed by census + codex-observe's audit). Closest scored siblings, read firsthand from their `scores.md`:

| Sibling | Why closest | Lens line (motion · timing · purity · reusability · readability) | Avg | What it prices for T204 |
|---|---|---|---|---|
| T53 ballot-arc count board | grid/count board, same packet family of count surfaces | 92 · 88 · 94 · **74** · 80 | 85.6 PASS | Reusability is the family floor: value-dispatched scheduling + renderer literals outside CONFIG were its convergent defect — T204's schedule must dispatch on CONFIG keyframes/IDs, never on content values. |
| T82 countable multitude | cell-grid multitude assembling in place | 80 · 89 · 100 · 80 · 87 | 87.2 PASS | Its convergent defect was the reveal SHAPE (row-major order vs the measured oval front) — T204's growth fronts must follow the measured keyframes, not an assumed order; canvas geometry literals were its reusability leak. |
| T99 logo-mark assembly opening | opening/identity assembly (the other consumer surface) | 80 · 100 · 100 · 80 · 90 | 90.0 PASS | Assembly openings score high on timing/purity when the lifecycle is CONFIG-driven; its cures were CONFIG completeness + fitted wordmark — T204's band + title fit must be CONFIG + measured. |

Family average (A2 basis): (85.6 + 87.2 + 90.0) / 3 = **87.6**. Every sibling's minimum is reusability (74/80/80) or motion (80/80).

### 1.5 Consumer (§1 gate)

**Primary: the opening-identity surface** (explainer cold-open / DLC opener title landing). Reason: the technique's payload is a *title* whose landing is withheld until its substrate assembles — the act is an identity reveal, and RUN.md §1 names T204 "additionally the opening/identity surface" beyond the wave's diagram default. **Secondary: diagram containers** (the DLC assembler's count-board surfaces) — the identical field component is the tally substrate the sibling items consume (T210's outlines draw on this field; T205/T208 reuse the grid module). The build therefore ships two liftable modules: the field (diagram) and the band+reveal (opening-identity).

### 1.6 Standing-guidance dispositions — WITH REASONING INLINE (A9.5)

- **A1.2 runtime text sampling — NOT-BINDING.** That precedent licenses letterforms *sampled from config-rendered text* (particle typography, T15 family). T204's title is typeset serif text sitting on an opaque band; no letterform is sampled, formed, or particle-built, and the census shows the glyphs arriving by a left-to-right reveal of finished type. Sampling would add a construction the specimen does not contain.
- **A5 flow-field model — NOT-BINDING as construction.** There is no particle field: the census shows discrete square cells that fade in place on a fixed lattice — nothing flows, borrows, or releases. **Owner Cure 1 (intensity separation) — BINDS in analogue:** the specimen's own separation is occlusion — the band is fully opaque and the cells behind it never compete with the title; the Plan carries band opacity 1.0 and cells under the band not rendered. **Owner Cure 2 (strict phase exclusivity) — BINDS:** the census shows the title reveal beginning only after the field completes (band onset ~34.3 > last cell 34.0); the Plan enforces it by phase machine + a pre-band zero-title assertion (CP6), not by hopeful timing arithmetic.
- **A9.1 plate construction — STILL PLATE priced.** The newsprint ground never moves in any census frame (identical texture position across 31.3–37.5); a moving plate would exceed the technique. The ground is therefore a still, procedurally generated texture (code-generated, never the specimen's newsprint image — purity §6.1); no pan, no tiling requirement arises.
- **Reserved-band badge note (HQ board `practice-2026-11-18-t06-construction-note`) — BINDS.** T204's title is exactly a container-scaled label: the Plan gives it a reserved band (fixed CONFIG geometry across the field's middle; the cells behind it are occluded by design, not competing) with legibility floors — title cap-height measured at the 360 px stage against the ~11 px floor in the A6 measured-fit leg, and band geometry in CONFIG so the band scales with the container without re-layout.
- **A9.6 parameterization depth — BINDS.** Band block spans, growth keyframes, and ground coefficients are subject-shaping values → all CONFIG data (§2.1).
- **A11 census checkpoints — BINDS** (§2.4 assertion table). **A13 receipt index — BINDS** at the build-record stage (Verify checklist).

### 1.7 codex-observe — fired at §1 step 1 · return filed · dispositions

Return: `item-T204-codex-observe-return.md` (this run dir) — **Verdict: CONFIRMED-WITH-GAPS**, 4 findings. Dispositions (applied into this record before Plan):
- **F1 (core assembly agrees across digest/library/register) — CONFIRMED, no act.**
- **F2 (published window conflates setup with animation) — APPLIED:** §1.2's census boundaries govern; the Plan's segment (§2.3) is cut 30.8–37.0 so the comparison carries the setup tail + handoff onset as labeled context while the build window is the measured technique (31.3–36.5).
- **F3 (ev/t32 miscaptioned; "red/blue split lettering" wrong; count provisional) — APPLIED:** §1.2 cites ev/t32 as the 32.0 s assembly state only; the title evidence is census frame c6.8s; mechanics corrected to white serif on a color-block band (§1.2 corrections 1–2). Count: no settled un-occluded full-field frame exists after 34.0 (the title band occludes rows 8–9 from 34.3), so the count stands **538 ±1 as measured** (512 exact at 33.5 + 26 in the final row at 34.0, one fade-front split artifact); the Plan's exact assertions bind the *measured checkpoints* (15 · 136 · 512) and treat 538 as the A9.3 source-count the build must reproduce by construction (cols×rows + lastRowCells), not as a census-proven constant.
- **F4 (digest's T07 cross-reference wrong; threshold map = packet T09 = T210) — APPLIED:** §1.2 correction 4; T204's window closes at the outline onset (~36.5) and the handoff is named as T210's, distinct from T210's later 2:19 sequence.

**Observe gate-out:** mechanics + sub-beats (§1.2) · variables (§1.3) · consumer (§1.5) · dispositions (§1.6–1.7) — complete.

---

## §2 — PLAN

### 2.1 Parameter table (every §1.3 variable a named CONFIG key; specimen value = default)

Stage: logical 960×540 (fleet stage; renders at 360 px phone width by scale).

| CONFIG key | Specimen default | Source / note |
|---|---|---|
| `titleText` | `"Electoral College"` | census frames 21–28 |
| `cols` / `rows` | 32 / 16 | measured exact at 33.5 s (512 cells) |
| `lastRowCells` / `lastRowOffsetCols` | 26 / 3 | measured at 34.0 s; total cells = cols×rows + lastRowCells = **538** (A9.3 source-count) |
| `fieldLeftFrac` / `fieldTopFrac` / `fieldWidthFrac` / `fieldHeightFrac` | 0.090 / 0.114 / 0.821 / 0.719 | measured field extent (x 173–1750, y 123–900 of 1920×1080) |
| `cellFillFrac` | 0.56 | measured: 28 px cell on 50 px pitch |
| `cellColor` | `#111111` | cells read near-black in every census frame (JPEG sampling limit noted) |
| `groundColor` | `#ececec` | sampled (960,980) on c7.9 |
| `groundTextureOpacity` | 0.05 | faint newsprint show-through; procedural texture, seeded |
| `assembleStartMs` | 500 | segment-relative (see §2.3) |
| `assembleMs` | 2700 | onset 31.3 → complete 34.0, segment-relative span |
| `growthKeyframes` | `[{f:0.000,cols:2,rows:2},{f:0.074,cols:5,rows:3},{f:0.259,cols:17,rows:8},{f:0.444,cols:25,rows:12},{f:0.630,cols:31,rows:15},{f:0.815,cols:32,rows:16},{f:1.000,cols:32,rows:16,lastRow:1}]` | the measured census states as data (f = fraction of assembleMs); fronts interpolate linearly between keyframes — the schedule dispatches on this table, never on content values (T53 cure) |
| `cellFadeMs` | 350 | gray→black per cell after its birth (front width ≈1 column/row in census) |
| `bandBlocks` | `[{c:"#157180",x:0.000,y:0.00,w:0.118,h:1.00},{c:"#ba3844",x:0.118,y:0.00,w:0.882,h:1.00},{c:"#396b84",x:0.000,y:0.78,w:0.470,h:0.22},{c:"#b1cdce",x:0.745,y:0.78,w:0.105,h:0.22},{c:"#43031b",x:0.155,y:0.00,w:0.475,h:0.07}]` | colors sampled on c7.9 (teal head · red main · steel bottom strip · pale bottom-right block · dark top strip); spans are fractions of band width/height — subject-shaping → CONFIG (A9.6) |
| `bandLeftFrac` / `bandTopFrac` / `bandWidthFrac` / `bandHeightFrac` | 0.220 / 0.426 / 0.565 / 0.130 | measured on c7.9 (band x 420–1505, y 460–605 of 1920×1080); reserved band per §1.6 |
| `bandInMs` | 200 | band reaches full width before text reveal completes (census frame 18: band full, text partial) |
| `bandInStartMs` | 3450 | segment-relative (source ≈34.25, between census 3200 no-band and 3700 band-full); strictly after field completion at 3200 (phase exclusivity); governed by CP6 |
| `titleColor` | `#ffffff` | census |
| `titleFontFamily` | `"Georgia, 'Times New Roman', serif"` | white serif, census |
| `titleSizeFrac` | 0.125 | font-size as fraction of stage height (cap height ≈0.088 measured) |
| `revealStartMs` | 3500 | segment-relative (source 34.3); strictly after assembly completes at 3200 (phase exclusivity) |
| `revealMs` | 500 | full text by 4000 segment-relative (source 34.8) |
| `holdEndMs` | 5400 | lockup static to source 36.2; segment tail beyond is handoff context |
| `buildMs` | 6200 | = segment duration (§2.3) |
| `seed` | 204 | deterministic texture/RNG seed (guards cmd 3) |

### 2.2 Construction choice

**Chosen: DOM grid + JS state function.** A JS `stateAt(buildMs)` computes, purely from CONFIG: per-cell birth/fade (from `growthKeyframes`), band geometry, and the revealed title prefix; the renderer paints a CSS-grid of divs (538) + an absolutely-positioned band div (block divs from `bandBlocks` + one clipped text span whose clip width follows the reveal). One state function serves the animation, the comparison sync, and the A11 harness probes identically.
Rejected alternatives, one line each:
- **Canvas 2D** — viable (T82 precedent) but the band's typeset text + measured-fit leg are direct in DOM and indirect on canvas; cell-state probes would duplicate the draw logic.
- **SVG** — 538 rects + text is lawful, but CSS-grid layout + frac geometry is simpler in DOM and the fit leg measures DOM ink natively.
- **CSS-keyframes-only** — per-cell stagger would need 538 generated delays and offers no probeable state function; A11 assertions could not evaluate it.
- **Generated imagery / newsprint asset** — refused: the ground texture is procedural (seeded SVG feTurbulence or CSS gradients generated in code); using the specimen's newsprint is a purity defect (§6.1).

### 2.3 Schedule basis + census-anchor mapping (A7 / A10.2)

**Window-scope line: schedule basis = `segment-anchored`.** Segment cut at §3: **source 30.8–37.0 s (6.2 s)** from `source.webm` into the artifact dir as `segment.mp4` (±0.5 s handles around the measured technique window 31.3–36.5). Window-start offset = **30.8 s**; segment-relative ms = (source t − 30.8) × 1000. The build's phases sit at their measured segment times.

| Governed instant (segment-rel) | Source t | Census state (measured) | Prescribed build state (CONFIG expression) |
|---|---|---|---|
| 0 ms | 30.8 | broadcast insert tail (context only) | empty newsprint ground, 0 cells (departure D1) |
| 450 ms | 31.25 | no cells yet (onset ∈ (31.2, 31.3]) | `visibleCells == 0` — zero-state anchor (guards cmd 8) |
| 500 ms | 31.3 | onset: 2×2 fading | assembly begins (`assembleStartMs`) |
| 700 ms | 31.5 | 15 cells (5×3) | keyframe f=0.074 → 15 ±6 cells, top-left region only |
| 1200 ms | 32.0 | 136 cells (17×8) | keyframe f=0.259 → 136 ±20 cells |
| 2200 ms | 33.0 | ≈465 cells (31×15) | keyframe f=0.630 → 465 ±30 cells |
| 2700 ms | 33.5 | 512 cells (32×16) | keyframe f=0.815 → 512 cells, ≥95% blackened |
| 3200 ms | 34.0 | **538 cells**, no band | f=1.000 → exactly 538 (A9.3); band absent |
| 3450 ms | 34.25 | band not yet / landing | band opacity/width in flight; title prefix == "" |
| 3700 ms | 34.5 | band full; text = "Electoral" | reveal prefix == first word |
| 4000 ms | 34.8 | full title | reveal prefix == `titleText` |
| 5400 ms | 36.2 | lockup static (hash-identical frames) | state identical to 4000 ms state (hold integrity) |
| 5700–6200 ms | 36.5–37.0 | outline strokes begin (T210) | lockup held static (departure D2) |

**Departure table (beside the mapping, per A10.2):**
- **D1 — setup replaced:** census 0–500 ms shows the prior scene's exit + CNBC broadcast insert; the build shows the empty ground. Reason: borrowed broadcast footage is not recreatable content (purity §6.1) and is not the technique; the withholding structure is preserved as ground-only pre-roll, and the comparison's ORIGINAL side carries the real setup.
- **D2 — handoff not built:** census 5700–6200 ms shows state outlines drawing over the field (T210's technique, this wave's queue #98); the build holds the lockup. Reason: §8 size discipline — the item is the identity assembly + title landing; the outline draw is a separate owed item.

### 2.4 A11 census-checkpoint assertions (each: checkpoint · assertion · CONFIG expression · swap behaviour)

| CP | Instant (CONFIG expression) | Assertion on `stateAt(instant)` | Timing-swap behaviour |
|---|---|---|---|
| CP1 | `assembleStartMs − 50` = 450 | visibleCells == 0 (zero-state anchor probe, guards cmd 8) | instant recomputes from CONFIG |
| CP2 | `assembleStartMs + 0.074×assembleMs` = 700 | 9 ≤ visibleCells ≤ 21; all cells within cols≤5, rows≤3 | keyframe fraction fixed; instant moves with assembleMs |
| CP3 | `assembleStartMs + 0.259×assembleMs` = 1200 | 116 ≤ visibleCells ≤ 156 | as CP2 |
| CP4 | `assembleStartMs + 0.815×assembleMs` = 2700 | visibleCells == 512; blackened ≥ 0.95 | as CP2 |
| CP5 | `assembleStartMs + assembleMs` = 3200 | visibleCells == cols×rows + lastRowCells == 538; bandVisible == false | as CP2 |
| CP6 | `revealStartMs − 100` = 3400 | titlePrefix == "" AND band not yet full-width (phase exclusivity, Owner Cure 2) | instant recomputes |
| CP7 | census instant 3700 (expression: `revealStartMs + 0.40×revealMs`) | revealed fraction ∈ [0.40, 0.55]; titlePrefix == "Electoral" (±1 char tolerance) | under the timing swap the receipt shows the recomputed instant for the same CONFIG fraction |
| CP8 | `revealStartMs + revealMs` = 4000 | titlePrefix == titleText; bandBlocks rendered == CONFIG bandBlocks.length | instant recomputes |
| CP9 | `holdEndMs` = 5400 | state hash == state hash at CP8 instant (hold integrity) | instant recomputes |

Every assertion files an A12 executable receipt in the build-record (harness command · CONFIG expression · raw result); the A13 RECEIPT INDEX reconciles guards commands 1–8 + CP1–CP9 before the prewave payload is assembled.

### 2.5 Swap design (§5.1 — exact altered values)

- **Words:** `titleText`: `"Electoral College"` → `"HADOSH ACADEMY"` (different content; shorter — the band fit is re-measured, not assumed).
- **One timing:** `assembleMs`: 2700 → **2100** (all keyframe/CP instants must move proportionally; CP receipts show the moved instants).
- **One palette:** `bandBlocks[1].c` (main block): `#ba3844` → **`#1d4e89`**.
Untouched and named: cellColor, ground, band geometry, reveal/hold timings.

### 2.6 Purity checks (§5.2 / §6.1)

Grep `recreation.html` for `segment.mp4|source.webm|t03-grid-build|ajavsMbCapY|<video|<img` → 0 hits required (in-file `url(#id)` fragments classified per guards cmd 1 precision note). Asset inventory: recreation loads **zero** external assets — ground texture is code-generated; no specimen media, no traced frame, no newsprint image. No captions/subtitles anywhere (§6.5) — the title text IS the technique's subject.

### 2.7 Execute checklist (itemized instrument)

1. Cut segment: source 30.8–37.0 s → `segment.mp4` (re-encoded, browser-playable); ffprobe facts filed (guards cmd 5) against §2.3's window.
2. Create artifact dir `T204-dot-grid-identity-withheld-title/`; write `recreation.html` — CONFIG object first (every §2.1 key), state function + DOM renderer below; no literals of §2.1 classes in the logic (A9.6).
3. Write `comparison.html` — ORIGINAL (segment) + RECREATION side by side, one synchronized control set, labels `ORIGINAL — Vox "The Electoral College, explained" @ 30.8–37.0 s` · `RECREATION — T204 dot-grid identity + withheld title, parameterized`; phone-width stacking with reachable controls.
4. Own-checks with RAW output filed in `build-record.md` from the first draft (A9.4): swap test (§2.5 values) · purity grep (§2.6) · `node --check` + seeded-RNG census (guards cmd 3) · CP1–CP9 harness probes with A12 receipts · A9.3 count print (source 538 vs built 538, halt on mismatch).
5. A6 legs on the final build: `guard-measured-fit` → `fit-table.md` (title + band rows at 360 px stage; legibility floor ~11 px) · `guard-config-census` → `config-census.md` (all-literal scan; keyframe/band/geometry keys resolved to application sites).
6. A13 RECEIPT INDEX in the build-record, reconciled (guards cmds 1–8 + CP1–CP9 + expected CONFIG keys incl. `bandBlocks[]` and `growthKeyframes[]` nested entries) before any payload is assembled.

### 2.8 Verify checklist (itemized instrument)

1. Swap test result recorded with the exact §2.5 values + moved CP instants (receipts).
2. Purity grep output + asset inventory (zero external assets) filed.
3. Comparison check: both sides play from the shared control; durations matched (6.2 s); labels correct; phone stacking holds.
4. **jev-prewave call point:** after legs 1–3 + A6 outputs, payload carries build-record + CONFIG + packet §T03 + guards list + **both A6 leg outputs verbatim** (A10.1) + the §2.3 census-anchor mapping; FIRE-WAVE spends the wave, HOLD returns to Execute (A12.3 two-HOLD stop applies).
5. **Five-lens Codex scoring wave** (motion · timing · purity · reusability · readability) on the identical-hash build; each payload carries the catalogue mechanics + the §2.3 mapping (timing lens) + full recreation source; returns filed verbatim under `codex/`.
6. Consolidation (mechanical, guards cmd 4): average ≥85 AND min ≥70 → PASS; arithmetic shown in `scores.md`; tier hand-off filed to the style-library board.

### 2.9 Failure-point evaluation (priced from this job's record)

- **Convergent freeze (T15 form):** no particle pool exists, so the literal defect cannot occur; its analogue — a growth front stalling mid-field — is excluded by construction (fronts are a pure function of CONFIG keyframes + clock; CP2–CP4 probe three mid-states). Residual risk: LOW.
- **Intensity collapse (Owner Cure 1 class):** the title could fight its substrate if the band were translucent or cells showed through; excluded by construction (band opacity 1.0, occluded cells not rendered). The readability lens still prices the white-on-red/teal contrast at phone size. Residual: LOW–MEDIUM (serif at 360 px).
- **Overlap (Owner Cure 2 class):** title reveal overlapping assembly would break the specimen's strict sequence; excluded by the phase machine (`revealStartMs` > assembly completion) + CP6's pre-reveal empty-prefix probe. Residual: LOW.
- **Fitting limits:** at the 360 px stage the band is ≈203 px wide for 17 characters — title ≈24 px font, above the ~11 px floor; the swap title is shorter (fits by measurement, fit-table row required). A future longer title is the known envelope edge — the fit leg, not hope, prices it. Residual: MEDIUM (this is the item's honest weak surface).
- **Render-proof limitation:** this seat has no browser binary — verification is LOGIC level (node harness over the state function + DOM structure), and `comparison.html` is the render surface (standing limitation, T82/T99 form, printed in scores.md). Residual: standing, disclosed.

### 2.10 Plateau priced in Plan (A2)

Family average **87.6** (T53 85.6 · T82 87.2 · T99 90.0). **Predicted minimum lens: reusability** — it is the minimum or co-minimum in all three siblings (74/80/80), and T204's reusability surface is exactly the class that priced them down: subject-shaping tables (growth keyframes, band block spans) that a builder is tempted to hardcode. The Plan's counter is A9.6 CONFIG completeness + the config-census leg before the wave. **Co-risk: motion** (80 in both T82 and T99) — if the keyframe interpolation reads as mechanical stepping rather than the specimen's smooth decelerating growth, motion lands ~80. **Pass condition, stated exactly (corrected under codex-plan-review R4):** if motion and reusability both land at 80, PASS requires timing + purity + readability ≥ 265 in total (average 88⅓) with each ≥70 — no assurance beyond that arithmetic is claimed. **A2 trigger, corrected:** the A2 WHY is owed by a *re-attempt* that fails to beat T204's *own* prior attempt average; 87.6 is this first attempt's family benchmark, not a trigger.

**Plan gate-out:** parameter table (§2.1) · construction + rejected alternatives (§2.2) · schedule basis + census-anchor mapping + departures (§2.3) · A11 assertions (§2.4) · swap (§2.5) · purity (§2.6) · Execute + Verify checklists (§2.7–2.8) · failure points (§2.9) · plateau (§2.10) — complete.

### 2.11 Plan amendments under codex-plan-review (REVISE — all applied; return: `item-T204-codex-plan-review-return.md`)

- **R1 — Front + fade semantics (supersedes the CP4/CP5 readings in §2.4).** `stateAt` carries continuous fronts: `colFront(t)`/`rowFront(t)` interpolate the §2.1 keyframes (stored as fractions — see R3). Cell (c, r) is **born** at the first instant `colFront ≥ c+1 AND rowFront ≥ r+1`; its opacity is `clamp((t − birth)/cellFadeMs)`; states: unborn · fading (0 < opacity < 0.98) · black (≥ 0.98). The partial row has its own 1-D front over the final keyframe interval (f 0.815→1.000), cells born left-to-right, same fade. **CP4 (2700 ms) revised:** born == 512 AND gray (fading) cells ⊆ the leading column (≤16 cells → black ≥ 0.95 of born) — matching the census (last column gray at 33.5). **CP5 (3200 ms) revised:** born == `cols×rows + lastRowCells` (538 at defaults) AND gray cells ⊆ last column ∪ partial row. **CP5b added (3550 ms):** every non-occluded cell black (≥0.98) — the fade fully settled before the reveal completes. Probe instants derive from the CONFIG entries (assembleStartMs + f×assembleMs), never from literals.
- **R2 — Phase transitions as predicates + one shared mask (supersedes §2.9's "phase machine" wording).** The state function gates on predicates, not constants: (i) `bandStart_effective = max(bandInStartMs, first instant born == total)` — the band cannot enter before the field completes under ANY CONFIG, including an extended assembly; (ii) text at horizontal position x is revealed only where the band's *current* footprint is opaque at x — one state-derived footprint mask governs band paint, title clipping, and cell occlusion together, so no cell hole can open ahead of the growing band. **CP6b added (predicate proof):** a test-only evaluation with `assembleMs` extended +800 ms must show band entry deferred to the extended completion (the shortening swap alone cannot expose this class; the extension probe can) — filed as an own-check with its receipt, and the same predicates hold on seek (stateAt is a pure function of t + CONFIG). Fit-table gains a contrast row: title ink vs band measured at 360 px for BOTH the specimen palette and the §2.5 swap palette.
- **R3 — CONFIG completion (extends §2.1).** New keys: `originCorner: "top-left"` · `growthAxes: "right-down"` · `revealDirection: "left-to-right"` · `groundTextureScale: 1.0` · `groundTextureContrast: 1.0` (procedural texture coefficients, A9.6). **Derived, not configured (stated):** the title word split (first space in `titleText`) and the last-row lag (the final keyframe interval). **One geometry rule:** pitchX = fieldW/`cols`, pitchY = fieldH/`rows`; cell side = min(pitchX, pitchY) × `cellFillFrac`, each cell centered in its pitch box — squares survive count changes. **Keyframes re-based to fractions:** `growthKeyframes` entries carry `{f, colFrac, rowFrac, lastRowFrac}` (defaults: f 0.000→{0.063, 0.125, 0} · 0.074→{0.156, 0.188, 0} · 0.259→{0.531, 0.500, 0} · 0.444→{0.781, 0.750, 0} · 0.630→{0.969, 0.938, 0} · 0.815→{1.000, 1.000, 0} · 1.000→{1.000, 1.000, 1.000}) so fronts scale with effective `cols`/`rows` and never go stale; node count is derived (`cols×rows + lastRowCells`), never a literal. **Title sizing:** `titleSizeFrac` is stage-relative with the fit rule printed — the fit leg measures the built span's ink against the band's inner width and the 11 px floor; a title that fails either is a build defect, not a shrug. **CP7 generalized:** the expected prefix is derived from the *configured* `titleText` and measured glyph boundaries (same stand-in font as the fit leg); "Electoral" stands as the default-CONFIG anchor only. **Geometry probe added to own-checks:** a scratch evaluation at `cols` 32→28 asserting derived node count (28×16+26 = 474) and square cells (side equal on both axes) — catches CSS/renderer literals the three scored swaps leave untouched.
- **R4 — Bar arithmetic + A2 trigger:** applied at §2.10 (pass condition 265 printed; A2 trigger corrected to the re-attempt form).
- **R5 — Size discipline:** CONFIRMED by the review; no act.

**codex-plan-review disposition summary:** REVISE received → R1–R4 applied as §2.11 + §2.10 corrections above; R5 confirmed. No finding set aside. The Plan that Execute follows is §2.1–§2.10 **as amended by §2.11**.

---

## §3 — Phase A close

- **Calls fired:** codex-observe (CONFIRMED-WITH-GAPS, 4 findings, all disposed §1.7) · codex-plan-review (REVISE, 5 findings, all disposed §2.11/§2.10). Returns filed verbatim as sibling files in this run directory.
- **Not fired here (by form):** jev-observe-exit + jev-plan-exit are wave-level gates — the seat fires them on the four Phase A records in RUN.md §2b before any build (A9.2). jev-prewave + the five-lens wave belong to Execute/Verify.
- **Gaps stated plainly:** (1) the completed-field count is 538 ±1 (no settled un-occluded frame exists; §1.7 F3) — the build reproduces 538 by CONFIG construction and the A9.3 print tests it; (2) cell ink + band spans are JPEG-sampled measurements with the sampling limits noted in §2.1; (3) verification at Execute is LOGIC-level (no browser binary in this seat) — the comparison page is the render surface, the standing disclosed limitation.
- **Phase A outcome:** Observe + Plan complete with both Codex dispositions consumed. The item is ready for the wave's §2b exit gates; no build script exists yet, by design.
# RUN — recreation Cycle 037 · Wave 34 · 2026-11-18 (T199 completion under A12.3 + first attempts queue #95–#98: T204 · T205 · T208 · T210, Packet #12)

Opened BEFORE any building (INSTRUCTION §0). Trigger: cron `study-recreation` 2026-11-18 09:20 EST.
Governing: recreation INSTRUCTION.md (§0 wave form incl. completion-wave form Amendment A8 + skeleton-record step · §1–§9 · Amendments A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13 + 2026-11-14 ruling: arming=firing, verdicts advisory), bounded_probe_discipline (probes named in advance, capped in code ≤6,000 chars: QUEUE recreation section in capped slices · TECHNIQUES.md OWED lines · Cycle-036 RUN.md in capped slices · per-item scores.md tails · artifact census · HQ.json tail entries · heartbeat tail; breaches: 0).
Pre-action judgment: (1) objective — carry T199 shout scaling (queue #94, Packet #11) to its scored verdict via its authorized A12.3 completion re-fire (cures filed in its scores.md at Wave 33 close), and carry the next four owed first attempts in queue order — #95 T204 dot-grid identity system + withheld title · #96 T205 vote-to-grid conversion diagram · #97 T208 paired dot counts, House stage · #98 T210 threshold grid-map (all Packet #12, Vox "The Electoral College, explained") — each to a scored verdict; 5 items, the §0 cap. (2) Forward movement — the NO-VERDICT pool drops from 4 toward 3 (T199 scored; T190/T196/T197 stay parked, see §0b.1) and the DESCRIBED-OWED pool drops from 11 toward 7. (3) Cost to owner — none; no ask, no schedule change; the T190/T196/T197 authorization ask stands with HQ (consumer named, §0b.1) and is NOT re-asked here. (4) Why now — scheduled firing; A12.3 makes T199's completion the next cycle's first charge, and queue order is the only triage (A3). (5) Body-write — this RUN.md, per-item records + builds under `hidden_files/study/recreations/`, HQ.json skeleton→closed entry (same id `rec-2026-11-18-wave34`), heartbeat skeleton→closed beat 117, verdict-history lines, QUEUE.md rows #95–#98 (+ #94 status update). (6) Order check — this record's §1 prices T199's on-disk state BEFORE any firing (A8) and the fresh pool census before any build; each new item's Phase A record (Observe+Plan + codex-observe + codex-plan-review) is filed and the wave-level exit gates are fired and consumed in §2b BEFORE its build script is written (A9.2); T199's build is a cure of its already-gated plan (Cycles 034–036 §2b stand consumed), so its Execute opens on the filed cure list. Skeleton board/heartbeat entries are written at Plan close (§0 skeleton rule) — this cycle complies, no D-SKELETON.

## §0b — Replan items carried
1. **T199 completion (Cycle 036 §9/§0b.1, first charge, AUTHORIZED under A12.3):** T199's second HOLD landed in Cycle 036, so its first completion re-fire in THIS cycle is authorized by A12.3 as written. Cure list = the four items in its scores.md (census-twin CONFIG-derived receipts · hail-prescription reconciliation printed in the payload mapping section · overlap intersections from positioned bounds · CP11 joined receipt), rebuilt under Amendment A13 (receipt index + reconciliation against guards.md commands 1–8 + the item's whole inherited assertion set + expected CONFIG keys; every line carries its executable receipt or a NOT-DEMANDED line with a governing citation).
2. **T190/T196/T197 — PENDING AUTHORIZATION (consumer: HQ), NOT taken this wave:** each spent its A12.3 completion re-fire in Cycle 036 and that re-fire HOLDed; A12.3 does not expressly renew a re-fire after a completion HOLD (Cycle 036 codex-condense firing 3). No HQ authorization entry stands on this job's board after `rec-2026-11-18-wave33` (board re-read this run: 49 entries, last = wave33). Their slots therefore fill from queue #95 onward, exactly as Cycle 036 §0b.1 prescribed. They remain mid-attempt HERE (A3 §3) and do NOT route to practice.
3. **Practice census-guard proposal** (carried Cycles 034–036): consumer = the next Condense with ≥3 scored items. Price at §9 if ≥3 verdicts land this wave.
4. **Feed standard (Cycle 035 §9.1, followed since):** payload size+tail-verified → one-stream `cat payload | codex exec` (local binary `~/workspace/codex-local/node_modules/.bin/codex`, per TOOLS.md working route; instructions + artifact in ONE stream, never pipe + stdin field together) with redirect → return size+tail-verified → on empty/truncated, ONE re-fire via stdout capture + file-tool filing; a second failure files honestly and stops.
5. **Practice construction note** (HQ board `practice-2026-11-18-t06-construction-note`, sent): reserved-band badge treatment for container-scaled labels — consumer is recreation's next first attempt whose labels scale with a container. Priced for this wave at §2 per item; Packet #12's grid/diagram items carry tally labels — the item whose labels scale with its container prices it in its Phase A record, the others print NOT-BINDING with reason.
6. Standing forms (A10/A11/A12/A13): every new item's schedule table prints its census-anchor mapping (A10.2); §1 files a frame census at ≤2 s spacing with full SHA-256 per item (A10.3); jev-prewave payloads carry both A6 leg outputs verbatim (A10.1); every build-record carries the A13 RECEIPT INDEX reconciled before payload assembly; fit evidence is (i) harness post-fit ink measurement or (ii) rendered measurement with a named stand-in font, never a character-width model (A12.2).

## §1 — Observe (completion form for T199 per A8; first-attempt form for T204/T205/T208/T210 — per-item detail in each item's Phase A record in this run directory)

**Wave manifest: 5 items** — 1 completion (queue #94 T199, Packet #11) + 4 new first attempts (queue #95–#98, all Packet #12: Vox "The Electoral College, explained", YouTube ajavsMbCapY, 488.301 s; digest at `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/`; adopted WITH GAPS by video-digestion Cycle-019; registered by style-library Cycle-019).
Consumer (T199): word-animation containers. Consumer (Packet #12 items): diagram containers (the DLC assembler's diagram/count-board surfaces) — T204 additionally the opening/identity surface. In every build the technique's text/marks ARE the subject, not captions (INSTRUCTION §3.2/§6.5).

### Pool census (fresh this run, 2026-11-18 09:20 EST)
1. QUEUE.md RECREATION QUEUE: rows #1–#94 filed. #94 T199 IN PROGRESS NO VERDICT (completion authorized, this wave). Rows #95+ do not yet exist as rows — entered by recreation at this wave's close from the style-library register (standing precedent).
2. Catalogue register (style-library TECHNIQUES.md, read this run; Cycle-020 state): 239 techniques · DESCRIBED-OWED 12 at Cycle-036 read (queue #94 T199 · #95 T204 · #96 T205 · #97 T208 · #98 T210 · #99 T212 · #100 T218 · #101 T219 · #102 T227 · #103 T232 · #104 T233 · #105 T238); style-library Cycle-020 (closed after Wave 33) registered Packet #13 and prints catalogue 239 (DESCRIBED 146 · IN PROGRESS 15 · RECREATED 78 on its accounting, which includes practice re-attempt moves). This wave takes #94 (completion) + #95–#98; #99–#105 (7 items) stand for later waves.
3. Artifact census (binding): 94 directories under `hidden_files/study/recreations/` (directory listing this run) — 90 with verdicts + 4 NO VERDICT (T190 · T196 · T197 · T199). The four new items' directories do not yet exist; created at their Plans.
4. Ownership split (A3 §3): all five items are first attempts / a mid-attempt completion → this job. All other IN PROGRESS techniques are practice's re-attempt pool. T190/T196/T197 stay parked PENDING AUTHORIZATION (§0b.2) — printed, not silently skipped.

### Per-item state (A8 pricing for the completion item; catalogue lines for the new items)
- **T199 — shout scaling inside a real scene** (`T199-shout-scaling-in-real-scene/`): build on disk recreation.html sha256 `edad0b81…` (14,730 B at Wave 33), UNCHANGED across both Wave-33 prewave firings (its cure round touched records only). Filed: segment.mp4 (9.000 s, source 66.5–75.5 s) · comparison.html · build-record.md · fit-table.md · config-census.md · plan-amendment-cycle036.md · jev-prewave ×2 HOLD (both bind this build). NOT present: lens returns · verdict. Completion charge (scores.md cure list, verbatim pricing in §0b.1): restructure the harness so every census twin is a CONFIG expression with CONFIG-derived receipts incl. a timing swap that moves a twin · print the hail-prescription reconciliation in the payload mapping section (amendment governs over the census-anchor table wording) · overlap rows as intersections from positioned peak + neighbour ink bounds · CP11 as ONE joined receipt (CONFIG expression + band sample together). Then: fresh own-checks + A6 legs on the (record-cured; build changes only if a cure requires it — any build change re-binds all payloads to the new hash) + A13 receipt index reconciled + ONE jev-prewave re-fire (authorized, A12.3) → five-lens wave on FIRE-WAVE only.
- **T204 — dot-grid identity system + withheld title** (P12; TECHNIQUES.md: "the dot field assembles and the title lands across it — the assembly order is the claim (clip-cited)"; container: openings + diagrams): no directory, no prior calls. Mechanics/timestamps/evidence frames priced in its Phase A record from the Packet #12 digest section + firsthand frame census (A10.3) before Plan.
- **T205 — vote-to-grid conversion diagram** (P12; "a grid fills in blocks, left to right, as conversion"; container: diagrams): same Phase A charge.
- **T208 — paired dot counts, House stage** (P12; "dots land in grids timed to the spoken count (clip-cited)"; container: diagrams): same Phase A charge.
- **T210 — threshold grid-map (the road to 270)** (P12; "state outlines draw themselves over the tally grid and regions accumulate toward the 270 post (clip-cited)"; container: diagrams): same Phase A charge.

### Standing guidance dispositions (restated for this cycle, per A8)
A13 receipt index + reconciliation binds every item (see §0b.6). A1.2 runtime text sampling binds typography constructions that sample config-rendered text; the Packet #12 items are grid/diagram constructions — each Phase A record prices its applicability with reasoning in its Observe gate-out (A9.5). A5 flow-field + Owner Cures bind particle fields only; no item this wave is a particle field unless its Phase A census shows one (priced per item there). A9.1: any moving background plate is priced in the item's parameter table (seamless tiled pan where a plate IS the technique; a still plate where motion exceeds the technique). A9.6: every subject-shaping value is CONFIG data in all five items. A11: every census checkpoint maps to an executable assertion with a CONFIG-derived instant + an A12 receipt.

## §2 — Plan (summary; per-item authority = each item's Phase A record in this run directory)
- **T199 (completion):** parameter table, construction, verification plan and checklists stand as filed in Cycles 034–036 (item record + `plan-amendment-cycle036.md`) AS AMENDED by the scores.md cure list — consumed, not re-authored (A8). Execute checklist = the four cures (§0b.1) + fresh own-checks (swap · purity · syntax, raw output filed) + A6 legs re-filed + A13 receipt index reconciled + ONE jev-prewave re-fire (payload carries build-record + CONFIG + packet section + guards list + both A6 outputs verbatim + the binding census-anchor mapping, A10.1) + five-lens wave on FIRE-WAVE only (identical-hash binding; timing payload carries the census-anchor mapping). Bar (standing §2.3): five-lens average ≥85 AND no lens <70. Schedule basis stands: segment-anchored (segment = source 66.5–75.5 s; buildMs = segmentTimeMs − 500).
- **T204/T205/T208/T210 (new):** each item's Phase A record is its Plan authority: parameter table (every §1 variable a named CONFIG key, specimen values as defaults) · construction choice with rejected alternatives · schedule basis + census-anchor mapping (A7/A10.2 — segment-anchored, t=0 allocation, or two-act, named on the window-scope line) · swap design (different content + one timing + one palette value, exact values) · purity checks · Execute + Verify checklists as instruments · failure-point evaluation (priced from this job's record: convergent freeze · intensity collapse · phrase/state overlap · fitting limits · render-proof limitation) · plateau priced in Plan (A2: family/prior average + stuck-lens hypothesis stated before Execute). Per-item codex-observe + codex-plan-review fire in Phase A; the wave-level jev-observe-exit + jev-plan-exit fire on the four Phase A records before any build script is written (§2b).
- **Wave gate form for this cycle:** jev-observe-exit + jev-plan-exit fire for the four new items; for T199 they print NOT-DEMANDED-BY-FORM — its Observe/Plan gates fired and were consumed in Cycles 034–036, and A8 consumes filed gate returns, never re-fires them; T199's demanded gate is the A12.3 prewave re-fire. codex-observe + codex-plan-review fire per item for the four new items in Phase A; for T199, NOT-DEMANDED-BY-FORM (consumed Cycles 034/036, returns on file). codex-condense fires at this cycle's Condense, unconditionally.

## §2b — Wave gate dispositions
_(Filled after the four Phase A records land and both gates fire; Execute for new items opens only on this section standing consumed. T199 proceeds in parallel on Cycle 036's consumed §2b.)_

## §3 — Execute
_(Per item, on landing.)_

## §5 — Verify
_(Seat-verified at close.)_

## §9 — Condense
_(At close.)_

## §7 — Faithfulness trace
_(At close.)_

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 99110 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Skipped project instructions in environment `local` starting at `/home/hatch/workspace/AGENTS.md` because the 32768-byte budget was exhausted. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
I’ll check the run files and score T204 against the six Observe exit dimensions.
exec
/bin/bash -lc 'rg --files | head -80; ls -a' in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 0ms:
jev-observe-exit-T204-return.raw
payload-plan-exit-T210.txt
hdr-plan-T210.txt
payload-observe-exit-T210.txt
hdr-obs-T210.txt
payload-plan-exit-T208.txt
hdr-plan-T208.txt
payload-observe-exit-T208.txt
hdr-obs-T208.txt
payload-plan-exit-T205.txt
hdr-plan-T205.txt
payload-observe-exit-T205.txt
hdr-obs-T205.txt
payload-plan-exit-T204.txt
hdr-plan-T204.txt
hdr-obs-T204.txt
payload-observe-exit-T204.txt
item-T204-codex-plan-review-return.md
item-T205-codex-plan-review-return.md
item-T210-codex-plan-review-return.md
item-T204-observe-plan.md
item-T205-codex-plan-review-return.raw
item-T205-codex-observe-return.md
item-T204-codex-observe-return.md
item-T208-codex-plan-review-return.md
item-T210-codex-observe-return.md
item-T208-codex-observe-return.md
item-T205-codex-observe-return.raw
item-T208-observe-plan.md
item-T210-observe-plan.md
item-T205-observe-plan.md
AGENTS.md
RUN.md
census/T205-census-43.8s.jpg
census/T205-census-43.6s.jpg
census/T205-census-43.4s.jpg
census/T205-census-43.2s.jpg
census/T208-102.5s.jpg
census/T208-94.5s.jpg
census/T208-94.0s.jpg
census/T204-census-src36.2s.jpg
census/T204-census-src36.0s.jpg
census/T204-census-c6.9s.jpg
census/T204-census-c6.8s.jpg
census/T204-census-c6.7s.jpg
census/T204-census-c6.6s.jpg
census/T204-census-c3.4s.jpg
census/T204-census-c3.3s.jpg
census/T204-census-c3.2s.jpg
census/T204-census-src37.5s.jpg
census/T204-census-src36.5s.jpg
census/T204-census-src27.0s.jpg
census/T204-census-c7.9s.jpg
census/T204-census-c7.5s.jpg
census/T204-census-c7.0s.jpg
census/T204-census-c6.5s.jpg
census/T204-census-c6.0s.jpg
census/T204-census-c5.5s.jpg
census/T204-census-c5.0s.jpg
census/T204-census-c4.5s.jpg
census/T204-census-c4.0s.jpg
census/T204-census-c3.5s.jpg
census/T204-census-c3.0s.jpg
census/T204-census-c2.5s.jpg
census/T204-census-c2.0s.jpg
census/T204-census-c1.5s.jpg
census/T204-census-c1.0s.jpg
census/T204-census-c0.5s.jpg
census/T204-census-c0.0s.jpg
census/T208-110.0s.jpg
census/T208-108.0s.jpg
census/T208-106.0s.jpg
census/T208-104.0s.jpg
census/T208-102.0s.jpg
census/T208-100.5s.jpg
census/T208-99.5s.jpg
census/T208-98.0s.jpg
census/T208-96.5s.jpg
census/T208-95.0s.jpg
census/T208-93.5s.jpg
.
..
.agents
.aws
.codex
.git
AGENTS.md
RUN.md
census
hdr-obs-T204.txt
hdr-obs-T205.txt
hdr-obs-T208.txt
hdr-obs-T210.txt
hdr-plan-T204.txt
hdr-plan-T205.txt
hdr-plan-T208.txt
hdr-plan-T210.txt
item-T204-codex-observe-return.md
item-T204-codex-plan-review-return.md
item-T204-observe-plan.md
item-T205-codex-observe-return.md
item-T205-codex-observe-return.raw
item-T205-codex-plan-review-return.md
item-T205-codex-plan-review-return.raw
item-T205-observe-plan.md
item-T208-codex-observe-return.md
item-T208-codex-plan-review-return.md
item-T208-observe-plan.md
item-T210-codex-observe-return.md
item-T210-codex-plan-review-return.md
item-T210-observe-plan.md
jev-observe-exit-T204-return.raw
payload-observe-exit-T204.txt
payload-observe-exit-T205.txt
payload-observe-exit-T208.txt
payload-observe-exit-T210.txt
payload-plan-exit-T204.txt
payload-plan-exit-T205.txt
payload-plan-exit-T208.txt
payload-plan-exit-T210.txt

exec
/bin/bash -lc "cat hdr-obs-T204.txt item-T204-codex-observe-return.md; sed -n '1,105p' item-T204-observe-plan.md; sed -n '1,65p' RUN.md; ls ../../QUEUE.md ../../INSTRUCTION.md" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 exited 2 in 25ms:
TASK: You are the jev-observe-exit judge for the recreation job, Wave 34. Judge ONLY item T204 from the record below, per the call definition that follows. Return ONE verdict for T204 (ADVANCE, ADVANCE-WITH-GAPS, or RETURN-TO-OBSERVE) with the six dimension scores (0-1), the primary classification if returned, and named gaps if any. End with a BODY-WRITE: line naming what your return files.

# item-T204-codex-observe-return — verbatim return, codex-observe firing, Wave 34 Phase A (2026-11-18)

Firing: payload = `guards/codex-observe.md` + fed elements (digest §1 + §T03 · techniques-openings.md T204 entry · TECHNIQUES.md register line · verdict-history lines · family scores lines · seat segment facts), 12,370 B, one stream: `cat payload | ~/workspace/codex-local/node_modules/.bin/codex exec -` → raw session output 106,391 B (the local binary also read the workspace itself; the final answer below is reproduced verbatim, filed once — the raw session repeated it twice).

---

**Consumer** — Recreation Cycle 037, Wave 34, §1 Observe for T204. The source record is sufficient to start Observe. The timing, evidence captions, and map references need firsthand reconciliation before the comparison cut.

**Working record** — Packet #12, the T204 library entry, the recreation verdict history and sibling score returns, and Cycle 037 Wave 34 `RUN.md` §1 and its T204 frame census.

### Packet and segment findings

1. **The core assembly agrees across the records.** Packet #12 `digest.md` §T03, `techniques-openings.md` lines 212–215, and `TECHNIQUES.md` line 143 all describe the grid assembling before the title lands. The detailed library entry repeats the packet’s 0:28–0:37 window and both evidence filenames. The register row confirms the sequence and cites the clip generically.

2. **The published window conflates the setup with the animation.** The archived `source.webm` probes at 488.301 s and `clips/t03-grid-build.mp4` at 7.965 s. That clip duration fits the packet’s approximate 28–36 s export, while the wave census places the grid onset near 31.3 s, after the prior diagram exits and the CNBC insert plays. The census places grid completion near 34.0 s, the left-to-right title reveal at 34.3–34.9 s, and the first state outlines near 36.3–36.5 s. The title is gone by the 37.5 s sample. `sentences.json` anchors the setup at 28.270 s and the start of the sentence that names the Electoral College at 31.369 s. Observe should establish the source-frame boundaries for the setup, assembly, reveal, hold, and handoff, then record the exact in/out points for the comparison. The existing clip covers the build and reveal. The handoff requires later source frames.

3. **The title still is miscaptioned, and the color description needs correction.** The filed `ev/t32-title-dotgrid.jpg` shows a partially assembled grid of square marks on newsprint, with no title. The wave’s `census/T204-census-c6.8s.jpg` shows white serif lettering over a red-and-blue band. Both `digest.md` §T03 and the T204 library entry place the colors on the lettering. Observe should cite the 32 s still for assembly, select a source frame for the revealed title, and use the moving clip to establish the grid’s growth order and the band’s reveal. The seat’s completed-grid count is provisional at 538 cells (`32 × 16 + 26`), with a reported ±1 at the fade front. Observe should confirm the count on a settled frame.

4. **The threshold-map cross-reference is wrong in the digest.** `digest.md` §T03 points to packet T07, which is the Texas–Vermont House-stage dot count at 1:24–1:51. The threshold grid-map is packet T09 at 2:19–2:27, corresponding to library T210 (`TECHNIQUES.md`, line 146). The outro reference is consistent as packet T22 / library T223. Observe should confirm which grid properties carry into the early state-outline handoff, the later threshold map, and the outro. The early outlines around 36.3–36.5 s are distinct from the later threshold-map sequence.

### Prior-attempt audit

T204 has no matching `verdict-history.md` entry or prior artifact directory. Wave 34 `RUN.md` §1 also records it as a first attempt. Each sibling’s final Codex lens returns match its `scores.md` table and recreation `verdict-history.md` row. The recomputed averages and minima clear the filed PASS thresholds in all three cases.

| Sibling | Verdict-history line | Lenses | Recomputed average | Minimum | Disposition |
|---|---:|---:|---:|---:|---|
| T53 | 41 | 5 | (92 + 88 + 94 + 74 + 80) / 5 = **85.6** | 74 | PASS → RECREATED |
| T82 | 53 | 5 | (80 + 89 + 100 + 80 + 87) / 5 = **87.2** | 80 | PASS → RECREATED |
| T99 | 60 | 5 | (80 + 100 + 100 + 80 + 90) / 5 = **90.0** | 80 | PASS → RECREATED |

All 15 cited sibling lens scores have filed returns. No unbound score claims surfaced.

**Limits** — I probed both media files and inspected the packet still and the 6.8 s census frame. The fine-grained transition timings and provisional cell count come from the seat’s census. I did not independently match the clip’s endpoint frames to the archive, reproduce the full census, or verify its hashes.

**Verdict: CONFIRMED-WITH-GAPS**  
**Body-write: none (read-only run)**
# Item T204 — Phase A record (Observe + Plan ONLY) · Wave 34 · Cycle 037 · 2026-11-18

**Item:** T204 — dot-grid identity system + withheld title · queue #95 · Packet #12 (Vox, "The Electoral College, explained", YouTube ajavsMbCapY, 488.301 s) · packet-local T03.
**Phase:** A only — no build script written, no artifact directory created (A9.2 gate order: the wave's exit gates fire on this record before Execute).
**Artifact directory (at Plan, for Execute):** `hidden_files/study/recreations/T204-dot-grid-identity-withheld-title/`
**Governing:** recreation INSTRUCTION.md §1/§2 + Amendments A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13 · RUN.md §§0b/1/2 (Wave 34).

---

## §1 — OBSERVE

### 1.1 Catalogue mechanics (cited)

- **Digest §T03** (`hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md`, lines 37–41): timestamps 0:28–0:37; "A field of black dots on a newsprint-textured ground assembles; the words 'Electoral College' land across it as red/blue split lettering. The same dot field is the substrate for the title, the threshold map (T07), and the outro. The title is withheld until 0:28 — after the misconception (T01) and the normal-system diagram (T02) are installed." Evidence: `ev/t32-title-dotgrid.jpg` · clip `clips/t03-grid-build.mp4` (28–36 s, "the assembly order is the claim").
- **Style-library entry** (`techniques-openings.md`, "### T204 — Dot-grid identity system + withheld title (P12 T03) ◆ — OWED #95"): repeats the digest mechanics and window; feeds opening · diagram · ending.
- **Register** (`TECHNIQUES.md` line 143): "the dot field assembles and the title lands across it — the assembly order is the claim (clip-cited)" · DESCRIBED — OWED #95.
- **Narration anchors** (`sentences.json`): 28.270 s "But in America we do it a little differently." · 31.369 s "The US is the only country that picks its president using something called the Electoral College." · 37.047 s "It's made up of delegates from each US state."

### 1.2 Motion census (A10.3) — firsthand, this run

29 frames extracted by the seat into this run's `census/` dir (17 from `clips/t03-grid-build.mp4` at 0.5 s spacing + 6 fine frames at the two transitions + 6 from `source.webm` bounding the window), **every frame viewed firsthand by the seat**. Clip↔source mapping: clip t = source t − 28.0 (production-record: clip = source 28–36 s; clip ffprobe: h264 1920×1080, 7.965 s). Cell counts measured by projection analysis of the viewed frames (threshold <200–210, per-row blob runs).

| # | Frame | Source t | SHA-256 (full) | State viewed |
|---|---|---|---|---|
| 1 | T204-census-src27.0s.jpg | 27.0 | fe6ce1ab5017877064b76e3f5e060b4fd0ba92fe8e527835ff5e394893936177 | Pre-state: T203 popular-vote scene full (ballot disc + split bar + winner figure). No grid. |
| 2 | T204-census-c0.0s.jpg | 28.0 | 0a531d1739db591e07e859641ea5748a58bc18c69c6595812779417718382c2b | T203 scene exiting left (disc half off-frame); balloons over figure. No grid. |
| 3 | T204-census-c0.5s.jpg | 28.5 | d2b26a17cc4f8b779c64f114fd502bea9c741e139ca475444396fbe5caa43bc9 | Exit continues; balloons dropping. No grid. |
| 4 | T204-census-c1.0s.jpg | 29.0 | ecef2a6c69e96106557653b0e93ea4d039c1a22b1b4fac7021960a7eb75d9686 | CNBC broadcast insert (KEY STATES board, presenter). Borrowed footage — not the technique. |
| 5 | T204-census-c1.5s.jpg | 29.5 | ae39bafdac61719e6f6bc61f16a02ae79fe799553f27a0a9332af5a7afcc019e | Broadcast insert holds. |
| 6 | T204-census-c2.0s.jpg | 30.0 | 6b236b7ec851e7de9e14866eb4b08c8416a7fd58075393c055d98f747d28923b | Broadcast insert holds (presenter pointing). |
| 7 | T204-census-c2.5s.jpg | 30.5 | 2e8222f0b7bd2c7c5df319380287d2e20754c264e7061c9a94a6230510424a93 | Broadcast insert holds. |
| 8 | T204-census-c3.0s.jpg | 31.0 | 3b46679e530b2c8bb92fc457a264b7707d56b2a67d38fe87226ad6b09cf6e4a1 | Broadcast insert, last census state before the cut. **Zero grid cells — zero-state anchor.** |
| 9 | T204-census-c3.2s.jpg | 31.2 | 6e9ca6277fdfdd931d583f3eedf8d5a8e791cd5af873fc4b0e3e161db4241796 | Still broadcast insert. Zero cells. |
| 10 | T204-census-c3.3s.jpg | 31.3 | 62466bed0a5867cb1d0f03b4c0f8d2eb22f55132e5b9d8a625d87df7464c83c7 | **ASSEMBLY ONSET:** cut to newsprint ground; 2 cols × 2 rows of square cells at the field's top-left origin, fading in (1 black, rest gray shades). |
| 11 | T204-census-c3.4s.jpg | 31.4 | 18613993e5b925acbd7202e4e2fceb971cf540830e1d69cca67cd60acffe3449 | 4 cols × 3 rows; fade front at right column (mid-gray) + bottom row (light gray). |
| 12 | T204-census-c3.5s.jpg | 31.5 | 412c6ca3e657c9b42723a6d15c5f7364f730e7e74b3f5ae6a21c729d4878cb64 | 5 cols × 3 rows = **15 cells** (measured); front still at right + bottom edges. |
| 13 | T204-census-c4.0s.jpg | 32.0 | 1f3d2a2a054848efc4d74e2d7281d52b3b8ca074e5e53ad37d3627f96a8d5ee7 | 17 cols × 8 rows = **136 cells** (measured); rightmost column gray. (Matches ev/t32's state — that still is this instant, an assembly still, not a title still.) |
| 14 | T204-census-c4.5s.jpg | 32.5 | 33a0c27db76037d7a63b8ff9aeaafc638a731317ce8527d1d7d3298751db499e | ≈25 cols × 12 rows; right column + bottom row gray (front chasing both leading edges). |
| 15 | T204-census-c5.0s.jpg | 33.0 | a75e48818083a56cd18abaa80c8791577ce87dfb7e5dd5da06235fb7d8007e61 | ≈31 cols × 15 rows; right column light-gray, bottom row mid-gray. |
| 16 | T204-census-c5.5s.jpg | 33.5 | 865d6d03bf74092a1b246a6174f3aca6da150e899722d7a707308d2145306c17 | **32 cols × 16 rows = 512 cells** (measured exactly); only the last column still gray. |
| 17 | T204-census-c6.0s.jpg | 34.0 | bd62426ba08c0f54962fcfc229c9717020497711faa9241095cb31918b3bc7f1 | Main field black + final partial row (row 17) mid-fade: 26 cells, offset right by ~3 columns. **Total 538 cells** (measured 539 with one fade-front split artifact — count stands 538 ±1, see §1.4 G3 disposition). No title band yet. |
| 18 | T204-census-c6.5s.jpg | 34.5 | 4d14a6f6ae7e450a21453a7dfaf2cdf20847cd245ba5448df7785762ed5d1d6d | **TITLE BAND LANDED** across the field's middle rows; white serif text revealed up to "Electoral" only; band's right portion still empty red. |
| 19 | T204-census-c6.6s.jpg | 34.6 | fbf886785aaed420e852f0943e6fe511566fd6591fb6f8582cb2b52bccbd9e58 | Reveal progressed: "Electoral Col". |
| 20 | T204-census-c6.7s.jpg | 34.7 | b363180a1bb6a4e4fdb5827b7c3c265ce65af92f622f55111bf0befb0b7b8886 | Reveal progressed: "Electoral Colleg". |
| 21 | T204-census-c6.8s.jpg | 34.8 | 7502ab84bf6dcb73fe24d992faba5dfa48f1d7ba99587a569d56ce34bedfddf9 | **Full title "Electoral College" revealed.** |
| 22 | T204-census-c6.9s.jpg | 34.9 | 70e7b33c56cd99565638bd2bdc8794f2356dc468047d32a736bcf20516a80f2f | Lockup hold (identical state). |
| 23 | T204-census-c7.0s.jpg | 35.0 | b25f0dea24874a46b8f8faf0bc52ef87c128f1adf73cbb98d0fa019a6c6d5b40 | Lockup hold. |
| 24 | T204-census-c7.5s.jpg | 35.5 | eea774cff1988daba2382e8d902908efa01d86f3c3e6efa975bd198ac0d986a2 | Lockup hold. |
| 25 | T204-census-c7.9s.jpg | 35.9 | 4e5f21640f3c60fb85bc5b0b3bb81319e36a6c1afae12364994d9b0cd1cf41c7 | Lockup hold (clip end). |
| 26 | T204-census-src36.0s.jpg | 36.0 | be85076fa06821fa0b369c87cb3046b72d64d2059bb2ee88ff4958e13f6c6ff3 | Lockup hold continues past the clip's end. |
| 27 | T204-census-src36.2s.jpg | 36.2 | be85076fa06821fa0b369c87cb3046b72d64d2059bb2ee88ff4958e13f6c6ff3 | Byte-identical frame to 36.0 — the hold is fully static ≥0.2 s here. |
| 28 | T204-census-src36.5s.jpg | 36.5 | de03f7faa169e2c8d8d1f498af0336964cfe8ce41dbb3fe65356f61ff50ce4c0 | Title still up; dark state-outline strokes BEGIN drawing over the field — the next technique's onset (T210 handoff). **T204 window closes.** |
| 29 | T204-census-src37.5s.jpg | 37.5 | 7ebb81280758a20634e40758cd60f252ac1d1ab47a92263e02f9a0b5879517d6 | Title gone; state outlines complete over the field (T210's state — outside this item). |

**Motion findings (A10.3 form):**
- **What forms when:** (i) 31.30 ±0.05 s — the square-cell field begins at a fixed top-left origin on the bare newsprint ground, growing as an expanding rectangle (rightward + downward fronts) whose newest cells fade gray→black, the fade front riding the leading right column and bottom row; (ii) 34.0 s — the field completes at 538 cells (32×16 + a 26-cell partial last row offset ~3 cols right — one cell per electoral vote); (iii) ~34.3 s — the title band lands across the field's middle (rows 8–9 zone) as flat color blocks (teal head block · red main block · steel-blue bottom strip · pale bottom-right block · dark top strip), fully occluding the cells behind it; (iv) 34.3–34.8 s — the white serif title reveals left-to-right inside the band at letter pace ("Electoral" by 34.5 · "Col" 34.6 · "Colleg" 34.7 · full 34.8).
- **Holds how long:** completed field alone ≈0.3 s (34.0→34.3); full lockup static from 34.8 to ≥36.2 (≥1.4 s, hash-identical frames at 36.0/36.2), ending when the outline handoff begins ~36.3–36.5.
- **Dissolves how:** it does not dissolve inside its window — the title exits by being replaced under the next technique (state outlines draw over the field from ~36.3; title gone by 37.5). The exit belongs to T210's transition, not to T204.
- **Sub-beats:** the assembly is one continuous growth, not per-row steps (counts 4 → 15 → 136 → ~300 → ~465 → 512 → 538 across 31.3→34.0 — decelerating fronts, fast first second); the last row is a separate late beat (births 33.5–34.0, after the 16-row body completes); the band precedes its text (band full-width while text still revealing); the sponsor watermark ("Presented by ABSOLUT", top-right, visible in source frames) is specimen branding, NOT part of the technique — excluded.
- **Corrections to the catalogue prose (priced from the census, not the digest):** (1) the "dots" are **square cells**; (2) the lettering is **white**, not "red/blue split" — the red/blue split lives in the **band blocks behind** the white serif text; (3) the digest window 0:28–0:37 conflates setup with technique: 28.0–31.2 inside it is the prior scene's exit + a CNBC broadcast insert (borrowed footage, not recreatable, not this technique); the technique proper is **31.3–36.5**; (4) the digest's "threshold map (T07)" cross-reference is wrong — packet T07 is the TX/VT House-stage count; the threshold grid-map is packet T09 = library T210 (see codex-observe finding 4).

### 1.3 Variables (§1.3 — every property that could change without changing the technique)

Content: title text (and its word split) · cell total / cols / rows / last-row cells / last-row offset. Geometry: field position + extent (fractions of stage) · cell size-to-pitch ratio · origin corner. Timing: withhold/pre-roll duration · assembly duration · per-cell fade duration · growth-front shape (keyframe table) · last-row lag · band-in duration · text-reveal duration · hold duration. Palette: cell ink · ground color · ground-texture intensity · band block colors + their span fractions · title color. Type: title font family · title size relative to band. Direction: growth direction (origin corner + front axes) · reveal direction. Density: pitch (cells per stage width) at fixed extent.

### 1.4 Prior / family scores read (§1 resource 3)

No prior attempt for T204 (no artifact directory, no verdict-history line — confirmed by census + codex-observe's audit). Closest scored siblings, read firsthand from their `scores.md`:

| Sibling | Why closest | Lens line (motion · timing · purity · reusability · readability) | Avg | What it prices for T204 |
|---|---|---|---|---|
| T53 ballot-arc count board | grid/count board, same packet family of count surfaces | 92 · 88 · 94 · **74** · 80 | 85.6 PASS | Reusability is the family floor: value-dispatched scheduling + renderer literals outside CONFIG were its convergent defect — T204's schedule must dispatch on CONFIG keyframes/IDs, never on content values. |
| T82 countable multitude | cell-grid multitude assembling in place | 80 · 89 · 100 · 80 · 87 | 87.2 PASS | Its convergent defect was the reveal SHAPE (row-major order vs the measured oval front) — T204's growth fronts must follow the measured keyframes, not an assumed order; canvas geometry literals were its reusability leak. |
| T99 logo-mark assembly opening | opening/identity assembly (the other consumer surface) | 80 · 100 · 100 · 80 · 90 | 90.0 PASS | Assembly openings score high on timing/purity when the lifecycle is CONFIG-driven; its cures were CONFIG completeness + fitted wordmark — T204's band + title fit must be CONFIG + measured. |

Family average (A2 basis): (85.6 + 87.2 + 90.0) / 3 = **87.6**. Every sibling's minimum is reusability (74/80/80) or motion (80/80).

### 1.5 Consumer (§1 gate)

**Primary: the opening-identity surface** (explainer cold-open / DLC opener title landing). Reason: the technique's payload is a *title* whose landing is withheld until its substrate assembles — the act is an identity reveal, and RUN.md §1 names T204 "additionally the opening/identity surface" beyond the wave's diagram default. **Secondary: diagram containers** (the DLC assembler's count-board surfaces) — the identical field component is the tally substrate the sibling items consume (T210's outlines draw on this field; T205/T208 reuse the grid module). The build therefore ships two liftable modules: the field (diagram) and the band+reveal (opening-identity).

### 1.6 Standing-guidance dispositions — WITH REASONING INLINE (A9.5)

- **A1.2 runtime text sampling — NOT-BINDING.** That precedent licenses letterforms *sampled from config-rendered text* (particle typography, T15 family). T204's title is typeset serif text sitting on an opaque band; no letterform is sampled, formed, or particle-built, and the census shows the glyphs arriving by a left-to-right reveal of finished type. Sampling would add a construction the specimen does not contain.
- **A5 flow-field model — NOT-BINDING as construction.** There is no particle field: the census shows discrete square cells that fade in place on a fixed lattice — nothing flows, borrows, or releases. **Owner Cure 1 (intensity separation) — BINDS in analogue:** the specimen's own separation is occlusion — the band is fully opaque and the cells behind it never compete with the title; the Plan carries band opacity 1.0 and cells under the band not rendered. **Owner Cure 2 (strict phase exclusivity) — BINDS:** the census shows the title reveal beginning only after the field completes (band onset ~34.3 > last cell 34.0); the Plan enforces it by phase machine + a pre-band zero-title assertion (CP6), not by hopeful timing arithmetic.
- **A9.1 plate construction — STILL PLATE priced.** The newsprint ground never moves in any census frame (identical texture position across 31.3–37.5); a moving plate would exceed the technique. The ground is therefore a still, procedurally generated texture (code-generated, never the specimen's newsprint image — purity §6.1); no pan, no tiling requirement arises.
- **Reserved-band badge note (HQ board `practice-2026-11-18-t06-construction-note`) — BINDS.** T204's title is exactly a container-scaled label: the Plan gives it a reserved band (fixed CONFIG geometry across the field's middle; the cells behind it are occluded by design, not competing) with legibility floors — title cap-height measured at the 360 px stage against the ~11 px floor in the A6 measured-fit leg, and band geometry in CONFIG so the band scales with the container without re-layout.
- **A9.6 parameterization depth — BINDS.** Band block spans, growth keyframes, and ground coefficients are subject-shaping values → all CONFIG data (§2.1).
- **A11 census checkpoints — BINDS** (§2.4 assertion table). **A13 receipt index — BINDS** at the build-record stage (Verify checklist).

### 1.7 codex-observe — fired at §1 step 1 · return filed · dispositions

Return: `item-T204-codex-observe-return.md` (this run dir) — **Verdict: CONFIRMED-WITH-GAPS**, 4 findings. Dispositions (applied into this record before Plan):
- **F1 (core assembly agrees across digest/library/register) — CONFIRMED, no act.**
- **F2 (published window conflates setup with animation) — APPLIED:** §1.2's census boundaries govern; the Plan's segment (§2.3) is cut 30.8–37.0 so the comparison carries the setup tail + handoff onset as labeled context while the build window is the measured technique (31.3–36.5).
- **F3 (ev/t32 miscaptioned; "red/blue split lettering" wrong; count provisional) — APPLIED:** §1.2 cites ev/t32 as the 32.0 s assembly state only; the title evidence is census frame c6.8s; mechanics corrected to white serif on a color-block band (§1.2 corrections 1–2). Count: no settled un-occluded full-field frame exists after 34.0 (the title band occludes rows 8–9 from 34.3), so the count stands **538 ±1 as measured** (512 exact at 33.5 + 26 in the final row at 34.0, one fade-front split artifact); the Plan's exact assertions bind the *measured checkpoints* (15 · 136 · 512) and treat 538 as the A9.3 source-count the build must reproduce by construction (cols×rows + lastRowCells), not as a census-proven constant.
- **F4 (digest's T07 cross-reference wrong; threshold map = packet T09 = T210) — APPLIED:** §1.2 correction 4; T204's window closes at the outline onset (~36.5) and the handoff is named as T210's, distinct from T210's later 2:19 sequence.

**Observe gate-out:** mechanics + sub-beats (§1.2) · variables (§1.3) · consumer (§1.5) · dispositions (§1.6–1.7) — complete.

---

## §2 — PLAN

### 2.1 Parameter table (every §1.3 variable a named CONFIG key; specimen value = default)
# RUN — recreation Cycle 037 · Wave 34 · 2026-11-18 (T199 completion under A12.3 + first attempts queue #95–#98: T204 · T205 · T208 · T210, Packet #12)

Opened BEFORE any building (INSTRUCTION §0). Trigger: cron `study-recreation` 2026-11-18 09:20 EST.
Governing: recreation INSTRUCTION.md (§0 wave form incl. completion-wave form Amendment A8 + skeleton-record step · §1–§9 · Amendments A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13 + 2026-11-14 ruling: arming=firing, verdicts advisory), bounded_probe_discipline (probes named in advance, capped in code ≤6,000 chars: QUEUE recreation section in capped slices · TECHNIQUES.md OWED lines · Cycle-036 RUN.md in capped slices · per-item scores.md tails · artifact census · HQ.json tail entries · heartbeat tail; breaches: 0).
Pre-action judgment: (1) objective — carry T199 shout scaling (queue #94, Packet #11) to its scored verdict via its authorized A12.3 completion re-fire (cures filed in its scores.md at Wave 33 close), and carry the next four owed first attempts in queue order — #95 T204 dot-grid identity system + withheld title · #96 T205 vote-to-grid conversion diagram · #97 T208 paired dot counts, House stage · #98 T210 threshold grid-map (all Packet #12, Vox "The Electoral College, explained") — each to a scored verdict; 5 items, the §0 cap. (2) Forward movement — the NO-VERDICT pool drops from 4 toward 3 (T199 scored; T190/T196/T197 stay parked, see §0b.1) and the DESCRIBED-OWED pool drops from 11 toward 7. (3) Cost to owner — none; no ask, no schedule change; the T190/T196/T197 authorization ask stands with HQ (consumer named, §0b.1) and is NOT re-asked here. (4) Why now — scheduled firing; A12.3 makes T199's completion the next cycle's first charge, and queue order is the only triage (A3). (5) Body-write — this RUN.md, per-item records + builds under `hidden_files/study/recreations/`, HQ.json skeleton→closed entry (same id `rec-2026-11-18-wave34`), heartbeat skeleton→closed beat 117, verdict-history lines, QUEUE.md rows #95–#98 (+ #94 status update). (6) Order check — this record's §1 prices T199's on-disk state BEFORE any firing (A8) and the fresh pool census before any build; each new item's Phase A record (Observe+Plan + codex-observe + codex-plan-review) is filed and the wave-level exit gates are fired and consumed in §2b BEFORE its build script is written (A9.2); T199's build is a cure of its already-gated plan (Cycles 034–036 §2b stand consumed), so its Execute opens on the filed cure list. Skeleton board/heartbeat entries are written at Plan close (§0 skeleton rule) — this cycle complies, no D-SKELETON.

## §0b — Replan items carried
1. **T199 completion (Cycle 036 §9/§0b.1, first charge, AUTHORIZED under A12.3):** T199's second HOLD landed in Cycle 036, so its first completion re-fire in THIS cycle is authorized by A12.3 as written. Cure list = the four items in its scores.md (census-twin CONFIG-derived receipts · hail-prescription reconciliation printed in the payload mapping section · overlap intersections from positioned bounds · CP11 joined receipt), rebuilt under Amendment A13 (receipt index + reconciliation against guards.md commands 1–8 + the item's whole inherited assertion set + expected CONFIG keys; every line carries its executable receipt or a NOT-DEMANDED line with a governing citation).
2. **T190/T196/T197 — PENDING AUTHORIZATION (consumer: HQ), NOT taken this wave:** each spent its A12.3 completion re-fire in Cycle 036 and that re-fire HOLDed; A12.3 does not expressly renew a re-fire after a completion HOLD (Cycle 036 codex-condense firing 3). No HQ authorization entry stands on this job's board after `rec-2026-11-18-wave33` (board re-read this run: 49 entries, last = wave33). Their slots therefore fill from queue #95 onward, exactly as Cycle 036 §0b.1 prescribed. They remain mid-attempt HERE (A3 §3) and do NOT route to practice.
3. **Practice census-guard proposal** (carried Cycles 034–036): consumer = the next Condense with ≥3 scored items. Price at §9 if ≥3 verdicts land this wave.
4. **Feed standard (Cycle 035 §9.1, followed since):** payload size+tail-verified → one-stream `cat payload | codex exec` (local binary `~/workspace/codex-local/node_modules/.bin/codex`, per TOOLS.md working route; instructions + artifact in ONE stream, never pipe + stdin field together) with redirect → return size+tail-verified → on empty/truncated, ONE re-fire via stdout capture + file-tool filing; a second failure files honestly and stops.
5. **Practice construction note** (HQ board `practice-2026-11-18-t06-construction-note`, sent): reserved-band badge treatment for container-scaled labels — consumer is recreation's next first attempt whose labels scale with a container. Priced for this wave at §2 per item; Packet #12's grid/diagram items carry tally labels — the item whose labels scale with its container prices it in its Phase A record, the others print NOT-BINDING with reason.
6. Standing forms (A10/A11/A12/A13): every new item's schedule table prints its census-anchor mapping (A10.2); §1 files a frame census at ≤2 s spacing with full SHA-256 per item (A10.3); jev-prewave payloads carry both A6 leg outputs verbatim (A10.1); every build-record carries the A13 RECEIPT INDEX reconciled before payload assembly; fit evidence is (i) harness post-fit ink measurement or (ii) rendered measurement with a named stand-in font, never a character-width model (A12.2).

## §1 — Observe (completion form for T199 per A8; first-attempt form for T204/T205/T208/T210 — per-item detail in each item's Phase A record in this run directory)

**Wave manifest: 5 items** — 1 completion (queue #94 T199, Packet #11) + 4 new first attempts (queue #95–#98, all Packet #12: Vox "The Electoral College, explained", YouTube ajavsMbCapY, 488.301 s; digest at `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/`; adopted WITH GAPS by video-digestion Cycle-019; registered by style-library Cycle-019).
Consumer (T199): word-animation containers. Consumer (Packet #12 items): diagram containers (the DLC assembler's diagram/count-board surfaces) — T204 additionally the opening/identity surface. In every build the technique's text/marks ARE the subject, not captions (INSTRUCTION §3.2/§6.5).

### Pool census (fresh this run, 2026-11-18 09:20 EST)
1. QUEUE.md RECREATION QUEUE: rows #1–#94 filed. #94 T199 IN PROGRESS NO VERDICT (completion authorized, this wave). Rows #95+ do not yet exist as rows — entered by recreation at this wave's close from the style-library register (standing precedent).
2. Catalogue register (style-library TECHNIQUES.md, read this run; Cycle-020 state): 239 techniques · DESCRIBED-OWED 12 at Cycle-036 read (queue #94 T199 · #95 T204 · #96 T205 · #97 T208 · #98 T210 · #99 T212 · #100 T218 · #101 T219 · #102 T227 · #103 T232 · #104 T233 · #105 T238); style-library Cycle-020 (closed after Wave 33) registered Packet #13 and prints catalogue 239 (DESCRIBED 146 · IN PROGRESS 15 · RECREATED 78 on its accounting, which includes practice re-attempt moves). This wave takes #94 (completion) + #95–#98; #99–#105 (7 items) stand for later waves.
3. Artifact census (binding): 94 directories under `hidden_files/study/recreations/` (directory listing this run) — 90 with verdicts + 4 NO VERDICT (T190 · T196 · T197 · T199). The four new items' directories do not yet exist; created at their Plans.
4. Ownership split (A3 §3): all five items are first attempts / a mid-attempt completion → this job. All other IN PROGRESS techniques are practice's re-attempt pool. T190/T196/T197 stay parked PENDING AUTHORIZATION (§0b.2) — printed, not silently skipped.

### Per-item state (A8 pricing for the completion item; catalogue lines for the new items)
- **T199 — shout scaling inside a real scene** (`T199-shout-scaling-in-real-scene/`): build on disk recreation.html sha256 `edad0b81…` (14,730 B at Wave 33), UNCHANGED across both Wave-33 prewave firings (its cure round touched records only). Filed: segment.mp4 (9.000 s, source 66.5–75.5 s) · comparison.html · build-record.md · fit-table.md · config-census.md · plan-amendment-cycle036.md · jev-prewave ×2 HOLD (both bind this build). NOT present: lens returns · verdict. Completion charge (scores.md cure list, verbatim pricing in §0b.1): restructure the harness so every census twin is a CONFIG expression with CONFIG-derived receipts incl. a timing swap that moves a twin · print the hail-prescription reconciliation in the payload mapping section (amendment governs over the census-anchor table wording) · overlap rows as intersections from positioned peak + neighbour ink bounds · CP11 as ONE joined receipt (CONFIG expression + band sample together). Then: fresh own-checks + A6 legs on the (record-cured; build changes only if a cure requires it — any build change re-binds all payloads to the new hash) + A13 receipt index reconciled + ONE jev-prewave re-fire (authorized, A12.3) → five-lens wave on FIRE-WAVE only.
- **T204 — dot-grid identity system + withheld title** (P12; TECHNIQUES.md: "the dot field assembles and the title lands across it — the assembly order is the claim (clip-cited)"; container: openings + diagrams): no directory, no prior calls. Mechanics/timestamps/evidence frames priced in its Phase A record from the Packet #12 digest section + firsthand frame census (A10.3) before Plan.
- **T205 — vote-to-grid conversion diagram** (P12; "a grid fills in blocks, left to right, as conversion"; container: diagrams): same Phase A charge.
- **T208 — paired dot counts, House stage** (P12; "dots land in grids timed to the spoken count (clip-cited)"; container: diagrams): same Phase A charge.
- **T210 — threshold grid-map (the road to 270)** (P12; "state outlines draw themselves over the tally grid and regions accumulate toward the 270 post (clip-cited)"; container: diagrams): same Phase A charge.

### Standing guidance dispositions (restated for this cycle, per A8)
A13 receipt index + reconciliation binds every item (see §0b.6). A1.2 runtime text sampling binds typography constructions that sample config-rendered text; the Packet #12 items are grid/diagram constructions — each Phase A record prices its applicability with reasoning in its Observe gate-out (A9.5). A5 flow-field + Owner Cures bind particle fields only; no item this wave is a particle field unless its Phase A census shows one (priced per item there). A9.1: any moving background plate is priced in the item's parameter table (seamless tiled pan where a plate IS the technique; a still plate where motion exceeds the technique). A9.6: every subject-shaping value is CONFIG data in all five items. A11: every census checkpoint maps to an executable assertion with a CONFIG-derived instant + an A12 receipt.

## §2 — Plan (summary; per-item authority = each item's Phase A record in this run directory)
- **T199 (completion):** parameter table, construction, verification plan and checklists stand as filed in Cycles 034–036 (item record + `plan-amendment-cycle036.md`) AS AMENDED by the scores.md cure list — consumed, not re-authored (A8). Execute checklist = the four cures (§0b.1) + fresh own-checks (swap · purity · syntax, raw output filed) + A6 legs re-filed + A13 receipt index reconciled + ONE jev-prewave re-fire (payload carries build-record + CONFIG + packet section + guards list + both A6 outputs verbatim + the binding census-anchor mapping, A10.1) + five-lens wave on FIRE-WAVE only (identical-hash binding; timing payload carries the census-anchor mapping). Bar (standing §2.3): five-lens average ≥85 AND no lens <70. Schedule basis stands: segment-anchored (segment = source 66.5–75.5 s; buildMs = segmentTimeMs − 500).
- **T204/T205/T208/T210 (new):** each item's Phase A record is its Plan authority: parameter table (every §1 variable a named CONFIG key, specimen values as defaults) · construction choice with rejected alternatives · schedule basis + census-anchor mapping (A7/A10.2 — segment-anchored, t=0 allocation, or two-act, named on the window-scope line) · swap design (different content + one timing + one palette value, exact values) · purity checks · Execute + Verify checklists as instruments · failure-point evaluation (priced from this job's record: convergent freeze · intensity collapse · phrase/state overlap · fitting limits · render-proof limitation) · plateau priced in Plan (A2: family/prior average + stuck-lens hypothesis stated before Execute). Per-item codex-observe + codex-plan-review fire in Phase A; the wave-level jev-observe-exit + jev-plan-exit fire on the four Phase A records before any build script is written (§2b).
- **Wave gate form for this cycle:** jev-observe-exit + jev-plan-exit fire for the four new items; for T199 they print NOT-DEMANDED-BY-FORM — its Observe/Plan gates fired and were consumed in Cycles 034–036, and A8 consumes filed gate returns, never re-fires them; T199's demanded gate is the A12.3 prewave re-fire. codex-observe + codex-plan-review fire per item for the four new items in Phase A; for T199, NOT-DEMANDED-BY-FORM (consumed Cycles 034/036, returns on file). codex-condense fires at this cycle's Condense, unconditionally.

## §2b — Wave gate dispositions
_(Filled after the four Phase A records land and both gates fire; Execute for new items opens only on this section standing consumed. T199 proceeds in parallel on Cycle 036's consumed §2b.)_

## §3 — Execute
_(Per item, on landing.)_

## §5 — Verify
_(Seat-verified at close.)_

## §9 — Condense
_(At close.)_

## §7 — Faithfulness trace
_(At close.)_
ls: cannot access '../../QUEUE.md': No such file or directory
../../INSTRUCTION.md

exec
/bin/bash -lc "rg -n 'A1|A3|A5|in motion' ../../INSTRUCTION.md | head -22; rg --files ../../../.. -g 'QUEUE.md' -g 'verdict-history.md' -g 'digest.md' | rg 'QUEUE|verdict|ajavs' | head -20" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 976ms:
18:2. Read the original segment in motion: the archived source at the catalogue timestamps (the cut is made in §3, but Observe watches the segment in the source first and notes the sub-beats: what forms when, holds how long, dissolves how).
22:- **RESOURCE LIST (read in this order, every wave):** (1) `../QUEUE.md` recreation-queue section — current positions, OWED status, ownership split (first attempts here; scored techniques route to practice) · (2) the item's packet section in its digest.md + TECHNIQUES.md entry (style-library) · (3) the item's prior scores.md + codex/ returns + `verdict-history.md` lines, including named family siblings (e.g. T16 reads T15's filings) · (4) the evidence frames + archived source segment in motion · (5) this file's Amendments A1/A3/A5 guidance for the item's family (flow-field model + Owner Cures 1–2 for particle fields; runtime text sampling for typography) · (6) `guards/guards.md` command list.
39:4. **Self-verify before Codex** (§5 legs 1–3); a build that fails its own swap test does not spend a Codex wave. Self-verify files the A12 executable receipts (§5 leg 3b) in the build-record's first draft; a build-record missing receipts does not spend the prewave call either.
49:3b. **Pre-wave Jev gate:** `guards/jev-prewave.md` judges the build record after legs 1–3 and before the wave (leg 4): FIRE-WAVE spends the wave; HOLD returns the build to Execute with its classification and the wave moves to its next item. **Receipt readiness check (Amendment A12, 2026-11-18 — performed by the builder BEFORE the payload is assembled):** every A11 checkpoint in the build-record carries its executable receipt — the harness command or run, the CONFIG expression evaluated, and the raw result from the build under review; for a CONFIG timing swap the receipt shows the changed evaluation instant. A checkpoint with a claim but no receipt returns the record to the builder before the call is spent. **Receipt-index reconciliation (Amendment A13, 2026-11-18):** the build-record carries a RECEIPT INDEX enumerating (a) every guards.md command applicable to the item and (b) every A11 assertion for the item; before the payload is assembled the builder reconciles the index against the applicable guard commands, the item's planned A11 assertions, and — for a completion or re-attempt — the assertion sets established in the filed prior harnesses and their amendments, and, for census receipts, against the build's expected CONFIG keys (nested/array keys included). Every index line carries its executable receipt or an explicit NOT-DEMANDED line whose disposition cites the governing plan or guard; a missing expected line, an unsupported exclusion, or a line with neither returns the record to the builder. A receipt is valid only if it carries the evidence its assertion requires: for each CONFIG-derived input, the CONFIG expression and its evaluated value; for each check, the raw observed result. A populated receipt lacking that evidence returns the record to the builder on the same form. This check is a readiness check for the mandatory call, not a gate on it: the call still fires at its step on every cycle, and a cycle in which it did not fire prints INCOMPLETE under the standing firing ruling. The deliverable-class judgment for this job IS the five-lens scoring wave (leg 4, defined in `guards/codex-scoring-wave.md`) — no separate jev-verify file exists, by design: the wave's per-lens verdicts + leg 5's mechanical consolidation are the deliverable gate, and a second Jev over the same deliverable would duplicate them.
50:4. **Codex scoring wave (external):** FIVE reviewers, distinct lenses — **motion fidelity · timing/tempo match · construction purity · reusability/parameterization · readability** (the fifth lens is permanent since 2026-11-14, Amendment A5: formed-word legibility against the particle field — word-vs-reserve intensity separation present and sufficient · the word readable at phone size during its hold · background particles never competing at word intensity). Each run: instruction file opens with the standing header (consumer + the decision the run prices; the working record it builds from and writes to; the return must name what it wrote into the body), carries the technique's catalogue mechanics + the recreation's full source, and returns ONE lens score (0–100) + priced findings. Feeding follows the fleet's Codex rule (instructions + artifact in ONE stream; never pipe + stdin field together). Returns are filed verbatim under the artifact's `codex/` directory.
68:## Amendment A1 (2026-11-13, from Cycle-002 — T15 attempt 1)
75:## Amendment A3 (2026-11-13, owner's refinement to the recreation law — UNIVERSAL obligation)
77:2. **Tier accounting consequence:** a motion-graphic technique at DESCRIBED prints as **OWED + its queue position** (style-library Amendment A3 enforces the face).
80:## Amendment A5 (2026-11-14, the owner's own read on T15 attempt 1 — two cures + the fifth lens)
113:5. **Gate-out reasoning inline (A9.5).** A gate-out section carries its dispositions' reasoning inline — the construction-precedent dispositions (A1 §2's scope, A5's applicability) are stated with their reasoning in the Observe gate-out itself, not only in a later Plan section the gate judge is not fed. (Founding miss: Cycle 023's jev-observe-exit GUIDANCE-DROPPED return — the reasoning stood in §2 while the judged record was §1.)
116:## Amendment A10 (2026-11-17, Cycle 026 Condense — the three bundled restatements whose named consumer was this Condense)
118:1. **Prewave payload completeness (A10.1 — restates §5 leg 3b at instruction level; operative since Cycle 024 in jev-prewave.md's context contract).** The jev-prewave payload for every item MUST carry that item's A6 leg outputs (fit-table.md + config-census.md) verbatim. A payload lacking either leg's output is a feeder defect printed in the wave's §5; a prewave verdict priced without them does not discharge leg 3b.
119:2. **Plan census-anchor mapping (A10.2 — restates the Cycle-025 Plan form at instruction level).** Every schedule table in a wave's Plan prints its census-anchor mapping: the window-start offset (segment-anchored or t=0 allocation), the census states in segment-relative ms, and the prescribed state at each instant the table governs. A schedule that departs from its census prints its departure table beside it (the Wave-22 defect class: census printed in §1, schedule derived from other numbers, the gap found only by the timing lens at verdict cost). Plan-exit judges price an absent mapping or departure table as REVISE.
120:3. **Motion-census Observe form (A10.3 — restates the Cycle-025 Observe form at instruction level).** §1 files a frame census at ≤2 s spacing across each item's transitions (seat-extracted, viewed firsthand by the seat), full SHA-256 per frame, with the motion findings stated per item: which instants carry motion, which are holds, and what changes between census states. Findings priced from a digest's prose alone, without the census, do not close Observe.
122:## Amendment A11 (2026-11-17, Cycle 028 Condense — census-checkpoint assertions; adopting the practice job's census-checkpoint note, practice Cycle 019 Condense, carried as a candidate by Cycle 027 §9.1 and adopted here on three independent demonstrations)
125:## Amendment A12 (2026-11-18, Cycle 035 Condense — the ASSERTED-CHECKS pattern: T190 · T192 · T196 · T197 prewave HOLDs in one wave; T195's cure path as the positive demonstration)
126:1. **Receipt form (operative step: §5 leg 3b's readiness check, referenced from §3 step 4).** Every A11 assertion in a build-record files its EXECUTABLE RECEIPT beside the claim — the harness command or run, the CONFIG expression evaluated, and the raw result from the build under review; for a CONFIG timing swap the receipt shows the changed evaluation instant. A9.4 already required raw output; this clause names the receipt's three parts and wires the check into the prewave step itself. A build-record whose assertions carry claims without receipts is incomplete at the builder's own gate: jev-prewave is not spent on it (the call's firing obligation is unchanged — the readiness check precedes payload assembly, and an unfired call still prints the cycle INCOMPLETE).
128:3. **The two-HOLD stop + completion re-fire.** The two-HOLD stop stands unchanged: a second HOLD files NO VERDICT with cures priced, and the wave is not fired on that build. The item's completion — cures filed, fresh own-checks + A6 legs on the cured build, then ONE jev-prewave re-fire, and on FIRE-WAVE the five-lens wave bound to that build — is the next recreation cycle's first charge in completion form (§0 A8). This clause explicitly authorizes that single completion-cycle re-fire so A8's consume-don't-refire rule (which binds gate returns and hash-bound payloads of the ORIGINAL attempt) is not read as barring it: the re-fire judges a cured build that no prior return has seen. The item does not route to practice unscored (A3 §3: a technique mid-attempt here finishes its verdict here).
130:## Amendment A13 (2026-11-18, Cycle 036 Condense — the receipt-completeness pattern: T190 · T196 · T197 · T199 prewave HOLDs in one wave; T192's 1.0-clearance as the positive demonstration; re-encoded under codex-condense REVISE before landing)
131:1. **Receipt index + reconciliation (operative step: §5 leg 3b's readiness check, extended in the same landing).** Every build-record carries a RECEIPT INDEX enumerating (a) every guards.md command applicable to the item (1 purity · 2 swap · 3 syntax + seeded-RNG census · 4 arithmetic, seat-side · 5 segment binding · 6 fit leg · 7 census leg · 8 census-anchor probes where a zero-state anchor stands) and (b) every A11 assertion for the item. Readiness REQUIRES the reconciliation, not just the index: against the applicable guard commands, the item's planned A11 assertions, and — for a completion or re-attempt — the assertion sets established in the filed prior harnesses and their amendments; census receipts reconcile against the build's expected CONFIG keys (nested/array keys included — founding miss: T190's `scenes[].id` row). Every line carries its executable receipt or an explicit NOT-DEMANDED line whose disposition cites the governing plan or guard; a missing expected line, an unsupported exclusion, or a line with neither is incomplete at the builder's own gate: jev-prewave is not spent on it (the firing obligation is unchanged — the readiness check precedes payload assembly, per A12.1's form).
../../../../study-jobs/practice/verdict-history.md
../../../../study-jobs/effectiveness-review/verdict-history.md
../../../../study-jobs/recreation/verdict-history.md
../../../../study-jobs/QUEUE.md
../../../../study-jobs/style-library/verdict-history.md
../../../../study-jobs/reception-analysis/verdict-history.md
../../../../study-jobs/source-scouting/verdict-history.md
../../../../study-jobs/video-digestion/verdict-history.md
../../../../supervision/codex-runs/QUEUE.md
../../../../language-challenge/jobs/publication/verdict-history.md
../../../../language-challenge/jobs/community-posts/verdict-history.md
../../../../language-challenge/jobs/review-dashboard/verdict-history.md
../../../../study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md
../../../../language-challenge/jobs/asset-creation/verdict-history.md
../../../../language-challenge/jobs/video-production/verdict-history.md
../../../../language-challenge/jobs/experiment/verdict-history.md
../../../../language-challenge/jobs/assembler-maintenance/verdict-history.md
../../../../language-challenge/jobs/thumbnail-creation/verdict-history.md
../../../../language-challenge/jobs/guard-battery/verdict-history.md
../../../../language-challenge/jobs/assembler-maintenance/runs/2026-11-16-pass452-run-by-remainders/evidence/reattack-feed/files/job/verdict-history.md

exec
/bin/bash -lc "rg -n 'T199|T204|RECREATION QUEUE' ../../../QUEUE.md
sed -n '68,89p' ../../INSTRUCTION.md
rg -n 'T204|T53|T82|T99' ../../verdict-history.md
sed -n '37,41p' ../../../../study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md
rg --files ../../../../study -g scores.md | rg '/T(53|82|99)-'
rg -n 'T204' ../../../../study/style-library/TECHNIQUES.md" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 136ms:
90:## RECREATION QUEUE (owner: recreation job — head = next build)
191:| 94 | T199 — Shout scaling inside a real scene | P11 @ 67–75 s | OWED at Packet-11 registration (style-library Cycle-019): per-word size peaks coinciding with shouted onsets inside scene footage; word-animation containers | IN PROGRESS — attempt 1 NO VERDICT 2026-11-18 wave-33 (built, sha edad0b81; jev-prewave HOLD ×2 ASSERTED-CHECKS, wave not fired); completion is recreation's next-cycle first charge, authorized under A12.3 |
## Amendment A1 (2026-11-13, from Cycle-002 — T15 attempt 1)
1. **Convergent-lens rule (§5 reading rule):** when two or more lenses independently name the same defect, that defect is priced as the next attempt's primary cure, ahead of single-lens findings. (T15 attempt 1: motion 68 + reuse 64 both named the surplus-particle freeze during FORM.)
2. **Typography construction precedent:** runtime sampling of config-rendered text is the lawful letterform construction (purity 100, T15 attempt 1) — future typography recreations start from it rather than re-deriving purity.

## Amendment A2 (2026-11-13, the funnel design — score-delta floor rule, HQ's priced addition)
**Re-attempt floor rule:** a re-attempt whose average does NOT beat the technique's prior attempt average is not filed as silent progress — its scores.md entry carries a WHY section naming the plateau (what was changed, what did not move, which lens is stuck and the hypothesized cause). Grinding the same score without a named plateau is the ceremony pattern in miniature and is a deviation (PLATEAU-UNNAMED) in the attempt's RUN. Score deltas are reported in the library's growth accounting (style-library GROWTH.md) per attempt, not only at consolidation.

## Amendment A3 (2026-11-13, owner's refinement to the recreation law — UNIVERSAL obligation)
1. **The queue orders; it never exempts.** If a catalogued lesson is a motion graphic that can be recreated as HTML, its recreation MUST be created. Triage survives only as ordering + pacing. Classification rule, applied per technique at registration and printed in the open: (a) is it a motion graphic (its lesson is motion/animation behavior, not a still, a system, or a story structure)? (b) can HTML/CSS/JS + generated assets carry that motion? Yes+yes = **OWED**. A no on either leg is priced with its reason in QUEUE.md and the tier register (T24 static end card: no motion content — documentation asset; T25 two-world system: a design system whose component techniques are individually owed — not itself one recreation).
2. **Tier accounting consequence:** a motion-graphic technique at DESCRIBED prints as **OWED + its queue position** (style-library Amendment A3 enforces the face).
3. **Division of labor with the practice job:** this job owns FIRST attempts (unattempted techniques, queue order). Re-attempts of already-scored recreations belong to the practice job (lowest-scored first). A technique mid-attempt here finishes its verdict here before practice can pick it up.

## Amendment A5 (2026-11-14, the owner's own read on T15 attempt 1 — two cures + the fifth lens)
The owner heard the four Codex returns verbatim, converged with the wave on the frozen-flow defect, and caught TWO defects no lens named. Both are standing law now:
1. **OWNER CURE 1 — foreground/background intensity separation (readability):** particles forming the word render FOREGROUND (contrast/opacity/intensity separated); reserve particles render BACKGROUND (dimmer). Same-intensity fields make formed words unreadable — in the original, the separation is part of why the words read at all. Any particle-field recreation carries this separation by construction.
2. **OWNER CURE 2 — strict phrase sequencing (phase exclusivity):** a phrase's formation may not begin until the previous phrase's dissolve has completed; one word's lifecycle owns the stage at a time. Overlapping lifecycles are a defect class in any sequenced recreation.
3. **THE FIFTH LENS — READABILITY (permanent, §5.4):** the founding evidence is priced: four lenses scored a recreation whose words fight their own background, and none owned legibility. The owner's expectation now has a judge (the golden rule). Attempt 2 onward is scored by five lenses; the bar form is unchanged (average ≥85, no lens <70) with the fifth lens inside both terms. Attempts scored under the four-lens wave keep their filed averages — cross-wave comparisons print the lens count (a 4-lens 78.5 and a 5-lens score are different instruments; deltas across the boundary are labeled as such).
4. **Flow-field construction model (HQ's implementation note, standing guidance for particle techniques):** model the pool as ONE constant flow field, not per-phase animations — every particle always carries the stream's directional velocity; forming = BORROWING particles out of the flow onto targets, where they keep low-amplitude jitter (never zero velocity), with a guaranteed reserve fraction that is never borrowed; dissolving = RELEASING them back to full stream velocity with continuity (no velocity replacement at phase boundaries). The intensity separation rides the borrow flag: borrowed = foreground, reserve = background. This single model carries Owner Cure 1, Owner Cure 2's clean stage handover, and attempt 1's convergent defect (frozen surplus) at once.

## §9 — Condense
Read the run's traces + Codex returns → candidate lessons (which constructions scored well on which lenses; recurring Codex findings across techniques) → label demonstrated/candidate/planned → promote into this file (dated, technique cited) + verdict-history.md → next cycle inherits. A lens finding that recurs across two techniques is a pattern: it becomes a §6 guard candidate with the two citations.
- **Condense Codex call point:** `guards/codex-condense.md` fires at Condense close — it attacks the cycle's drafted amendments for faithfulness (does the amended text encode the lesson) and four-layer coverage (steps · mechanical guards · Jev definitions · Codex prompts; each untouched layer carries a NO-DEFECT proof or a named not-yet-amended reason). A REVISE returns the named amendment for re-encoding before the cycle record closes. Firing: this call fires at its step on every cycle; a cycle in which it did not fire prints INCOMPLETE. (Built 2026-11-14.)
41:| 2026-11-15 | cycle-012-wave-10 | T53 ballot-arc count board, attempt 1 | 92 · 88 · 94 · 74 · 80 | 85.6 | PASS → RECREATED (tier move: style-library) | `hidden_files/study/recreations/T53-ballot-arc-count-board/scores.md` + codex/ returns |
53:| 2026-11-15 | cycle-014-wave-12 | T82 countable multitude, attempt 1 | 80 · 89 · 100 · 80 · 87 | 87.2 | PASS → RECREATED (tier move: style-library) | `hidden_files/study/recreations/T82-countable-multitude/scores.md` + codex/ returns |
60:| 2026-11-15 | cycle-016-wave-14 | T99 logo-mark assembly opening, attempt 1 | 80 · 100 · 100 · 80 · 90 | 90.0 | PASS → RECREATED (tier move: style-library) | `hidden_files/study/recreations/T99-logo-mark-assembly-opening/scores.md` + codex/ returns |
### T03 — Dot-grid identity system + withheld title
- **Timestamps:** 0:28–0:37 (system recurs throughout; outro at T22)
- **Mechanics:** A field of black dots on a newsprint-textured ground assembles; the words "Electoral College" land across it as red/blue split lettering. The same dot field is the substrate for the title, the threshold map (T07), and the outro. The title is withheld until 0:28 — after the misconception (T01) and the normal-system diagram (T02) are installed.
- **Why it works:** One visual substance is the system itself: every later count is made of the same dots, so the viewer never has to learn a new representation. Withholding the title until the problem exists makes the title an answer, not a label.
- **Evidence:** ev/t32-title-dotgrid.jpg (title over the dot field, 32 s) · Clip: clips/t03-grid-build.mp4 (28–36 s — the assembly order is the claim; stills cannot show it)
../../../../study/recreations/T53-ballot-arc-count-board/scores.md
../../../../study/recreations/T99-logo-mark-assembly-opening/scores.md
../../../../study/recreations/T82-countable-multitude/scores.md
7:**Obligation (owner's refinement, 2026-11-13): recreation is UNIVERSAL for motion graphics — of the 146 DESCRIBED, 12 are OWED (queue #94–#101 still standing from packets #11 + #12: T199, T204, T205, T208, T210, T212, T218, T219 · queue #102–#105 from packet #13, registered Cycle-020: T227, T232, T233, T238) and 134 are NOT OWED (priced in the register). The other obligation form is the practice pool: the 15 IN PROGRESS techniques, each owed re-attempts until it passes or plateaus with a filed WHY.**
10:- `techniques-openings.md` — T01, T07, T09, T14, T18, T20, T23, T26, T27, T28, T49, T50, T51, T74, T79, T99, T100, T102, T120, T121, T127, T133, T145, T146, T147, T148, T166, T178, T179, T181, T190, T191, T192, T193, T202, T204, T224, T225
143:| T204 dot-grid identity system + withheld title (from P12) | DESCRIBED — **OWED #95** | classified OWED at registration (Cycle-019): the dot field assembles and the title lands across it — the assembly order is the claim (clip-cited) |

exec
/bin/bash -lc "for f in ../../../../study/recreations/T{53,82,99}-*/scores.md; do rg -n '74|89|90|cure|CONFIG|row-major' \""'$f" | head -12; done
rg -n '"'watch|playback|in motion' item-T204-observe-plan.md item-T204-codex-observe-return.md" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 exited 1 in 31ms:
2:Bound build: recreation.html sha256 c6f4a29b3a535b82056f64b5236e28b6b991de8228b490bab244f185a3866166 (identical for all five final lens runs; no post-wave source change).
3:Feeding: score-blind allowed packet per lens (lens instruction with standing header + neutral technique facts + recreation.html + score-blind build record); scores.md never fed; no lens saw a prior score or another lens's return. Interim firings on superseded builds are preserved verbatim and NEVER averaged: codex/lens-motion-interim1.md (62, build 239795fb…) · codex/lens-purity-interim1.md (100, same build) · codex/lens-motion-interim2.md (78, build f181276b…) · codex/lens-timing-interim1.md (59, same build). Each interim defect was cured and the wave re-fired in full on the final build (identical-hash rule).
4:Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.90 · purity pre-check 0.97 · own-checks completeness 0.95 · fidelity-plan honesty 0.80) — codex/jev-prewave.md.
11:| reusability | 74 | codex/lens-reusability.md |
14:Arithmetic (shown, no rounding up): sum = 92 + 88 + 94 + 74 + 80 = 428; average = 428 / 5 = 85.6; minimum = 74.
15:Bar: average ≥ 85 AND minimum ≥ 70 → 85.6 ≥ 85 ✓ · 74 ≥ 70 ✓.
18:## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
19:1. CONVERGENT (reusability −10 + purity −4): segment bracket scheduling dispatches on bracket VALUES — `segmentBracketAt` hides the bracket whose value is 19 and delays the one whose value is 9, so a value swap silently re-times the segment act (in the §2b swap the swapped 9 appears at entry and the against-value 4 is delayed). Cure: give brackets stable IDs + explicit segment membership/anchor fields in CONFIG; dispatch on those; extend the swap test to assert segment bracket flags at entry, ~6 s, and hold under swapped values.
21:3. CONVERGENT (reusability −2 + purity −2): card geometry/styling/typography and several box/board offsets remain renderer literals outside CONFIG. Cure: move them into named CONFIG fields (card block + offsets), completing the CONFIG surface.
23:5. Reusability (−4, single lens): URL-override deepMerge preserves trailing default entries, so runtime overrides cannot reduce array cardinality (columns/brackets/card lines). Cure: array-replacement semantics for overrides; verify fewer columns/brackets through effectiveConfig. (The node-harness CONFIG-edit path already replaces wholesale; this binds the browser override path.)
24:6. Reusability (−4, single lens): CONFIG validity is not enforced at initialization (multiple remainder columns, overallocated counts, incompatible row arrays pass silently; checkpointsOk is exposed but never enforced). Cure: validate at init and refuse or repair loudly.
30:PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is layout arithmetic (build-record §5e) + the comparison page as render surface. Act 2's internal timings are a labeled ALLOCATION MODEL (anchors only: 19-bracket state at 465 s, sweep-hand verdict state at 900 s); Act 1 reproduces the measured 278–292 s window anchors. Two §2b swap deviations are recorded in build-record §5a (fillMs from-value superseded by the re-timing cure; sweep target pair roles reversed after the default cure) — altered values and PASS criteria unchanged in both.
3:Bound build: recreation.html sha256 ff3f24271d5df45cd7a8eef9d9117a3a3eb4d3e64f9368fe8992d6f9544c9a66 (identical for all five final lens runs; no post-wave source change; no interim firings — the wave fired once, on the final build).
11:| timing | 89 | codex/lens-timing.md |
16:Arithmetic (shown, no rounding up): sum = 80 + 89 + 100 + 80 + 87 = 436; average = 436 / 5 = **87.2**; minimum = **80**.
22:## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
23:1. **CONVERGENT (motion −16 + timing −7): the reveal shape.** The measured original expands as an OVAL from the lit cell before completing the rectangle; the build populates in index (row-major) order, so at 5000 ms it shows a top-half rectangle instead of the reference's oval. Cure: order cell reveals by distance from the lit cell (expanding oval/ellipse front), reaching the full rectangle by buildMs 5500; re-measure the mid-build frame against segment b-frames.
26:4. **Reusability (−8/−6/−4/−2): CONFIG surface limits.** Canvas backing size (720×640) is fixed in markup while stageW/stageH/dpr are CONFIG — resizing CONFIG clips; panel padding (8), cell gutters (0.6/1.2), amber gutters (0.5/1) and glyph alpha constants (0.85/0.9/0.95, classified structural in the census) sit in rendering code; no CONFIG validation (lit index clamped at draw but not at the skip site); glyph structure + reveal order are fixed code. Cure: initialize canvas from CONFIG, move padding/gutter/alpha constants into geom, validate + normalize CONFIG once (one lit-index normalization), expose reveal-order as a CONFIG option (pairs with cure 1).
27:5. **Readability (next-attempt evidence, no score cure claimed):** demonstrate with a rendered 360 px frame that cell boundaries survive downsampling and the lit cell's white dominance holds — the lens's named evidence gap, tied to the PIXEL-UNVERIFIED limitation below.
7:## Five-lens wave (final firing, on the cured build)
14:| readability | 90 | codex/lens-readability.md |
16:**Arithmetic:** (80 + 100 + 100 + 80 + 90) = 450 · average = 450 / 5 = **90.0** · minimum = **80**.
17:**Bar:** average ≥ 85 AND minimum ≥ 70 → 90.0 ≥ 85 ✓ · 80 ≥ 70 ✓.
21:First firing on the pre-cure build (SHA `c8b70883…`): motion 70 · timing 100 · purity 100 · reusability 74 · readability 88 (average 86.4) — returns preserved verbatim at `codex/lens-<lens>-interim1.md`. Its curable defects were cured (centre piece raised-base → scale-from-shared-baseline; CONFIG completeness / scaling / timing-validity / wordmark-fitting cures — full note in build-record), self-verify + A6 legs re-run, and all five lenses re-fired on the final build above.
28:jev-prewave: **FIRE-WAVE** (parameterization 0.95 · purity pre-check 1.0 · own-checks completeness 0.95 · fidelity-plan honesty 0.90) — return filed verbatim at `jev-prewave.md`. Fired on the pre-cure build record; the cure cycle that followed only strengthened the priced dimensions (geometry corrected to the measured baseline, CONFIG completed), and the wave was spent on the cured build.
36:3. Readability: the blue piece is the weakest foreground (≈3.3:1 against black) — priced, silhouette still distinguishable; any palette revision is a CONFIG swap away.

codex
**T204 — RETURN-TO-OBSERVE · Primary classification — MECHANICS-UNSEEN**

| Dimension | Score | Evidence |
|---|---:|---|
| Queue-state-priced | 1.0 | `RUN.md` §1 records this cycle’s queue read and the A3 ownership split. `TECHNIQUES.md` line 143 supplies OWED #95 beyond the last filed queue row. T204 is a first attempt. |
| Prior-scores-read | 1.0 | T204 Phase A §1.4 cites the filed T53, T82, and T99 scores and carries forward their cures for CONFIG-driven scheduling, measured growth fronts, and title fit. The Observe receipt corroborates those scores and the first-attempt status. |
| Mechanics-seen | 0.5 | T204 Phase A §1.2 documents firsthand frame inspection and timed sub-beats for grid growth, title reveal, hold, and handoff. It leaves the separate viewing of the archived source in continuous motion undocumented. |
| Variables-extracted | 1.0 | T204 Phase A §1.3 identifies content, geometry, timing, palette, typography, direction, density, growth-front shape, and the partial-row lag. |
| Guidance-carried | 1.0 | T204 Phase A §1.6 explains the scope of A1.2 and A5 for a fixed lattice and a typeset title, and carries forward opaque-band separation and strict grid-before-title sequencing. |
| Consumer-named | 1.0 | T204 Phase A §1.5 names the DLC opener’s title landing and the DLC assembler’s diagram/count-board containers. |

**Gate gap — Continuous-motion viewing.** Observe needs a firsthand playback record for the archived segment, confirming the growth and fade, band entry, title reveal, and handoff against the sampled frames. The call requires this evidence at Observe exit. The filed `item-T204-codex-observe-return.md` records media probes and still inspection. No owner-only input is identified.

**Plan carry-forward once cleared.** Preserve the source count as **538 ±1** and the constructed default as **538 = 32 × 16 + 26**. Keep the JPEG-derived palette and band geometry labeled as estimates. T204 Phase A §§1.7 and 3 record both limits.

**Limits** — This text-only judgment assesses the filed record. Continuous playback by the seat remains unconfirmed.

**BODY-WRITE: none (read-only run)**. Return for Cycle 037 `RUN.md` §2b, containing T204’s verdict, scores, primary classification, and named gaps.
tokens used
49,088
**T204 — RETURN-TO-OBSERVE · Primary classification — MECHANICS-UNSEEN**

| Dimension | Score | Evidence |
|---|---:|---|
| Queue-state-priced | 1.0 | `RUN.md` §1 records this cycle’s queue read and the A3 ownership split. `TECHNIQUES.md` line 143 supplies OWED #95 beyond the last filed queue row. T204 is a first attempt. |
| Prior-scores-read | 1.0 | T204 Phase A §1.4 cites the filed T53, T82, and T99 scores and carries forward their cures for CONFIG-driven scheduling, measured growth fronts, and title fit. The Observe receipt corroborates those scores and the first-attempt status. |
| Mechanics-seen | 0.5 | T204 Phase A §1.2 documents firsthand frame inspection and timed sub-beats for grid growth, title reveal, hold, and handoff. It leaves the separate viewing of the archived source in continuous motion undocumented. |
| Variables-extracted | 1.0 | T204 Phase A §1.3 identifies content, geometry, timing, palette, typography, direction, density, growth-front shape, and the partial-row lag. |
| Guidance-carried | 1.0 | T204 Phase A §1.6 explains the scope of A1.2 and A5 for a fixed lattice and a typeset title, and carries forward opaque-band separation and strict grid-before-title sequencing. |
| Consumer-named | 1.0 | T204 Phase A §1.5 names the DLC opener’s title landing and the DLC assembler’s diagram/count-board containers. |

**Gate gap — Continuous-motion viewing.** Observe needs a firsthand playback record for the archived segment, confirming the growth and fade, band entry, title reveal, and handoff against the sampled frames. The call requires this evidence at Observe exit. The filed `item-T204-codex-observe-return.md` records media probes and still inspection. No owner-only input is identified.

**Plan carry-forward once cleared.** Preserve the source count as **538 ±1** and the constructed default as **538 = 32 × 16 + 26**. Keep the JPEG-derived palette and band geometry labeled as estimates. T204 Phase A §§1.7 and 3 record both limits.

**Limits** — This text-only judgment assesses the filed record. Continuous playback by the seat remains unconfirmed.

**BODY-WRITE: none (read-only run)**. Return for Cycle 037 `RUN.md` §2b, containing T204’s verdict, scores, primary classification, and named gaps.
