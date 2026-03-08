import { test, expect } from "@playwright/test";

test.describe("Baemin Connect landing", () => {
  test("핵심 카피와 앱 다운로드 CTA가 보인다", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator(".intro__tit")).toContainText("원할 때, 원하는 만큼");
    await expect(page.locator(".modal__open-btn").first()).toBeVisible();
  });

  test("앱 다운로드 버튼 클릭 시 모달이 열린다", async ({ page }) => {
    await page.goto("/");

    await page.locator(".modal__open-btn").first().click();

    await expect(page.locator("#qr_code.visible")).toBeVisible();
  });
});
