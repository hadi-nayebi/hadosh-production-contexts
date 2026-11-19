Reusability/parameterization: **72/100**. Strong layout derivation, but CONFIG alone does not yet provide a reliable production interface.

Bound source: `recreation.html` SHA-256 `a30b374eb21468a89c058f7de6a47b752f7f7a4dea7f22960b8dcaa271f3a626`. Assessment is source-only; pixels are unverified.

The core correctly derives triangular bundle counts, centered rows, sequential stack starts, tag completion, optional counter timing, and runtime. Content, most geometry, colors, and timing values reach application sites.

Deductions and cures:

- **−12 — Invalid configurations are not reliably rejected.** Startup never calls `checkpointsOk`; validation can itself throw because layout computation precedes structural checks. Missing checks include integer rows, finite numbers, positive durations, vertical tag/counter bounds, and text fit. Malformed URL JSON silently falls back to defaults. **Cure:** validate configuration before layout/DOM construction, report explicit errors, then enforce layout and content bounds.
- **−6 — Array overrides cannot reduce stack cardinality.** `deepMerge` retains unmatched default array entries: a one-stack override leaves two stacks; an empty array also preserves both. Editing CONFIG directly supports different counts, but the exposed override mechanism does not. **Cure:** replace arrays wholesale or provide explicit replacement semantics; verify zero, one, and three-stack cases.
- **−4 — Segment entry is coupled to the two-stack specimen.** Every stack after index zero shares `stack1EnterMs` and its duration. Added stacks cannot receive independent segment schedules through CONFIG. **Cure:** configure each stack’s segment entry time/duration and initial visibility; derive segment checks across all entries.
- **−3 — Typography and motion retain shaping constants.** Arial/Helvetica, normal text weight, default line height, cubic pop easing, and scale origin remain outside CONFIG. **Cure:** expose font family, weights, line height, easing, and transform origin with applied defaults.
- **−3 — Configuration contains ineffective or misleading controls.** `tagPadRightPx` is unused, so it cannot govern available text width. `durationMs` constrains checkpoints but does not end the segment: that branch continues until `lifecycle.startMs`. **Cure:** apply right padding through explicit text bounds and define/render the interval between segment end and lifecycle start.

This lens clears the **70 minimum**, but the five-lens tier decision remains with the consumer. Prioritize enforced validation and array replacement before another production reuse attempt.

Body-write: none (read-only run). Consumer to persist this return verbatim at `hidden_files/study/recreations/T66-money-stacks-sourced-totals/codex/lens-reusability.md`.

SCORE: 72
