#!/usr/bin/env python3
"""visual_plan.py — 2D infographic VISUAL PLAN generator (standing production step).

Renders PNG infographic pages from a piece's scene plan: for every scene,
WHAT IS SAID (the narration line), WHAT IS SEEN (the scene thumbnail + its
scored subject) and WHAT MOVES (the word events seated in the scene, with
their form and movement). Built so the owner can visually inspect the
planning and judge direction early, before / alongside the render.

Data sources (all data-driven; nothing about a specific film is hardcoded):
  --plan        scene-plan.json of the piece (scenes, word events, cadence
                rule, image style, word-layer enrichment, ending revision)
  --transcript  transcript markdown (## L<n> sections give the line texts);
                lines missing there are filled from the plan's
                ending_revision.lines when present
  --scenes-dir  folder of scene thumbnails (S01.png / S1.png ...)
  --render-py   optional renderer script of the piece's render family:
                its SCENES / EV / OVR literals and TOTAL give the BUILT
                switch anchors, event entry times and expressive forms.
                Auto-discovered (highest render_v*.py next to this script)
                when not passed; --no-render disables. Without it, the
                generator falls back to the plan's own windows and seats
                events by line (order of appearance).

Output: page-1.png ... page-N.png in --out-dir, ~--per-page scenes each,
phone-first width 1242 px, film palette (ink-navy / cream / gold).

Usage:
  python3 visual_plan.py                      # this film (defaults)
  python3 visual_plan.py --plan ../other/scene-plan.json \
      --transcript ../other/transcript.md --scenes-dir ../other/scenes \
      --render-py ../other/work/render_v2.py --out-dir ../other/work/visual-plan
"""
import argparse, ast, json, math, os, re, sys

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")  # the piece tree (soa01-scenes/)

# ---------------------------------------------------------------- palette
BG = (10, 15, 26)          # deep ink-navy
PANEL = (18, 27, 44)       # row panel
PANEL_EDGE = (46, 60, 88)
CREAM = (241, 231, 206)
GOLD = (217, 169, 78)
DIM = (168, 179, 199)
FAINT = (112, 124, 146)
INK = (18, 14, 5)          # text on gold

PAGE_W = 1242
MARGIN = 40
TEXT_W = PAGE_W - MARGIN * 2

FONT_DIR = "/usr/share/fonts/truetype/noto"


def font(name, size, fallback="NotoSansDisplay-Regular.ttf"):
    for cand in (name, fallback, "DejaVuSans.ttf"):
        p = os.path.join(FONT_DIR, cand)
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


F_TITLE = font("NotoSerifDisplay-Black.ttf", 54)
F_SUB = font("NotoSansDisplay-Regular.ttf", 30)
F_KICKER = font("NotoSansDisplay-Bold.ttf", 25)
F_META = font("NotoSansDisplay-Regular.ttf", 29)
F_CAD = font("NotoSansDisplay-Medium.ttf", 27)
F_SCENE_ID = font("NotoSerifDisplay-Bold.ttf", 42)
F_SCENE_META = font("NotoSansDisplay-Regular.ttf", 31)
F_LABEL = font("NotoSansDisplay-Bold.ttf", 23)
F_SAID = font("NotoSerifDisplay-Bold.ttf", 32)
F_SAID_DIM = font("NotoSansDisplay-Regular.ttf", 29)
F_SEEN = font("NotoSansDisplay-Regular.ttf", 28)
F_CHIP = font("NotoSansDisplay-Bold.ttf", 27)
F_CHIP_CALM = font("NotoSansDisplay-Regular.ttf", 27)
F_SWITCH = font("NotoSansDisplay-Bold.ttf", 24)
F_FOOT = font("NotoSansDisplay-Regular.ttf", 27)
F_FOOT_B = font("NotoSansDisplay-Bold.ttf", 27)
F_PAGEFOOT = font("NotoSansDisplay-Regular.ttf", 24)
F_ARROW = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 26)
F_ARROW_R = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 26)


