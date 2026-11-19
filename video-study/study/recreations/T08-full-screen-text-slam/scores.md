# T08 — Full-Screen Text Slam · SCORES

Technique: T08 (packet P1, "Look What I Can Do" @ 0:42 and 2:37) · Consumer: transition staple (DLC/multilingual production containers)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 0:41–0:47, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 003, Wave 1)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 100 | codex/lens-motion.md |
| Timing / tempo match | 79 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 78 | codex/lens-reusability.md |
| Readability | 86 | codex/lens-readability.md |

**Arithmetic:** (100 + 79 + 100 + 78 + 86) / 5 = 443 / 5 = **88.6 average** · minimum lens **78**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 3.6; every lens clears the 70 floor (lowest: reusability 78). Tier: **RECREATED** (tier move itself is the style-library job's act on this evidence).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT (Amendment A1 — two lenses name it; primary cure): rendered-bounds fitting.** Reusability (78) + readability (86) both name: canvas `measureText` excludes the element's CSS `letter-spacing: 0.01em`, so the rendered line is slightly wider than the fitted width; and the 16 px minimum font floor can override the computed fit for extreme phrases / narrow stages, so `overflow:hidden` would clip rather than fit. The build's fit claim is therefore BOUNDED, not unconditional: it is proven for the specimen defaults and the 34-char swap stress case (44 px, width 829.0 ≤ 844.8 bound), not for arbitrary lengths. Cure: fit on actual rendered bounds including letter-spacing and tilt; replace the silent floor with a minimum-readable-size policy that rejects overlong phrases with an instruction to shorten them; verify at a 360 px stage.

1. **Hold default + cueing** (timing 79): 1400 ms ≈ 3.1 beats at the piece's ~133 BPM — readable but lingering vs the specimen's ~1 s punctuation hold. Cure: default holdMs nearer 900–1000; where a production container drives the slam, trigger from the punchline cue and return to picture at hold expiry rather than looping text-to-text autonomously; use absolute cue deadlines to avoid recursive-setTimeout drift.
2. **Config completeness + validation** (reusability 78): height allowance 0.62, min font 16, reference width 960, fallback stage 960×540, min hold 100, and fallback phrase "SLAM!" still live in logic/CSS rather than CONFIG; direct CONFIG edits and malformed URL values (whitespace-only phrases, invalid colors/weights/margins) are not validated. Cure: centralize the constants as config keys; normalize/validate all config at load.
3. **Font guarantee** (readability 86): weight 900 depends on installed system fonts; the stack does not guarantee a heavy display face on every device. Cure: bundle a verified heavy display font as a build-created asset (weigh against the self-contained form), or document the dependency where the container adopts the machinery.

Own checks before the wave (build-record.md §5): swap test PASS 16/16 at logic level (words + holdMs 900 + gold palette swapped; long-phrase fit verified) · purity grep zero hits · no-motion grep zero hits (no transition/animation anywhere) · segment ffprobe-verified (960×540, 6.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.
