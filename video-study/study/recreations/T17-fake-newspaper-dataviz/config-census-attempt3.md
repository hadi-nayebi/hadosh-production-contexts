# T17 attempt 3 — config-census leg output (guard-config-census v3.1, recreation guards)

Source: recreation.html sha256 b2012a7a9fd8eaef1b6187754f52d233699be0528357fbd29949819a7bf0fc91 · Census against this attempt's own CONFIG (240 leaf keys).

## Key -> application-site resolution

Every one of the 240 CONFIG leaves was resolved by mutation census: mutate the leaf, assert a consumed rendered/computed effect changes (state curves over the full window, fit reports at 360/960, geometry at both layouts, validation outcomes, stub-DOM scene traces at both layouts, post-draw traces). Threshold and boundary keys were mutated drastically (bounds to 1, minimum durations x50) so their effects cross the sampled checkpoints; two keys carry dedicated decision checks instead (layout.phoneProbeWidth: stack-floor validation flips between phone and desktop probe widths at 18 units; layout.phoneBreakpoint: phone mode flips at 500px width). Unconsumed leaves: 0.

## CSS-variable setter check

--warn, --muted, --card-tint, --font-serif, --font-sans, --font-hand, --metapad, --lh-mast, --lh-title, --fw-normal, --fw-black are all assigned in the scene assembly from the injected palette/fonts/layout values before any figure mounts; --mast/--title/--label/--padx/--padtop/--figtop are assigned in the rebuild step from the computed layout. No variable is referenced without a setter. Result: 0 hits.

## Literal scan outside CONFIG

Hex colours outside CONFIG: 0. Remaining numeric literals are classified per distinct value below (structural = loop bounds, indices, mathematical identities, box-model arithmetic from named CSS chrome, page-frame chrome). Content-carrying literals outside CONFIG: 0 (all figure text, labels, stamp text and symbols are CONFIG figure records).

| Literal | Count class | Classification | Example context |
|---|---|---|---|
| 0 | structural | index/identity | `*{box-sizing:border-box}html,body{margin:0}` |
| 1 | structural | index/identity | `<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width` |
| 2 | structural | count/identity (borders, rows, pairs) | `.meta{display:flex;flex-wrap:wrap;justify-content:space-between;padding:5px var(` |
| 3 | structural | border width chrome (px) | `.rule{border-top:3px solid currentColor;border-bottom:1px solid currentColor;hei` |
| 4 | structural | chrome offset/margin (px) | `.meta{display:flex;flex-wrap:wrap;justify-content:space-between;padding:5px var(` |
| 5 | structural | chrome offset (px) | `.rule{border-top:3px solid currentColor;border-bottom:1px solid currentColor;hei` |
| 6 | structural | chrome margin (px) | `.fig{position:absolute;left:0;right:0;top:var(--figtop,118px);bottom:0;padding:6` |
| 8 | structural | chrome margin/padding (px) | `<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width` |
| 9 | structural | array/loop bound context | `#stage{position:relative;width:960px;max-width:100vw;aspect-ratio:16/9;margin:0 ` |
| 10 | structural | chrome offset (px) | `.warn{font-family:var(--font-sans);color:var(--warn);border:1.5px dashed current` |
| 12 | structural | card padding chrome (px) | `.meta{display:flex;flex-wrap:wrap;justify-content:space-between;padding:5px var(` |
| 13 | structural | header rule zone (px) | `const headerH=padTop + mastPx*LH.mast + 13 + metaH + 4;` |
| 14 | structural | stamp padding context (px) | `.mast{text-align:center;padding:var(--padtop,14px) var(--metapad) 0}.mast h1{mar` |
| 16 | structural | button/control chrome (px) | `#stage{position:relative;width:960px;max-width:100vw;aspect-ratio:16/9;margin:0 ` |
| 24 | structural | box-model arithmetic: twice the 12px card padding | `const cardW=L.phone?cw:cw-chartW-c.layout.rowGapPx, cardH=textLines(fig.cardText` |
| 30 | structural | masthead fallback context | `.fig h2{margin:3px 0 8px;font-size:var(--title,30px);font-weight:var(--fw-normal` |
| 42 | structural | masthead CSS var fallback (px), superseded at runtime | `.mast{text-align:center;padding:var(--padtop,14px) var(--metapad) 0}.mast h1{mar` |
| 44 | structural | padx CSS var fallback (px), superseded at runtime | `.fig{position:absolute;left:0;right:0;top:var(--figtop,118px);bottom:0;padding:6` |
| 50 | structural | percentage context | `.dot{border-radius:50%;border:2px solid currentColor;display:inline-block}` |
| 100 | structural | 100vw page-frame chrome (%) | `#stage{position:relative;width:960px;max-width:100vw;aspect-ratio:16/9;margin:0 ` |
| 118 | structural | figtop CSS var fallback (px), superseded at runtime | `.fig{position:absolute;left:0;right:0;top:var(--figtop,118px);bottom:0;padding:6` |
| 180 | structural | degree-to-radian identity (PI/180) | `const rad=Math.abs(T.stampRotationDeg)*Math.PI/180, cos=Math.cos(rad), sin=Math.` |
| 960 | structural | page-frame stage width (px), outside the subject stage | `#stage{position:relative;width:960px;max-width:100vw;aspect-ratio:16/9;margin:0 ` |
| 1000 | structural | millisecond conversion identity | `const holdSec=Math.max(T.minHoldSec, fig.summaryText.length*T.readMsPerChar/1000` |
| 2000 | structural | millisecond/rounding context | `function svgEl(w,h){const s=document.createElementNS('http://www.w3.org/2000/svg` |
| 1.5 | structural | border width chrome (px) | `.card{border:1.5px solid currentColor;border-radius:8px;padding:12px;background:` |
| 0.05 | structural | animation-fraction guard floor | `function animFraction(fig,cfg){const c=cfg//CONFIG; return Math.max(0.05,(fig.du` |
| 0.001 | structural | comparison tolerance | `const budgetOk=!L.phone // stageH<=c.layout.phoneStageBudgetPx+0.001;` |
| 1. | structural | rounding context | `if(!Array.isArray(cfg.figures)//cfg.figures.length<1//cfg.figures.length>B.maxFi` |
| -90 | structural | donut rotation identity (quarter turn) | `const circ=dom.svgNode('circle',{cx:g.chartW*dn.cxFrac,cy:g.chartH/2,r:Math.min(` |

## HIT list

Empty — PASS for this leg (0 subject-shaping literals outside CONFIG, 0 unapplied keys, 0 unset CSS variables).