def segs_width(draw, segs):
    return sum(draw.textlength(t, font=f) for t, f in segs)


def draw_segs(draw, x, y, segs, fill):
    for t, f in segs:
        draw.text((x, y), t, font=f, fill=fill)
        x += draw.textlength(t, font=f)
    return x

ZONE_HUMAN = {
    "Z-TL": "top left", "Z-TC": "top centre", "Z-TR": "top right",
    "Z-ML": "mid left", "Z-C": "centre", "Z-MR": "mid right",
    "Z-LL": "lower left", "Z-LC": "lower centre", "Z-LR": "lower right",
}
ZONE_CENTRES = {  # 1080x1920 frame centres, for explicit (x, y) seats
    "Z-TL": (300, 480), "Z-TC": (540, 480), "Z-TR": (780, 480),
    "Z-ML": (300, 800), "Z-C": (540, 800), "Z-MR": (780, 800),
    "Z-LL": (300, 1250), "Z-LC": (540, 1250), "Z-LR": (780, 1250),
}
CALM_MOVE = {  # (word, arrow glyph or None) — arrows drawn in DejaVu (has the glyphs)
    "RISE": ("rises", "↑"), "FALL": ("drops", "↓"), "SLIDE-R": ("slides", "→"),
    "SLIDE-L": ("slides", "←"), "GROW": ("grows", None), "STAMP": ("stamps", None),
}
FORM_TAG = {
    "STAMP-HARD": ("STAMP HARD", None), "SWELL": ("SWELL", None),
    "TRAVERSE": ("TRAVERSE", "→"), "SETTLE": ("IMAGE WORD · SETTLE", None),
}


def zone_human(zone):
    if isinstance(zone, str):
        return ZONE_HUMAN.get(zone, zone)
    if isinstance(zone, (list, tuple)) and len(zone) == 2:
        best, bd = "centre", 1e18
        for name, (cx, cy) in ZONE_CENTRES.items():
            d = (zone[0] - cx) ** 2 + (zone[1] - cy) ** 2
            if d < bd:
                best, bd = name, d
        return ZONE_HUMAN[best]
    return "centre"


def wrap(draw, text, fnt, width):
    """Greedy word wrap; returns list of lines."""
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=fnt) <= width or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def trunc_lines(draw, text, fnt, width, max_lines):
    lines = wrap(draw, text, fnt, width)
    if len(lines) <= max_lines:
        return lines
    lines = lines[:max_lines]
    last = lines[-1]
    while last and draw.textlength(last + " …", font=fnt) > width:
        last = last.rsplit(" ", 1)[0]
    lines[-1] = last + " …"
    return lines


# ---------------------------------------------------------------- sources
def parse_transcript(path):
    """{ 'L1': 'One point two billion ...', ... } from ## L<n> sections."""
    lines = {}
    if not path or not os.path.exists(path):
        return lines
    cur, buf = None, []
    def flush():
        # first occurrence wins: a transcript's full-text section precedes
        # any later marked-synthesis / diff sections re-using the L<n> header
        if cur and cur not in lines:
            kept = []
            for ln in buf:
                ln = ln.strip()
                if not ln:
                    if kept:
                        break
                    continue
                if ln.startswith(("*", "|", "#", "-")):
                    break
                kept.append(ln)
            if kept:
                lines[cur] = " ".join(kept)
    for raw in open(path, encoding="utf-8"):
        m = re.match(r"##\s+(L\d+)\b", raw)
        if m:
            flush()
            cur, buf = m.group(1), []
        elif cur:
            buf.append(raw)
    flush()
    return lines


def _literal_block(src, name, open_ch, close_ch):
    i = src.index(name)
    i = src.index(open_ch, i)
    depth, j = 0, i
    while j < len(src):
        if src[j] == open_ch:
            depth += 1
        elif src[j] == close_ch:
            depth -= 1
            if depth == 0:
                return ast.literal_eval(src[i:j + 1])
        j += 1
    raise ValueError(f"unbalanced block for {name}")


