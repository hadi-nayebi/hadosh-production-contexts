# T22 — Interrupted stream → text slam · SCORES

Technique: T22 (packet P1, "Look What I Can Do" @ 2:32–2:37) · Consumer: transition · opening hook
Artifacts: `recreation.html` (6447 B) · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut, 960×540, 6.000 s, 274061 B, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 003 Wave 1, five-lens wave)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 96 | codex/lens-motion.md |
| Timing / tempo match | 88 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 79 | codex/lens-reusability.md |
| Readability | 78 | codex/lens-readability.md |

**Arithmetic:** (96 + 88 + 100 + 79 + 78) / 5 = 441 / 5 = **88.2 average** · minimum lens **78**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — Tier: **RECREATED** (hand-off to style-library board is the seat's act).

### Own checks (pre-wave, §5 legs 1–3)
- Swap test (Node, logic-level): PASS — defaults cutAt=22, shown="You are extraordinaril" (mid-word, matches ev/t157.jpg), cycle 5250 ms; swapped (slamText="NO WAY, REALLY!", typeMs 100→20, interruptAtChar 22→14, slamColor #ffffff→#ffcc00, slamBg #000000→#220000, new replyText) still cuts mid-word ("You are comple"), cycle 3330 ms.
- Purity grep on recreation.html (segment/source filenames, video/img tags, frame names, media extensions): **0 hits**. Recreation loads no external assets.
- Comparison check: labels correct, shared Play/Pause/Restart, phone stacking @media ≤640px present.

### In-attempt iterations (pre-fix returns preserved, not counted)
- Motion run 1 scored **80** (codex/lens-motion-run1-prefix.md): cut at char 23 completed the word "extraordinarily" and the cursor vanished at the cut. Cured: interruptAtChar 23→22 (matches ev/t157.jpg exactly) + cursor stays frozen; re-run scored 96.
- Timing run 1 scored **58** (codex/lens-timing-run1-prefix.md): typing ~2.5× too fast. The seat then MEASURED the source firsthand (frames at 155/156/157/158 s: reply at 2 → 12 → 22 chars → complete with note+slam): rate ≈100 ms/char. Cured: typeMs 55→100, interruptHoldMs 700→450; re-run scored 88.
- Reusability run 1 scored **78** (codex/lens-reusability-run1-prefix.md). Cured: cut bounds clamped to [0, replyText.length] for both char and fraction paths; URL overrides type-validated (invalid numbers / "null" fraction / non-array contextLines keep defaults); shrink-to-fit measures the slam's inner box with a 300-step guard. Re-run scored 79.
- Readability's marker-size cure (12px floor — it computed 7.8px at phone size) was applied AFTER its run; its 700 ms marker-hold recommendation was NOT applied: it conflicts with the timing lens's beat evidence, and in the source the note and slam coexist (the note's standalone beat is not measurable). Filed below as the practice cure.

### Priced gap (what a practice re-attempt should cure, in lens order)
1. **Readability 78:** marker hold 450 vs recommended 700 ms (lens conflict with timing — resolve by frame-measuring the note's first-appearance frame at 1/30 s granularity); slam fit should search UP to the largest fitting size, not only shrink from 34%; define supported content-length limits and test extremes; phone portrait/landscape render proof still outstanding (no Chrome in this seat — render-proof limitation, standing).
2. **Reusability 79:** speaker glyphs, terminal font and fit constants still outside CONFIG; contextLines override entries not schema-validated per entry; extreme long-text fitting not established.
3. **Source-fidelity observation (seat, firsthand):** at 158.0 s the original shows reply complete ("You are extraordinarily—") + interrupt note + "I KNEW IT!" coexisting below the terminal, and the video cuts to the next scene by ~158.5 s — the catalogue's "full-screen shout replaces the screen" is a paraphrase of that beat. This build follows the catalogue + task spec (hard cut to full-screen slam). If HQ wants the coexistence form, it is a variant attempt, not a silent edit.
4. Lens-run note: every Codex return's BODY-WRITE line reports its own filesystem tool unavailable — returns were captured verbatim by the seat into codex/ instead; scores.md is the seat's filing, per the wave definition.
