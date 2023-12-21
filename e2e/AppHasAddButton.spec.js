const { test, expect } = require('@playwright/test');

test('has add button', async ({page}) => {
  await page.goto("localhost:3000");
  await expect(page.getByRole('button', {name: 'add'})).toBeVisible();
});
