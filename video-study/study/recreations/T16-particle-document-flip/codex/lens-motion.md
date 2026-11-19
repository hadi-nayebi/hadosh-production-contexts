The page targets have the right structure: `samplePageTargets()` constructs a rectangle, header, text lines, and two offset stack outlines. The scheduler releases the page before borrowing title particles, and `sampleHaloTargets()` places an elliptical ring above the title with a 350 ms formation delay.

The main motion defect is repeated reassembly instead of page flipping. Each counter change calls `releaseAll()` and randomly assigns particles to freshly shuffled targets. There is no turning edge, rotation, compression, or movement through the stack. **Cost:** the counter advances while the document behaves like a scrambling particle shape.

The cadence prevents crisp intermediate pages. Between pages 6 and 14, changes occur about every 137.5 ms, but each particle needs 230–333.5 ms to arrive, including stagger. **Cost:** those pages are retargeted before settling, undermining the recognizable rectangle and text texture during the fastest passage.

The constant-flow construction is not preserved. While traveling, `updateParticles()` replaces positions with cubic interpolation; while settled, it replaces them with target-centered sine/cosine jitter. Neither branch carries stream velocity. The jitter itself is present. **Cost:** formation reads as target attraction disconnected from the standing flow model.

Continuity also breaks at borrowing and release. `sx/sy` are captured before the streaming delay, so interpolation starts from an outdated position after particles have moved. `releaseAll()` adds randomized release velocities without preserving incoming velocity. **Cost:** small positional jumps and abrupt changes of direction replace continuous borrowing and release.

Sequencing passes at the ownership level: the 500 ms release phase clears borrowed page particles before title formation. However, released particles immediately dim and drift only about 13 pixels horizontally over that interval at base wind speed; this does not guarantee that the page silhouette has dispersed before the title begins.

Attempt 2 should inherit these cures: construct a coherent page-turn trajectory; give each displayed page sufficient settling time; preserve stream velocity throughout attraction and jitter; capture the actual departure position after stagger; and preserve velocity through release.

Body-write status: this return supplies the score and findings for `codex/lens-motion.md` and the motion cure list for consolidation into `scores.md`. Direct filesystem writes were blocked because the execution tool failed to start; neither file was updated.

SCORE: 52