def parse_render(path):
    """Built truth from a renderer: TOTAL, SCENES, EV, OVR (or None)."""
    if not path or not os.path.exists(path):
        return None
    src = open(path, encoding="utf-8").read()
    out = {}
    m = re.search(r"^TOTAL\s*=\s*([\d.]+)", src, re.M)
    out["total"] = float(m.group(1)) if m else None
    try:
        out["scenes"] = _literal_block(src, "SCENES = ", "[", "]")
    except Exception:
        out["scenes"] = None
    try:
        out["events"] = _literal_block(src, "EV = ", "[", "]")
    except Exception:
        out["events"] = None
    try:
        out["ovr"] = _literal_block(src, "OVR = ", "{", "}")
    except Exception:
        out["ovr"] = {}
    return out


def sid_num(sid):
    m = re.search(r"(\d+)", str(sid))
    return int(m.group(1)) if m else 0


def scene_file(scenes_dir, sid):
    for cand in (f"{sid}.png", f"S{sid_num(sid):02d}.png", f"S{sid_num(sid)}.png"):
        p = os.path.join(scenes_dir, cand)
        if os.path.exists(p):
            return p
    return None


def build_model(plan, transcript_lines, render):
    """Merge plan + transcript + render into per-scene display rows."""
    scenes = sorted(plan["scenes"], key=lambda s: sid_num(s["id"]))
    # line texts: transcript first, ending-revision lines fill the rest
    texts = dict(transcript_lines)
    ending = plan.get("ending_revision") or {}
    for ln in ending.get("lines", []):
        texts.setdefault(ln["id"], ln["clean"])
    ending_line_ids = {ln["id"] for ln in ending.get("lines", [])}

    # expressive event ids (plan enrichment + ending revision + render OVR)
    expressive = set()
    enr = plan.get("word_layer_enrichment") or {}
    for e in enr.get("expressive_events", []):
        expressive.add(e["id"])
    for e in ending.get("word_events", []):
        if e.get("expressive"):
            expressive.add(e["id"])
    if render and render.get("ovr"):
        expressive |= set(render["ovr"].keys())
    expressive.add("E17")  # image-asset word (SETTLE) is expressive by form

    def is_expressive(eid):
        return eid in expressive or re.sub(r"[a-z]$", "", eid) in expressive

    # ---- scene windows
    starts = {}
    total = None
    if render and render.get("scenes"):
        rs = render["scenes"]
        for i, row in enumerate(rs):
            starts[sid_num(row[0])] = 0.0 if row[1] is None else float(row[1])
        total = render.get("total")
    else:
        for s in scenes:
            w = s.get("window") or s.get("window_v3clock")
            if isinstance(w, (list, tuple)) and len(w) == 2:
                starts[sid_num(s["id"])] = float(w[0])
                total = float(w[1]) if total is None else max(total, float(w[1]))
    ordered = sorted(starts.items())
    ends = {}
    for i, (num, st) in enumerate(ordered):
        ends[num] = ordered[i + 1][1] if i + 1 < len(ordered) else (total or st)
    if total is None:
        total = max(ends.values()) if ends else 0.0

    # ---- events with display text / form / seat time
    events = []
    if render and render.get("events"):
        for row in render["events"]:
            eid, segs, zone, direc, scale, anchor, exit_t, entry = row
            text = " ".join("".join(t for t, _ in segs).split())
            form = direc
            if render.get("ovr") and eid in render["ovr"] and "dir" in render["ovr"][eid]:
                form = render["ovr"][eid]["dir"]
            if eid == "E17":
                form = "SETTLE"
            events.append({"id": eid, "text": text, "zone": zone_human(zone),
                           "form": form, "t": float(anchor),
                           "expressive": is_expressive(eid)})
    else:
        # fallback: plan word events, seated by line order (no times)
        by_line = {}
        for s in scenes:
            by_line.setdefault(s["line"], []).append(sid_num(s["id"]))
        counters = {}
        for e in plan.get("word_events", []):
            if "text" not in e:
                continue  # decision records (e.g. a FORECLOSED no-event line)
            ln = e["line"]
            idx = counters.get(ln, 0)
            counters[ln] = idx + 1
            pool = by_line.get(ln, [0])
            events.append({"id": e["id"], "text": e["text"],
                           "zone": zone_human(e.get("zone")),
                           "form": e.get("direction", "RISE"), "t": None,
                           "scene_num": pool[min(idx, len(pool) - 1)],
                           "expressive": is_expressive(e["id"])})

    # ---- seat events into scenes by entry time
    for ev in events:
        if ev.get("t") is not None:
            seat = ordered[0][0]
            for num, st in ordered:
                if ev["t"] >= st - 1e-9:
                    seat = num
                else:
                    break
            ev["scene_num"] = seat

    rows = []
    seen_lines = set()
    for s in scenes:
        num = sid_num(s["id"])
        subject = s.get("subject", "")
        for k, v in s.items():
            if k.startswith("subject_clarification"):
                subject = v
        line = s.get("line", "")
        first_of_line = line not in seen_lines
        seen_lines.add(line)
        phrase = None
        m = re.search(r"['‘]([^'’]{1,40})['’]", s.get("anchor_in", ""))
        if m:
            phrase = m.group(1).strip()
        rows.append({
            "num": num, "id": f"S{num:02d}", "line": line,
            "start": starts.get(num), "end": ends.get(num),
            "dwell": (ends[num] - starts[num]) if num in starts and num in ends else None,
            "subject": subject, "said": texts.get(line, ""),
            "first_of_line": first_of_line, "phrase": phrase,
            "is_ending": line in ending_line_ids,
            "events": [e for e in events if e.get("scene_num") == num],
        })
    return rows, total, enr, ending


