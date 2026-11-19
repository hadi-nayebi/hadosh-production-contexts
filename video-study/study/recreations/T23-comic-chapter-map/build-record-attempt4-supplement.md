# T23 — BUILD RECORD SUPPLEMENT (attempt 4, payload-hygiene cure + rebind)

Filed because the first payload assembly for this attempt caught a defect in the build record's own source: the recreation's code comments carried plan/amendment code labels (cross-references naming which priced finding each construction block answers). Fed to a scoring lens, those labels are cure-to-lens commentary inside the allowed packet — the packet must be neutral. The labels were removed from the comments; no executable code changed. The original build record (`build-record-attempt4.md`) is create-once and unedited; this supplement carries the revision, following the same record/supplement pattern as attempt 3.

## Final source binding (supersedes the sha in the build record)
- Final `recreation.html` sha256: `d0614b6d07ca022da1d8c13adaa43919d5d90363fd61173d284db7abcdcf3491`
- Interim source sha in the build record: `6f07f3502254d029c09dbd735cec7e337277beef4dd5dee2b24f27790a153680` — superseded; no scoring payload was ever fired against it. The five payloads assembled against it are preserved unfired in `codex/attempt-4/` with `-prefire` suffixes; the fired payloads are the regenerated ones bound to the final sha above and to this supplement.

## Own checks on the cured final source
- Node suite (same suite as the build record's ledger, re-run integrated on the final source): **137 pass / 0 fail** — identical totals to the interim source, as expected for a comments-only change; the suite's source-contract assertions were re-verified against the neutralized text.
- Syntax: `node --check` PASS (via the suite's extraction) · purity grep 0 hits · PIXEL-UNVERIFIED stands, with the DOM-measured-path limitation as printed in the build record.
- Preservation re-verified after the cure edits: `recreation-attempt-3.html` sha256 `f05d5a6eaf30a980543b81b7c3b868e7ac758cd9c260e678999f64f29adf7703` (unchanged).
