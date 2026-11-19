Reusability score: **72/100**.

The CONFIG surface covers content, HUD, palette, typography, geometry, and global rhythm well. Card fields are addressable through per-index overrides; the renderer applies the declared keys, and both cycle length and card selection derive from `cards.length`. The supplied source supports the reported swap behavior.

The main limitation is that production cannot safely supply arbitrary replacement content:

- **Shorter card lists do not replace the defaults.** `deepMerge` preserves trailing base entries: supplying one card retains three, and supplying `cards: []` also retains three. Additional cards can be appended, but removal lacks an explicit, documented mechanism.
- **Content has no fit contract.** Quote, speaker, and role text occupy fixed absolute positions without measurement, overflow detection, resizing, or rejection. Longer quotes can collide with attribution; longer attribution can extend beyond its reserved area. Changing geometry manually is possible through CONFIG, but production receives no indication that it is necessary.
- **Overrides lack validation.** Malformed JSON silently restores defaults; structurally invalid JSON can reach rendering. Null cards, wrong field types, nonpositive timing, or invalid dimensions have no actionable diagnostic. `enterMs > cardMs` prevents a card from reaching full opacity during its slot.
- **Rhythm supports only uniform slots.** All cards share `cardMs` and `enterMs`; individual reading durations, cue times, and reveal schedules require logic changes. This limits transfer to Q&A answers of different lengths.
- **Geometry is configurable but largely independent.** Changing stage width does not derive card width, quote width, or attribution spacing. A new format requires coordinated manual configuration.

Next attempt must cure:

1. Define explicit card-list replacement and per-index patch semantics; verify one, two, and four cards, with a documented empty-list policy.
2. Validate the merged configuration before rendering, including content types, finite dimensions, and timing relationships. Report invalid overrides visibly.
3. Add deterministic quote and attribution fit checks with a documented response: bounded resizing, pagination, or rejection.
4. Support per-card durations with global defaults, deriving cycle length and boundaries from the resulting schedule.
5. Verify short and long content, font changes, alternate stage widths, and every CONFIG group with rendered evidence.

These findings come from static inspection of the supplied source. Runtime and pixel behavior were not independently verified.

BODY-WRITE: none (read-only run). The execution tool failed to start, so `codex/lens-reusability.md` was not written; the consumer must persist this return verbatim.

SCORE: 72
