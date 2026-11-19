Motion fidelity: strong coverage of the core mechanisms, with two remaining defects. This is a source-based assessment; rendered playback remains unverified.

The broadsheet and masthead persist through the 22.5-second sequence. Figures arrive in order within that frame. The source implements SVG line draw-on, discrete waffle filling, character-by-character typing, downward stack arrivals, growing bars and donut reveal, sequential org-node appearance, a live counter, a stamp impact with compression and settle, and staggered note fades.

The counter and graph share `collapseN`, so their falling values stay synchronized. However, the cliff marker is misplaced: the graph maps horizontal position through animation progress, putting cliff onset at `0.68 / 0.85 = 0.80` of its width, while the marker sits at `0.68`. Cure: derive the marker’s position from the graph’s same time-to-x mapping.

The stamp’s bounding-box cap truncates the entrance curve. Its initial scale remains capped before contraction begins, weakening the continuous approach into impact. Cure: generate the approach from the permitted entrance scale directly, retaining the overshoot, compression, and settle.

FIG.20’s supplied points finish with a modest rise rather than the stated spike. Under the §8 split, that is a CONFIG-content discrepancy; the draw-on mechanism itself is present.

Next verification must include timed playback of the cliff alignment and stamp entrance. Logic checks establish the curves but do not establish their perceived motion.

BODY-WRITE: Require one shared time-to-x mapping for the counter graph and cliff marker, and construct the stamp entrance from its fitted scale rather than clipping its scale curve; retain rendered playback verification as outstanding.
SCORE: 88