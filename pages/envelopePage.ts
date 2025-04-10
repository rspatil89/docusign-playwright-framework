import { Page } from '@playwright/test';

export class EnvelopePage {
  constructor(private page: Page) {}

  async createEnvelope(docName: string, recipient: string) {
    await this.page.click('text=New');
    await this.page.click('text=Send an Envelope');
    await this.page.setInputFiles('input[type="file"]', `./data/${docName}`);
    await this.page.fill('input[placeholder="Add recipient"]', recipient);
  }

  async sendEnvelope() {
    await this.page.click('text=Next');
    await this.page.click('text=Send');
  }

  async verifyStatus(expectedStatus: string) {
    await this.page.click('text=Manage');
    const status = await this.page.textContent('.envelope-status');
    if (!status?.includes(expectedStatus)) throw new Error(`Expected status ${expectedStatus}, but got ${status}`);
  }
}
