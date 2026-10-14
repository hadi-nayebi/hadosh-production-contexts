import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

export async function verifySongStudio({ page, base, dev, sourceRoot }) {
  await page.goto(base);
  await page.getByRole("button", { name: "Production stages", exact: true }).click();
  await page.getByRole("heading", { name: /Make the idea/ }).waitFor();
  assert.equal(
    await page
      .getByRole("navigation", { name: "Song production stages" })
      .getByRole("button")
      .count(),
    6,
  );
  await page.getByRole("button", { name: "Load superseded toaster example" }).click();
  await page.getByRole("button", { name: "Approve Context", exact: true }).click();
  const nav = page.getByRole("navigation", { name: "Song production stages" });
  await nav.getByRole("button", { name: /Lyrics/ }).click();
  await page.getByRole("button", { name: "Approve Lyrics", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "Production stages", exact: true }).click();
  await page.getByText("Autosaved in this browser", { exact: false }).waitFor();
  assert.match(await nav.getByRole("button", { name: /Lyrics/ }).textContent(), /APPROVED/);
  await nav.getByRole("button", { name: /Music/ }).click();
  const wav = Buffer.alloc(44 + 8000 * 2 * 8);
  wav.write("RIFF", 0);
  wav.writeUInt32LE(wav.length - 8, 4);
  wav.write("WAVEfmt ", 8);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(8000, 24);
  wav.writeUInt32LE(16000, 28);
  wav.writeUInt16LE(2, 32);
  wav.writeUInt16LE(16, 34);
  wav.write("data", 36);
  wav.writeUInt32LE(wav.length - 44, 40);
  await page
    .locator('input[type=file][accept="audio/*"]')
    .setInputFiles({ name: "fixture.wav", mimeType: "audio/wav", buffer: wav });
  await page.getByRole("button", { name: "Select this take" }).click();
  await page.getByRole("button", { name: "Approve Music", exact: true }).click();
  await nav.getByRole("button", { name: /Timing/ }).click();
  await page.waitForFunction(() => document.querySelector("audio")?.readyState >= 1, null, {
    timeout: 15000,
  });
  await page.getByRole("button", { name: "Create provisional timing" }).click();
  await page.getByRole("button", { name: "Approve Timing", exact: true }).click();
  await nav.getByRole("button", { name: /Scenes/ }).click();
  await page.getByRole("button", { name: "Add missing scene cards" }).click();
  for (const field of await page.getByLabel("Visual idea / on-screen detail").all())
    await field.fill(
      "Show the user keeping their context while changing the intelligence supplier.",
    );
  await page.getByRole("button", { name: "Approve Scenes", exact: true }).click();
  await nav.getByRole("button", { name: /Review/ }).click();
  await page.locator("audio").evaluate(async (a) => {
    a.currentTime = 2.5;
    await a.play();
  });
  await page
    .getByText("So why does your work disappear with the ghost?", { exact: true })
    .waitFor();
  await page.locator("audio").evaluate((a) => a.pause());
  for (const c of await page.getByRole("checkbox").all()) await c.check();
  await page.getByRole("button", { name: "Approve Review", exact: true }).click();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export HTML with audio" }).click();
  const download = await downloadPromise;
  const exportPath = path.join(sourceRoot, ".origin", `song-${dev ? "dev" : "prod"}-fixture.html`);
  await download.saveAs(exportPath);
  const html = fs.readFileSync(exportPath, "utf8");
  assert.ok(html.includes("data:audio/wav;base64,"));
  assert.ok(!html.includes("blob:"));
  const playback = await page.context().newPage();
  await playback.goto(`file://${exportPath}`);
  await playback.locator("#audio").evaluate((a) => {
    a.currentTime = 2.5;
  });
  await playback
    .getByText("So why does your work disappear with the ghost?", { exact: true })
    .waitFor();
  await playback.close();
  if (!dev) {
    const evidence = path.join(sourceRoot, ".origin", "visual-evidence");
    fs.mkdirSync(evidence, { recursive: true });
    for (let i = 0; i < 6; i++) {
      await nav.getByRole("button").nth(i).click();
      for (const width of [360, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.evaluate(() => document.activeElement?.blur());
        for (const name of ["Open Origin admin", "Give feedback"]) {
          const control = await page.getByRole("button", { name, exact: true }).boundingBox();
          assert.ok(
            control && control.y + control.height <= 76,
            `${name} must remain in reserved header`,
          );
        }

        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
          false,
          `song ${i} ${width} overflow`,
        );
        await page.screenshot({
          path: path.join(evidence, `song-stage${i + 1}-${width}.png`),
          fullPage: true,
        });
      }
    }
  }
  await nav.getByRole("button", { name: /Context/ }).click();
  await page.getByLabel("One central message").fill("Revised concept");
  assert.match(await nav.getByRole("button", { name: /Lyrics/ }).textContent(), /DRAFT/);
  assert.match(await nav.getByRole("button", { name: /Review/ }).textContent(), /DRAFT/);
  console.log(
    `PASS ${dev ? "Development" : "Production"}: song approvals, local audio, lyric timing, scene playback, portable HTML, revision invalidation`,
  );
}
