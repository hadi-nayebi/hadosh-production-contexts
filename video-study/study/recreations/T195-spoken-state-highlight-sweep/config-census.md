# config-census — T195 · attempt 1 (guard-config-census v3.1)
Build: recreation.html SHA-256 f328d783d1ee5d9c2a908106add3bbcd92f071b8e39bae083bdff799b482c17b (12,145 B; final build after the jev-prewave HOLD cure — fontPx 82 → 86 inside the amendment D9 bounds [76,88], priced in build-record.md).

## Key → application-site resolution (value flows into the named subject)
| CONFIG key | application site(s) |
|---|---|
| segmentStartS | deriveSchedule base + stateAt label base — every schedule time derives from it |
| totalMs | stateAt chunk-mount range end · render clock modulo · completion assertion instant |
| bgColor | stage background set at init |
| unspokenColor | lerpColor start point for every letter span, every frame |
| spokenColor | lerpColor end point for every letter span + label card color at init |
| fontStack | chunk + label fontFamily at init · measureText font in fittedFontPx |
| fontPx | fittedFontPx base size · label font size in render |
| fitWidthFraction | fittedFontPx bound — the measured-width fit rule itself |
| sweepFraction | deriveSchedule derived-window duration (mutation evidence: swap run at 1.0 re-derived all swap windows, harness SWAP-DERIVED line) |
| visualLagMs | deriveSchedule derived-window onset offset |
| minSweepMs | deriveSchedule derived-window duration floor |
| frontSoftnessLetters | wordState front range (N − 1 + S) + per-letter fill divisor |
| liftPx | wordState lift envelope amplitude (specimen + swap) |
| liftRiseMs | wordState rise divisor |
| liftSettleMs | wordState settle divisor |
| chunkLeadMs | deriveSchedule chunk mount times |
| stageRefWidthPx | fittedFontPx scaling denominator · render lift scale denominator |
| wordSpaceEm | inter-word spacer span width at chunk build |
| lineTopFraction | chunk + label vertical position in render |
| stageAspect | stage aspectRatio at init |
| labelCard.show/text/startSourceMs/dissolveStartSourceMs/endSourceMs | stateAt label state · label text at init (nested keys, each resolved) |
| lines[].words[].text | letter spans built per character at chunk build · wordState letter count |
| lines[].words[].onsetSourceMs/endSourceMs | deriveSchedule speech window (lift rise anchor + derived visual windows) |
| lines[].words[].visualOnsetSourceMs/visualEndSourceMs (8 measured words) | deriveSchedule measured override branch |

No unapplied key. No key consumed only by declaration/storage.

## CSS-variable setter check
No CSS variables are used anywhere in the file (grep `var(--` = 0 hits; grep `--` custom-property definitions = 0). CONFIG reaches CSS only through JS style assignments listed above. No unset-variable reference can exist. PASS.

## Literal scan outside the CONFIG block (per-constant classification)
- Colors `#111` (body void outside the stage) · `#1c1c1c` (control-bar background) · `#2a2a2a` / `#555` / `#eee` (control buttons) · `#bbb` (clock text) — page/control CHROME only; every stage colour reads from CONFIG (`#000000`, `#dedede`, `#f0ff05` occur once each, inside CONFIG). Structural (chrome), classification printed per the sibling form.
- CSS geometry `44px` min button height / `64px` min button width / `48px`-class control sizing, `8px`/`10px` gaps+padding, `1px` borders, `15px`/`14px` control text — control chrome dimensions; the 44 px minimum is the fleet tappability floor, not subject geometry. Structural.
- `100` (percent identities: width 100%, top fraction → %) · `1000` ×2 (ms-per-second identity in the two schedule bases) · `3` (easeOutCubic exponent — mathematical identity of the named easing) · `0.5` (font-refit tolerance in buildChunk — rebuild threshold, not a shaping value) · `0`/`1` (loop indices, clamp endpoints, boolean states). Structural arithmetic/mathematics.
- Strings `":"`/`"/"` in the stageAspect application — unit syntax of the CONFIG value itself. Structural.
No subject-shaping literal stands outside CONFIG: no colour, duration, geometry, or coefficient shaping the subject exists outside the CONFIG block (the earlier draft's CSS `.sp` width and `#stage` max-width were cured into CONFIG keys wordSpaceEm / stageRefWidthPx before this census ran — the census runs on the final build).

HITs: 0 — PASS for this leg.
