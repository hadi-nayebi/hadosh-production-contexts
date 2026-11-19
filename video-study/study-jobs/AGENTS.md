# AGENTS.md — study-jobs/ (VIDEO STUDY lane seat)

**Seat role (HQ founding charge, 2026-11-13 ~22:49 EST):** this seat is the VIDEO STUDY lane. It continuously studies videos and digests each into a PDF packet + markdown twin — style, motion-graphics techniques, goods and bads, qualities, tempo, reception/engagement — building a **style library** that production jobs (multilingual/DLC lane, studio, thumbnails) consume in their Observe phases. A packet nobody can consume is broken wiring: every packet names its consumer and the production surface it feeds.

## The funnel (owner's design, 2026-11-13 ~23:50 EST — the lane's shape)
Intake (scouting: found videos · owner sends at the top · the owner's archive, inventoried before any digestion promise) → Study (digestion: any useful lesson — storytelling, transcript, pacing, textures, tricks, techniques; PDF + twin is the reading layer) → Extraction (style-library: markdown-first assets + tiered HTML recreations) → Consumption (production jobs pull assets in their Observe phases — the pull is the point). Growth accounting lives in the library's GROWTH.md (production AND consumption side by side; growth = consumed + passing). The effectiveness-review job guards the funnel against ceremony.

## The seven jobs (each a directory-form job home in this directory)
1. `video-digestion/` — the core job: one specimen per cycle → packet under `hidden_files/study/video-digests/<date>-<slug>/`.
2. `source-scouting/` — keeps `QUEUE.md` (in this directory) fed; owner sends enter at the top.
3. `reception-analysis/` — engagement/reception, priced separately from craft.
4. `style-library/` — catalogue/index over all digests at `hidden_files/study/style-library/` + the samples-board design once several packets stand; runs the naive-use test on the library itself; enforces the catalogue tiers.
5. `recreation/` — the proof layer (owner's recreation law, 2026-11-13): parameterized HTML recreations of catalogued techniques + side-by-side comparisons + Codex scoring waves; artifacts at `hidden_files/study/recreations/`. Tiers: DESCRIBED · IN PROGRESS · RECREATED — only RECREATED is complete.
6. `effectiveness-review/` — the lane's own review duty (weekly): sole question is utility (usable AND used); verdicts USED / USABLE-UNUSED / CEREMONY per asset class; a CEREMONY verdict is a headline to HQ.
7. `practice/` — the practice loop (owner's refinement, 2026-11-13): re-attempts scored recreations (lowest score first, then stalest) to beat their filed Codex scores; deltas feed GROWTH.md; a non-beating attempt files WHY (plateau named). Recreation owns first attempts; practice owns re-attempts. Recreation obligation is UNIVERSAL for motion graphics — the queue orders, never exempts.

## Standing kernel (source: ~/AGENTS.md — pointers, never diverging copies)
Build the working memory first, through guards, and let it lead execution; verify; condense. Every job here runs bounded OPEVC cycles; briefs/crons are pointers — the steps live in each job's INSTRUCTION.md. Every run record carries the faithfulness-trace fields adopted from `hidden_files/jobs/_template/faithfulness-trace-DRAFT-2026-11-13.md` (trace table · choice log · deviation register · evidence binding · git corroboration · size discipline).

## Lane law
- Observe first, always: a packet's analysis cites frames/timestamps, never impressions.
- Goods AND bads in every packet — a study that only praises teaches nothing.
- No captions/subtitles in any produced sample, ever (fleet law).
- Production quality bar applies to anything shown to the owner; internal packets are working records, owner faces route through HQ (main chat `89aaa508-e737-4d6f-95e1-119992f5edf0`).
- Boards: each job home carries its own `HQ.json` (entries move sent → seen → acted → closed only on recorded evidence). Lane heartbeat: `heartbeat.jsonl` in this directory, one line per lane act boundary.
- Sync: these homes sync through the departments repo via the fleet's JOB-14 route like the rest of the fleet — staged is never described as synced.
- Storage: classify every artifact (contract v1, relayed 2026-11-11) — frames/clips are INTERMEDIATES inside the packet directory while the packet is being built, then the packet's cited frames are RECORDS kept with the packet; uncited bulk frames die at packet close.

## Board edits (measured 2026-11-13, three occurrences)
HQ.json is one-line JSON. Appending an entry by anchoring on the `"form"` tail inserts the entry OUTSIDE the entries array and corrupts the file. Anchor instead on the LAST entry's closing text and replace `…"}]` with `…"}, {new entry}]`. After every board edit, parse-validate all HQ.json files in the lane before reporting. Heartbeat appends via the file tool fuse lines (no trailing newline): split at the `}{` boundary and re-validate the beats after every append.

## Lessons
- 2026-11-14: sync corroboration LANDED — JOB-14 Cycle 277 (head 274fbbf3, manifest 718 keys) is the first sync carrying lane files; lane board lane-2026-11-13-003 CLOSED. From 2026-11-14, run records print corroboration against Cycle 277 + successors; the founding records' UNCORROBORATED print stands as their historical state (records are not retro-edited).
- 2026-11-13 (founding): the seed specimen (IG Dfk4sFVvjJQ) is a 198.4 s landscape AI music video (1916×1078, 30 fps), not a short vertical reel — digestion must segment long-form music video by musical/visual section, not by short-reel beats. Priced in video-digestion INSTRUCTION §3 and its Cycle-001 Condense notes.
