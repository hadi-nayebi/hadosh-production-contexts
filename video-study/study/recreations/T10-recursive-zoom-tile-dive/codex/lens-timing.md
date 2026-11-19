The 3000 ms total correctly matches the **handled segment**, 53.5–56.5 s. The actual technique occupies local 500–2500 ms. The dive runs from 650–2450 ms, placing its 1800 ms duration plausibly inside that 2 s window.

The decisive mismatch is the locator timing. **Source 0:55 maps to local 1500 ms**, where the evidence already shows “you are here.” The recreation still has zero pill opacity there: its fade starts at 1750 ms and completes at 2100 ms, corresponding to source 55.25–55.60 s. The ordering is plausible, but this measured midpoint anchor fails. Status starts at 2150 ms and finishes at 2450 ms; its exact fidelity remains unproven by the supplied frame.

Timing is substantially data driven: dive duration derives from `diveEnd − diveStart`, with independent overlay checkpoints and configurable fades. However, `wallHold` is unused, and fade durations are separate parameters rather than derived checkpoint intervals. The swap proves that changing `diveStart` moves scale; changing `pillAt` affects opacity, **not scale**, so the combined swap should not attribute the scale change to both overrides.

The seam is an explicit hard reset: scale 3.4→1 and both overlays disappear at 3000 ms. That is acceptable for replaying an excerpt, but the claim that it matches the specimen’s loop point lacks endpoint evidence.

Next attempt: measure pill onset/full visibility around source 0:55 and advance its checkpoint accordingly; verify status timing against additional frames; test each timing override independently; document the seam as an excerpt restart unless endpoint comparison proves otherwise.

BODY-WRITE: Record the source-to-local time mapping in build-record.md and scores.md, require locator visibility at local 1500 ms, and replace the unsupported specimen-matched seam claim with an explicit excerpt-reset description.
SCORE: 68
