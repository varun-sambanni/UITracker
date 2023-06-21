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
    timeStamp: 1687364650.917,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6493244252172c7c1bb7f6b8",
  },
  {
    timeStamp: 1687364651.866,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "6493244252172c7c1bb7f6b9",
  },
  {
    timeStamp: 1687364652.404,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 306,
      Y: 129,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6ba",
  },
  {
    timeStamp: 1687364652.494,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 306,
      Y: 129,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f6bb",
  },
  {
    timeStamp: 1687364653.009,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6bc",
  },
  {
    timeStamp: 1687364653.101,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">l</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6bd",
  },
  {
    timeStamp: 1687364653.102,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">l</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6be",
  },
  {
    timeStamp: 1687364653.217,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">le</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6bf",
  },
  {
    timeStamp: 1687364653.234,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">le</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c0",
  },
  {
    timeStamp: 1687364653.3,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">let</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c1",
  },
  {
    timeStamp: 1687364653.396,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">let</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c2",
  },
  {
    timeStamp: 1687364653.514,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c3",
  },
  {
    timeStamp: 1687364653.545,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c4",
  },
  {
    timeStamp: 1687364653.681,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c5",
  },
  {
    timeStamp: 1687364653.722,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;s</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c6",
  },
  {
    timeStamp: 1687364653.867,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;s</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c7",
  },
  {
    timeStamp: 1687364653.873,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;s</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c8",
  },
  {
    timeStamp: 1687364653.922,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;se</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6c9",
  },
  {
    timeStamp: 1687364654.013,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;se</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6ca",
  },
  {
    timeStamp: 1687364654.109,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6cb",
  },
  {
    timeStamp: 1687364654.114,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6cc",
  },
  {
    timeStamp: 1687364654.21,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6cd",
  },
  {
    timeStamp: 1687364654.248,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6ce",
  },
  {
    timeStamp: 1687364654.333,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;i</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6cf",
  },
  {
    timeStamp: 1687364654.334,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "f",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;i</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d0",
  },
  {
    timeStamp: 1687364654.426,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d1",
  },
  {
    timeStamp: 1687364654.429,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "f",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d2",
  },
  {
    timeStamp: 1687364654.512,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d3",
  },
  {
    timeStamp: 1687364654.55,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d4",
  },
  {
    timeStamp: 1687364654.658,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;t</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d5",
  },
  {
    timeStamp: 1687364654.663,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;t</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d6",
  },
  {
    timeStamp: 1687364654.705,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;th</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d7",
  },
  {
    timeStamp: 1687364654.751,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;th</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d8",
  },
  {
    timeStamp: 1687364654.796,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;thi</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6d9",
  },
  {
    timeStamp: 1687364654.844,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6da",
  },
  {
    timeStamp: 1687364654.9,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6db",
  },
  {
    timeStamp: 1687364654.905,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6dc",
  },
  {
    timeStamp: 1687364654.992,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6dd",
  },
  {
    timeStamp: 1687364654.992,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6de",
  },
  {
    timeStamp: 1687364655.037,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;w</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6df",
  },
  {
    timeStamp: 1687364655.089,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;wo</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e0",
  },
  {
    timeStamp: 1687364655.122,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;wo</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e1",
  },
  {
    timeStamp: 1687364655.144,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;wo</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e2",
  },
  {
    timeStamp: 1687364655.244,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;wor</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e3",
  },
  {
    timeStamp: 1687364655.248,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;wor</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e4",
  },
  {
    timeStamp: 1687364655.323,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;work</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e5",
  },
  {
    timeStamp: 1687364655.399,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;work</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e6",
  },
  {
    timeStamp: 1687364655.515,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;works</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e7",
  },
  {
    timeStamp: 1687364655.7,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 129,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets&nbsp;see&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;works</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e8",
  },
  {
    timeStamp: 1687364655.88,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets</span><span class="mtkw">·</span><span class="mtk1">see</span><span class="mtkw">·</span><span class="mtk8">if</span><span class="mtkw">·</span><span class="mtk8">this</span><span class="mtkw">·</span><span class="mtk1">works</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6e9",
  },
  {
    timeStamp: 1687364655.911,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">lets</span><span class="mtkw">·</span><span class="mtk1">see</span><span class="mtkw">·</span><span class="mtk8">if</span><span class="mtkw">·</span><span class="mtk8">this</span><span class="mtkw">·</span><span class="mtk1">works</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6ea",
  },
  {
    timeStamp: 1687364656.49,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 129,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f6eb",
  },
  {
    timeStamp: 1687364657.403,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1053,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
    },
    _id: "6493244252172c7c1bb7f6ec",
  },
  {
    timeStamp: 1687364657.453,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1053,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f6ed",
  },
  {
    timeStamp: 1687364657.508,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/sketch", DOMLoadTime: 0 },
    _id: "6493244252172c7c1bb7f6ee",
  },
  {
    timeStamp: 1687364658.621,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 59,
      Y: 250,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path>',
    },
    _id: "6493244252172c7c1bb7f6ef",
  },
  {
    timeStamp: 1687364658.706,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 59,
      Y: 250,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#000"></path>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f6f0",
  },
  {
    timeStamp: 1687364659.063,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 230,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6f1",
  },
  {
    timeStamp: 1687364659.36,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 953,
      Y: 444,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6f2",
  },
  {
    timeStamp: 1687364659.977,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 51,
      Y: 314,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "6493244252172c7c1bb7f6f3",
  },
  {
    timeStamp: 1687364660.059,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 51,
      Y: 314,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#000"></path>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f6f4",
  },
  {
    timeStamp: 1687364660.375,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 167,
      Y: 149,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6f5",
  },
  {
    timeStamp: 1687364660.95,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1093,
      Y: 538,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6f6",
  },
  {
    timeStamp: 1687364661.743,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 44,
      Y: 377,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="triangle" data-toggle="tooltip" data-placement="top" title="Triangle" style="border: none; width: 76.8px; height: 61.29px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "6493244252172c7c1bb7f6f7",
  },
  {
    timeStamp: 1687364661.813,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 46,
      Y: 377,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#5B5858"></path></svg>',
    },
    _id: "6493244252172c7c1bb7f6f8",
  },
  {
    timeStamp: 1687364662.001,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 240,
      Y: 282,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6f9",
  },
  {
    timeStamp: 1687364662.187,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 612,
      Y: 497,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6fa",
  },
  {
    timeStamp: 1687364662.545,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 775,
      Y: 378,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6fb",
  },
  {
    timeStamp: 1687364662.607,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 778,
      Y: 377,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "6493244252172c7c1bb7f6fc",
  },
  {
    timeStamp: 1687364663.31,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 826,
      Y: 54,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
    },
    _id: "6493244252172c7c1bb7f6fd",
  },
  {
    timeStamp: 1687364663.391,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 826,
      Y: 54,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f6fe",
  },
  {
    timeStamp: 1687364664.546,
    name: "PAGE_EVENT",
    type: "BACK_FORWARD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6493244252172c7c1bb7f6ff",
  },
  {
    timeStamp: 1687364664.725,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "6493244252172c7c1bb7f700",
  },
  {
    timeStamp: 1687364664.871,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 368,
      Y: 190,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f701",
  },
  {
    timeStamp: 1687364664.956,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 368,
      Y: 190,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f702",
  },
  {
    timeStamp: 1687364665.27,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f703",
  },
  {
    timeStamp: 1687364665.419,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">w</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f704",
  },
  {
    timeStamp: 1687364665.471,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">w</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f705",
  },
  {
    timeStamp: 1687364665.541,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">wo</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f706",
  },
  {
    timeStamp: 1687364665.579,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "r",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">wo</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f707",
  },
  {
    timeStamp: 1687364665.653,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "k",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">wor</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f708",
  },
  {
    timeStamp: 1687364665.68,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "r",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">work</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f709",
  },
  {
    timeStamp: 1687364665.728,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "k",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">work</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f70a",
  },
  {
    timeStamp: 1687364665.817,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "e",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">work</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f70b",
  },
  {
    timeStamp: 1687364665.903,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "d",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worke</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f70c",
  },
  {
    timeStamp: 1687364665.96,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "e",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f70d",
  },
  {
    timeStamp: 1687364666.008,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f70e",
  },
  {
    timeStamp: 1687364666.026,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "d",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f70f",
  },
  {
    timeStamp: 1687364666.111,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f710",
  },
  {
    timeStamp: 1687364666.111,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f711",
  },
  {
    timeStamp: 1687364666.318,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f712",
  },
  {
    timeStamp: 1687364666.388,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f713",
  },
  {
    timeStamp: 1687364666.458,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f714",
  },
  {
    timeStamp: 1687364666.521,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;??</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f715",
  },
  {
    timeStamp: 1687364666.618,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;??</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f716",
  },
  {
    timeStamp: 1687364666.78,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 190,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked&nbsp;??</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f717",
  },
  {
    timeStamp: 1687364666.938,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">worked</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f718",
  },
  {
    timeStamp: 1687364666.957,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "a",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 613px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f719",
  },
  {
    timeStamp: 1687364666.992,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 190,
      key: "Backspace",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 613px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f71a",
  },
  {
    timeStamp: 1687364667.563,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 368,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 613px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f71b",
  },
  {
    timeStamp: 1687364667.653,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 368,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 613px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f71c",
  },
  {
    timeStamp: 1687364668.103,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 952,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6493244252172c7c1bb7f71d",
  },
  {
    timeStamp: 1687364668.172,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 954,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6493244252172c7c1bb7f71e",
  },
  {
    timeStamp: 1687364668.784,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/19",
      method: "GET",
      id: "g8jzfmbc-bom9-7yu4-wqln-ckcjyi1m90w6",
    },
    _id: "6493244252172c7c1bb7f71f",
  },
  {
    timeStamp: 1687364668.787,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 954,
      Y: 46,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      value: "java",
    },
    _id: "6493244252172c7c1bb7f720",
  },
  {
    timeStamp: 1687364668.787,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 871,
      Y: 19,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6493244252172c7c1bb7f721",
  },
  {
    timeStamp: 1687364669.101,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 801,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "6493244252172c7c1bb7f722",
  },
  {
    timeStamp: 1687364669.186,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 801,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f723",
  },
  {
    timeStamp: 1687364669.397,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 613,
      id: "g8jzfmbc-bom9-7yu4-wqln-ckcjyi1m90w6",
    },
    _id: "6493244252172c7c1bb7f724",
  },
  {
    timeStamp: 1687364669.397,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "6493244252172c7c1bb7f725",
  },
  {
    timeStamp: 1687364669.774,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 804,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      value: "16",
    },
    _id: "6493244252172c7c1bb7f726",
  },
  {
    timeStamp: 1687364669.775,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 761,
      Y: 19,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "6493244252172c7c1bb7f727",
  },
  {
    timeStamp: 1687364670.162,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 650,
      Y: 179,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 16px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 22px; letter-spacing: 0px; width: 690px; height: 613px;"><div style="top:0px;height:22px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493244252172c7c1bb7f728",
  },
  {
    timeStamp: 1687364670.213,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 650,
      Y: 179,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 16px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 22px; letter-spacing: 0px; width: 690px; height: 613px;"><div style="top:0px;height:22px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f729",
  },
  {
    timeStamp: 1687364670.781,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 771,
      Y: 44,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "6493244252172c7c1bb7f72a",
  },
  {
    timeStamp: 1687364670.861,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 771,
      Y: 44,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f72b",
  },
  {
    timeStamp: 1687364671.416,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 782,
      Y: 131,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas class="minimap-decorations-layer" width="79" height="919" style="position: absolute; left: 0px; width: 52.6667px; height: 612.667px;"></canvas>',
      value: "18",
    },
    _id: "6493244252172c7c1bb7f72c",
  },
  {
    timeStamp: 1687364671.417,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 761,
      Y: 19,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas class="minimap-decorations-layer" width="79" height="919" style="position: absolute; left: 0px; width: 52.6667px; height: 612.667px;"></canvas>',
    },
    _id: "6493244252172c7c1bb7f72d",
  },
  {
    timeStamp: 1687364671.692,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 610,
      Y: 143,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f72e",
  },
  {
    timeStamp: 1687364671.763,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 610,
      Y: 143,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "6493244252172c7c1bb7f72f",
  },
  {
    timeStamp: 1687364671.993,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f730",
  },
  {
    timeStamp: 1687364672.103,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "W",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f731",
  },
  {
    timeStamp: 1687364672.199,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f732",
  },
  {
    timeStamp: 1687364672.216,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f733",
  },
  {
    timeStamp: 1687364672.363,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f734",
  },
  {
    timeStamp: 1687364672.432,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f735",
  },
  {
    timeStamp: 1687364672.454,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f736",
  },
  {
    timeStamp: 1687364672.563,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f737",
  },
  {
    timeStamp: 1687364672.569,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f738",
  },
  {
    timeStamp: 1687364672.617,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f739",
  },
  {
    timeStamp: 1687364672.648,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f73a",
  },
  {
    timeStamp: 1687364672.749,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Worke</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f73b",
  },
  {
    timeStamp: 1687364673.077,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Worke</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f73c",
  },
  {
    timeStamp: 1687364673.148,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workei</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f73d",
  },
  {
    timeStamp: 1687364673.176,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workein</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f73e",
  },
  {
    timeStamp: 1687364673.176,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workein</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f73f",
  },
  {
    timeStamp: 1687364673.216,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f740",
  },
  {
    timeStamp: 1687364673.317,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f741",
  },
  {
    timeStamp: 1687364673.318,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f742",
  },
  {
    timeStamp: 1687364673.322,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "G",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f743",
  },
  {
    timeStamp: 1687364673.347,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f744",
  },
  {
    timeStamp: 1687364673.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f745",
  },
  {
    timeStamp: 1687364673.721,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workeing</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f746",
  },
  {
    timeStamp: 1687364673.848,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workein</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f747",
  },
  {
    timeStamp: 1687364673.969,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workei</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f748",
  },
  {
    timeStamp: 1687364674.098,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Worke</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f749",
  },
  {
    timeStamp: 1687364674.24,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f74a",
  },
  {
    timeStamp: 1687364674.401,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f74b",
  },
  {
    timeStamp: 1687364674.453,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Worki</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f74c",
  },
  {
    timeStamp: 1687364674.5,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workin</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f74d",
  },
  {
    timeStamp: 1687364674.529,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workin</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f74e",
  },
  {
    timeStamp: 1687364674.529,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Workin</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f74f",
  },
  {
    timeStamp: 1687364674.626,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f750",
  },
  {
    timeStamp: 1687364674.652,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f751",
  },
  {
    timeStamp: 1687364674.652,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "G",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f752",
  },
  {
    timeStamp: 1687364674.701,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f753",
  },
  {
    timeStamp: 1687364674.929,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f754",
  },
  {
    timeStamp: 1687364674.983,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f755",
  },
  {
    timeStamp: 1687364675.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f756",
  },
  {
    timeStamp: 1687364675.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;??</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f757",
  },
  {
    timeStamp: 1687364675.157,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;??</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f758",
  },
  {
    timeStamp: 1687364675.314,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 610,
      Y: 143,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working&nbsp;??</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f759",
  },
  {
    timeStamp: 1687364675.478,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">Working</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div>',
    },
    _id: "6493244252172c7c1bb7f75a",
  },
  {
    timeStamp: 1687364675.53,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f75b",
  },
  {
    timeStamp: 1687364675.531,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 610,
      Y: 143,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493244252172c7c1bb7f75c",
  },
];

