# T107 attempt 2 — payload manifest (A-C010-1c) + anchor scan (A-C005-2 + A-C008-4)

Filed BEFORE any attempt-2 lens firing. Frozen source: recreation.html sha256 **102f04208805b908027bd1caa8d709fd33afd33e9495fe77c22d25b1f70dd018**, snapshotted create-once at `codex/attempt-2/final-source.html` (identical sha, inode ≠ working file). All five payloads embed this identical source; all five returns must bind to it.

## Authoritative payload schema (ONE schema for all five lenses — plan-review finding 2)
Every payload `codex/attempt-2/payload-<lens>.txt` contains, in order:
1. Standing header (consumer + decision priced · working record · BODY-WRITE line) + the explicit scale line **"Scores are integers from 0 to 100"** + the final-source binding sha.
2. NEUTRAL FACTS — score-blind specimen measurements from the segment census (push visible at source 43.50 s, maximal at 43.75 s, cut in (43.75, 44.00]; post-cut growth ≈2× over ≈500 ms; wordmark centred ≈1000 ms post-cut; x-span coincidence at the cut) + the current construction facts (push 625 ms; settle 500 ms / scale 2.0 eased; wordmark arrival 1000 ms; t=0 allocation basis) + the **A-C010-3 both-bases dispute print**: Basis R (an earlier bound default of 1500 ms for the push, set under the t=0 allocation) is named as superseded, Basis E (the segment-evidence basis above) is named as the basis this build binds. No scores, no deductions, no cure expectations, no recovery language anywhere in this section.
3. The lens instruction (one lens only).
4. The NEW recreation.html in full (the frozen source above).
5. The score-blind build record (`build-record-attempt2-blind.md` verbatim).
6. The measured-fit leg output (`fit-table-attempt2.md` verbatim).
7. A neutral own-check packet: check names + PASS/FAIL results + totals only (196 PASS / 0 FAIL), no cure interpretation.

**Exclusions (never in any payload):** scores.md · prior scores in numbers or words (no prior average, no per-lens priors, no deltas) · prior lens returns · RUN.md · the plan · cure-to-lens commentary · target movements. The bar (average ≥ 85, no lens < 70) appears only inside the standing header's decision line, exactly as in the attempt-1 header form.

**Comparability limitation (printed per finding 2, seat-side):** the attempt-1 packet carried components 1–6 in an earlier arrangement (facts + blind record + fit table, no separate own-check packet section); attempt 2 adds component 7 and the dispute print. The feeding therefore differs in packet arrangement; the delta is read with that limitation named, not as unqualified pure movement. The instrument (five lenses, same bar, same feeding discipline) is unchanged.

## Anchor scan (assembled payloads, pre-firing)
- Filenames/labels: `payload-<lens>.txt`, `lens-<lens>.md`, `attempt-2/` — attempt number only; no score, delta, or verdict token in any path.
- Source comments (A-C008-4 — the source is payload surface): the frozen source's comments are nine neutral construction notes (validation, derived schedule, anchor geometry, the outline's push-survival cap, construction, the shared mark primitive, the two scene headers, render). Scan result: **no cure codes, no amendment labels, no lens commentary, no scores** in any comment. The stale derived-schedule numeric comments from the prior build were removed during this build (they no longer matched the derived values).
- Assembled-payload scan (run on the five payload files before firing): searched for the prior average and per-lens priors as tokens, for "scores.md", "delta", "cure" — hits only where the standing header or the blind record use a word in a non-anchor sense, each inspected; the scan output is recorded in build-record-attempt2.md.

## Census exception (plan-review finding 6 — append-only scores.md)
The closing preservation census treats the baseline set as: **immutable files** (everything else in the carried baseline, including recreation-attempt-1.html and all attempt-1 evidence) — exact sha equality required; **scores.md** — append-only exception: its baseline bytes must stand as an exact prefix of the closing file, followed only by the Attempt 2 section. A census failure is never resolved by refreshing the baseline.
