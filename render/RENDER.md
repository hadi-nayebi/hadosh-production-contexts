# SOA-01 — the render derivative (phase 6, 2026-10-26)

The MP4 is a **derivative** of this file system — the last thing
produced, never the product. This document defines exactly how
this branch's derivative is produced, so the assembly is a
procedure, not a craft secret. **Status: defined, assembly
pending (main agent).** Nothing in this branch claims a produced
MP4 yet; `render/verification.json` holds the reference
measurement set the assembly must meet.

## Inputs (all in this branch)

1. `scene/index.html` — rendered at `?render` (every editor
   overlay inert under that flag, by the phase-7 pattern's terms),
   1080×1920 @ 30 fps, deterministic `renderAt(t)` over
   0 → 34.348 s, via the house headless-Chrome capture pipeline
   (private port per render).
2. The clone programme audio — `audio/audio.json` cites it by
   sha256 + path (the delivered programme audio: clone narration
   over the bed). The scene's own embedded audio is a preview
   copy and is NOT the derivative's audio track.
3. The +2.000 s bed extension (DR-AUDIO-EXT) is already inside
   the programme audio's timeline; total duration 34.348 s.

## Assembly

1. Capture the scene's frames at `?render`.
2. Encode h264 (the first draft's derivative used the guide
   build's video stream as its picture; this branch's derivative
   renders its own scene — same code at this phase, so the
   picture is the same picture, but produced from this branch).
3. Mux the programme audio (AAC, encoded once — A-09).
4. Measure the produced file: duration, integrated LUFS, true
   peak. Targets: 34.348 ± 0.05 s · −14 ± 1 LUFS · TP ≤ −1 dBTP.
5. Run the word-onset probe (register R-5; tolerance C-02
   ±120 ms) on the assembled file.
6. Record measurements + the produced file's sha256 in
   `render/verification.json`; strike register item R-3.

## Reference measurement set (cited, not claimed)

The first draft's delivered file — the same scene code and the
same programme audio, assembled under the same standard —
measured on the file itself (2026-10-26, identical to at-build):

| Measure | Value |
|---|---|
| File | `files/soa01-clone-v1.mp4` |
| sha256 | `5b67bea3fc93109e9ea98b36610c0ec3bbc7236d93db8f6f189c96f55491068d` |
| Bytes | 2,200,688 |
| Duration | 34.348 s |
| Integrated loudness | −14.42 LUFS |
| True peak | −1.46 dBTP |
| ASR check | 79/79 tokens in order, zero del/ins (ASR ruler) |

If this branch's assembly cannot meet these, the miss is
recorded in `verification.json` with its cause — never absorbed
silently, and never fixed by re-rolling verified audio (the fit
standard's stop rule binds the derivative too).
