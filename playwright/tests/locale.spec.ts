import { test, expect } from "@playwright/test";

test.describe("Baemin Connect locale", () => {
  test("영어 페이지로 이동해도 핵심 CTA가 유지된다", async ({ page }) => {
    await page.goto("/");

    await page.locator(".lang__toggle").click();
    await page.locator('a.lang__link[href="/en"]').click();

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator(".modal__open-btn").first()).toBeVisible();
  });
});
