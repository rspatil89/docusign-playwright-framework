import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { EnvelopePage } from '../pages/envelopePage';
import { SigningPage } from '../pages/signingPage';
import * as dotenv from 'dotenv';

dotenv.config();

test('End-to-End DocuSign Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const envelopePage = new EnvelopePage(page);
  const signingPage = new SigningPage(page);

  await loginPage.login(process.env.DOCUSIGN_USER!, process.env.DOCUSIGN_PASS!);
});
