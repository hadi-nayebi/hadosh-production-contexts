Reusability is strong but incomplete: production can replace the room argument through configuration, yet an unbroken wall answer cannot render completely.

The configuration covers texts, camera identity, timestamp, typing speeds, checkpoints, palette, room geometry, glow, typography, overlay settings, and wall wrapping. URL overrides cover all three texts, camera/date, timings, and palette values. Invalid schedules reject the entire override set and expose reasons through `__T14.REJECTED`, `__rejectedOverrides`, and a DOM attribute. Wall sizing computes both width and height limits using configured inputs.

Three defects limit configuration-only reuse:

- **Hard-split words lose characters during rendering.** `splitLines()` splits a 26-character unbroken word into two 13-character lines. At full completion, `render()` consumes 14 characters for the first line because it always subtracts `line.length + 1`. Only 12 remain for the second line; its final character never appears. The reported hard-split PASS therefore does not establish displayed-text preservation.
- **Impossible fits are diagnosed but still overflow.** When the calculated font falls below `wallMinFontPx`, the code increases it to that floor. The diagnostic is observable, but production receives an invalid layout rather than a rejected configuration or a fitting result.
- **Some shaping choices remain outside configuration.** The minimum duration of `1000`, minimum typing interval of `5`, gradient directions, vignette shape/position, and TV-glow ellipse are hardcoded. Typography uses viewport-width CSS sizing while its model uses stage width, weakening reuse inside differently sized containers.

Cures: preserve source-character offsets through wrapping and test the final rendered text for exact character retention; reject impossible layouts before playback or apply an explicit configured overflow policy; move remaining shaping choices into configuration and make typography use the same sizing basis in model and DOM.

BODY-WRITE: Add a displayed-text preservation gate for hard-split answers and a fit-failure policy to the practice instructions; the existing wrap/fit PASS claims do not establish safe configuration-only reuse.
SCORE: 81