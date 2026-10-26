# WD-01 — "What Is a Token?" (Word Definitions, flagship fast lane)

Status: **Phase 1 treatment ready 2026-10-22** (Archer). Category
template: see the format block at the bottom — every Word Definition
short reuses it. House style (chalk/neon flagship container); the lane
is templated so a definition costs ~25 minutes once the template build
exists.

**Essence:** A token is a chunk of text the machine counts.
**Viewer restatement:** "A token isn't a word — it's a piece of text,
often part of a word, that the machine reads, counts, bills, and turns
into numbers. Everything the model does is measured in tokens."
**Runtime target:** ~50 s (7 lines).

## Script (draft for the template build)

| # | Line | Intent |
|---|---|---|
| L1 | Quick: what is a token? | The definition question, cold — the lane's signature opening |
| L2 | Not a word. A token is a chunk of text — sometimes a whole word, often just a piece of one. | Definition by correction; "unhappiness" splits into pieces on screen |
| L3 | The machine doesn't read letters, and it doesn't read words. It reads tokens. | The machine's-eye view; three-way contrast |
| L4 | In English, one token is roughly four characters — about three-quarters of a word. Count with me: The. Machine. Reads. Tokens. Five tokens. | The countable rule + a live count performed on screen (The/machine/reads/tokens/. = 5 tokens) |
| L5 | Why should you care? Because everything is measured in tokens: what the model reads, what it writes, what you pay, how much it can hold at once. | Stakes: read/write/cost/context — four quick tiles |
| L6 | And remember directions? A token is the smallest piece of text that gets one. | Bridge to WS01's model — the lanes reinforce each other |
| L7 | A token: a chunk of text, counted by machines. | Return & name (W-05) |

## W-section

- **W-01** L1 is the question itself, ≤3 s. **W-02** hook = the
  correction (not a word) + the live self-count in L4.
- **W-03** signposts: not → doesn't → in English → why care → and
  remember. **W-04** techniques: definition-by-correction, live
  demonstration (the sentence counts itself), four-tile stakes list,
  cross-lane bridge. **W-05** L7 restates the definition verbatim-short.
- **W-06** n/a (Archer's words; factual claims are the standard,
  verifiable tokenization facts — ~4 chars/token English average).

## Visual template (reused by every WD short)

- Signature frame: the word in giant chalk letters centre-stage, a
  "?" that gets struck through and replaced as the definition lands.
- L2/L4 performed with a **chunking machine**: text slides in, bracket
  cuts chop it into pieces, pieces drop into a counter that ticks.
- Stakes = four tiles lighting in sequence (READS / WRITES / COST /
  HOLDS). The sphere emblem cameos at L6 (series continuity).
- Captions + container: flagship standard (QC v2.0).

## Slate note

WD-02 candidates: "What is context?" · "What is a harness?" ·
"What is a prompt?" — definitions rotate with State of Adoption in the
fast-lane slots of the weekly cadence.

## Iteration i2 — 2026-10-22 (Archer): the standalone-complete ending

Hadi's critique (2026-10-22): the i1 ending dropped "directions" — a
concept this short never builds — leaving a cold viewer with a loose
thread instead of a finished lesson. Fix, per the new standing rule
QC T-16: the narration now closes on the token definition alone, and
the direction pointer moved out of the teaching arc into an explicit
packaging bridge.

- L6 (old) "And remember directions? A token is the smallest piece of
  text that gets one." → DELETED, along with its sphere scene.
- L7 (old) absorbed: new L6 = "So that's a token: not a word — a chunk
  of text, counted by machines." The ending returns to the few-word
  definition (W-05); the sphere/"REMEMBER DIRECTIONS?" scene is gone.
- New silent 3.0 s NEXT bridge card after the earned close (no
  narration, bed only): "NEXT / Every token points somewhere. /
  [direction sphere-arrow symbol] / A WORD IS A DIRECTION / tap to
  watch →" — routing to the public WS01 v2 short, the direction model's
  published home. Forward pointer as explicit bridge, never an unbuilt
  concept inside the arc.
- Build: hidden_files/wd01_i2/build_wd01_i2.py (forked from the i1
  template; brickwall ceiling tightened 0.76→0.68 after the first i2
  master measured delivered TP −0.80 post-AAC).
- QC (2026-10-22, A-07 independent, delivered wrapped files):
  main −14.47 LUFS / TP −1.29; twin −14.37 / TP −3.03; 41.998 s incl.
  container; 1080×1920 30 fps. Two blackdetect segments verified by
  Archer as sparse-scene detector artifacts (frames carry content —
  same artifact class as DIR-02). Close scene and bridge card inspected
  frame-by-frame: V-12 pass, V-14 geometry holds (caption plate bottom
  edge 1480, all card text inside the safe zone).
- Files overwritten in place (replace-not-stack):
  files/short-wd01-token.mp4 + files/short-wd01-token-musiconly.mp4.
- Studio: upload as "What Is a Token? — i2", REMOVE the i1 draft
  (yYsis38ic5A). Pinned comment updated to drop the direction tease
  from the teaching and carry the bridge instead.
