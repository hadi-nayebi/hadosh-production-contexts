Readability clears the 70-point lens floor. At 360 px, the fully opaque marks have strong field contrast and the hold clears cleanly. The main deductions are for the pencil covering part of the checkbox outline and for the arrow reading initially as a short stroke among fully visible confetti.

- **Contrast.** Recomputed from the configured hex colors using sRGB relative luminance and the ratio `(Llighter + 0.05) / (Ldarker + 0.05)`. The results match the neutral packet to two decimals. These ratios apply at full opacity. The pencil’s entry fade lowers its effective contrast while the stage clips its upper-right portion. [Neutral packet, contrast pairs](/tmp/t100-lens-readability/neutral-packet-attempt2.md:35) · [Recreation, entry rendering](/tmp/t100-lens-readability/recreation.html:243)

  | Mark | Indigo `#4148c0` | Dark green `#173f35` |
  |---|---:|---:|
  | Pencil | 5.25:1 | 8.50:1 |
  | Cyan tick | 4.69:1 | 7.59:1 |
  | White checkbox | 7.21:1 | 11.67:1 |
  | Red-family arrow and confetti | 4.72:1 | 7.64:1 |
  | Green arrow and confetti | 4.75:1 | 7.70:1 |

- **Onset.** The checkbox is a 64 px square with a 6 px outline. The tick and arrow strokes are 7 px wide, with short visible lengths at onset. Each confetti rectangle approaches **13 × 3.9 px** as beat progress approaches zero from above, from `20 × 6 × 0.65`. At 16.67 ms into a beat, the scale formula gives **13.52 × 4.06 px**, consistent with the packet’s approximation for that sample. The first displayed dimensions depend on when the frame lands. Confetti appears at full opacity while the arrow is still a short rounded segment with its head hidden, so the confetti reads before the arrow does. [Neutral packet, onset estimate](/tmp/t100-lens-readability/neutral-packet-attempt2.md:36) · [Recreation, mark dimensions](/tmp/t100-lens-readability/recreation.html:35) · [Recreation, beat reveal](/tmp/t100-lens-readability/recreation.html:221)
- **Occlusion.** The tick’s control-point bounds plus its 3.5 px stroke radius fit inside the checkbox’s inner edges. The pencil draws above both. At the draw start `(160, 198)`, translating its polygon places part of its body across the top white rail, interrupting the outline while leaving the rest of the square legible. The packet’s reported 100% tick visibility at two draw samples comes from a polygon model. Each punctuation beat clears the pencil, box, tick, and other beat, preserving the separation seen in the reference observations. Within each beat, same-color confetti paints above the arrow, so any contact can merge their silhouettes. [Recreation, SVG paint order](/tmp/t100-lens-readability/recreation.html:15) · [Recreation, pencil and tick geometry](/tmp/t100-lens-readability/recreation.html:28) · [Recreation, punctuation visibility](/tmp/t100-lens-readability/recreation.html:263) · [Neutral packet, reference frames](/tmp/t100-lens-readability/neutral-packet-attempt2.md:5) · [Neutral packet, occlusion model](/tmp/t100-lens-readability/neutral-packet-attempt2.md:41)
- **Held state.** The hold leaves a uniform field. The hold branch hides the pencil, tick, and checkbox and sets both beat groups to zero opacity. There are no competing marks or visible remnants in the source-defined hold. [Recreation, beat opacity](/tmp/t100-lens-readability/recreation.html:221) · [Recreation, hold branch](/tmp/t100-lens-readability/recreation.html:277)

**Limits** — PIXEL-UNVERIFIED. The review used source geometry and color calculations. Actual first-frame sampling, antialiasing, and arrow–confetti contact across the rendered beats remain unverified. [Neutral packet, verification limit](/tmp/t100-lens-readability/neutral-packet-attempt2.md:42)

**Filing** — Record 87 as attempt 2’s readability score in Verify and in the artifact’s scores filing, and confirm that this lens clears the 70-point floor. The readability delta and overall attempt verdict require scores outside this record.

**Body-write: none (read-only run)**

SCORE: 87