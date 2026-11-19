# T103 — Complexity ladder · build record (neutral, score-blind)

Consumer: DIAGRAM · OPENING — complexity-ladder menu card; the diagram / section-navigation surface.
Source bound: recreation.html sha256 04a53914f71e55eb8a777d6abddc72c2a54cea8f195f9607a2b5d88f5260e38a.
PIXEL-UNVERIFIED: no rendered phone view was available; geometry and legibility rest on the deterministic logic suite and the measured-fit model below.

## Construction
- DOM three-row menu card; one persistent marker node repositioned from derived state; render(t) is a pure function of elapsed time (seek, throttle and wrap cannot strand state).
- Two acts selected by configuration. Act "segment" (default): a phase table in configuration (total / assembly start / names / items / departure boundaries) drives a five-phase machine — absent, assembly, names-only, marked, departed. Act "stepping": per tier, a names-only span, a marked span (that row full ink + its items), and a return gap with the device absent; after the last tier a terminal hold on the final marked state, then wrap. Traversal order derives from the configured start row.
- Items visibility is a phase output: items render only in marked phases.
- Assembly: row offsets and marker position interpolate from entry positions to settled positions as a function of the assembly phase's progress. Dimming is colour-based at every state; no opacity is used anywhere.
- Row heights are derived per row from content (name line + gap + per-item lines + padding, lines derived from configured type sizes); row tops are cumulative; stage height derives from the rows.
- Configuration validation runs before any override is applied: structural, range, finiteness and ordering checks; an invalid override is rejected as a whole (the prior valid configuration stays in force) and the rejection is recorded in an observable list.
- Clock ownership: standalone, the file starts its own animation loop at load and renders elapsed time from its own first frame; an external driver may call the exposed render function at any moment without corrupting the loop (render holds no accumulated state).

## Measured fit (model, phone stage 360 px wide)
Stage 360 × 406 px (derived). Text column 276 px wide. Widest name "Intermediate": 220.3 px measured ink. Widest item "Element morph" at 17 px: 131.3 px + 15.4 px bullet. Item ink height 12.2 px; name ink height 21.5 px. Contrast pairs computed from the configured palette: full ink on card 12.67:1; dimmed ink on card 5.32:1; accent on card 5.16:1. Every row's content height (92 px at defaults) fits inside its derived row height (106 px). A single token wider than the column is clipped at the stage edge by the stage's overflow rule; it cannot wrap into or overlap another row.

## Configuration surface
Rows (names + item lists), marker (colour, shape, start row), palette (card, ink, dimmed ink, accent), act selection, segment phase boundaries, stepping-act spans (per-tier marked span, terminal hold, names span, return span), stage width, type (font, name size, item size, name weight, item style, line scale), bullet glyph, geometry (padding, row top, row padding, marker position/size/radius, gaps, assembly entry distance). Every key is consumed by the construction (consumption census filed; 0 unresolved keys).
