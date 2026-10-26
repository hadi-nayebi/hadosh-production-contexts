# Lesson 1 — The Agent Harness — FINAL (publish standard)

Series: **Your daily bite of agentic literacy** · Lesson 1 · Channel: @letsbuildittogethersp
Runtime: **52.64s** · 1080×1920 · 30fps · H.264 + AAC 192k
Base: the approved V2 script, kept verbatim (it was already tight). Voice = TTS **guide track** —
Hadi's cloned-voice narration drops onto the music-only twin (identical timing).

## Deliverables
- `short-01-agent-harness-final.mp4` — guide narration + music, loudness-mastered
- `short-01-agent-harness-final-musiconly.mp4` — identical visuals + music bed only, NO guide voice

## Final narration (verbatim) + measured timing map
Timings are MEASURED from the rendered narration (ffprobe per-line + ffmpeg silencedetect
at −38 dB, d=0.15 → 29 speech runs). Gaps: 0.35s between lines, 0.50s before the finale
line, 2.60s end hold.

| # | Time | Line |
|---|------|------|
| — | 0.00–2.20 | (music only — title card: YOUR DAILY BITE OF / AGENTIC LITERACY / LESSON 1) |
| 1 | 2.20–5.87 | Your AI model is not your agent. On its own, it's just a brain. |
| 2 | 6.22–12.25 | It can think. But it forgets everything when the chat ends. It can't open your files. It can't check its own work. |
| 3 | 12.60–17.23 | What turns it into an agent is the layer around it. The harness. It has four parts. |
| 4 | 17.53–19.59 | Memory: so it remembers. |
| 5 | 19.73–22.49 | Tools: so it can do things, not just talk. |
| 6 | 22.63–25.30 | Permissions: so it only acts where you say. |
| 7 | 25.44–28.72 | Verification: so it checks its work before calling it done. |
| 8 | 29.22–37.17 | Here's what most people miss. Models come and go. The model is raw intelligence. Every bit of customization, your way of working, lives in the harness. |
| 9 | 37.57–44.67 | And the harness isn't a robot standing apart from you. You wear it, like a second cortex. Your memory. Your rules. Your files. |
| 10 | 45.17–50.04 | That's Augmented intelligence. And because it's yours, it should live with you. Owned by you. |
| — | 50.04–52.64 | (end hold: finale frame, "OWNED BY YOU." + @letsbuildittogethersp, music fades out) |

149 words ≈ 170 wpm.

## Scene → narration map (20 segments, 15 distinct images, 0 generated video clips)
All images: ONE style — flat illustration, chalk linework, soft neon glow, dark charcoal,
cyan + amber only (the Lesson 3 V2 formula verbatim on every prompt). Cuts land on measured
speech runs; zoompan push/pull per segment; max hold 4.37s (the opener).

| Time | Visual | Narration beat |
|------|--------|----------------|
| 0.00–4.37 | Circuit-brain emblem (cyan/amber) + series title | opener → "Your AI model is not your agent." |
| 4.37–6.42 | One tiny brain alone in a vast dark | "On its own, it's just a BRAIN." |
| 6.42–9.51 | Brain dissolving into chalk dust | "It can think. But it forgets EVERYTHING…" |
| 9.51–10.90 | Folder padlocked inside a glass box | "It can't open your FILES." |
| 10.90–12.77 | Papers, empty checkboxes, magnifier | "It can't check its own WORK." |
| 12.77–16.13 | Circuit brain inside double orbit rings | "…the layer around it. The HARNESS." |
| 16.13–17.72 | Panel: orb over 2×2 grid, all dim | "It has four parts." |
| 17.72–19.90 | Panel: MEMORY lights (label inside box) | "Memory: so it remembers." |
| 19.90–22.82 | Panel: + TOOLS lights, MEMORY stays | "Tools: so it can DO things…" |
| 22.82–25.62 | Panel: + PERMISSIONS lights | "Permissions: so it only acts where you SAY." |
| 25.62–29.41 | Panel: + VERIFICATION lights | "Verification: so it checks its work…" |
| 29.41–30.81 | Panel: all four + full-board glow | "Here's what most people MISS." |
| 30.81–32.14 | Cyan + amber orbs crossing over an empty square | "Models come and go." |
| 32.14–33.93 | Chaotic spark burst of raw chalk energy | "The model is raw INTELLIGENCE." |
| 33.93–37.76 | Hands placing icon tiles around a glowing ring | "Every bit of CUSTOMIZATION, your way of working, lives in the harness." |
| 37.76–40.20 | Robot and human standing far apart | "…isn't a robot standing apart from you." |
| 40.20–42.29 | Head in profile wearing a node-network cortex cap | "You WEAR it, like a second CORTEX." |
| 42.29–45.37 | Hands holding a glowing folder | "Your MEMORY. Your RULES. Your FILES." |
| 45.37–49.12 | House, figure standing in the lit doorway | "That's AUGMENTED intelligence… it should live with YOU." |
| 49.12–52.64 | Figure inside a harness ring holding a golden key | "OWNED BY YOU." (big) → handle on the hold |

