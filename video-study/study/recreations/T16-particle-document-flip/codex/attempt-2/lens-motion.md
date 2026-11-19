Motion fidelity: **64/100**, assessed from the supplied source; playback remains unverified.

The page has a strong structural basis: `samplePageTargets()` generates a rectangle, two offset backing outlines, a header and line texture. `retargetPage()` preserves matching assignments and changes line targets between pages. This supports recognizable pages rather than repeated whole-cloud morphs. Staggered borrowing captures each particle’s actual streamed position, settled particles retain jitter, and the reserve remains unborrowed.

The principal priced findings are:

- **Stored velocity is mistaken for continuous motion.** In `updateParticles()`, travel overwrites position using eased interpolation; settled motion overwrites it using target-relative sine/cosine jitter. Neither branch integrates `p.vx/p.vy`. Release then switches immediately to stream-plus-divergence displacement. **Cost:** immutable velocity fields pass the reported test while actual particle trajectories can change velocity abruptly at capture, settlement and release, violating A5’s central mechanic.
- **The turn reads as a synchronized squeeze more than a page flip.** `turnCompression: 0.18` compresses the front page, header, text and backing stack around the same centre, then restores them. There is no turning edge, pivot, depth exchange or separate movement of front and backing pages. **Cost:** the stack can read as a pulsing document with changing lines; page-counter progress carries more of the flipping illusion than the motion itself.
- **Release changes the field rather than simply returning particles to it.** The unborrowed branch adds `(position − stageCentre) * div`, with `div` determined by each particle’s release age. **Cost:** recently released particles receive a distinct expanding motion instead of rejoining one constant stream; this also compounds the release velocity discontinuity.

Sequencing is materially stronger: `releaseAll()` runs at 2600 ms, and title borrowing waits until 3100 ms. Page assignments therefore end before title formation begins, although that does not establish that the visible page silhouette has fully disappeared. The halo uses ellipse targets above the title and begins borrowing 350 ms later, supporting the required ring formation.

**Body-write supplied through this return:** this motion score and its evidence-priced findings constitute the content for `codex/attempt-2/lens-motion.md`. The consumer should carry the score into `scores.md`; if the combined verdict carries the attempt forward, its motion cure list is: integrate the stream component throughout borrowing, preserve actual trajectory velocity across transitions, and replace the shared squeeze with a distinct front-page turn over the backing stack. No direct filesystem write is claimed.

SCORE: 64
