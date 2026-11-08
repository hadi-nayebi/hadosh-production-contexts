# AGENTS.md — goals/diy-building-and-real-learning/hidden_files/branches/stage3d/assets/locations — locations

Local working memory for `goals/diy-building-and-real-learning/hidden_files/branches/stage3d/assets/locations` (locations).

## The registry pattern (assembly build, 2026-11-08)

Each subdirectory is ONE location: `<id>/location.js`, a classic script that registers the location's data (books + engine numbers + assembly table) in `window.STAGE_LOCATIONS['<id>']`. stage.html is location-agnostic — it assembles whichever location the drop-down selects from that location's data alone and disposes it whole on switch.

- **The script tag is the index.** A classic script cannot discover a folder on file://, so each location's arrival is: its folder + ONE `<script src>` tag in stage.html (the tag carries no location content; it is the folder's index entry). "Zero HTML edits" claims are scoped to construction code — the tag is the door.
- **A location file must be whole on its own**: it evaluates before the platform script, so it references no platform globals; shared schema strings ride as data inside the file.
- **First location in document order is the first-open seat** (the boot stands in it); EMPTY SPACE (the void) is not a location and has no folder.
- The seed press shadows every file under this tree into `assets/seed/assets/locations/` byte-identically, so the seed runs standalone.

Read the AGENTS.md chain root→local before working here (tool: ~/workspace/tools/agents-chain.sh <dir>). Work here runs under named skills/standards — never improvised. Lessons learned here are written HERE, in this file. Information that proves true for sibling directories moves UP to the parent directory's AGENTS.md.

Governing skills/standards for work here:
- Branch law: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/branches/AGENTS.md (one-HTML form law, growth order, publish gate)
- Packaging skill: /home/hatch/workspace/custom-skills/thumbnail_title_package_craft/SKILL.md (thumbnail_title_package_craft)
- Global method: /home/hatch/AGENTS.md
- Nearest ancestor AGENTS.md in this tree (the chain above this directory)
- Immediate parent memory in force: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/branches/stage3d/assets/AGENTS.md
