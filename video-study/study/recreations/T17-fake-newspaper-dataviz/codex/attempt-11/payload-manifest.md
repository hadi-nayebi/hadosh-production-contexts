# Payload manifest — T17 attempt 11 (filed BEFORE firing)

Scored source: recreation.html sha256 67af9f1a891cdbbe43f36f365b7eea81ac3b5e0c5ead9b47635d5167207929e1 (== stage-6 freeze snapshot == live file at firing).

Allowlist per lens payload (assembled single stream, in order):
1. instr-<lens>.txt — lens instruction with standing header (consumer + decision priced · working record · BODY-WRITE line · scale line · SCORE line). Headers are NEUTRAL: no bar, no prior average, no target, no pass arithmetic appears in anything a lens can read (the plan's landed header correction: for this item the numerical bar equals the exact central target, so a bar-bearing header would leak the target vector).
2. neutral-technique-facts.md — specimen facts from the packet digest + verification limitations (PIXEL-UNVERIFIED per capture).
3. score-blind-build-record.md — current-build construction facts and measurements only.
4. own-check-packet.md — neutral own-check packet: suite coverage + stage probes + the two pre-scoring leg tables in full (fit table, configuration census, positioned-text entries by actual element kind).
5. recreation.html — the scored source, comments scanned (5 comments, all empty markers; nothing to neutralize).

Exclusions (never in any payload): scores.md · prior lens returns · RUN.md / plan files · cure labels and amendment codes · prior or target scores · score forecasts · the seat's filing arithmetic.

Anchor scan (before firing): the scan covered the exact launch arguments, the fed stream (each assembled payload), the allowlisted files, and each per-lens scratch cwd's readable file set. Terms: prior averages and sums, prior attempt tags, amendment/cure codes and labels, plateau/forecast wording, delta wording, target/pass arithmetic — 0 hits in all five payloads and all five scratch cwds.

Firing form: local Codex binary, fed stream (payload file as stdin redirect, no exec-tool stdin field), per-lens dedicated scratch cwd containing only allowlist content copies, --skip-git-repo-check, read-only sandbox, -o original to ~/workspace/.scratch/cycle-031/T17-a11-<lens>.txt, then content copy under codex/attempt-11/ with sha256 verified identical. Every firing preserved create-once before any re-fire.
