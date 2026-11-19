# T68 — Threshold-interpretation ladder · build record (attempt 1, Cycle 013 Wave 11)

Technique: T68 (Packet #3, Epochs in Ink, YouTube o1FsB1nyEWI) · queue #34.
Consumer: DLC assembler DIAGRAM/ENDING (pre-interpretation ladder surface) — the DLC (multilingual) production lane, via the style library.
Governing: recreation INSTRUCTION.md §0–§9 + Amendments A1/A2/A3/A5/A6 · wave RUN.md §1/§2/§2b (amended Plan + exact T68 swap govern).

## §1 Observe
- Catalogue discrepancy (repeated from RUN §1, priced, not smoothed): TECHNIQUES cites T68 at P3 @13:21–14:16 (801–856 s) with ev/t815.jpg + ev/t910.jpg, but ev/t815.jpg (viewed firsthand) shows a Christian Science Monitor press card + Lawton Chiles photo + 36–11 chip — NOT the ladder — and t910 (910 s = 15:10) lies OUTSIDE the cited window. The ladder's evidenced state is ev/t910.jpg. Segment bound to t910: 903–917 s.
- codex-observe: fired FIRST, before building — CONFIRMED-WITH-GAPS, verbatim at codex/codex-observe.md. It priced the window discrepancy, the band-count question (digest lists four bands; TECHNIQUES + t910 evidence two), and sibling arithmetic as supplied claims. Gaps G1–G5 closed firsthand below where the segment could close them.
- Evidence viewed firsthand: ev/t910.jpg (ladder card, band 2 mid-wipe "owes peopl"), ev/t815.jpg (press card — discrepancy proof), and 1 fps frames of the cut segment (f01–f14, all viewed).

### Sub-beat table (segment-relative, 1 fps sampling; segment = source 903–917 s)
| Seg time | State (firsthand) |
|---|---|
| 0–5 s | Ballot-arc board holds (T53's surface — context, NOT built); Nov 23 calendar fades in at left ~3 s |
| ~5 s | Board blurs/zooms in transition; extra calendar props flash |
| ~6 s | Ladder card present as ONE unit: title "December 1: the number" + gold rule + band 1 complete; Dec 1 calendar lower-left; diagonal sheen on card |
| ~7 s | Band 2 complete: "Mid-30s: a leader who owes people" (ev/t910 at ≈7 s catches it mid-wipe: "owes peopl" — the reveal is a horizontal wipe, hence the clip) |
| ~9 s | Band 3 present: "Van Hollen at 28: a first" — the segment's settled ladder carries THREE bands |
| 9–12 s | Full 3-band card + calendar hold |
| ~13 s | Card exits; Dec 1 calendar alone holds to segment end |

### Discrepancies filed (not smoothed)
1. Window discrepancy (above): catalogue window/frame citations do not evidence the ladder; t910 does.
2. Band-count discrepancy: RUN §2 binds the default to the two t910-evidenced bands; the segment's settled state (also firsthand evidence, ~9 s) carries a third band ("Van Hollen at 28: a first"). The digest's fourth element ("33 → 22 senators…") never appears in-window. DISPOSITION: default follows RUN §2 exactly (2 bands); the third band is proven by the §2b swap (2→3 bands render and fit measurably); the finding is filed here for the seat/style-library — a future attempt or Plan amendment can promote the evidenced third band into the default. The build carries only evidenced text in its default; no band was invented.
3. The recreation isolates the ladder act: the preceding board act (0–5 s) is T53's surface and the Nov 23 calendar is T64-family context — neither is rebuilt (§8 size discipline). The recreation's clock mirrors the segment's ladder position (cardAtMs 5800) so the comparison sync is honest.

### Variables (all CONFIG keys)
card{title} · bands[{range,meaning}] · calendar{enabled,month,day,weekday} · palette{card,ink,accent,bg,calHead,calHeadInk,calPaper,calInk} · stage{width} · layout{...} · geom{...} · type{...} · cardAtMs · enterMs · enterScaleFrom · firstBandDelayMs · bandMs · bandAnimMs · holdMs · fadeMs · durationMs.

### Plateau priced (A2, per §2b amendment)
Family: T57 FAIL 73.6 (min 58) · T59 PASS 86.8 (min 70) · T38 PASS (practice) 86.8. Expected stuck lens: readability (band text fit — the specimen's own band 2 clips mid-word; this build fits the FULL text measurably, see fit-table.md).

## §2 Plan (as amended in RUN §2b — executed exactly)
Construction: DOM ladder card, bands reveal one by one, card lands as ONE unit (T57 cure: one entrance progress drives shell+title+rule+calendar; bands fade after), companion calendar page. Rejected: full scene rebuild (card is the technique) · typewriter per-character (bands reveal per band). Seekable render(t) via window.__T68.seek; logic reads ONLY CONFIG; allowlisted ?config= overrides (hex-validated colors, finite numbers, unknown keys dropped).

## §3 Execute
- Segment: ffmpeg -ss 903, 14 s, libx264+aac faststart → segment.mp4. ffprobe: duration 14.000000 s · h264 1920×1080 + aac · 3,810,878 B · sha256 aca5bbfc779553d26f48c8ff501fdc60231fda14690f6e523450d3b068e82a3f.
- recreation.html + comparison.html built (comparison: ORIGINAL labeled "ORIGINAL — Epochs in Ink @ 903–917 s" + live recreation, ONE synchronized control set slaving the recreation to the video clock, phone-width stacking).

## §5 Own checks (recorded, Node harness + greps on the final build)
(a) EXACT §2b swap — card.title → "Swap date: the number" · bands → [{50+, "swap band one proves config"},{Low-20s, "swap band two proves config"},{Teens, "third band proves the list is data"}] (2→3) · bandMs 700→300 · holdMs 5000→2200 · palette.accent #e8b62a→#2a7f62 · calendar.day "1"→"9". RESULT: PASS — schedule bandStarts [6100,6400,6700] follow swapped bandMs (band starts anchor to the card entrance, wave cure below); holdEnd 9250 follows swapped holdMs; 3 bands render, each 2 wrapped lines at 14 px, card bottom 192.25 ≤ 203 stage height; accent/day/title all rebind from CONFIG; zero specimen band text survives in the swapped config. (Figures re-verified on the final post-cure build, sha 110a25fc….)
(b) Purity grep (exact RUN §2 patterns): `grep -E "segment\.mp4|source\.mp4|o1FsB1nyEWI|jkDBk8QFcyY|video-digests|t[0-9]+\.jpg" recreation.html` → 0 hits (exit 1) · `<video` count 0 · `<img` count 0 · `http` count 0. Asset inventory: recreation.html loads NO external assets — DOM/CSS/JS only, all generated in code; segment.mp4 appears ONLY in comparison.html as the labeled ORIGINAL.
(c) Syntax: node --check on the extracted inline script → OK.
(d) Comparison check: both sides present, labels exact, one control set (Play/Pause/Restart drive video + recreation seek via __T68.seek(video.currentTime×1000) — valid because the recreation clock mirrors segment time), stacking at ≤640 px.
(e) 360 px fit arithmetic (longest band line): "45 or more: louder on TV than in the room" (41 chars) — one-line width 335.0 px (PIL DejaVu Bold at 14 px) vs 203 px avail → wraps to exactly 2 lines, row 35 px, no clipping; full arithmetic + all rows in fit-table.md.
Additional cure tests (post-plan-review): bands-only 3-band swap → effectiveDuration expands to 14050, no rejection, no crash · invalid override (negative cardAtMs) → falls back to defaults · over-long title that cannot fit at titleMinPx → falls back to defaults.

## A6 legs (Amendment A6, final build, pre-wave)
- fit-table.md — 0 HITs (cures during leg: calMonthPx 14→16 after measured ink 10 px < ~11 px floor).
- config-census.md — 0 HITs (cures during leg: palette.calHeadInk + enterScaleFrom moved into CONFIG).

## Guard dispositions
- codex-plan-review: REVISE — verbatim at codex/codex-plan-review.md. APPLIED in full: (1) const-CONFIG recovery crash cured (mutable CONFIG); (2) duration policy chosen and implemented — durationMs is a floor, effectiveDuration expands with the derived schedule, bands-only swap verified; (3) per-band measured fit implemented (shrink toward bandMinPx within maxBandLines) + fitOk() rejection of un-fittable configs (over-long title verified falling back); (4) negative-timing validation added. Set aside with reason: the bandMs ≥ bandAnimMs enforcement — the ladder is cumulative by design (bands persist; a 50 ms fade overlap under the swap's 300/350 values does not hide a band or break exclusivity of interval starts); recorded here as the executing agent's disposition. Contrast-override note (a valid override can set low-contrast colors) is priced as the override author's choice — the allowlist validates form, not taste; the default palette's contrast is ink #ffffff on card #232d36 (≈13.9:1) and accent #e8b62a on card (≈7.6:1).
- jev-prewave: see jev-prewave.md (fired after own checks + A6 legs, before the wave); cited in scores.md.

## Wave interim + cures (hash-binding rule)
Interim wave on sha b3195dcb…: motion 74 · timing 79 · purity 100 (returns preserved at codex/lens-{motion,timing,purity}-interim1.md; reusability/readability not fired on the interim). Convergent defects (motion + timing): band 1 arrived after the card instead of landing with it; band reveal was a fade where the specimen wipes; exit opacity compounded on bands. CURES APPLIED to the final build (sha 110a25fc…): band starts anchor to the card entrance (band 1 wipe completes as the unit lands, band 2 settles 7.15 s); bands reveal by horizontal clip wipe; exit opacity rides the parent card only. All five lenses re-fired on the final build; interims never averaged.

## Deviations
- D1: default band count follows RUN §2 (2 bands) while firsthand segment evidence settles at 3 bands — filed in §1 discrepancy 2 with disposition; not a silent reduction (the swap proves the 3-band form and the finding is priced for the seat).
- D2: the specimen's diagonal card sheen and the board-act context are not reproduced — sheen is ornament (§8 split), board is T53's surface.
- Render-proof limitation: PIXEL-UNVERIFIED — no browser binary exercisable in this seat; verification is logic-level (Node harness) + PIL glyph measurement; comparison.html is the render surface.
