"use strict";
/* T10 attempt-2 own checks: effect mappings, normalization suite, consumed-effect
   census, displayed-state model, swap test. Stubbed DOM, real extracted script. */
const fs = require("fs"), vm = require("vm");
const ART = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T10-recursive-zoom-tile-dive/recreation.html";
const html = fs.readFileSync(ART, "utf8");
const script = html.split("<script>")[1].split("</script>")[0];
let PASS = 0, FAIL = 0; const failures = [];
function ok(cond, name){ if (cond) PASS++; else { FAIL++; failures.push(name); } }
function approx(a, b, tol){ return Math.abs(a - b) <= (tol || 0.01); }

function makeEl(id){
  const el = { id: id || "", className: "", children: [], style: {}, textContent: "",
    clientWidth: 0, offsetWidth: 0, _innerHTML: "",
    appendChild(c){ this.children.push(c); return c; } };
  Object.defineProperty(el, "innerHTML", { get(){ return this._innerHTML; },
    set(v){ this._innerHTML = v; if (v === "") this.children = []; } });
  return el;
}
function load(search){
  const byId = {};
  for (const id of ["stage","skyline","wallWrap","wall","pill","pillDot","pillText","statusPill","statusText","errBox"])
    byId[id] = makeEl(id);
  byId.stage.clientWidth = 360; byId.pill.offsetWidth = 146; byId.statusPill.offsetWidth = 152;
  const document = { getElementById: (id) => byId[id], createElement: () => makeEl("") };
  const window = { location: { search: search || "" }, addEventListener: () => {} };
  const sandbox = { window, document, performance: { now: () => 0 },
    requestAnimationFrame: () => 1, cancelAnimationFrame: () => {},
    URLSearchParams, console };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(script, sandbox);
  return { T: window.__T10, byId, window };
}

