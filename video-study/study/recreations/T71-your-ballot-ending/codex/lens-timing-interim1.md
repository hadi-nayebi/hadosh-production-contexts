Timing verdict: **not RECREATED-tier**.

Source-derived schedule:

- Card enters: **0–0.6s**
- Choices appear: **0.6–0.9s**, **1.1–1.4s**
- Prompt appears: **1.7–2.1s**
- Complete card stays static: **2.1–14s**

Deductions:

- **−35:** Completion occurs at 2.1s, approximately **4.9s before** the measured ~7s boundary. Deferring the claims replay does not establish a timeline offset.
- **−15:** Static hold lasts **11.9s**, versus the measured ~7s.
- **−5:** `holdMs` affects validation but never controls rendering. Its derived endpoint, 7.3s, causes no phase transition.

Next attempt: explicitly place the ballot reveal within **~6–7s**, then hold the complete card through **14s**. If using local single-act time, encode its segment offset and verify the resulting absolute boundaries.

Source-only assessment; playback remains unverified. Filing failed because the execution tool could not start.

SCORE: 45
BODY-WRITE: None; codex/ and scores.md could not be accessed or updated.
