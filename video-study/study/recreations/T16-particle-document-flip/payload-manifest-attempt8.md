# T16 — payload manifest · attempt 8 (A-C010-1c + A-C005-2 + A-C008-4)

Frozen source: recreation.html sha256 `a32c95bb6c16e06998a973e550d51a03e617bc9914d20f5eba2765c4d2dbde95`, identical to `checkpoint-attempt8-stage6-final.html` and to the promoted working file. All five lens payloads embed this identical source; all five returns must bind to this sha.

## Lens packet text contract

The lens-facing packet states technical questions only. Prior scores, deductions, point ranges, targets, plateau labels and seat forecasts appear in NO payload, filename or comment; they live only in the seat record (the build record + scores.md).

## Allowlist (the ONLY components in every payload)

1. The standing header: consumer + decision priced · working record · body-write requirement · the line "Scores are integers from 0 to 100" · the instruction to price the build's stated limitations under the lens. Header names the BAR only in the guard's form — the decision priced (accepted or carried forward); no numeric target stands in any payload.
2. The lens instruction (that lens's judging brief, carried verbatim from the prior wave's payload template).
3. The NEW recreation.html in full (the frozen source above).
4. The score-blind build record (`build-record-blind-attempt8.md`): neutral construction facts, the stated limitations, and the build's own-check results as check names + outcomes + current-build measurements only.

## Exclusions (verified absent)

scores.md · all prior scores and averages · all prior Codex returns · score targets and the bar as numbers · cure identifiers and historical comparisons · the plan and its review · plateau labels and seat forecasts · RUN.md.

## Anchor scan — run on the exact fed bytes (the preserved payload files), including filenames

- Prior averages ("80.0", "82.0"): **0 hits** in all five payloads. Prior-attempt references ("attempt 7", "attempt-7", "Cycle 027", "Wave 26"): **0 hits**. Cure identifiers (C1–C8 patterns, A-C amendment labels): **0 hits**. Target/bar numeric language: **0 hits**. "scores.md": **0 hits**.
- Documented non-anchor hits, each inspected: (a) "plateau" (2×/payload) — the fold profile's plateau fraction (a CONFIG key and its construction comment), a shape term of the turn profile, not a label; (b) "verdict" — the feasibility gate's internal result variable in the source being judged; (c) "cure" — inside the standing header's generic phrasing ("its next cure list" / "the cure list the next attempt inherits"), carried verbatim from the prior wave's header template, process vocabulary with no identifier or priced history; (d) "lens" / "codex" / "SCORE:" — the standing header's own form.
- Source comments scanned before payload generation: no cure codes, amendment labels, or cure-to-lens commentary; the only scan hits are the pre-existing fold-plateau technique term.

## Firing form

Per lens: dedicated scratch cwd containing ONLY content copies of the allowlisted packet (the payload file), `~/workspace/codex-local/node_modules/.bin/codex exec --skip-git-repo-check`, one stream (payload file as stdin), closed stdin after the feed, return captured with `-o` to /tmp first, then content-copied + sha-verified into `codex/attempt-8/lens-<lens>.md` create-once (A-C003-1: payload + return preserved before any subsequent source change; no source change is pending — the source is frozen).
