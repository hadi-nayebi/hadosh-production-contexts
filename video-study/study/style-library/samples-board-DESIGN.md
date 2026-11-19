# SAMPLES BOARD — DESIGN

_Owner: style-library job. Status: **DESIGN DRAFTED 2026-11-15, style-library Cycle-009** — the board gate opened this cycle (INDEX.md shows 4 catalogued packets ≥ the ≥3 the gate requires, INSTRUCTION §2.3). This is a design only; the build is a separate HQ/production act. The gate stub's requirements (collected 2026-11-13) are carried into §2 unchanged in substance._

## 1. The job the board does
The board is the surface production opens during Observe. Its one job: **find a technique and its evidence fast** — the library's naive-use standard (a named technique located, with packet + timestamps + frames, in under 60 seconds) is its acceptance bar. At Cycle-009 the library holds 98 techniques across 4 packets and 37 assets; the register files alone no longer pass that bar unaided (Cycle-009's naive-use test: 67 s surface path on the grown TECHNIQUES.md — the failure this board exists to cure structurally).

## 2. Requirements (from the gate stub, 2026-11-13)
- Technique-first browsing (not packet-first): production thinks in techniques/containers; packets are evidence.
- Filter by container type: opening · transition · word animation · diagram · ending (thumbnails + cross-container systems are also first-class filters — VIEWS.md carries seven views, the board mirrors all seven).
- Frame thumbnails carry the evidence; no card face exceeds the fleet's ten-word container hygiene without a tap.
- Phone-first layout (the owner reviews on his phone); tappable controls never behind the phone navigation (fleet law).
- Every card links the packet (PDF + md) and its reception record where one exists.

## 3. Information architecture
- **Home = the seven consumer views** (openings · transitions · diagrams · word animation · endings · thumbnails · cross-container), generated from TECHNIQUES.md `Feeds:` fields + ASSETS.md consumer lines — the same derivation as VIEWS.md; the board never hand-maintains its own copy (a view that disagrees with a Feeds field is stale, per Amendment A5's rule).
- **Card = one technique or asset.** Face (≤10 exposed words): name · tier chip · one frame thumbnail (the technique's first cited ev frame). Tap expands: mechanics line · packet + timestamps · all cited frames · recreation state (tier + latest score + link to recreation.html/scores.md when one exists) · packet links (PDF + md) · reception link where one exists.
- **Tier is always visible, never merged:** DESCRIBED (with OWED / not-owed mark) · IN PROGRESS (latest attempt score) · RECREATED (PASS score). Production's rule stands on the board's face: only RECREATED is substrate; the other tiers print as inspiration, tier shown.
- **Filters:** container view (the seven) · tier · packet · owed-only toggle (the recreation queue's shopping list) · text search over technique names. Filters compose; the result count prints beside them.
- **Packet shelf:** a secondary, packet-first strip (4 catalogued + in-flight shown greyed with their gaps) for readers who arrive from a digest — never the home view.

## 4. Phone-first layout
- Single column, cards full-width; filter bar sticky at top with thumb-reachable chips; no control within the bottom navigation zone.
- Thumbnails lazy-load at card size; the board renders the packet's cited frames (ev/ pointers), never bulk frames/.
- First paint shows the openings view (production's most common entry) with the filter bar; a deep link per technique (`#T53`) lands on the expanded card.

## 5. Data contract
- Source of truth stays the library surface files (TECHNIQUES.md · ASSETS.md · INDEX.md · VIEWS.md derivation). The board is a render of those files, regenerated whenever a library cycle changes a Feeds field, a tier, or the register (the same same-cycle duty as VIEWS.md, Amendment A5).
- A technique whose frames cannot be named does not get a thumbnail card — it renders text-only with its "packet cites no frame" note, exactly as its TECHNIQUES entry prints.

## 6. Acceptance
- The naive-use test, run against the board: a cold reader locates a named technique + packet + timestamps + frames (+ recreation artifact when RECREATED) in <60 s. The board ships only when that passes at phone size, verified playing on the served page (fleet law — an unplayable specimen is not a specimen).
- Ten-word hygiene and tier-on-every-line are mechanical checks on the generated board, run at each regeneration.

## 7. Open questions for the build act (not this design)
- Hosting surface (production-board vs its own page) — HQ/production's call at build time.
- Whether reception records join at launch (reception-analysis has not yet run on any packet — the links would stand empty; the design carries the slot regardless).
