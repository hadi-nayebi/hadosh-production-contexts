#!/usr/bin/env python3
"""Builds the stage3d Version One plan PDF (assets/plan/stage3d-version-one-plan.pdf).
Writes PDF bytes to stdout — the caller redirects to the file.
Images ride inside the PDF (the owner's order: the plan is a PDF so it can include images).
"""
import io
import sys

from PIL import Image as PILImage
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (BaseDocTemplate, Frame, PageTemplate, Paragraph,
                                Spacer, Image as RLImage, Table, TableStyle,
                                KeepTogether)

PAGE_W, PAGE_H = A4
MARGIN = 16 * mm
CONTENT_W = PAGE_W - 2 * MARGIN

INK = colors.HexColor('#241806')
PAPER = colors.HexColor('#FBF4E2')
ACCENT = colors.HexColor('#8F6A38')
FAINT = colors.HexColor('#6B543A')

styles = {
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=25, leading=30, textColor=INK, spaceAfter=4),
    'subtitle': ParagraphStyle('subtitle', fontName='Helvetica', fontSize=13.5, leading=18, textColor=FAINT, spaceAfter=10),
    'h1': ParagraphStyle('h1', fontName='Helvetica-Bold', fontSize=16.5, leading=20, textColor=INK, spaceBefore=14, spaceAfter=5),
    'h2': ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=13, leading=16, textColor=ACCENT, spaceBefore=10, spaceAfter=3),
    'p': ParagraphStyle('p', fontName='Helvetica', fontSize=11.5, leading=16, textColor=INK, spaceAfter=5),
    'li': ParagraphStyle('li', fontName='Helvetica', fontSize=11.5, leading=16, textColor=INK, leftIndent=10, spaceAfter=3),
    'cap': ParagraphStyle('cap', fontName='Helvetica-Oblique', fontSize=9.5, leading=12.5, textColor=FAINT, spaceBefore=2, spaceAfter=10),
    'cell': ParagraphStyle('cell', fontName='Helvetica', fontSize=10.5, leading=14, textColor=INK),
    'cellb': ParagraphStyle('cellb', fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=INK),
    'foot': ParagraphStyle('foot', fontName='Helvetica', fontSize=8.5, leading=11, textColor=FAINT),
}


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 8.5)
    canvas.setFillColor(FAINT)
    canvas.drawString(MARGIN, 11 * mm, 'STAGE3D - VERSION ONE PLAN - the empty world: navigate it, photograph it, film it')
    canvas.drawRightString(PAGE_W - MARGIN, 11 * mm, 'page %d' % doc.page)
    canvas.restoreState()


def img_flowable(path, caption, width_frac=1.0):
    """An image (png/jpg direct; webp via PIL) scaled to a fraction of the content width, plus its caption."""
    if path.lower().endswith('.webp'):
        pil = PILImage.open(path).convert('RGB')
        buf = io.BytesIO()
        pil.save(buf, format='PNG')
        buf.seek(0)
        iw, ih = pil.size
        src = buf
    else:
        src = path
        with PILImage.open(path) as pil:
            iw, ih = pil.size
    w = CONTENT_W * width_frac
    h = w * ih / iw
    return [RLImage(src, width=w, height=h), Paragraph(caption, styles['cap'])]


