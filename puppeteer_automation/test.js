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
        styleElement.innerHTML = `
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
            }`;
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

let events = [
  {
    timeStamp: 1687274162.09,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0.13429999995231628 },
    _id: "6491c2bc6bd7fe9e312576d4",
  },
  {
    timeStamp: 1687274162.502,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 576.8999999761581 },
    _id: "6491c2bc6bd7fe9e312576d5",
  },
  {
    timeStamp: 1687274163.485,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 554, Y: 187, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576d6",
  },
  {
    timeStamp: 1687274163.564,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 554,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6491c2bc6bd7fe9e312576d7",
  },
  {
    timeStamp: 1687274163.78,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576d8",
  },
  {
    timeStamp: 1687274163.864,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576d9",
  },
  {
    timeStamp: 1687274164.015,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "h", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576da",
  },
  {
    timeStamp: 1687274164.086,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "h", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576db",
  },
  {
    timeStamp: 1687274164.183,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576dc",
  },
  {
    timeStamp: 1687274164.264,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "u", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576dd",
  },
  {
    timeStamp: 1687274164.274,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576de",
  },
  {
    timeStamp: 1687274164.368,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "u", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576df",
  },
  {
    timeStamp: 1687274164.851,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "l", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e0",
  },
  {
    timeStamp: 1687274164.949,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "l", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e1",
  },
  {
    timeStamp: 1687274165.041,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e2",
  },
  {
    timeStamp: 1687274165.126,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e3",
  },
  {
    timeStamp: 1687274165.127,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e4",
  },
  {
    timeStamp: 1687274165.2,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "w", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e5",
  },
  {
    timeStamp: 1687274165.212,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e6",
  },
  {
    timeStamp: 1687274165.292,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e7",
  },
  {
    timeStamp: 1687274165.334,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "w", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e8",
  },
  {
    timeStamp: 1687274165.374,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576e9",
  },
  {
    timeStamp: 1687274165.406,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "r", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576ea",
  },
  {
    timeStamp: 1687274165.524,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "k", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576eb",
  },
  {
    timeStamp: 1687274165.525,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "r", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576ec",
  },
  {
    timeStamp: 1687274165.594,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "k", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576ed",
  },
  {
    timeStamp: 1687274165.611,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576ee",
  },
  {
    timeStamp: 1687274165.721,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576ef",
  },
  {
    timeStamp: 1687274166.17,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "n", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f0",
  },
  {
    timeStamp: 1687274166.234,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "n", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f1",
  },
  {
    timeStamp: 1687274166.302,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f2",
  },
  {
    timeStamp: 1687274166.394,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f3",
  },
  {
    timeStamp: 1687274166.394,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: "w", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f4",
  },
  {
    timeStamp: 1687274166.508,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 554, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f5",
  },
  {
    timeStamp: 1687274166.509,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: "w", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f6",
  },
  {
    timeStamp: 1687274166.613,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 554, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "6491c2bc6bd7fe9e312576f7",
  },
  {
    timeStamp: 1687274167.439,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 860,
      Y: 581,
      scrollX: 0,
      scrollY: 235.3333282470703,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6491c2bc6bd7fe9e312576f8",
  },
  {
    timeStamp: 1687274167.494,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 860,
      Y: 581,
      scrollX: 0,
      scrollY: 235.3333282470703,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6491c2bc6bd7fe9e312576f9",
  },
  {
    timeStamp: 1687274168.225,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 634,
      Y: 783,
      scrollX: 0,
      scrollY: 235.3333282470703,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
    },
    _id: "6491c2bc6bd7fe9e312576fa",
  },
  {
    timeStamp: 1687274168.296,
    name: "USER_EVENT",
    type: "DOWNLOAD",
    data: {
      X: 634,
      Y: 783,
      scrollX: 0,
      scrollY: 235.3333282470703,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
      button: 0,
    },
    _id: "6491c2bc6bd7fe9e312576fb",
  },
  {
    timeStamp: 1687274168.296,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 634,
      Y: 783,
      scrollX: 0,
      scrollY: 235.3333282470703,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
    },
    _id: "6491c2bc6bd7fe9e312576fc",
  },
  {
    timeStamp: 1687274168.297,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 6.21 },
    _id: "6491c2bc6bd7fe9e312576fd",
  },
  {
    timeStamp: 1687274171.826,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 633,
      Y: 570,
      scrollX: 0,
      scrollY: 292.6666564941406,
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "6491c2bc6bd7fe9e312576fe",
  },
  {
    timeStamp: 1687274171.931,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 633,
      Y: 569,
      scrollX: 0,
      scrollY: 292.6666564941406,
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "6491c2bc6bd7fe9e312576ff",
  },
  {
    timeStamp: 1687274171.934,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 9.847 },
    _id: "6491c2bc6bd7fe9e31257700",
  },
];

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
  await context.overridePermissions(
    "http://localhost:3002/?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 624,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 16px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
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
