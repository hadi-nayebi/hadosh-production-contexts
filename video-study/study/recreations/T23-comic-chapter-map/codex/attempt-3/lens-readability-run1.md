Readability does **not yet support lifting this machinery as-is**. The phone layout is plausible, but rendered text fit and 900 ms recognition remain unverified.

- **Longest tab at 360 px — promising, not proven.** Three columns yield 106.67 px panels and 98.67 px inner widths. The model splits the label into `07 · THE DAILY` / `STANDUP` at approximately 12.31 px. The shrink loops respect the 11 px floor. However, the width estimate omits actual font metrics and letter spacing; “Arial Narrow” is not bundled. DOM refinement may preserve the title, wrap it further, or drop it to `07`. **Cost:** the named chapter may disappear precisely where phone readability matters.

- **Tab height — an unresolved visibility risk.** A phone panel has roughly 60.8 px of inner height. Two label lines occupy about 35.8 px at the modelled size, including padding and bottom border—nearly 59% of the miniature. `pre-line` also permits additional wrapping, and the refinement does not check tab height against panel height. **Cost:** readable labels can obscure the scene identity; extra lines can be clipped by the panel.

- **Header — fitting is not legibility.** The default model selects 10 px, small for a dense masthead during a 900 ms flash. Actual fitting receives no DOM measurement. For longer headers, wrap mode retains the fixed header height and `overflow:hidden`, so enabling wrapping does not guarantee all lines remain visible. **Cost:** the masthead may become unreadable or incomplete.

- **Contrast and hierarchy — strong source-level choices.** Ink on yellow has approximately **12.7:1** contrast; ink on the dim tab approximately **8.5:1**. Ghost numbers at 16% opacity should remain subordinate. Filled art plus bright tabs versus empty cream panels plus muted tabs provides several progress cues. **Cost remaining:** their perceptual separation during the actual dwell has not been demonstrated.

- **Miniatures and dwell — recognition remains unverified.** Broad silhouettes and color blocks should survive reduction better than miniature inscriptions, fine graph edges, and small interface marks. With much of each image covered by its tab, scene recognition is uncertain. The renderer also fills the dive target during dwell, showing **5, 9, then 12** illustrated panels rather than the configured 4, 8, then 12. **Cost:** viewers may interpret the upcoming chapter as already completed.

**Pixel rendering was explicitly not exercised.** The 73 assertions establish model behavior, not visible title retention, header fit, miniature recognition, or glance readability. Require rendered 360 px checks of all three appearances and an actual 900 ms viewing pass before approving reuse unchanged.

SCORE: 69
BODY-WRITE: This verdict records readability as unapproved for unchanged reuse; the next attempt must verify phone-rendered title retention, tab occlusion, header visibility, and 900 ms progress recognition, and clarify the upcoming panel’s filled-state meaning.
