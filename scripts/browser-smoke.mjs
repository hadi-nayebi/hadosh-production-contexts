#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { startOriginServer } from "../server/index.mjs";
import {
  listFeedback,
  reviewFeedbackMutation,
} from "../.codex/plugins/contextual-feedback/lib/service.mjs";
import { verifyVisualReview } from "./browser-smoke-review.mjs";
import { verifySongStudio } from "./browser-smoke-song.mjs";
import { verifyOriginAdmin } from "./browser-smoke-admin.mjs";

// Real browser coverage of the normal Vite path and built dashboard. Runtime
// data stays in an isolated clone-local fixture; no Codex wake is delivered.
const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
fs.mkdirSync(path.join(sourceRoot, ".origin"), { recursive: true });
const root = fs.mkdtempSync(path.join(sourceRoot, ".origin", "browser-smoke-"));
let browser;
let server;
try {
  for (const name of ["index.html", "src", "docs", "vite.config.ts", "tsconfig.json", "dist"]) {
    fs.cpSync(path.join(sourceRoot, name), path.join(root, name), {
      recursive: true,
    });
  }
  for (const plugin of ["contextual-feedback", "telegram-engagement"]) {
    const target = path.join(root, ".codex", "plugins", plugin);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.cpSync(path.join(sourceRoot, ".codex", "plugins", plugin), target, {
      recursive: true,
    });
  }
  fs.symlinkSync(
    path.join(sourceRoot, "node_modules"),
    path.join(root, "node_modules"),
    "junction",
  );
  browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_EXECUTABLE || undefined,
  });
  for (const dev of [true, false]) {
    server = await startOriginServer({
      root,
      dev,
      port: 0,
      deliverWakes: false,
      mergePullRequest(_repositoryRoot, feedbackRoot, id, expectedVersion) {
        return reviewFeedbackMutation(feedbackRoot, id, "resolved", {
          expectedVersion,
          acceptance: "Browser fixture confirmed GitHub PR #42 was merged.",
        });
      },
    });
    const base = `http://127.0.0.1:${server.address().port}`;
    const browserContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page = await browserContext.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        /content security policy|refused|preamble/i.test(message.text())
      ) {
        errors.push(message.text());
      }
    });

    await verifyVisualReview({ page, base, dev, sourceRoot });
    await verifySongStudio({ page, base, dev, sourceRoot });
    await page.goto(`${base}/comic`);
    await page
      .getByRole("heading", {
        name: "Turn the source audio into editable production components.",
      })
      .waitFor({ timeout: 10000 })
      .catch(async (error) => {
        console.error({
          dev,
          url: page.url(),
          errors,
          body: await page.locator("body").innerText(),
        });
        throw error;
      });
    assert.equal(await page.getByRole("tab").count(), 6);
    await page.getByRole("button", { name: "Load demo components" }).click();
    const firstTranscript = page.getByRole("textbox", { name: "Editable transcript" }).first();
    await firstTranscript.waitFor();
    assert.equal(
      await firstTranscript.inputValue(),
      "The performers introduce the first character.",
    );
    await page.getByRole("tab", { name: /Identity/ }).click();
    await page.getByRole("heading", { name: "Component identity" }).waitFor();
    await page.getByRole("tab", { name: /Source/ }).click();
    await firstTranscript.waitFor();
    assert.equal(
      await firstTranscript.inputValue(),
      "The performers introduce the first character.",
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      false,
      "Canvas production surface must not overflow at mobile width",
    );
    if (!dev) {
      await page.locator(".canvas-toast").waitFor({ state: "hidden" });
      const evidenceRoot = path.join(sourceRoot, ".origin", "visual-evidence");
      fs.mkdirSync(evidenceRoot, { recursive: true });
      for (const width of [360, 412, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.evaluate(() => {
          window.scrollTo(0, 0);
          if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
        });
        await page.evaluate(
          () =>
            new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
        );
        await page.screenshot({
          path: path.join(evidenceRoot, `canvas-stage1-${width}.png`),
          fullPage: true,
        });
      }
      await page.setViewportSize({ width: 390, height: 844 });
    }

    await page.getByRole("button", { name: "Give feedback" }).click();
    await page
      .getByLabel("What should change?")
      .fill(`Verify ${dev ? "development" : "production"} Canvas feedback flow`);
    await page.getByRole("button", { name: "Save feedback", exact: true }).click();
    await page.getByText(/Saved.*terminal wake.*pending/).waitFor();
    await page.keyboard.press("Escape");
    await page.getByRole("dialog").waitFor({ state: "hidden" });

    const record = listFeedback(root).at(-1);
    assert.ok(record, "Canvas feedback must create a durable contextual-feedback record");
    assert.equal(record.pagePath, "/comic");
    assert.equal(record.pageLabel, "Canvas / Production dashboard");

    await verifyOriginAdmin({ page, root, record, dev, errors });
    await browserContext.close();
    await new Promise((resolve) => server.close(resolve));
    server = null;
    console.log(
      `PASS ${dev ? "Development" : "Production"}: Canvas Stage 1, Origin Admin, durable feedback, answer, bidirectional materials, PR merge acceptance and mobile width`,
    );
  }
} finally {
  await browser?.close();
  if (server) await new Promise((resolve) => server.close(resolve));
  fs.rmSync(root, { recursive: true, force: true });
}
