# Stage 1 checks — T17 attempt 11 (CP1, browser contract)

Source: `stage-1-browser-contract.html` sha256 be64d3d861eda2e12fbef760397f2ef7cdbb26a8722d0637b215db872de5f874 (content copy of the stage candidate, inode independent). Suite: 17 passed, 0 failed (stub-DOM harness).

## What landed
- Snapshot: the live-children snapshot is taken with a collection-safe conversion inside the protected publication region; snapshot creation itself is guarded — a snapshot failure takes a separate pre-mutation failure path (failure result returned, zero publication writes, live scene untouched), and publication may begin only after the snapshot verifies complete (children captured + every presentation field captured).
- Full presentation snapshot/restore: the snapshot captures and rollback restores stage class, stage height, stage inline background and colour, all 44 enumerated presentation variables, the document width variable, body background, and clock colour, beside children/configuration/playback. The restore set is derived from the commit path's enumerated write set; the suite asserts write set == restore set (44 == 44).
- Effective mounted width: the rebuild fit gate and the resize gate evaluate fit at the minimum of the candidate's configured width and the mounted viewport width.
- Named fit failures: both gates surface row-level diagnostics (figure id + the failing quantity) instead of a generic width message.

## Suite evidence (stub level)
- Valid candidate and no-argument rebuild publish; candidate palette applied.
- Discriminating width case: a candidate that fits at its configured 960 width but not at 360 is refused by rebuild while mounted at 360, with the failing figure named.
- Injected snapshot failure → failure result, scene byte-identical in children count and configuration (pre-mutation path).
- Injected publication failure after presentation writes had begun → failure result; children, configuration, stage width variable, and body background all restored.
- Resize gate on an over-wide figure names the figure and its occupied quantity on the warning surface.

## UNVERIFIED-BY-STUB / D1
The stub's children collection is a plain array and its style model does not price real layout, so the live-collection behaviour, the byte-for-byte DOM-level restore, and every layout-dependent read print UNVERIFIED-BY-STUB beside PIXEL-UNVERIFIED. The five-path real-DOM discriminating probe series (baseline / this stage / frozen candidate) is BLOCKED-ON-D1: no browser route exists in this session. The stub suite is not evidence for the browser contract's mounted behaviour.
