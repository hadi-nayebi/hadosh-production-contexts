# scores — T170 Vertical name-roll ticker · attempt 1 · Cycle 026 Wave 23

- Build: recreation.html · SHA-256 **6817b3feb101925a93d921f517c0b34f146eb70dd67a33255b2e4610edfecc01** — identical SHA bound in all five lens payloads (payload-motion/timing/purity/reusability/readability.txt) and in config-census.md.
- Schedule basis: **segment-anchored** (full 10.04 s loop; recreationMs = videoMs). Census-anchor mapping fed to the timing lens as a named element (1600 B02 p=0.333 · 4880 B09 p=0.333 · 9720 settled flat · 9880 empty).
- **PIXEL-UNVERIFIED** — no browser binary in this seat; verification is state-function (LOGIC) level + the comparison page as render surface.
- Prewave: jev-prewave firing 1 HOLD (ASSERTED-CHECKS — missing stateAt(9880) boundary probe + fit-instrument pricing) → cured the boundary probe (raw 9760/9879/9880 filed in build-record); firing 2 HOLD (fit instrument + missing determinism census) → cured the determinism census (0 randomness tokens, raw) and fed the binding fit-spec excerpt; interim returns preserved at codex/jev-prewave-interim1.md + codex/jev-prewave-interim2.md. Firing 3: **FIRE-WAVE** (parameterization 0.80→, purity 0.90→, own-checks 0.90, fidelity 0.95; one minor census-wording inconsistency named and cured in config-census.md). Disposition: APPLIED at every firing — no HOLD was overridden; the wave fired only on FIRE-WAVE.
- A6 legs: fit-table.md **HITs 0** (23 rows, character-width instrument; binding row "NALPAK & SCHUSTER" est. 594px vs clip 700) · config-census.md **HITs 0** (two first-draft shaping literals + the lineH consumption cured into CONFIG pre-wave).
- Own checks: swap EXACT (4 custom names + bursts trimmed 4/4 + timingScale 1.5 → B02 start 2160 + ink #ffd75e) ALL PASS · count assertion 23/23 MATCH · node --check PASS · determinism census 0 hits · zero-state stateAt(9900) null PASS · boundary stateAt(9880) empty PASS · phase probes 1600/4880/5100/9720/9820/200 ALL PASS. Purity grep: 0 specimen-media hits; 4 internal `url(#…)` fragment references classified in build-record (purity lens independently scored 100).

## Lens scores (returns filed verbatim in codex/)
| Lens | Score | Return |
|---|---|---|
| motion | 94 | codex/lens-motion.md |
| timing | 100 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 92 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic: sum = 94 + 100 + 100 + 92 + 86 = **472** · average = 472 / 5 = **94.4** · minimum = **86**.
Bar: average ≥ 85 AND minimum ≥ 70 → 94.4 ≥ 85 ✓ · 86 ≥ 70 ✓.

## Verdict: **PASS** — RECREATED tier (attempt 1)

- Family baseline line: T132 serial presentation attempt 1 FAIL 83.2 (76·82·100·76·82) — this attempt **94.4 beats the family baseline by +11.2**; the §2c WHY obligation (priced against a FAIL at or below 83.2) does not trigger. The T132 reusability cure binds and held: onsets are consumed from CONFIG by the one state function (reusability 92, vs T132's 76).
- Predicted stuck lens: **READABILITY** — it is the wave minimum (86) as predicted, but it clears the floor by 16; the sheen's mid-roll legibility priced as a risk, not a defect. Its named next-attempt cure (rendered-hold verification of the two longest names + roll anchors at 360px) is a pixel-verification debt, recorded here for practice — no confirmed defect established by the lens.
- Reusability's named cure (92): the sheen end stops' ink override is implicit in build() — encode the ink reference explicitly in CONFIG. Priced as a next-attempt refinement, not a bar defect.
- Tier hand-off: RECREATED — the style-library tier move is the library's act, filed to its board by the seat.
