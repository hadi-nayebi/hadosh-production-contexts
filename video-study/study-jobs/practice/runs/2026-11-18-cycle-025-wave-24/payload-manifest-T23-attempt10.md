# T23 attempt 10 — payload manifest (filed BEFORE firing)

Scored source: recreation.html sha256 `79f89c062a90ef3224b9caa124645a66a4cbaf1fc7f5210e00b9494e89ce352d`.
Build record: build-record-attempt10.md sha256 `c653182fd6191a33adddebdaf31d1f8e8a11293e89d41a952dd6916eeede247f`.

## Firing route (deviation, printed)
The fed route (payload = instruction + build record + full source in one stdin payload, preserved as one file per lens) is impractical in this environment: the measured write fault bars every exec-side write, so preserving a ~137 KB payload per lens could only be done by file-tool transcription, and the stdin field would have to carry the same ~137 KB again per firing. The sanctioned fallback — the read-access route — is therefore used for ALL five lenses uniformly (identical instrument per lens): each lens instruction is preserved create-once at `codex/attempt-10/instr-<lens>.txt` (file tool, below), and Codex is invoked with `--add-dir` on the artifact directory and instructed to read ONLY recreation.html + build-record-attempt10.md, verifying the source sha named in the instruction. Session scope per firing: cwd = fresh per-lens scratch dir under /tmp, `-s read-only`, `--skip-git-repo-check`, prompt via the exec stdin field only, no `-o` flag; returns captured from stdout, persisted via the file tool, read back and hash-filed.

## Per-lens allowlist (exact)
Each firing's complete input = (1) its preserved instruction file (standing header with consumer/decision/body-write + scale line "Scores are integers from 0 to 100" + neutral technique record + the lens assignment), and (2) read access to exactly two files: recreation.html + build-record-attempt10.md. NOTHING else: no scores.md, no RUN.md, no plan, no prior returns, no other artifact files are in the instruction, and the instruction names only the two files.

Instruction files (create-once, preserved before firing):
- instr-motion.txt sha256 9eaea3457d22851b09532a8738c7dc0a4ccd2e57c2f9b01876090d40ea400027
- instr-timing.txt sha256 1914f49b8bc5d6bdb6628f3d72b7151612b2b75b205abfd7eaf89e3a2fd15184
- instr-purity.txt sha256 369c94051e431c3eeae2a1f562a99efad140a3b2d7c6ecf4688b66019a16750f
- instr-reusability.txt sha256 e8fbfc828ec1078265e68d893ccb83496de9a4f90bcc7ef4fffeddb470af4497
- instr-readability.txt sha256 f5664285bb8791625ebc2425d9db46bd9b681db71ee604b4633f678a9fb08554

## Anchor + score-leak scan (over the actual assembled inputs, incl. filenames/headers)
Scanned: all five instr-*.txt + build-record-attempt10.md + recreation.html.
- Prior-attempt scores / averages / bar values (76, 78, 94, 69, 68 as scores; 77.0; 81.6; 85-as-target; 425): NO hits. (Numeric strings present are technique facts — segment brackets, ms allocations, easing fractions 0.4009/0.738, check counts — and the source sha.)
- Qualitative anchors ("verdict" as an outcome, PASS/FAIL verdicts on the artifact, "target score", "the bar"): the only "verdict" occurrences are the BODY-WRITE return-format line inside each instruction (the required closing-line spec, same form as attempt 9). No hit stops the firing.
- Score-blind payload check (finding 4): the build record contains no prior scores, no target, no per-lens commentary; its stage entries report construction facts and check counts only.
Scan result: CLEAN — firing may proceed.

## Firing outcomes (appended at filing)
- Uniform instrument note: motion firing 1 (payload exactly as preserved) died mechanically — exit 101, no verdict, capture truncated at the tool bound while Codex echoed file reads. It is preserved labelled at codex/attempt-10/lens-motion-FAILED-firing1.md and does not govern. From motion firing 2 onward, every firing carried one appended OPERATING NOTE (read in bounded chunks; do not echo file contents; reply with findings + closing lines only) — a reading-mechanics instruction that changes no content, criterion, or file access; it is part of the wave's uniform payload form for all five governing returns and is printed here as a deviation from the preserved instruction files (the preserved files stand as the create-once record of the instruction component).
- Motion firing 1's re-fire and the timing firing were captured through a 6,000-char stdout tail bound; both returns' findings and closing SCORE/BODY-WRITE lines are complete in the persisted files (timing's persisted return begins at its first finding; any one-line preamble was beyond the tail bound — recorded here, not reconstructed). Purity, reusability and readability were captured unbounded and complete (7,383 / 7,474 / 6,298 chars as persisted incl. formatting).
- Governing returns (all on source sha 79f89c…52d; each return confirms the artifact sha internally):
  - lens-motion.md sha256 1716d7f13a283b3f59db97b1f13666d5d77ad2c9aeb5a43372ed0c9e1a29027a — SCORE 62
  - lens-timing.md sha256 1a853739a65a597a252f6262f0f82a59a2ee6d888e15f396c2164d6a7a93e48a — SCORE 66
  - lens-purity.md sha256 2d70635217d75d19755eee8040c231c81972362aa904a10b4e522b9406e41353 — SCORE 77
  - lens-reusability.md sha256 22d0ab5e51d88bbd6c2c919de19cba5e3677308b0e16b276faa48efe256dd63 — SCORE 61
  - lens-readability.md sha256 871726490fa67ad245bdd4b34abf1137778592ab7686f623da42230c3dbc243f — SCORE 60