/* ---------- A. Effect mappings (defaults, frame-bound checkpoints) ---------- */
{
  const { T, byId } = load("");
  const E = T.EFF, cs = T.computeState;
  ok(E.checkpoints.pillAt === 850 && E.checkpoints.diveStart === 2000 && E.checkpoints.pillOutAt === 2200
     && E.checkpoints.statusAt === 2325 && E.checkpoints.diveEnd === 2450, "A checkpoints bound");
  ok(E.pillFadeMs === 149 && E.pillOutFadeMs === 100 && E.statusFadeMs === 125, "A fades span-derived 149/100/125 got " + [E.pillFadeMs, E.pillOutFadeMs, E.statusFadeMs]);
  ok(!("wallHold" in E.checkpoints) && !("wallHold" in T.CONFIG.checkpoints), "A wallHold removed");
  ok(approx(cs(0, E).scale, 1) && approx(cs(1999, E).scale, 1), "A scale 1 before dive");
  ok(approx(cs(2450, E).scale, 3.4), "A scale 3.4 at diveEnd");
  ok(approx(cs(2225, E).scale, 2.2), "A mid-dive scale 2.2");
  ok(cs(500, E).pill === 0, "A pill 0 at 500");
  ok(cs(1000, E).pill === 1, "A pill fully visible at 1000 (frame-measured)");
  ok(cs(1500, E).pill === 1, "A pill 1 at local 1500");
  ok(cs(2200, E).pill === 1 && cs(2300, E).pill === 0, "A pill exits during dive (specimen: present 2200, absent 2300)");
  ok(cs(2300, E).status === 0 && cs(2450, E).status === 1, "A status per frame binding");
  ok(cs(2225, E).originX === 50 && cs(2225, E).originY === 50, "A origin center target");
  ok(approx(cs(3000, E).scale, 1) && approx(cs(3000, E).t, 0), "A loop wrap at durationMs");
  const s = T.render(2450);
  ok(byId.wall.style.transform === "scale(3.4000)", "A render transform at diveEnd");
  ok(byId.statusPill.style.display === "flex", "A render status flex at 2450");
  T.render(0); ok(byId.statusPill.style.display === "none", "A render status hidden at 0");
}
/* ---------- B. Independent override effects ---------- */
{
  const { T } = load("");
  const base = JSON.parse(JSON.stringify(T.CONFIG));
  function norm(mut, keys){ const c = JSON.parse(JSON.stringify(base)); mut(c); return T.normalizeConfig(c, new Set(keys)); }
  const dOnly = norm(c => { c.checkpoints.diveStart = 1200; }, ["cp.diveStart"]);
  ok(dOnly.effective && T.computeState(1600, dOnly.effective).scale > T.computeState(1600, T.EFF).scale
     && T.computeState(1500, dOnly.effective).pill === T.computeState(1500, T.EFF).pill, "B diveStart moves scale only");
  const pOnly = norm(c => { c.checkpoints.pillAt = 300; }, ["cp.pillAt"]);
  ok(pOnly.effective && T.computeState(400, pOnly.effective).pill > 0
     && approx(T.computeState(2225, pOnly.effective).scale, 2.2), "B pillAt moves opacity only (claims-correction 6)");
  const sOnly = norm(c => { c.checkpoints.statusAt = 1500; c.statusFadeMs = 100; }, ["cp.statusAt", "statusFadeMs"]);
  ok(sOnly.effective && T.computeState(1550, sOnly.effective).status > 0
     && approx(T.computeState(2225, sOnly.effective).scale, 2.2), "B statusAt moves status only");
  const dur = norm(c => { c.durationMs = 800; }, ["durationMs"]);
  ok(dur.effective && dur.scaleFactor > 0.26 && dur.scaleFactor < 0.27, "B duration-only rescales (factor .2667)");
  ok(dur.effective.checkpoints.pillAt === 227 && dur.effective.checkpoints.diveEnd === 653, "B rescaled checkpoints 227/653");
  ok(approx(T.computeState(653, dur.effective).scale, 3.4) && dur.effective.checkpoints.diveEnd < 800, "B rescaled timeline completes before wrap");
  ok(T.computeState(400, dur.effective).pill === 1, "B rescaled pill completes (full at 267 of 800)");
}
/* ---------- C. Normalization rejection suite (atomic + recorded) ---------- */
{
  const { T } = load("");
  const base = JSON.parse(JSON.stringify(T.CONFIG));
  function rej(mut, keys, name){ const c = JSON.parse(JSON.stringify(base)); mut(c);
    const r = T.normalizeConfig(c, new Set(keys)); ok(!r.effective && r.rejected.length >= 1, "C reject: " + name); }
  rej(c => { c.durationMs = 800; c.checkpoints.diveEnd = 2450; }, ["durationMs", "cp.diveEnd"], "explicit diveEnd beyond rescaled duration");
  rej(c => { c.checkpoints.diveEnd = 1900; }, ["cp.diveEnd"], "diveEnd <= diveStart");
  rej(c => { c.checkpoints.pillOutAt = 900; c.pillFadeMs = 350; }, ["cp.pillOutAt", "pillFadeMs"], "pillOutAt before pill fully visible (explicit fade)");
  rej(c => { c.checkpoints.pillAt = 2900; }, ["cp.pillAt"], "pill fade beyond duration");
  rej(c => { c.targetIndex = 5; }, ["targetIndex"], "target out of range");
  rej(c => { c.tiles = c.tiles.slice(0, 2); }, [], "tiles != cols*rows");
  rej(c => { c.easing = "bounceExtreme"; }, ["easing"], "unknown easing");
  const { T: Tbad } = load("?easing=bounceExtreme");
  ok(Tbad.NORM.fellBack === true && Tbad.NORM.rejected.length >= 1 && Tbad.EFF.easing === "easeInOutCubic",
     "C URL-level incoherent override rejected atomically, baseline stands, rejection recorded");
  const { T: Tok } = load("?durationMs=800&diveEndMs=2450");
  ok(Tok.NORM.fellBack === true && Tok.EFF.durationMs === 3000, "C duration+explicit diveEnd rejected atomically (no partial application)");
}
/* ---------- D. Descriptor renderer: fourth kind + rejection ---------- */
{
  const { T, byId } = load("");
  const cfg4 = JSON.parse(JSON.stringify(T.EFF));
  cfg4.gridCols = 2; cfg4.gridRows = 2;
  cfg4.tiles = cfg4.tiles.slice(0, 3).concat([{ label: "Orb", bg: "#222222", accent: "#ffcc00", detail: "#00ccff",
    art: [{ left: 30, top: 30, width: 40, height: 40, borderRadius: 50, color: "accent" }] }]);
  cfg4.targetIndex = 3;
  const wallEl = byId.wall;
  const els = T.buildTiles(wallEl, cfg4);
  ok(els.length === 4 && els[3].children[0].children.length === 1, "D fourth kind renders entirely from CONFIG descriptors");
  let threw = "";
  try { T.buildTiles(byId.wall, Object.assign({}, cfg4, { tiles: [{ label: "X", bg: "#000", accent: "#111", detail: "#222", art: [{ left: 1, top: 1, width: 5, height: 5, color: "bogusRole" }] }] })); }
  catch (e){ threw = e.name; }
  ok(threw === "T10DescriptorError", "D unknown descriptor color role rejected by name");
  threw = "";
  try { T.buildTiles(byId.wall, Object.assign({}, cfg4, { tiles: [{ label: "X", bg: "#000", accent: "#111", detail: "#222", art: [{ left: 1, top: 1, height: 5, color: "accent" }] }] })); }
  catch (e){ threw = e.name; }
  ok(threw === "T10DescriptorError", "D malformed descriptor rejected by name");
}
console.log("PART1 PASS=" + PASS + " FAIL=" + FAIL + (failures.length ? " FAILURES: " + failures.join(" | ") : ""));
fs.writeFileSync("/tmp/t10-part1.json", JSON.stringify({ PASS, FAIL, failures }));

