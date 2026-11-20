**Timing and tempo match the evidenced default schedule.** The source establishes the opening command, synchronized row and numeral reveals, and a joint caption and final-count landing followed by the configured hold.

- The anchor table matches all four evidenced states. `lineTimeMs` spaces reveals at 3,000 ÷ 20 = 150 ms, 3,000 ÷ 17 ≈ 176.47 ms, and 1,000 ÷ 2 = 500 ms across the three intervals. The last reveal in each interval lands at its anchor. [payload.txt](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:73) · [Interpolation](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:217)
- `renderAt` uses the same computed count for row visibility and the numeral. With a 13-row window, counts 20 and 37 retain rows 8–20 and 25–37 respectively, consistent with the packet’s two retention observations. [Render logic](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:373) · [Retention checks](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:569)
- Count 39 and the caption become visible in the same render update at the 7,000 ms threshold. The clock clamps at 8,000 ms, giving a configured hold of 1,000 ms at default speed. The full `ls ~/Original\ Music` command is assigned during setup, before playback scheduling, and has no timed reveal. [Landing and clock](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:371) · [Opening command](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:298)

**Limits.** Browser paint and wall-clock frame cadence remain unverified. The packet’s DOM shim establishes state, with pixel verification still pending. [Own-check packet](/home/hatch/workspace/.scratch/cycle-031/T02/lens-timing/payload.txt:411)

BODY-WRITE: Add a browser timing check to Verify for the full command on the opening frame, the shared caption and count-39 landing, and the 1,000 ms configured hold.

**Body-write: none (read-only run)**

SCORE: 98