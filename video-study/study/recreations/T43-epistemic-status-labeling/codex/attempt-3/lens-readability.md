Readability score: 72/100, based on the supplied source and reported layout checks; rendered pixels remain unverified.

At 360–390 px width, most text scales to just 11.25–12.19 px. That includes the status pills, settled-items list, provenance, and diagram annotations. The title is comfortably larger, but the supporting words require close attention, especially inside the narrow split panes.

Containment looks plausible from the source and reported model. The provenance wraps within its pane, the list fits vertically, and the status pills remain separated from the divider. The schematic tag and axis label have only about 2.7–3 px of reported vertical clearance, leaving little breathing room. These are model findings, not confirmed browser bounds.

White text and dark lettering on bright status pills provide strong contrast. The settled-items panel has subtler separation from the purple background, though its white text should remain legible.

The complete split holds for 5.5 seconds, a reasonable reading window. Phase A is less comfortable: “SCHEMATIC POTENTIAL” has only 600 ms at full opacity before the crossfade begins. That is too brief for a small annotation competing with the title, diagram, and other labels.

BODY-WRITE: Make phone-width readability a build gate: enlarge supporting text, extend the fully visible schematic-label dwell, and verify actual browser text bounds and separation at 360 and 390 px before accepting containment.
SCORE: 72