/* ---------- E. Consumed-effect census (A-C006-2): every CONFIG key mutated -> named effect observed ---------- */
const census = [];
function cen(key, cond, effect){ census.push([key, !!cond, effect]); ok(cond, "E census " + key); }
{
  const D = load(""); const DE = D.T.EFF;
  const mut = (fn) => { const c = JSON.parse(JSON.stringify(DE)); fn(c); return c; };
  cen("durationMs", load("?durationMs=3600").T.EFF.checkpoints.diveEnd === 2940, "rescale: diveEnd 2450->2940");
  cen("checkpoints.pillAt", load("?pillAtMs=300").T.computeState(400, load("?pillAtMs=300").T.EFF).pill > 0, "pill opacity onset moves");
  cen("checkpoints.diveStart", load("?diveStartMs=1200").T.EFF.checkpoints.diveStart === 1200, "dive onset moves");
  cen("checkpoints.pillOutAt", load("?pillOutAtMs=2600").T.computeState(2500, load("?pillOutAtMs=2600").T.EFF).pill > 0, "pill exit moves later");
  cen("checkpoints.statusAt", load("?statusAtMs=1500").T.computeState(2000, load("?statusAtMs=1500").T.EFF).status > 0, "status onset moves");
  cen("checkpoints.diveEnd", load("?diveEndMs=2800").T.computeState(2600, load("?diveEndMs=2800").T.EFF).scale < 3.4, "dive completion moves");
  cen("pillFadeMs", load("?pillFadeMs=600").T.computeState(1000, load("?pillFadeMs=600").T.EFF).pill < 1, "pill fade slope");
  cen("pillOutFadeMs", load("?pillOutFadeMs=300").T.computeState(2250, load("?pillOutFadeMs=300").T.EFF).pill > 0.5, "pill exit slope");
  cen("statusFadeMs", load("?statusFadeMs=50").T.computeState(2400, load("?statusFadeMs=50").T.EFF).status === 1, "status fade slope");
  cen("gridCols", load("?cols=3&rows=1").byId.wall.style.gridTemplateColumns === "repeat(3, 1fr)", "grid columns");
  cen("gridRows", load("?cols=3&rows=1").byId.wall.style.gridTemplateRows === "repeat(1, 1fr)", "grid rows");
  cen("targetIndex", load("?target=0").T.computeState(0, load("?target=0").T.EFF).originY < 20, "transform origin moves");
  cen("wallWidthPct", load("?wallWidthPct=40").byId.wall.style.width === "40%", "wall width");
  cen("tileGapPct", load("?tileGapPct=3").byId.wall.style.gap === "3%", "grid gap");
  cen("tileBorderPx", load("?tileBorderPx=6").byId.wall.children[0].style.borderWidth === "6px", "tile border width");
  cen("highlightBorderPx", load("?highlightBorderPx=9").byId.wall.children[1].style.borderWidth === "9px", "highlight border width");
  cen("zoomScale", approx(load("?zoom=2").T.computeState(2450, load("?zoom=2").T.EFF).scale, 2), "full-dive scale");
  cen("tileAspectW", load("?tileAspectW=4").byId.wall.style.aspectRatio === "4 / 30", "wall aspect W");
  cen("tileAspectH", load("?tileAspectH=5").byId.wall.style.aspectRatio === "16 / 15", "wall aspect H");
  cen("easing", load("?easing=linear").T.computeState(2112, load("?easing=linear").T.EFF).scale > 1.5, "dive easing curve");
  /* backdrop keys via buildBackdrop on mutated clones */
  const bd = (fn) => { const s1 = makeEl("s"), s2 = makeEl("k"); const r = D.T.buildBackdrop(mut(fn), s1, s2); return { r, s1, s2 }; };
  cen("gradientStopPct", bd(c => { c.gradientStopPct = 40; }).s1.style.background.indexOf("40%") > 0, "gradient stop position");
  cen("skyTop", bd(c => { c.skyTop = "#010203"; }).s1.style.background.indexOf("#010203") === 16, "gradient top color");
  cen("skyMid", bd(c => { c.skyMid = "#040506"; }).s1.style.background.indexOf("#040506") > 0, "gradient mid color");
  cen("skyLow", bd(c => { c.skyLow = "#070809"; }).s1.style.background.indexOf("#070809") > 0, "gradient low color");
  cen("cloudColor", bd(c => { c.cloudColor = "#0a0b0c"; }).r.clouds[0].style.background === "#0a0b0c", "cloud color");
  cen("cloudHeightRatio", bd(c => { c.cloudHeightRatio = 0.9; }).r.clouds[0].style.height !== D.T.buildBackdrop(DE, makeEl("s"), makeEl("k")).clouds[0].style.height, "cloud height");
  cen("cloudOpacity", bd(c => { c.cloudOpacity = 0.2; }).r.clouds[0].style.opacity === "0.2", "cloud opacity");
  cen("cloudSpecs", bd(c => { c.cloudSpecs = [{ x: 1, y: 2, w: 30 }]; }).r.clouds.length === 1, "cloud set");
  cen("zClouds", bd(c => { c.zClouds = 7; }).r.clouds[0].style.zIndex === "7", "cloud layer");
  cen("skylineHeightPct", bd(c => { c.skylineHeightPct = 60; }).s2.style.height === "60%", "skyline height");
  cen("zSkyline", bd(c => { c.zSkyline = 8; }).s2.style.zIndex === "8", "skyline layer");
  cen("skylineColor", bd(c => { c.skylineColor = "#0d0e0f"; }).r.buildings[0].style.background === "#0d0e0f", "skyline color");
  cen("skylineHeightsPct", bd(c => { c.skylineHeightsPct = [50, 60]; }).r.buildings.length === 2, "building set/heights");
  cen("skylineWindowsPerBldg", bd(c => { c.skylineWindowsPerBldg = 5; }).r.buildings[0].children.length === 5, "windows per building");
  cen("skylineWinLeftBasePct", bd(c => { c.skylineWinLeftBasePct = 30; }).r.buildings[0].children[0].style.left === "30%", "window left base");
  cen("skylineWinLeftStepPct", bd(c => { c.skylineWinLeftStepPct = 10; }).r.buildings[0].children[1].style.left === "28%", "window left step");
  cen("skylineWinTopBasePct", bd(c => { c.skylineWinTopBasePct = 30; }).r.buildings[0].children[0].style.top === "30%", "window top base");
  cen("skylineWinTopStepPct", bd(c => { c.skylineWinTopStepPct = 10; }).r.buildings[0].children[1].style.top === "24%", "window top step");
  cen("skylineWinWidthPct", bd(c => { c.skylineWinWidthPct = 20; }).r.buildings[0].children[0].style.width === "20%", "window width");
  cen("skylineWinHeightPct", bd(c => { c.skylineWinHeightPct = 12; }).r.buildings[0].children[0].style.height === "12%", "window height");
  cen("skylineWinOpacity", bd(c => { c.skylineWinOpacity = 0.3; }).r.buildings[0].children[0].style.opacity === "0.3", "window opacity");
  cen("windowColor", bd(c => { c.windowColor = "#101112"; }).r.buildings[0].children[0].style.background === "#101112", "window color");
  /* wall / pill / status keys */
  cen("zWall", load("?zWall=9").byId.wallWrap.style.zIndex === "9", "wall layer");
  cen("zPills", load("?zPills=9").byId.pill.style.zIndex === "9", "pill layer");
  cen("pillBg", load("?pillBg=%23131415").byId.pill.style.background === "#131415", "pill background");
  cen("pillTextColor", load("?pillTextColor=%23161718").byId.pill.style.color === "#161718", "pill text color");
  cen("pillDotColor", load("?pillDot=%23191a1b").byId.pillDot.style.background === "#191a1b", "pill dot color");
  cen("pillFontPx", load("?pillFontPx=22").byId.pill.style.fontSize === "22px", "pill font size");
  cen("pillPadYPx", load("?pillPadYPx=3").byId.pill.style.padding.indexOf("3px") === 0, "pill vertical padding");
  cen("pillPadXPx", load("?pillPadXPx=30").byId.pill.style.padding.indexOf("30px") > 0, "pill horizontal padding");
  cen("pillRadiusPx", load("?pillRadiusPx=6").byId.pill.style.borderRadius === "6px", "pill radius");
  cen("pillDotPx", load("?pillDotPx=20").byId.pillDot.style.width === "20px", "pill dot size");
  cen("pillGapPx", load("?pillGapPx=16").byId.pill.style.gap === "16px", "pill gap");
  cen("pillTopPct", load("?pillTopPct=20").byId.pill.style.top === "20%", "pill top anchor");
  { const L = load("?pillSlidePct=40"); L.T.render(925);
    cen("pillSlidePct", L.byId.pill.style.transform !== "translateX(8.76px)", "pill slide distance: " + L.byId.pill.style.transform); }
  { const L = load(""); L.byId.stage.clientWidth = 1916; L.T.render(1000); const a = L.byId.pill.style.left;
    const M = load("?pillOffsetXPct=20"); M.byId.stage.clientWidth = 1916; M.T.render(1000);
    cen("pillOffsetXPct", a !== M.byId.pill.style.left, "pill horizontal offset " + a + " vs " + M.byId.pill.style.left); }
  { const L = load("?pillEdgeMarginPct=10"); L.T.render(1000);
    cen("pillEdgeMarginPct", L.byId.pill.style.left === "178.0px", "pill edge margin clamp: " + L.byId.pill.style.left); }
  cen("statusBg", load("?statusBg=%23202122").byId.statusPill.style.background === "#202122", "status background");
  cen("statusTextColor", load("?statusTextColor=%23232425").byId.statusPill.style.color === "#232425", "status text color");
  cen("statusFontPx", load("?statusFontPx=18").byId.statusPill.style.fontSize === "18px", "status font size");
  cen("statusLeftPct", load("?statusLeftPct=10").byId.statusPill.style.left === "10%", "status left anchor");
  cen("statusTopPct", load("?statusTopPct=12").byId.statusPill.style.top === "12%", "status top anchor");
  cen("checkColor", load("?checkColor=%23262728").byId.statusPill.children[0].style.color === "#262728", "check color");
  cen("checkMark", load("?checkMark=X").byId.statusPill.children[0].textContent === "X", "check mark glyph");
  cen("pillText", load("?pill=HELLO").byId.pillText.textContent === "HELLO", "pill text");
  cen("statusText", load("?status=done").byId.statusText.textContent === "done ", "status text");
  cen("tileLabelFontPx", load("?tileLabelFontPx=14").byId.wall.children[0].children[1].style.fontSize === "14px", "label font size");
  cen("labelLeftPct", load("?labelLeftPct=10").byId.wall.children[0].children[1].style.left === "10%", "label left inset");
  cen("labelBottomPct", load("?labelBottomPct=12").byId.wall.children[0].children[1].style.bottom === "12%", "label bottom inset");
  cen("labelColor", load("?labelColor=%23292a2b").byId.wall.children[0].children[1].style.color === "#292a2b", "label color");
  cen("labelShadowColor", load("?labelShadowColor=%23303132").byId.wall.children[0].children[1].style.textShadow.indexOf("#303132") > 0, "label shadow color");
  cen("highlightColor", load("?highlight=%23ffd75e").byId.wall.children[1].style.borderColor === "#ffd75e", "target highlight border");
  cen("tileBorderColor", load("?tileBorderColor=%23333435").byId.wall.children[0].style.borderColor === "#333435", "tile border color");
  cen("robotFaceColor", load("?robotFaceColor=%23363738").byId.wall.children[0].children[0].children[1].style.background === "#363738", "robot face color");
  cen("laptopColor", load("?laptopColor=%23393a3b").byId.wall.children[1].children[0].children[5].style.background === "#393a3b", "laptop color");
  cen("orbColor", load("?orbColor=%233c3d3e").byId.wall.children[1].children[0].children[6].style.background === "#3c3d3e", "orb color");
  cen("plantColor", load("?plantColor=%233f4041").byId.wall.children[1].children[0].children[7].style.background === "#3f4041", "plant color");
  cen("wheelColor", load("?wheelColor=%23424344").byId.wall.children[2].children[0].children[2].style.background === "#424344", "wheel color");
  { const w = makeEl("w"); const c2 = mut(c => { c.tiles[0].label = "ZZ"; c.tiles[0].bg = "#454647"; c.tiles[0].art = [{ left: 1, top: 2, width: 3, height: 4, color: "#48494a" }]; });
    const els = D.T.buildTiles(w, c2);
    cen("tiles (label/bg/accent/detail/art)", els[0].style.background === "#454647" && els[0].children[1].textContent === "ZZ"
      && els[0].children[0].children[0].style.background === "#48494a", "tile content entirely from CONFIG data"); }
  ok(DE.zClouds < DE.zSkyline && DE.zSkyline < DE.zWall && DE.zWall < DE.zPills, "E z-order sky<clouds<skyline<wall<pills values");
}
console.log("CENSUS rows=" + census.length + " unconsumed=" + census.filter(r => !r[1]).length);

