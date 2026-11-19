Timing uses three explicit checkpoints, with independent typing durations and genuine holds:

| Event | Start | Complete | Hold before next event/wrap |
|---|---:|---:|---:|
| TV question | 400 ms | 1940 ms | 627 ms |
| Wall answer | 2567 ms | 3932 ms | 468 ms |
| TV follow-up | 4400 ms | 4785 ms | 1215 ms |

The wall remains bare at 2500 ms and reveals its first character at 2567 ms, matching both supplied frame anchors. The opening pause, separated exchanges, and final hold support the slow, locked-off pace without an obvious rushed or dead phase.

The timestamp adds elapsed milliseconds to the UTC base, advances one second per second, handles calendar rollover, and resets consistently with the six-second loop.

Full timing fidelity remains unproven: the supplied specimen evidence does not establish the other event boundaries or typing rates, and rendered playback was unavailable. One scheduling weakness affects overrides: validation permits the follow-up to finish exactly at loop end, eliminating its final hold; the default avoids this.

BODY-WRITE: Preserve the default checkpoint schedule; require a positive final hold for accepted overrides, and obtain specimen completion-frame anchors before treating all typing rates and holds as verified matches.
SCORE: 92