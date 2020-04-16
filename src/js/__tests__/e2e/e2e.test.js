import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('should add .active class to and show popover', async () => {
    await page.goto(baseUrl);
    const wrapper = await page.$('.btn-wrapper');
    const btn = await wrapper.$('.toggle-popover-btn');
    btn.click();
    await page.waitForSelector('.active');
  });
  test('should add .hidden class to and hide popover after second click', async () => {
    await page.goto(baseUrl);
    const wrapper = await page.$('.btn-wrapper');
    const btn = await wrapper.$('.toggle-popover-btn');
    btn.click();
    btn.click();
    await page.waitForSelector('.hidden');
  });
});
