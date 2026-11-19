# config-census — T244 · attempt 1 (guard-config-census v3.1)
Build: recreation.html SHA-256 73010b0fb1cf5fbd2a0f4a6a7e148aceef142b723b5843d5ad3e8a19a21b4a72 (5,887 B).

## Key → application-site resolution (value flows into the named subject)
| CONFIG key | application site(s) |
|---|---|
| segmentStartMs | stateAt re-base (src = segmentStartMs + tRel) |
| totalMs | renderer clock modulo |
| bgColor | stage background at init |
| dimColor | lerpColor start for every word span, every frame |
| spokenColor | lerpColor end for every word span, every frame |
| fontStack | span font in buildLine · measureText font in the fit loop |
| fontPx | buildLine base size before fit shrink |
| fontWeight | span font + fit-loop measure font |
| dir | band.dir at init |
| stageW | renderer scale denominator (stage.clientWidth / stageW) |
| stageH | stage aspect via CSS 9/16 — DECLARED INVARIANT pair with stageW (aspect-ratio in stylesheet); value flows as the 720/1280 ratio the CSS encodes |
| bandTopFraction | band.style.top at init |
| wordSpaceEm | spacer span width in buildLine · fit-loop advance |
| brightenMs | stateAt per-word fill divisor |
| previewMs | stateAt line-appearance instant (onsetMs − previewMs) |
| fitWidthFraction | buildLine fit-loop bound |
| wordAllocMode | deriveWordOnsets mode selector (single lawful value "length"; the allocation branch reads it) |
| lines[].words[] | spans built per word in buildLine · deriveWordOnsets lengths |
| lines[].onsetMs | stateAt appearance + deriveWordOnsets base |
| lines[].endMs | deriveWordOnsets span end |
| lines[].displayEndMs | stateAt line-visibility end |

No unapplied key. stageH note: it is consumed as the fixed 9:16 aspect pair (CSS aspect-ratio: 9/16 = stageW/stageH); printed here so the census does not claim a JS site it does not have.

## CSS-variable setter check
No CSS variables used (grep `var(--` = 0; no `--*` definitions). CONFIG reaches CSS only through JS style assignments above. PASS.

## Literal scan outside the CONFIG block
- `#111` body void · `#1c1c1c` control bar · `#2a2a2a`/`#555`/`#eee`/`#bbb` control chrome — page/control CHROME only; every stage colour reads from CONFIG.
- `100` (band top % multiplier), `6` (fit floor px), `0`/`1` loop bounds, `performance.now` clock — STRUCTURAL.
- No subject-shaping literal outside CONFIG (text, timing, palette, geometry all CONFIG-derived).
HITs: 0.
