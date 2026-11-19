**Verdict — Hold for readability.** The progress cues are worth carrying forward, but the map does not support an as-is lift across 240–360 px. The source model drops three chapter titles at 240–248 px, and the default browser refinement can leave an overflowing title clipped at the font floor.

### Phone tabs

I ran `resolveConfig`, `computeLayout`, and `resolvedArtRect` from the SHA-matched `recreation.html`. The table shows the model’s text before browser refinement. A `/` marks a line break.

| Panel | 240 px | 360 px |
|---|---|---|
| 01 | `01` | `01 · THE / TERMINAL` |
| 02 | `02 / THE / WALL` | `02 · THE WALL` |
| 03 | `03 / SHIP / IT` | `03 · SHIP IT` |
| 04 | `04` | `04 · THE / COMMENTS` |
| 05 | `05 · IN / THE / WALLS` | `05 · IN / THE WALLS` |
| 06 | `06 / THE / SWARM` | `06 · THE SWARM` |
| 07 | `07` | `07 · THE / DAILY STANDUP` |
| 08 | `08 / THE / KEYNOTE` | `08 · THE / KEYNOTE` |
| 09 | `09 / THE / SEERESS` | `09 · THE / SEERESS` |
| 10 | `10 · I / KNEW IT` | `10 · I KNEW IT` |
| 11 | `11 / PLEASE / HOLD` | `11 · PLEASE / HOLD` |
| 12 | `12 / USAGE / LIMIT` | `12 · USAGE / LIMIT` |

1. **Title loss at the narrow end.** At 240 px, all tabs start at the 11 px floor. Eight show three lines, one shows two, and three show only the number. The integer-width sweep keeps `THE TERMINAL`, `THE COMMENTS`, and `THE DAILY STANDUP` hidden through 248 px. At 360 px, all 12 numbers and titles survive in the model, with four single-line and eight two-line tabs. The build record’s width-sweep “fits” includes number-only outcomes. For an upcoming chapter such as 07 on the first appearance, the viewer gets the number twice, in the tab and the ghost, with no visible title. Evidence in `recreation.html`, `labelPolicy`, `splitTwoLinesNT`, `splitLinesNT`, and `render`, and in `build-record-attempt13-blind.md`, “Labels” and “Width sweep.”

2. **The browser fit check can detect overflow and still leave it clipped.** The estimator shrinks in 0.5 px steps to 11 px, then tries a character-balanced two-line split before the phone-only three-line candidate. The live path uses separate number and title inputs through `splitTwoLinesNT`. The assembled-text `splitTwoLines` is a parallel implementation despite the delegation comment. In the browser, `pre-line` spans can wrap internally. Refinement sums `Range.getClientRects()` per span, with at least one rect counted per span, and checks horizontal overflow, the three-line phone cap, and the 75% tab-height budget. A wrap inside a span can pass if those limits still hold. At the floor, the default `single-line` fallback can replace a failing multiline tab with the entire title on one `nowrap` line. If that also fails, the number-only branch is disabled by the fallback setting and `.tab` clips the excess. An initially single-line tab that fails at the floor likewise has no retry with a measured split. The suggested cure is to try alternate full-title splits against actual rendered width before accepting any fallback, and require the final visible result to pass the same checks. Evidence in `recreation.html`, `.tab`, `labelPolicy`, `countLines`, `violates`, and the DOM fallback branches in `render`.

3. **The masthead has a usable default wrap path.** `headerFitPx` shrinks toward the nominal floor and then the absolute floor before allowing wrap. Both floors are 11 px, so the shipped settings have no further shrink available at either phone endpoint. The model gives 240 px two lines in a 26 px band and 360 px one line in an 18 px band. The configured `break-word` enables wrapping, and the DOM can grow the header and stage from measured content height. With the supported `normal` setting, the code keeps `nowrap` and hidden overflow, so a header that exceeds the actual content box at the floor can lose its ending. Evidence in `recreation.html`, `headerFitPx`, `headerHeightFor`, `layout`, and `#header`.

4. **Progress is encoded independently of miniature colors, with a short window to read it.** Completed versus ordinary upcoming has three visible distinctions: yellow versus muted tab, a 5 px completion bar versus none, and miniature versus numbered ghost. The completed face tint can be covered by full-bleed art, so I excluded it as an independent cue. The default upcoming target has two dedicated cues, an orange tab and a 3 px inset accent outline. Its miniature is also visible, so art presence alone would overstate completion. In the first two appearances, the bars encode four and eight completed chapters while five and nine panels carry art. In the final appearance, all 12 are completed and the 4 px top strip is the one dedicated cue identifying 12 as the target. The tab and completion bar have their own space outside the SVG. The outline is panel decoration and the final strip is a separate element, so neither depends on the art palette. At the dive endpoint the viewport is covered by target art and the overall progress state is no longer visible at either width. The moving approach has a nominal 365 ms and no static full-grid hold, so the code shows how to decode progress but does not establish that viewers can do it at playback speed. Evidence in `recreation.html`, `panelState`, `render`, `buildTimeline`, and `diveTransform`.

5. **Small art regions can lose scene identity even when the tab fits.** Below 30 px of art height, `panelArtSVG` removes text primitives smaller than 14 viewBox units and multiplies graph edge width by 2 and node radius by 1.6. `render` rechecks that threshold after tab refinement. In the 240 px model, panel 03 has about 8.3 px of art and loses `SHIPPED`. Panel 10 keeps its 24-unit inscription, but its completed art band is about 19.5 px, making the text’s vertical scale about 4.7 px before camera scaling. The final target, panel 12, has about 4.3 px of art after the tab, bar, and target strip. Its receipt shapes survive in the SVG, but the model gives little basis for recognizing them in the overview. At 360 px all painted art bands in the model exceed 30 px. Evidence in `recreation.html`, `resolvedArtRect`, `panelArtSVG`, and the final detail rebuild in `render`.

**Limits** — Verified the artifact hash and executed the source model. Browser font metrics, final line breaks, clipping and paint behavior, and recognition during playback remain unverified, consistent with the build record’s opening note. The wave average is outside this lens.

SCORE: 66
BODY-WRITE: none (read-only run). For the build record and next attempt, record the 240–248 px title loss, require a measured fallback that preserves the full title, and verify the masthead, progress marks, and miniature recognition during phone-width playback.