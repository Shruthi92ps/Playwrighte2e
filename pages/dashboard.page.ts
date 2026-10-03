import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(readonly page: Page) {}

  async expectOpened(): Promise<void> {
    await this.page.getByPlaceholder('Search').waitFor();
  }

  async openClaim(): Promise<void> {
    const search = this.page.getByPlaceholder('Search');
    await search.fill('Claim');
    await search.press('Enter');
    await this.page.getByRole('link', { name: 'Claim', exact: true }).click();
  }

  async openMyInfo(): Promise<void> {
    await this.page.getByRole('link', { name: 'My Info', exact: true }).click();
  }
}
