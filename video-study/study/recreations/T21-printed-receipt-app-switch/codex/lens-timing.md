The default timeline gives each beat room: printing finishes at 3.2 s, the receipt holds alone for 1 s, cards enter at 4.2 s, and the phone enters at 7 s. Typing completes at 9.5 s; the reply starts at 10.3 s and finishes its pop at 10.65 s, leaving 1.35 s fully settled before looping.

Timing is checkpoint-priced. `computeState` reads every phase boundary from the table; receipt rows and LED characters derive from the print span. Render contains no independent timing boundaries. The LED completes at **2080 ms**, however; checking that it is complete at 3200 ms does not establish its actual completion time.

Override coherence is incomplete:

- `phoneAt=11000` is accepted, but typing starts at 11400 ms, after both `typedAt` and `replyAt`. The reply precedes the question.
- Duration-only overrides scale all checkpoints but leave transition durations and typing delay fixed. At the accepted minimum `durationMs=1000`, typing starts around 983 ms despite `typedAt=792`; the reply begins around 858 ms and cannot finish its 350 ms pop before wrapping.

Cure: enforce checkpoint ordering with sufficient transition space, and scale subordinate durations with the timeline or derive them from neighboring checkpoint spans. Add tests at the minimum accepted duration and late phone overrides.

The default allocation matches the requested checkpoint specification. Exact source-tempo fidelity remains unproven: the supplied source evidence still shows an incomplete LED around +5 s, whereas this implementation completes it at +2.08 s.

BODY-WRITE: Record the default timing as passing, replace the blanket override-coherence claim with the demonstrated limits, and require ordered checkpoints plus proportionally scaled subordinate timings before claiming all accepted overrides preserve tempo. This review used the supplied source; filesystem access failed, so no local files were changed.
SCORE: 83
