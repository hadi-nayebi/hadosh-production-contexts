Readability score: 28/100. Fails the 70-point lens floor.

The paper/ink contrast is strong, and showing one figure at a time prevents competition between modules. However, the layout cannot reliably read at phone size: `max-width:100vw` shrinks the stage without scaling its fixed typography, spacing or charts. At 390px wide, the stage is only 219px tall, while figures still begin at 118px. Wrapped titles consume most of the remaining space, and `overflow:hidden` clips the content below.

- **Masthead:** 42px text wraps, crowding the metadata and fixed figure boundary.
- **Titles:** 30px text wraps into multiple lines within the narrow content area.
- **Charts:** fixed 380–420px SVGs exceed the available width, especially beside cards or counters. Labels and data cannot remain visible together.
- **Waffle:** the grid fits horizontally, but its counter, detached “you” annotation and summary extend below the stage.
- **Compute:** the ten-unit stack pushes its counter downward; the adjacent chart compounds horizontal overflow.
- **Org chart:** four nodes crowd into one row. The badge has little remaining vertical space.
- **Giant counter:** its card follows a 420px graph, placing it outside the phone viewport.
- **Correction/stamp/notes:** wrapping and vertical stacking cause clipping; the enlarged stamp entrance adds temporary overflow.
- **Secondary text:** muted labels and fading notes need stronger visibility during their short reading windows.

Next attempt must carry a coherent phone layout: establish a minimum readable type size, reflow charts and cards within the viewport, reserve space for wrapped headings, and keep counters, annotations and notes inside the visible page. Verify all six figures at 360px and 390px widths, including their fullest text and largest animation states.

Assessment is source-based; browser verification was unavailable.

BODY-WRITE: Make phone-width containment and readable text explicit build gates; the current fixed-size contents inside a shrinking 16:9 stage cause pervasive clipping and require layout revision before consolidation.
SCORE: 28
