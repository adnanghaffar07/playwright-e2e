// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // const browser = await chromium.launch();
  // const page = await browser.newPage();
  // const context = await browser.newContext();
}

export default globalSetup;