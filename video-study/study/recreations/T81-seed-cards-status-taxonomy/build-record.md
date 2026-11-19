# T81 — Seed cards with status taxonomy · build record (attempt 1, Cycle 014 Wave 12)

## Observe gate-out
- **Consumer:** DLC assembler DIAGRAM surface — seed/status cards: any explainer scene asserting a not-yet-universal claim fires an evidence card (status taxonomy header · place·year · claim · source) driven from CONFIG.
- **Mechanics:** one fixed card design; the status header varies over a taxonomy; card appears at the moment the claim is made, over the scene, at foreground intensity. Evidence viewed firsthand by the builder: ev/t200.jpg (BEING BUILT · UK · 2026 · gov assistant · GOV.UK), ev/t252.jpg (IN USE · INDIA · 2025 · translation · GOOGLE TRANSLATE BETA), ev/t382.jpg (IN THE LAB · USA · 2025 · antibiotics), ev/t452.jpg, ev/t392.jpg, plus segment frames seg-0/2/5/7/10/13.5.
- **Schedule basis: `t=0 allocation`** (Amendment A7) — the window proves one card's settled form (OBSERVED); the 3-card sequence is re-based to build zero (ALLOCATION).
- **Guard firings at Observe/Plan:** codex-observe → CONFIRMED-WITH-GAPS (return `codex/codex-observe.md`); codex-plan-review → EXECUTE (return `codex/codex-plan-review.md`). Dispositions below.

