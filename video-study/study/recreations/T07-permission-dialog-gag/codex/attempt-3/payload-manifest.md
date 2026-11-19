# T07 Attempt 3 — payload manifest (A-C010-1c, filed before any lens firing)

Allowlist per lens packet (identical except the lens judge section): (1) standing header — consumer practice §5, decision priced, bar only (average ≥85, no lens <70), scores integers 0–100, closing `SCORE: <integer>`; (2) the lens's judge text; (3) neutral technique facts (packet P1, frame-evidenced); (4) the neutral recreation source (`recreation.html`, sha256 bf55ad56e85ba46b4305e7efa590095dd440e16d8fdafd3f1d515709f2ec3f7d); (5) the neutral build record (packet copy with attempt/cycle references neutralized); (6) neutral own-check packet (aggregate names/results only: 57/57, census 106/106, magnitude fields 67, PIXEL-UNVERIFIED).

Exclusions: RUN.md · scores.md · prior returns · prior scores · target scores · cure-to-lens commentary · plan files. No prior score appears in any packet (bar only).

Anchor scan (assembled payloads, including source comments and filenames): patterns for prior averages, target average, cure codes, amendment labels, scores/RUN filenames, prior-attempt references — **all five packets CLEAN** (scan run at generation; a first generation carrying prior-attempt filenames from the build record was regenerated neutralized before any firing, no unfired packet preserved as a firing).

Session form (A-C021-1/A-C021-2): per-lens dedicated scratch cwd under /tmp containing only a content copy of that lens's packet; fed route (one stream); returns `-o`-written to /tmp first, then content-copied create-once into this directory with sha256 verified identical. Read-scope receipt per lens filed beside its return at firing time.
