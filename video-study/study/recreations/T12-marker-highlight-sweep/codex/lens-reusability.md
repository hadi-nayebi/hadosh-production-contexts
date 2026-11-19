# Codex return — lens: REUSABILITY (T12 attempt 1, filed verbatim 2026-11-14)

Reusability is substantial for short, single-line highlights on the existing card, but production reuse still requires animation and layout changes. This assessment is based on source inspection; the reported 17/17 swap test covers ordinary substitutions.

- **Content and timing:** CONFIG drives text, phrase count, palette, verdict, and the main timeline. Pure `computeTimeline` and `computeState` functions provide a useful integration boundary.
- **Phrase targeting:** Cross-line phrases cannot match. Repeated identical phrases can consume successive unmarked occurrences, but occurrences cannot be selected explicitly. Reading order is not guaranteed within a line: after locating one phrase, the next search revisits earlier unmarked tokens. Missing phrases are recorded but still consume timeline slots, silently delaying the verdict.
- **Validation:** Empty highlights produce a valid stamp-only timeline. Empty phrases, invalid numbers, and zero or negative durations lack guards; division by zero can produce `NaN`, and an invalid total breaks playback.
- **Scaling and wrapping:** Every phrase receives the same sweep duration regardless of length. There are no per-target spoken-onset times. A wrapping inline span has one absolute fill rectangle, so it cannot reliably sweep each visual line in reading order.
- **Layout:** Stamp placement, font size, card dimensions, and several colors remain fixed in CSS. Long verdicts and different card shapes need layout edits. URL overrides also omit several CONFIG fields, including footer labels and marker opacity.
- **Container playback:** Playback always loops. There is no configurable once mode, completion event, or seek command. `play` restarts instead of resuming; a restart while paused can briefly retain the previous phase through `frozenT`.

BODY-WRITE: Record this build as reusable within its current card constraints; require validated occurrence-aware targets, wrapped-line fill geometry, configurable layout and per-target timing, and explicit once/resume/seek/completion controls before a general production lift.
SCORE: 74
