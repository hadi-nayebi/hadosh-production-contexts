Timing-only assessment: **84/100**. This clears the ≥70 lens floor; the five-lens tier decision remains separate.

| Phase | Derived timing | Finding | Deduction |
|---|---|---|---:|
| Entry | Card fades in 2.8–3.1 s; first line 3.4–3.7 s | Preserves blank opening; first line still transitioning at the ~3.5 s anchor. | −2 |
| Line cadence | Starts 3.4/4.0/4.6 s; complete 4.9 s | At the ~4.5 s all-lines anchor, line 3 has not started. Completion is 0.4 s late. | −8 |
| Count placement | Starts 5.3 s; complete 5.6 s | Follows completed list. No measured count-entry anchor supports a deduction. | 0 |
| Hold | Exit starts 10.5 s | Ends the full-opacity hold ~0.5 s before the ~11 s anchor. | −3 |
| Exit | Fully gone 11.1 s | Disappears ~0.4 s before the ~11.5 s anchor. | −3 |
| Duration | 14.000 s | Exact match. | 0 |

Next attempt: a candidate schedule is `firstLineDelayMs: 400`, `lineMs: 500`, `holdMs: 5800`, `fadeMs: 500`, retaining other timings. This yields line completion at 3.5/4.0/4.5 s, count entry at 4.9 s, hold through 10.7 s and disappearance at 11.2 s. Tune hold to **6100 ms** instead to reach **11.0/11.5 s** hold/exit anchors.

Source-based assessment; PIXEL-UNVERIFIED.

The filesystem tool failed to start, so I could not file `codex/lens-timing.md`.

BODY-WRITE: None; intended file `codex/lens-timing.md` remains unwritten.
SCORE: 84