## codex-observe gaps — dispositions (all closed or carried named)
1. *t392/t452 firsthand* — CLOSED by builder: ev/t452.jpg header reads **"ALREADY PLANNED"** (ESTONIA · 2026 · Digital IDs claim) — so the evidenced fifth state carries the ALREADY prefix; CONFIG taxonomy uses "ALREADY PLANNED" (RUN §2b's "PLANNED" is its shorthand). ev/t392.jpg shows NO card (a projection diagram) — the digest's MEASURED citation at t392 is not frame-confirmed at that exact second; MEASURED stands on the digest text + dinner-section record, priced as text-evidenced, not frame-evidenced.
2. *Sixth state* — the digest text enumerates six, incl. **ALREADY TESTED**; no evidence frame viewed shows a TESTED card. CONFIG taxonomy carries the **five evidenced states** only; the sixth state is **UNRESOLVED as evidenced** (text-named, frame-unverified) — named here and in scores.md as a catalogue-fidelity observation for style-library/digestion, per RUN §2b amendment 2's governing intent.
3. *Segment inspection* — CLOSED: segment frames extracted and read (below).
4. *Amendment wording / TECHNIQUES t452 omission* — recorded here; register edits are style-library's act, not this item's.
5. *Duration/census* — source ffprobe 619.914 s re-verified by the seat's RUN census; segment ffprobe 14.000 s verified by the builder (below).

## codex-plan-review — disposition
EXECUTE, applied in full: one card node with whole-content swap at slot boundaries; cycle derived as `cards.length × (enterMs + holdMs) + endHoldMs`; status membership validated AFTER override; scene dimmed on a separate container with the card outside it; predicted minimum lens = readability (priced — see fit-table).

## Segment facts
- Cut: source.mp4 245–259 s → `segment.mp4`, re-encoded H.264/AAC. ffprobe duration **14.000 s**. sha256 `5cbf3b724312a596f1026d5e6645e598e5961a31ae34f842c37eba3051826544`.

## Measurements — OBSERVED vs ALLOCATION
OBSERVED (segment frames, 1920×1080 source):
- seg t=0 (245 s) and t=5 (250 s): NO card on screen; HUD reads 2037 · 16:00; the scene is the dad/balcony sequence. The card enters later in the window.
- seg t=10 (255 s): TWO cards stacked simultaneously, both settled — card 1 "ALREADY IN USE / INDIA · 2025 / Live translation into any headphones, free / GOOGLE TRANSLATE BETA · DEC 2025" and card 2 "ALREADY IN USE / USA · 2024 / Everyday earbuds cleared as hearing aids / FDA · SEPT 2024"; HUD year has flipped to 2025, clock holds 16:00.
- Settled card bounds (seg t=10 frame): card 1 ≈ x 70–795, y 195–410 of 1920×1080 (≈3.6%–41.4% width, 18%–38% height); thin gold left border; status/place/source in small gold/white caps; claim in large white serif. Card design proportions OBSERVED from ev/t200, t252, t382 identically.
ALLOCATION (build's own, labeled):
- The build's 3-card sequence (IN USE → BEING BUILT → IN THE LAB), its enter (rise 14 px + fade over enterMs 450), and its per-card cycle (450 + 4150) are allocation — the segment does not resolve a single card's entrance duration, and the OBSERVED segment in fact STACKS two cards, where the amended Plan (RUN §2b, Cure 2 translated) binds the build to phase exclusivity (one card owns the stage). This divergence is deliberate, governed, and named — not hidden.
- Card enlargement: at source proportions the claim would measure ~7 px at a 360 px stage (T57-class failure); the build's card is enlarged (320 px of 360) so the claim measures 23 px ink. A readability allocation, priced by the fit leg.

## Construction
DOM, one self-contained `recreation.html` (sha256 `b7d84a63dcc8bb73d4dc8a16bec6eb3f3ae62c73d0ef71b1cdafb3936f5d0294`): CONFIG at top — taxonomy[5] · cards[{status,place,year,claim,source} ×3 per amended §2] · palette{card:"#16283f",ink,accent,bg} · enterMs:450 · holdMs:4150 (own key; cardMs deleted) · endHoldMs:200 · type{font + sizes + spacings} · geom{stage, card, gaps, scene}. Cards index the taxonomy by name (validate() after override). Phase machine `stateAt()` derives the single active card from one cycle clock; content swaps whole at slot boundaries (Cure 2). Scene is a separate dimmed container (geom.sceneDim 0.55); the card sits outside it at full intensity (Cure 1). No captions/subtitles (card text is the subject). No specimen media, no tracing (§6.1). `comparison.html`: segment + recreation side by side, ONE control set (Play/Pause/Restart via postMessage to the recreation's clock), labels "ORIGINAL — The Good Takeoff @ 245–259s" / "RECREATION — T81 Seed cards, parameterized", phone-width stacking, 48 px controls.

## Fidelity plan — implemented vs deferred (named)
Implemented: fixed card design (status band · place·year · large claim · source foot) · taxonomy as indexed CONFIG list · three evidenced states in sequence · foreground/dim intensity separation · phase exclusivity · 14 000 ms loop matched to segment.
Deferred/named: (1) sixth taxonomy state UNRESOLVED as evidenced (above); (2) full scene artwork — simplified flat blocks only; figures/HUD not rebuilt (HUD register is T76's item); (3) the OBSERVED two-card stacking — superseded in the build by the governing Cure-2 allocation (above); (4) card entry motion in the segment is not frame-resolved — rise+fade is allocation; (5) MEASURED state text-evidenced only (t392 frame shows no card).

## Own checks (results, on the final build)
- **Swap test** (node harness, `?cfg=` override): EXACT §2 values with the amended-key mapping — the §2 timing swap was `cardMs 4600→3000`; cardMs is DELETED by §2b, so it is re-expressed as **holdMs 4150→2550** (cycle 4600→3000 per card). Altered: cards[0].claim → "Offline translation on every bus, free" · cards[0].status → "ALREADY MEASURED" · holdMs → 2550 · palette.card "#16283f"→"#3f1628". Result: **ALL PASS** — claim/status applied, status validates against taxonomy, per-index merge keeps 3 cards, cycle = 3×(450+2550)+200 = **9200 ms**, boundaries move correctly (card1 enter 3000, card2 enter 6000, endhold 9000, wrap 9200), other palette keys untouched. (First firing caught a real defect: deepMerge replaced the cards array wholesale → cycle 3200; cured by per-index array merge, re-fired ALL PASS.)
- **Default harness:** cycle 14000 · t=0 card0 enter · 450 hold · 4600 card1 enter · 9200 card2 enter · 13800 endhold · 14000 wrap · exclusivity sweep (step 37 ms) single owner — **ALL PASS**.
- **Purity:** grep of recreation.html for `segment.mp4|source.mp4|ev/|t200|t252|t382|<video|<img` → **0 hits**; no http references. Asset inventory: recreation.html loads NO external assets (code only); comparison.html loads segment.mp4 (the labeled ORIGINAL evidence) + recreation.html.
- **Comparison check (logic level):** one control set drives video + recreation clock (postMessage play/pause/restart); recreation cycle 14000 ms = segment 14.000 s; labels exact; stacking at ≤520 px; controls 48 px in normal flow. PIXEL-UNVERIFIED (no browser binary in this seat).
- **node --check** on the extracted script: **PASS**.

## A6 legs (final build)
- guard-measured-fit → `fit-table.md`: 14 rows measured (PIL DejaVu stand-ins for Georgia); 1 marginal HIT carried (source foot-line caps ink 9.0 px vs ~11 px floor on two cards — disposition in fit-table).
- guard-config-census → `config-census.md`: HIT list EMPTY after pre-wave cures (letter-spacings, card gaps, rule geometry, window offsets/inset, window opacity moved into CONFIG/type/geom).

## Pre-wave gate
jev-prewave fired via Codex one-stream on this record + CONFIG + packet section → `jev-prewave.md` (see scores.md pre-wave line).
