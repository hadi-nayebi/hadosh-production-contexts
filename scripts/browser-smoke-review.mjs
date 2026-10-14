import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

export async function verifyVisualReview({ page, base, dev, sourceRoot }) {
  await page.goto(base);
  await page.getByRole("heading", { name: "Who Holds the Keys?", exact: true }).waitFor();
  const olderCommit = "7c262f4a6d3fa260fc50fc3df4f5a8e38d8de077";
  const olderKey = `canvas-song-review-v1:${olderCommit}`;
  const olderRaw = JSON.stringify({
    schema: "canvas-song-review-v1",
    source: { commit: olderCommit },
    note: "preserve this older proposal",
  });
  await page.evaluate(({ key, raw }) => localStorage.setItem(key, raw), {
    key: olderKey,
    raw: olderRaw,
  });
  await page.reload();
  await page.getByRole("heading", { name: "Earlier local reviews are preserved" }).waitFor();
  const [olderDownload] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: `Export review from ${olderCommit.slice(0, 12)}` }).click(),
  ]);
  const olderPath = path.join(sourceRoot, ".origin", `older-review-${dev ? "dev" : "prod"}.json`);
  await olderDownload.saveAs(olderPath);
  assert.equal(fs.readFileSync(olderPath, "utf8"), olderRaw);
  assert.equal(await page.evaluate((key) => localStorage.getItem(key), olderKey), olderRaw);
  await page.getByText("Copy Suno fields · provisional candidate", { exact: true }).click();
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"], { origin: base });
  for (const label of ["title", "style", "exclusions", "lyrics"]) {
    const field = page.getByLabel(`Suno ${label}`);
    const value = await field.inputValue();
    await page.getByRole("button", { name: `Copy ${label}`, exact: true }).click();
    await page
      .getByText(
        `${label[0].toUpperCase() + label.slice(1)} copied exactly from the pinned candidate.`,
        { exact: true },
      )
      .waitFor();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), value);
  }
  for (const width of [360, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      false,
    );
  }
  await page.getByText("Copy Suno fields · provisional candidate", { exact: true }).click();
  const chapters = page.getByRole("navigation", { name: "Story chapters" });
  assert.equal(await chapters.getByRole("button").count(), 6);
  assert.match(
    await chapters.textContent(),
    /Invitation.*doorway.*actions.*harness.*survives.*diagram/s,
  );
  await page.getByText("No audio generated or attached", { exact: true }).waitFor();
  await chapters.getByRole("button", { name: /04 Show the harness/ }).click();
  const lyrics = page.getByLabel("Proposed lyrics");
  assert.match(await lyrics.inputValue(), /L-L-M/);
  await lyrics.fill("Browser fixture proposal: keep the gate visible.");
  await page
    .getByLabel("Why should the words or motion change?")
    .fill("Let the tool result return before the next verse.");
  await page.getByLabel("Review direction").selectOption("revise");
  await page.reload();
  await chapters.getByRole("button", { name: /04 Show the harness/ }).click();
  assert.equal(await lyrics.inputValue(), "Browser fixture proposal: keep the gate visible.");
  await page.getByText("Compare with pinned Departments wording", { exact: true }).click();
  assert.match(await page.locator(".review-original pre").first().textContent(), /Agentic AI/);
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Export review proposal" }).click(),
  ]);
  const output = path.join(sourceRoot, ".origin", `review-${dev ? "dev" : "prod"}.json`);
  await download.saveAs(output);
  const packet = JSON.parse(fs.readFileSync(output, "utf8"));
  assert.match(packet.source.commit, /^[0-9a-f]{40}$/);
  assert.equal(packet.changedSections, 1);
  assert.match(packet.baseline.find((s) => s.sectionId === "harness").lyrics, /L-L-M/);
  await page.getByRole("button", { name: "Restore this section from source" }).click();
  assert.match(await lyrics.inputValue(), /L-L-M/);
  const file = page.getByLabel("Import review proposal");
  await file.setInputFiles(output);
  await page
    .getByText("Local proposal imported. Canonical content is unchanged.", { exact: true })
    .waitFor();
  assert.equal(await lyrics.inputValue(), "Browser fixture proposal: keep the gate visible.");
  await file.setInputFiles({
    name: "foreign.json",
    mimeType: "application/json",
    buffer: Buffer.from(
      JSON.stringify({ ...packet, source: { ...packet.source, commit: "other" } }),
    ),
  });
  await page.getByText(/This proposal belongs to a different Departments snapshot/).waitFor();
  assert.equal(await lyrics.inputValue(), "Browser fixture proposal: keep the gate visible.");
  await page.getByRole("button", { name: "Restore this section from source" }).click();
  await page.getByText("Compare with pinned Departments wording", { exact: true }).click();
  // Keyboard reachability is checked on the actual paired editing surface.
  await lyrics.focus();
  await page.keyboard.press("Tab");
  assert.equal(
    await page.getByLabel("Proposed Remotion scene").evaluate((e) => e === document.activeElement),
    true,
  );
  const evidence = path.join(sourceRoot, ".origin", "visual-evidence");
  fs.mkdirSync(evidence, { recursive: true });
  for (const width of [360, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const chapter of [/04 Show the harness/, /06 Make the diagram/]) {
      await chapters.getByRole("button", { name: chapter }).click();
      await page.evaluate(async () => {
        document.activeElement?.blur();
        window.scrollTo(0, 0);
        document.querySelectorAll("textarea").forEach((e) => {
          e.scrollTop = 0;
        });
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      });
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
        false,
      );
      for (const name of ["Open Origin admin", "Give feedback"]) {
        const box = await page.getByRole("button", { name, exact: true }).boundingBox();
        assert.ok(box && box.y + box.height <= 76);
      }
      if (!dev)
        await page.screenshot({
          path: path.join(
            evidence,
            `visual-review-${chapter.source.startsWith("04") ? "harness" : "toaster"}-${width}.png`,
          ),
          fullPage: true,
        });
    }
  }
  console.log(
    `PASS ${dev ? "Development" : "Production"}: pinned content, paired lyric/scene edits, local reload, source comparison, proposal export/import/rejection, keyboard focus, 360/1440 layout`,
  );
}
