# T107 — guard-config-census output v3.1, attempt 2 (A-C008 leg 2, pre-wave)

Build: recreation.html sha256 102f04208805b908027bd1caa8d709fd33afd33e9495fe77c22d25b1f70dd018 (attempt-2 final; census runs against this attempt's own CONFIG).

## 1. All-literal scan (outside CONFIG block)
Style block literals: `0` margins/paddings only (structural) — the stylesheet's former `#111` backdrop literal is **gone**; the colour lives at `palette.backdrop` and is applied at construction. Script literals outside CONFIG, each classified (full per-literal whitelist with classifications is filed in build-record-attempt2.md §6):
- `0`, `1`, `2`, `3`, `4`, `5` — loop bounds, edge indices, substr offsets, perimeter quarters, centre halves (structural, mathematical identities).
- `100` — percentage bound in the triPoints validator (structural).
- `16` (×2) — parseInt radix in the colour mixer (structural).
- `6`, `9` — hex-length alternative in the validation regex; digit char-class bound in the advance model (structural).
- `8` — charset declaration in the document head (structural).
- `1.0` — unit advance factor for the em dash in the wordmark advance model (measurement-model constant).
- Advance-model factors `0.28, 0.30, 0.33, 0.36, 0.38, 0.55, 0.56, 0.72, 0.85` — per-character em advance factors of the wordmark text-fit guard (measurement-model constants; they shape the guard's fit decision, not the rendered subject).
- `0.5` — none outside CONFIG (the search blend cap is bound as `searchDimBlend`).
- The cubic exponent `3` in the eased growth/wordmark functions — the plan-named easeOutCubic identity (structural).
No content literal (label text, interface label, check symbol) stands outside CONFIG; all subject text is CONFIG-bound (`anchor.label`, `sceneA.title`, `sceneB.title`).

## 2. Application-site resolution (every CONFIG key → ≥1 site, mutation-verified)
The own-check suite's consumption census mutated **every one of the 90 CONFIG leaves** and asserted an observable effect (pose vector / rendered style dump / validation rejection) for each: **90/90 consumed, 0 unapplied**. New keys this attempt, with their code sites: `wordmarkMs` → pose() wordmark progress · `pushDimMin` → pose() push dim factor · `searchDimBlend` → render() search-strip blend · `mark.triPoints` → makeMark() clip-path string · `palette.backdrop` → construction body background. `outline.safetyMs`'s effect is proven in the pushMs-2100 context, where its cap binds (in the default build the offMs bound governs — the same non-binding-cap situation attempt 1 recorded). Every resolution names a code site, per attempt 1's census-MISS lesson.

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter-missing class possible. ✓

HIT list: **empty — PASS for this leg (0 HITs on the attempt-2 build).**
