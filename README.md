# stage3d — share-branch checkpoint: ASSEMBLY v1 (the assembly build)

The assembly build: stage.html is now an assembly system only — it
carries the engine, the checker, the player, the verifier and the
generic prop builders, and NO location content. Every location stands
in its own data file under `assets/locations/<id>/location.js` (its
books + engine numbers + assembly table, a classic script registering
`window.STAGE_LOCATIONS`); choosing the location in the page's
DROP-DOWN menu (EMPTY SPACE first, then the saved locations) loads
that location's data and assembles it, disposing the previous location
whole.

This checkpoint carries: the theater extracted unchanged (its books
byte-identical to the books build's close, verified by differ; the
verifier's two production reports re-proven against the ASSEMBLED
theater), a second location — the gym, a WORKSHOP-tier test location
added by data + its script-tag index entry alone, as the assembly
proof — the first-open seat (the page boots into the theater at the
owner's room-default pose), the camera controls hidden behind the PiP
menu door (visibility by frequency), a standing REQUEST AN ITEM door
per location, and the prop ledger face (ALWAYS VISIBLE / EVENT ONLY).

stage.html 520,600 B · sha256 44730dad. Full record:
records-20261105-stage3d/stage3d-assembly-build-record.md (in the
delivery-gate records tree of the goal workspace).
