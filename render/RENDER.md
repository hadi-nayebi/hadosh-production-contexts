# EO-EP3 — renders (cited, not copied)

Both renders exceed the 40 MB in-branch ceiling, so this layer
cites them by hash + workspace path instead of copying bytes
(the migration layout rule applied in migrations 1–2).

## The CLONE-VERIFIED candidate render

- Path: `files/eo-ep3-clone-v1.mp4`
- SHA-256: `293423e1ff60b93892088cb1a1b95e475bdfaa5af36245de57d873c2e3dc6b2c`
- Bytes: 43770507 · Duration: 62.34 s
- Measured (registry, re-measured 2026-10-26, identical to
  at-build): −14.82 LUFS integrated, −1.30 dBTP.
- This is the render whose audio `audio/narration.m4a` carries.

## The delivered (shipped) render — guide voice

- Path: `files/earthone-ep03-v4.mp4`
- SHA-256: `4b9369094c731b80b8cb499bd01a2a600278b4849bf88654b8109aaec1ffbeab`
- Bytes: 43771753 · Duration: 62.34 s
- The v4 build as shipped: guide-era programme audio embedded,
  the same audio the scene carries.
