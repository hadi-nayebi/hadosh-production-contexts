Motion fidelity: **85/100**, assessed from source only; PIXEL-UNVERIFIED.

Bound artifact: `5513a091c048b30a54f3e3c3893c3992db6a8ffd9585f1272a5373a6ed1a7d67`.

Deductions and cures:

- **−10 — Opening beat lacks the completed first stack.** The reference opens with $67M and its tag already complete. Here its rows animate from 0–1,020 ms and its tag completes at 1,600 ms, leaving only 400 ms of completed first-stack hold before the second starts. **Cure:** expose a comparison playback mode that begins with the first stack complete; retain its construction animation in the labeled allocation-model mode.
- **−5 — Second reveal finishes late.** The second stack starts at 2,000 ms, finishes its rows at 3,020 ms, and completes its tag at 3,600 ms. The described reference has both stacks complete by approximately 3,000 ms. **Cure:** compress the second allocation beat into 2,000–3,000 ms while preserving row completion before tag entry.

Motion requirements satisfied:

- Bottom-up rows build in the correct 5·4·3·2·1 order, with actual eased scale/opacity animation. This is accepted as the explicitly permitted allocation model.
- Tags follow completed rows: each final pop ends 80 ms before its tag begins.
- Stack phases remain exclusive by construction: the second starts after the first tag completes.
- Completed bundles and tags persist without disappearing or restarting.
- Both stacks hold fully complete from 3,600–14,000 ms, providing a 10.4-second final hold.

This lens meets the ≥70 floor. Overall RECREATED-tier eligibility requires the other four lenses.

Body-write: none (read-only run); consumer to persist this return verbatim at `hidden_files/study/recreations/T66-money-stacks-sourced-totals/codex/lens-motion.md`.
SCORE: 85
