TIMING/TEMPO — **76/100**

The build follows its declared anchors, but its pacing fits the seat census more closely than the builder’s firsthand census.

| Event | Build timing | Assessment |
|---|---|---|
| Exhibit | Full opacity 0–7100 ms; fades 7100–7500 ms | Matches the prescribed 400 ms fade. Against the builder census’s map ground at ~5000 ms, the exhibit persists roughly 2500 ms too long. |
| Darkening | 7500–8000 ms | Correct 500 ms duration; ends as the eyebrow begins. Original transition duration is unmeasured. |
| Eyebrow | Fade starts 8000 ms; fully visible 8600 ms | Fits the seat’s ~8000 ms onset, but trails the builder’s already-present eyebrow at ~7000 ms by at least 1000 ms. At exactly 8000 ms, build opacity is zero. |
| Main line | “A” fades 10000–10400 ms; “SPARK.” fades 11100–11500 ms | Fits the seat’s word-by-word completion window of ~11000–13000 ms. Against the builder census, it misses partial lettering at 9500 ms and finishes 1500 ms after the observed ~10000 ms completion. |
| Hold / cycle | Fully revealed 11500–15600 ms | Actual full-opacity hold is **4100 ms**: `holdMs: 4500` counts from the last word’s onset, including its 400 ms fade. |

The **15600 ms** cycle exceeds the sampled segment by **1600 ms**. This is an extrapolation rather than a demonstrated source mismatch: the original remains on the card at the segment boundary. Within the measured window, the build provides **2500 ms** of fully revealed main text, versus approximately **4000 ms** under the builder census.

The four configured transition durations—400/500/600/400 ms—are implemented correctly. Neither census measures the original fades precisely enough to establish fidelity for those durations. Phase exclusivity establishes predictable scheduling; it does not establish matching tempo.

Next attempt must cure:

1. Resolve the census conflict through timestamped source frames, distinguishing first visible ink from completed reveals.
2. Align the exhibit’s disappearance and intervening ground with that evidence; the ~5000–7500 ms discrepancy materially changes the lead-in.
3. Match the evidenced main reveal timing and granularity. If the firsthand census is confirmed, show partial lettering by ~9500 ms and complete by ~10000 ms.
4. Define hold duration explicitly as onset-to-reset or full-opacity-to-reset. Keep the extra 1600 ms identified as unverified continuation unless additional source footage establishes it.

File access failed because the execution host was unavailable; this return is provided for the consumer to persist verbatim at `codex/lens-timing.md`.

BODY-WRITE: none (read-only run); no files changed.
SCORE: 76
