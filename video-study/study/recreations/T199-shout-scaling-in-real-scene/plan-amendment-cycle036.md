# Plan amendment — T199 · Cycle 036 Wave 33 (filed BEFORE any build script, A9.2)

Authority: RUN.md §2b (jev-plan-exit REVISE, APPLIED in full) + jev-observe-exit charges. This amendment cures every §2b charge; the item record `item-T199-observe-plan.md` is NOT retro-edited (A8). Where this amendment and the Plan differ, this amendment governs Execute.

## 1. Validator — at-peak exception + plate-owned window
- Line-ownership validator predicate (ii-a) at-peak exception: for a line with `entryMode:'at-peak'`, the entry predicate is `entryMs = onsetMs + attackMs` evaluated against the line's FIRST word's envelope peak instant — i.e. L0 is lawful iff `L0.entryMs (800)` equals its prescribed at-peak entry defined as: the line becomes visible already peaked, with its envelope's hold phase starting at entryMs; formally the validator checks `entryMs >= firstOnsetMs` AND `entryMs <= firstOnsetMs + attackMs` for at-peak lines (the attack is inside the unobserved fade-in), while the ORIGINAL predicate `entryMs <= firstOnsetMs` is retained for `entryMode:'pre-visible'` lines only.
- Partition completion: the interval **[0, 800) is a scene-plate-owned window** — the scene plate (backdrop + no line) owns buildMs [0,800); the governed partition is therefore: plate-only [0,800) · L0 [800,1100) · L1 [1100,4200) · L2 [4200,6950) · L3 [6950, 8500+endHold). No gap, no overlap; the [−500,0) segment handle precedes buildMs 0.

## 2. CP1 — single release equation + twin
- CP1's release uses ONE equation, the cubic form: `env(x) = 1-(1-x)^3`, x = clamp((t - (entryMs+peakHoldMs)) / releaseMs, 0, 1) during release; scale = 1 + (peakScale-1)*(1-envReleaseProgressAsEnvelopeValue) where during release the envelope value = (1-x)^3... precisely: envelope value during release = `(1-x)^3` with x=(t-950)/500. The linear bound in the Plan's CP1 row is WITHDRAWN.
- CP1 asserts: (a) at entry 800: visible, color=speakerAColor, scale ∈ [1.33,1.37]; (b) at census twin **1000 ms**: x=(1000-950)/500=0.10 → envelope=(0.9)^3=0.729 → scale = 1+0.35*0.729 = **1.255** (expected ≈1.255), asserted in band [1.22,1.42].

## 3. CP2/CP3 — dual instants
- CP2 asserts at BOTH the census twin **2000** AND attack completion **1900** (your onset 1700+attack 200): at 1900 scale ∈ [1.42,1.58] (peak state); at 2000 scale ∈ [1.42,1.58] still (hold phase: 1900+peakHold 150 → hold ends 2050, so 2000 is inside hold at full peak).
- CP3 asserts at BOTH census twin **3000** AND attack completion **2900** (purpose 2700+200): at both, scale ∈ [1.42,1.58] (hold ends 3050).

## 4. CP6 swap arithmetic — corrected
- Specimen: Drill onset 5800 + attack 200 = **6000** ✓. Swap: onset 5200 + 200 = **5400** (the Plan verification text's "5600" was an arithmetic error; the CP table's 5600 in the swap sentence is corrected to 5400 everywhere). The harness evaluates CP6's instant from the CONFIG expression `lines[2].words[6].onsetMs + attackMs` — never a literal.

