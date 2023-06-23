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
    timeStamp: 1687513829.584,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64956b0509ae56aec3814e4c",
  },
  {
    timeStamp: 1687513830.342,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 247,
      Y: 150,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e4d",
  },
  {
    timeStamp: 1687513830.407,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 240,
      Y: 147,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e4e",
  },
  {
    timeStamp: 1687513830.61,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e4f",
  },
  {
    timeStamp: 1687513830.705,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "W",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e50",
  },
  {
    timeStamp: 1687513830.818,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15403:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14788:14)",
    },
    _id: "64956b0509ae56aec3814e51",
  },
  {
    timeStamp: 1687513830.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e52",
  },
  {
    timeStamp: 1687513830.826,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e53",
  },
  {
    timeStamp: 1687513830.969,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e54",
  },
  {
    timeStamp: 1687513831.077,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e55",
  },
  {
    timeStamp: 1687513831.078,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e56",
  },
  {
    timeStamp: 1687513831.092,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e57",
  },
  {
    timeStamp: 1687513831.153,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e58",
  },
  {
    timeStamp: 1687513831.225,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e59",
  },
  {
    timeStamp: 1687513831.432,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e5a",
  },
  {
    timeStamp: 1687513831.498,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Worki</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e5b",
  },
  {
    timeStamp: 1687513831.538,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Workin</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e5c",
  },
  {
    timeStamp: 1687513831.538,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Workin</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e5d",
  },
  {
    timeStamp: 1687513831.589,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e5e",
  },
  {
    timeStamp: 1687513831.622,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e5f",
  },
  {
    timeStamp: 1687513831.641,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e60",
  },
  {
    timeStamp: 1687513831.696,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e61",
  },
  {
    timeStamp: 1687513831.729,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e62",
  },
  {
    timeStamp: 1687513831.878,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e63",
  },
  {
    timeStamp: 1687513831.948,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e64",
  },
  {
    timeStamp: 1687513832.018,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e65",
  },
  {
    timeStamp: 1687513832.086,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e66",
  },
  {
    timeStamp: 1687513832.11,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "/",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e67",
  },
  {
    timeStamp: 1687513832.29,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 240,
      Y: 147,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e68",
  },
  {
    timeStamp: 1687513832.408,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Working</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e69",
  },
  {
    timeStamp: 1687513832.442,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e6a",
  },
  {
    timeStamp: 1687513832.46,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 240,
      Y: 147,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e6b",
  },
  {
    timeStamp: 1687513833.623,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1372,
      Y: 30,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
    },
    _id: "64956b0509ae56aec3814e6c",
  },
  {
    timeStamp: 1687513833.684,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1371,
      Y: 30,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
    },
    _id: "64956b0509ae56aec3814e6d",
  },
  {
    timeStamp: 1687513833.686,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://trax.dev-dnaspaces.io/postData",
      method: "POST",
      id: "fl3r89cc-drml-0r09-qqam-ql6f3bk4uz6p",
    },
    _id: "64956b0509ae56aec3814e6e",
  },
  {
    timeStamp: 1687513833.688,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 4.105 },
    _id: "64956b0509ae56aec3814e6f",
  },
  {
    timeStamp: 1687513833.709,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "64956b0509ae56aec3814e70",
  },
  {
    timeStamp: 1687513833.764,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/sketch", DOMLoadTime: 0 },
    _id: "64956b0509ae56aec3814e71",
  },
  {
    timeStamp: 1687513834.629,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 41,
      Y: 299,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="rectangle" data-toggle="tooltip" data-placement="top" title="Rectangle" style="border: none; width: 96px; height: 76.68px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "64956b0509ae56aec3814e72",
  },
  {
    timeStamp: 1687513834.678,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 40,
      Y: 300,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="rectangle" data-toggle="tooltip" data-placement="top" title="Rectangle" style="border: none; width: 96px; height: 76.68px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "64956b0509ae56aec3814e73",
  },
  {
    timeStamp: 1687513834.875,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 302,
      Y: 206,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e74",
  },
  {
    timeStamp: 1687513835.024,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 785,
      Y: 676,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e75",
  },
  {
    timeStamp: 1687513835.531,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 66,
      Y: 384,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "64956b0509ae56aec3814e76",
  },
  {
    timeStamp: 1687513835.606,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 70,
      Y: 385,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "64956b0509ae56aec3814e77",
  },
  {
    timeStamp: 1687513835.785,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 380,
      Y: 200,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e78",
  },
  {
    timeStamp: 1687513835.936,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1114,
      Y: 793,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e79",
  },
  {
    timeStamp: 1687513836.636,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 69,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#5B5858"></path>',
    },
    _id: "64956b0509ae56aec3814e7a",
  },
  {
    timeStamp: 1687513836.712,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 69,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#000"></path>',
      button: 0,
    },
    _id: "64956b0509ae56aec3814e7b",
  },
  {
    timeStamp: 1687513836.873,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 460,
      Y: 276,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e7c",
  },
  {
    timeStamp: 1687513837.004,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 980,
      Y: 736,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e7d",
  },
  {
    timeStamp: 1687513837.751,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 572,
      Y: 238,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e7e",
  },
  {
    timeStamp: 1687513837.877,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 978,
      Y: 626,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e7f",
  },
  {
    timeStamp: 1687513838.219,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 782,
      Y: 64,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e80",
  },
  {
    timeStamp: 1687513838.351,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1194,
      Y: 593,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e81",
  },
  {
    timeStamp: 1687513838.604,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 617,
      Y: 110,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e82",
  },
  {
    timeStamp: 1687513838.758,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1183,
      Y: 739,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e83",
  },
  {
    timeStamp: 1687513839.59,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1003,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button data-toggle="tooltip" data-placement="top" title="Clear" style="border: none; width: 116.8px; height: 76.68px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg></button>',
    },
    _id: "64956b0509ae56aec3814e84",
  },
  {
    timeStamp: 1687513839.661,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1009,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button data-toggle="tooltip" data-placement="top" title="Clear" style="border: none; width: 116.8px; height: 76.68px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg></button>',
    },
    _id: "64956b0509ae56aec3814e85",
  },
  {
    timeStamp: 1687513841.731,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 347,
      Y: 2,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e86",
  },
  {
    timeStamp: 1687513841.809,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://trax.dev-dnaspaces.io/postData",
      method: "POST",
      id: "ca6w6zmh-oka2-2shw-lds3-hjsgnjwyl61m",
    },
    _id: "64956b0509ae56aec3814e87",
  },
  {
    timeStamp: 1687513841.81,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 8.047 },
    _id: "64956b0509ae56aec3814e88",
  },
  {
    timeStamp: 1687513841.814,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 347,
      Y: 2,
      key: "Backspace",
      HTMLElement:
        '<canvas id="canvas" class="App" width="1600" height="852">Canvas</canvas>',
    },
    _id: "64956b0509ae56aec3814e89",
  },
  {
    timeStamp: 1687513842.132,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "64956b0509ae56aec3814e8a",
  },
  {
    timeStamp: 1687513842.185,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64956b0509ae56aec3814e8b",
  },
  {
    timeStamp: 1687513842.46,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15403:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14788:14)",
    },
    _id: "64956b0509ae56aec3814e8c",
  },
  {
    timeStamp: 1687513842.798,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 177,
      Y: 104,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 1027px; height: 766px;"><div data-mprt="3" class="overflow-guard" style="width: 1027px; height: 766px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 785px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 785px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 785px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 766px; width: 963px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 864px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:864px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 864px; height: 785px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 1.66667px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 850px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 850px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="16" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 766px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 766px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 747px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 914px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 1027px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 914px; width: 99px; height: 766px;"><div class="minimap-shadow-hidden" style="height: 766px;"></div><canvas width="118" height="919" style="position: absolute; left: 0px; width: 98.3333px; height: 765.833px;"></canvas><canvas class="minimap-decorations-layer" width="118" height="919" style="position: absolute; left: 0px; width: 98.3333px; height: 765.833px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 99px; display: block; top: 0px; height: 67px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 99px; top: 0px; height: 67px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1600px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 677.82px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1600px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "64956b0509ae56aec3814e8d",
  },
  {
    timeStamp: 1687513842.88,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 177,
      Y: 104,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 1027px; height: 766px;"><div data-mprt="3" class="overflow-guard" style="width: 1027px; height: 766px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 785px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 785px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 785px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 766px; width: 963px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 864px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:864px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 864px; height: 785px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 1.66667px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 850px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 850px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="16" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 766px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 766px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 747px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 914px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 1027px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 914px; width: 99px; height: 766px;"><div class="minimap-shadow-hidden" style="height: 766px;"></div><canvas width="118" height="919" style="position: absolute; left: 0px; width: 98.3333px; height: 765.833px;"></canvas><canvas class="minimap-decorations-layer" width="118" height="919" style="position: absolute; left: 0px; width: 98.3333px; height: 765.833px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 99px; display: block; top: 0px; height: 67px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 99px; top: 0px; height: 67px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1600px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 677.82px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1600px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
      button: 0,
    },
    _id: "64956b0509ae56aec3814e8e",
  },
  {
    timeStamp: 1687513843.109,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 150,
      Y: 150,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e8f",
  },
  {
    timeStamp: 1687513843.158,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 150,
      Y: 150,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64956b0509ae56aec3814e90",
  },
  {
    timeStamp: 1687513843.262,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e91",
  },
  {
    timeStamp: 1687513843.35,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "W",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814e92",
  },
  {
    timeStamp: 1687513843.452,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e93",
  },
  {
    timeStamp: 1687513843.465,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e94",
  },
  {
    timeStamp: 1687513843.635,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e95",
  },
  {
    timeStamp: 1687513843.76,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e96",
  },
  {
    timeStamp: 1687513843.789,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e97",
  },
  {
    timeStamp: 1687513843.859,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e98",
  },
  {
    timeStamp: 1687513843.908,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e99",
  },
  {
    timeStamp: 1687513843.984,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e9a",
  },
  {
    timeStamp: 1687513844.052,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e9b",
  },
  {
    timeStamp: 1687513844.17,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e9c",
  },
  {
    timeStamp: 1687513844.228,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e9d",
  },
  {
    timeStamp: 1687513844.285,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e9e",
  },
  {
    timeStamp: 1687513844.342,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814e9f",
  },
  {
    timeStamp: 1687513844.506,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea0",
  },
  {
    timeStamp: 1687513844.576,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea1",
  },
  {
    timeStamp: 1687513844.637,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea2",
  },
  {
    timeStamp: 1687513844.758,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea3",
  },
  {
    timeStamp: 1687513844.759,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "/",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea4",
  },
  {
    timeStamp: 1687513844.924,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 150,
      Y: 150,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Works&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea5",
  },
  {
    timeStamp: 1687513845.078,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea6",
  },
  {
    timeStamp: 1687513845.1,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea7",
  },
  {
    timeStamp: 1687513845.118,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 150,
      Y: 150,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814ea8",
  },
  {
    timeStamp: 1687513846.541,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1240,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "64956b0509ae56aec3814ea9",
  },
  {
    timeStamp: 1687513846.612,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1240,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      button: 0,
    },
    _id: "64956b0509ae56aec3814eaa",
  },
  {
    timeStamp: 1687513847.194,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/71",
      method: "GET",
      id: "5hk3u9nx-tpcn-m4uj-a779-apgj839ssmqp",
    },
    _id: "64956b0509ae56aec3814eab",
  },
  {
    timeStamp: 1687513847.197,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 1243,
      Y: 56,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "64956b0509ae56aec3814eac",
  },
  {
    timeStamp: 1687513847.199,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1188,
      Y: 28,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "64956b0509ae56aec3814ead",
  },
  {
    timeStamp: 1687513847.606,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1125,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64956b0509ae56aec3814eae",
  },
  {
    timeStamp: 1687513847.67,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1124,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64956b0509ae56aec3814eaf",
  },
  {
    timeStamp: 1687513847.943,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 749,
      id: "5hk3u9nx-tpcn-m4uj-a779-apgj839ssmqp",
    },
    _id: "64956b0509ae56aec3814eb0",
  },
  {
    timeStamp: 1687513847.943,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15403:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14788:14)",
    },
    _id: "64956b0509ae56aec3814eb1",
  },
  {
    timeStamp: 1687513848.292,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 1123,
      Y: 57,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64956b0509ae56aec3814eb2",
  },
  {
    timeStamp: 1687513848.292,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1074,
      Y: 28,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64956b0509ae56aec3814eb3",
  },
  {
    timeStamp: 1687513849.089,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://trax.dev-dnaspaces.io/postData",
      method: "POST",
      id: "jumh4zu5-qbeh-nqs5-faio-htw45v339vc3",
    },
    _id: "64956b0509ae56aec3814eb4",
  },
  {
    timeStamp: 1687513849.092,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 6.907 },
    _id: "64956b0509ae56aec3814eb5",
  },
  {
    timeStamp: 1687513849.102,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "64956b0509ae56aec3814eb6",
  },
  {
    timeStamp: 1687513849.179,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64956b0509ae56aec3814eb7",
  },
  {
    timeStamp: 1687513849.47,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 212,
      Y: 152,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814eb8",
  },
  {
    timeStamp: 1687513849.552,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 212,
      Y: 152,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64956b0509ae56aec3814eb9",
  },
  {
    timeStamp: 1687513849.63,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814eba",
  },
  {
    timeStamp: 1687513849.736,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "R",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814ebb",
  },
  {
    timeStamp: 1687513849.79,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ebc",
  },
  {
    timeStamp: 1687513849.83,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ebd",
  },
  {
    timeStamp: 1687513849.912,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ebe",
  },
  {
    timeStamp: 1687513849.98,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15403:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14788:14)",
    },
    _id: "64956b0509ae56aec3814ebf",
  },
  {
    timeStamp: 1687513849.991,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Re</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec0",
  },
  {
    timeStamp: 1687513850.094,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Re</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec1",
  },
  {
    timeStamp: 1687513850.196,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Rel</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec2",
  },
  {
    timeStamp: 1687513850.245,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Relo</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec3",
  },
  {
    timeStamp: 1687513850.246,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Relo</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec4",
  },
  {
    timeStamp: 1687513850.287,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloa</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec5",
  },
  {
    timeStamp: 1687513850.308,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloa</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec6",
  },
  {
    timeStamp: 1687513850.355,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reload</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec7",
  },
  {
    timeStamp: 1687513850.424,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reload</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec8",
  },
  {
    timeStamp: 1687513850.49,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reload</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ec9",
  },
  {
    timeStamp: 1687513850.56,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloade</span></span></div>',
    },
    _id: "64956b0509ae56aec3814eca",
  },
  {
    timeStamp: 1687513850.614,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ecb",
  },
  {
    timeStamp: 1687513850.679,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ecc",
  },
  {
    timeStamp: 1687513850.698,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ecd",
  },
  {
    timeStamp: 1687513850.768,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ece",
  },
  {
    timeStamp: 1687513850.802,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ecf",
  },
  {
    timeStamp: 1687513850.84,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed0",
  },
  {
    timeStamp: 1687513850.92,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed1",
  },
  {
    timeStamp: 1687513850.983,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed2",
  },
  {
    timeStamp: 1687513851.067,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed3",
  },
  {
    timeStamp: 1687513851.086,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed4",
  },
  {
    timeStamp: 1687513851.385,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 210,
      Y: 152,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded&nbsp;??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed5",
  },
  {
    timeStamp: 1687513851.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed6",
  },
  {
    timeStamp: 1687513851.589,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Reloaded</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed7",
  },
  {
    timeStamp: 1687513851.637,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 210,
      Y: 152,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed8",
  },
  {
    timeStamp: 1687513852.639,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 210,
      Y: 152,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64956b0509ae56aec3814ed9",
  },
  {
    timeStamp: 1687513859.135,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://trax.dev-dnaspaces.io/postData",
      method: "POST",
      id: "64iltclm-nk8c-4p01-4lws-cllpba1ygw20",
    },
    _id: "64956b0509ae56aec3814eda",
  },
  {
    timeStamp: 1687513859.162,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 680,
      Y: 22,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "64956b0509ae56aec3814edb",
  },
  {
    timeStamp: 1687513859.653,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://trax.dev-dnaspaces.io/postData",
      status: 404,
      responseData:
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot POST /postData</pre>\n</body>\n</html>\n',
      id: "64iltclm-nk8c-4p01-4lws-cllpba1ygw20",
      duration: 518,
    },
    _id: "64956b0509ae56aec3814edc",
  },
  {
    timeStamp: 1687513861.07,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://trax.dev-dnaspaces.io/postData",
      method: "POST",
      id: "iabj4fdb-vtw0-0qoz-ohn7-hrulv4zq7jyi",
    },
    _id: "64956b0509ae56aec3814edd",
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
    width: 1600,
    height: 852,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const pre = document.createElement("pre");
    pre.id = "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo";
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

  const updateTimer = () => {
    let seconds = 0;

    setInterval(() => {
      seconds++;
      page.evaluate((time) => {
        const pre = document.getElementById(
          "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo"
        );
        if (pre === null || pre === undefined) {
          const pre = document.createElement("pre");
          pre.id = "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo";
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
          pre.textContent = "Session : abc_user/test \n" + "Elapsed : " + time;
        } else {
          pre.textContent = "Session : abc_user/test \n" + "Elapsed : " + time;
        }
      }, seconds);
    }, 1000);
  };

  // Start the timer
  updateTimer();

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 21px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
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
        const newURL = event.data.URL;
        await page.goto(newURL + "?session-replay=true", {
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
