# T19 Attempt 4 — Payload Manifest (A-C010-1c, filed BEFORE any lens firing)

Frozen source: `recreation.html` sha256 `388a0e65cad533724ae774531dc312e0de783fd36c0ab9fe60efe0b3171794df`. Every payload below embeds this exact source; every return binds to it.

## Allowlist (the ONLY payload contents, per lens)
1. The lens instruction in the exact form of the attempt-3 instrument (standing header: consumer + decision priced · working record · body-write requirement; the bar only — average ≥85 AND no lens <70; lens scope paragraph), re-pointed to `codex/attempt-4/`.
2. Neutral technique facts (catalogue mechanics, consumer) — no prior verdicts, no endorsements, no prior scores. The technique paragraph's timing sentence states the observed shot interval (≈3.5–7.2 s of the 14 s montage segment).
3. Neutral own-check packet: check names/results only (74 pass / 0 fail + assertion-group names; measured-fit leg 1 hit — the second header's vertical clearance, printed as a result; config-census leg 0 hits, 122 keys resolved; staging totals) — no cure interpretation, no cure-to-lens mapping.
4. Both-bases timing statement (revived by the premise amendment, A-C010-3): the construction basis (evidence basis — duration 3625 shot-local, populate marker 875, from frame-accurate sampling) with the plan-stage basis (3500 / 1000, coarser samples) and the refinement printed, carrying ONLY the technical question (does the timing match the observed interval; what in the authored allocation still departs from it). No scores, targets or verdict language. Both bases + the full dispute print in the seat's scores.md filing, not in any payload.
5. The frozen recreation source verbatim.

## Exclusions (verified absent)
RUN.md · scores.md · prior returns · prior average / prior per-lens scores · target scores · cure names/codes · amendment labels · plateau labels · cure-to-lens commentary. Anchor scan of the assembled payloads (F5 form — scores in score context + qualitative anchors, across prompt text, filenames, labels and the source's 38 comments per payload): **clean on all five payloads** (0 hits for the prior average, prior lens scores in score context, cure codes, amendment labels, plateau/verdict/target language; the only ≥85 context is the standing header's bar line). Source-comment scan (A-C008-4): the frozen source's comments were scanned before payload generation — no neutralization was needed (the timing-basis comment states the observed basis in neutral language).

## Payloads (create-once, under `codex/attempt-4/`, preserved before firing — any re-fire takes a `-run<N>` path)
| Lens | Payload | sha256 |
|---|---|---|
| motion | `codex/attempt-4/instr-motion.txt` | `a590ee3954d0827cb5595144113ba09f61a181edda239867b54ece80ac57f172` |
| timing | `codex/attempt-4/instr-timing.txt` | `f41d19e018233bf47b7ebac14f8a53a2fce7b5defb7a69bef1b8072c3f9b2a9a` |
| purity | `codex/attempt-4/instr-purity.txt` | `dc59044821e47a05baa10110dea111cf0d09c72424e4594303a7ca5da8377fc7` |
| reusability | `codex/attempt-4/instr-reusability.txt` | `229160ce7dd46bf7bb6c4a4f6839131022726f6d6f674717131ad190a0da7778` |
| readability | `codex/attempt-4/instr-readability.txt` | `1e550c91f3b258fffafca270f3a6fec7f7d0634b5db71b752f6520d6fa633309` |

Firing form: per-lens dedicated scratch cwd (`~/workspace/.scratch/c027-T19-<lens>/`) holding ONLY a content copy of that lens's payload (A-C021-1); one fed stream per lens, `cat <payload> | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only -o /tmp/<out>.txt`; returns content-copied create-once to `codex/attempt-4/lens-<lens>.md` with sha verified identical to the `-o` original (A-C021-2). Each session's read scope is recorded in the build record (A-C019-2); a session whose scope exposes prior scores/returns is preserved, labelled SESSION-CONTAMINATED, excluded from the governing five, and replaced by a clean re-fire on the same frozen source (F5 counting rule).
