# Payload manifest — T54 attempt 4 rescore wave (filed BEFORE firing)
Final source bound to every payload: recreation.html sha256 `88d9298ff848d8799f96c4e68457d487a84f945f51ba89daf8178321c2a23561` (identical for all five lens runs; printed in the build record and re-verified at filing).

## Allowlist (exact, per lens payload)
1. The lens instruction, modeled on `codex/attempt-3/instr-<lens>.txt`: standing header (consumer + decision priced · working record · body-write line, incl. "Scores are integers from 0 to 100") + that lens's brief + the neutral technique facts — with ONE amendment applied to every head: the segment-window bullet now prints BOTH samplings of the same frames (coarse and frame-granularity), the dispute between them, and the named constructed timeline (frame-granularity: hold ends 1100 ms, arrival 2000 ms, dwell to 6000 ms, pan-away 6000–7000 ms). No payload carries the coarse sampling alone as the instructed sequence.
2. The neutral facts packet: `codex/attempt-4/neutral-packet.md` — sanitized to the allowlist (source sampling, observed frames, both timelines, the constructed basis; construction facts and own-check results only). It carries no scores, deductions, targets, or reviewer behaviour.
3. The final recreation source, verbatim, under a source marker.
Nothing else is in any payload.

## Firing payloads (exact paths)
- motion: `codex/attempt-4/instr-motion.txt`
- timing: `codex/attempt-4/instr-timing-v2.txt` — SUPERSESSION: `instr-timing.txt` was assembled first and stays on disk UNFIRED; its lens brief's opening sentence printed the coarse sampling alone as "the segment's measured state sequence", which the basis-phrasing scan below caught before firing. The v2 payload is identical except that sentence now names both samplings and points at the technique facts. The scan result below is reported on the v2 payload.
- purity: `codex/attempt-4/instr-purity.txt`
- reusability: `codex/attempt-4/instr-reusability.txt`
- readability: `codex/attempt-4/instr-readability.txt`

## Exclusions (never fed)
scores.md · plan-T54.md · RUN.md · the internal build record (build-record-attempt4.md) · fit-table-attempt4.md · config-census-attempt4.md · checkpoint files · all prior lens returns · any prior score, target, delta or verdict · this manifest.

## Assembled-payload anchor scan (run on each firing payload before firing; result appended below before any lens fires)
- Numeric anchors: prior averages/lens values and bar/target values in score contexts — required: none.
- Qualitative anchors: cure codes, "deduction" (outside the instrument's own standing sentence), "target", "prior", excluded filenames, cure-to-lens commentary in filenames/comments — required: none.
- Basis phrasing: any statement of the coarse sampling alone as the instructed/measured sequence, or any payload omitting the dispute + constructed-basis statement — required: none (this scan caught the timing v1 brief; see supersession above).
- The recreation source's own comments were scanned first: they carry no cure codes, rule IDs, or score commentary (two comment identifiers were scrubbed before freezing; the scrub is printed in the build record). The word "score" occurs in the source only as the candidate-search variable name (bestScore/obsScore), an algorithm internal.

## Scan result (run on all five firing payloads after assembly, before any firing)
Numeric anchors — NONE (no prior averages, lens values, or bar/target values in score contexts; source-internal numbers are the build's own facts). Cure codes/labels — NONE. Excluded filenames — NONE. Lone-basis phrasing — NONE in any firing payload (the timing v1 draft's brief was caught by this scan and superseded by v2 before firing; v1 was never fired). Both-bases + dispute + constructed-basis statement — PRESENT in all five payloads (technique-facts bullet and the neutral packet's opening-evidence section). Two lexical hits, cleared: (1) the word "deductions" occurs once per payload inside the lens instruction's own standing sentence "Price deductions from 100 with the defect and its cure for each" — the instrument's wording, identical in every earlier payload, carrying no prior-attempt information; (2) the neutral packet's initials sentence says the 55 default initials were "verified unchanged against the previous build's extraction" — a construction regression fact carrying no score, deduction, or verdict. Payloads are CLEAR to fire.
