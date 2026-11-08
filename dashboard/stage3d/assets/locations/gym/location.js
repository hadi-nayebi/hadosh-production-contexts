/* THE GYM — a WORKSHOP-tier test location of the Paper Stage (the assembly build, 2026-11-08).
   This file is charge F's assembly proof: a location that exists ONLY as data + this file.
   The HTML carries no gym word anywhere — the drop-down offers it because this file stands
   in the registry, and the assembler builds it from these numbers alone. Its props stand
   defined and it holds NO screenplay, so the checker's own tier rule reads it WORKSHOP.
   Retiring it is deleting this folder and its one script tag — nothing else knows it exists. */
window.STAGE_LOCATIONS = window.STAGE_LOCATIONS || {};
window.STAGE_LOCATIONS.gym = (function () {
  /* @reason [ASSEMBLY] The visibility rule string (plan §4.1): every prop's record carries it as DATA — the same string the platform's BOOK_VIS_RULE constant carries in the HTML, and the checker compares by value. It is defined here because this file evaluates before the HTML's script: a location's data must be whole on its own. */
  var BOOK_VIS_RULE = 'shown iff the stretch prop-state shows it and no active event hides it, or any active event shows it';
  /* @reason [ASSEMBLY] The gym's pose table — one pose: the home the room is entered at. */
  var POSES_GYM = [
    { id: 'gym-home', name: 'Gym home', pose: { x: 430, z: 393, heading: -180, tilt: -2, focal: 500, lift: 40 }, maturity: 'defined', birth: { source: 'record', ref: 'the assembly build proof (charge F)', at: '2026-11-08' }, history: [] }
  ];
  /* @reason [ASSEMBLY] The gym's props book — a floor, a crate, a sun and the lent camera, each fully written (nothing below defined), so the location's open count reads zero and only its missing screenplay keeps it at the WORKSHOP tier. */
  var PROPS_GYM = [
    { id: 'gym-floor', name: 'Gym floor', kind: 'shell', location: 'gym', geometry: { form: 'box', size: [400, 10, 400], seat: [430, -5, 53] }, material: { class: 'dyed-paper', colour: '#9AA5A0', opacity: 1, roughness: 0.9, bornTransparent: false }, texture: { kind: 'paper-v2', tileScale: 368, bump: 0.5 }, presence: "the gym's ground — a plain paper slab", capabilities: { moveDriver: 'none', breakDriver: 'none', animateDrivers: [], special: [] }, visibility: { baseShown: true, rule: BOOK_VIS_RULE }, data: {}, maturity: 'defined', birth: { source: 'record', ref: 'the assembly build proof (charge F)', at: '2026-11-08' }, history: [] },
    { id: 'gym-crate', name: 'Gym crate', kind: 'dressing', location: 'gym', geometry: { form: 'box', size: [60, 60, 60], seat: [490, 30, 13] }, material: { class: 'dyed-paper', colour: '#C8A668', opacity: 1, roughness: 0.9, bornTransparent: false }, texture: { kind: 'paper-v2', tileScale: 368, bump: 0.5 }, presence: 'one paper crate standing on the floor — the proof the assembler builds dressing from data', capabilities: { moveDriver: 'none', breakDriver: 'none', animateDrivers: [], special: [] }, visibility: { baseShown: true, rule: BOOK_VIS_RULE }, data: {}, maturity: 'defined', birth: { source: 'record', ref: 'the assembly build proof (charge F)', at: '2026-11-08' }, history: [] },
    { id: 'gym-sun', name: 'Gym sun', kind: 'light', location: 'gym', geometry: { form: 'directional', size: 'none', seat: [630, 400, 153] }, material: { class: 'emissive-lens', colour: '#FFF2D8', opacity: 1, roughness: 0, bornTransparent: false }, texture: { kind: 'none', tileScale: 368, bump: 'none' }, presence: "the gym's one light — the platform sun re-priced by this location's room record", capabilities: { moveDriver: 'light-driver', breakDriver: 'none', animateDrivers: ['light-driver'], special: ['channel'] }, visibility: { baseShown: true, rule: BOOK_VIS_RULE }, data: { kind: 'directional', colour: '#FFF2D8', intensity: 1.2 }, maturity: 'defined', birth: { source: 'record', ref: 'the assembly build proof (charge F)', at: '2026-11-08' }, history: [] },
    { id: 'camera', name: 'Camera', kind: 'camera', location: 'gym', geometry: { form: 'paper-camera', size: { eyeHeight: 34 }, seat: 'lent to the location — seated by its pose table' }, material: { class: 'dyed-paper', colour: '#38260F', opacity: 1, roughness: 0.9, bornTransparent: false }, texture: { kind: 'none', tileScale: 368, bump: 'none' }, presence: "the studio's camera, lent to the gym as it is lent to every location", capabilities: { moveDriver: 'camera-driver', breakDriver: 'none', animateDrivers: ['camera-driver'], special: ['captures'] }, visibility: { baseShown: true, rule: BOOK_VIS_RULE }, data: { poseTable: POSES_GYM, captures: 'PHOTO / REC at 1280x720, 30 fps (the CAPTURE record)' }, maturity: 'defined', birth: { source: 'record', ref: 'the assembly build proof (charge F)', at: '2026-11-08' }, history: [] }
  ];
  /* @reason [ASSEMBLY] The gym's location object — no screenplays: the tier rule reads WORKSHOP. */
  var LOC_GYM = { id: 'gym', name: 'The gym', bounds: { x: [230, 630], y: [0, 300], z: [-147, 253] }, props: PROPS_GYM, screenplays: [], baseRig: 'applySceneState', reason: 'a bare paper room with a crate — the assembly proof location', maturity: 'defined', birth: { source: 'record', ref: 'the assembly build proof (charge F)', at: '2026-11-08' }, history: [] };
  /* @reason [ASSEMBLY] The gym's room record — no deck (the deck range stands empty, x0 past x1, so no point ever reads deck height), no spots, its own base prices and generous camera clamps. */
  var GYM_ROOM = { floorY: 0, deckY: 0, deckX0: 1, deckX1: 0, deckZ0: 1, deckZ1: 0, centreX: 430, centreY: 100, centreZ: 53, camMinX: -170, camMaxX: 1030, camMinZ: -547, camMaxZ: 653, amb: 0.9, sun: 1.2, spots: {} };
  var GYM_CAM_HOME = { x: 430, z: 393, heading: -180, tilt: -2, focal: 500, lift: 40 };
  var GYM_DIR_HOME = { yaw: 0, pitch: -8, roll: 0, panX: 0, panY: 0, dolly: 60 };
  var GYM_SEED_STATE = { dir: { yaw: 0, pitch: -8, roll: 0, panX: 0, panY: 0, dolly: 60, tYaw: 0, tPitch: -8, tRoll: 0, tPanX: 0, tPanY: 0, tDolly: 60 }, cam: { x: 430, z: 393, heading: -180, tilt: -2, roll: 0, focal: 500, tX: 430, tZ: 393, tHeading: -180, tTilt: -2, tRoll: 0, tFocal: 500, camY: 0, tCamY: 0, lift: 40, tLift: 40 }, camPresent: true, mainRole: 'director', scene: 'gym' };
  /* @reason [ASSEMBLY] The gym's assembly table — its placements stand inline (the gym holds no stretch to read them from). */
  var ASSEMBLY = { standingScene: null, placements: [
    { prop: 'gym-floor', id: 'pl-gym-floor', mode: 'single', seat: [430, -5, 53], overrides: {} },
    { prop: 'gym-crate', id: 'pl-gym-crate', mode: 'single', seat: [490, 30, 13], overrides: {} },
    { prop: 'camera', id: 'pl-camera', mode: 'single', seat: 'the pose named in propState.camera', overrides: {} }
  ], jitter: {}, print: { 'gym-floor': 'floor' }, lightKeys: {} };
  return { id: 'gym', scene: 'gym', name: LOC_GYM.name, faceName: 'THE GYM', location: LOC_GYM, productions: [], intake: [], verifyRecords: [], room: GYM_ROOM, spots: {}, camHome: GYM_CAM_HOME, dirHome: GYM_DIR_HOME, filmHome: null, seedState: GYM_SEED_STATE, ball: null, aim: { x: 430, z: 53, y: 0 }, ringY: 0.5, assembly: ASSEMBLY };
})();
