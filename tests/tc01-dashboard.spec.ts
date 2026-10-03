import { expect } from '@playwright/test';
import { test } from '../fixtures/app.fixture';


test('TC01 - opens the dashboard after login', async ({ dashboardPage }) => {
  await expect(dashboardPage.page).toHaveURL(/\/dashboard\/index$/);
  await dashboardPage.expectOpened();
});
