const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: "2023-6-8 15:22:36",
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3000/", DOMLoadTime: 0.3965 },
    _id: "6481a4f85428333d49fe20c4",
  },
  {
    timeStamp: "2023-6-8 15:22:38",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 348,
      Y: 169,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6481a4f85428333d49fe20c5",
  },
  {
    timeStamp: "2023-6-8 15:22:38",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20c6",
  },
  {
    timeStamp: "2023-6-8 15:22:38",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20c7",
  },
  {
    timeStamp: "2023-6-8 15:22:38",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "Shift", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20c8",
  },
  {
    timeStamp: "2023-6-8 15:22:39",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20c9",
  },
  {
    timeStamp: "2023-6-8 15:22:39",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20ca",
  },
  {
    timeStamp: "2023-6-8 15:22:39",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "Shift", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20cb",
  },
  {
    timeStamp: "2023-6-8 15:22:39",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "j", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20cc",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "j", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20cd",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "j", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20ce",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "a", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20cf",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "h", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d0",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "j", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d1",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "s", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d2",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "d", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d3",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "a", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d4",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "h", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d5",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "s", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d6",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "d", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d7",
  },
  {
    timeStamp: "2023-6-8 15:22:40",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d8",
  },
  {
    timeStamp: "2023-6-8 15:22:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20d9",
  },
  {
    timeStamp: "2023-6-8 15:22:41",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20da",
  },
  {
    timeStamp: "2023-6-8 15:22:41",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 348, Y: 169, key: "Tab", HTMLElement: "<input>" },
    _id: "6481a4f85428333d49fe20db",
  },
  {
    timeStamp: "2023-6-8 15:22:43",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 250,
      Y: 787,
      scrollX: 0,
      scrollY: 258.6666564941406,
      HTMLElement:
        '<div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div>',
      button: 0,
    },
    _id: "6481a4f85428333d49fe20dc",
  },
  {
    timeStamp: "2023-6-8 15:22:44",
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "o4qifaf4-fr5c-t4vu-8liq-tzz032w3xbkm",
    },
    _id: "6481a4f85428333d49fe20dd",
  },
  {
    timeStamp: "2023-6-8 15:22:44",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 263,
      Y: 782,
      scrollX: 0,
      scrollY: 258.6666564941406,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6481a4f85428333d49fe20de",
  },
  {
    timeStamp: "2023-6-8 15:22:44",
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "o4qifaf4-fr5c-t4vu-8liq-tzz032w3xbkm",
      duration: 35,
    },
    _id: "6481a4f85428333d49fe20df",
  },
  {
    timeStamp: "2023-6-8 15:22:45",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 489,
      Y: 601,
      scrollX: 0,
      scrollY: 258.6666564941406,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6481a4f85428333d49fe20e0",
  },
  {
    timeStamp: "2023-6-8 15:22:46",
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "http://localhost:5000/postData",
      method: "POST",
      id: "8e0gtefm-cq8f-2smd-ksg0-zhnramp9qzo4",
    },
    _id: "6481a4f85428333d49fe20e1",
  },
  {
    timeStamp: "2023-6-8 15:22:46",
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "http://localhost:5000/postData",
      status: 200,
      responseData: '{"success":true}',
      id: "8e0gtefm-cq8f-2smd-ksg0-zhnramp9qzo4",
      duration: 60,
    },
    _id: "6481a4f85428333d49fe20e2",
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
  const context = browser.defaultBrowserContext();
  await context.overridePermissions("http://localhost:3000/", ["geolocation"]);

  await page.setViewport({
    width: 674,
    height: 667,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });

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

  await browser.close();
}

start();
