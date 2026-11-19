Timing score: 78/100. Source review supports the default pacing, but override coherence and the cut count need correction.

- Title arrivals at 600/3400/6200 ms span the first half; chat arrivals at 1200/4200/7400/10600 ms spread activity across the window. Both use checkpoint data.
- The cut table defines six framing states but only **five internal hard cuts**: 0 ms initializes the first framing. The loop reset supplies another jump at 15000 ms, outside the stated 14.5 s interval.
- Overrides are applied without validation or rescaling. `durationMs=1000` suppresses every chat and two title lines. Missing title checkpoints silently become 0; unordered cut checkpoints break the early-exit lookup; negative or out-of-window checkpoints are accepted.
- The 700 ms highlight sweep occupies about 29% of a typical 2.4 s shot: proportionate to the default tempo. It does not adapt to shorter overridden intervals. Chat pop duration remains hardcoded at 220 ms.
- The build record’s claimed nearest chat/cut separation of 550 ms is incorrect: the 7400 ms chat follows the 7300 ms cut by **100 ms**.

Required cures: distinguish initial framing from six actual cut events; validate checkpoint order, range, and title-table length; define duration-change behavior; parameterize chat pop duration; test shortened windows and tightly spaced events. Exact specimen synchronization remains unverified by the supplied frame evidence.

BODY-WRITE: Amend build-record.md and scores.md with the five-internal-cut finding, the 100 ms cut/chat collision, and an override-validation requirement before claiming timing coherence; filesystem writes were unavailable in this run.
SCORE: 78
