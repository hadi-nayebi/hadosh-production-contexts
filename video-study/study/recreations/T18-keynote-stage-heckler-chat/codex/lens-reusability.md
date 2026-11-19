Production can swap much of the content through CONFIG, but the claim that every shaping variable is configurable is false. The 18/18 test covers same-length content swaps and fewer cuts; it does not establish reuse across different table lengths.

Material gaps:

- **Highlight selection is specimen-bound.** `highlightWordIndex` controls only line 0; line 1 always highlights word 0, and subsequent lines cannot highlight any word. Use per-line highlight indices with validation against each line’s words.
- **Chat pop duration is hardcoded.** `220` appears twice in rendering logic, alongside fixed scale endpoints `0.8` and `1`. Move these into CONFIG.
- **Title cardinality lacks a coherent timing contract.** Extra title lines without matching timestamps appear at time zero through `||0`. Require complete line records containing text, timestamp and highlight selection, or reject mismatched arrays.
- **Chat URL swaps cannot change message count.** `chats` maps over the existing four records: extra texts are discarded; fewer texts retain specimen messages. Sender names, displayed times and avatar colours also lack URL overrides. Accept complete message records.
- **Cut overrides leave framing assignments implicit.** More than six cuts silently recycle framings through modulo; fewer cuts use a prefix. Expose complete `{tMs, scale, x, y}` cut records and validate ordering and nonempty data.
- **Sizing and palette remain partly fixed.** Title clamp bounds `13px`/`44px`, layout geometry, other typography, screen effects and several colours remain outside CONFIG. The CSS background duplicates `CONFIG.bg`; body/stage overrides make this duplication less consequential at runtime, but do not eliminate it.

Stat cards, counter, message metadata, stage colours and audience count are configurable directly. Pure checkpoint state is a useful foundation. However, swap-critical URL coverage and structural consistency need another attempt.

Required verification: test one and five title lines, zero and six messages, one and eight cuts, per-line highlight changes, altered font bounds and pop duration, and malformed tables. Assert rendered element counts and values as well as computed state.

This lens falls below the 70 floor, so this attempt cannot consolidate regardless of the other scores. Assessment uses the supplied source; the filesystem tool failed to start, so no local files were changed.

BODY-WRITE: Replace the build record’s “every shaping variable” and “non-trivial outside-CONFIG literals: 0” claims with the gaps above; require complete title/message/cut records and cardinality-changing swap tests before the next scoring wave.
SCORE: 58
