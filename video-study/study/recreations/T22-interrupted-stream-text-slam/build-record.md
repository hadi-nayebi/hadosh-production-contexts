# T22 — Interrupted stream → text slam · BUILD RECORD
Cycle 003 Wave 1 · 2026-11-14 · Item agent record (INSTRUCTION §1–§6)
Artifact: hidden_files/study/recreations/T22-interrupted-stream-text-slam/
Technique: T22, Packet P1 @ 2:32–2:37, TECHNIQUES.md: "a reply types, is cut mid-word (\"Interrupted by user\"), and the full-screen shout replaces the screen."
Evidence viewed firsthand: ev/t156.jpg (reply at "You are extr" + orange block cursor, terminal dialogue above), ev/t157.jpg (reply progressed to "You are extraordinaril" + cursor — still mid-word, pre-slam). Digest §T22 names the completed mechanics: cut at "You are extraordinarily-", tiny system note "Interrupted by user", full-screen shout "I KNEW IT!" replaces whole screen.

## §1 Observe
Mechanics: (1) Static terminal context — prior dialogue lines already on screen (user lines prefixed ">" in white/green, AI lines prefixed "•" in orange, monospace on near-black). (2) A new AI reply types character-by-character with a solid block cursor at the typing head. (3) Typing is CUT mid-word — the compliment never completes. (4) A tiny system marker "Interrupted by user" appears. (5) HARD CUT: the entire terminal is replaced by full-screen slam text "I KNEW IT!" filling the frame. No fade, no transition — replacement is the joke's timing.
Sub-beats (6 s segment window 151.5–157.5 s, catalogue 2:32–2:37 ± handles): context hold/typing ~0–3.2 s; cut + interrupt marker ~3.2–3.9 s; slam hold ~3.9–6 s.
Why it works (digest): everyone who chats with these tools knows this moment; the mid-word cut is the timing mechanism — the compliment never needs to finish; bookends the opening typewriter device.
Variables: replyText (full intended reply), typeMs, interruptAtChar/interruptFraction, interruptLabel, interruptHoldMs, slamText, slam colors/font/size, terminal palette (bg, user/AI/prompt colors), context lines, cursor color, holdMs, startDelayMs.
Consumer: transition · opening hook — production surfaces: DLC/multilingual word-animation + transition containers; any chat/terminal scene needing an interruption punch.

## §2 Plan
### Parameter table (CONFIG keys, specimen defaults)
| Key | Default | Role |
|---|---|---|
| contextLines | [{user,"Claude?"},{ai,"Yes?"},{user,"Do you think I'm talented?"}] | pre-typed dialogue |
| replyPrefix/replyColor | "● " / #e8a33d | AI line chrome |
| replyText | "You are extraordinarily talented beyond measure" | full intended reply (never completes) |
| typeMs | 55 | ms per character |
| interruptAtChar | 22 | cut point = "You are extraordinaril" — mid-word, exactly as ev/t157.jpg (corrected from 23 after motion-lens finding: 23 completed the word) |
| interruptLabel | "Interrupted by user" | system marker text |
| interruptHoldMs | 700 | marker hold before slam |
| slamText | "I KNEW IT!" | full-screen shout |
| slamBg / slamColor | #000000 / #ffffff | slam palette |
| slamFont | "Arial Black, sans-serif" | slam face |
| bg / userColor / aiColor / promptColor / cursorColor | #0a0f0a / #e8e8e8 / #e8a33d / #4caf50 / #e8a33d | terminal palette |
| startDelayMs / holdMs | 400 / 2200 | lead-in / slam hold |
All content/timing/palette read from CONFIG; URL params override any key (swap test).

### Construction choice
CHOSEN: DOM typing (JS interval driven by CONFIG) + block-cursor span + hard display cut to a flex slam layer with shrink-to-fit sizing. Fits monospace terminal semantics, crisp text at phone size, exact mid-word cut by char count.
Rejected: Canvas — worse text crispness/accessibility, no benefit for glyph typing. CSS-only keyframes — cannot parameterize text length / cut point dynamically. Video/frame-sequence — purity refusal-class (§6.1). SVG draw-on — wrong mechanic (no stroke formation in specimen).