# ---------------------------------------------------------------- drawing
THUMB_W = 176
THUMB_H = round(THUMB_W * 16 / 9)  # 313
TEXT_X = MARGIN + THUMB_W + 28
TEXT_WD = PAGE_W - MARGIN - TEXT_X


def chip_list(draw, evs):
    """[(segments, expressive, width)] for one scene's word events."""
    chips = []
    for e in evs:
        if e["expressive"]:
            tag, arrow = FORM_TAG.get(e["form"], (e["form"], None))
            segs = [(f"{e['text']} — {tag}", F_CHIP)]
            if arrow:
                segs += [(" ", F_CHIP), (arrow, F_ARROW)]
            segs.append((f", {e['zone']}", F_CHIP))
        else:
            move, arrow = CALM_MOVE.get(e["form"], (e["form"].lower(), None))
            segs = [(f"{e['text']} — calm · {move}", F_CHIP_CALM)]
            if arrow:
                segs += [(" ", F_CHIP_CALM), (arrow, F_ARROW_R)]
            segs.append((f", {e['zone']}", F_CHIP_CALM))
        chips.append((segs, e["expressive"], segs_width(draw, segs) + 36))
    return chips


def chip_rows(chips, width):
    rows, cur, curw = [], [], 0
    for c in chips:
        add = c[2] + (12 if cur else 0)
        if cur and curw + add > width:
            rows.append(cur)
            cur, curw = [c], c[2]
        else:
            cur.append(c)
            curw += add
    if cur:
        rows.append(cur)
    return rows


def draw_chip(draw, x, y, segs, expressive):
    """segs: [(text, font)] or a plain string (drawn in the chip font)."""
    if isinstance(segs, str):
        segs = [(segs, F_CHIP if expressive else F_CHIP_CALM)]
    w = segs_width(draw, segs) + 36
    if expressive:
        draw.rounded_rectangle([x, y, x + w, y + 46], radius=12, fill=GOLD)
        draw_segs(draw, x + 18, y + 8, segs, INK)
    else:
        draw.rounded_rectangle([x, y, x + w, y + 46], radius=12,
                               fill=PANEL, outline=(120, 134, 160), width=2)
        draw_segs(draw, x + 18, y + 8, segs, CREAM)
    return w


