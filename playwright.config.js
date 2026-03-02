import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Testlərin olduğu qovluğu göstəririk
  reporter: [
    ['html'], // Default HTML report
    ['allure-playwright'], // Allure report
  ],
  use: {
    headless: false, // Testləri browserdə işlədir
    video: 'on-first-retry', // İlk uğursuzluqdan sonra video çəkmək
    screenshot: 'only-on-failure', // Yalnız səhv olduqda screenshot almaq
    trace: 'retain-on-failure', // Yalnız uğursuz olduqda trace saxlamaq
  },
});