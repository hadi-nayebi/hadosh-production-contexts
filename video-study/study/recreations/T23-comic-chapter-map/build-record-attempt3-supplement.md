# T23 — BUILD RECORD SUPPLEMENT (attempt 3, in-cycle cure + re-fire)

Filed because the first scoring wave against sha `4b9f4914…` caught real defects in the interim source; the interim payloads and returns are preserved create-once in `codex/attempt-3/` with `-run1` suffixes, and the complete wave was re-fired against the cured final source below. The original build record (`build-record-attempt3.md`) is create-once and unedited; this supplement carries the revision.

## Final source binding (supersedes the sha in the build record)
- Final `recreation.html` sha256: `f05d5a6eaf30a980543b81b7c3b868e7ac758cd9c260e678999f64f29adf7703`
- Interim source sha judged by the run-1 wave: `4b9f491495f204b8b1ab02c18f398c8692c66508f7ff456fe80a692e4b0ee7c2`

## Cures applied after the run-1 wave (each named by a run-1 return)
1. **Scheduler cycle coordinate (named by two run-1 returns).** The post-render deadline used a cycle-local endpoint against absolute elapsed time, collapsing to zero-delay polling after the first cycle. The delay is now the due phase's remaining time (cycle-relative, correct in every cycle), and if rendering crossed a phase boundary the newly due phase is applied before scheduling — a phase is never silently skipped.
2. **Easing semantic validity (named by one run-1 return).** `cubic-bezier(...)` validation now also requires the 1st and 3rd coordinates in [0,1]; an out-of-range pair resets to the default with a warning instead of being silently rejected by the browser.
3. **Geometry regimes (named by one run-1 return).** The relational clamp now prices BOTH breakpoint regimes — narrow at the fallback width and wide at its smallest width (the breakpoint) — instead of only the regime the fallback width happens to select.
4. **Header wrap growth (named by one run-1 return).** In wrap mode the stage grows by the wrapped header's measured height, so wrapped lines are not clipped by the fixed header height.

## Own checks on the cured final source
- Node suite (the build record's suite plus five assertions for the cures above: cycle-correct remaining-time scheduling source check · post-render reconciliation source check · bezier coordinate range reset/land · wide-regime inner dimensions at 520 px · wide-regime clamp warning): **78 pass / 0 fail**.
- Syntax: `node --check` PASS · purity grep 0 hits · PIXEL-UNVERIFIED stands.
- Preservation re-verified after the cure edits: `recreation-attempt-2.html` sha256 `0112efc3b9fe6b63775a23cfbff9c34feb92a16d97847d018ebf9abaefb1f767` (unchanged).
