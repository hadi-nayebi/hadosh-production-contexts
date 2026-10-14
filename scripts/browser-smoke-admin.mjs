import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { attachMaterial } from "../.codex/plugins/_engagement-core/lib/materials.mjs";
import {
  askFeedbackQuestion,
  linkFeedbackWork,
  listFeedback,
  transitionFeedback,
} from "../.codex/plugins/contextual-feedback/lib/service.mjs";

export async function verifyOriginAdmin({ page, root, record, dev, errors }) {
  await page.getByRole("button", { name: "Open Origin admin" }).click();
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    const brand = await page.getByRole("banner", { name: "Origin" }).boundingBox();
    const back = await page.getByRole("button", { name: "← Canvas" }).boundingBox();
    assert.ok(brand && back, "Brand and Canvas return control must be visible");
    assert.ok(
      back.y >= brand.y + brand.height,
      `Admin Canvas return control must clear the fixed brand at ${width}px; brand=${JSON.stringify(brand)} back=${JSON.stringify(back)}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("tab", { name: "Plugins" }).click();
  await page.getByRole("heading", { name: "Two plugins show how Origin grows." }).waitFor();
  await page.getByRole("tab", { name: "Wiki" }).click();
  await page.locator(".admin-link").first().click();
  await page.locator(".admin-article h1").waitFor();

  await page.getByRole("button", { name: /^Give feedback/ }).click();
  await page.getByRole("button", { name: "Pause dashboard channel", exact: true }).click();
  await page.getByRole("button", { name: "Resume dashboard channel", exact: true }).waitFor();
  await page.getByRole("button", { name: "Resume dashboard channel", exact: true }).click();
  await page.getByRole("button", { name: "Pause dashboard channel", exact: true }).waitFor();

  if (dev) await verifyPrivateWorktreeDoesNotReload(page, root);

  transitionFeedback(root, record.id, "in_progress");
  askFeedbackQuestion(root, record.id, "Which bounded result should be verified?");
  await page.getByLabel("Your answer").fill("The current Canvas feedback lifecycle.");
  await page.getByRole("button", { name: "Send answer" }).click();
  await page.getByText("Answer saved and wake queued.").waitFor();
  assert.equal(listFeedback(root).at(-1).status, "open");

  const card = page.locator(".feedback-record").filter({ hasText: record.body }).first();
  await card.getByLabel("Attach a file to this thread (up to 20 MiB)").setInputFiles({
    name: "owner-notes.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("Owner file evidence"),
  });
  await card.getByText("File saved and wake queued.").waitFor();
  attachMaterial(root, record.id, "agent-result.txt", Buffer.from("Verified result material"), {
    role: "agent",
  });
  await card.getByRole("link", { name: /agent-result.txt/ }).waitFor();
  transitionFeedback(root, record.id, "in_progress");
  linkFeedbackWork(root, record.id, "pull-request:https://github.com/example/canvas/pull/42");
  transitionFeedback(root, record.id, "ready_for_review", {
    verification: "The browser verified Canvas context, answer and lifecycle state.",
  });
  await card.getByLabel("Reason to reopen").fill("Please verify the returned material as well.");
  await card.getByRole("button", { name: "Reopen", exact: true }).click();
  await card.getByText("Reopened and wake queued.").waitFor();
  assert.equal(listFeedback(root).at(-1).status, "open");
  transitionFeedback(root, record.id, "in_progress");
  transitionFeedback(root, record.id, "ready_for_review", {
    verification: "Verified returned material and owner correction with browser evidence.",
  });
  await card.getByRole("button", { name: "Merge PR", exact: true }).click();
  await page.getByText("Pull request merged; acceptance saved and wake queued.").waitFor();
  assert.equal(listFeedback(root).at(-1).status, "resolved");
  assert.equal(
    await page
      .locator(".feedback-panel")
      .evaluate((panel) => panel.scrollWidth > panel.clientWidth),
    false,
    "Feedback panel must not overflow at mobile width",
  );
  assert.deepEqual(errors, []);
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "hidden" });
}

async function verifyPrivateWorktreeDoesNotReload(page, root) {
  let navigations = 0;
  const trackNavigation = (frame) => {
    if (frame === page.mainFrame()) navigations += 1;
  };
  page.on("framenavigated", trackNavigation);
  const draft = "Private worktree creation must not erase this draft.";
  await page.getByLabel("What should change?").fill(draft);
  const nested = path.join(root, ".origin", "worktrees", "watch-probe");
  fs.mkdirSync(nested, { recursive: true });
  fs.cpSync(path.join(root, "tsconfig.json"), path.join(nested, "tsconfig.json"));
  fs.writeFileSync(
    path.join(nested, "index.html"),
    "<!doctype html><title>Worktree preview</title>",
  );
  await new Promise((resolve) => setTimeout(resolve, 1500));
  assert.equal(navigations, 0, "Private worktree creation must not reload the dashboard");
  assert.equal(await page.getByLabel("What should change?").inputValue(), draft);
  page.off("framenavigated", trackNavigation);
}
