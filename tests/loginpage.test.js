import { test, expect } from '@playwright/test';

test('WebPageTest.org saytı testi', async ({ page }) => {
  // Sayta gedirik
  await page.goto('https://www.webpagetest.org/', { timeout: 60000 }); // Timeout-u 60 saniyəyə artırdıq

  // Sayfanın tam yüklənməsini gözləyirik
  await page.waitForLoadState('load');  // Sayfa tam yüklənməlidir

  // Sayt başlığını alırıq
  const title = await page.title();
  console.log('Sayt başlığı: ', title);  // Başlığı yoxlayın

  // Sayt başlığının "WebPageTest" mətnini ehtiva etdiyini yoxlayırıq
  await expect(title).toContain('WebPageTest');  // `title` dəyişənini yoxlayırıq
});