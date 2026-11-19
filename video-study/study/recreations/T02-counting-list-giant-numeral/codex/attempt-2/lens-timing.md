The timing schedule satisfies every supplied timing requirement:

- CONFIG carries the exact checkpoints: 0/0, 3000/20, 6000/37, 7000/39.
- Piecewise interpolation produces 150 ms per line, then approximately 176.47 ms, then 500 ms. The final two reveals occur at 6500 and 7000 ms.
- Rows and numeral use the same computed `shown` value in each render, preventing independent-clock drift.
- Caption and final count land together at 7000 ms, followed by the configured one-second hold.
- The full command is assigned before animation starts and remains unchanged, matching the earliest evidence frame.

These findings establish schedule fidelity from source; rendered playback remains unverified as disclosed in the build record.

BODY-WRITE: Record the timing lens as fully satisfied; preserve the measured checkpoint table, shared row/count computation, full-command opening, and simultaneous 7000 ms count/caption landing in future attempts.
SCORE: 100
