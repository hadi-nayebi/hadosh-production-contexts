#!/usr/bin/env python3
"""Generate the stage3d SEED file from stage.html.

The seed is the same file, carrying one injected flag block before the main
script — four lines, 294 bytes: a three-line generated comment naming the
source sha, plus the window.__STAGE_SEED__ script line. init() reads the
flag and boots into the SEED state — void and wireframe grid, no objects —
the empty stage projects fork from. The seed is GENERATED, never
hand-edited: regenerate it after every stage.html change so the fork can
never drift from the tool.

Since the three.js migration (owner's decision, 2026-11-06 17:39 EST) the
stage loads the vendored bundle at assets/three-vendor.js. The seed keeps
its byte equality — seed = stage.html + the block, nothing else changed —
so this press also writes a byte-identical shadow copy of the bundle at
assets/seed/assets/three-vendor.js: the path the seed's own script tag
resolves from its folder, which lets the seed run standalone from a bare
file:// open exactly as the stage does. If the two copies ever disagree,
the branch-root bundle governs and the press is re-run.
"""
import hashlib
import pathlib

HERE = pathlib.Path(__file__).resolve().parent          # assets/plan/
BRANCH = HERE.parent.parent                              # branch root
SRC = BRANCH / 'stage.html'
OUT_DIR = BRANCH / 'assets' / 'seed'
OUT = OUT_DIR / 'stage-seed.html'

src = SRC.read_text(encoding='utf-8')
sha = hashlib.sha256(src.encode('utf-8')).hexdigest()

marker = '<script data-reason="[BEST-PRACTICE] The world\'s single script'
assert marker in src, 'main script tag not found — stage.html shape changed'

flag = ('<!-- STAGE SEED - generated from stage.html (sha256 ' + sha[:16] + ') by assets/plan/make-seed.py.\n'
        '     Boots into the empty state: the void and the wireframe grid, no objects.\n'
        '     Do not edit by hand; regenerate after any stage.html change. -->\n'
        '<script>window.__STAGE_SEED__ = true;</script>\n')
out = src.replace(marker, flag + marker, 1)

OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT.write_text(out, encoding='utf-8')
print('seed written:', OUT, len(out.encode('utf-8')), 'bytes; source sha256', sha)

VENDOR = BRANCH / 'assets' / 'three-vendor.js'
SHADOW_DIR = OUT_DIR / 'assets'
SHADOW = SHADOW_DIR / 'three-vendor.js'
SHADOW_DIR.mkdir(parents=True, exist_ok=True)
vendor_bytes = VENDOR.read_bytes()
SHADOW.write_bytes(vendor_bytes)
print('vendor shadow written:', SHADOW, len(vendor_bytes), 'bytes; sha256',
      hashlib.sha256(vendor_bytes).hexdigest())

# Since the assembly build (2026-11-08) the stage also loads each location's
# data file at assets/locations/<id>/location.js. The seed carries the same
# script tags, resolved from its own folder — so the press shadows the whole
# locations tree byte-identically beside the bundle's shadow, and prunes any
# shadow whose source has gone, so the seed's registry can never drift from
# the stage's.
LOC_SRC = BRANCH / 'assets' / 'locations'
LOC_SHADOW = SHADOW_DIR / 'locations'
if LOC_SRC.is_dir():
    wanted = set()
    for f in sorted(LOC_SRC.rglob('*')):
        if f.is_file() and f.suffix == '.js':
            rel = f.relative_to(LOC_SRC)
            wanted.add(rel)
            dst = LOC_SHADOW / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            data = f.read_bytes()
            dst.write_bytes(data)
            print('location shadow written:', dst, len(data), 'bytes; sha256',
                  hashlib.sha256(data).hexdigest())
    if LOC_SHADOW.is_dir():
        for f in sorted(LOC_SHADOW.rglob('*')):
            if f.is_file() and f.relative_to(LOC_SHADOW) not in wanted:
                f.unlink()
                print('stale location shadow pruned:', f)
