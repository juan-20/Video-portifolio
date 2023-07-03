import { test, expect } from '@playwright/test';

test('Hero component renders correctly', async ({ page }) => {
    await page.goto('https://video-portifolio.vercel.app/'); // replace with your app's URL
    const heroSection = await page.$('section.hero');
    expect(heroSection).not.toBeNull();
});