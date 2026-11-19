# T16 — payload manifest · attempt 7 (A-C010-1c + plan-review F6 text contract)

Frozen source: recreation.html sha256 `7622e4e99b37a274bbd75052bfa666aedde7f25d5e3a2f4bebc9e7c0cf25c462` (99,618 bytes), identical to `checkpoint-attempt7-stage6-final.html`. All five lens payloads embed this identical source; all five returns must bind to this sha.

## Lens packet text contract (review F6)

The lens-facing packet states technical questions only. It may describe scheduled-versus-observed completion and named-case-versus-broader validation as technical questions. Prior scores, deductions, point ranges, targets, plateau labels and seat forecasts appear in NO payload, filename or comment; they live only in the seat record (the build record + scores.md).

## Allowlist (the ONLY components in every payload)

1. The standing header in the exact form of the prior wave's payloads: consumer + decision priced · working record · body-write requirement · the line "Scores are integers from 0 to 100" · the instruction to price the build's stated limitations under the lens. Only the cycle identifier and the attempt-7 file paths were updated.
2. The lens instruction (that lens's judging brief, carried verbatim from the prior wave's payload template).
3. The NEW recreation.html in full (the frozen source above).
4. The score-blind build record (`build-record-blind-attempt7.md`): neutral construction facts, the stated limitations, the technical questions the construction answers in code, and the build's own-check results as check names + outcomes + current-build measurements only.

## Exclusions (verified absent)

scores.md · all prior scores and averages · all prior Codex returns · score targets and the bar · cure identifiers and historical comparisons · the plan and its review · plateau labels and seat forecasts.

## Anchor scan (A-C008-4 / A-C010-1c) — run on the exact fed bytes (the preserved payload files), including filenames

- Prior averages ("82.0", "84.4"): **0 hits** in all five payloads. Prior-attempt references ("attempt 6", "attempt-6", "Cycle 025"): **0 hits**. Cure identifiers (C1–C7 patterns, A-C amendment labels): **0 hits**. Deduction / target / forecast language: **0 hits**.
- Documented non-anchor hits, each inspected: (a) "plateau" (9×/payload) — the fold profile's geometric plateau fraction (a CONFIG key and its construction comments), a shape term of the turn profile, not a lens label; (b) "verdict" (16×/payload) — the feasibility gate's internal result variable in the source code being judged; (c) "cure" (2×/payload) — inside the standing header's generic phrasing ("its next cure list" / "the cure list the next attempt inherits"), carried verbatim from the prior wave's header template, process vocabulary with no identifier or priced history; (d) "lens" / "codex" / "SCORE:" — the standing header's own form (the lens brief, the working-record path, the required return line).
- Source comments scanned: no cure codes, amendment labels, score or review references; "stage" hits are the canvas stage (construction vocabulary).
- Filenames: `instr-<lens>.txt` — neutral, no anchors.

## Payload files (create-once, filed BEFORE firing; byte arithmetic verified per file)

| Lens | File | Bytes | sha256 | Header bytes |
|---|---|---|---|---|
| motion | codex/attempt-7/instr-motion.txt | 115,314 | e88cbc47e4e42b7f3dda792f58caaf07268c6893124152a69ee900b5c709a529 | 2,729 |
| timing | codex/attempt-7/instr-timing.txt | 114,802 | e0048eb5253a7d66483f6b8206883bff479ba9ed6bc53763bf32fcb49146fabb | 2,217 |
| purity | codex/attempt-7/instr-purity.txt | 114,719 | 11d44ab51c21d0209ae6a6608ea6159cb8bc53f8ef3afb4f39917e1a9819d363 | 2,134 |
| reusability | codex/attempt-7/instr-reusability.txt | 114,562 | 29c3377a06f4231952713a0d395cab85222021d0dd7b0ae5cc3bab78f83fd733 | 1,977 |
| readability | codex/attempt-7/instr-readability.txt | 115,064 | 27257c6e2fc338035e8f4371e0d4ee81bcce2f073abf26dcbc591095cc34254d | 2,479 |

Each total = header + 99,618 (source) + 7 (separator) + 12,960 (blind build record).

## Firing form

Per-lens scratch cwd `~/workspace/.scratch/c027-T16-<lens>/` holding a sha-verified copy of that lens's payload only; one stream only — `cat <payload copy> | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only -o /tmp/<out>.txt` (no pipe+stdin collision; the exec call carries no stdin field). Each return is content-copied create-once to `codex/attempt-7/lens-<lens>.md`, sha-identical to its `-o` original; the fired bytes are verified against this manifest's payload shas before firing.
