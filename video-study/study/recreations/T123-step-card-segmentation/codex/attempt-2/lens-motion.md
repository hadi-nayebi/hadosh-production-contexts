Verdict: PASS for motion fidelity — 94/100. The five-lens pass remains undetermined until all five scores are available.

- **Headline replacement passes.** One active headline is selected; the outgoing headline fades during replacement (`recreation.html:187–210, 358–366`). Independently sampled at 8000/8300/8600 ms: incoming opacity 0/0.875/1; outgoing opacity 1/0.125/0. No replacement blackout occurs.

- **Separate tile entrances and accumulation pass.** Tile anchors are 3250 and 6500 ms, independent of headline anchors (`recreation.html:31–38`). Presence depends solely on whether each tile anchor has elapsed (`:212–218`). An independent integer-millisecond sweep through the cycle found zero presence discrepancies. Both tiles persist until the explicit 14000 ms wrap.

- **Repositioning passes.** Computed slots and eased interpolation replace instant reflow (`recreation.html:151–185`). Tile 01 remains at x=101 at the second tile’s onset, moves through x=51.859 at 6650 ms and x=26.625 at 6800 ms, then settles at x=16 at 7100 ms. Tile 02 enters at its own x=186 slot.

- **Entrance behavior passes.** Headlines fade over `headlineEnterMs`; tiles fade, scale from 0.94, and rise from their offset over `tileEnterMs` (`recreation.html:128–134, 194, 214–218, 363–373`). Each defaults to 600 ms and uses its own duration.

- **Deferral preserves the assessed movement.** The insert and prompt-bar omissions do not remove headline replacement, tile accumulation, or slot movement. The opening blank interval and closing hold follow the supplied scope. No required step-card movement is demonstrably missing.

**Next attempt:** No motion correction is required by the described mechanics. To establish closer specimen fidelity, compare rendered transition frames against the source and measure its actual easing, rise, scale, and entrance durations; the supplied census establishes event brackets rather than those trajectories.

**Limits:** Local source hash matches the binding. Assessment used disk-read source and independent Node state sampling; browser playback and source-motion comparison were not performed. The conflicting timing records remain unresolved.

SCORE: 94
Body-write: none (read-only run)