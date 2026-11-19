# Payload manifest — T100 attempt 2 rescore wave (A-C010-1c) · filed BEFORE any lens firing

**Bar (stated in every lens header):** average ≥ 85 AND no lens < 70. Scores are integers 0–100.
**Final source bound:** recreation.html sha256 `3b13704132f220b8252974b75e67729ddbf58c53e2ab0c6af55738d5dc95be27` — all five payloads embed this identical source.

## Allowlist (the ONLY payload contents, per lens)
1. Standing header (consumer + decision priced · working record · body-write requirement · scale line · bar).
2. That lens's instruction (one lens only).
3. The neutral packet `neutral-packet-attempt2.md` (technique facts from segment evidence · three clocks · the required both-bases neutral entry · construction description · own-check packet with check names/results and no cure interpretation).
4. The full attempt-2 `recreation.html` source (comments anchor-scanned: the source contains no comments carrying cure codes, amendment labels, scores, or commentary — verified by grep for comment markers; the only comments are the CSS-free plain structure, none present in the script).

## Required both-bases neutral entry (verbatim substance, inside the neutral packet)
Basis A: 14,000 ms segment-length period, 10,900 ms residual hold. Basis B (built): 6,000 ms authored cycle, 3,200 ms residual hold. Governing observations named (pencil present ≤3.25 s · red beat ≈4.5 s · green beat ≈5.0 s · cursor/transition by 5.5–6.0 s · no measured long static hold in the window). 6,000 ms disclosed as authored, not measured. The disagreement over retaining the segment-length period is stated. No prior scores or deduction language appear in the entry or anywhere in any payload.

## Exclusions (never in any payload)
scores.md · RUN.md · plan files · prior lens returns (final or interim) · prior averages or per-lens scores · target scores · cure-to-lens commentary · build-record-attempt2.md (the seat's filing; the neutral packet carries its score-blind facts) · checkpoint files.

## Anchor scan (pre-firing, on every assembled payload)
- Numerical anchors: search each payload for the prior average and prior per-lens score strings as score claims — the scan greps for "84.0", "SCORE:" lines not belonging to the header's closing requirement, and lens-score pairings; hits block firing.
- Qualitative anchors: no cure codes (C1/C2/C3 labels), no amendment labels, no "priced deduction" language in the neutral packet or source comments.
- Filenames/labels: payload files are named instr-<lens>.txt; scratch packet copies keep their neutral names (recreation.html, neutral-packet-attempt2.md).

## Firing form
Per lens: dedicated scratch cwd containing ONLY content copies of recreation.html + neutral-packet-attempt2.md · local Codex in read-only mode with the git-repo check skipped · ONE stream (payload file contents piped as the single stdin stream) · output written to a /tmp path first, then content-copied to codex/attempt-2/lens-<lens>.md with sha256 verified identical · each payload preserved create-once at codex/attempt-2/instr-<lens>.txt BEFORE any re-fire · each session's read scope printed in build-record-attempt2.md.
