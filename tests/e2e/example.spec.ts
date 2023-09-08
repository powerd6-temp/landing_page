import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/powerd6/);
});

test('links to github', async ({ page }) => {
  await page.goto('/');

  // Click the github link.
  await page.getByRole('link', { name: /github/ }).click();

  // Expect the page to be on github.com
  await expect(page).toHaveURL(/github.com\/powerd6/);
});

test('passes accessibility check', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toPassAxe();
});

