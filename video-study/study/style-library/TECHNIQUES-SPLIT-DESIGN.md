# STYLE LIBRARY — TECHNIQUES SPLIT DESIGN

_Design only — drafted 2026-11-16, style-library Cycle-014 (Execute step E1), executing INSTRUCTION §8 and Cycle-013's Condense charge. The migration itself is the next library cycle's charged Execute; this file is the plan that cycle executes against. Owner: style-library job. Status: **MIGRATED — executed 2026-11-16 by style-library Cycle-015** (seven family files generated and censused: 165 canonical entries exactly once after packet #8's registration, 40 pointer lines; largest family file techniques-diagrams.md at 31,371 B, under one capped read; TECHNIQUES.md shrunk to the governance surface at 31,131 B). The design text below stands as the executed plan's record._

## 1. Diagnosis (measured, not assumed)

- TECHNIQUES.md stood at 91,819 B / 706 lines / 131 entries at Cycle-014's Observe, and grows to 144 entries this cycle.
- The naive-use test — a cold reader, library surface only, target <60 s — has failed on register scale twice: 61 s at 112 entries (Cycle-011) and ~150 s at 131 entries (Cycle-013). Both times every answer was correct; both times the failing step was the same: a single capped read of TECHNIQUES.md (~50 KB) stops mid-Packet-#3, before the target, and the Locator + exact-term search rescue correctness but not the clock.
- Conclusion: the register's UNIT is wrong. One file holding every entry cannot be read whole by the reader it exists for. §8 names the split axis: by container family.

## 2. Form — what the register becomes

- **TECHNIQUES.md becomes the governance surface only:** header counts (by tier, never merged) · packet keys · the Locator · the tier register (every technique's tier + evidence + obligation mark). No entry text. Target: small enough to read whole in one capped read, permanently — entries never return to it.
- **Entries move to seven family files**, one per consumer view (the VIEWS.md families, which are the containers production actually designs):
  - `techniques-openings.md`
  - `techniques-transitions.md`
  - `techniques-diagrams.md`
  - `techniques-word-animation.md`
  - `techniques-endings.md`
  - `techniques-thumbnails.md`
  - `techniques-cross-container.md`
- **Canonical home rule:** an entry's canonical home is the family of its FIRST-named Feeds field. The full entry (mechanics · Feeds · timestamps · frames) lives there, once.
- **Pointer rule:** in every other family the entry feeds, it appears as a one-line pointer only — technique number · name · tier · packet + timestamps (`P# @ range`) · canonical family file (amended in Cycle-014 Condense on codex-plan-review cure C1: a pointer without its evidence coordinates is a second hop away from the frames, which reduces the owner's evidence-one-step-away requirement). No duplicated entry text anywhere: duplicated text is drift by construction, and a tier move would have to be edited in N places.
- **Tier on every entry (amended, cure C2):** every canonical entry prints its tier explicitly (heading suffix or a Tier line, OWED mark included) — an entry that carries no tier in its own lines lets a reader mistake DESCRIBED for substrate. Each family file's header restates its own tier counts and the standing rule: only RECREATED is substrate.
- **Family file headers (amended, cure C1):** every family file header carries the packet keys (P1…Pn → packet directories) — the keys do not live only in TECHNIQUES.md while the entries live elsewhere.
- **Locator after the split (amended, cure C3):** the post-split Locator in TECHNIQUES.md maps each T## to its canonical family file, and each tier-register row names the technique's canonical family — the governance surface routes, it does not strand.
- **Entry form is unchanged** (three lines: heading · mechanics · Feeds with timestamps + exact frame filenames) — the split changes where entries live, not what an entry is. Every existing pointer into TECHNIQUES.md sections (packets, recreation scores, run records) is re-pointed by the migration's pointer census, not left dangling.
- **ASSETS.md is not split** (26 KB, no measured cold-reader failure) — splitting without a measured failure is ceremony.

## 3. Derivation re-pointing

- VIEWS.md derives, as now, from the entries' Feeds fields + ASSETS.md consumer lines — after the migration its source is the seven family files' canonical entries instead of TECHNIQUES.md. The derivation rule (Amendment A5: regenerated in the same cycle as any registration, Feeds change, or tier move) is unchanged; only the source path changes, and VIEWS.md's header will say so.
- INDEX.md's routing changes one step: production reads VIEWS first (unchanged), then the FAMILY FILE for the container in hand, then the packet. INDEX prints that route.
- The tier register stays in TECHNIQUES.md, so a tier move touches exactly two places: the register row + the entry's canonical family file (plus its pointer lines' tier text in the other families it feeds — counted by the migration's census instrument, below).

## 4. Migration sequence (the next library cycle's Execute, in order)

0. **Feeds-label normalization (amended in Cycle-014 Condense, review finding D2):** the register's Feeds vocabulary is not yet the clean seven families — variant labels stand in the current register (`opening (hook)` · `opening (series design)` · `thumbnail (one-off)` · `cross-container` vs `cross-container (system)` · `all containers (system)`). Before generation, census every Feeds label variant with its count and normalize each to one of the seven families, printing the mapping in the migration RUN; the one priced exception: `all containers (system)` entries take cross-container as canonical home with NO per-family pointers (they feed every family by definition; seven pointers per system entry is noise, and the cross-container file is where systems live).
1. Generate the seven family files mechanically from the normalized register: parse every entry's Feeds field; write the full entry (with its tier printed, per §2) to its canonical family file; write pointer lines (with packet + timestamps, per §2) to the other families it feeds.
2. Census the generation before anything is deleted: every T## in the register appears exactly once as a canonical entry across the seven files; pointer count equals the counted multi-Feed placements; tier text on every pointer AND every canonical entry matches the register (amended, cure C2); every T## resolves to a family file via the new Locator (cure C3). A census miss stops the migration here, with the register untouched. The migration's Verify additionally runs a ten-word + phone-width spot check on the family files' headers and pointer lines (review finding F3: no library face is exempt from the fleet's face hygiene).
3. Shrink TECHNIQUES.md to the governance surface (§2), with a printed pointer to each family file and the canonical-home rule stated in its header.
4. Re-point inbound pointers: grep the lane's surfaces (INDEX · VIEWS · ASSETS · GROWTH headers · packets' cross-references in the register itself) for TECHNIQUES.md section references and update each to its family file; the pointer census (Verify) then runs over the new surfaces.
5. Regenerate VIEWS.md from the family files in the same cycle (A5) and run the views-derivation cross-check against the new sources.
6. Naive-use test on a technique whose canonical home is the LARGEST family file. **Pass condition for the split itself:** that file reads whole in one capped read AND the target lands <60 s. If the largest family still exceeds one capped read, the fallback fires in the same migration cycle: that family splits further by packet (family file per packet section), and the test re-runs.

## 5. What this design refuses

- **A packet-order split** (one file per packet): keeps entries grouped by specimen, not by the container a production reader is designing — and the largest packet sections recreate the single-read failure inside a smaller file.
- **A samples-board-first cure:** the board (samples-board-DESIGN.md, drafted Cycle-009) is HQ's owed build debt and remains separately named; the register must be readable as plain files with no board standing.
- **Entry duplication across families:** priced above — drift by construction.
- **Splitting ASSETS.md or VIEWS.md in the same act:** neither has a measured failure; one structural change per cycle keeps its Verify honest.

## 6. Review

This design is a board-adjacent surface change: per Cycle-013's priced return condition, codex-plan-review fires on it in Cycle-014's Condense, and its verdict + disposition print in that cycle's RUN.md. The migration cycle inherits this file as its Plan's working memory; a migration that deviates from §4's sequence records the deviation in its own register, by name.

**Review outcome (Cycle-014 Condense, raw return in that cycle's run directory):** the review answered (1) EXACTLY AS ASKED? NO — the split axis is §8's own, but evidence proximity and tier co-location failed as drafted · (2) ANYTHING DIFFERENT? YES — pointer lines dropped packet+timestamps, Feeds variant labels unpriced, family headers unspecified, the post-split Locator's target unspecified, no ten-word/phone check · (3) ANY POINT REDUCED? YES, three — evidence one step away (50 of 144 multi-Feed techniques), tier-on-every-line, governance-surface routing. **Disposition: APPLIED** — cures C1–C3, the normalization step (§4 step 0), and the face-hygiene check (§4 step 2) are amended into §§2/4 above in the same Condense, so the migration inherits the cured design; the claim that the design meets the owner's expectation stands only as amended. The review's supporting measurement is also carried: by first-named Feeds, the largest family (diagrams ≈19.3 KB · transitions ≈18.1 KB) sits far under one capped read, so §4 step 6's pass condition should hold and the packet-split fallback is unlikely to fire. One review point is carried unamended by name: its A5-wording note (F2) — the derivation rule's text lives in INSTRUCTION Amendment A5, and amending instruction wording is a Condense act for the migration cycle, which re-points the derivation anyway; it is charged there, not dropped.
