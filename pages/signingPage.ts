import { Page } from '@playwright/test';

export class SigningPage {
  constructor(private page: Page) {}

  async openSigningLink(signingUrl: string) {
    await this.page.goto(signingUrl);
  }

  async completeSigning() {
    await this.page.click('text=Start');
    await this.page.click('text=Sign');
    await this.page.click('text=Finish');
    await this.page.waitForURL('**/confirmation');
  }
}
