Reusability is strong within the existing webpage → logo fixtures, but CONFIG alone cannot substitute arbitrary scenes.

- **Broad coverage:** content strings, timing, easing, palette, typography, stage dimensions, and fixture geometry are configurable. The supplied source supports §6’s application census; no unused CONFIG key is apparent.
- **Credible swap evidence:** the recorded label changes, fieldA replacement, and dissolveMs→2000 exercise real application paths. The midpoint moves correctly to 3400 ms, with a derived 5800 ms residual.
- **−10: scene substitution is limited.** `sceneA.kind` and `sceneB.kind` change element IDs only. Construction always produces a webpage and triangle logo; another scene structure requires source changes. Counting these keys as “applied” overstates their functional coverage.
- **−5: timing safety depends on external checks.** The supplied HTML does not enforce non-negative durations, positive cycleMs, or D3≤cycleMs. Longer configurations can truncate the lifecycle at the cycle boundary. Recorded residual checks establish the tested configurations’ validity, rather than a production guard.
- **−3: configuration relationships lack validation.** Triangle positions and colours use separate arrays without checking matching lengths; geometry and text remain manually fitted when stage dimensions or content change.

Next cure: provide CONFIG-selected scene builders or declarative scene content, enforce timing and array constraints, and demonstrate a structurally different scene pair through CONFIG alone.

BODY-WRITE: none (read-only run)
SCORE: 82
