The schedule faithfully reproduces the measured tempo: CONFIG carries exactly (0ms, 0), (3000ms, 20), (6000ms, 37), and (7000ms, 39). Interpolation reveals lines at 150ms intervals, then approximately 176.47ms, then 500ms, hitting all three measured counts exactly.

The numeral uses the actual revealed-line count within the same render, so synchronization holds by construction. Final count 39 and the caption appear together at logical time 7000ms, followed by a 1000ms hold. Browser display occurs on the next animation frame.

The timing mismatch is the opening command: it begins empty and types over 260ms, whereas the specimen already shows it in the earliest evidence frame. This adds an unsupported opening beat and overlaps the first line’s reveal at 150ms. Render the complete command from t=0.

BODY-WRITE: Preserve the checkpoint-derived schedule and shared revealed-count calculation; change this build’s opening instruction to require the full command visible at t=0, removing the unsupported 260ms typing beat.
SCORE: 94
