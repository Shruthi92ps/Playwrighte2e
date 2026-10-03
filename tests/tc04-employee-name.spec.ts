import { test } from '../fixtures/app.fixture';

test('TC04 - enters the employee full name on My Info', async ({ dashboardPage, myInfoPage }) => {
  await dashboardPage.openMyInfo();
  await myInfoPage.expectOpened();
  await myInfoPage.enterEmployeeFullName('shruthi');
});
