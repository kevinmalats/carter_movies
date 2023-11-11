import { test, expect } from '@playwright/test';
const LOCAL_HOST = "http://localhost:5173"
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('has title', async ({ page }) => {
  await page.goto(LOCAL_HOST);
  const text = await page.getByRole("heading");
  const image = await  page.getByRole("img").first();

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith((CAT_PREFIX_IMAGE_URL))).toBeTruthy()
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/practice/);
});
