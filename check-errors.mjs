import { chromium } from 'playwright';

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', error => console.error('BROWSER ERROR:', error.message));

  console.log('Navigating to http://localhost:3000/cooperative ...');
  try {
    await page.goto('http://localhost:3000/cooperative', { waitUntil: 'networkidle', timeout: 10000 });
    console.log('Page loaded successfully.');
    // Keep it open for a few seconds to let React catch up
    await page.waitForTimeout(3000);
  } catch (e) {
    console.error('Failed to load page:', e.message);
  }
  
  await browser.close();
  console.log('Done.');
})();
