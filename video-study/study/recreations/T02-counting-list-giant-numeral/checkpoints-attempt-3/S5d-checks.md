# S5d — Floor decision print (no construction) · T02 attempt 3

Re-price of the listing font floor against the BOUND route (Route D)
and the R-H1 column, per the corrected two-dimension arithmetic:
- Vertical ceiling under Route D @360: window 162.00 px ÷ (13 rows ×
  1.1 line-height) = 11.34 px.
- Horizontal ceiling under R-H1 @360: the 36-character need is
  22.65 × font against the 252.00 px column → 252.00 ÷ 22.65 = 11.13 px.
- Effective ceiling = min(11.34, 11.13) = 11.13 px (horizontal binds).
DECISION: the floor stays **11 px** — the largest whole-pixel floor
under the 11.13 px ceiling, with 0.13 px of horizontal headroom priced.
A 12 px floor fails on both dimensions (vertical need 171.60 px >
162.00 px window; horizontal need 271.80 px > 252.00 px column). The
prior lens note that 11 px is small for first-time reading is answered
by these figures: no larger whole-pixel floor exists under the bound
route + column. No font is reduced anywhere in this attempt.
Checkpoint: S5d-source.html = the S4 checkpoint copy (no construction),
sha256 a20ef35113ad8635af8014ba86ee9ae1099532ac7f36d37ea9feabe73f1ebb8d.
Effect record: floor decision — PRINTED, route-bound to D + R-H1.
