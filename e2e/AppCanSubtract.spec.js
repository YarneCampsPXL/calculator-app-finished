const { test, expect } = require('@playwright/test');

test('can subtract', async ({page}) => {
  await page.goto('localhost:3000');
  await page.getByLabel('Number 1').fill("7");
  await page.getByLabel('Number 2').fill("3");
  await page.getByRole('button', {name: 'subtract'}).click();
  await expect(page.getByRole('heading', {name: 'The result is: 4'})).toBeVisible();
});
