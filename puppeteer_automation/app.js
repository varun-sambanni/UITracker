const puppeteer = require("puppeteer");
const { PuppeteerScreenRecorder } = require("puppeteer-screen-recorder");

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
        }
      `;
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

const events = [
  {
    timeStamp: "2023-6-8 13:50:47",
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3000/", DOMLoadTime: 0.0945 },
    _id: "64818f734188c262924008c4",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 287,
      Y: 165,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64818f734188c262924008c5",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "k", HTMLElement: "<input>" },
    _id: "64818f734188c262924008c6",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "a", HTMLElement: "<input>" },
    _id: "64818f734188c262924008c7",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "s", HTMLElement: "<input>" },
    _id: "64818f734188c262924008c8",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "j", HTMLElement: "<input>" },
    _id: "64818f734188c262924008c9",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "k", HTMLElement: "<input>" },
    _id: "64818f734188c262924008ca",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "d", HTMLElement: "<input>" },
    _id: "64818f734188c262924008cb",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "a", HTMLElement: "<input>" },
    _id: "64818f734188c262924008cc",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "j", HTMLElement: "<input>" },
    _id: "64818f734188c262924008cd",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "k", HTMLElement: "<input>" },
    _id: "64818f734188c262924008ce",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "s", HTMLElement: "<input>" },
    _id: "64818f734188c262924008cf",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "j", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d0",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "d", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d1",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "s", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d2",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "a", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d3",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "k", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d4",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "j", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d5",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 287, Y: 165, key: "d", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d6",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "s", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d7",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "a", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d8",
  },
  {
    timeStamp: "2023-6-8 13:50:49",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 287, Y: 165, key: "d", HTMLElement: "<input>" },
    _id: "64818f734188c262924008d9",
  },
  {
    timeStamp: "2023-6-8 13:50:50",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 468,
      Y: 341,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64818f734188c262924008da",
  },
  {
    timeStamp: "2023-6-8 13:50:51",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 468,
      Y: 341,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008db",
  },
  {
    timeStamp: "2023-6-8 13:50:53",
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "ibn0qikk-pxxk-1y2j-jtm0-1evj0m63kc89",
    },
    _id: "64818f734188c262924008dc",
  },
  {
    timeStamp: "2023-6-8 13:50:53",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 222,
      Y: 843,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<button>Axios</button>",
      button: 0,
    },
    _id: "64818f734188c262924008dd",
  },
  {
    timeStamp: "2023-6-8 13:50:53",
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 46,
      id: "ibn0qikk-pxxk-1y2j-jtm0-1evj0m63kc89",
    },
    _id: "64818f734188c262924008de",
  },
  {
    timeStamp: "2023-6-8 13:50:53",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 222,
      Y: 843,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: null,
    },
    _id: "64818f734188c262924008df",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 326, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e0",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 326,
      Y: 258,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "64818f734188c262924008e1",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 326, Y: 258, key: "s", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e2",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 326, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e3",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "http://localhost:5000/postData",
      method: "POST",
      id: "nu3neauh-p845-gmlc-i5bk-beemdkuuc5qq",
    },
    _id: "64818f734188c262924008e4",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 326, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e5",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "http://localhost:5000/postData",
      status: 200,
      responseData: '{"success":true}',
      id: "nu3neauh-p845-gmlc-i5bk-beemdkuuc5qq",
      duration: 68,
    },
    _id: "64818f734188c262924008e6",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 326, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e7",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 326, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e8",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 326, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008e9",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 326, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008ea",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 326, Y: 258, key: "s", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008eb",
  },
  {
    timeStamp: "2023-6-8 13:50:57",
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 326, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "64818f734188c262924008ec",
  },
  {
    timeStamp: "2023-6-8 13:50:59",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 469,
      Y: 291,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008ed",
  },
  {
    timeStamp: "2023-6-8 13:50:59",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 469,
      Y: 291,
      key: "o",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008ee",
  },
  {
    timeStamp: "2023-6-8 13:50:59",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 469,
      Y: 291,
      key: "p",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008ef",
  },
  {
    timeStamp: "2023-6-8 13:50:59",
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 469,
      Y: 291,
      key: "p",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f0",
  },
  {
    timeStamp: "2023-6-8 13:50:59",
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 469,
      Y: 291,
      key: "o",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f1",
  },
  {
    timeStamp: "2023-6-8 13:51:0",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 550,
      Y: 282,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64818f734188c262924008f2",
  },
  {
    timeStamp: "2023-6-8 13:51:1",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 550,
      Y: 282,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f3",
  },
  {
    timeStamp: "2023-6-8 13:51:1",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 550,
      Y: 282,
      key: "Tab",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f4",
  },
  {
    timeStamp: "2023-6-8 13:51:1",
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 550,
      Y: 282,
      key: "Tab",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f5",
  },
  {
    timeStamp: "2023-6-8 13:51:2",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 550,
      Y: 282,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f6",
  },
  {
    timeStamp: "2023-6-8 13:51:2",
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 550,
      Y: 282,
      key: "Backspace",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f7",
  },
  {
    timeStamp: "2023-6-8 13:51:2",
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 550,
      Y: 282,
      key: "Backspace",
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f8",
  },
  {
    timeStamp: "2023-6-8 13:51:4",
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 550,
      Y: 282,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64818f734188c262924008f9",
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

  // const recorder = new PuppeteerScreenRecorder(page);
  // await recorder.start("./report/video/simple.mp4");

  const context = browser.defaultBrowserContext();
  await context.overridePermissions("http://localhost:3001/", ["geolocation"]);

  await installMouseHelper(page);

  await page.setViewport({
    width: 616,
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
          await page.mouse.click(X - scrollX, Y - scrollY, options);
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

          await page.mouse.down(X - scrollX, Y - scrollY);
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

          await page.mouse.up(X - scrollX, Y - scrollY);
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

          await page.mouse.click(X - scrollX, Y - scrollY, { button: "right" });
          break;
      }
    }
    prevTimeStamp = event.timeStamp;
  }

  await new Promise((resolve) => setTimeout(resolve, 200000));
  // await recorder.stop();
  await browser.close();
}

start();