Panel technique: one panel artwork → PIL states (dim base; each compartment lights with an
amber label INSIDE its box as named; labels and lit compartments persist; final state adds a
full-board glow). Slots auto-detected from the artwork, so alignment is exact.

Captions: kinetic, 2–5 words per chunk, timed from the measured speech runs; white BIG-style
chunks with single-word amber keyword accents; component names amber; "OWNED BY YOU." gets
the full-screen Big treatment. Series bug ("YOUR DAILY BITE OF AGENTIC LITERACY", cyan)
runs from the first narration frame to the end, fully inside the frame.

## Music (NEW — original, license-clean, synthesized in-house; nothing downloaded)
Composed and rendered with a Python/ffmpeg synth (`synth_music.py` in the production folder):
- Key A minor, progression **Am – F – C – G** ×2 across the full 52.64s (chord ≈ 6.58s each)
- Warm sine pads (root/third/fifth + soft harmonics) with slow attack/release
- Sub-root pulse with a slow 0.5 Hz breathing tremolo — "slightly electric," calm
- Sparse high sparkle arpeggio notes (pentatonic), quiet and irregular — curiosity, no melody hook
- Fade-in 1.2s; **fade-out over the final 2.6s** (the end hold). No lyrics, no sudden changes.

### Mix + loudness (measured with ffmpeg loudnorm/astats)
- Bed placed **−24 dB** under the voice and **sidechain-ducked** (4:1) further under speech.
  Ducked bed alone measures −41.3 LUFS vs voice −28.4 LUFS over the speech zone → music sits
  ≈ **13–15 dB under the narration** while speaking; audible solo only in the 2.2s opener
  and pauses, by design.
- **Final mix (measured from the delivered MP4): −14.84 LUFS integrated, true peak −1.45 dBTP**
  (target ≈ −14 LUFS / ≤ −1 dBTP ✓). Sample peak −1.49 dB — no clipping.
- Music-only stem: −23.03 LUFS integrated, TP −14.80 dBTP — the bed at its exact in-mix level
  (no loudnorm boost), so Hadi's cloned narration can be laid at guide level and the balance holds.

## QA (4 iterations — see production notes)
22 frames inspected at full size (≥1 per scene + mid-chunk caption checks + opener/finale).
Fixed across iterations: panel label overflow (auto-fit), music loudness chain (loudnorm's
dynamic passes pumped the intro bed up to speech level → rebuilt as one gentle pass + fixed
gain, TP held by loudnorm), a letterboxed swap scene (two fill attempts rejected — ghosting;
scene regenerated full-frame). Final pass: one style in every frame ✓ · cuts on every beat,
no hold > 4.5s ✓ · panel accumulates and persists ✓ · captions legible/measured ✓ · bug fully
inside frame from its first frame ✓ · music throughout, ducked, no clipping, clean fades ✓ ·
no stray text/UI ✓ · opener + finale polished ✓ · handle printed exactly once ✓.

Production folder: `hidden_files/short01-v3/` (script, measured timings, scenes, panel states,
music synth, assembly + QA frames).
