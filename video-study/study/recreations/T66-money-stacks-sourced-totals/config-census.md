# T66 — config-census leg (guard-config-census v3.1) · attempt 1
Build bound: recreation.html sha256 a30b374eb21468a89c058f7de6a47b752f7f7a4dea7f22960b8dcaa271f3a626 (final build).
Method: literal scan of everything outside the CONFIG block (scripted scan, printed below) + per-constant classification + CONFIG key→application-site resolution (nested and array-member keys included) + CSS-variable setter check.

## 1. All-literal scan (outside the CONFIG block)
- Hex/rgba colors outside CONFIG: **0** (scripted scan: no `#hex` matches outside the CONFIG block; CSS carries no colors — stage/bundle/band/tag/hole/counter colors are all set inline from CONFIG at render).
- Numeric literals outside CONFIG, by value: `0` · `1` · `2` · `3` · `50` · `100` · `8`.
  - `0`, `1`, `2`: loop indices, array positions, `(1 − p)` progress complements, clamp bounds against stage edges — STRUCTURAL (mathematical identities / indices; they do not scale or style the subject).
  - `3`: the ease-out cubic exponent in the row pop (`1 − (1−p)^3`) — STRUCTURAL (a fixed easing identity, identical for every element and every CONFIG; it names no subject dimension).
  - `50`, `100`: clip-path polygon frame bounds in percent (`100% 0, 100% 100%`) and the tag point's vertical center (`0 50%`) — STRUCTURAL (frame identity: the point is centered by definition; the point's horizontal extent is the CONFIG key geom.tagPointFrac).
  - `8`: the `utf-8` charset token in the document head — STRUCTURAL (encoding declaration, not code).
- String literals outside CONFIG: element ids/classes, `"px"` unit suffixes, phase names ("build"/"counter"/"hold" — state-machine labels returned by stateAt, not subject content), `"polygon(...)"` assembled from geom.tagPointFrac — STRUCTURAL. All subject strings (sponsors, totals, counter label/total) live only in CONFIG.
- CSS block literals: margins/paddings `0`, `position`, `box-sizing`, `white-space:nowrap`, `border-radius:50%` (the hole is a circle by definition), font stack Arial/Helvetica (presentation default, same fleet-wide; sizes/weights are CONFIG) — STRUCTURAL. No color, size, duration, or geometry value stands in CSS.

## 2. Key → application-site resolution (every CONFIG key resolves)
| Key | Application site(s) |
|---|---|
| durationMs | Act 1 (segment) length; checkpointsOk act bounds |
| segment.stack1EnterMs / stack1EnterDurMs | Act 1 second-stack entry time + fade (stateAt/render Act 1) |
| lifecycle.startMs | Act 2 start offset in stateAt/render; runtime derivation |
| stage.width / stage.height | stage element size; tag clamp; counter centering; bundle bounds check |
| stacks[].sponsor | tag sponsor line text (render) + layout record |
| stacks[].total | tag total line text (render) + layout record |
| stacks[].rows | computeLayout row loop; bundle count rows(rows+1)/2; tagAt derivation |
| stacks[].x | bundle centering + tag clamp center |
| stacks[].baseY | bundle row y positions; tagY = baseY + geom.tagGapY |
| stacks[].tagColor | tag face background (per-stack binding; swap-asserted) |
| palette.bg | stage background |
| palette.bundle | bundle face background |
| palette.band | bundle border color + band stripe background |
| palette.tag | tag hole background for every stack (layout holeColor; swap-asserted) |
| palette.ink | all subject text colors; hole border |
| geom.bundleW / bundleH / bundleGapPx / rowGapPx | bundle size + pyramid geometry in computeLayout and render |
| geom.bandTopPx / bandHPx | band stripe position/height |
| geom.tagW / tagH / tagGapY | tag size; tagY; clamp bound |
| geom.tagPointFrac | clip-path polygon point extent |
| geom.holePx / holeLeftPx | hole size/position |
| geom.tagPadLeftPx / tagPadRightPx | tag text left offset (right pad is the fit container bound, fit-table.md) |
| geom.sponsorTopPx / totalTopPx | tag text vertical positions |
| geom.counterW / counterH / counterY | counter chip size/position (enabled configuration) |
| geom.counterLabelTopPx / counterTotalTopPx | counter text vertical positions |
| geom.tagRisePx | tag entrance translateY amplitude |
| geom.borderPx | bundle + hole border widths |
| rowMs | per-row landing times; tagAt derivation |
| tagMs | tag fade duration; counter offset + fade unit |
| holdMs | checkpointsOk: buildEnd + holdMs ≤ durationMs |
| stackStaggerMs | per-stack startMs = index × stackStaggerMs |
| popMs / popFromScale | row landing pop duration + start scale |
| counter.enabled | counter render branch + buildEnd derivation + stateAt counterP gate |
| counter.label / counter.total | counter chip text (enabled configuration) |
| counter.color | counter chip background |
| type.sponsorPx / totalPx / counterLabelPx / counterTotalPx | the four subject text sizes |
| type.boldWeight | total + counter-total font weight (set inline at render) |

## 3. CSS-variable setter check
The build uses NO CSS variables (no `var(--…)` reference exists in the file) — the setter-failure class has no instance. All CONFIG consumption is direct JS reads, resolved in §2 above.

## HIT list
- PRE-CURE (cured before scoring, leg re-run): four shaping literals stood outside CONFIG in the first build — pop start scale `0.7`, tag rise `8` px, border `1px` (×2), bold weight `700` (CSS ×2). CURE: bound as popFromScale · geom.tagRisePx · geom.borderPx · type.boldWeight and consumed at the sites in §2; CSS font-weight removed.
- FINAL BUILD HIT LIST: **EMPTY — 0 hits.** No unapplied key, no unset variable, no subject-shaping literal outside CONFIG.
