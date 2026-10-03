import { Page } from '@playwright/test';

export class MyInfoPage {
  constructor(private readonly page: Page) {}

  async expectOpened(): Promise<void> {
    await this.page.locator('.orangehrm-main-title').filter({ hasText: /^Personal Details$/ }).waitFor();
  }

  async enterEmployeeFullName(name: string): Promise<void> {
    await this.page.getByPlaceholder('First Name').fill(name);
  }
}
