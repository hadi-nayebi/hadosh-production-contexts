Timing density is close: title lines land at 0.6, 3.4, and 6.2 seconds; chat pops span 1.2–10.6 seconds; six hard cuts occur by 13.85 seconds. Cut intervals are mostly 2.4–2.45 seconds, with a faster final interval of 1.7 seconds.

Residual timing defects:

- Timing is only partly record-specific: all lines share `highlightMs:700`, and all messages share `chatPopMs:220`. Individual sweeps and pops cannot be priced independently.
- The specimen catches “IN” mid-build approximately five seconds into the window. Here its sweep finishes at 4.1 seconds, so that evidenced checkpoint does not match.
- Duration overrides preserve absolute checkpoints. Short windows are safely rejected, but longer accepted windows add idle tail rather than preserving density. Replacement tables are validated for ordering and fit, without checking sweep duration against neighboring events.
- The 700ms sweep occupies about 29% of a typical cut interval: plausible for this tempo, though not established from specimen timing.
- The 100ms cut-to-chat adjacency is explicitly preserved and independently evaluated. That is sound timing design, although perceptual separation remains unverified.

BODY-WRITE: Give each title/message record its own animation duration, align the “IN” sweep with the evidenced five-second checkpoint, and explicitly constrain or document tempo changes under duration overrides.

SCORE: 82
