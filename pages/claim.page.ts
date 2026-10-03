import { Page } from '@playwright/test';

export class ClaimPage {
  constructor(private readonly page: Page) {}

  async expectOpened(): Promise<void> {
    await this.page.locator('.oxd-topbar-header-breadcrumb-module').filter({ hasText: /^Claim$/ }).waitFor();
  }
}
