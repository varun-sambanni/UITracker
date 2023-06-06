const puppeteer = require("puppeteer");
const { installMouseHelper } = require("./mouse-helper"); // mouse helper function to display the cursor with puppeteer's mouse movements

const events = [
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:19",
    type: "CLICK",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 607,
      Y: 837,
      button: 0,
      scrollX: 0,
      scrollY: 244,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:20",
    type: "IDLE",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 572,
      Y: 161,
      button: 0,
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:21",
    type: "CLICK",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 572,
      Y: 161,
      button: 0,
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:23",
    type: "KEYDOWN",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 456,
      Y: 196,
      key: "p",
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:25",
    type: "KEYUP",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 456,
      Y: 196,
      key: "p",
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:26",
    type: "KEYDOWN",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 456,
      Y: 196,
      key: "q",
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:26",
    type: "KEYUP",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 456,
      Y: 196,
      key: "q",
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:27",
    type: "KEYDOWN",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 456,
      Y: 196,
      key: "j",
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:27",
    type: "KEYUP",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 456,
      Y: 196,
      key: "j",
      scrollX: 0,
      scrollY: 0,
    },
  },
  {
    name: "USER_EVENT",
    timeStamp: "2023-6-6 22:33:28",
    type: "CLICK",
    data: {
      HTMLElement: `<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>`,
      X: 641,
      Y: 836,
      button: 0,
      scrollX: 0,
      scrollY: 244,
    },
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

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3000/");

  // await page.evaluate(() => {
  //   window.onmousemove = (e) => {};
  //   window.onclick = (e) => {
  //     window.scrollTo(scrollX, scrollY);
  //     const element = document.elementFromPoint(e.clientX, e.clientY);
  //     console.log("X : ", e.pageX, " Y : ", e.pageY);
  //     console.log("clientX ", e.clientX, "Y : ", e.clientY);
  //     console.log("element ", element);
  //   };
  // });

  let prevTimeStamp = events[0].timeStamp;
  console.log(prevTimeStamp);
  for (let event of events) {
    if (event === undefined || event.data === undefined) {
      console.log("Undefined ", event);
    }
    if (event.name === "USER_EVENT") {
      let scrollX = event.data.scrollX,
        scrollY = event.data.scrollY;
      let X = event.data.X,
        Y = event.data.Y;
      const delay =
        timeStampToSeconds(event.timeStamp) - timeStampToSeconds(prevTimeStamp);
      console.log(event.type);
      let key = "";
      if (event.type.includes("KEY")) {
        key = event.data.key;
      }
      console.log("delay ", delay);

      await wait(delay);

      if (event.type === "CLICK") {
        await page.evaluate(() => {
          console.log("scrolling ");
          window.scrollTo(scrollX, scrollY);
        });
        console.log(scrollX, " ", scrollY);
        await page.mouse.click(X - scrollX, Y - scrollY);
      } else if (event.type === "IDLE") {
        await page.evaluate(() => {
          window.scrollTo(scrollX, scrollY);
        });

        await page.mouse.move(X - scrollX, Y - scrollY);
      } else if (event.type === "KEYDOWN") {
        await page.keyboard.down(event.data.key);
      } else if (event.type === "KEYUP") {
        await page.keyboard.up(event.data.key);
      } else if (event.type === "MOUSE_DRAG") {
      }
    }
    prevTimeStamp = event.timeStamp;
  }
  console.log("done");
  // await page.evaluate(() => {
  //   window.scrollTo(0, 0);
  // });

  // await page.mouse.click(592 - 0, 168 - 0);
  // await wait(timeStampToSeconds("2023-6-6 22:31:5") - Date.now() / 1000);

  // await page.keyboard.down("n");
  // await page.keyboard.up("n");

  // await wait(timeStampToSeconds("2023-6-6 22:31:10") - Date.now() / 1000);

  // await page.keyboard.down("a");
  // await page.keyboard.up("a");

  // await wait(timeStampToSeconds("2023-6-6 22:31:15") - Date.now() / 1000);

  // await page.keyboard.down("m");
  // await page.keyboard.up("m");

  // await wait(timeStampToSeconds("2023-6-6 22:31:20") - Date.now() / 1000);

  // await page.keyboard.down("e");
  // await page.keyboard.up("e");

  // await wait(timeStampToSeconds("2023-6-6 22:31:25") - Date.now() / 1000);

  // await page.evaluate(() => {
  //   window.scrollTo(0, 244.6666717529297);
  // });

  // await wait(timeStampToSeconds("2023-6-6 22:31:30") - Date.now() / 1000);

  // await page.mouse.click(628 - 0, 833 - 244.6666717529297);

  await new Promise((resolve) => setTimeout(resolve, 200000));
  await browser.close();
}

start();
