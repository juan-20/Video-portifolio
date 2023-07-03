import { test, expect } from '@playwright/test';

test('Footer renders', async ({ page }) => {
  await page.goto('https://video-portifolio.vercel.app/'); 

  const footer = await page.$('footer');
  expect(footer).not.toBeNull();
});