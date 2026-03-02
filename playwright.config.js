import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'test1',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
      },
    },
  ],
  reporter: [
    ['html'], // Default HTML reporter
    ['allure-playwright'], // Allure reporter əlavə et
  ],
});