Motion fidelity: **62/100**. The phase machine preserves one active data beat at a time, but Act 1’s HUD coupling fails and the chart never draws on screen.

- **Card entrance:** The card, numeral, and units share the entrance phase at 2.6–3.1 s. This groups them coherently, but rise-and-fade replaces the measured border-first entrance, which establishes the frame before revealing its text.
- **HUD defect:** `showBeat(0)` sets 2025, then the lead phase overwrites it with 2037. Neither enter nor hold restores 2025. Act 1 therefore displays **2037 throughout its evidence card**. Act 2 correctly switches to 2025 through `showBeat(1)`.
- **Units:** Five units appear in count order during the 500 ms entrance. This is a reasonable, explicitly allocated interpretation of “1 in 5.” Their transforms change instantaneously, however: they pop into place rather than visibly land.
- **Chart:** The chart belongs exclusively to its beat and its hanging-bar height derives from the percentage. But every chart element fades in together. There is no progressive drawing of the beam, bars, loss, or question steps—the technique’s essential chart movement is missing.
- **Sequencing:** Slot ownership and end hold are deterministic. At 6.5 s, the first card disappears and the second begins entering without overlap. However, the first card never clears back to the scene/HUD 2037 before the second evidence beat, as the measured Act 1 exit does.
- **Dialogue coupling:** The clock supplies an allocated sequence, with no dialogue track or speech cues. Appearance at the number’s spoken moment and persistence through the follow-up exchange remain unproven. Act 2’s allocation is structurally plausible, but cannot establish observed timing fidelity.

Next attempt must:
1. Set the HUD year from the current phase every frame: scene year during lead/reset, evidence year during entrance and hold.
2. Implement border-first card construction followed by text, and an explicit Act 1 clear/reset phase.
3. Animate the chart’s construction, with the loss and numeral resolving on their data cue.
4. Give allocated units visible landing motion.
5. Bind beat entrances, holds, and exits to documented dialogue cues; keep inferred Act 2 timing explicitly labeled.

Assessment is source-based; browser playback and on-disk hash verification were unavailable because the execution tool failed to start.

BODY-WRITE: none (read-only run). Consumer must persist this return verbatim at `codex/lens-motion.md`.
SCORE: 62