import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto('https://account.docusign.com');
    await this.page.fill('[data-qa="username"]', username);
    await this.page.click('[data-qa="submit-username"]');
    await this.page.fill('[data-qa="password"]', password);
    await this.page.click('[data-qa="submit-password"]');
    await this.page.waitForURL('**/send/home');
  }
}
