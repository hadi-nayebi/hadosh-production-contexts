**Timing / tempo: 66/100. Do not lift the timing engine as-is.** Default arithmetic is correct; runtime timing guarantees exceed what the implementation supports. This verdict is source-based, without playback verification.

- **Correct nominal schedule.** Each appearance totals 1,950 ms; three total **5,850 ms**. `buildTimeline` assigns correct offsets. For a positive cycle total, `stateAt` correctly selects half-open intervals, wraps at 5,850 ms, and skips zero-duration phases.

- **900 ms dwell: defensible, near the slow end of “flash.”** It meets the supplied **<1 s** observation and allows recognition of filled versus empty regions. It does not establish that viewers can read twelve chapter labels, particularly two-line labels on a phone. Price this as **progress recognition**, not comprehensive tracker reading. Exact specimen tempo remains unverified.

- **650 ms dive: plausible duration/scale pairing.** Actual endpoint scale exceeds the nominal 3.1×: about **5.23× at 360 px**, with accelerating easing. That supports a forceful dive rather than a gentle zoom. However, the easing finishes with substantial velocity before abruptly stopping; the 150 ms hold is a static stop, not an eased settle. Playback must establish whether that punctuation works.

- **Deadline scheduling only partially resists lateness.** `schedule` advances `stepIdx` by one instead of selecting the phase currently due. Modest lateness is recovered through shorter subsequent waits. Larger delays replay expired phases, and crossing a cycle boundary can introduce almost a full-cycle wait: if the first dwell callback arrives at **6,000 ms**, it starts appearance 1’s dive and schedules its end at **7,400 ms**. The intended state is appearance 1’s dwell, ending at **6,750 ms**. Cost: visible phase errors after throttling or stalls.

- **CSS animation ignores remaining phase time.** A dive callback arriving at 937 ms starts a full **650 ms** transition, but hold begins at 1,550 ms. Arrival therefore occurs at 1,587 ms, consuming **37 ms of the nominal 150 ms hold**. Larger lateness can leave the zoom unfinished when pause hides it. The pure delay test does not verify this runtime behavior.

- **Zero-duration support is incomplete.** The timeline records zero correctly, but the engine still dispatches each zero-duration phase through `setTimeout`; those callbacks consume real time and can trigger intermediate DOM changes. With all four durations zero—accepted by validation—the cycle total is zero, modulo calculations become `NaN`, and scheduling degenerates. Cost: the advertised exact-duration configuration contract fails.

- **Resume breaks dive continuity.** `play` saves but never restores the frozen transform. It calls `setDive(..., false)` to jump directly to the endpoint, then animates to that same endpoint. Cost: pausing mid-dive and resuming visibly skips the remaining movement.

For the next attempt, drive phase selection and animation progress from elapsed timeline time, skip zero-length phases synchronously, define an all-zero policy, and verify delayed callbacks across multiple phases and cycle boundaries. Preserve the default dwell provisionally; require playback before accepting the dive tempo.

SCORE: 66
BODY-WRITE: This verdict records correct nominal arithmetic but rejects as-is timing reuse; the next attempt must repair elapsed-time phase selection, remaining-duration animation, zero-duration handling, and pause/resume continuity, then verify dive tempo in playback.
