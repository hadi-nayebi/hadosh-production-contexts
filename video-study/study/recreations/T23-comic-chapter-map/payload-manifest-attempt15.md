# Payload manifest — T23 attempt 15 scoring wave (filed BEFORE firing, A-C010-1c)

Frozen source: recreation.html, sha256 17e9434de0147f57e8c9ed4fd39cd986a626d8cf49b82c35ce4da39c6ea067bb (== checkpoint-attempt15-final.html).

## Allowlist (the ONLY content in any payload)
Per-lens instruction (standing header: consumer + decision priced, working record, body-write
requirement; the header carries the bar — average ≥85 AND no lens <70 — and NO prior score)
plus three staged files, byte-identical across all five lenses:
- source.html — the frozen source, sha256 17e9434de0147f57e8c9ed4fd39cd986a626d8cf49b82c35ce4da39c6ea067bb
- facts.md — neutral technique record + measured behavioural facts, sha256 7ef1fc6ffc83c6042def4030b1fbe1c193e53f2ebb6b9e8fe89fc721a55dfeac
- checks.txt — neutral executed own-check packet, sha256 da9cf5cc7f8bdf5f0c2bd45ae77f187145ba08a6e39df85991a7b80dffee2d18

## Exclusions (verified absent)
RUN.md · scores.md · all prior Codex returns · prior scores and deltas · cure codes and
cure-to-lens commentary · the plan and its review section · build records. The two clock
policies are described in facts.md BEHAVIOURALLY as policy A / policy B (shipped default = B);
no policy is named by its construction history.

## Anchor scan (executed on the assembled payloads before firing)
Patterns scanned: attempt numbers, prior-score numerals (72.4 / 362 / 425), cure codes
(C-15-*), amendment labels (A-C0*), assessment wording (drift / plateau / scored).
Result: no hits, except (a) the standing header's generic phrase "next attempt" in the
BODY-WRITE line (the standing form, no number, no score) and (b) the source's own identifier
`twoLineAttempted` inside source.html (source content, not commentary). Source comments were
scanned and neutralized before freeze (two comment lines; see build record deviation D5).

## Payload shas (staged bytes, verified immediately before each firing)
- payload-motion.txt      200bc3a1dee1583cf728cb7df7f5bb4cd0ffa916c4e155efb560014339c0b936
- payload-timing.txt      a3424411f89a3e14353fd785bfd5dbdc768e9d1674da42e3bead57cd3f0f73a5
- payload-purity.txt      14014def49ffb50f284941759347fe72bafe2f49a47ce0c54a26a7f3c544d68d
- payload-reusability.txt 63be394c8212e67abd6c65a1a79429333283c1821741106d79342c181170ee24
- payload-readability.txt 8c30d9355d9546ee7906708b75de5c57b4ea08ad571df4c047191d964cbf7ca2

## Firing form
Local Codex (~/workspace/codex-local/node_modules/.bin/codex), fed stream (payload file
redirected as stdin; no exec-tool stdin field), per-lens scratch cwd containing ONLY content
copies of source.html / facts.md / checks.txt, --skip-git-repo-check, -o original written to
~/workspace/.scratch/cycle-030/T23-<lens>.txt, then content-copied create-once to
codex/attempt-15/lens-<lens>-run<N>.md with sha256 verified identical; the fired payload is
preserved create-once as codex/attempt-15/instr-<lens>-run<N>.txt before any re-fire.
