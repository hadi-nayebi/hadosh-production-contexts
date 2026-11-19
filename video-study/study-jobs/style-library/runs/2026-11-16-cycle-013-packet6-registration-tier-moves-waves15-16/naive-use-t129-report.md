# Naive-Use Test Record — "evidence-board composition" (Grow With Kaz packet)

Cold reader. No prior exposure to this library. Timing started when I began reading the task.

## (a) Path taken

1. **INDEX.md** — opened first, read in full. Used it to identify the specimen: Packet #6 = "I Made a Full Documentary Using ONLY Claude AI (No Editing!)" — Grow With Kaz, techniques **T113–T131** in library numbering (packet-local P6-T01..T19). INDEX's "How a production job uses this index" step 1 directed me to TECHNIQUES.md. (INDEX also says "Start [at VIEWS.md] if you are a production job" — I followed step 1 instead; see confusion (d)4.)
2. **TECHNIQUES.md** — opened second, read from the top. Used the **Locator line** at the top ("T113–T131 = P6 (section 'Packet #6 techniques')") and the **Tier register** table. The first read was capped at 50 KB before reaching the Packet #6 entries, so I searched the file for the exact term `evidence-board` / heading `T129`.
3. **TECHNIQUES.md, Packet #6 section** — re-read at the Packet #6 techniques heading (T113–T131), scanning entries T113→T131 in order until the exact heading **"T129 — Evidence-board composition (map + route + exhibits) (P6 T17)"**. Read its three lines (Mechanics / Feeds) in full. At this point I had all six answers.
4. **VIEWS.md** — opened third (verification only), searched for `T129` / `evidence-board`; found one line in the Diagrams view confirming tier, queue position, and timestamps.
5. **ASSETS.md** — opened fourth (verification only), searched for `T129` / `evidence-board`; **no hit** — this technique has no asset entry, which is consistent with it living as technique machinery in TECHNIQUES.md.

Total steps: 7 tool calls (5 reads, 2 in-file searches).

## (b) Elapsed time

- **~150 seconds (best honest estimate)** from starting the task to having all six answers — i.e., through step 3 above (4 tool calls: INDEX read, TECHNIQUES read, in-file search, Packet #6 section re-read).
- ~60 further seconds on the VIEWS/ASSETS verification in steps 4–5. I cannot time to the second; the estimate is counted from tool calls and reading volume (INDEX in full, the TECHNIQUES header + tier register + ~19 Packet #6 entries).

## (c) The six answers

1. **Library technique number / packet-local number:** **T129** — packet-local **P6 T17** (namespace [PRD], the embedded documentary's craft). Heading verbatim: "T129 — Evidence-board composition (map + route + exhibits) (P6 T17) [PRD] ◆ — OWED #63".
2. **One-line mechanics (entry's own terms):** "the assassination sequence is composed as an evidence board — a period map as the ground, a red route line drawn across it, portrait cards pinned at their story positions, a typed note card with a dashed route, the car photograph stamped with a red FAILED over the first attempt, and a period newspaper front page as an exhibit. The argument is spatial: the viewer reads the plot off the board."
3. **Feeds (container view):** **diagram** — only. ("Feeds: diagram")
4. **Packet timestamps:** **P6 @ 06:09–07:38** (VIEWS.md prints the same span as "6:09–7:38").
5. **Exact evidence frame filenames cited:** **ev/t95.jpg, ev/t425.jpg, ev/t435.jpg**
6. **Tier and recreation obligation:** **DESCRIBED — OWED #63**. It carries a recreation obligation at **queue position #63** (one of packet #6's six OWED techniques, queue #59–#64, per the tier register; confirmed on the T129 heading itself and on its VIEWS.md line).

## (d) Confusion, misleading points, backtracks

1. **TECHNIQUES.md outgrew a single read (backtrack).** My first read of TECHNIQUES.md was capped at 50 KB and stopped mid-Packet-#3, well before Packet #6. I had to fall back on the file's own Locator line and an exact-term search, then re-enter the file at the "Packet #6 techniques" section heading. Without the Locator, a cold reader has no way to know the target sits ~620 lines in.
2. **The tier register groups six techniques into one row (counting risk).** The register lists "T122, T123, T124, T128, T129, T130 — DESCRIBED — OWED #59–#64" with the six names in prose ("headline-card grammar #59 · step-card segmentation #60 · strikethrough negation list #61 · title-card chaptering #62 · evidence-board composition #63 · vintage 2D diagram animation #64"). The T-numbers skip T125–T127, so mapping name→queue number requires careful counting; my inference "evidence-board = #63, therefore in the T129 slot" was only confirmed when I reached the T129 heading, which prints "OWED #63" itself. A reader who miscounts the prose list gets the wrong queue position.
3. **Two near-duplicate neighbours (mislead risk).** (i) **T131 "The match made visible"** — its mechanics (portrait on the left, connector line, scene list on the right) also reads like an "evidence board," and it was the first mechanics text my search surfaced adjacent to the target; only the exact heading name separates it. (ii) **T127 "Archival-photo treatment"** shares the **same timestamp span (06:09–07:38)** and exhibit language ("Photographs as exhibits, not illustrations") — same window, different technique. The timestamp alone does not disambiguate T127/T129.
4. **Conflicting entry advice in INDEX.md.** INDEX says both "Start there [VIEWS.md] if you are a production job" and, in its numbered how-to, "1. Find the technique in TECHNIQUES.md." I followed the numbered how-to. In hindsight VIEWS.md was the faster surface for this task: its single T129 line carries tier + OWED #63 + timestamps in one row — but it does **not** carry the mechanics text, the packet-local number (P6 T17), or the frame filenames, so TECHNIQUES.md is still required for a complete answer.
5. **Minor formatting inconsistency.** The same span is printed "06:09–07:38" in TECHNIQUES.md and "6:09–7:38" in VIEWS.md. Same span, but a cold reader must pause to confirm they are identical.

No files were edited.

---
**Runner's verdict (style-library Cycle-013, INSTRUCTION §5.2): FAIL — ~150 s against the <60 s bar, all 6 answers correct.** Failing step: TECHNIQUES.md register scale — the cold reader's first read capped at 50 KB before Packet #6, forcing a locator + search + section re-entry path. Local fixes applied in this same cycle: (1) VIEWS.md P6 timestamp formats normalized to TECHNIQUES' zero-padded form (06:09–07:38); (2) the grouped P6 OWED tier-register row split into six individual rows so name→queue mapping needs no prose counting. Structural cure (register split by container family per INSTRUCTION §8, and/or the samples board) is charged as the next cycle's Plan product in this cycle's Condense — the register now stands at 131 entries and the naive-use trend has failed on scale twice (Cycle-011 61 s · Cycle-013 ~150 s).
