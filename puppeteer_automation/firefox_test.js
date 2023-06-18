const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: "firefox",
    args: ["-wait-for-browser"],
  });
  const page = await browser.newPage();
  console.log("Attempting to click");
  await page.mouse.click(432, 177);

  await page.goto("http://localhost:3001/");
})();
