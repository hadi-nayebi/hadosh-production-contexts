Verdict: construction purity supports lifting the machinery as-is; no refusal-class specimen-media hit found.

- **No media or external-asset finding.** Inspection of `recreation.html` found no media elements, image references, embedded media payloads, external URLs, asset imports, or frame sequences. Miniatures are generated as inline SVG by `primSVG` and `panelArtSVG` (`recreation.html:1029`, `:1084`). The disk source’s SHA-256 matches the build record.
- **Miniatures appear to be generic code-drawn glyphs.** `CONFIG.artRegistry` (`recreation.html:149`) constructs terminal bars, grids, a node graph, geometric figures, buildings, and a receipt from simple primitives. No dense frame-tracing geometry is evident. Specimen-art copying is not established by this source.
- **No finding of fake parameterization.** Specimen header, chapter labels, and inscriptions—including “SHIPPED,” “$0 ×3 = $0,” and “I KNEW IT!”—remain explicit configuration data (`recreation.html:28`, `:165`, `:188`, `:210`). `resolveConfig` supplies replacement header, panel, number, appearance, and registry routes (`:564`; registry parsing at `:701`); the renderer dispatches by primitive type rather than specimen chapter identity. Reuse requires supplying new content, without re-deriving the machinery.

Limits: archived specimen frames were not available for direct comparison, so independent provenance of the miniature designs remains unverified. This verdict assesses source construction only, not rendered fidelity or other lenses.

SCORE: 96
BODY-WRITE: none (read-only run); return for verbatim filing in the build record: construction purity passes, with specimen-art provenance comparison unverified.