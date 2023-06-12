const Puppeteer_Template = (URL, height, width, events) => {
  console.log(events);
  const reversedEvents = [];
  for (let i = events.length - 1; i >= 0; i--) {
    reversedEvents.push(events[i]);
  }
  let script = ` const puppeteer = require("puppeteer");
  
    const events = ${JSON.stringify(reversedEvents)}
    function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function wait(seconds) {
    const milliseconds = seconds * 1000;
    await delay(milliseconds);
    }

    const timeStampToSeconds = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.getTime() / 1000;
    };

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
    await context.overridePermissions("${URL}?session-replay=true", ["geolocation"]);

    await page.setViewport({
        width: ${width},
        height: ${height},
        hasTouch: true, // Enable touch events if needed
    });

    await page.goto("${URL}?session-replay=true", { waitUntil: "networkidle0" });

    let prevTimeStamp = events[0].timeStamp;

    for (let event of events) {
        if (event.name === "USER_EVENT") {
        let scrollX = event.data.scrollX,
            scrollY = event.data.scrollY;
        let X = event.data.X,
            Y = event.data.Y;
        const delay =
            event.timeStamp - prevTimeStamp;

        let key = "",
            button;
        if (event.type.includes("KEY")) {
            key = event.data.key;
        }
        if (event.type.includes("CLICK")) {
            button = event.data.button;
        }

        await wait(delay);

        switch (event.type) {
            case "CLICK":
            await page.evaluate(
                async (scrollX, scrollY) => {
                await new Promise((resolve) => {
                    window.scrollTo(scrollX, scrollY);
                    resolve();
                });
                },
                scrollX,
                scrollY
            );
            let options = {};
            if (button === 0) {
                options.button = "left";
            } else if (button === 2) {
                options.button = "right";
            } else {
                options.button = "middle";
            }
            await page.mouse.up();
            await page.mouse.click(X - scrollX, Y - scrollY);
            break;
            case "IDLE":
            await page.evaluate(
                async (scrollX, scrollY) => {
                await new Promise((resolve) => {
                    window.scrollTo(scrollX, scrollY);
                    resolve();
                });
                },
                scrollX,
                scrollY
            );

            await page.mouse.move(X - scrollX, Y - scrollY);
            break;
            case "KEYDOWN":
            await page.keyboard.down(event.data.key);
            break;
            case "KEYUP":
            await page.keyboard.up(event.data.key);
            break;
            case "MOUSEDOWN":
            await page.evaluate(
            async (scrollX, scrollY) => {
                await new Promise((resolve) => {
                window.scrollTo(scrollX, scrollY);
                resolve();
                });
            },
            scrollX,
            scrollY
            );

            await page.mouse.move(X - scrollX, Y - scrollY);
            await page.mouse.down();
            break;
            case "MOUSEUP":
                await page.evaluate(
                async (scrollX, scrollY) => {
                    await new Promise((resolve) => {
                    window.scrollTo(scrollX, scrollY);
                    resolve();
                    });
                },
                scrollX,
                scrollY
                );

            await page.mouse.move(X - scrollX, Y - scrollY);
            await page.mouse.up();
            break;
            case "CONTEXTMENU":
            await page.evaluate(
                async (scrollX, scrollY) => {
                await new Promise((resolve) => {
                    window.scrollTo(scrollX, scrollY);
                    resolve();
                });
                },
                scrollX,
                scrollY
            );
            await page.mouse.up();
            await page.mouse.click(X - scrollX, Y - scrollY, { button: "right" });
            break;
            }
        }
        prevTimeStamp = event.timeStamp;
    }

    await browser.close();
    }

    start();
    `;

  return script;
};

export default Puppeteer_Template;
