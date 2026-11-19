OWN-CHECK PACKET (check names + results only):
Suite: 125 assertions, 125 passing, 0 failing, run against the final frozen source; script syntax check OK.
- Segment-act phase boundaries at 12 sampled instants: PASS
- Absent/departed phases hide card and marker: PASS
- Names-only phases show zero item lists and no full-ink name: PASS
- Marked phase shows exactly the marked row's items, that row full ink, others dimmed: PASS
- 50 ms sweep, segment act: phase/display consistency across the whole cycle: PASS
- Assembly progress fractions and row/marker interpolation positions: PASS
- Stepping-act interval table (names/marked/return/hold/wrap) at 15 sampled instants: PASS
- 50 ms sweep, stepping act: exactly one marked row at marked samples, device absent in return gaps: PASS
- Start-row traversal order under a start-row override: PASS
- Derived row heights for 0/1/2/4-item rows and cumulative tops: PASS
- Content swap (item text, marker colour, one phase boundary, act selection) takes effect; one named configuration group verified unchanged by the swap: PASS
- Invalid-override set (11 malformed cases: ordering, fractional/out-of-range start row, non-finite and zero timings, null groups, empty rows, empty name): each rejected as a whole with the prior configuration intact and a recorded rejection: PASS
- Configuration consumption: every configuration key consumed outside its definition, with mutation spot-checks: PASS
- Literal scan outside configuration: only page-chrome values remain: PASS
- Purity scan (original-media patterns in the recreation source): 0 matches: PASS
- Self-start: the file's own animation loop starts at load with no external caller: PASS
- Measured-fit leg: 0 open findings. Configuration-census leg: 0 open findings.
