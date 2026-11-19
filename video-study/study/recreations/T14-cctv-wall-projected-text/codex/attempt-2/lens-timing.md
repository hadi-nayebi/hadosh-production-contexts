The default timing follows three explicit checkpoints and preserves a measured, locked-off pace.

| Event | First character | Completion | Hold before next event/wrap |
|---|---:|---:|---:|
| TV question | 400ms | 1940ms | 627ms |
| Wall answer | 2567ms | 3932ms | 468ms |
| TV follow-up | 4400ms | 4785ms | 1215ms |

The wall remains bare at 2500ms and starts at 2567ms, matching both supplied frame observations. Independent starts and character speeds keep the exchange sequential; the final hold gives the punchline room before wrap. No default phase overruns or appears mechanically rushed.

The timestamp derives from elapsed milliseconds through UTC date arithmetic: it advances one second per second, handles calendar rollover, and resets consistently with the six-second scene loop.

Exact specimen correspondence remains unproven for the question onset, both TV completion times, and follow-up onset. The source establishes a coherent schedule, but no rendered playback was available to confirm perceived tempo. Also, override validation permits follow-up completion exactly at wrap, allowing its last character no visible hold.

BODY-WRITE: Preserve the default checkpoint schedule; add specimen frame anchors for the remaining event boundaries and require a positive final hold in override validation, replacing `followComplete <= durationMs` with a minimum-hold constraint.
SCORE: 91