# T43 — Attempt 2 cure plan (practice Cycle 006 Wave 5)

Prior: motion 61 · timing 64 · purity 95 · reusability 62 · readability 61 → avg 68.6, min 61, FAIL. Bar: avg ≥85 AND no lens <70.

## Timing observation (firsthand, this run — segment.mp4 frames extracted and viewed)
Segment = source 18:50–19:04. Observed (segment-relative):
- 0–2.3s: prior scene (NOT the inflaton artwork — that phase is the 14:32 specimen moment, a montage element).
- ≈2.5s: crossfade in progress; the dashed divider is ALREADY full-height during the fade (it leads the transition, it is not drawn after it).
- ≈2.8–3.0s: SOLID SCIENCE pill fading in; SPECULATION pill and left panel absent.
- ≈3.5–4.0s: SPECULATION pill + settled-items panel in.
- 4.0–7.5s: hold (pills + panel only).
- ≈7.5–8.0s: wave-through-barrier object enters.
- ≈8.0–8.5s: provenance pill enters → complete split stands by ≈8.5s (18:58.5), before the 19:02 anchor frame.
Entrance ORDER (observed): divider → solid pill → spec pill + left panel → wave object → provenance pill.

## Cures (convergent first, per RUN.md C1)
1. **Timing (motion+timing convergent).** Retune checkpoints: splitStart 8200→9800; dividerIn = splitStart (divider leads, per observation); solidIn 10000; specIn + leftPanelIn 10400 (decoupled — panel gets its own checkpoint); objectIn 11000; provenanceIn 11400; fades ≤600ms → complete split stands at 12000 exactly; final hold 2000ms. Phase-A tag entrances respaced across the longer artwork phase (1800/3600/5400/7000). Attribution check: node suite asserts every completion time (checkpoint+duration ≤12000) and the observed entrance order.
2. **PIXEL-UNVERIFIED (motion+readability convergent).** Try the agent-session Chrome render route once; if blocked (known fleet issue A-C002-2), file PIXEL-UNVERIFIED as an explicit UNMET-cure gap in the build record and scores filing — source-bound displayed-state modelling is a supplement only, never claimed as this cure.
3. **Split construction (motion+reusability convergent).** Panes become real clipped containers whose bounds derive from `split.ratioPct` (left pane [0, ratio), right pane [ratio, 100)); all pane content positioned in pane-LOCAL percent coordinates; phase transition = panes clip/separate (phase A clip shrinks, phase B panes clip in from the divider) in addition to opacity; divider sits at ratioPct. Attribution check: swap ratioPct 50→35 asserts pane widths, divider position, and pane-local content positions all move consistently.
4. **Containment (readability).** `box-sizing:border-box` on *, pills, panels; provenance pill width = pane-local panel width with border-box so padding no longer adds overflow; left panel width reserved with a gutter before the divider; SCHEMATIC POTENTIAL measured in the source-bound model (ink bound incl. configured letter-spacing) and repositioned to fit; bottom tags get explicit non-overlapping bands (stylizedTag y-band vs schematicTag y-band disjoint in the model). Attribution check: displayed-state model at 360px and 390px asserts every element's border-inclusive rect inside its container and pairwise non-overlap of the bottom tags.
5. **CONFIG application/schema (reusability + purity).** (a) `statusLevels` registry keyed by level (bg/fg defaults); each artworkTag resolves colors through its `level`, per-tag bg/fg become optional overrides. (b) Every tag carries explicit `enterMs` — checkpoint-name coupling deleted; render validates all enterMs present/finite/ordered, throws on violation. (c) `split.right.panelYPct` applied: the wave/barrier object lives in a right-pane object container positioned by panelXPct/panelYPct/panelWPct (pane-local), its SVG fitted inside via viewBox. (d) Shared pane-content schema: both panes take `contents[]` entries of type `list` | `object` | `provenance`, built by one builder — a list can be configured on either side. (e) letter-spacing (pill/small), divider style, subtitle opacity move into CONFIG and are applied via CSS variables/construction. Attribution checks: swap tests per sub-cure (level recolor propagates to all tags of that level; panelYPct moves the object container; list-on-right renders; letter-spacing key changes computed model width).
6. **Tag/object fidelity (motion).** Restrict the phase-A tag sequence to tags belonging to the displayed object (the potential curve): HYPOTHETICAL (on the curve) and SCHEMATIC POTENTIAL (the curve is a schematic potential — its own label in the specimen frame) stay; STYLIZED, NOT A LIKENESS and NOT TO SCALE — which in the specimen qualify other objects (figure/map) that never appear — are REMOVED from the default sequence (the parameterized tag list remains fully CONFIG-driven, so a builder whose object carries those tags re-adds them as data). Attribution check: suite asserts every default tag's level maps to the displayed artwork object.

## Deferred
- Subject-handoff recreation (figure/map scenes for the removed tags): deferred — building two extra specimen scenes is a rebuild-from-scratch expansion beyond this attempt's convergent scope (§8); the restriction branch of cure 6 is the priced alternative named in the motion return itself.
- Rendered 360px pass: deferred ONLY if the Chrome route is blocked; filed as PIXEL-UNVERIFIED unmet-cure gap, not as compliance.

## WHY scaffold (if avg does not beat 68.6)
Cure-by-cure outcome slots in scores.md Attempt 2; stuck-lens hypothesis pre-drafted: readability/motion remain capped by PIXEL-UNVERIFIED (no rendered pass exists in this seat) even with source-bound containment cured; reusability capped if any CONFIG key remains unapplied (census re-run at key-path level, not top-level).

## Failure points priced
F1 preservation: content copy done pre-build, inodes differ, sha identical (f9b550d2…); re-census after first overwrite. F2 payload anchoring: lens payloads allowlist-only + anchor scan. F3 interim returns: create-once under codex/attempt-2/ before any re-fire. F4 proxy geometry: displayed-state model (border-inclusive, pane-local offsets accumulated). F5 stale pool: seat's Observe, not this item's risk.
