# T05 attempt 3 — payload manifest (A-C010-1c · A-C005-2 · A-C008-4)

Filed BEFORE any lens firing. Scored source: `recreation.html` · sha256 `7d4a5da7d12ec75d1d20ff06836cbc47a12efee30cbe0cbf72ea2b8e1d507cac` (frozen; binds the own-check suite, both legs, this manifest, and every payload).

## Allowlist (the ONLY components of every lens payload, in order)

1. Standing header (consumer + decision priced · working record · BODY-WRITE requirement · integer scale 0–100 · closing `SCORE: <integer>`).
2. The lens's own instruction paragraph (one lens only).
3. Neutral technique facts (packet evidence + build schedule facts; no scores, no verdicts).
4. Neutral build packet: `payload-packet-attempt3.md` verbatim (construction form · schedule · configuration scope · named floors · fit model · own-check names and results only · PIXEL-UNVERIFIED).
5. The frozen recreation source verbatim.

## Exclusions (never in any payload)

RUN.md (any cycle) · scores.md · prior lens returns · prior build records · target scores and prior scores in any form · the full build record (`build-record-attempt3.md`, seat-side: it carries baseline-vs-after diagnostics) · cure codes and cure-to-lens commentary · this manifest.

## Assembled-payload anchor scan (run on the exact transmitted files)

Patterns scanned in each `codex/attempt-3/instr-<lens>.txt`: prior average and per-lens values as text (`82.4`) · `attempt-2` / `attempt 2` · cure codes (`U-1`…`U-5`, `R-1`, `M/T-1`, `T-2`) · amendment labels (`A-C0…`) · `cure` · `plateau` · `WHY` · `delta` · source comments (the frozen source's comments were scanned separately before payload assembly: construction prose only, no cure codes or amendment labels).
**Result: 0 hits in all five payloads.**

## Payload files (create-once, preserved before firing)

| Lens | Payload | sha256 | Bytes |
|---|---|---|---|
| motion | codex/attempt-3/instr-motion.txt | 9e3ff3c0a3000ccd8032bccac4221d2809deb8d84d61d7459ec5a3bc06252061 | 41894 |
| timing | codex/attempt-3/instr-timing.txt | a5f9170433ff58b29904502f6048600c5986f7a3ea7f9c022e211d60d0423f37 | 41760 |
| purity | codex/attempt-3/instr-purity.txt | 7ffa1f517755bd21517581a48abe763ecf2d52cf622dce1e7d035c6650804a22 | 41837 |
| reusability | codex/attempt-3/instr-reusability.txt | 1a9580f1d98f57c96bdaa2d13cac9be3626bd5a632cc741bfcc6bda66d2debe1 | 42024 |
| readability | codex/attempt-3/instr-readability.txt | f94a2f262847bcc3821a2f98fab438870d8b64e2e22d304ea8a95765cad48446 | 42114 |

Returns file create-once at `codex/attempt-3/lens-<lens>.md` via the firing tool's `-o` option (never capped stdout, never a resumed session). Each lens stream receives ONLY its assembled payload file — no plan, no seat tasking.