## 5. Positive swap — COMPLETE replacement CONFIG + negative predicate
The positive swap replaces the ENTIRE `lines` array (all four lines, every word object) plus `speakerAColor:'#3a86ff'` and L2-Drill-equivalent timing change. Full replacement lines (same entryMs/entryMode/envelope structure as specimen unless noted):
- L0 speaker A, entryMs 800, at-peak: [{text:'HALT!', onsetMs:600, peakScale:1.35, peakWeight:850}]
- L1 speaker A, entryMs 1100, envelope {releaseMs:300}: Who 1200/1.0 · gave 1400/1.0 · your 1700/1.0 · squad 2000/1.0 · **orders 2700/1.50/850** · in 3150/1.0 · this 3300/1.0 · **sector? 3750/1.60/850**
- L2 speaker B, entryMs 4200: We 4450 · follow 4600 · the 4800 · captain's 5150 · **written 5200 (the TIMING SWAP value; specimen-analog peak slot) /1.45/850** · orders, 5550 · Sergeant. 6400. (Swapped sentence: "We follow the captain's written orders, Sergeant." — 7 words; written is index 4. CP6-analog instant = written.onsetMs + attackMs = 5200+200 = 5400.)
- L3 speaker A, entryMs 6950, envelope {releaseMs:150}: **Then 7300/2.00/880** · prove 7500/1.0 · it, 7600/1.0 · **soldier! 7800/1.50/850**
Expected checkpoint states under the swap: CP2-analog (orders attack completion 2900): orders scale ∈[1.42,1.58], color = swapped speakerA #3a86ff; CP6-analog at 5400: written scale ∈[1.38,1.55], color = speakerBColor (unchanged #f59e2d); palette check: L0 word color at 800 = #3a86ff; plate/scenePlate values unchanged (deep-equal to specimen).
- **Negative case predicate (named):** the rejection CONFIG sets L3.words[0].onsetMs = 6300, violating predicate **`onsetMs < entryMs`** for a pre-visible line — specifically validator predicate P-ENTRY: *every word's onsetMs must be ≥ its line's entryMs* (6300 < L3.entryMs 6950). Expected: build prints CONFIG-REJECTED naming `onsetMs < entryMs` (P-ENTRY, line L3) and animates nothing. (The Plan's rationale — precedes L2 activity — is the same violation seen from the schedule side; the NAMED predicate is P-ENTRY as stated.)
- CP11 uses the SAME CONFIG-derived expression as CP9: evaluation instant = `lines[3].words[0].onsetMs + attackMs` (= 7500 specimen), not a separate literal.

## 6. Defaults supplied (each labeled)
- `fontStack: "'Roboto Flex','Liberation Sans',Arial,sans-serif"` — DESIGN CHOICE (variable-font first; Liberation Sans is the seat's measurable stand-in).
- `platePadXPct: 2.2` (% of stage width, each side) — ESTIMATE from census plate extent. `platePadYPct: 1.6` (% of stage height). `plateRadiusPx: 6` — DESIGN CHOICE.
- `scenePlate`: {gradientStops: [{at:0,color:'#3a4149'},{at:0.55,color:'#2b3036'},{at:1,color:'#1d2126'}], columns: [{xPct:18,wPct:3.2},{xPct:38,wPct:3.2},{xPct:62,wPct:3.2},{xPct:82,wPct:3.2}], columnColor:'#454d57', silhouetteLeft:{xPct:6,wPct:26,hPct:62,color:'#14171b'}, silhouetteRight:{xPct:70,wPct:24,hPct:66,color:'#101216'}, rowCount:5, rowSpacingPct:7.5, rowColor:'#22262c', plateMaxLuminance:0.35} — geometry ESTIMATE from census frames; palette DESIGN CHOICE under the luminance ceiling.
- Header-toggle key: `showHeaderFurniture: false` — DESIGN CHOICE (departure table: furniture excluded by default).

## 7. Comparison — media-end behavior + instrumented check
- Media-end behavior: the comparison's recreation clock is slaved to the segment's currentTime; when the segment ends (9.0 s → buildMs 8500), the recreation FREEZES on the terminal governed state (L3 both words spoken color, base scale) — the standalone 1200 ms endHold is a standalone-clock state only and does NOT extend the comparison past the segment end; comparison play/pause/seek operate on the segment element, restart seeks to 0.
- Instrumented comparison check (filed in build-record): scripted observations of play (currentTime advances), pause (frozen), seek to 5.0 s (recreation state = L2 Drill-peak state per slaved clock), offset correctness (buildMs = segmentTimeMs − 500 verified at two sample times), terminal frame (at segment end: L3 terminal state as above).

## 8. Exit departure line (added to the departure table)
| Observed cut at window end (∈(75.0,76.0) to focus-group room) | Represented by the segment end itself; NO exit animation is built | The cut is the specimen's edit, not the technique; the recreation's governed interval ends at 8500 on the L3 terminal state |

## 9. Envelope labels + coincidence phrasing
- `attackMs 200`, `peakHoldMs 150`, `releaseMs 500` (and line overrides 300/150) are design **ALLOCATIONS** inside the census brackets (attack ≤250 ms, release ~400–600 ms observed brackets) — never measurements.
- Peak/color coincidence is phrased as a **shared trigger**: color flip and scale rise START together at onsetMs (one trigger); maximum scale lands later, at onsetMs+attackMs. No simultaneity of maxima is claimed.
