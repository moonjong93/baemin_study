import { test, expect } from "@playwright/test";

test.describe("Baemin Connect region search", () => {
  test("지역 검색 입력과 결과 영역이 동작한다", async ({ page }) => {
    await page.goto("/");

    await page.locator("#keyword").fill("신천동");
    await page.keyboard.press("Enter");

    await expect(page.locator(".search-form__message")).toBeVisible();
  });
});
