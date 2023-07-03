import { test, expect } from '@playwright/test';

test('GraphHero component renders correctly', async ({ page }) => {
  await page.goto('https://video-portifolio.vercel.app/'); // replace with your app's URL
  const graphHero = await page.waitForSelector('.graphHero');
  expect(graphHero).toBeTruthy();

  const image = await graphHero.$('img');
  expect(await image?.getAttribute('alt')).toBe('Formulário de Contato - 150 Leads, Botão do Whatsapp - 230 Leads, Leadster - 450 Leads com 14 dias grátis');
});