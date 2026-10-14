import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const script = path.resolve('scripts/render-release.mjs');
function run(args, env = {}) { return spawnSync(process.execPath, [script, ...args], {encoding: 'utf8', env: {...process.env, ...env}}); }
test('help does not require source media, a browser or a renderer', () => {
  const r = run(['--help']); assert.equal(r.status, 0); assert.match(r.stdout, /RELEASE_AUDIO_FILE/);
});
test('unknown mode is rejected before media or output access', () => {
  const r = run(['missing.json', 'unused-output', 'typo']); assert.notEqual(r.status, 0); assert.match(r.stderr, /Usage:/);
});
test('hash mismatch rejects relocated media before rendering or creating output', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'release-cli-test-'));
  try {
    const props = path.join(dir, 'props.json'), audio = path.join(dir, 'audio.wav'), output = path.join(dir, 'out');
    fs.writeFileSync(props, JSON.stringify({scenePlan: {}, annotation: {duration: 3}, playbackSha256: '0'.repeat(64)}));
    fs.writeFileSync(audio, 'deliberately not the selected audio');
    const r = run([props, output], {RELEASE_AUDIO_FILE: audio});
    assert.notEqual(r.status, 0); assert.match(r.stderr, /Native audio hash mismatch/); assert.equal(fs.existsSync(output), false);
    const beyond = run([props, output], {RELEASE_SAMPLE_START_SECONDS: '3'});
    assert.notEqual(beyond.status, 0); assert.match(beyond.stderr, /before annotation end/);
  } finally { fs.rmSync(dir, {recursive: true}); }
});
