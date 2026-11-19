# T11 attempt 6 — payload manifest (filed BEFORE firing)

Scored source: recreation.html sha256 c003a7c6d17f3507d303f46ff241ba684e952f7857135c981277cfdbee756b98. All five payloads embed this identical source; all five final returns must bind to this hash.

## Allowlist (per lens, exactly three components)
1. Lens instruction — modeled on codex/attempt-5/payload-<lens>.txt heads (same consumer/decision header form, same neutral catalogue mechanics, same lens paragraph; attempt/cycle numbers updated to attempt 6 / Cycle 031 Wave 30; ends demanding `SCORE: <int>` + `BODY-WRITE: ...`; scale line "Scores are integers from 0 to 100" carried).
2. Score-blind neutral build-record extract — `neutral-extract-attempt6.md` in this directory (sha256 c64c814749b6415cc881043525f87a27286648c285ce15dcb4b95f838e673f75). Permitted-fields schema: construction facts stated neutrally + the specimen-observation/uncertainty/mapping text + check names with pass/fail results only. No scores, no targets, no history, no cure labels, no prior-defect language.
3. The final recreation.html source, verbatim.

Assembled payloads (create-once, with sha256): payload-motion.txt 067fd31ca09397ce3d4b11388343f1952df4e3e40366559d75b8d1e2896116ee (47099 chars) · payload-timing.txt 88294e2b044a693b4375f07e49daa3c63e23db964bb74026a88617c4af1ac93f (47094) · payload-purity.txt 604de184906f8bdb9ca6ad9eeb1801cd2e54c10867938823a5acc1fc25514840 (47004) · payload-reusability.txt 398b3cc0209ed39e562aa1c3b8d58d524e24fe95e349f00457069535bf71873f (47138) · payload-readability.txt 4ed65109c7383b49452b6df764408655b1ff88f93fe8adb632bde19ee16e19ca (47123).

## Exclusions (never in any payload, and never in the accessible scratch packet)
scores.md · build-record-attempt5.md and build-record-attempt6.md (full build records are themselves anchors — the Plan's closed boundary) · checkpoint logs (codex/attempt-6/checkpoints/) · comparison.html · all prior Codex returns · plan-T11.md · RUN.md · cure or plateau framing in any form.

## Assembled-payload anchor scan (numeric + qualitative, incl. filenames/labels/comments per A-C008-4)
Scanned all five assembled payloads for: prior average/per-lens scores (84.8 / 81.0 and per-lens values as text), attempt-5 references, Cycle 011 references, cure codes, amendment labels (A-C…), WHY/plateau language, target vectors, the pass bar. Result: NO hits on any anchor pattern in any payload. Residual word-level hits, inspected and cleared as non-anchors: "delta"/"verdict" appear once each inside the standing header's consumer line (the job's filing duty, identical in form to the attempt-5 filed payloads — no value, ranking, or comparison attached); "PASS" appears in the extract's check-results line ("541 assertions, all PASS" — a check name/result, a permitted field). Filenames are lens names only (payload-<lens>.txt / lens-<lens>.md), carrying no anchors. Source comments scanned separately before assembly: the source carries four comments (CONFIG header, PURE-BEGIN/PURE-END markers, the override swap-example) — all neutral, no cure codes or commentary; no neutralization was needed.

## Firing form
Per-lens dedicated scratch cwd under ~/workspace/.scratch/cycle-031/ containing ONLY content copies of that lens's allowlist payload file; Codex via ~/workspace/codex-local/node_modules/.bin/codex, `-s read-only --skip-git-repo-check`, `-o` to a unique workspace-scratch original (~/workspace/.scratch/cycle-031/), then content-copied to the create-once destination in this directory with sha256 verified identical. Each session's read scope is printed in build-record-attempt6.md.
