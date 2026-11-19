# T19 Attempt 3 — Payload Manifest (A-C010-1c, filed BEFORE any lens firing)

Frozen source: `recreation.html` sha256 `2d17a4255c234d1c77363804623d404f972d862704178abb506640056f919266`. Every payload below embeds this exact source; every return binds to it.

## Allowlist (the ONLY payload contents, per lens)
1. The lens instruction (standing header: consumer + decision priced · working record · body-write requirement; lens scope paragraph) — carried in the attempt-2 instrument's form, re-pointed to `codex/attempt-3/`.
2. Neutral technique facts (catalogue mechanics, consumer) — no prior verdicts, no endorsements, no prior scores.
3. Neutral own-check packet: check names/results only (105 pass / 0 fail + assertion-group names; measured-fit leg 0 hits; config-census leg 0 hits, 124 keys resolved; staging totals) — no cure interpretation, no cure-to-lens mapping.
4. Both-bases timing statement (A-C010-3): allocation basis + observed Droste sub-window (≈3.5–6.5s segment time), dispute printed, no verdict language.
5. The frozen recreation source verbatim.

## Exclusions (verified absent)
RUN.md · scores.md · prior returns · target scores / prior average · cure names/codes (no C-O1/C-H1/C-P1/C-L1/C-V1 strings) · amendment labels · cure-to-lens commentary. Source-comment scan (A-C008-4): the frozen source's comments were scanned for cure codes, amendment labels, score anchors and verdict words before payload generation — one ordinary-language instance ("cured" in a checkpoint-policy comment) was neutralized (comments only) and the full own-check suite re-run green (105/105) on the neutralized, frozen source. Anchor scan of the assembled payloads: no "82.0", no prior per-lens scores, no "attempt-2" strings (0 matches per payload).

## Payloads (create-once, under `codex/attempt-3/`)
| Lens | Payload | sha256 |
|---|---|---|
| motion | `codex/attempt-3/instr-motion.txt` | `4afd7bc75cb06356bfc5daaeb919efacaf7982c49f80ac0a36e2ce14a101877a` |
| timing | `codex/attempt-3/instr-timing.txt` | `5b86a7c98e7691372952461b749c541dcf5ff435c4168b04b85855c13f2fc267` |
| purity | `codex/attempt-3/instr-purity.txt` | `77c073e2dddd645f6e365c32d4e8f0b6938f8a9d70abd3f485684d4d1156b3e6` |
| reusability | `codex/attempt-3/instr-reusability.txt` | `f811c7f2d506b473f5894df46a1ce4735c21ce045a8ed2503b068dfba8442fa1` |
| readability | `codex/attempt-3/instr-readability.txt` | `3e25ba4f8ad4c41381a6f306a647cc8c495d5777b65a2ac3073871ae171fe4f0` |

Firing form: one stream per lens, `cat <payload> | codex exec - -o <return path>` (never capped stdout, never `--last`); returns create-once at `codex/attempt-3/lens-<lens>.md`, each ending `SCORE: <integer 0-100>`.
