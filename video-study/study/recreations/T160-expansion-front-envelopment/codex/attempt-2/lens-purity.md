**Verdict — Construction purity clears the 70-point minimum at 95/100. The five-lens average and overall minimum are NOT ASSESSED.** This run has one of the five scores required for the build decision.

- **Self-contained construction.** `recreation.html`, from `<head>` through `frame()`, contains one canvas, inline CSS and JavaScript, and procedurally drawn stars, fronts, planet, ring, and pin. The supplied source contains no external asset references, specimen media, or rendered scene text or captions.
- **Configuration is the main score limit.** `recreation.html`, `<style>`, `<canvas>`, and the initialization block, duplicate the default stage dimensions in the HTML and CSS. The pin cutout proportions in `frame()` are fixed at `1/3`, `1/7`, and `1/6`, leaving visible subject geometry outside `CONFIG`. The document `<title>` also supplies browser-tab text outside the scene.
- **Deterministic at a supplied time.** `recreation.html`, `rng()`, `wobbles()`, `starField()`, and `stateAt()`, derive the geometry from configuration, seeds, and elapsed time. The live loop and `__seek()` use `performance.now()`, so the first rendered frame after seeking can vary with scheduling. The own-check’s claim that the 9500 ms state is identical to the 9000 ms state is too broad. `frontState()` clamps frontier time, while `stateAt()` returns the supplied `ms` and computes `ringAngle` from it.

**Limits —** This review used the supplied source and reported logic probes. Browser pixels, the supplied SHA-256, and the other four lens scores are unverified. The run-specific instruction to use the supplied stream superseded the standing disk-read instruction.

SCORE: 95  
BODY-WRITE: Verbatim return for `codex/attempt-2/lens-purity.md`, filed by the consuming seat.