### Execute checklist
- [ ] Cut segment.mp4 (ffmpeg -ss 151.5 -t 6, scale 960:-2, libx264, -an), ffprobe verify
- [ ] Build recreation.html (one file, CONFIG top, no external assets, no segment/source refs, URL overrides)
- [ ] Build comparison.html (ORIGINAL segment + recreation, shared play/pause/restart, labels, phone stacking)
### Verify checklist
- [ ] Purity grep on recreation.html (segment/source/video/img/frame patterns) = 0 hits
- [ ] Node logic-level swap test: altered slam words + timing + palette, technique still reads
- [ ] Comparison check: labels, shared controls, stacking CSS present
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70
### Failure points (priced)
- Fitting limits: long slamText must shrink-to-fit (JS measures and reduces font size until it fits width/height) — implemented by construction.
- Phrase overlap: strict phase exclusivity — typing → interrupt marker → slam; slam cannot start before marker hold elapses; typing interval cleared at cut.
- Render-proof limitation: no Chrome binary in this seat (RUN.md standing) — logic-level (Node) swap test as T15 precedent; visual proof rests on comparison.html for HQ.
- Convergent freeze / intensity collapse: N/A — no particle field; single DOM stream, no surplus pool.
### Guards SKIPPED-WITH-REASON (as in wave RUN.md)
jev-observe-exit / jev-plan-exit / jev-prewave / codex-observe / codex-plan-review — all BUILT-NOT-FIRED / UNBUILT per guards.md; printed SKIPPED-WITH-REASON: these Jev/Codex phase guards are not armed executables in this seat (no browser/Codex phase-guard runner stands); the five-lens scoring wave IS the armed deliverable gate and fires per item.

## §3 Execute — segment facts
segment.mp4: cut `ffmpeg -ss 151.5 -i source.mp4 -t 6 -vf scale=960:-2 -c:v libx264 -an`. ffprobe: h264, 960×540, duration 6.000 s, size 274061 bytes, no audio. Source: 1916×1078, 30 fps, 198.413 s.
recreation.html: 6060 bytes, one self-contained file, CONFIG at top, URL overrides; slam holds holdMs then loops (holdMs is a live key — fixed before Codex after self-review found it initially unused). comparison.html: 2094 bytes.

## §5 Self-verify — results
- Purity grep on recreation.html, pattern `segment\.mp4|source\.mp4|dfk4|<video|<img|t156|t157|\.jpg|\.mp4` (case-insensitive): **0 hits**. Asset inventory: recreation loads NO external assets — all DOM/CSS/JS inline; comparison.html alone references segment.mp4 (labeled ORIGINAL, lawful).
- Node logic-level swap test (/tmp/t22-swap.js): DEFAULT cutAt=23, shown="You are extraordinarily", isMidWord=true, totalMs=4565, slam="I KNEW IT!". SWAPPED (slamText="NO WAY, REALLY!", typeMs 55→20, interruptAtChar 23→14, slamColor #ffffff→#ffcc00, slamBg #000000→#220000, replyText="You are completely brilliant at this craft"): shown="You are comple", isMidWord=true, totalMs=3580, slam applied. **SWAP-TEST: PASS**. URL-override present: true; hard-cut present: true; fitSlam present: true.
- Comparison check: labels "ORIGINAL — P1 @ 2:32–2:37" / "RECREATION — T22, parameterized" present; shared Play/Pause/Restart controls drive video + recreation play(); phone stacking @media max-width:640px present (1 rule).
- Post-wave cures re-verified: after motion/timing/reusability/readability cures (see scores.md), swap test re-run PASS (defaults cycle 5250 ms; swapped cycle 3330 ms), purity grep still 0 hits, final recreation.html 6447 bytes. Five-lens wave: 96/88/100/79/78 → avg 88.2, min 78 → PASS (scores.md).
