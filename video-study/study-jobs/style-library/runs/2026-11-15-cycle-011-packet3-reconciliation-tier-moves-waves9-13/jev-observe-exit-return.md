# jev-observe-exit — RAW RETURN — style-library Cycle-011
_Fired per guards/jev-observe-exit.md §2 (instruction executed verbatim) against the §3 context: RUN.md §1 Observe inventory (Cycle-011 run directory) · TECHNIQUES.md header counts + tier register lines for the touched techniques · CONSUMPTION.md pull count · GROWTH.md latest throughput line (Cycle-010 update). Hand-off entries' characterisations were NOT read as evidence — HQ.json entries treated as pointers only. Disk spot-checks performed by this judge: the five video-digests directories, the SOM packet's pdf/md state + ev count, the P3 packet's ev count and cited frames, QUEUE.md's live count, and recomputation of every tier-move average from its cited scores.md._

## Verdict class
**RETURN-TO-OBSERVE**

## Dimension profile (0–1)
- landing completeness: **0.65**
- tier-state fidelity: **0.95**
- feeds-and-views awareness: **0.90**
- consumption honesty: **1.00**
- drought/demand context: **0.90**

## Primary defect class
**UNPRICED-LANDING** — the cycle's sole IN FLIGHT packet is inventoried at a disk state that is not its disk state: its state changed and the change is nowhere named in the inventory (the carried-forward "gap unchanged" line has the character of STALE-COUNT, but the priced failure is §2(1)'s: a packet's landing state counted without the disk verification that stands at judging time). Floor breached: landing completeness 0.65 < 0.7 → RETURN-TO-OBSERVE. Per §4, a gap in dimension (1) may never ride as a gap in any case.

## Dimension findings

