Verdict: **88/100** — the principal typing and strike beats match the supplied observations; the main timing defect is the premature loop into the exhibit during the segment tail.

Findings:

1. **Exhibit and map transition:** `CONFIG.exhibit` and `stateAt()` hold the exhibit through 4600 ms and animate its exit over 200 ms, completing at 4800 ms: matched. However, `stateAt()` raises `mapO` during that exit, making the map visible from just after 4600 ms, up to **200 ms earlier** than the observed map reveal at 4800 ms. For strict alignment, keep the map hidden until 4800 ms.

2. **Eyebrow typing and dwell:** Matched. `charsAt()` reveals the first glyph at 5450 ms. The supplied string contains 18 glyphs, so completion is **5450 + (18−1)×60 = 6470 ms**. The complete, unstruck eyebrow then dwells for **7600−6470 = 1130 ms**, matching the observation.

3. **Strike and struck hold:** Matched. `strikeP` draws the strike over **7600–8000 ms**, a 400 ms window. The struck eyebrow holds alone for **9250−8000 = 1250 ms**, matching the observation.

4. **Main typing and completion:** Matched. The eight-glyph main string completes at **9250 + (8−1)×70 = 9740 ms**. At 9500 ms, `charsAt()` returns **floor(250/70)+1 = 4** glyphs, producing the observed partial state `"A SP"`.

5. **Displayed hold and exit:** `mainCompleteMs()`, `holdMs`, and `exitMs` produce a full-opacity hold of **[9740, 13140)**: exactly 3400 ms measured from completion. The exit runs **13140–13540 ms**, placing both boundaries approximately **60 ms early** against the observed ~13200–13600 ms. This is a small discrepancy given the approximate observation anchors. `strikeO` reaches zero at 13340 ms, before the remaining text finishes fading, preserving the observed ordering. An exact nominal alignment would use a **3460 ms hold**, retaining the 400 ms exit.

6. **Derived cycle and segment tail:** The arithmetic is correct: **9740 + 3400 + 400 = 13540 ms**. The playback treatment is not faithful to the segment ending. `stateAt()` applies modulo immediately, restoring the full exhibit at 13540 ms instead of completing the exit and entering the next scene. Within the 14000 ms segment, this produces **460 ms of restarted exhibit**. A next attempt should separate the technique endpoint from repeat playback, finish the exit near 13600 ms, and reserve the remaining ~400 ms for the next-scene handoff.

Limits: Assessment uses the supplied source and segment observations. Rendered frame timing, browser scheduling, and the supplied SHA-256 binding were not independently verified. The build record’s reported test totals were not independently reproduced.

SCORE: 88
Body-write: none (read-only run)