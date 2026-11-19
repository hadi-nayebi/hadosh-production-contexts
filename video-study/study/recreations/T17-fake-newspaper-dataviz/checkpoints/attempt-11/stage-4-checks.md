# Stage 4 checks — T17 attempt 11 (CP4, mounted-layout derivation)

Source: `stage-4-mounted-layout.html` sha256 277a24eac54ed0bff1476fe25a8e48d4cfc47caa15664acf639013dc116bc35e (content copy, inode independent). Stage-1 suite re-run: 17 passed, 0 failed.

## What landed
- Connector endpoints are derived from the mounted row's layout: one derivation function computes node centers from the same inputs the stylesheet cascade uses (content width, node count, node width, gap, space-around distribution), the geometry model exposes those centers per row, and the builder draws every connector to them. The old slot centers (equal divisions of the content width) are gone; at 360 the derived first-row centers are 79.5 / 248.5 against the old 82 / 246 slot arithmetic and the model's former zero-gap claim.
- The stack figure's count row now carries its line height explicitly, emitted from the same key the model consumes for the counter height — the fourth count/text surface, beside the chart title, the counter text, and the count row's box.
- Donut label: the model now computes the ring's inner diameter (46.4 px at phone height) beside the label's modelled width (54 px) and flags a modelled OVERFLOW RISK. It is printed as a risk, never as fit; the glyph-level verdict is render evidence only.

## Probe evidence and its limits
- Builder endpoints equal the derivation at every connector (stub level). This is derivation-vs-builder agreement: because both sides share the derivation, it proves nothing about the mounted centers themselves. The independent comparison — endpoints against browser-measured node centers at 360 and 390, for the default and the alternate preset — files UNVERIFIED-BY-STUB / D1-bound; no browser route exists in this session.
- Derived pair census: connector–anchor pairs are asserted from the mounted element inventory (endpoint gap against the derived centers, above); label–marker pairs stand as asserted at the prior attempt's census and are re-run in the cumulative freeze suite.
- Donut sub-cure files as MODEL-FLAGGED / RENDER-OPEN.