/* ---------- F. Displayed-state model (source-bound; PIXEL-UNVERIFIED) ---------- */
const model = {};
{
  const { T } = load(""); const E = T.EFF;
  const pillW = 146, pillH = E.pillFontPx * 1.2 + 2 * E.pillPadYPx;         // estimate: 12 glyphs @0.55em + dot + gap + pads
  const statusW = 143, statusH = E.statusFontPx * 1.2 + 2 * E.pillPadYPx;  // estimate: 15 glyphs @0.55em + check + pads
  for (const W of [360, 390, 1916]){
    const H = W * 9 / 16;
    const wallW = E.wallWidthPct / 100 * W;
    const wallH = wallW * (E.gridRows * E.tileAspectH) / (E.gridCols * E.tileAspectW);
    const gapPx = E.tileGapPct / 100 * wallH;
    const tileH = (wallH - (E.gridRows - 1) * gapPx) / E.gridRows;
    const tileW = wallW / E.gridCols;
    const tgtH = tileH * E.zoomScale, tgtW = tileW * E.zoomScale;
    const tgt = { x0: W / 2 - tgtW / 2, x1: W / 2 + tgtW / 2, y0: H / 2 - tgtH / 2, y1: H / 2 + tgtH / 2 };
    function pillRect(p){ // p = pill opacity-phase value 0..1 (slide priced in)
      const slide = (1 - p) * E.pillSlidePct / 100 * pillW;
      const desired = W * (50 + E.wallWidthPct / 2 + E.pillOffsetXPct) / 100;
      const left = Math.min(desired, Math.max(0, W - pillW - slide - W * E.pillEdgeMarginPct / 100));
      return { x0: left, x1: left + slide + pillW, y0: E.pillTopPct / 100 * H, y1: E.pillTopPct / 100 * H + pillH, slide };
    }
    const pEnt = pillRect(0), pMid = pillRect(0.5), pFull = pillRect(1);
    const st = { x0: E.statusLeftPct / 100 * W, x1: E.statusLeftPct / 100 * W + statusW, y0: E.statusTopPct / 100 * H, y1: E.statusTopPct / 100 * H + statusH };
    const ovX = Math.max(0, Math.min(st.x1, tgt.x1) - Math.max(st.x0, tgt.x0));
    const ovY = Math.max(0, Math.min(st.y1, tgt.y1) - Math.max(st.y0, tgt.y0));
    const ovArea = ovX * ovY, tgtArea = tgtW * tgtH;
    model[W] = { H, wallH, tileH, tgtPctH: tgtH / H * 100, tgt, pEnt, pMid, pFull, st,
      statusTargetOverlapFrac: ovArea / tgtArea, targetVisibleFrac: 1 - ovArea / tgtArea };
    ok(pEnt.x1 <= W && pMid.x1 <= W && pFull.x1 <= W, "F " + W + " pill transformed right edge in-frame at entrance/mid/full");
    ok(tgt.x0 >= 0 && tgt.x1 <= W && tgt.y0 >= 0 && tgt.y1 <= H, "F " + W + " target contained at full dive");
    ok(st.x1 <= W, "F " + W + " status pill in-frame");
    ok(model[W].targetVisibleFrac >= 0.5, "F " + W + " target visible fraction >= 50% at diveEnd hold");
  }
  ok(approx(model[360].tgtPctH, 95.9, 0.3), "F target displayed height ~95.9% (claims-correction 1): " + model[360].tgtPctH.toFixed(2));
  const labelW1 = 6 * E.tileLabelFontPx * 0.55, tileW360 = 0.26 * 360;
  ok(labelW1 < tileW360 && 2 * E.tileLabelFontPx * 1.2 < model[360].tileH, "F tile label contained at 1-line and 2-line states @360");
  console.log("MODEL " + JSON.stringify(model[360], (k, v) => typeof v === "number" ? Math.round(v * 100) / 100 : v));
}
/* ---------- G. Swap test (recorded swap + R1 swaps) ---------- */
{
  const S = load("?pill=FOUND%20YOU&status=keys%3A%20brought&diveStartMs=300&pillAtMs=100&skyTop=%23331144&highlight=%23ffd75e&tile1=MY%20DESK");
  ok(S.byId.pillText.textContent === "FOUND YOU", "G swap pill text");
  ok(S.byId.statusText.textContent === "keys: brought ", "G swap status text");
  ok(S.T.EFF.checkpoints.diveStart === 300 && S.T.EFF.checkpoints.pillAt === 100, "G swap checkpoints");
  ok(S.T.EFF.skyTop === "#331144" && S.T.EFF.highlightColor === "#ffd75e", "G swap palette");
  ok(S.byId.wall.children[1].children[1].textContent === "MY DESK", "G swap tile label");
  ok(S.byId.wall.children[1].style.borderColor === "#ffd75e", "G swap highlight rendered");
  ok(approx(S.T.computeState(1375, S.T.EFF).scale, 2.2), "G swap mid-dive scale from swapped checkpoints");
  ok(load("?tileAspectW=4").byId.wall.style.aspectRatio === "4 / 30", "G R1 aspect swap");
  ok(load("?easing=linear").T.EFF.easing === "linear", "G R1 easing swap");
  const E0 = load("?pill=");
  ok(E0.byId.pillText.textContent === "", "G empty-string pill override is a parsed applied value, not a truthiness no-op");
  const EC = load("?skyTop=");
  ok(EC.T.NORM.rejected.some(r => /empty string/.test(r.reason)), "G empty-string color override explicitly rejected + recorded");
}
console.log("TOTAL PASS=" + PASS + " FAIL=" + FAIL + (failures.length ? " FAILURES: " + failures.join(" | ") : ""));
