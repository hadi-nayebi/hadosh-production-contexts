# EO-EP3 — renders (cited, not copied)

Both renders exceed the 40 MB in-branch ceiling, so this layer
cites them by hash + workspace path instead of copying bytes
(the migration layout rule applied in migrations 1–2).

## The CLONE-VERIFIED candidate render

- Path: `files/eo-ep3-clone-v1.mp4`
- SHA-256: `ac79636898b9dcb73274ef5d0c88820086e83f4ef2d2285bcf33712ee14e1a28`
- Bytes: 26007231 · Duration: 62.34 s
- Measured (JOB ONSET-REPAIR-1, 2026-10-26, the verification method —
  loudnorm input_i/input_tp): -14.82 LUFS integrated,
  -1.3 dBTP.
- This is the render whose audio `audio/narration.m4a` carries.
- **Onset repair (2026-10-26, JOB ONSET-REPAIR-1):** this candidate was
  re-rendered from the onset-repaired scene (phrase-1 window opens at
  the first word's spoken onset, 1.42 s; see `metadata.json`
  fields.onset_repairs, now decided). The superseded candidate
  (sha256 `293423e1ff60b93892088cb1a1b95e475bdfaa5af36245de57d873c2e3dc6b2c`,
  43,770,507 B, 62.34 s, −14.82 LUFS / −1.30 dBTP) is superseded, not
  erased: its identity stands here and in `render/verification.json`.

## The delivered (shipped) render — guide voice

- Path: `files/earthone-ep03-v4.mp4`
- SHA-256: `4b9369094c731b80b8cb499bd01a2a600278b4849bf88654b8109aaec1ffbeab`
- Bytes: 43771753 · Duration: 62.34 s
- The v4 build as shipped: guide-era programme audio embedded,
  the same audio the scene carries.
