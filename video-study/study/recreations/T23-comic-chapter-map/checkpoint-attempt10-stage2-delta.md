# Checkpoint — attempt 10, stage 2 (delta form)

Predecessor: stage-1 source (stage-0 checkpoint copy + checkpoint-attempt10-stage1-delta.md), sha256 `1da3df6afdcebe3d93e3b28cb2a8de45fe081010e111f80e141ba5c1c91f3060`.
Stage-2 source: `recreation.html` sha256 `f2301bd648b92ad34ed2187959de58c5035c9d142f4629b0e25fed91f727114c`.
Reconstruction: apply the stage-1 delta, then the five edits below in order; the result hashes to the stage-2 hash.

## Edit 1 — new pure function splitTwoLinesNT (inserted before labelPolicy)
```
function splitTwoLinesNT(cfg, num, title) {
  const sepStr = cfg.labels.separator;
  const words = String(title).split(" ").filter(Boolean);
  if (!words.length) return [String(num) + sepStr + String(title)];
  if (words.length === 1) return [String(num) + sepStr.trimEnd(), words[0]];
  let best = null;
  for (let i = 1; i < words.length; i++) {
    const l1 = String(num) + sepStr + words.slice(0, i).join(" ");
    const l2 = words.slice(i).join(" ");
    const m = Math.max(l1.length, l2.length);
    if (!best || m < best.m) best = { m: m, lines: [l1, l2] };
  }
  return best.lines;
}
```
(preceded by a comment block: two-line split from separate number/title parts; splitTwoLines remains the assembled-text form.)

## Edit 2 — labelPolicy uses the parts form when parts are given
Old: `const lines = cfg.labels.maxLines >= 2 ? splitTwoLines(cfg, text) : [text];`
New: `const lines = cfg.labels.maxLines >= 2 ? (typeof titleOrAvail === "string" ? splitTwoLinesNT(cfg, numOrText, titleOrAvail) : splitTwoLines(cfg, text)) : [text];`

## Edit 3 — refinement countLines counts rendered spans first
Old: countLines body is Range-only (`range.selectNodeContents(tab); return Math.max(1, range.getClientRects().length)` inside try).
New: count block SPAN children of the tab first and return that count when > 0; the Range path remains only for span-less (plain text) content.

## Edit 4 — refinement two-line conversion builds spans from dataset parts
Old: `const lines = splitTwoLines(cfg, tab.dataset.text || tab.textContent);` then `tab.textContent = lines.join("\n");`
New: `const lines = splitTwoLinesNT(cfg, tab.dataset.number || "", tab.dataset.title || "");` then `tab.textContent = "";` and one block span appended per line.

## Edit 5 — module exports gain splitTwoLinesNT
Old: `splitTwoLines: splitTwoLines, estWidth: estWidth,`
New: `splitTwoLines: splitTwoLines, splitTwoLinesNT: splitTwoLinesNT, estWidth: estWidth,`
