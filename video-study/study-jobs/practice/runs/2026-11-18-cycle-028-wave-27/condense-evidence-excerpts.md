--- T19-droste-recursion a5 timing ---
SCORE: 90
--- T19-droste-recursion a5 motion ---
SCORE: 86
--- T17-fake-newspaper-dataviz a8 readability ---
SCORE: 76
- **FIG.21 callout.** The dedicated lane gives the label a modeled 28.8 px minimum dot clearance and 8 px summary clearance at both widths. The zero-gap tip check misses the shaft. Recomputing the route puts the shaft at the center of the third dot in the bottom row before it reaches the third dot i
--- T17-fake-newspaper-dataviz a8 reusability ---
SCORE: 68
2. **Validation catches common shape errors and leaves holes in required fields and ranges.** The validation corpus shows named errors for missing palette entries, malformed figure collections and zero `sampleStep`. In `validateConfig`, deleting `timing.drawEnd` passes the loop over existing timing 
--- T23-comic-chapter-map a13 reusability ---
SCORE: 64
1. **URL overrides and direct `CONFIG` edits have different validation contracts.** In Node, direct `limits.maxCols = "8"` reset to `6`, while the equivalent URL override resolved to `8`. The integer check runs before direct-edit coercion. Direct `handoff.holdOnComplete = "true"` resets to `false`, 
--- T16-particle-document-flip a8 motion ---
SCORE: 68
**Rapid pages can miss a readable draw — 5 points.** The checkpoint spans imply 300 ms early intervals from \(1500/5\) and 87.5 ms rapid intervals from \((2200-1500)/8\). On a rapid page, the 67.5 ms turn leaves 20 ms of strict readable dwell. `frame()` draws once after its simulation substeps, and 