Motion fidelity: 92/100 — source-based; PIXEL-UNVERIFIED.

Bound artifact: `recreation.html`  
SHA-256: `a30b374eb21468a89c058f7de6a47b752f7f7a4dea7f22960b8dcaa271f3a626`

The required sequencing is implemented:
- Act 1 opens with the first pyramid and tag complete. The second arrives as complete artwork during 2.0–2.5 s.
- Act 2 builds rows bottom-up, with each row popping from 70% scale over 140 ms. Each tag waits until its stack’s final row has completed.
- Stack 0’s tag completes at 16.6 s; stack 1 starts at 17.0 s. Their build phases remain exclusive.
- Completed rows and tags persist within each act. The final state holds from 18.6–22.6 s, then remains displayed when playback stops.

Priced finding:
- **−8: The second stack fades into a fixed position instead of entering through camera-pan movement.** Its bundles and tag change opacity together, but receive no positional movement during Act 1. This preserves the measured timing and complete-stack arrival, while substituting the movement mechanism. **Cure:** translate the completed second stack and its tag together into their final positions during 2.0–2.5 s, using source-observed direction and displacement; verify that entrance against the segment.

This lens clears the 70-point floor. The overall RECREATED-tier decision requires the other four lenses.

BODY-WRITE: none (read-only run); consumer to persist this return verbatim at `hidden_files/study/recreations/T66-money-stacks-sourced-totals/codex/lens-motion.md`.
SCORE: 92
