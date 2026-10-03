import { test as base } from '@playwright/test';
import { ClaimPage } from '../pages/claim.page';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';
import { MyInfoPage } from '../pages/my-info.page';

type AppFixtures = {
  dashboardPage: DashboardPage;
  claimPage: ClaimPage;
  myInfoPage: MyInfoPage;
};

export const test = base.extend<AppFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('ADMIN', 'admin123');
    await use(new DashboardPage(page));
  },
  claimPage: async ({ dashboardPage }, use) => {
    await use(new ClaimPage(dashboardPage.page));
  },
  myInfoPage: async ({ dashboardPage }, use) => {
    await use(new MyInfoPage(dashboardPage.page));
  },
});
