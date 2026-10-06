import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

for (const width of [375, 390, 430, 768, 1024, 1440]) {
  test(`layout, navigation and accessibility at ${width}px`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(
      page.getByRole("heading", {
        name: "Distinct by design. Built to perform.",
      }),
    ).toBeVisible();
    await expect(page.locator("[data-nextjs-dialog]")).toHaveCount(0);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    for (const id of ["work", "capabilities", "process", "studio", "contact"]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
    expect(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.every(
            (i) =>
              (i as HTMLImageElement).complete &&
              (i as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    ).toBe(true);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: `artifacts/viewport-${width}.png`,
      animations: "disabled",
    });
    await page.screenshot({
      path: `artifacts/full-${width}.png`,
      fullPage: true,
      animations: "disabled",
    });
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("hero, capabilities, engineering stack and concept routes work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.getByRole("button", { name: "Structure", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Structure", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".hero-art")).toHaveClass(/show-structure/);
  await page.getByRole("button", { name: "Design", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Design", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  for (const label of [
    "02 Design & experience",
    "03 Development & systems",
    "04 AI & intelligent tools",
    "05 Launch & evolution",
  ]) {
    const trigger = page.getByRole("button", { name: label });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("region", { name: label })).toBeVisible();
  }
  await page.locator(".stack-layer").nth(2).locator("summary").click();
  await expect(page.locator(".stack-layer").nth(2)).toHaveAttribute("open", "");
  for (const [slug, name] of [
    ["forma", "Forma"],
    ["elsewhere", "Elsewhere"],
    ["index", "Index"],
  ]) {
    await page.goto("/");
    await page
      .getByRole("link", { name: `Explore ${name},`, exact: false })
      .click();
    await expect(page).toHaveURL(new RegExp(`/work/${slug}$`));
    await expect(
      page.getByRole("heading", { name: `${name}.`, exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Self-initiated concept · Not a client commission", {
        exact: true,
      }),
    ).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
    await page.screenshot({
      path: `artifacts/study-${slug}.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 375, height: 844 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(375);
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  await page.goto("/work/does-not-exist");
  await expect(
    page.getByRole("heading", { name: "This page hasn’t been built." }),
  ).toBeVisible();
});

test("mobile menu is keyboard navigable, traps focus, and closes on navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeVisible();
  await expect(page.getByRole("link", { name: "01 Work" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "03 Process" })
    .click();
  await expect(page).toHaveURL(/#process$/);
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("project brief validates, prepares a correct email, copies and downloads", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#contact");
  await page
    .getByRole("button", { name: "Tell me about your project" })
    .click();
  await page.getByRole("button", { name: "Prepare project brief" }).click();
  await expect(page.locator(".brief-result")).toHaveCount(0);
  await page.getByLabel("Your name").fill("Alex Example");
  await page.getByLabel("Email address").fill("alex@example.com");
  await page
    .getByLabel("What are you building?")
    .selectOption("Website redesign");
  await page.getByLabel("Investment range").selectOption("$10,000–$25,000");
  await page
    .getByLabel("A little about your project")
    .fill(
      "We want a distinctive architecture website that makes our work easier to explore.",
    );
  await page.getByRole("button", { name: "Prepare project brief" }).click();
  await expect(
    page.getByRole("heading", { name: "Your brief is ready." }),
  ).toBeVisible();
  const href = await page
    .getByRole("link", { name: "Open email app" })
    .getAttribute("href");
  expect(href).toContain("mailto:hudsonmyung@gmail.com?");
  expect(decodeURIComponent(href!)).toContain("Alex Example");
  expect(decodeURIComponent(href!)).toContain("Website redesign");
  await page.getByRole("button", { name: "Copy brief" }).click();
  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    "alex@example.com",
  );
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download brief" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("hudmeta-project-brief.txt");
  expect(await readFile((await download.path())!, "utf8")).toContain(
    "Website redesign",
  );
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  ).toEqual([]);
  await page
    .locator(".enquiry")
    .screenshot({ path: "artifacts/contact-form-mobile.png" });
});

test("reduced motion, metadata and direct contact links", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect(page.locator(".hero-content")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page).toHaveTitle(
    "Hudmeta — Independent Design & Development Studio",
  );
  expect(
    await page.locator('meta[property="og:image"]').getAttribute("content"),
  ).toContain("opengraph-image");
  await expect(
    page.locator('footer a[href="mailto:hudsonmyung@gmail.com"]'),
  ).toBeVisible();
  await expect(page.locator('footer a[href="tel:+19493030376"]')).toBeVisible();
  expect((await page.request.get("/icon.svg")).ok()).toBe(true);
  expect((await page.request.get("/opengraph-image")).ok()).toBe(true);
});
