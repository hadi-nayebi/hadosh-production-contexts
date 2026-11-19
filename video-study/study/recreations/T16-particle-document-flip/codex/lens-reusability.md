CONFIG exposes many useful controls, and URL overrides connect content (`title`, `pageHeader`, `titleLabel`), phase durations, and palette to their consumers. However, the build does not meet the requirement that production can reuse it entirely through CONFIG.

Priced findings:

- **Technique constants remain buried in logic and CSS.** Page/header margins, header font ratio, stroke widths, line thickness and jitter, title position, halo stroke width, particle velocity variation, stagger fraction, release impulses and decay, jitter periods, label fade duration, and halo travel multiplier are literals. Counter text `"page"`, typography, and label positions are also outside CONFIG. Cost: changing the technique’s layout or motion still requires editing implementation code.

- **Text fitting repeats T15’s width-only defect.** Both fitting loops inspect only `measureText(...).width`, stopping at minimum sizes of roughly 10/12 px even when text still exceeds the allowed width. Neither checks glyph height or available vertical bounds. Cost: sufficiently long titles/headers clip horizontally; shallow page geometry or tall fonts can overlap lines or escape the page.

- **Validation is incomplete.** URL numeric overrides reject nonfinite values, and several useful clamps exist. However, checkpoint JSON accepts any nonempty array: `[null]` crashes `pageAtTime`; missing fields yield invalid page values. Geometry, travel times, seed, line pattern, intensities, and other CONFIG numerics lack validation. Zero/negative gaps supplied directly through CONFIG can hang sampling; huge page counts or strings have no practical bounds. Cost: reusable configuration is safe only within an undocumented subset.

- **Page-count and timing swaps are not coordinated with checkpoints.** With `pageCount=40`, default checkpoints reach page 14 at 2200 ms, then jump directly to 40. Changing `flipMs` to 1800 ends flipping before the final checkpoint. `pageCount=1` is handled by the default checkpoint path. Cost: valid swaps can skip much of the intended document sequence.

- **Pool sizing does not guarantee simultaneous title and halo capacity.** `ensurePool()` prices each borrow’s target count independently, ignoring particles already borrowed. Halo assignment can therefore silently underfill when title particles occupy the available pool. Pool growth also persists until resize/restart. Cost: dense content changes particle density and can remove part of the halo. T15’s pool concern is only partially cured.

- **Loop reuse leaks borrowed state.** Entering the next flip phase resets flags but does not release the held title/halo before `ensurePool()` runs. Existing borrowed particles cannot become reserve particles during that allocation; repeated loops can consequently violate the configured reserve fraction. Cost: behavior depends on lifecycle history.

- **Restart determinism is partially cured.** `resize()` resets particles, seed, simulation time, and borrowing flags, so identical explicit `step()` sequences reproduce particle state. It does not reset `last` or `trace`; animation-frame timing still affects the restarted sequence, and trace history accumulates. Cost: restart is not a clean, reproducible comparison hook.

Body-write status: this return supplies the findings and an attempt-2 cure list—externalize remaining controls; fit width and height; validate the full configuration and checkpoints; reconcile checkpoints with count/duration; budget simultaneous targets; release before loop allocation; reset restart timing and trace. Filesystem access failed because the execution host was unavailable, so neither `codex/lens-reusability.md` nor `scores.md` was written.

SCORE: 54