def table_flowable(rows, widths, header=True):
    data = []
    for r, row in enumerate(rows):
        data.append([Paragraph(c, styles['cellb'] if (header and r == 0) else styles['cell']) for c in row])
    t = Table(data, colWidths=widths, repeatRows=1 if header else 0)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFDFC0') if header else PAPER),
        ('BOX', (0, 0), (-1, -1), 0.6, ACCENT),
        ('INNERGRID', (0, 0), (-1, -1), 0.3, colors.HexColor('#D8C39A')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    return t


ANATOMY = '/home/hatch/workspace/your_files/media-generation-stage3d-anatomy-generated-0-115ba10a-56ec-4c37-9dbf-9ab66153c56f.webp'
SHOT_DIRECTOR = '/home/hatch/workspace/your_files/quadrillion-package/v1-fixed-director.png'

story = []
A = story.append

# ---------------------------------------------------------------- title
A(Paragraph('STAGE3D - VERSION ONE', styles['title']))
A(Paragraph('The empty world: navigate it, photograph it, film it.', styles['subtitle']))
A(Paragraph(
    'This is the plan for the first version of our 3D world. The video we are making will slowly be '
    'developed inside this world later. Version One builds only the basics, and builds them as well as '
    'they can be built: the most perfect UX and UI for moving through an empty world, moving a camera '
    'inside it, and taking pictures and videos with that camera.', styles['p']))
A(Paragraph(
    'Everything in this plan comes from the owner\'s brief. Where the build already matches the plan, '
    'the plan says so. Where it does not, the plan says that too, plainly, in section 8.', styles['p']))

# ---------------------------------------------------------------- 1 the world
A(Paragraph('1 - THE WORLD (EMPTY)', styles['h1']))
A(Paragraph(
    'The scene contains exactly four things. Nothing else is in the world. Anything more is a later '
    'version and a new decision.', styles['p']))
A(Paragraph('1. <b>THE VOID</b> - a vast, dark, relaxing emptiness. No walls, no backdrop plane, '
            'no stage, no curtains. The void is the background itself.', styles['li']))
A(Paragraph('2. <b>THE GROUND</b> - infinite. A paper plane with the faint editor\'s grid; its colour '
            'and grid fade into the void long before its edge, over a second flat plane in the void\'s '
            'own colour beneath it, so the ground never ends in any view.', styles['li']))
A(Paragraph('3. <b>ONE DIM LIGHT</b> - a single lamp standing on the ground: thin stem, a soft glow, '
            'its warm pool printed on the ground beneath it. Placed once by the designer. The owner '
            'never adjusts it.', styles['li']))
A(Paragraph('4. <b>ONE CAMERA</b> - a real object standing on the ground, not a viewpoint: a dark '
            'paper camera on a plinth, with a lens barrel and blue glass, a viewfinder and a dial. '
            'It stands at base level - the whole setup is a ground-level setup. It has a position, '
            'an aim and a lens - section 4 is its full movement profile.', styles['li']))
for f in img_flowable(ANATOMY,
                      'The anatomy of the setup, as a generated artistic image: the void, the infinite ground, '
                      'the one light, the camera, and the two eyes (the director and the camera) that look at it.'):
    A(f)

# ---------------------------------------------------------------- 2 the two views
A(Paragraph('2 - THE TWO VIEWS', styles['h1']))
A(Paragraph('One world, two eyes. Both views look at the same world and the same camera - they '
            'can never disagree about where the camera stands or what it sees.', styles['p']))
A(Paragraph('<b>DIRECTOR VIEW</b> - the working view of the app. You look at the world from outside: '
            'you see the ground, the light, and the camera standing in it, with the camera\'s beam and '
            'the frame of its shot drawn on the ground.', styles['li']))
A(Paragraph('<b>CAMERA VIEW</b> - the view through the camera\'s own eye: exactly what the camera '
            'is pointing at. This is the shot. What is captured - photo or video - is always this view.', styles['li']))
A(Paragraph('<b>PICTURE-IN-PICTURE</b> - the other eye, live, in the top-left corner. While you direct, '
            'the corner shows the camera\'s view, so you can aim the camera by what you see in the '
            'corner. While you look through the camera, the corner shows the director view, so you can '
            'keep working the scene. A small tag on the corner always names which eye it is.', styles['li']))
for f in img_flowable(SHOT_DIRECTOR,
                      'The build as it stands (real screenshot): director view - the camera on the ground with its '
                      'frustum drawn on the ground from its eye, and the corner showing the camera\'s own view, live.'):
    A(f)

# ---------------------------------------------------------------- 3 navigation
A(Paragraph('3 - NAVIGATING (THE DIRECTOR)', styles['h1']))
A(Paragraph('The director view is yours to move, and it stays where you leave it - nothing springs '
            'back. Touch first: this is a phone tool, and every gesture below is a finger gesture '
            'before it is a mouse one. The set is the complete standard navigation set for 3D '
            'environments (researched and documented in assets/plan/navigation-research.md): orbit, '
            'pitch, roll, pan, dolly, focus - plus a first-person set inside the camera view. The '
            'yaw has no edge at all; pitch stops at 89 degrees, just short of the pole, so the view '
            'never flips.', styles['p']))
A(Paragraph('<b>Orbit</b> - drag to look around: a continuous full circle, no limit - turn all the '
            'way around and look back at where you stood.', styles['li']))
A(Paragraph('<b>Pitch</b> - tilt up and down within -89 to +89 degrees: look from directly above '
            'the scene or from the ground up.', styles['li']))
A(Paragraph('<b>Roll</b> - twist two fingers (rotate them around their midpoint) to roll the view, '
            'up to upside down.', styles['li']))
A(Paragraph('<b>Zoom</b> - pinch or scroll to dolly in and out. The range makes the world appear '
            'about twenty-one times larger at the near end (dolly -6000 to +1000; the cap is the '
            'perspective ceiling - past it the viewed centre would cross the eye and invert).', styles['li']))
A(Paragraph('<b>Pan</b> - two-finger drag (or shift-drag) slides the view widely (+/-1600 by '
            '+/-1000).', styles['li']))
A(Paragraph('<b>Focus</b> - double-tap the camera object to visit it: the director flies to it '
            'and centres it, close. Double-tap empty space flies home.', styles['li']))
A(Paragraph('<b>Inside the camera view</b> - the shot is itself a place to navigate: drag looks '
            'in place (the full circle, tilt -70 to +70), pinch or scroll flies forward and back '
            'along the look, a two-finger drag slides sideways, a twist rolls the shot, and a '
            'double-tap levels the roll and re-aims at the centre.', styles['li']))
A(Paragraph('<b>The corner view</b> - a tap swaps it with the main view; dragging inside it works '
            'the other eye through the same ranges as the main view.', styles['li']))
A(Paragraph('<b>Motion feel</b> - every number glides toward its target with a time-based ease; while '
            'a finger is down the glide tightens so dragging feels direct. Motion is identical at any '
            'frame rate.', styles['li']))
A(Paragraph('<b>Settings (the gear)</b> - look speed, zoom speed, pan speed and smoothing, in glass, '
            'remembered on the device, with reset view and defaults. All controls are glass: small, '
            'translucent, blurred, thin-edged.', styles['li']))

# ---------------------------------------------------------------- 4 camera movement
A(Paragraph('4 - THE CAMERA\'S MOVEMENT PROFILE', styles['h1']))
A(Paragraph(
    'The camera is an object with its own movement. Most of the time the designer moves it, by '
    'instruction and by numbers. The owner can always move it by hand. Both write the same state, '
    'so the object and its view can never disagree. Every number has a target and the camera '
    'glides toward it - it never teleports. That glide is what makes a programmed move, and '
    'filming while moving, possible.', styles['p']))
rows = [
    ['Number', 'What it is', 'Range', 'Moved by hand'],
    ['x, z', 'Where the camera stands on the ground', 'x/z -3000..3000',
     'Drag the camera object (director view); fly and strafe (camera view)'],
    ['heading', 'The direction it points (compass angle)', 'the full circle',
     'Drag inside the corner view, or drag in the camera view'],
    ['tilt', 'How far it looks down or up', '-70..+70 degrees', 'Drag inside the corner view, or drag in the camera view'],
    ['roll', 'How far the shot is rolled (horizon tilt)', '-180..+180 degrees', 'Twist two fingers in either view'],
    ['focal', 'Its lens - how wide or tight the shot is', '240..1700', 'Scroll or pinch over the corner view'],
]
A(table_flowable(rows, [62, 168, 118, CONTENT_W - 62 - 168 - 118]))
A(Spacer(1, 4))
A(Paragraph('<b>AIM AT CENTRE</b> - one tap re-aims the camera at the ground\'s centre from wherever '
            'it stands.', styles['li']))
A(Paragraph('<b>Programmed moves</b> - because every number has a target and the screen glides to it, '
            'a move can be set up as numbers and played: the camera can glide across the ground, '
            'turn, tilt and zoom its lens as one smooth motion. This is how videos are shot in this '
            'world (section 5), and how the designer will place the camera for scenes later.', styles['li']))
A(Paragraph('<b>The shot\'s frame on the ground</b> - in director view, the camera\'s beam and the '
            'rectangle of its shot can be drawn on the ground from its real eye, aim and lens - the '
            'director\'s aids. They are off by default (a settings toggle brings them back): the '
            'owner\'s phone pass found them as extra stuff in a scene that should read as void, '
            'ground, light and camera only. Looking level or up, no frame lands on the ground and '
            'none is drawn.', styles['li']))

# ---------------------------------------------------------------- 5 capture
A(Paragraph('5 - TAKING PICTURES AND VIDEOS (CAPTURE)', styles['h1']))
A(Paragraph(
    'This is the heart of Version One. The camera takes pictures and records videos of the empty '
    'world, from wherever it is pointing.', styles['p']))
A(Paragraph('THE QUALITY LAW', styles['h2']))
A(Paragraph(
    'What the camera captures is <b>the same view you see through it, at the same angle, at full '
    'quality</b>. The capture is rendered from the camera\'s eye itself, at the full resolution of '
    'the camera view as you see it full-screen. It is never the little corner preview, and never a '
    'screenshot of the phone screen - the quality does not drop, and the angle does not shift, '
    'between what you see and what you get. The corner is a preview only: switching to camera view '
    'shows the exact framing a capture will take.', styles['p']))
A(Paragraph('THE CONTROLS', styles['h2']))
A(Paragraph(
    'Two glass buttons are always on screen - <b>PHOTO</b> and <b>RECORD</b> - beside the view '
    'controls. They always act on the camera\'s eye, whichever view you are in: you can shoot '
    'from the director view while watching the corner, or from the camera view itself. Recording '
    'shows a clear REC marker on the camera view and in the corner for as long as it lasts.', styles['p']))
A(Paragraph('PHOTO', styles['h2']))
A(Paragraph('<b>Shutter</b> - PHOTO takes the picture: one still image of the camera\'s eye view, '
            'saved as a full-resolution PNG file.', styles['li']))
A(Paragraph('<b>What you see is what you get</b> - the photograph\'s framing is the camera view\'s '
            'framing at that instant: same centre, same horizon, same edges.', styles['li']))
A(Paragraph('VIDEO', styles['h2']))
A(Paragraph('<b>Record</b> - RECORD starts and stops a video of the camera\'s eye view. '
            'The camera can still move while recording - by hand, or by a programmed move playing - '
            'and the video follows its eye the whole time.', styles['li']))
A(Paragraph('<b>The recording is the eye view at full quality</b>, at the screen\'s own frame '
            'rate, saved as a video file (WebM, or MP4 where the device offers it).', styles['li']))
A(Paragraph('HOW IT WORKS (THE MECHANISM THE BUILD FOLLOWS)', styles['h2']))
A(Paragraph(
    'The world is rendered a third time, off-screen, through the camera\'s eye at capture '
    'resolution. A photo is one still render from that pass. A video is that pass recorded as a '
    'stream for as long as recording lasts.', styles['p']))
A(Paragraph(
    'The corner preview is only a preview - it is never the source of a capture. Captures download '
    'to the device with timestamped names (stage3d-photo-...png, stage3d-video-...webm); the app '
    'keeps nothing hidden.', styles['p']))

# ---------------------------------------------------------------- 6 scope
A(Paragraph('6 - WHAT VERSION ONE IS NOT', styles['h1']))
A(Paragraph('No objects, props, words or scenes in the world. No second camera. No owner controls '
            'for the light. No editing, no timeline, no publishing. Those belong to later versions, '
            'built inside this world on top of these basics.', styles['p']))

# ---------------------------------------------------------------- 7 acceptance
A(Paragraph('7 - ACCEPTANCE (HOW WE KNOW IT IS DONE)', styles['h1']))
checks = [
    ['Navigation', 'Drag, pinch, pan and double-tap driven live; every range reached and held; no spring-back.', 'DELIVERED - DRIVE WITH OWNER'],
    ['Camera by hand', 'Camera dragged across the ground; aim changed from the corner; the ground frame follows.', 'DELIVERED - DRIVE WITH OWNER'],
    ['Picture-in-picture', 'Corner always shows the other eye, live, correctly tagged, in both main views.', 'VERIFIED (screenshots)'],
    ['Photo truth', 'A photo taken at a known camera state overlays the camera view at that state: same framing, same horizon.', 'NOT YET BUILT'],
    ['Video truth', 'A recorded move plays back as the eye view of that move - same angles, full quality, no dropped resolution.', 'NOT YET BUILT'],
    ['Programmed move', 'A move set as numbers plays as one smooth glide, and a video recorded during it shows the glide, frame-continuous - never a jump.', 'NOT YET BUILT'],
    ['The empty world', 'Scene census: void, ground, light, camera - nothing else renders.', 'VERIFIED (screenshots)'],
    ['Reviewer gate', 'Three independent reviewer seats score the build; every dimension in the acceptable range before delivery.', 'PASSED - 9s / 8-7-7 / 8-9-8'],
]
A(table_flowable([['Check', 'What passes', 'State']] + checks, [92, CONTENT_W - 92 - 108, 108]))

# ---------------------------------------------------------------- 8 build state
A(Paragraph('8 - BUILD STATE (HONEST, 2026-11-05)', styles['h1']))
A(Paragraph('<b>Built</b> - the navigation core: stage.html holds the void, the infinite ground, the '
            'dim light, the camera object with its full movement profile, the director view, the '
            'camera view, the live corner, the glass settings. Its blocking render defect (a malformed '
            'stylesheet rule) was found at the root and fixed, and the fixed build is verified in the '
            'screenshot in section 2. Two full reviewer rounds and a micro-verification then closed '
            'on it (controls 9/9/9/9/9, visual 8/7/7, law 8/9/8), and the build was DELIVERED to the '
            'owner on 2026-11-05 at 23:50 EST as an owner-asked specimen - his words: send me the '
            'file now, I will be the pixel pass on my phone. Delivery stamps stand VALID in the '
            'gate ledger (stage G2-20261105-234739-137263-211d2198).', styles['li']))
A(Paragraph('<b>Not yet built</b> - capture: the photo shutter and the video record of section 5. '
            'This is the next build step under this plan.', styles['li']))
A(Paragraph('<b>Pending verification</b> - the live gesture drive and the camera-at-extreme-corners '
            'screenshots. The owner\'s own phone pass runs on the delivered file now; the deliverer\'s '
            'test browser in the current environment fails to launch (measured: it '
            'stops on start, every attempt, since about 23:00 on 2026-11-05), so the deliverer\'s '
            'drive runs as soon as it is back. Everything that could be checked without it has been.', styles['li']))

# ---------------------------------------------------------------- 9 plan rules
A(Paragraph('9 - THIS PLAN\'S OWN RULES', styles['h1']))
A(Paragraph('This plan lives in the branch\'s assets folder, in its own plan folder: '
            'assets/plan/. Its file is stage3d-version-one-plan.pdf - a PDF so its images travel '
            'inside it. The PDF is the plan; it is printed from build-plan.py in the same folder, '
            'which is only its press - if the two ever disagree, the PDF the owner read is the plan '
            'of record, and the press is fixed to match.', styles['li']))
A(Paragraph('<b>Splitting</b> - when the plan grows too big for one comfortable file, it splits into '
            'numbered parts in the same folder (stage3d-plan-02-&lt;topic&gt;.pdf, -03-, and so on), '
            'and this first file becomes the index: it keeps the one-plan summary and says what each '
            'part holds.', styles['li']))
A(Paragraph('<b>Hydration</b> - the plan is re-read against the owner\'s brief again and again, and '
            'every pass that changes it is recorded in the log below. A pass that finds nothing still '
            'says so. The plan is done hydrating when a full pass finds no mismatch left. When the '
            'plan splits, the hydration log travels with the first file.', styles['li']))

# ---------------------------------------------------------------- hydration log
HYDRATION_LOG = [
    ['1', 'First full draft, from the owner\'s two briefs (2026-11-05 22:10 + 23:17 EST): the empty '
          'world, the two views + corner, navigation, the camera\'s movement profile, capture (photo + '
          'video, same angle, full quality), the scope fence, acceptance, build state, and this plan\'s '
          'own storage + splitting rules.'],
    ['2', 'Capture re-read against the 23:17 brief word by word. Found and fixed: no recording '
          'indicator was specified (a REC marker is now required on the camera view and the corner); '
          'the video\'s frame rate was unspecified (now: the screen\'s own frame rate); "full quality" '
          'was loose (now pinned: the full resolution of the camera view as seen full-screen; the '
          'corner is a preview only, and camera view shows the exact framing a capture takes).'],
    ['3', 'The movement profile re-checked number by number against the build\'s state (position, '
          'heading, tilt and focal ranges in the section 4 table all match stage.html). One behaviour '
          'made explicit: every camera number has a target and the camera glides to it - it never '
          'teleports - which is what makes programmed moves, and filming while moving, possible.'],
    ['4', 'The plan\'s own rules completed: the plan file is named (stage3d-version-one-plan.pdf), '
          'and the relation between the PDF and its builder is stated - the PDF is the plan of '
          'record; the script is only its press.'],
    ['5', 'The two views re-read against the brief ("a director view that is through the app... and '
          'there is this camera view"). Added the sentence the section was missing: one world, two '
          'eyes - both views look at the same camera and can never disagree about where it stands '
          'or what it sees.'],
    ['6', 'Navigation re-read as a phone tool, not a desktop one. Added: touch first (every gesture '
          'is a finger gesture before a mouse one), and the edge behaviour of every range - the '
          'view stops cleanly at its edges; it never flips, wraps, or goes under the ground.'],
    ['7', 'Acceptance completed for the camera\'s own movement: a programmed move now has its own '
          'check - a move set as numbers must play as one smooth glide, and a video recorded '
          'during it must show the glide frame-continuous, never a jump.'],
    ['8', 'Reader pass (plain words, short lines): the capture-mechanism paragraph was the longest '
          'block in the plan and is now two shorter ones, and the section introductions were '
          're-read and tightened where a sentence carried more than one idea.'],
    ['9', 'The world re-read against the brief ("just include a void, a very nice and relaxing '
          'void, and an infinite ground... a dim light source... base and ground level"). One '
          'phrase was missing and is now in section 1: the camera stands at base level - the '
          'whole setup is a ground-level setup.'],
    ['10', 'Capture controls re-decided as UX, not left vague: the draft had the shutter "on the '
           'camera in director view", which is not a real place a finger can go. The plan now '
           'fixes two always-on-screen glass buttons, PHOTO and RECORD, beside the view controls, '
           'acting on the camera\'s eye from either view; the REC marker moved into that controls '
           'paragraph, where it belongs.'],
    ['11', 'Numbers audit: every number in the plan checked against the build - orbit -170..+170, '
           'pitch -35..+18, dolly -2600..+780 (over ten times, far to near), pan +/-900 by +/-500, '
           'camera x -1400..2400, z -1600..1800, heading -180..+180, tilt -28..+32, focal '
           '240..1700. All match; nothing to fix.'],
    ['12', 'Designer-rule audit: the plan asks the owner for nothing. Every open craft question '
           '(capture mechanism, control placement, file formats, naming) is decided inside the '
           'plan, and the next step after Version One is stated (the film develops inside this '
           'world) without scheduling it. Nothing to fix.'],
    ['13', 'Cross-reference pass - and it caught a real error: section 1 pointed to "section 5" '
           'for the camera\'s movement profile; the profile is section 4 (section 5 is capture). '
           'Fixed. Every other section reference in the plan (2, 4, 5, 8) was checked and is '
           'correct.'],
    ['14', 'Image honesty pass: both captions checked against what the images actually are. The '
           'anatomy is named as a generated artistic image, not a screenshot; the screenshot is '
           'named as the real current build, and neither caption claims the capture controls '
           'exist yet (section 8 carries that state). Nothing to fix.'],
    ['15', 'Currency pass on the state sections: the reviewer-gate row in section 7 still said '
           'IN PROGRESS; the three seats have reported, so it now reads REPORTS IN - FIXES '
           'PENDING. Section 8\'s pending-verification note re-checked and still true.'],
    ['16', 'Splitting-clause workability: when the plan splits, its parts need the history with '
           'them - section 9 now states the hydration log travels with the first file.'],
    ['17', 'Full read, start to finish, as the owner would read it. The plan holds together: '
           'world, views, navigation, movement profile, capture, fence, acceptance, state, rules. '
           'One deliberate decision confirmed rather than fixed: the focal row allows pinch over '
           'the corner view, which the current build does not yet take - the plan is the spec for '
           'Version One complete, and section 8 already carries the build\'s true state.'],
    ['18', 'The brief, sentence by sentence (23:17 EST): PDF with images inside it - yes, two; '
           'stored in the assets directory, in a plan sub-folder - yes; the splitting clause - '
           'yes, section 9; a 3D world, the video developed inside it slowly, basics only - yes; '
           'navigate, take pictures, take videos of the empty world - yes; the camera moves, its '
           'movement profile and pointing fully considered - yes, section 4; the captured video '
           'is the same angle, at the quality seen on the phone, no drop - yes, the quality law; '
           'a director view and a camera view - yes, section 2. Full match.'],
    ['19', 'Future-proofing: nothing in the plan blocks the later versions. The scope fence keeps '
           'them out of Version One without forbidding them, and the capture mechanism renders '
           'from the same world the views use, so whatever the world gains later is captured the '
           'same way. Nothing to fix.'],
    ['20', 'Closing pass: title, subtitle, footer, captions and the order of sections re-read one '
           'last time. No mismatch left. Hydration stands at 20 passes; the plan matches the '
           'brief. Any later change reopens hydration and continues this log.'],
    ['21', 'Post-delivery currency pass (2026-11-05, after the 23:50 EST delivery): section 7 '
           'caught up with the facts - the reviewer-gate row had said REPORTS IN - FIXES PENDING '
           'long after the panel closed; it now reads PASSED with the three seats scores, and the '
           'navigation and camera-by-hand rows read DELIVERED - DRIVE WITH OWNER, because the '
           'owner took the live drive onto his own phone. Section 8 now records the delivery and '
           'its gate stamp. Capture remains the next build step, photo and video truth still '
           'NOT YET BUILT - unchanged, and still true.'],
    ['22', 'Navigation rebuild pass (2026-11-05, after the owner\'s phone pass on the delivered '
           'build): his verdicts - rotation too limited to work in, the camera in pieces on his '
           'phone, extra stuff in the scene - reopened sections 3 and 4. Section 3 now describes '
           'the complete standard navigation set (continuous orbit, pitch -85..+85, twist roll, '
           'focus double-tap, the camera view\'s own first-person set, corner tap-to-swap, dolly '
           '-6000..+2600, pan +/-1600 by +/-1000) and section 4\'s table carries the new ranges '
           '(x/z -3000..3000, tilt -70..+70, a roll row) plus the aids toggle on the frame '
           'paragraph. The research behind the set is documented beside this plan '
           '(navigation-research.md). The build matches this text; reviewer verification of the '
           'rebuild was in flight when this pass was written.'],
    ['23', 'Review-fix pass (2026-11-06, on the reviewer seat\'s findings against the rebuilt '
           'file): the focus flight\'s dolly is now solved from the rotation chain (the object '
           'seats at a fixed depth in front of the eye) instead of a fixed number that pushed '
           'far seats behind the eye; the dolly range is capped at +1000, the perspective '
           'ceiling, and section 3\'s zoom line now says so; the far ground plane moved to back '
           'the camera\'s whole forward range (z -1096 to +3000); solids gained a bottom face; '
           'the camera drag un-rolls its deltas; the aids\' frame is clamped to the size '
           'envelope. Sections 3 and 4 remain true against the build.'],
    ['24', 'Iteration pass (2026-11-06, on the owner\'s verdict that Version One was still '
           'not ready — controls incomplete, settings opening as an empty panel, camera not '
           'easily grabbable, common-sense issues throughout): three auditor seats and a web '
           'research seat produced 30+ findings, cured in one build. (1) THE PANEL: its code '
           'was intact; the emptiness was a phone-compositor painting failure of its heavy '
           'backdrop blur over the 3D scene — the panel is now near-opaque by default with '
           'the blur as an @supports enhancement only, the 3D viewport sits at z-index 0, the '
           'panel scrolls within the screen, and it gains a close button and outside-tap '
           'close. (2) THE GRAB: two crossed invisible pads (236 by 180) in the camera group '
           'are the pick proxy — the sourced pattern (three.js picks against an invisible '
           'fatter mesh; 44px minimum targets) — plus a held ring on the ground while a drag '
           'holds the camera. (3) GESTURES: two-finger gestures classify into ONE dominant '
           'channel (zoom, pan or roll, with a 4-degree roll deadzone) instead of applying '
           'all three; the one-hand zoom arms only after a 200ms near-still hold near the '
           'previous tap; a double-tap needs both taps within 40px; the camera-view look '
           'gain rose to 0.30 deg/px; the camera can no longer be moved through the lamp '
           'post. (4) THE CORNER: full pointer map — pinch zooms the corner eye (the touch '
           'path to the lens that was missing), the tap test tightened to 8px/300ms so a '
           'fine aim nudge can no longer swap the views, its own pointer counter, and the '
           'lens focal is named in the corner tag (and in a chip in the camera main view). '
           '(5) THE SEED: state gains cam.present and a SEED constant; RESET STAGE (panel) '
           'clears the space to void + ground + light with no objects, ADD CAMERA restores '
           'it at home, RESET CAMERA is the third reset scope; the seed file is GENERATED '
           'into assets/seed/ from the shipped file (make-seed.py) so boot and fork can '
           'never drift. (6) THE SPLIT: the script now stands in three bannered layers — '
           'ASSETS (visuals), STATE (numbers), MECHANICS (engine) — the mechanics consume '
           'state and handles only. (7) Boot order cured: the frame loop starts at the end '
           'of init; the wiring runs in isolated groups. Open legs unchanged: the phone '
           'pass, the pixel pass, the plan PDF print, capture.'],
    ['25', 'Overnight iteration round 1 (2026-11-06, gesture mathematics lens, under the '
           'owner\'s iterate-until-morning order): five gesture defects cured in stage.html. '
           '(1) The director pan (modified drag and locked two-finger pan) now divides by '
           'the fit scale, so it tracks the finger at any view size like the other '
           'screen-space drags. (2) Two-finger channel classification measures NET '
           'displacement from the landing instead of summed absolute per-frame steps, so '
           'jitter that displaces nothing can no longer lock a channel and the 4-degree '
           'roll deadzone is honoured in net terms. (3) The one-hand zoom\'s hold proof '
           'tests elapsed time before travel, so a large first stroke after a proved '
           '200ms hold arms the zoom instead of disarming it; arming also requires the '
           'primary button with no shift held. (4) The corner view\'s camera-aim heading '
           'gain rose 0.22 to 0.30, matching the main view (the pass-24 gain cure had '
           'reached only the main path). The seed was regenerated from the new file. '
           'Open legs unchanged: the phone pass, the pixel pass, the plan PDF print, '
           'capture.'],
    ['26', 'Overnight iteration round 2 (2026-11-06, view extremes and resize / '
           'orientation lens): five defects cured in stage.html. (1) THE CORNER FIT: '
           'a resize that happened while the stage was empty left the corner scaled '
           'from an invented 320x200 desktop fallback, because the hidden corner '
           'measures zero and nothing refit it when ADD CAMERA brought it back - '
           'fit() now writes the corner scale only from a measured box, and '
           'applyRoles refits in the same pass that shows the corner again. '
           '(2) SHORT SCREENS: a landscape phone kept the desktop-size 320x200 '
           'corner (over half its height) - a max-height 480px query now gives it '
           'the small 178x112 size, the same as narrow portrait. (3) THE FIT '
           'FLOOR: the main fit scale could be zero on a collapsed viewport, and '
           'every pan division by it would have poisoned its target with NaN '
           'permanently - the scale is floored at 0.05. (4) DOCUMENTATION TRUTH: '
           'the focus flight claimed to centre the camera exactly at any seat; '
           'its solved pan and dolly are clamped to the director ranges, so the '
           'reason text and this branch law now say the visit lands as close as '
           'the ranges allow at a far seat. (5) AIM AT CENTRE now wraps its '
           'heading into [-180, 180) like every other heading writer. The seed '
           'was regenerated from the new file. Open legs unchanged: the phone '
           'pass, the pixel pass, the plan PDF print, capture.'],
    ['27', 'Overnight iteration round 3 (2026-11-06, seed / reset flows lens): '
           'three defects cured in stage.html, each first reproduced by driving '
           'the real handlers in a stub-DOM probe. (1) ADD CAMERA ENTERS AT '
           'HOME: it reused RESET CAMERA, which writes only targets, so a '
           'camera removed from a far seat materialised at that stale seat '
           'and glided home across the stage - contradicting its own reason '
           'text ("enters at its home seat"). addCamera now snaps every '
           'current to its home target, so its first visible frame is home; '
           'RESET CAMERA itself still glides, as designed. (2) THE EMPTY '
           'STAGE COULD RETUNE THE ABSENT CAMERA: the three-finger lens slide '
           'had no presence guard and silently changed the hidden focal '
           '(1200 to 1525 in the probe); the channel now arms and applies '
           'only while the camera is present, and the corner view\'s aim and '
           'lens writers gained the same guard the keyboard handler already '
           'had (they were previously safe only because the corner is hidden '
           'in the seed state). (3) DOCUMENTATION TRUTH: the DEFAULTS '
           'button\'s reason omitted that it also turns the director aids '
           'off; it now names every setting it resets. Verified correct and '
           'left alone: the seed is single-sourced (boot and RESET STAGE '
           'read the same SEED object), RESET VIEW wraps yaw the short way, '
           'RESET STAGE preserves the director exactly as documented, and no '
           'reset touches the persisted settings. The seed was regenerated '
           'from the new file. Open legs unchanged: the phone pass, the '
           'pixel pass, the plan PDF print, capture.'],
  ['28', 'Overnight iteration round 4 (2026-11-06, documentation truth '
           'lens): fourteen defects cured in stage.html, each verified in '
           'code before touching (main audit plus one read-only auditor). '
           'Two were cured in code because the documents claimed a '
           'structure the code did not have: (1) the control wiring was '
           'NOT isolated beyond two try groups - the aim, main-gesture, '
           'corner and keyboard bindings ran unguarded, so one failure '
           'there killed every later control and the frame-loop start; '
           'each remaining binding group now has its own try group, and '
           'a fault-injection probe (main viewport missing) shows the '
           'corner, keyboard and loop surviving. (2) The layer seam was '
           'not what the banners claim: clamp and setStyle (mechanics '
           'helpers used only by layer 3) sat above layer 2, and layer '
           '2 itself held behaviour (the test-view URL application) and '
           'the DOM element handles; all of it moved to the head of '
           'layer 3 - pure relocations of hoisted declarations and '
           'pre-init statements, verified behaviour-identical - so '
           'layer 2 now holds state only, as its banner says. Twelve '
           'reason and hint texts were made truthful: the settings '
           'reasons now count the aids toggle (five persisted settings, '
           'not four) and the loader reason no longer claims the toggle '
           'is slider-clamped; the FIND CAMERA button reason carries '
           'the same range qualification round 2 gave focusCamera; the '
           'camera-view hint now says a two-finger drag also flies '
           'up/down, and the director hint names scroll, the '
           'three-finger lens slide and the corner tap swap; the pool '
           'is back in the buildWorld and per-frame-draw inventories; '
           'the eye-rig reason names the perspective and roll it '
           'applies; the CENTRE/CAM_HOME reason no longer credits the '
           'double-tap visit (it reads neither constant); setWorldRole '
           'no longer shows the aids unconditionally; the double-tap '
           'reason states the true tap bound (at most 12px), the 40px '
           'proximity and all three outcomes; both panel-close reasons '
           'except the corner view, whose presses never reach the '
           'closer; the grain is a 256x256 field, not 256 pixels; the '
           'gear opens OR closes the panel; the hint is a short guide, '
           'not one line; and the stylesheet @covers list now names '
           'every live class (seven were missing). Verified correct '
           'and left alone: all ranges and homes against the branch '
           'law, the seed single-sourcing, and the reset reasons '
           'cured in round 3. The seed was regenerated from the new '
           'file and proven equal apart from its flag block. Open legs '
           'unchanged: the phone pass, the pixel pass, the plan PDF '
           'print, capture.'],
  ['29', 'Overnight iteration round 5 (2026-11-06, performance and '
           'state desync lens): four defects cured in stage.html, each '
           'verified in code and by a stub-DOM probe run on the pre- '
           'and post-fix bytes (main audit plus one read-only '
           'auditor). (1) The chase never settled: every one of the '
           'twelve chased numbers approached its target '
           'exponentially with no snap, so currents never equalled '
           'targets (probe: focal 1699.999999999999 against 1700 and '
           'heading off by 7e-13 after 2000 frames) and the page '
           'wrote 442 styles during simulated seconds 3.3-6.7 after '
           'the last input; chase and the three wrapped chases now '
           'snap the last 0.001 onto the target (probe: exact at '
           'frame 135, zero writes after). (2) A settings slider '
           'drag rewrote the whole panel and synchronously persisted '
           'the store on every input event; input now updates only '
           'the setting and its own readout, and the store is '
           'written once on change at release (probe: 1 write on '
           'input before, 0 on input and 1 on change after). '
           '(3) fit() ran in full on every resize event; the '
           'listener now queues one fit per frame, the corner box '
           'is read before any wrap is written, and applyRoles/init '
           'still fit directly (probe: 5 transform writes for 5 '
           'resize events before, 0 during and 1 after one frame '
           'now). (4) The hint fade clock was init-local and managed '
           'only at gesture end and boot: a fade armed earlier fired '
           'mid-drag, and a role swap presented the new view\u2019s '
           'hint at the old text\u2019s faded whisper with no clock '
           'running; the timer is now engine-scope, a press cancels '
           'a pending fade, and applyRoles restores full strength '
           'and restarts the clock whenever it rewrites the hint '
           '(probe confirms all three). Verified passes: tag caches, '
           'the setStyle cache against direct writes, the separate '
           'pointer maps, dt capping, the settings single source. '
           'The seed was regenerated from the new file and proven '
           'equal apart from its flag block. Open legs unchanged: '
           'the phone pass, the pixel pass, the plan PDF print, '
           'capture.'],
  ['30', 'Overnight iteration round 6 (2026-11-06, fresh-eyes '
           'first-minute lens): eight findings cured in stage.html, '
           'each verified in code and by a listener-capturing '
           'stub-DOM probe run on the pre- and post-fix bytes (main '
           'audit plus one read-only auditor; 12 of the probe\u2019s '
           '19 checks failed on the pre-fix bytes, all 19 pass on '
           'the fixed bytes). (1) The hints named only the corner\u2019s '
           'tap: both view hints now also name the corner\u2019s drag '
           'and pinch (aim/zoom the camera while directing; orbit/'
           'zoom the director while in the shot), the double-tap-'
           'hold one-handed zoom/flight, and the arrow-key camera '
           'nudge \u2014 three live gesture families a first-time user '
           'previously found only by accident. (2) The corner tag\u2019s '
           'bare focal number is now labelled (CAMERA \u00b7 LENS 800, '
           'matching the main view\u2019s LENS chip). (3) The panel\u2019s '
           'AIDS toggle now names its instruments on its face '
           '(shadow, beam, frame, pool) in both the static text and '
           'the settings rewrite. (4) The four slider labels are '
           'associated with their inputs (for=), the DIRECTOR/CAMERA '
           'pills carry aria-pressed synced in applyRoles, and the '
           'gear carries aria-expanded synced on every panel '
           'open/close path (gear, \u2715, outside press, ?panel=open). '
           '(5) The smoothing label now states its direction '
           '(direct \u2192 floaty). (6) A press that dismisses the open '
           'panel no longer seeds the double-tap chain: it cannot '
           'join a double-tap or arm the one-hand zoom, so closing '
           'the panel and tapping the scene cannot fly the view '
           'home unasked (probe: targets unchanged after the cure; '
           'a genuine double-tap still flies home). (7) In the '
           'camera view the hint\u2019s box is held 150px short of the '
           'right edge while the LENS chip shares its bottom edge, '
           'so its lines cannot run under the chip on narrow '
           'screens. Logged for the morning, not changed: the '
           '6-second hint fade against a first read of the now-'
           'complete gesture map (a derived first-read estimate '
           'runs well past 6s \u2014 the fade budget is a shipped '
           'behaviour and its new number is the owner\u2019s to rule); '
           'the hint/viewbar glass contrast over the bright ground '
           '(the panel\u2019s near-opaque cure is the precedent, but '
           'no pixel evidence exists for these two and the glass '
           'look is owner-ruled); a visible CENTRE marker for AIM '
           '(a marker would be a new scene object, which branch '
           'law forbids). The seed was regenerated from the new '
           'file and proven equal apart from its flag block. Open '
           'legs unchanged: the phone pass, the pixel pass, the '
           'plan PDF print, capture.'],
  ['31', 'The TEN-WORD LAW fix (2026-11-06, the owner\u2019s '
           'screenshot verdict on the hint wall): a word census of '
           'every container the page exposes without a tap found '
           'three offenders, all of them the hint \u2014 69 words in '
           'the director view, 58 in the camera view, 28 in the '
           'seed state; every other exposed container stands at '
           'three words or fewer. The hint is now two disclosure '
           'levels: a short line stands open (director and camera '
           '8 words with the MORE tap counted, seed 6) and the '
           'full gesture map lives behind a MORE/LESS tap, closed '
           'again on every role pass and exempt from the idle fade '
           'while open. Verified on the final bytes: node --check, '
           'a stub-DOM boot with the toggle exercised in all three '
           'states (8/8/6 exposed words; the 69-word map hidden '
           'until its tap), braces 64/64, 38 unique ids, seed '
           'regenerated. The branch AGENTS.md now carries the law. '
           'Open legs unchanged.'],
  ['32', 'THE EMPTY CHECKPOINT (2026-11-06, the owner\u2019s '
           'no-candle ruling, superseding the ground-cure order of '
           'the same hour): the lamp is removed from the build '
           'entirely \u2014 stem, halo, core, its pool, the warm screen '
           'wash (now a neutral void shading), the LIGHT state and '
           'the camera\u2019s keep-out disc. The ground is rebuilt as '
           'a wireframe grid floor: one transparent plane carrying '
           'only the two-axis 92-unit grid, its lines faded to zero '
           'under a radial distance mask well before the edge; the '
           'backing plane is deleted, so the void\u2019s own gradient '
           'shows through. RESET STAGE now clears everything \u2014 '
           'no camera, no aids \u2014 and homes the director\u2019s '
           'view to the checkpoint\u2019s opening view, currents '
           'snapped, so the reset reproduces the checkpoint '
           'exactly. Emptiness census and reset probe pass on the '
           'final bytes (both worlds: one grid, one camera group, '
           'four camera instruments, nothing else); the seed hint '
           'now reads \u201cvoid and grid\u201d inside the ten-word '
           'budget (8/8/6). Full record: stage3d-empty-checkpoint-'
           'record.md in the gate records folder.'],
  ['33', 'THE NAVIGATION UPGRADE (2026-11-06, the owner\u2019s '
           'report of dozens of navigation problems; two audit '
           'seats filed 29 findings, 24 unique after dedupe, and '
           'the fix plan\u2019s N1\u2013N24 are now implemented in one '
           'pass on the empty-checkpoint build): the tap boundary '
           '(a tap on the camera never seeds the double-tap chain; '
           'ONE tap geometry \u2014 TAP_DIST 40px, TAP_WINDOW 300ms '
           '\u2014 shared by arming, action and test), the role '
           'boundary (every role application cancels the live '
           'gesture: both pointer maps emptied, capture released '
           'per pointer, mode/lock/chain wiped; the camera-move '
           'branch refuses outside the director view), pointer '
           'membership (up/cancel handlers ignore unknown ids; '
           'capture registers after the map write, in its own '
           'protected step; the frame loop recomputes the activity '
           'counters from the maps every frame), the recovery '
           'flight (solved from the camera\u2019s CURRENT position, '
           'clamped to flight bounds derived from the seating '
           'envelope \u2014 pan \u00b14700, dolly \u22126000..5200 \u2014 '
           'so it centres every seat), handoffs (the map remembers '
           'the grabbing pointer; corner positions update before '
           'the camera-absent return; a fourth finger is absorbed; '
           'the corner reseeds its pinch baseline at 3\u21922), '
           'resize reseeds a live gesture\u2019s baselines, test-'
           'link values are clamped per law range and clamp() '
           'itself rejects NaN, one gains table (twist takes the '
           'Look multiplier, every camera flight divides by the '
           'focal-aware scale, the keyboard scales with Pan), the '
           'grab pads shrink to 150\u00d7120 and the contact shadow '
           'leaves the hit set, and the input edges (modified '
           'arrows pass through, page-mode wheels normalised, the '
           'corner press dismisses the panel, fly-home computes '
           'from the target yaw). Verification: an extended '
           'stub-DOM harness (124 checks) replays every audit '
           'scenario to correct and keeps every verified-good '
           'control green; the seed was regenerated and proven '
           'equal apart from its flag block. Full record: '
           'stage3d-navfix-record.md in the gate records folder.'],
    ['34', 'CONVERGENCE FIX ROUND 1 (2026-11-06: the zero-issue '
           'loop\u2019s first re-audit of the navigation upgrade found '
           '11 unique defects \u2014 Seat A R1A-1..6, Seat B B1..B6, '
           'one defect shared \u2014 and all 11 are cured in this '
           'pass). The tap boundary is rebuilt as TWO chains, one '
           'per landing surface: a tap on the camera seeds the '
           'camera chain only, a second on-camera tap completes '
           'the focus visit the hint map teaches (the upgrade\u2019s '
           'N1 cure had amputated the gesture along with the '
           'hijack; the hijack stays cured), and a modified tap '
           'is invisible to both chains \u2014 it can neither seed, '
           'complete, nor break either one (the upgrade\u2019s N19 '
           'void covered seeding but not completion, and its own '
           'assertion could not see the defect at boot-home '
           'values; the regression scenario now runs from a '
           'displaced state). After a focus flight lands a target '
           'beyond the gesture clamps, gesture writes follow the '
           'NO-SNAP rule: the effective bound is the wider of the '
           'law bound and the current target, so the first gesture '
           'after a far visit moves by its own input. Role-'
           'boundary cancellation is keyed to the applied layout '
           'actually CHANGING (role or camera presence) \u2014 a '
           'no-op re-application leaves a live drag untouched, and '
           'RESET STAGE forces the cancellation explicitly. A '
           'duplicate pointerdown for a registered id is ignored '
           'on both surfaces. clamp() lands every input on its '
           'nearest legal value (+Infinity to the high bound) and '
           'heading-type params wrap by true modulo into '
           '(\u2212180, 180]. The grid ground renders from BOTH '
           'sides (its single-sided culling had erased the floor '
           'across half the pitch range), the grain is explicitly '
           'sized to the screen and layered above the corner view, '
           'RESET STAGE normalises the absent camera\u2019s numbers '
           'to the boot values so the checkpoint state is '
           'identical field for field on every path, safe-area '
           'insets are honoured on all four edges (margins, so no '
           'responsive breakpoint is fought), and the MORE/LESS '
           'tap carries a 28px minimum height. Verification: a '
           'dedicated stub-DOM harness (77 checks) proves every '
           'cure against the seats\u2019 own scenarios, and the '
           'navigation harness\u2019 124 checks stay green on the '
           'same bytes; the seed was regenerated and proven equal '
           'apart from its flag block. Full record: '
           'stage3d-convergence-fix1-record.md in the gate records '
           'folder.'],
    ['35', 'CONVERGENCE FIX ROUND 2 (2026-11-06: the loop\u2019s '
           'second re-audit of the fix-1 build found 6 defects '
           '\u2014 Seat A R2A-1..4, Seat B R2B-1..2 \u2014 and all 6 '
           'are cured in this pass, plus a seventh found by this '
           'round\u2019s own class census). The safe-area block '
           'moves to the END of the stylesheet: standing '
           'mid-stylesheet at equal specificity, its lens-chip '
           'lift and panel cap were cascade-dead under the later '
           'base rules \u2014 presence in the stylesheet is not a '
           'computed style, and the cure is proven by a '
           'computed-style census over every conditional '
           'override in the file (33 competing declaration pairs '
           'across 7 contexts). The census caught a second, '
           'unreported instance of the same class: the '
           'narrow-screen block\u2019s hint width was equally '
           'dead behind the .hint base rule, and that block now '
           'stands after it (D7). A non-primary release (right '
           'or middle button) now returns before any tap-chain '
           'bookkeeping \u2014 the modified class the two-chain '
           'law made invisible at seeding was still wiping both '
           'chains at release; a genuine primary drag and a '
           'cancel still break the chains as designed. The '
           'fit-reseed is gated on MEASURED change: fit() '
           'compares its computed scales and orientation against '
           'the last fit\u2019s, so a no-op role re-application '
           'can no longer clear a live pinch\u2019s channel lock, '
           'while a genuine resize reseeds byte-for-byte as '
           'before (a 20-unit spread still adds exactly 32). '
           'numParam rejects every non-finite value at the door '
           '(parseFloat of 1e999 is Infinity, not NaN): all 12 '
           'parameters fall back to their defaults instead of '
           'the two unclamped ones poisoning state. The '
           'corner\u2019s panel-dismissing press is spent, '
           'mirroring the main surface: it closes the panel and '
           'cannot also swap the views. One stale reason again '
           'named light as a seed component; it now reads void '
           'and grid, and a word-boundary census finds every '
           'remaining lamp/candle mention a removal record. '
           'Verification: a dedicated stub-DOM harness (118 '
           'checks, including the five class censuses \u2014 '
           'cascade, chain-invisibility, numParam, dismissal '
           'spend, reseed callers) and the 124-check navigation '
           'regression set are green on the same bytes; the '
           'fix-1 harness stands at 73/77, its four non-passes '
           'being exactly the C6 Infinity checks whose contract '
           'this round\u2019s door law supersedes, re-proven '
           'under the new law in the round-2 harness. The seed '
           'was regenerated and proven equal apart from its '
           'flag block. Full record: '
           'stage3d-convergence-fix2-record.md in the gate '
           'records folder.'],
    ['36', 'CONVERGENCE FIX ROUND 3 (2026-11-06: the '
           'class-coverage sweep of the fix-2 build \u2014 13 '
           'classes, full instance censuses \u2014 filed 19 roots, '
           'and all 19 are cured here at class level). Seat 1: '
           'pipSpent joins cancelGesture\u2019s reset set, '
           'proven complete by enumeration over all 42 gesture '
           'variables (16 reset, 26 excepted with printed '
           'reasons, 0 defective). The corner gains the main '
           'surface\u2019s button discipline: non-primary and '
           'Shift-modified presses never enter its map (6/6 '
           'release paths re-probed inert), and a middle press '
           'no longer decides the main gesture. Yaw wraps by '
           'true modulo at the numParam door (a finite 1e308 '
           'could never be flown home), and RESET STAGE writes '
           'the director\u2019s yaw literally to 0, completing '
           'the state-identity census (26 units \u00d7 4 paths, '
           '0 defective). Error isolation is total: the grain '
           'builder is guarded, the frame loop schedules its '
           'next frame first, init\u2019s pre-wiring segment is '
           'guarded \u2014 each proven by fault injection. A '
           'tab-hide or window blur cancels any live gesture; '
           'the corner gains contextmenu prevention; the panel '
           'gains explicit overscroll-behavior and touch-action '
           '(the stylesheet\u2019s one scrollable element, 1/1). '
           'Seat 2: the 560\u00d7480 cascade intersection now '
           'computes the corner\u2019s top to 108px (44 competing '
           'pairs censused); one global box-sizing:border-box '
           'cures the box-model class (panel and hint overruns '
           '0 across the arithmetic census, whose controls '
           'reproduce the sweep\u2019s measured \u221224/+10/+16 '
           'exactly); the press-dim respects the open hint map; '
           'the grab pads shrink to the drawn union measured '
           'from the builders (118\u00d773\u00d7102) plus 8 a side '
           '\u2014 invisible capture falls from 64\u201369% to '
           '28\u201329%; and the six docs defects are cured '
           '(corner exception removed from the close reasons, '
           'the \u00d70.99 fit wording, the seed block stated at '
           'its measured 4 lines / 294 bytes in both documents, '
           'the \u00b13600 blanket qualified by the \u00b14700 '
           'flight envelope). Verification: a dedicated '
           'stub-DOM harness, 161 checks including every class '
           'census above, is green on the final bytes; the '
           'regression sets stand at navfix 123/124 (its one '
           'non-pass the literal 150\u00d7120 pad assertion this '
           'round supersedes, re-proven by measurement in the '
           'round-3 harness), fix1 73/77 (the four known C6 '
           'Infinity checks superseded in round 2), fix2 '
           '117/118 (its one non-pass the D5 yaw set-exactly '
           'row this round\u2019s door law supersedes, re-proven '
           'in the round-3 yaw census). The seed was '
           'regenerated and proven byte-equal apart from its '
           '294-byte flag block. Full record: '
           'stage3d-convergence-fix3-record.md in the gate '
           'records folder.'],
    ['37', 'CONVERGENCE FIX ROUND 4 (2026-11-06: the '
           'three findings of verification round 1 on the '
           'fix-3 build \u2014 Seat 1\u2019s V-1 and V-2, Seat '
           '2\u2019s D-2 \u2014 cured at class level). W1 (V-1, '
           'Class A): a middle-button press never enters '
           'the main surface\u2019s gesture at all \u2014 a '
           'door guard refuses it before registration, the '
           'corner\u2019s round-3 invisibility applied at '
           'the main door; round 3 had excluded the middle '
           'button from the grab decision and the chains '
           'but left the mode decision resolving its press '
           'to a look, so a middle drag still orbited the '
           'director (Seat 1: tYaw 4.5\u219212) and looked '
           'in the camera view (tHeading \u2212107.3\u2192'
           '\u221277.3); both probes now read unchanged, a '
           'middle press during a primary drag cannot '
           'become a pinch finger, and the documented '
           'controls are untouched (right-drag and '
           'Shift-drag still pan, primary still orbits). '
           'The Class A cancellation enumeration re-runs '
           'clean: 42 variables, 16 reset, 26 excepted '
           'with reasons, 0 defective. W2 (V-2, Class A): '
           'the tap chains are born disarmed \u2014 both '
           'last-tap stamps initialise to \u2212Infinity '
           'and every clearing write (the declarations, '
           'cancelGesture\u2019s pair, the six resolution '
           'clears: 10 disarm writes) uses the same value, '
           'never 0, which was a live timestamp for the '
           'first 300ms after the time origin (Seat 1\u2019s '
           'synthetic t=0 probe read tDolly 60\u2192336; '
           'it now reads 60, the drag a live look). The '
           'timestamp census covers all 6 initialisation '
           'sites: the 2 chain stamps disarmed, the 4 '
           'epoch/clock stamps (downT, dtArmT, pipDownT, '
           'the frame clock) inert by reseeding, each '
           'named. Mature-clock controls stand: genuine '
           'double-taps fly home and focus, the one-hand '
           'zoom still arms. W3 (D-2, Class D): the '
           'coarse safe-area side margins now carry width '
           'compensation \u2014 the panel\u2019s max-width '
           'subtracts both side insets inside the coarse '
           'block, and the hint\u2019s narrow max-width '
           'subtracts both in a coarse-and-narrow block '
           'standing after it (above 560px the hint\u2019s '
           'cap is a proportion, not a viewport budget, '
           'so only the budget is compensated). The Class '
           'D census is EXTENDED: the sweep\u2019s 96 cells '
           'parameterised top and bottom only; the new '
           'standing denominator is 468 viewport \u00d7 '
           'inset \u00d7 pointer cells \u00d7 13 edge checks '
           '= 6,084 edge checks over 6 chrome elements, '
           'defective 0 \u2014 with the pre-fix formulas run '
           'as controls reproducing Seat 2\u2019s D-2 '
           'numbers exactly (hint right edge 353/393/423/'
           '593 at a 47px inset; panel left \u221233/'
           '\u221223/\u22123/+27), and the D-2 cells '
           'themselves cured (hint stops 14px short of '
           'the right inset\u2019s inner edge; panel left '
           'holds +14). Docs census recounted: 144 file '
           'claim units under the harness taxonomy (50 '
           'static + 72 @reason + 16 dynamic + 6 hint), '
           'defective 0, stale-pattern sweep 0 hits. '
           'Verification: the dedicated fix-4 harness '
           'reads 58/58 on the final bytes; the standing '
           'sets read fix3 161/161, navfix 123/124, fix1 '
           '73/77, fix2 117/118 \u2014 every non-pass a '
           'previously named supersession (the 150\u00d7'
           '120 pad literal, the four C6 Infinity rows, '
           'the D5 yaw-exactly row), each with its '
           'replacement proof in its round\u2019s record. '
           'The seed was regenerated and proven byte-equal '
           'apart from its 294-byte flag block. Full '
           'record: stage3d-convergence-fix4-record.md in '
           'the gate records folder.'],
    ['38', 'CONVERGENCE FIX ROUND 5 (2026-11-06): the '
           'four verification-round-2 findings \u2014 Seat '
           '1\u2019s V2-1, V2-2, V2-3 and Seat 2\u2019s D-3 '
           '\u2014 cured at the MECHANISM, never at an '
           'enumeration, each proof re-enumerating the '
           'whole class the mechanism governs. X1 (V2-1, '
           'Class A): the main pointerdown door admits '
           'exactly two buttons AS A CLASS \u2014 the '
           'primary (0) and the documented pan '
           'modification (2); every other value (the '
           'middle 1, the X1/X2 side buttons 3 and 4, '
           'any future value) is refused before '
           'registration. Round 4\u2019s guard had '
           'enumerated the middle button alone, and '
           'Seat 1 walked buttons 3/4 straight past it '
           '(a button-3 drag orbited; on the camera it '
           'grabbed, cam.tX 742\u2192833.6). The button '
           'census {0,1,2,3,4} \u00d7 {empty, camera, '
           'mid-drag, mid-pinch} now reads: only 0/2 '
           'behave, per their documented meanings; the '
           'Class A cancellation enumeration re-runs at '
           '42 variables, 0 defective. X2 (V2-2, Class '
           'A): decide-once routing \u2014 the main move '
           'routing reads the door\u2019s record (downMod) '
           'plus the Shift key and never the live button '
           'mask, whose equality test converted a '
           'right-button pan into an orbit when the '
           'primary chorded in (Seat 1: panX frozen at '
           '52.5, tYaw 0\u21924.5). The chord matrix '
           '{right-then-left, left-then-right, Shift '
           'in/out} \u00d7 {director, camera view} reads: '
           'no decided meaning converts mid-flight; the '
           'release law is stated and probed (the '
           'gesture belongs to the pointer \u2014 the '
           'first release of either admitted button '
           'ends it; a non-primary release leaves both '
           'chains untouched, proven by a chain seeded '
           'before the chord completing after it). One '
           'named mechanics change: a drag that LANDED '
           'modified now stays a pan for its whole '
           'life, even if Shift is released mid-drag; '
           'the documented live-Shift modification '
           '(press mid-drag to pan, release to return) '
           'is preserved exactly and re-proven as a '
           'control. X3 (V2-3, Class E): wrap180 is '
           'true modulo AT THE FUNCTION \u2014 '
           '((v % 360) + 540) % 360 \u2212 180, in '
           '[\u2212180, 180) for any finite magnitude '
           '\u2014 hoisted to engine scope, and the frame '
           'loop\u2019s six inline copies of the old '
           'shifted formula were retired into calls, '
           'so the fragile formula exists nowhere in '
           'the file. The wrap census over '
           'comment-stripped code: 6 modulo-360 '
           'operators on 3 lines (the wrap180 '
           'definition; the two test-view doors, which '
           'keep their (\u2212180, 180] variant by '
           'contract). 14 call sites, each proven: '
           'flyHome from 777 targets 720 (a \u221257\u00b0 '
           'flight; Seat 1 read 360, a \u2212417\u00b0 '
           'spin) and from 5000 targets 5040; a '
           '\u22123000px flick through either heading '
           'write lands at 72.70, true modulo of '
           '\u22121007.3, where the old formula read '
           '\u2212287.3 \u2014 outside its own range; the '
           'twist, classifier-seam, aim and chase '
           'sites all read in range, short way, exact '
           'at rest. X4 (D-3, Classes D+J): the '
           'script\u2019s inline hint cap in camera view '
           'subtracts both side safe-area insets, '
           'joining round 4\u2019s stylesheet '
           'compensation. The class sweep censused '
           'EVERY inline style write in the script: '
           '47 lines \u2014 1 viewport-budget write (the '
           'cap, now compensated), 2 fit transforms, '
           '13 visibility, 7 opacity, 24 scene '
           'geometry (world units inside the '
           'transformed wraps, where screen insets '
           'cannot apply). The pairwise hint\u2194chip '
           'census Seat 2 prescribed: 56 cells (8 '
           'widths \u00d7 7 inset pairs, hint at its '
           'cap), overlap 0 everywhere, clearance '
           'exactly the designed 24px at every inset; '
           'the pre-fix cap reproduces Seat 2\u2019s '
           'overlaps exactly (23px @480w/47\u00b70; '
           '70px @360w, @480w, @844w with 47/47) as '
           'controls. The extended Class D census '
           're-runs at 6,084 edge checks, defective 0; '
           'with the pairwise cells the standing '
           'denominator is 6,140 checks. The Class J '
           'claim that made D-3 a docs defect (\u201ccan '
           'never run under the chip\u201d) is re-verified '
           'TRUE on the final bytes. Docs census '
           'recounted: 144 file claim units (50 static '
           '+ 72 @reason + 16 dynamic + 6 hint), '
           'defective 0, stale-pattern sweep 0 hits. '
           'Verification: the dedicated fix-5 harness '
           'reads 101/101 on the final bytes; the '
           'standing sets read fix4 56/58, fix3 '
           '160/161, navfix 123/124, fix1 73/77, fix2 '
           '117/118 \u2014 every non-pass a named '
           'supersession with its replacement proof in '
           'the fix-5 record (round 4\u2019s guard '
           'literal and its AGENTS phrasing; fix3\u2019s '
           'flyHome control, which had enshrined the '
           'V2-3 defect as expected behaviour; the '
           'standing pad-literal, C6 and D5 rows). The '
           'seed was regenerated and proven byte-equal '
           'apart from its 294-byte flag block. Full '
           'record: stage3d-convergence-fix5-record.md '
           'in the gate records folder.'],
    ['39', 'CONVERGENCE FIX ROUND 6 (2026-11-06): the '
           'two verification-round-3 findings — Seat '
           '1\u2019s V3-1 and V3-2, one root in two places '
           '— cured by completing the decide-once '
           'discipline: every consumer of \u201cwas this '
           'press modified\u201d now reads the door\u2019s '
           'record (downMod), never the live event. Y1 '
           '(V3-1, Class A): endPointer\u2019s chain-'
           'invisibility return also fires when the '
           'gesture was decided modified — a right-'
           'button pan drag chorded by the primary and '
           'ended by the primary\u2019s release first '
           'carried a primary release event, fell into '
           'the tap resolution, and disarmed both '
           'chains. The chord matrix \u00d7 both release '
           'orders \u00d7 both chains (and the general '
           'chain in the camera role) now reads '
           'complete-after-chord in every cell; the '
           'controls stand (a plain tap completes, a '
           'genuine unmodified drag breaks, a modified '
           'tap neither seeds nor completes nor '
           'breaks, a cancelled modified drag still '
           'disarms). Y2 (V3-2, Class A) — DESIGNER '
           'DECISION (Archer): the modification means '
           'PAN IN BOTH VIEWS. A modified drag in the '
           'camera view strafes the camera along its '
           'right vector and flies it along its look — '
           'the strafe/fly its two-finger pan performs, '
           'at the SET.pan gain through the focal-'
           'aware scale, under the no-snap clamp; the '
           'aim never changes (Seat 1\u2019s probe flips: '
           'tHeading \u2212107.3 \u2192 \u221277.3 becomes '
           'exactly \u2212107.3, the camera moved '
           'instead; SET.pan \u00d72 reads \u00d72 '
           'displacement). The rig exposes no height '
           'field (position is tX/tZ; eye height is '
           'the constant EYE), so the view plane\u2019s '
           'vertical channel is the fly, as the two-'
           'finger pan already spends it. The camera '
           'gesture map teaches the new line behind '
           'MORE. CLASS SWEEP: every live-event read '
           '(e.button / e.buttons / e.shiftKey) in '
           'the move/up/cancel handlers of both '
           'surfaces censused with dispositions — '
           'zero unconverted consumers; e.buttons is '
           'read nowhere; the survivors are the doors '
           '(which write the record), Shift live at '
           'the routing (the documented modification '
           'itself, both roles), the release\u2019s own '
           'button (classifies the ending release), '
           'and the keyboard\u2019s Shift step. Fix6 '
           'harness 69/69 (docs census 144 claim '
           'units, 0 defective; ten-word 8/8/6; '
           'emptiness 42 nodes/world). Regressions: '
           'fix5 99/101 — its two non-passes are '
           'V3-2 itself, enshrined there as '
           '\u201cstanding behaviour\u201d, superseded by '
           'this round\u2019s \u00a7Y2 with replacement '
           'proof in the fix6 harness; fix4 56/58, '
           'fix3 160/161, navfix 123/124, fix2 '
           '117/118, fix1 73/77 — every remaining '
           'non-pass a previously named supersession '
           '(pads, C6, D5, S5-flyHome, W1-literal, '
           'fix4-J phrasing). stage.html 146,879 B, '
           'sha d9e5b47c; the seed was regenerated '
           'and proven byte-equal apart from its '
           '294-byte flag block (147,173 B, sha '
           '5efda6fc). Full record: '
           'stage3d-convergence-fix6-record.md in the '
           'gate records folder.'],
    ['40', 'THREE.JS MIGRATION (2026-11-06): the owner\u2019s '
           'platform decision (17:39 EST \u2014 adopt three.js, '
           'vendored) executed. The render layer of stage.html '
           'moved from CSS 3D transforms to WebGL: three.js r186 '
           'vendored as one pre-bundled classic script '
           '(assets/three-vendor.js, 743,139 B, sha256 1ba21d75; '
           'an esbuild bundle of the npm three@0.186.0 module '
           'pair \u2014 ES modules are file://-CORS-blocked, so no '
           'importmap and no module tags). Carried verbatim: the '
           'state layer, the entire gesture system, the DOM '
           'chrome (the ten-word and safe-area laws untouched), '
           'and the seed identity \u2014 one SEED_STATE object, '
           'boot/seed/RESET proven field-by-field; the seed file '
           'regenerated byte-equal apart from its 294-byte flag '
           'block, with a byte-identical shadow copy of the bundle '
           'at assets/seed/assets/ so the seed runs standalone. '
           'Replaced: the duplicated DOM worlds \u2014 one scene, '
           'rendered in passes (main; the corner as a second pass '
           'by scissor/viewport; a gizmo viewport); the void is a '
           'gradient backdrop dome; the grid is the canonical '
           'fwidth-AA shader (minor and major tiers, dyed-paper '
           'axis lines #C96F4A / #6E8CAE under the solid/dashed '
           'sign convention, alpha faded by true camera '
           'distance); the camera object is a paper-styled mesh '
           'group with its TRUE frustum (CameraHelper, aids-'
           'gated); orientation gains a heading chip read from '
           'the rendered camera, an origin ring, and a purpose-'
           'built gizmo (ViewHelper is not in the core build). '
           'One gesture-adjacent rewrite: the focus (FIND) solve, '
           're-derived for the orbit rig and proven geometrically '
           'over 49 seat/angle cells \u2014 centred in all of them; '
           'distance exactly 500, or the rig stand-off floor '
           'where the seat lies too far behind the centre. '
           'Verification: the new migration harness (85 checks \u2014 '
           'stub identity, mock-engine pass structure, all nine '
           'standing suites ported) is green; the standing suites '
           'hold only their pre-migration baseline non-passes '
           '(fix1 C6 x4, fix2 D5, fix3 S5, fix4 W1 + J-law, fix5 '
           'X2 x2 \u2014 each pre-existing on d9e5b47c or superseded, '
           'dispositions in the record). THE GL PROOF RAN '
           '(headless Chrome 157, SwiftShader, a bare file:// '
           'open): the stage boots on the real engine with zero '
           'page errors, and samplePixels measures the director '
           'ground region at 5.14:1 (p95 against the median) '
           'against the 3:1 floor; the heading chip is visibly '
           'seated at the bottom right. The full gesture maps '
           'now name the grid scale (one square 92, the heavy '
           'line 460), closing the fix-7 plan\u2019s stated-scale '
           'item. stage.html 155,880 B, '
           'sha 6712bf27. Certification still requires the '
           'owner\u2019s phone pass above 50 \u2014 the migration does '
           'not claim it. Full record: '
           'stage3d-migration-record.md in the gate records '
           'folder.'],
    ['41', 'Fix round 8 — Verify W1 Seat 2\'s ten findings cured at class level '
           '(Seat 1 was clean; no mechanic changed). THE INSTRUMENT (N-1, N-2): '
           'the pixel hook computes TRUE WCAG (sRGB linearised before the '
           'luminance weights), seats its viewport in CSS pixels (at pixel '
           'ratio 2 the old call rendered the frame at double scale into its '
           'target, clipped to one quadrant — isolated with quadrant markers), '
           'and reads the PAGE\'S OWN drawing buffer after the page\'s own frame '
           'render: a declared-sRGB target blends transparent paint in linear '
           'light where the canvas blends in encoded space (the grid\'s bright '
           'pixels land ×0.79 in byte value through the canvas, the opaque dome '
           'identical), so only the page\'s own pixels are the page\'s truth. '
           'Hook and an independent frame census now agree exactly on the '
           'floored regions, on a settled state. REAL CONTRAST (N-3, N-4): the '
           'grey fade is retired — per-tier distance windows end at the tiers\' '
           'own analytic 3:1 crossings in the canvas\'s arithmetic (2480 / 2550 '
           '/ 2240), the last 350 units a screen-door dissolution at full alpha, '
           'so no fragment paints below the floor at any distance; tier alphas '
           're-derived for encoded-space blending (0.80 / 0.88 / 0.92), line '
           'weight ×1.8, the dome spike strengthened at exactly h = 0. '
           'ORIENTATION (O-1..O-4): the hint cap is a class over both views '
           '(director/seed 124, camera 150; a 9,016-cell pairwise census reads '
           'zero overlap, min clearance 17px; live phone clearance 31.2px where '
           'the overlap measured 564px²); ONE horizon (the band peaks at the '
           'ground plane\'s own vanishing line); the origin locatable from '
           'every director frame — the portrait framing law (horizontal field '
           'held at the landscape 52°) plus the origin edge marker on the '
           'frame\'s edge along the true bearing; gizmo letters on dark plates '
           'with the gizmo eye at 5.6, measured in the phone crop (glyph '
           'clusters x 13–25 / 83–95 / 157–163 in the 184px frame, none '
           'clipped, none merged). RECORDS (E-1, E-2): "one scene" corrected '
           'everywhere (one world scene + the gizmo\'s mini-scene, three '
           'passes; the migration record carries the addendum and the N-1 '
           'erratum superseding its §5 figures); the CSS-era geometry caps '
           'gain a dated WebGL rider (grid plane 12000×12000, dome radius '
           '9000 — single-draw shader surfaces, the named exception). CENSUS '
           '(page-true, p95/p99): phone director 4.31/3.83/5.73, phone camera '
           'horizon 4.06 and centre 7.16, desktop director all cells ≥ 4.86 — '
           'every briefed cell clears 3:1 at p95 and p99; the one residual, '
           'printed in the record: the camera view\'s ground band at p95 '
           '(1.11 phone / 1.75 desktop — the near squares\' interiors; its '
           'lines read 3.51/5.26 at p99). Class P (builder seat) front 60, '
           'weakest = control discoverability; the owner\'s phone pass '
           'remains the certification gate and is still owed. Migration '
           'harness 85/0 with baselines unchanged, fix-8 harness 15/0, seed '
           'regenerated and proven. stage.html 167,434 B, sha 05442f34. Full '
           'record: stage3d-fix8-record.md in the gate records folder.'],
    ['42', 'Fix round 9 — Verify W3\'s two minor roots cured at class level on the '
           'migrated WebGL build. ROOT A (unguarded window lower bound): the elapsed '
           'census counts 12 subtractions of performance.now() in the inline script; '
           'the five behavioural window tests (tap test, one-hand-zoom arming, camera '
           'chain, general chain, corner swap) each gain the non-negative leg '
           '(elapsed >= 0 && elapsed < WINDOW), so a backwards clock satisfies no '
           'window; the frame loop\'s step is clamped to [0, 0.05] with the monotonic '
           'fallback, provably identical on monotonic clocks; the >= 200ms hold-proof '
           'sibling already failed safe (a backwards step can only delay it) and '
           'stands unchanged; the hint fade\'s three 6000ms setTimeout calls are '
           'duration timers, named non-comparisons. Regression: the fix-9 harness\'s '
           'stub-clock cells replay W3\'s five demonstrations — a -60s jump at each '
           'site fires nothing — plus forward controls at each site and the '
           'hold-proof/loop cells (44/0). ROOT B (panel-open chrome clearance): the '
           'open settings panel is fenced on both edges in the narrow domain '
           '(<= 560px) — top 94px (the two-row viewbar\'s measured bottom bound 86 '
           '+ 8 margin) and max-height caps vh-194 coarse / vh-154 fine, so its '
           'bottom never passes the hint MORE tap\'s top edge (screen - 92 coarse / '
           '- 52 fine) by less than 8px; the wide domain is untouched. Live census '
           'on the real GL stack, 24 cells (8 sizes x director/camera/seed, panel '
           'open): control overlaps 16 before -> 0 after; panel markup '
           'byte-identical (sha 104de636 both builds) — content and its 29 words '
           'unchanged, hint shorts 8/8/6 unchanged; panel bottom clearance >= 80px '
           'in every cell (the >= 56px law preserved); the panel still overlays '
           'non-tappable displays (PiP, gizmo, chips) — the accepted modal line, '
           'stated in the record. Migration harness 85/0 with baselines unchanged, '
           'fix-8 harness 15/0, seed regenerated and proven (seed - stage = 294 '
           'bytes, byte-equal after excising the flag block). stage.html 168,994 B, '
           'sha 2aedd01b. Full record: stage3d-fix9-record.md in the gate records '
           'folder.'],
    ['43', 'Fix round 10 — Verify W4 Seat 2\'s D-1 cured at class level: fix '
           'round 9 fenced the settings panel\'s bottom only in the narrow '
           'domain, and in the mid-width band 561-630px (coarse, panel open) '
           'the wide caps let its bottom cross the hint MORE tap\'s band and '
           'cover the button and the top of its glyphs; the fine domain '
           'crossed too at cap-bound and content-bound heights (measured in '
           'the round\'s own before-sweep, 98 overlap cells across both '
           'pointer domains). The fence is now ONE rule at every width: '
           'max-height = 100vh - top - reserve, the reserve set by the '
           'pointer alone (100px coarse, 60px fine — the MORE band 92/52 '
           'plus the standing 8px margin), carried in all four cascade '
           'domains (base 126 = 66 + 60, narrow 154 = 94 + 60, coarse 166 = '
           '66 + 100, coarse-and-narrow 194 = 94 + 100); only the two wide '
           'constants moved (90 -> 126 fine, 146 -> 166 coarse). Live '
           'width-sweep census on the real GL stack (widths 320-1024, '
           'steps <= 10px through 540-700 and <= 5px across 555-640, four '
           'coarse and three fine heights, director/camera/seed, panel '
           'open): 1,653 cells, every cell measured, control overlaps 0, '
           'minimum MORE clearance exactly 8px in all four domains; '
           'before-sweep 926 cells with the defect band reproduced in both '
           'pointer domains. Panel content unchanged (29 words, AIDS 6, '
           'hint 8/8/6). Suites: fix-10 harness 17/0, fix-9 44/0, fix-8 '
           '15/0, migration 85/0 — two standing expectations that asserted '
           'the defective 146px constant re-pointed to 166px with the '
           'supersession named (the fix-9 harness\'s B1 cell and the '
           'convergence-fix2 D1 census entry). Seed regenerated and proven '
           'on the cured bytes (stage.html 169,877 B, sha 86c784b1). The '
           'fix-9 record\'s disclosed-edge sentence is corrected in the '
           'fix-10 record\'s section 1. Full record: '
           'stage3d-fix10-record.md in the gate records folder.'],
]

A(Paragraph('HYDRATION LOG', styles['h1']))
log_rows = [['Pass', 'What the pass did']]
for e in HYDRATION_LOG:
    log_rows.append([e[0], e[1]])
A(table_flowable(log_rows, [52, CONTENT_W - 52]))

BUF = io.BytesIO()
doc = BaseDocTemplate(BUF, pagesize=A4,
                      leftMargin=MARGIN, rightMargin=MARGIN,
                      topMargin=14 * mm, bottomMargin=16 * mm,
                      title='STAGE3D - Version One Plan', author='stage3d branch')
frame = Frame(MARGIN, 16 * mm, CONTENT_W, PAGE_H - 30 * mm, id='main')
doc.addPageTemplates([PageTemplate(id='page', frames=[frame], onPage=footer)])
doc.build(story)
sys.stdout.buffer.write(BUF.getvalue())
