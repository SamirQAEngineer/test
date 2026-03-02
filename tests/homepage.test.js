const { test, expect } = require('@playwright/test');

test('WebPageTest.org saytı performans testi', async ({ page }) => {
  // 1. WebPageTest.org saytını açırıq
  await page.goto('https://www.webpagetest.org/');

  // 2. Saytın başlığını yoxlayaq
  const title = await page.title();
  console.log('Sayt başlığı: ', title);
  await expect(title).toContain('WebPageTest');  // Sayt başlığının düzgün olduğunu yoxlayaq

  
});