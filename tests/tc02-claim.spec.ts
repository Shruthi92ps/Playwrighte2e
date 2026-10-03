import { test } from '../fixtures/app.fixture';

test('TC02 - opens Claim from the navigation search', async ({ dashboardPage, claimPage }) => {
  await dashboardPage.openClaim();
  await claimPage.expectOpened();
});
