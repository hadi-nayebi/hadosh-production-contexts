Phone readability is compromised by small type and probable bottom-edge clipping. At 360 px width, most labels and panel text scale to 11.25 px; at 390 px, they reach only 12.19 px. These sizes are difficult to read comfortably, especially with the panel’s wrapped scientific terms.

Two source-level containment risks remain unresolved by the reported model:

- “SCHEMATIC POTENTIAL” starts at 94.5% of stage height, leaving only 11.1 px below its top at 360 px width—less than its likely line-box height.
- The provenance pill’s available text width likely produces three lines. Its text plus vertical padding would then extend below the stage from its 78% top position. Pane overflow would clip it.

The bright status pills provide strong text contrast, and the midpoint division separates the two headings clearly. White panel text is also promising, though the panel itself has modest separation from the background. The fully populated split holds for only two seconds, which is short for reading both headings, the settled-items panel, and the provenance text at these sizes.

The packet supports intended horizontal containment, but does not establish rendered wrapping or vertical containment. Without pixel evidence, these remain source-based findings rather than confirmed visual defects.

BODY-WRITE: Require rendered phone-width checks of actual line wrapping and bottom-edge containment; enlarge supporting text, reposition bottom labels, and extend the fully populated hold before this build passes readability.
SCORE: 58