def draw_switch_marker(draw, y, text):
    """Centred switch line with a drawn triangle (no glyph dependence)."""
    tw = draw.textlength(text, font=F_SWITCH)
    total = 16 + 12 + tw
    x = (PAGE_W - total) / 2
    cy = y + 16
    draw.polygon([(x, cy - 7), (x + 16, cy - 7), (x + 8, cy + 6)], fill=FAINT)
    draw.text((x + 28, y), text, font=F_SWITCH, fill=FAINT)


def anchor_phrase(scene):
    return scene.get("phrase")


def render_pages(plan, rows, total, enr, ending, scenes_dir, out_dir, per_page):
    os.makedirs(out_dir, exist_ok=True)
    n_pages = math.ceil(len(rows) / per_page)
    cad = plan.get("cadence_rule_C1", {})
    tgt = cad.get("target_dwell_s", [2.0, 3.5])
    piece = plan.get("piece", "piece")
    style = plan.get("image_style", {})
    probe = ImageDraw.Draw(Image.new("RGB", (10, 10)))
    LW = {lab: probe.textlength(lab, font=F_LABEL) + 16
          for lab in ("SAID", "SEEN", "MOVES")}

    # pre-measure rows (text starts beside its label, so wrap width shrinks)
    for r in rows:
        if r["first_of_line"]:
            r["_said"] = wrap(probe, r["said"], F_SAID, TEXT_WD - LW["SAID"])
        else:
            cont = f"{r['line']} continues"
            if r["phrase"]:
                cont += f" — at “{r['phrase']}”"
            r["_said"] = [cont]
        r["_seen"] = trunc_lines(probe, r["subject"], F_SEEN, TEXT_WD - LW["SEEN"], 3)
        r["_chips"] = chip_rows(chip_list(probe, r["events"]), TEXT_WD - LW["MOVES"])
        said_h = len(r["_said"]) * (44 if r["first_of_line"] else 40)
        seen_h = len(r["_seen"]) * 38
        chips_h = len(r["_chips"]) * 58 if r["_chips"] else 40
        content_h = 54 + said_h + 12 + seen_h + 14 + chips_h + 10
        r["_h"] = max(THUMB_H + 28, content_h)

    paths = []
    for p in range(n_pages):
        chunk = rows[p * per_page:(p + 1) * per_page]
        first_page = p == 0
        last_page = p == n_pages - 1
        header_h = 300 if first_page else 118
        footer_h = 210 if last_page else 64
        body_h = sum(r["_h"] for r in chunk) + 36 * (len(chunk) - 1)
        H = header_h + body_h + footer_h + 30
        img = Image.new("RGB", (PAGE_W, H), BG)
        d = ImageDraw.Draw(img)

        # ---------- header
        y = 34
        if first_page:
            d.text((MARGIN, y), "VISUAL PLAN · SAID · SEEN · MOVES", font=F_KICKER, fill=GOLD)
            y += 44
            title = piece.split("(")[0].strip().upper() + " — VISUAL PLAN"
            d.text((MARGIN, y), title, font=F_TITLE, fill=CREAM)
            y += 74
            sub = "(" + piece.split("(", 1)[1] if "(" in piece else piece
            d.text((MARGIN, y), f"{sub} · the whole film, scene by scene", font=F_SUB, fill=DIM)
            y += 52
            n_ev = sum(len(r["events"]) for r in rows)
            d.text((MARGIN, y),
                   f"Runtime {total:.1f}s · {len(rows)} scenes · {n_ev} word events · 1080 × 1920",
                   font=F_META, fill=CREAM)
            y += 46
            d.text((MARGIN, y),
                   f"Scenes switch on narration words — dwell target {tgt[0]:.1f}–{tgt[1]:.1f}s"
                   f" · floor {cad.get('floor_s', 1.4):.1f}s · ceiling {cad.get('ceiling_s', 5.0):.1f}s",
                   font=F_CAD, fill=GOLD)
            y += 58
            # legend
            lx = MARGIN
            d.text((lx, y + 8), "HOW TO READ:", font=F_LABEL, fill=FAINT)
            lx += d.textlength("HOW TO READ:", font=F_LABEL) + 18
            lx += draw_chip(d, lx, y, "WORD — expressive form", True) + 14
            lx += draw_chip(d, lx, y, "WORD — calm", False) + 14
            d.polygon([(lx + 2, y + 14), (lx + 20, y + 14), (lx + 11, y + 28)], fill=DIM)
            d.text((lx + 30, y + 8), "= scene switch (crossfade)", font=F_CHIP_CALM, fill=DIM)
            y += 72
        else:
            d.text((MARGIN, y), f"{piece.split('(')[0].strip().upper()} — VISUAL PLAN"
                                 f" · page {p + 1} of {n_pages}", font=F_SUB, fill=CREAM)
            y += 44
            d.text((MARGIN, y),
                   f"Scenes {chunk[0]['id']}–{chunk[-1]['id']} · gold chip = expressive word · outlined chip = calm word",
                   font=F_CAD, fill=DIM)
            y += 58
        d.line([MARGIN, y, PAGE_W - MARGIN, y], fill=PANEL_EDGE, width=2)
        y += 18

        # ---------- scene rows
        for i, r in enumerate(chunk):
            top = y
            d.rounded_rectangle([MARGIN - 12, top - 6, PAGE_W - MARGIN + 12, top + r["_h"] - 8],
                                radius=16, fill=PANEL)
            # thumbnail
            fp = scene_file(scenes_dir, r["id"])
            if fp:
                th = Image.open(fp).convert("RGB")
                th.thumbnail((THUMB_W * 2, THUMB_H * 2))
                th = th.crop((0, 0, THUMB_W, THUMB_H)) if th.size != (THUMB_W, THUMB_H) else th
                if th.size != (THUMB_W, THUMB_H):
                    th = th.resize((THUMB_W, THUMB_H))
                img.paste(th, (MARGIN, top + 6))
            d.rectangle([MARGIN, top + 6, MARGIN + THUMB_W, top + 6 + THUMB_H],
                        outline=GOLD, width=2)
            tx = TEXT_X
            ty = top + 2
            # header line
            d.text((tx, ty), r["id"], font=F_SCENE_ID, fill=GOLD)
            idw = d.textlength(r["id"], font=F_SCENE_ID)
            meta = ""
            if r["start"] is not None:
                meta = f"{r['start']:.1f}–{r['end']:.1f}s · dwell {r['dwell']:.1f}s · "
            meta += f"line {r['line']}"
            if r["is_ending"]:
                meta += " · NEW ENDING"
            d.text((tx + idw + 20, ty + 10), meta, font=F_SCENE_META, fill=CREAM)
            ty += 56
            # SAID
            d.text((tx, ty), "SAID", font=F_LABEL, fill=GOLD)
            lw = d.textlength("SAID", font=F_LABEL) + 16
            f_said = F_SAID if r["first_of_line"] else F_SAID_DIM
            col = CREAM if r["first_of_line"] else DIM
            lh = 44 if r["first_of_line"] else 40
            for j, ln in enumerate(r["_said"]):
                d.text((tx + lw, ty - 6 + j * lh), ln, font=f_said, fill=col)
            ty += len(r["_said"]) * lh + 12
            # SEEN
            d.text((tx, ty), "SEEN", font=F_LABEL, fill=GOLD)
            lw2 = d.textlength("SEEN", font=F_LABEL) + 16
            for j, ln in enumerate(r["_seen"]):
                d.text((tx + lw2, ty - 4 + j * 38), ln, font=F_SEEN, fill=DIM)
            ty += len(r["_seen"]) * 38 + 14
            # MOVES (word events)
            d.text((tx, ty), "MOVES", font=F_LABEL, fill=GOLD)
            lw3 = d.textlength("MOVES", font=F_LABEL) + 16
            if not r["_chips"]:
                d.text((tx + lw3, ty - 2), "— no word event in this scene —",
                       font=F_CHIP_CALM, fill=FAINT)
            else:
                cy = ty - 6
                for crow in r["_chips"]:
                    cx = tx + lw3
                    for (segs, expr, w) in crow:
                        draw_chip(d, cx, cy, segs, expr)
                        cx += w + 12
                    cy += 58
            y = top + r["_h"]
            # switch marker
            if i < len(chunk) - 1:
                nxt = chunk[i + 1]
                sw = "CROSSFADE 0.4s"
                if nxt.get("phrase"):
                    sw += f"  ·  switch on “{nxt['phrase']}”"
                draw_switch_marker(d, y + 3, sw)
                y += 36

        # ---------- footer
        y += 16
        d.line([MARGIN, y, PAGE_W - MARGIN, y], fill=PANEL_EDGE, width=2)
        y += 20
        if last_page:
            tally = enr.get("expressive_tally", "")
            calib = enr.get("calibration", "")
            dose = "WORD LAYER — "
            if tally:
                dose += f"{tally}. "
            if ending.get("expressive_tally_after"):
                dose += f"After the ending revision: {ending['expressive_tally_after']}. "
            dose += calib
            for ln in wrap(d, dose, F_FOOT, TEXT_W):
                d.text((MARGIN, y), ln, font=F_FOOT, fill=CREAM)
                y += 38
            y += 8
            style_line = ("STYLE — " + style.get("rendering", "") + " · "
                          + style.get("palette", "") + " · no text in images")
            for ln in wrap(d, style_line, F_FOOT, TEXT_W):
                d.text((MARGIN, y), ln, font=F_FOOT, fill=DIM)
                y += 38
            y += 14
        d.text((MARGIN, y), f"{piece.split('(')[0].strip().upper()} · VISUAL PLAN — page {p + 1} of {n_pages}",
               font=F_PAGEFOOT, fill=FAINT)
        right = "what is said · what is seen · what moves"
        d.text((PAGE_W - MARGIN - d.textlength(right, font=F_PAGEFOOT), y), right,
               font=F_PAGEFOOT, fill=FAINT)

        out = os.path.join(out_dir, f"page-{p + 1}.png")
        img.save(out)
        paths.append(out)
    return paths