### (1) Landings priced from the packets themselves — 0.65 — RETURN DEFECT D1
- New packets: NONE claimed. Spot-check confirms exactly five packet directories on disk under `hidden_files/study/video-digests/` (P1 `2026-11-13-ig-dfk4sfvvjjq` · P2 `2026-11-14-yt-rkb3ig46sqo` · P3 `2026-11-14-yt-o1fsb1nyewi` · P4 `2026-11-15-yt-jkdbk8qfcyY` · SOM `2026-11-14-som-six-transitions`) — the same five as Cycle-010, as the inventory states. No packet is counted on a hand-off entry's word.
- **D1 — the IN FLIGHT packet's state is misstated, and the misstatement is the inventory's centre, not its edge.** The inventory's SOM line reads: digest.pdf MISSING · digest.md MISSING · ev/ 18 .jpg, "Gap unchanged — keeps its IN FLIGHT row," claimed as "re-probed this cycle." This judge's disk probes found:
  - ev/ count = 18 .jpg — **matches** the inventory.
  - digest.md — **PRESENT** on disk (mtime 2026-11-15 17:05:33 EST, i.e. inside this cycle's own window; Cycle-010's judge verified it absent one cycle ago, so this file landed between cycles or during this one).
  - digest.pdf — **PRESENT** at this judge's final probe: the directory held only `digest.pdf.tmp` at the first probe and a completed `digest.pdf` minutes later. A digestion-side landing is completing on disk *during this judging*.
  - §2(1) prices exactly this: "Packets whose state changed (in-flight → landed, scores filed against a technique) are named with the evidence that changed them." The one packet whose state changed is inventoried as unchanged, on two of its three priced fields. Whether the cause is a probe taken minutes before the landing or a line carried from Cycle-010, the Observe product as drafted would send Plan forward pricing SOM as file-absent IN FLIGHT while its files stand on disk — Plan would not price the question this state change opens (does SOM become a registration item this cycle, or stay IN FLIGHT pending digestion's adoption/hand-off, and on which named ground?). That question belongs to Observe/Plan, not to Verify.
  - **Cure (Observe, before Plan opens):** re-probe the SOM directory at the moment of the amended inventory; rewrite the SOM line to its true state (pdf present · md present · ev/ 18, with the landing evidence named); and state the packet's registration ground explicitly — if it stays IN FLIGHT, the ground is adoption/hand-off state, not file absence, and the narrowed gap prints as narrowed. The packet's IN FLIGHT *conclusion* may well survive; its priced *basis* as drafted does not.
- Everything else in this dimension verified clean, and it is strong: the tier-move evidence table (priced under dimension 2), the P3 reconciliation's disk facts (P3 ev count: packet states 28, disk holds 27 .jpg — **spot-check confirms 27**; both citation frames ev/t815.jpg and ev/t910.jpg existence-verified by this judge, present), and the inventory's own bookkeeping note refusing to let two `acted` hand-offs substitute for the register's state. None of that cures D1: dimension (1) is priced on the landing inventory as a whole, and its one live packet is unpriced.

### (2) Tier state read from the register — 0.95
- Current counts read from TECHNIQUES.md this cycle, printed separately, never merged: header states 98 techniques · DESCRIBED 62 · IN PROGRESS 16 · RECREATED 20, obligation line OWED 9 of 62 (queue #37–#45) · 53 not owed — matching the inventory's Cycle-010 baseline line exactly; the register still shows the pre-move state the inventory prices from. No STALE-COUNT on the tier leg.
- Register lines confirm every priced-from state: T14 and T57 stand IN PROGRESS (attempts through practice Wave 8 only); T11 stands IN PROGRESS (attempts 1–3); T54 stands IN PROGRESS (attempts 1–2); the nine P4 techniques (T76, T81, T82, T83, T90, T91, T92, T94, T96) stand as one grouped DESCRIBED — OWED #37–#45 row.
- Every pending move was recomputed by this judge from its cited scores.md — all thirteen rows match the filed arithmetic, minima, and verdicts exactly:
  - PASS → RECREATED: T57 a3 (91+100+97+79+83)/5 = 90.0, min 79 · T14 a2 (95+92+100+87+84)/5 = 91.6, min 84 · T76 a1 444/5 = 88.8, min 80 · T81 a1 430/5 = 86.0, min 78 · T82 a1 436/5 = 87.2, min 80 · T83 a1 453/5 = 90.6, min 80 · T90 a1 442/5 = 88.4, min 76 · T94 a1 449/5 = 89.8, min 82 — all clear the bar (avg ≥85, min ≥70) in their scores.md.
  - FAIL → IN PROGRESS (first attempts, correctly not RECREATED): T91 a1 382/5 = 76.4, min 62 · T92 a1 412/5 = 82.4, min 76 · T96 a1 369/5 = 73.8, min 50.
  - FAIL deltas, tier unchanged: T11 a4 405/5 = 81.0, min 72 (+7.0) · T54 a3 376/5 = 75.2, min 58 (−0.8, WHY filed in its scores.md as the inventory states).
- Projected counts recompute cleanly: DESCRIBED 62 − 6 (→RECREATED) − 3 (→IN PROGRESS) = 53, OWED 9 − 9 = **0** · IN PROGRESS 16 + 3 − 2 (T57/T14 exit) = 17 · RECREATED 20 + 8 = 28 · techniques 98 unchanged. No move is sourced from a lane report, a scores summary, or memory — each carries its exact scores.md path in the inventory table (the Cycle-010 citation-form note is cured). No TIER-FROM-REPORT.

### (3) Feeds state read — 0.90
- The inventory states no Feeds field changes this cycle, and TECHNIQUES.md entries do carry their Feeds fields (98 `Feeds:` fields counted in the register pass). The Amendment A5 duty is named in the inventory itself as a same-cycle obligation carried into the Plan checklist — visible at Observe, not discovered in Verify.
- The changed set is completely enumerated this cycle — "13 techniques change tier/delta text (8 → RECREATED · 3 → IN PROGRESS · 2 delta-only)" = 13, exactly the evidenced set; Cycle-010's G1 enumeration defect (delta-only techniques omitted) is cured in form.
- Minor deduction (0.10): the "up to 6 asset lines may be added" are not priced against VIEWS.md — if any candidate asset feeds a consumer view, its regeneration scope is unstated. This sits in dimension (3), may ride as a gap, and is named G1 below; it is not the return cause.

### (4) Consumption honesty — 1.00
- CONSUMPTION.md read this cycle: "Pulls recorded: 0", table empty ("_None yet._"). The inventory prints consumption 0 beside the production counts (98 techniques · projected 28 RECREATED), states no production Observe citation was read this cycle, and prints zero as zero — never omitted, never softened. No pull is claimed from the library's own naive-use test or any lane self-test. No PHANTOM-PULL. The standing baseline (consumption 0 through the library's history) is stated as fact, not routed around.

### (5) Drought and demand context — 0.90
- No silent drought and no SILENT-DROUGHT: the inventory states plainly that no new packet landed, and names the queue state read from QUEUE.md — spot-check confirms live count **7** with head = row #1, School of Motion, IN FLIGHT in digestion (QUEUE.md's Cycle-004 recount line), and owner sends #3/#4 digested and adopted.
- GROWTH.md's latest (Cycle-010) throughput line is priced with direction, not neutral counts: first attempts 9 owed ≈0.2 d · practice pool 16 ≈0.7 d (first rise). The inventory prices this cycle's effect on both pools — first attempts 9 → 0 (queue CLEAR), practice pool 16 → 17 with its composition named (T91/T92/T96 enter · T57/T14 exit · T54/T11 stay) — and charges the direction into the GROWTH update.
- Ownership is printed as two facts with two owners (SOM resumption = video-digestion's act; queue depth = scouting's) — more precise than Cycle-010's split naming, and this judge's D1 finding reinforces it: the resumption is visibly digestion-side and in progress on disk right now. Minor deduction (0.10) only because the inventory's drought line inherits D1's stale SOM basis; once D1 is cured, this dimension's line must be re-read against the amended SOM state (a landed-but-unadopted packet is a different demand fact than an absent one).

## Gaps named (each with its carrying step — D1 returns; it does not ride)
- **D1 (landing completeness, dim 1) — RETURN CAUSE, primary class UNPRICED-LANDING:** SOM inventoried as pdf MISSING · md MISSING · "gap unchanged"; disk at judging holds digest.md present (landed 2026-11-15 17:05:33 EST) and digest.pdf present (completed from .tmp during this judging), ev/ 18 as stated. Cure is an Observe act, before Plan opens: re-probe, amend the SOM line with the landing evidence named, and print the packet's registration ground explicitly (adoption/hand-off state vs file state). Plan may not open on the unamended line.
- **G1 (feeds-and-views, dim 3):** the up-to-6 candidate asset lines are not priced against VIEWS.md. Carried by: the Plan's asset step + the A5 VIEWS regeneration step must state, per registered asset, whether it touches a consumer view, and regenerate in-cycle if it does.

## Disposition reminder (per §5 of the call definition)
This verdict is advisory. The runner reviews it, applies it or sets it aside with the miss recorded in Condense; the verdict, its primary class (UNPRICED-LANDING), and its disposition land in RUN.md either way. Dimension profile to print in RUN.md beside the gate line: landing 0.65 · tier fidelity 0.95 · feeds/views 0.90 · consumption 1.00 · drought/demand 0.90. Note for Condense: the tier, consumption, and demand legs of this inventory are the strongest the call has priced (13/13 scores recomputed exact; OWED→0 projection clean); the return is narrow — one packet's state line, cured by one re-probe — and the concurrent SOM landing that caused it is itself forward movement the amended inventory should record as such.
