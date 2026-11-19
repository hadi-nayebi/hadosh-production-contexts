Source-based motion score: **80/100**. Pixel-level playback remains unverified.

The build gives the map one camera owner: every view change interpolates the same SVG viewBox. Chips enter sequentially with eased scale-and-opacity pops, then retain their positions through the regional roster pass and return to full view. No camera-position snaps are evident in the source.

Deductions from 100:

- **−8 — Full-map arrival precedes roster completion.** The measured specimen reaches a completed full-map state around 3 seconds; this build continues introducing chips until 4.4 seconds. The outward move therefore reveals an assembling roster rather than resolving the regional beat into the completed table. **Cure:** finish placement before the first full-view arrival.
- **−7 — Name plates can jump independently of the camera.** Plate positions are recomputed through a discrete search every frame. Changing camera bounds, visible membership, or label waves can abruptly relocate an existing plate while the map moves smoothly. **Cure:** retain plate positions within each beat and interpolate any necessary relocation.
- **−3 — Connector anchors move during chip pops.** Scaling the entire chip group also scales its connector around the disc centre, temporarily pulling the home endpoint away from its fixed map anchor. **Cure:** keep connectors outside the scaled group; animate their opacity separately.
- **−2 — The completion announcement precedes the final settled chip.** The count plate appears when the last placement starts, while that chip is still growing and fading in. **Cure:** reveal the completed-state plate after the last pop settles.

The regional pass is implemented as actual camera travel, and the final full-view return is continuous. The specimen’s subsequent exit into another technique is outside this mechanic and receives no deduction. Required initials and abstract-state substitutions receive no deduction.

SCORE: 80
BODY-WRITE: This return files the attempt 2 motion-fidelity score, deductions, and cures for the practice job’s Verify step and permanent score record.