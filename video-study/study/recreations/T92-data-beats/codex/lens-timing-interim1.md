Timing score: **58/100**.

The 14-second cycle matches the measured segment length, but Act 1 is substantially advanced and compressed. The two-act allocation is disclosed honestly; Act 2’s timing remains unevidenced.

| Anchor | Measured original | Build |
|---|---|---|
| Scene only | Card absent through 3 s | Ends at 2.6 s |
| Entrance | Border around 4 s; settled by 5 s | Whole card fades/rises 2.6–3.1 s |
| Settled Act 1 | Approximately 5–10 s | 3.1–6.5 s |
| Act 1 departure | Gone by 11 s | Replaced at 6.5 s |
| HUD | 2025 with Act 1; returns to 2037 afterward | Remains 2037 throughout Act 1 |

The approximate 3.5–10.5 s standing window lasts 7 seconds. The build’s 2.6–6.5 s window lasts 3.9 seconds—about **44% shorter**, beginning 0.9 seconds early and ending 4 seconds early. Its settled hold is 3.4 seconds against roughly 5 seconds measured.

The HUD discrepancy follows directly from the code: `showBeat(0)` assigns 2025, but the lead frames overwrite it with 2037. Neither the entrance nor hold branch restores 2025. It changes at Act 2’s boundary instead.

Act 2 receives a 500 ms entrance and 7-second settled hold, including `endHold`. This is a coherent allocation, but its duration and 6.5-second placement cannot earn fidelity credit from a still frame. The consecutive cards also omit the measured return to scene-only presentation around 11 seconds.

Next-attempt cures:

1. Give Act 1 explicit segment-relative boundaries: scene-only through 3 s, border-first entrance around 4 s, settled text by 5 s, hold through 10 s, and clearance by 11 s.
2. Derive the HUD year from the current phase on every frame, including restoration to 2037 after clearance.
3. Preserve Act 1’s measured window before allocating Act 2. Use a separately labeled demonstration interval until Act 2’s timing is measured.
4. Verify boundary samples and continuous playback, including the cycle reset.

Assessment uses the supplied source and measured anchors. The filesystem tool failed to start, so the hash was not independently checked and no return file was written. The consumer must persist this return verbatim at `codex/lens-timing.md`.

BODY-WRITE: none (read-only run; filesystem tool unavailable).
SCORE: 58