const mouseStyleTemplate = ` \`
            puppeteer-mouse-pointer {
            pointer-events: none;
            position: absolute;
            top: 0;
            z-index: 10000;
            left: 0;
            width: 20px;
            height: 20px;
            background: rgba(0,0,0,.4);
            border: 1px solid white;
            border-radius: 10px;
            margin: -10px 0 0 -10px;
            padding: 0;
            transition: background .2s, border-radius .2s, border-color .2s;
            }
            puppeteer-mouse-pointer.button-1 {
            transition: none;
            background: rgba(0,0,0,0.9);
            }
            puppeteer-mouse-pointer.button-2 {
            transition: none;
            border-color: rgba(0,0,255,0.9);
            }
            puppeteer-mouse-pointer.button-3 {
            transition: none;
            border-radius: 4px;
            }
            puppeteer-mouse-pointer.button-4 {
            transition: none;
            border-color: rgba(255,0,0,0.9);
            }
            puppeteer-mouse-pointer.button-5 {
            transition: none;
            border-color: rgba(0,255,0,0.9);
            }\``;

const Puppeteer_Template = (URL, height, width, events, scrollBarWidth) => {
  console.log(events);
  const reversedEvents = [];
  for (let i = events.length - 1; i >= 0; i--) {
    reversedEvents.push(events[i]);
  }

  let script = ` 
    const puppeteer = require("puppeteer");
  
    async function installMouseHelper(page) {

    await page.evaluateOnNewDocument(() => {
        // Install mouse helper only for top-level frame.
        if (window !== window.parent) return;
        window.addEventListener(
        "DOMContentLoaded",
        () => {
            const box = document.createElement("puppeteer-mouse-pointer");
            const styleElement = document.createElement("style");
            styleElement.innerHTML = ${mouseStyleTemplate}
        ;
            document.head.appendChild(styleElement);
            document.body.appendChild(box);
            document.addEventListener(
            "mousemove",
            (event) => {
                box.style.left = event.pageX + "px";
                box.style.top = event.pageY + "px";
                updateButtons(event.buttons);
            },
            true
            );
            document.addEventListener(
            "mousedown",
            (event) => {
                updateButtons(event.buttons);
                box.classList.add("button-" + event.which);
            },
            true
            );
            document.addEventListener(
            "mouseup",
            (event) => {
                updateButtons(event.buttons);
                box.classList.remove("button-" + event.which);
            },
            true
            );
            function updateButtons(buttons) {
            for (let i = 0; i < 5; i++)
                box.classList.toggle("button-" + i, buttons & (1 << i));
            }
        },
        false
        );
    });
    }

    let events = ${JSON.stringify(reversedEvents)}    

    
    function isClickPresentAhead(events, i) {
    for (let j = i; j < events.length; j++) {
        if (events[j].name === "USER_EVENT") {
        if (events[j].type === "CLICK") {
            return true;
        } else if (events[j].type === "MOUSEUP") {
            return false;
        }
        }
    }
    return false;
    }

    function filterEvents(events) {
    // Make this more efficient
    let i = 0,
        filteredEvents = [];
    while (i < events.length) {
        if (
        events[i].name === "USER_EVENT" &&
        events[i].type === "MOUSEDOWN" &&
        isClickPresentAhead(events, i + 1)
        ) {
        // Ignore this mousedown event
        i++;
        continue;
        }
        filteredEvents.push(events[i]);
        i++;
    }

    return filteredEvents;
    }
    
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
    events = filterEvents(events);
    
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

    await installMouseHelper(page);

    await page.setViewport({
        width: ${width},
        height: ${height},
        hasTouch: true, // Enable touch events if needed
    });

    await page.goto("${URL}?session-replay=true", { waitUntil: "networkidle0" });

    await page.addStyleTag({
    content: "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: ${scrollBarWidth}px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}"
    });

    let prevTimeStamp = events[0].timeStamp;

    for (let event of events) {
        try {
            if (event.name === "USER_EVENT") {
                let scrollX = event.data.scrollX,
                scrollY = event.data.scrollY;
                let X = event.data.X,
                Y = event.data.Y;
                const delay = event.timeStamp - prevTimeStamp;

                let key = "",
                value,
                htmlElement,
                checked,
                button;
                if (event.type.includes("KEY")) {
                key = event.data.key;
                }
                if (event.type.includes("CLICK")) {
                button = event.data.button;
                }
                if (event.type.includes("ON_CHANGE")) {
                value = event.data.value;
                htmlElement = event.data.HTMLElement;
                checked = event.data.checked;
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
                    //await page.mouse.up();

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

                    //await page.mouse.up();
                    await page.mouse.click(X - scrollX, Y - scrollY, {
                    button: "right",
                    });
                    break;
                case "ON_CHANGE":
                    await page.evaluate(
                    async (scrollX, scrollY, X, Y, value, checked, htmlElement) => {
                        await new Promise((resolve) => {
                        window.scrollTo(scrollX, scrollY);

                        if (htmlElement.includes("<select")) {
                            document.elementFromPoint(X - scrollX, Y - scrollY).value =
                            value;
                        } else {
                            document.elementFromPoint(
                            X - scrollX,
                            Y - scrollY
                            ).checked = checked;
                        }
                        document.document
                            .elementFromPoint(X - scrollX, Y - scrollY)
                            .dispatchEvent(new Event("change"));
                        resolve();
                        });
                    },
                    scrollX,
                    scrollY,
                    X,
                    Y,
                    value,
                    checked,
                    htmlElement
                    );

                    break;
                }
            }
            prevTimeStamp = event.timeStamp;
            } catch (e) {
            console.log("Exception executing event ", event);
            console.log("Exception : ", e);
            }
    }

    await browser.close();
    }

    start();
    `;

  return script;
};

export default Puppeteer_Template;
