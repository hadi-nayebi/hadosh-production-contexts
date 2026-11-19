Timing is checkpoint-driven for every line arrival, message arrival, and hard cut; playback reads those tables without index-specific timing branches.

The default density fits the supplied facts: title lines land at 0.6, 3.4, and 6.2 seconds; four chats arrive from 1.2–10.6 seconds; six cuts occur by 13.85 seconds. The 700ms highlight sweep occupies about 29% of a typical 2.4-second shot, proportionate to this fast section.

The 7.3s cut followed by the 7.4s chat preserves two distinct states. Independent event ages keep the pop coherent across the cut, although a 100ms separation needs playback verification for perceptual distinction.

Residual timing defects:
- Sweep and pop durations remain global constants rather than per-line and per-message records.
- Overrides preserve valid ordering and completion, but not tempo: increasing duration adds idle time; replacement tables can bunch events or carry sweeps across cuts without an explicit overlap policy.
- The loop adds another hard reset at 15s, beyond the six internal cuts.
- Exact specimen checkpoint fidelity is unproven by the supplied frame evidence and logic checks.

BODY-WRITE: Carry forward per-event sweep/pop durations and an explicit override overlap/density policy; verify the 100ms cut-to-chat separation and loop reset in playback before claiming full timing fidelity.
SCORE: 84
