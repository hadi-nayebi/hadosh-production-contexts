# Documentation increment — October 14, 2026

Base: song-production `1a8ad25`. No application components, source audio or accepted film were changed.

Executed: `npm run build` (TypeScript + Vite) passed using existing dependencies, first under host Node v22.21.0 and again under supported Node v24.15.0. Large-bundle warnings remain. `git diff --check` passed. Referenced branch-specific file paths were checked against Git's tree; this branch has no lyricFocus directory or render-release helper.

No clean `npm ci`, generation, audio analysis, legacy render, publication or merge was run. The earlier renderer still needs its source-compatible scene and media; this change documents that boundary rather than claiming universal portability.
