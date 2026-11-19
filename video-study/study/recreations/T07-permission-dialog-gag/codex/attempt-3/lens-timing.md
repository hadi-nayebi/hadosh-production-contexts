**Timing / tempo match passes.** The recreation fills the entire 6,030 ms cycle, gives the Oscar selection the longest hold, and restarts the logical timeline exactly at the cycle boundary.

| Modal | Window (ms) | Delay to selection (ms) | Final hold (ms) |
|---|---:|---:|---:|
| Direct | 1,700 | 930 | 770 |
| Produce | 1,830 | 1,000 | 830 |
| Win an Oscar | 2,500 | 1,370 | 1,130 |

Each hold equals its window minus its selection delay. The Oscar hold exceeds the preceding hold by 300 ms. Adding P1’s approximate 1.20 s first-arrival offset places the selections at 2.13, 3.90, and 6.10 s and the cycle end at 7.23 s, matching the measured segment. The first flash occupies the opening 120 ms of its window. Each selection lands directly on its final row. [P1 measurements](/tmp/t07-a3-timing/packet.txt:8) · [Timing configuration](/tmp/t07-a3-timing/packet.txt:49) · [Event construction](/tmp/t07-a3-timing/packet.txt:204)

I ran the packet’s timing functions. At 6,029 ms they returned the selected Oscar row. At 6,030 ms they returned the first modal’s flash. A delayed callback at 13,000 ms resolved to 940 ms into the third cycle, with row 1 already selected. `tick()` schedules the next deadline from the original clock, so callback lateness does not accumulate across rollovers. [Elapsed-state calculation](/tmp/t07-a3-timing/packet.txt:221) · [Callback scheduling](/tmp/t07-a3-timing/packet.txt:449)

**Limit.** The packet establishes a brief first flash but gives no measured flash duration. The exact browser paint time at rollover also remains unverified. [P1 measurements](/tmp/t07-a3-timing/packet.txt:8) · [Build record](/tmp/t07-a3-timing/packet.txt:516)

BODY-WRITE: None (read-only run). If another attempt is needed, carry forward the 6,030 ms schedule and anchored deadlines. A frame count for the original flash and a rendered trace across rollover would close the remaining timing evidence gaps.

SCORE: 98