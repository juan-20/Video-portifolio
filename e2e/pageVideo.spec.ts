import { test, expect } from '@playwright/test';

test('VideoPage displays', async ({ page }) => {
  // Navigate to the VideoPage
  await page.goto('https://video-portifolio.vercel.app/');

  // Wait for the videos to load
  await page.waitForSelector('.grid');

  // Get the initial list of videos
  const initialVideos = await page.$$eval('.grid > div', (videos) =>
    videos.map((video) => video.textContent?.trim())
    );
  
  expect(initialVideos.length).toBeGreaterThan(0);
});

  // Sort by category
  // await page.click('button:text("Action")');
  // const sortedByCategory = await page.$$eval('.grid > div', (videos) =>
  //   videos.map((video) => video.textContent?.trim())
  // );

  // Sort by date
  // await page.selectOption('select', { label: 'Mais Antigos' });
  // const sortedByDate = await page.$$eval('.grid > div', (videos) =>
  //   videos.map((video) => video.textContent?.trim())
  // );

  // Check that the videos are sorted correctly
  // expect(initialVideos).not.toEqual(sortedByCategory);
  // expect(initialVideos).not.toEqual(sortedByDate);
  // expect(sortedByCategory).toEqual(
  //   initialVideos.filter((video) => video?.includes('Action'))
  // );