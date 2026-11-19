# S2b — Duration policy ONLY (built on the S2a checkpoint) · T02 attempt 3

Policy: SCHEDULE-WITHIN-DURATION, REJECT-AND-WARN, resolved as one joint
tuple (effective schedule · line count · totalDurationMs · captionAtMs)
with exactly one outcome: (a) schedule + caption fit → accept;
(b) schedule fits, caption beyond duration → caption alone clamped with
a named warning, schedule untouched; (c) schedule final anchor beyond
duration → schedule rejected to the validated default, caption
re-checked on the default table; (d) the default table itself violates
the duration → the DURATION edit is rejected, totalDurationMs reverts
to its validated default (8000 ms) with a joint-rejection warning.
Timings are never silently rescaled; rendering never clamps before
completion. This stage also adds the zero-span interval guard in the
reveal-time scan (derived plateau intervals cannot divide by zero).

Own-check output (group S2b on the S2b source): **6 PASS, 0 FAIL** —
cases (a), (b), (c), (d) as above · non-finite duration reverts ·
negative caption clamped. R-3 filed verbatim: duration edited to
6000 ms against the default table ⇒ duration reverts to 8000 ms,
schedule == default, completion at 7000 ms, joint-rejection warnings
present. S1 regression group re-run on this source: 30 PASS, 0 FAIL.

Checkpoint: S2b-source.html sha256 0b1ca7d94bab980da69e7e895ce9d79e62238bbd1aaf04f2aa4891e461d6ef16.
Effect record: duration policy class — PASS per assertion above.
