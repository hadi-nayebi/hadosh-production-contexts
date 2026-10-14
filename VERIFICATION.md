# Documentation / portability increment — October 14, 2026

Base: video-production `d5857f1`. This increment does not change scene components, timing data, audio or the accepted master.

Executed in the existing public checkout:

- `node --check scripts/render-release.mjs` — passed.
- `node --test scripts/tests/render-release-cli.test.mjs` — 3 tests passed (help, bad mode, hash/sample-boundary guards); no renderer invoked.
- `node scripts/render-release.mjs --help` — passed.
- Python AST parsing of the five available audio/scene analysis scripts — passed; no analysis executed.
- `npm run build` — TypeScript and Vite passed; existing large-bundle warnings remain.
- `git diff --check` — passed.

The build used existing installed dependencies through a local ignored symlink and host Node v22.21.0, below package.json's declared minimum. It is not a clean `npm ci` or supported-version installation claim. New clones must use the declared Node range and install their own dependencies. The tracked absolute symlink and tracked Python bytecode are removed by this change; their presence in released history is not rewritten.

No generation, paid provider calls, fresh sample/full render, upload, merge or social publication was performed. Browser UI behavior is unchanged. End-to-end render verification on another system still requires authorized audio, saved state and a sample review.
