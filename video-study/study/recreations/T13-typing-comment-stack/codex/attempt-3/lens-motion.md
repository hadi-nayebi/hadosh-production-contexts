The core motion is faithful at source level: configured text reveals grapheme by grapheme, the active card carries a blinking caret, and successive cards appear below completed ones. At t=0, card 1 is complete and card 2 shows exactly “Chief Executive,” matching the evidenced opening state.

Default sequencing is guaranteed arithmetically: each next entrance starts after the preceding typing ends plus its hold. Every default intermediate hold exceeds the 120 ms landing transition, so each card finishes landing before the next appears. However, the general schedule derives from `holdAfterMs` without enforcing `holdAfterMs >= landMs`; the stronger guarantee does not survive every otherwise accepted configuration.

Replay and seeking are convincing by construction: text count, entrance position, colour interpolation, and caret phase derive from performance time. Restart resets the clock and text caches. This supports deterministic replay, although rendered playback was not independently observed here.

The downward stack supplies progress without scrolling. Fade-and-rise entrances and green landing transitions add motion unsupported by the single evidence frame. They are explicitly labelled construction choices; their fidelity remains uncertain. Per-card rhythm likewise cannot be verified from that frame.

BODY-WRITE: Enforce each intermediate hold at or above landMs so “fully landed before the next entrance” remains guaranteed under configuration changes; retain the explicit uncertainty labels for entrance and landing motion.
SCORE: 89