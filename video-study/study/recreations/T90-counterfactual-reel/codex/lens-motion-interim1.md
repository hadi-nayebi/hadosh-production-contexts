Motion fidelity passes this lens at **86/100**, based on the supplied source. Pixel playback remains unverified.

- **Branch and travelling dot:** The curve forks from the shelf and draws downward during the four-second intro. The dot follows its growing tip, then holds. However, `branchPath()` draws 5% immediately at t=0 and advances in 40 discrete steps—approximately 100 ms per step—so the motion is stepped rather than continuous.
- **Discrete landings:** Door at 4000 ms, tag+box at 7000 ms, lamp at 9000 ms, and counter at 12000 ms appear instantly. No transitions or cross-fades soften their arrival.
- **Accumulation:** Earlier icons and lines retain their geometry, wording, and visibility as later components arrive. The SVG beat group is rebuilt, but its earlier contents remain visually identical. Everything resets at the cycle boundary.
- **HUD persistence:** Pass structurally. The HUD is constructed once outside the changing SVG groups and is untouched by `render()`.
- **Phase exclusivity:** Each landing has a distinct timestamp. Branch completion coincides with the door landing, but no two outcome beats land together.
- **Movement model:** The persistent shelf, downward branch, and accumulating flipped outcomes reproduce the described reel mechanic.

The fixed wide view omits the original opening pullback. This is an honestly named motion deferral and warrants a modest deduction; the branch mechanic survives it.

The ALLOCATION disclosure correctly limits the semantic pairing claim. It does not establish measured landing times. Likewise, f373 supports the completed third set at segment 13 s; the build’s 12 s counter arrival is an interpretation, not a measured match.

Next cure: eliminate the initial branch stub, use continuous curve-tip positioning, and tighten the evidence for counter-completion timing. Restore the pullback if pursuing full scene-motion fidelity.

BODY-WRITE: No file written; the execution tool failed because its code-mode host was missing. This verdict is intended verbatim for `codex/lens-motion.md`.
SCORE: 86
