**Timing/tempo passes at 100/100.** The five-lens result remains unassessed.

- **Beat starts and loop.** `CONFIG.atMs` places the cuts at 0, 4,000, 7,000, and 11,000 ms. Both `tick` and `seek` wrap timestamps modulo `CONFIG.cycleMs`, so 14,000 ms returns to beat one at local time zero.
- **Checklist and warning.** `effCheck` gives the checklist a timing scale of `(11,000 − 7,000) / 4,000 = 1`. The rows become active at 7,000, 7,600, and 8,200 ms. The warning follows at 8,800 ms, one more 600 ms interval after the last row, and stays visible for 2,200 ms until the cut.
- **Entry and synchronization.** At each cut, `render` immediately hides the outgoing beat. Incoming opacity rises linearly from zero to full over 450 ms. The first checklist row shares that fade because opacity applies to its parent beat. Playback and seeking both call `render`, which recomputes every active row and the warning from beat-local time. Seeking backward across a threshold hides the corresponding item again, and repeated synchronization at the same timestamp preserves the visible state.

**Limits.** Assessed from the supplied source. Browser frame delivery was unverified, and the packet’s reported check totals were not independently rerun.

**Body-write: none (read-only run)**

SCORE: 100