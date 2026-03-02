const { test, expect } = require('@playwright/test');

test('Google opens and title is correct', async ({ page }) => {
  // Google səhifəsini aç
  await page.goto('https://google.com');

  // Başlığı yoxla
  await expect(page).toHaveTitle(/Google/);
});