def main():
    ap = argparse.ArgumentParser(description="Render a piece's 2D infographic visual plan.")
    ap.add_argument("--plan", default=os.path.join(ROOT, "scene-plan.json"))
    ap.add_argument("--transcript", default=os.path.join(ROOT, "transcript-v4.md"))
    ap.add_argument("--scenes-dir", default=os.path.join(ROOT, "scenes"))
    ap.add_argument("--render-py", default=None,
                    help="renderer script with SCENES/EV/OVR literals (default: auto-discover)")
    ap.add_argument("--no-render", action="store_true",
                    help="ignore any renderer; use plan windows + line seating")
    ap.add_argument("--out-dir", default=os.path.join(HERE, "visual-plan"))
    ap.add_argument("--per-page", type=int, default=12)
    args = ap.parse_args()

    plan = json.load(open(args.plan, encoding="utf-8"))
    transcript_lines = parse_transcript(args.transcript)

    render = None
    if not args.no_render:
        rp = args.render_py
        if rp is None:
            cands = sorted(f for f in os.listdir(HERE)
                           if re.fullmatch(r"render_v\d+\.py", f))
            if cands:
                rp = os.path.join(HERE, cands[-1])
        render = parse_render(rp)
        if render:
            print(f"built timings from: {rp}")

    rows, total, enr, ending = build_model(plan, transcript_lines, render)
    paths = render_pages(plan, rows, total, enr, ending,
                         args.scenes_dir, args.out_dir, args.per_page)
    for p in paths:
        im = Image.open(p)
        print(f"{p}  ({im.width}x{im.height})")
    print(f"scenes: {len(rows)} · total runtime: {total:.2f}s")


if __name__ == "__main__":
    main()
