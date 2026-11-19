**Reusability / parameterization: 64/100 — below the 70-point lens floor.**

CONFIG exposes most narrative content, figure windows, palette, counts, org labels, and counter endpoints. The reported swap test supports basic substitution, but does not establish reusable figure modules.

The next attempt must carry these cures:

- **Connect unused parameters.** `chartTitle`, `xLabels`, and `barLabels` never render; `scale` has no effect. The chart-title swap therefore proves computation survives an unused change.
- **Expose animation parameters.** Draw speeds, typing delay, node intervals, stamp timing/scale/rotation, and note delays remain literals. FIG24 also embeds the pre-cliff decrement `1800000` and graph shape constants.
- **Remove content-dependent logic.** The red-label rule checks `lab==='doomed'`; `"you →"` is hardcoded. Configure emphasis and annotation text.
- **Make modules independently mountable.** Builders require fixed `figEls.fig20`–`figEls.fig25` keys and global `P`. Provide factories accepting a container, figure data, and palette, returning a progress renderer. Distinguish module `type` from instance `id`.
- **Support varying data sizes.** Fixed bar spacing and org-node timing assume the present counts. With six child nodes, the sixth requires `p>1` and never appears. Derive layout and reveal timing from data length.
- **Generalize the counter.** Its collapse formula uses `counterEnd` only as a floor rather than interpolating toward it. Configure the pre-cliff change and interpolate explicitly between the cliff value and the requested endpoint.
- **Verify meaningful swaps.** Exercise reordered modules, changed IDs, longer labels, different bar/node counts, changed waffle dimensions, and substantially different counter ranges. Assert visible output as well as computation.

A diagram container could reuse the sequential progress mechanism, but lifting the current figures requires source edits beyond CONFIG.

BODY-WRITE: Require independently mountable figure factories, consumed CONFIG fields, configurable animation parameters, and visible-output swap tests across data sizes before this build qualifies as reusable.
SCORE: 64
