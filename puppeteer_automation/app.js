const puppeteer = require("puppeteer");
const { installMouseHelper } = require("./mouse-helper"); // mouse helper function to display the cursor with puppeteer's mouse movements

// stop

async function start() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    ignoreDefaultArgs: ["--enable-automation"],
    defaultViewport: null,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  const context = browser.defaultBrowserContext();
  await context.overridePermissions("http://localhost:3000/", ["geolocation"]);

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3000/");

  await page.evaluate(() => {
    window.onmousemove = (e) => {};
    window.onclick = (e) => {
      var scrollX = e.pageX - e.clientX;
      var scrollY = e.pageY - e.clientY;
      console.log("scrollX ", scrollX, " scrollY ", scrollY);
      //window.scrollTo(scrollX, scrollY);
      const element = document.elementFromPoint(e.clientX, e.clientY);
      console.log("X : ", e.pageX, " Y : ", e.pageY);
      console.log("clientX ", e.clientX, "Y : ", e.clientY);
      console.log("element ", element);
    };
  });

  await page.evaluate(() => {
    window.scrollTo(0, 244);
  });

  page.mouse.click(586, 579 - 244);

  await new Promise((resolve) => setTimeout(resolve, 200000));

  await browser.close();
}

start();
