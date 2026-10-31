import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => { await page.goto("/"); });

test("no horizontal scroll", async ({ page }) => {
  const o = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(o).toBeLessThanOrEqual(1);
});

test("hero, six services and ordering links", async ({ page }) => {
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("article.svc")).toHaveCount(6);
  const wa = page.locator("article.svc a[href^='https://wa.me/']").first();
  await expect(wa).toHaveAttribute("rel", /noopener/);
  await expect(page.locator("a[href^='tel:']").first()).toBeVisible();
});

test("form rejects invalid phone", async ({ page }) => {
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.getByLabel("الاسم").fill("أحمد");
  await page.getByLabel("رقم الجوال").fill("123");
  await page.getByRole("button", { name: /أرسل الطلب/ }).click();
  await expect(page.getByRole("alert")).toContainText("رقم جوال");
});

test("mobile menu opens and sticky bar shows", async ({ page, viewport }) => {
  test.skip(viewport.width > 900, "mobile and tablet only");
  await page.getByRole("button", { name: "القائمة" }).click();
  await expect(page.getByRole("link", { name: "خدماتنا" }).first()).toBeVisible();
  if (viewport.width <= 800) await expect(page.locator(".sticky-cta")).toBeVisible();
});
