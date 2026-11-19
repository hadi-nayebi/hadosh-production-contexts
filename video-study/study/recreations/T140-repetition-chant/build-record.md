# Build record — T140 Repetition chant · attempt 1 · Cycle 023 Wave 20

- Technique: T140 — Repetition chant (Packet #7, Honda "Keep Up"). Window 32.04–33.52 s.
- Schedule basis: `segment-anchored` — segment 32.04–33.52 s; token onsets at measured segment-relative times (onset-table rows 146–155).
- Segment cut (A-HANDLES): source cut at 31.54 s, duration 2.48 s (window ±0.5 s handles), re-encoded h264/aac, faststart. ffprobe: duration=2.480000, size=707867 bytes. SHA-256 segment.mp4: 90ac7faf7c459c060461886f5020d9b96177def1b22c2e9cf2e20015bb482ee3.
- recreation.html SHA-256: 62afd9080a700d340bcf691ad331597fa83015b45dbaa735f3918245447763a2
- Derived-cycle statement (A-T140-2): CONFIG declares `dwellScale: 1.0`; `cycleMs` is DERIVED in the engine as Σ token dwells × dwellScale = 1480 ms at default — there is no cycleMs literal in the build for the tokens to disagree with.
- Repeat derivation (A-T140-1): CONFIG tokens carry the text; the engine derives the repeated-token set as tokens whose text == `repeatWord` ("improve"), count asserted 5; dust growth is keyed to that progression.
- Dust form (A-T140-3): the phase machine owns the FOREGROUND only (exactly one word at a time, hard cuts, no accumulation); dust is a concurrent BACKGROUND layer (layered radial gradients, z-index 1, word z-index 2) growing behind the word across the cycle, reaching maxOpacity at cycle end (the terminal flash-out end state), resetting cleanly at wrap (pure function of cycle position).
- Plate (A9.1): code-drawn landscape plate (sky #a9c6d4 · far ridge #a7b8ba · near salt flat #efe9dc from CONFIG) with SEAMLESS TILED PAN — panTilePx 720, panPxPerSec 18, pan driven by absolute elapsed ms so it is continuous across the cycle wrap.

## Count assertion (A9.3)
- Source token count (onset-table rows 146–155): 10. Built token count: 10. MATCH.
- Repeat count: source "improve" ×5. Built derived repeat count: 5. MATCH.

## Asset inventory (A-VERIFY)
Every asset the recreation loads:
- recreation.html itself — code only (HTML/CSS/JS in one file). No external assets.
- Landscape plate — code-drawn (CSS gradients from CONFIG plate colours). Build-generated.
- Dust cloud — code-drawn (layered radial gradients from CONFIG dust colour). Build-generated.
- Word — browser-rendered DOM text from CONFIG tokens. Code.
- segment.mp4 — specimen evidence; appears ONLY in comparison.html, labeled ORIGINAL. Never referenced by recreation.html.
No specimen media, no frame sequences, no traced redraws in the recreation.

## Raw harness output — first draft (A9.4)
First-draft harness run (before the config-census refinement that moved plate band fractions, pan stripe colours, and dust alpha stops into CONFIG-derived values; token/cycle/repeat derivations unchanged by that refinement, re-run on the final build below with identical results):

```
--- ORIGINAL CONFIG (from recreation.html) ---
token count (built): 10 | expected source count: 10
repeatWord: improve | repeat count: 5 | expected: 5
sum dwells: 1480 | dwellScale: 1 | derived cycleMs: 1480 | expected: 1480
wordColor: #e63329
--- SWAP TEST (scratch copy, altered CONFIG) ---
swap tokens: [{"t":"Build","dwellMs":160},{"t":"again","dwellMs":120},{"t":"and","dwellMs":120},{"t":"again","dwellMs":160}]
swap repeatWord: again | repeat count: 2 | repeat texts: ["again","again"]
swap sum dwells: 560 | dwellScale: 1.5 | derived cycleMs: 840 | expected: 840
swap wordColor: #2a6ad4 | expected: #2a6ad4
SWAP TEST: PASS
```

## Own checks (final build, raw output)
### (a) Swap test — PASS
Altered CONFIG in a scratch copy: tokens → [{t:"Build",160},{t:"again",120},{t:"and",120},{t:"again",160}], repeatWord "again", dwellScale 1.5, wordColor → #2a6ad4. Derived cycle = (160+120+120+160)×1.5 = 840 ms ✓; repeat set = the two "again" tokens ✓. Full raw output: the harness block above (identical on the final build).

### (b) Purity grep — 0 hits
Pattern `segment\.mp4|source\.mp4|<video|<img|url\(|iO7BmPoL6a4|onset-[0-9]+\.jpg` over recreation.html: grep exit 1 (no matches). 0 hits.

### (c) Syntax — PASS
Inline script extracted and checked: `node --check` → OK.

## Comparison check (A-VERIFY)
comparison.html: ORIGINAL segment.mp4 (video element) + live recreation (iframe) side by side at matched 360×203 size; ONE synchronized control set (Play/Pause/Restart drive the video; the recreation clock is slaved as recreationMs = video currentTime×1000 − 500 handle offset, clamped ≥0, via window.__seek on timeupdate/seeked/load). Labels: "ORIGINAL — Honda Keep Up @ 32.04–33.52" · "RECREATION — T140 Repetition chant, parameterized". Phone-width stacking: flex column under 760 px, controls above the panels with 48 px-min-height buttons, reachable. No captions/subtitles anywhere.
Render-proof limitation: PIXEL-UNVERIFIED (no browser binary in this seat; source/logic-level verification, comparison.html is the render surface — prior-wave form).

## A6 legs (pre-wave, on the final build)
- fit-table.md — HITs: 0.
- config-census.md — HITs: 0 (after the pre-wave refinement recorded above).

## Deferrals named
- None for mechanics: all §1b mechanics are implemented (token schedule, repeat derivation, dust growth, tiled pan, hard-cut single-slot foreground). Pixel-level render is unverified for the standing no-browser reason, printed above, not hidden.
