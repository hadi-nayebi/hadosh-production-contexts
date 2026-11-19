# T19 Attempt 5 — Payload Manifest (A-C010-1c, filed BEFORE any lens firing)

Frozen source: `recreation.html` sha256 `f89af02eafea695edc7400a2a5bc388b723c8c7e473bfd7b7e04dcfe5f38c43d`. Every payload below embeds this exact source; every governing return binds to it.

## Allowlist (the ONLY payload contents, per lens)
1. The lens instruction in the exact form of the attempt-4 instrument (standing header: consumer + decision priced · working record · body-write requirement; the bar only — average ≥85 AND no lens <70; the scale line "Scores are integers from 0 to 100"; lens scope paragraph), re-pointed to `codex/attempt-5/`.
2. Neutral technique facts (catalogue mechanics, consumer) — no prior verdicts, no endorsements, no prior scores.
3. Neutral own-check packet: check names/results only (139 pass / 0 fail across the staged suites, 46 pass / 0 fail on the final source; measured-fit leg printed as results — the clearance class at 0 hits, one remaining hit class stated descriptively; config-census leg 0 hits, 126 keys resolved; staging totals) — no cure interpretation, no cure-to-lens mapping.
4. Both-bases timing statement (A-C010-3): the corrected basis as governing (durationMs 3625 · checkpoints as closes 500/875/2625/3250 · event structure as decode-accurately sampled, exit window (3.125, 3.250]) WITH the superseded readings printed as the dispute (the plan-stage 3500/1000 continuous-push allocation, and the intermediate exit window (3.000, 3.125]) — lenses are charged with the technical question only; no scores, targets, or verdict language in any payload.
5. The frozen recreation source verbatim (verified byte-identical in each payload).

## Exclusions (verified absent)
RUN.md · scores.md · prior returns · prior average / prior per-lens scores · target scores · cure names/codes · amendment labels · plateau labels · cure-to-lens commentary. Anchor scan of the assembled payloads (score-context numerals + qualitative anchors, across prompt text, filenames, labels and the source's comments): **clean on all five payloads** (0 hits for the prior average, prior lens scores in score context, cure codes, amendment labels, plateau/verdict language; the only ≥85 context is the standing header's bar line). Source-comment scan (A-C008-4): the frozen source's comments were scanned before payload generation — they state the observed basis and construction in neutral language; no neutralization was needed.

## Payloads (create-once, under `codex/attempt-5/`, preserved before firing — any re-fire takes a `-run<N>` path)
| Lens | Payload | sha256 |
|---|---|---|
| motion | `codex/attempt-5/instr-motion.txt` | `a757e2804e405598838f6a6b989eb4b635f0a3ac428b945e72ac32bf576426a9` |
| timing | `codex/attempt-5/instr-timing.txt` | `9a27d8b64d5160d7c1bf964dd3a3551559e67103ab8db26916b7a445b09efa40` |
| purity | `codex/attempt-5/instr-purity.txt` | `939d85296ed71cf0937f66c0b28860c9284f6db321987d9647ccc70de30cc320` |
| reusability | `codex/attempt-5/instr-reusability.txt` | `778a27a3878d1499cb2f590796bcb50a9d0ba0efdb33553ce280fcde7a4eae1a` |
| readability | `codex/attempt-5/instr-readability.txt` | `d657e3c636765ec35f443fe8872c191d5ea7536924968d5ecdea3c2dac729994` |

Firing form: per-lens dedicated scratch cwd (`~/workspace/.scratch/c028-T19-<lens>/`) holding ONLY a content copy of that lens's payload (A-C021-1); one fed stream via the workspace-local Codex binary, read-only sandbox, `--skip-git-repo-check`; returns `-o`-written to /tmp first, then content-copied create-once to `codex/attempt-5/lens-<lens>.md` with sha verified identical to the `-o` original (A-C021-2). Each session's read scope is recorded in the build record (A-C019-2); a session whose scope exposes prior scores/returns is preserved, labelled SESSION-CONTAMINATED, excluded from the governing five, and replaced by a clean re-fire on the same frozen source.
