**Construction purity passes.** The reviewed `recreation.html` generates every tile from code and contains no specimen media references, embedded imagery, or external asset loaders.

- `recreation.html`, `CONFIG.waves`, `CONFIG.heroTileCount`, `maxCount`, and the three construction loops. The phase maxima are 32 and 24, with 4 heroes. All 60 tiles go through `makeTile`.
- `recreation.html`, `rng`, `makeTile`, and `.hero .fig` / `.hero .body`. The seed determines gradient colors and angles. CSS bars, blocks, and circles form the wall motifs. Initials derive from tile indices, tags are inserted as plain text, and the hero figures are CSS head and body shapes.
- `recreation.html`, `applyOverrides`, `render`, and the `RECREATION` API. Query parameters supply text, validated hex colors, or numbers. The comparison sync interface exposes playback and state controls without loading media. The extracted source is 27,420 bytes and its SHA-256 matches `build-record-attempt3.md` § Checkpoint ledger.

**Limits.** The separate comparison page and original specimen were unavailable for direct inspection. The comparison page’s isolation and the label wording’s provenance were therefore not independently verified.

**Body-write: none (read-only run)**  
BODY-WRITE: Record the source-verified purity pass in `build-record-attempt3.md` and `scores.md`. No construction cure is required.  
SCORE: 100
