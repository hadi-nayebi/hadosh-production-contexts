The build has broad parameter coverage, but several legal configurations break the guarantees claimed in the record. I price reusability at **76/100**. The supplied checks support default operation, dense simultaneous title/ring demand, URL swaps, and restart determinism; I could not independently execute them.

The priced findings and inherited cure list are:

1. **Technique constants remain outside CONFIG.** `startTravel()` imposes a literal `15` ms registration floor; turn compression uses a literal `0.3` ramp fraction; release derivative blending uses a literal `0.25` window; `frame()` caps elapsed time at `50` ms. These govern motion and timing rather than mere arithmetic. Cost: meaningful variants still require editing animation logic. Move these policies into validated configuration.

2. **Short release phases can silently lose title or ring targets.** `releaseAll(simT)` uses `releaseScatterMs`, independently of `releaseMs`. A legal `releaseMs=50` with the default `releaseScatterMs=500` starts formation while page particles remain unavailable. `buildPool()` budgets the maximum of page demand and title-plus-ring demand, excluding concurrent releasing demand. `borrowFresh()` truncates to available particles, while the scheduler sets `titleBorrowed` or `haloBorrowed` true regardless of assignment completeness. Cost: partial formations persist without retry. Enforce release/formation compatibility or size and verify the overlapping demand.

3. **Budget feasibility does not guarantee completed registration.** `enforceFormation()` includes travel and stagger but excludes `registrationMs`. A ring can finish travelling immediately before the seam and never reach its registered state. Page budgeting similarly omits the hardcoded 15 ms registration floor: at short intervals, travel can fit while travel plus registration exceeds the turn window. Cost: accepted timing swaps violate the stated settled/readable contract. Budget the complete lifecycle.

4. **A legal halo delay can prevent borrowing entirely.** Formation enforcement accepts `haloNeed() <= formMs + holdMs`. With zero stagger, equality can place halo initiation at the seam boundary in sufficiently short configurations; more generally, frame detection delays borrowing beyond its calculated start. No borrowing occurs in the seam branch. Cost: feasibility calculated from ideal instants can become missing or incomplete content in execution. Schedule events explicitly and include registration and detection policy in feasibility.

5. **Fallback does not reliably restore schedule feasibility.** On failure, `enforceBudget()` resets only `pageCount`, `flipMs`, and `travelFlipMs`. Accepted values such as `minSettledHoldMs=100000` remain, making the restored schedule infeasible. The function records `budgetFeasible=false` and continues. Cost: validation can release a configuration its own budget rejects. Recheck after normalization and refuse execution or restore all relevant dependencies.

6. **Text-fit evidence is weaker than actual ink containment.** Canvas ink width is `actualBoundingBoxLeft + actualBoundingBoxRight`; `fitText()` uses their difference when right exceeds left. This can underestimate asymmetric overhangs. Position relationships also omit title vertical extent and header top-plus-height containment. Cost: long titles and headers have useful condensation safeguards, but reported fit dimensions do not prove rendered containment for every accepted font and placement. Correct ink metrics and check positioned bounds.

Page count 1 is handled coherently by checkpoint derivation. Page count 40 follows the generic schedule and pool paths, with travel reduction or refusal as needed; the budget defects above qualify that protection. Malformed checkpoint lists receive strong structural and endpoint validation. URL overrides genuinely connect content, timing, and palette to regeneration.

The stated pixel limitation chiefly reduces confidence in actual text containment under this lens; I have not deducted for unrelated perceptual quality or rapid-page reading dwell.

**Body-write status:** No file was written. The execution tool failed before filesystem access (`codex-code-mode-host` missing), so filing `codex/attempt-5/lens-reusability.md` remains outstanding. The score and six findings above are the proposed attempt record and inherited cure list.

SCORE: 76