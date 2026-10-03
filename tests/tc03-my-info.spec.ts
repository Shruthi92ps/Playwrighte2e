import { test } from '../fixtures/app.fixture';

test('TC03 - opens My Info', async ({ dashboardPage, myInfoPage }) => {
  await dashboardPage.openMyInfo();
  await myInfoPage.expectOpened();
});
