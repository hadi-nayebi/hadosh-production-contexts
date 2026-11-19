# AGENTS.md — goals/diy-building-and-real-learning/hidden_files/branches/stage3d/assets/locations/theater — theater

Local working memory for `goals/diy-building-and-real-learning/hidden_files/branches/stage3d/assets/locations/theater` (theater).

## What stands here

- `location.js` — the paper theater as DATA (assembly build, 2026-11-08): the verified books (props, poses, scenes, screenplays, productions, intake queue, verify records) plus the engine numbers the builders used to read as literals (ROOM, the homes, the seed state, the ball table, the light-key map). It is a classic script: an IIFE that registers its export in `window.STAGE_LOCATIONS['theater']`. stage.html holds no theater construction code; its assembler builds the room from this file's placement rows.

## Lessons that live here

- **The differ is the ground truth.** Every moved assignment in location.js stands byte-identical to the stage.html it was extracted from, proven by a read-only differ — a summary's or plan's paraphrase of the books' shape is NOT a source (the first transcription inherited a wrong shape for six object families and the differ caught all ten mismatches before any surgery).
- **A location file must be whole on its own.** It evaluates BEFORE the platform script, so it may not reference platform globals: shared schema strings (the visibility rule) ride as data inside this file; the checker compares them by value.
- **The seed shadows this file** at `assets/seed/assets/locations/theater/location.js` (the seed press, plan/make-seed.py, byte-identical) so the seed runs standalone from file://.

Read the AGENTS.md chain root→local before working here (tool: ~/workspace/tools/agents-chain.sh <dir>). Work here runs under named skills/standards — never improvised. Lessons learned here are written HERE, in this file. Information that proves true for sibling directories moves UP to the parent directory's AGENTS.md.

Governing skills/standards for work here:
- Branch law: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/branches/AGENTS.md (one-HTML form law, growth order, publish gate)
- Packaging skill: /home/hatch/workspace/custom-skills/thumbnail_title_package_craft/SKILL.md (thumbnail_title_package_craft)
- Global method: /home/hatch/AGENTS.md
- Nearest ancestor AGENTS.md in this tree (the chain above this directory)
- Immediate parent memory in force: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/branches/stage3d/assets/locations/AGENTS.md