function isClickPresentAhead(events, i) {
  for (let j = i; j < events.length; j++) {
    if (events[j].name === "USER_EVENT") {
      if (events[j].type === "CLICK") {
        return true;
      } else if (events[j].type === "MOUSEUP" || events[j].type === "KEYDOWN") {
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
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const pre = document.createElement("pre");
    pre.id = "id-abc_user/g9sp8514-2wuu-6hh9-tpm4-jz40ajaqd5bo";
    pre.style.fontSize = "0.75rem";
    pre.style.pointerEvents = "none";
    pre.style.position = "fixed";
    pre.style.backgroundColor = "black";
    pre.style.borderRadius = "0.2em";
    pre.style.padding = "0.2em";
    pre.style.color = "white";
    pre.style.zIndex = "999";
    pre.style.top = "0em";
    pre.style.right = "0em";
    pre.style.opacity = "0.5";
    document.body.appendChild(pre);
  });

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 17px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
  });

  let prevTimeStamp = events[0].timeStamp;
  let lastClickX, lastClickY, lastClickScrollX, lastClickScrollY;
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
            lastClickX = X;
            lastClickY = Y;
            lastClickScrollX = scrollX;
            lastClickScrollY = scrollY;
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
              async (
                lastClickScrollX,
                lastClickScrollY,
                lastClickX,
                lastClickY,
                value,
                checked,
                htmlElement
              ) => {
                await new Promise((resolve) => {
                  window.scrollTo(lastClickScrollX, lastClickScrollY);
                  document.elementFromPoint(
                    lastClickX - lastClickScrollX,
                    lastClickY - lastClickScrollY
                  ).value = value;

                  document.elementFromPoint(
                    lastClickX - lastClickScrollX,
                    lastClickY - lastClickScrollY
                  ).checked = checked;

                  document
                    .elementFromPoint(
                      lastClickX - lastClickScrollX,
                      lastClickY - lastClickScrollY
                    )
                    .dispatchEvent(new Event("change", { bubbles: true }));
                  resolve();
                });
              },
              lastClickScrollX,
              lastClickScrollY,
              lastClickX,
              lastClickY,
              value,
              checked,
              htmlElement
            );

            break;
        }
      } else if (event.name === "PAGE_EVENT") {
        if (prevTimeStamp === event.timeStamp) continue;
        const delay = event.timeStamp - prevTimeStamp;
        console.log("delay ", delay);
        await wait(delay);

        await page.goto(event.data.URL, {
          waitUntil: "networkidle0",
        });
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
