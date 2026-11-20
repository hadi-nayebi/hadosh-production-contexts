# Payload manifest — T23 attempt 16 scoring wave (filed BEFORE firing, A-C010-1c)

Frozen source: recreation-work-attempt16.html, sha256 53944a2fe5f97b04a407f81628c0adb6f9b9a5b4867f4bf31a94f58e0ad38cb0 (== checkpoint-attempt16-final.html, content-identical, distinct inode).

## Allowlist (the ONLY content in any payload)
Per-lens instruction (standing header: consumer + decision priced, working record, body-write requirement; the header carries the bar — average ≥85 AND no lens <70 — and NO prior score) plus three staged files, byte-identical across all five lenses:
- source.html — the frozen source, sha256 53944a2fe5f97b04a407f81628c0adb6f9b9a5b4867f4bf31a94f58e0ad38cb0
- facts.md — neutral technique record + behavioural facts, sha256 a01e026743de5e0298498632c101968c70a514ca14a0a0b948ca94a27331d2bb
- checks.txt — BUILT under the plan's extraction rule (current-candidate inputs, outputs observed on the current candidate, evidence limits only; no prior-attempt comparison, prior value, stage history, cure label, or lens-directed claim), sha256 9ef655b6ef7bfc09a7bdd2ef313c9f3d8249b80840bacf9bd670d3c51836244f

## Exclusions (verified absent)
RUN.md · scores.md · all prior Codex returns · prior scores and deltas · cure codes and cure-to-lens commentary · the plan and its review section · build records · stage own-checks files (checks.txt is built, never copied from them). The two clock policies are described in facts.md BEHAVIOURALLY as policy A / policy B (shipped default = B); no policy is named by its construction history. The recovery rule, the replacement rule, and the shared fallback policy are described behaviourally, with no plan labels.

## Anchor scan + seat byte inspection (executed on the assembled payloads before firing)
The seat inspected the assembled bytes of every staged payload file, including each lens instruction text, before sealing this manifest. Patterns scanned across all five assembled payloads: attempt numbers, prior-score numerals and prior source hashes, cure codes, amendment labels, assessment wording (plateau / drift / stage references / prior-attempt language).
Result: no hits, except (a) the word "verdict" inside the standing header's BODY-WRITE template line ("<what this verdict writes into the build record / next attempt>") — the prescribed return form's own placeholder text, carrying no number and no score, and (b) the source's own identifier `twoLineAttempted` inside source.html (source content, not commentary). Source comments were scanned and neutralized before the freeze (two comment lines; see own-checks-attempt16-final.txt).

## Payload shas (staged bytes, verified immediately before each firing)
- payload-motion.txt      24bce698c303162b932564aacbcb1a0d710899a124e2a8bc4b8f0f2c8d8a99c0
- payload-timing.txt      4a8d11071c36ad40ac8fff6288db81c72e88feb69a033249e4269797a39a2659
- payload-purity.txt      5af1233316993e2e113d9762e4a1a3f724d57e90ea8d6fc9afeef6a9933dd03f
- payload-reusability.txt 7d711b3c4c9a0dcd6643304b6646687c0936e276364ca2b0bfeab4feceeb5840
- payload-readability.txt 4169b624374891d197c3a4bfdfd78f101143d08f14ad91f71198ebd96063c05c

## Firing form
Local Codex (~/workspace/codex-local/node_modules/.bin/codex), fed stream (payload file redirected as stdin; no exec-tool stdin field), per-lens scratch cwd containing ONLY content copies of source.html / facts.md / checks.txt, --skip-git-repo-check, closed stdin beyond the fed stream, -o original written to ~/workspace/.scratch/cycle-031/T23-a16-<lens>-run<N>.txt, then content-copied create-once to codex/attempt-16/lens-<lens>-run<N>.md with sha256 verified identical; the fired payload is preserved create-once as codex/attempt-16/instr-<lens>-run<N>.txt before any re-fire. Every firing (including interim, failed, or empty) is preserved; an empty return is NON-GOVERNING and re-fired once on the identical preserved payload; a return showing anchor contamination is labelled CONTAMINATED, preserved, excluded, and re-fired on the re-verified clean payload. Each session's read scope prints in the build record.
