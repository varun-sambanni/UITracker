const puppeteer = require("puppeteer");
const { PuppeteerScreenRecorder } = require("puppeteer-screen-recorder");

const { installMouseHelper } = require("./mouse-helper"); // mouse helper function to display the cursor with puppeteer's mouse movements

const events = [
  {
    timeStamp: "2023-6-7 14:59:38",
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.0265 },
    _id: "64804e0ca8317b3e6d9e6a85",
  },
  {
    timeStamp: "2023-6-7 14:59:39",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 111,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64804e0ca8317b3e6d9e6a86",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 559,
      Y: 159,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64804e0ca8317b3e6d9e6a87",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a88",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "l", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a89",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "s", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a8a",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a8b",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a8c",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a8d",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "s", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a8e",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a8f",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a90",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a91",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a92",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a93",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a94",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "l", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a95",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a96",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a97",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "Tab", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a98",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "Tab", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a99",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "Tab", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a9a",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "Tab", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a9b",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 559, Y: 159, key: "Tab", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a9c",
  },
  {
    timeStamp: "2023-6-7 14:59:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 559, Y: 159, key: "Tab", HTMLElement: "<input>" },
    _id: "64804e0ca8317b3e6d9e6a9d",
  },
  {
    timeStamp: "2023-6-7 14:59:43",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 964,
      Y: 480,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64804e0ca8317b3e6d9e6a9e",
  },
  {
    timeStamp: "2023-6-7 14:59:43",
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 964,
      Y: 480,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64804e0ca8317b3e6d9e6a9f",
  },
  {
    timeStamp: "2023-6-7 14:59:44",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 964,
      Y: 480,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64804e0ca8317b3e6d9e6aa0",
  },
  {
    timeStamp: "2023-6-7 14:59:44",
    name: "USER_EVENT",
    type: "MOUSE_DRAG",
    data: { startX: 854, startY: 405, endX: 854, endY: 406 },
    _id: "64804e0ca8317b3e6d9e6aa1",
  },
  {
    timeStamp: "2023-6-7 14:59:44",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 854,
      Y: 406,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64804e0ca8317b3e6d9e6aa2",
  },
  {
    timeStamp: "2023-6-7 14:59:45",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 854,
      Y: 406,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64804e0ca8317b3e6d9e6aa3",
  },
  {
    timeStamp: "2023-6-7 14:59:47",
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 854,
      Y: 161,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64804e0ca8317b3e6d9e6aa4",
  },
];

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

  const recorder = new PuppeteerScreenRecorder(page);
  await recorder.start("./report/video/simple.mp4");

  const context = browser.defaultBrowserContext();
  await context.overridePermissions("http://localhost:3001/", ["geolocation"]);

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3001/", { waitUntil: "networkidle0" });

  let prevTimeStamp = events[0].timeStamp;

  for (let event of events) {
    if (event.name === "USER_EVENT") {
      let scrollX = event.data.scrollX,
        scrollY = event.data.scrollY;
      let X = event.data.X,
        Y = event.data.Y;
      const delay =
        timeStampToSeconds(event.timeStamp) - timeStampToSeconds(prevTimeStamp);

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
        case "MOUSE_DRAG":
          break;
      }
    }
    prevTimeStamp = event.timeStamp;
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  await recorder.stop();
  await browser.close();
}

start();
