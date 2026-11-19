# Payload manifest — T17 attempt 10 (filed BEFORE firing, A-C010-1c)

Scored source: recreation.html sha256 0bd6e70fa1a687b45737cd3994f8eb7dc6355f1e71d2bf99d400f2a861cb3bb4 (== S7 freeze snapshot == live file at firing).

Allowlist per lens payload (assembled single stream, in order):
1. instr-<lens>.txt — lens instruction with standing header (consumer + decision priced · working record · BODY-WRITE line · scale line · SCORE line). Header carries the BAR only (average at least 85 AND no lens below 70), never any prior score.
2. neutral-technique-facts.md — specimen facts from the packet digest + verification limitations (PIXEL-UNVERIFIED).
3. score-blind-build-record.md — current-build construction facts and measurements only.
4. own-check-packet.md — neutral own-check packet: suite coverage + handoff/hold measurements + the two pre-scoring leg tables in full (fit table, configuration census).
5. recreation.html — the scored source, comments scanned (8 comments, none carrying cure codes, amendment labels, scores, or evaluative wording).

Exclusions (never in any payload): scores.md · prior lens returns · RUN.md / plan files · cure labels and amendment codes · prior or target scores beyond the bar · score forecasts · the seat's filing arithmetic.

Anchor scan (assembled payloads, before firing): terms [81.6 · attempt 9 · attempt-9 · R-A10 · A-C0* · plateau · forecast · prior average · previous attempt · delta vs · cure] — 0 hits in all five payloads. Filenames/labels scanned with the same terms — 0 hits beyond the attempt-10 tags themselves.

Firing form: local Codex binary, fed stream (payload file as stdin redirect, no exec-tool stdin field), per-lens dedicated scratch cwd containing only allowlist content copies, --skip-git-repo-check, read-only sandbox, -o original to ~/workspace/.scratch/cycle-030/T17-<lens>.txt, then content copy under codex/attempt-10/ with sha256 verified identical. Every firing preserved create-once before any re-fire.
