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
    timeStamp: 1687366408.8,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f26a",
  },
  {
    timeStamp: 1687366409.702,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 382,
      Y: 153,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f26b",
  },
  {
    timeStamp: 1687366409.776,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 382,
      Y: 153,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f26c",
  },
  {
    timeStamp: 1687366409.897,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "64932b3f52172c7c1bb9f26d",
  },
  {
    timeStamp: 1687366410.345,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 328,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f26e",
  },
  {
    timeStamp: 1687366410.464,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 328,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f26f",
  },
  {
    timeStamp: 1687366411.078,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f270",
  },
  {
    timeStamp: 1687366411.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">o</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f271",
  },
  {
    timeStamp: 1687366411.194,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">on</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f272",
  },
  {
    timeStamp: 1687366411.223,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "c",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">on</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f273",
  },
  {
    timeStamp: 1687366411.26,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">onc</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f274",
  },
  {
    timeStamp: 1687366411.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">onc</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f275",
  },
  {
    timeStamp: 1687366411.345,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "c",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f276",
  },
  {
    timeStamp: 1687366411.345,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f277",
  },
  {
    timeStamp: 1687366411.718,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f278",
  },
  {
    timeStamp: 1687366411.885,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f279",
  },
  {
    timeStamp: 1687366411.886,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f27a",
  },
  {
    timeStamp: 1687366411.891,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f27b",
  },
  {
    timeStamp: 1687366411.92,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;ga</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f27c",
  },
  {
    timeStamp: 1687366411.992,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;ga</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f27d",
  },
  {
    timeStamp: 1687366412.344,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;g</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f27e",
  },
  {
    timeStamp: 1687366412.47,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f27f",
  },
  {
    timeStamp: 1687366412.504,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;a</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f280",
  },
  {
    timeStamp: 1687366412.554,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;a</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f281",
  },
  {
    timeStamp: 1687366412.571,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;a</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f282",
  },
  {
    timeStamp: 1687366412.632,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;ag</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f283",
  },
  {
    timeStamp: 1687366412.633,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;ag</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f284",
  },
  {
    timeStamp: 1687366412.68,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;aga</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f285",
  },
  {
    timeStamp: 1687366412.731,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;agai</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f286",
  },
  {
    timeStamp: 1687366412.748,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;agai</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f287",
  },
  {
    timeStamp: 1687366412.771,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f288",
  },
  {
    timeStamp: 1687366412.835,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f289",
  },
  {
    timeStamp: 1687366412.89,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f28a",
  },
  {
    timeStamp: 1687366413.003,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f28b",
  },
  {
    timeStamp: 1687366413.08,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f28c",
  },
  {
    timeStamp: 1687366413.15,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;t</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f28d",
  },
  {
    timeStamp: 1687366413.238,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;t</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f28e",
  },
  {
    timeStamp: 1687366413.292,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "y",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;tr</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f28f",
  },
  {
    timeStamp: 1687366413.321,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;</span><span class="mtk8">try</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f290",
  },
  {
    timeStamp: 1687366413.369,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "y",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;</span><span class="mtk8">try</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f291",
  },
  {
    timeStamp: 1687366413.44,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;</span><span class="mtk8">try</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f292",
  },
  {
    timeStamp: 1687366413.509,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;tryi</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f293",
  },
  {
    timeStamp: 1687366413.555,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;tryin</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f294",
  },
  {
    timeStamp: 1687366413.555,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;tryin</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f295",
  },
  {
    timeStamp: 1687366413.608,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f296",
  },
  {
    timeStamp: 1687366413.631,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f297",
  },
  {
    timeStamp: 1687366413.817,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f298",
  },
  {
    timeStamp: 1687366413.963,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f299",
  },
  {
    timeStamp: 1687366413.986,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f29a",
  },
  {
    timeStamp: 1687366414.004,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 328,
      Y: 124,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f29b",
  },
  {
    timeStamp: 1687366414.319,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 328,
      Y: 124,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f29c",
  },
  {
    timeStamp: 1687366414.543,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 340,
      Y: 107,
      key: "Control",
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark focused" role="code" data-uri="inmemory://model/1" style="width: 471px; height: 580px;"><div data-mprt="3" class="overflow-guard" style="width: 471px; height: 580px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 599px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 599px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays focused" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 599px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="current-line" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 580px; width: 407px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays focused" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 368px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="cslr selected-text top-left-radius top-right-radius bottom-right-radius" style="top:0px;left:0px;width:139px;height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="cslr selected-text bottom-left-radius top-right-radius bottom-right-radius" style="top:0px;left:0px;width:0px;height:19px;"></div></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 368px; height: 599px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once</span><span class="mtkw">·</span><span class="mtk1">again</span><span class="mtkw">·</span><span class="mtk1">trying</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer has-selection cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 19px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: inherit; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 354px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 354px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="870" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 580px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 580px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 561px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 418px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 19px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 471px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 418px; width: 39px; height: 580px;"><div class="minimap-shadow-hidden" style="height: 580px;"></div><canvas width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><canvas class="minimap-decorations-layer" width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 39px; display: block; top: 0px; height: 40px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 39px; top: 0px; height: 40px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 745px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 745px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 500px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "64932b3f52172c7c1bb9f29d",
  },
  {
    timeStamp: 1687366414.543,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 340,
      Y: 107,
      key: "z",
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark focused" role="code" data-uri="inmemory://model/1" style="width: 471px; height: 580px;"><div data-mprt="3" class="overflow-guard" style="width: 471px; height: 580px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 599px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 599px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays focused" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 599px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="current-line" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 580px; width: 407px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays focused" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 368px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="cslr selected-text top-left-radius top-right-radius bottom-right-radius" style="top:0px;left:0px;width:139px;height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="cslr selected-text bottom-left-radius top-right-radius bottom-right-radius" style="top:0px;left:0px;width:0px;height:19px;"></div></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 368px; height: 599px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">once</span><span class="mtkw">·</span><span class="mtk1">again</span><span class="mtkw">·</span><span class="mtk1">trying</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer has-selection cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 19px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: inherit; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 354px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 354px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="870" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 580px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 580px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 561px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 418px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 19px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 471px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 418px; width: 39px; height: 580px;"><div class="minimap-shadow-hidden" style="height: 580px;"></div><canvas width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><canvas class="minimap-decorations-layer" width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 39px; display: block; top: 0px; height: 40px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 39px; top: 0px; height: 40px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 745px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 745px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 500px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "64932b3f52172c7c1bb9f29e",
  },
  {
    timeStamp: 1687366414.789,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 415,
      Y: 23,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "64932b3f52172c7c1bb9f29f",
  },
  {
    timeStamp: 1687366414.861,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 415,
      Y: 23,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2a0",
  },
  {
    timeStamp: 1687366415.966,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 405,
      Y: 50,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div>',
    },
    _id: "64932b3f52172c7c1bb9f2a1",
  },
  {
    timeStamp: 1687366416.052,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/19",
      method: "GET",
      id: "jxpo1dhh-9zl8-yits-eh1u-dnshns9y5ul7",
    },
    _id: "64932b3f52172c7c1bb9f2a2",
  },
  {
    timeStamp: 1687366416.056,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 405,
      Y: 50,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div>',
      value: "java",
    },
    _id: "64932b3f52172c7c1bb9f2a3",
  },
  {
    timeStamp: 1687366416.057,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 336,
      Y: 18,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div>',
    },
    _id: "64932b3f52172c7c1bb9f2a4",
  },
  {
    timeStamp: 1687366416.317,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 265,
      id: "jxpo1dhh-9zl8-yits-eh1u-dnshns9y5ul7",
    },
    _id: "64932b3f52172c7c1bb9f2a5",
  },
  {
    timeStamp: 1687366416.317,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "64932b3f52172c7c1bb9f2a6",
  },
  {
    timeStamp: 1687366416.383,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 277,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64932b3f52172c7c1bb9f2a7",
  },
  {
    timeStamp: 1687366416.448,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 277,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2a8",
  },
  {
    timeStamp: 1687366417.05,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 276,
      Y: 46,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      value: "18",
    },
    _id: "64932b3f52172c7c1bb9f2a9",
  },
  {
    timeStamp: 1687366417.05,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 226,
      Y: 18,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64932b3f52172c7c1bb9f2aa",
  },
  {
    timeStamp: 1687366417.686,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 398,
      Y: 210,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once</span><span class="mtkw">·</span><span class="mtk1">again</span><span class="mtkw">·</span><span class="mtk1">trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ab",
  },
  {
    timeStamp: 1687366417.752,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 398,
      Y: 210,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2ac",
  },
  {
    timeStamp: 1687366418.419,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ad",
  },
  {
    timeStamp: 1687366418.567,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">w</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ae",
  },
  {
    timeStamp: 1687366418.625,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">w</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2af",
  },
  {
    timeStamp: 1687366418.686,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">wo</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b0",
  },
  {
    timeStamp: 1687366418.726,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "r",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">wo</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b1",
  },
  {
    timeStamp: 1687366418.788,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "k",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">wor</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b2",
  },
  {
    timeStamp: 1687366418.81,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "r",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">work</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b3",
  },
  {
    timeStamp: 1687366418.881,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "k",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">work</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b4",
  },
  {
    timeStamp: 1687366418.958,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "e",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">work</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b5",
  },
  {
    timeStamp: 1687366419.051,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "d",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worke</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b6",
  },
  {
    timeStamp: 1687366419.09,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "e",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b7",
  },
  {
    timeStamp: 1687366419.159,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b8",
  },
  {
    timeStamp: 1687366419.163,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "d",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2b9",
  },
  {
    timeStamp: 1687366419.248,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ba",
  },
  {
    timeStamp: 1687366419.373,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2bb",
  },
  {
    timeStamp: 1687366419.457,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2bc",
  },
  {
    timeStamp: 1687366419.492,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2bd",
  },
  {
    timeStamp: 1687366419.57,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 184,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2be",
  },
  {
    timeStamp: 1687366419.648,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;??</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2bf",
  },
  {
    timeStamp: 1687366419.722,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 184,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 365px; height: 604px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">once&nbsp;again&nbsp;trying</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">worked&nbsp;??</span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2c0",
  },
  {
    timeStamp: 1687366420.536,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 503,
      Y: 22,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2c1",
  },
  {
    timeStamp: 1687366420.603,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 503,
      Y: 22,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2c2",
  },
  {
    timeStamp: 1687366420.654,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/sketch", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f2c3",
  },
  {
    timeStamp: 1687366421.718,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 36,
      Y: 234,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2c4",
  },
  {
    timeStamp: 1687366421.807,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 36,
      Y: 234,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#000"></path></svg>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2c5",
  },
  {
    timeStamp: 1687366422.051,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 136,
      Y: 166,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2c6",
  },
  {
    timeStamp: 1687366422.255,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 382,
      Y: 392,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2c7",
  },
  {
    timeStamp: 1687366422.848,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 45,
      Y: 295,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "64932b3f52172c7c1bb9f2c8",
  },
  {
    timeStamp: 1687366422.926,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 46,
      Y: 295,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "64932b3f52172c7c1bb9f2c9",
  },
  {
    timeStamp: 1687366423.61,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 130,
      Y: 160,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2ca",
  },
  {
    timeStamp: 1687366425.322,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 378,
      Y: 397,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2cb",
  },
  {
    timeStamp: 1687366426.006,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 39,
      Y: 354,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#5B5858"></path>',
    },
    _id: "64932b3f52172c7c1bb9f2cc",
  },
  {
    timeStamp: 1687366426.074,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 39,
      Y: 354,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#000"></path>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2cd",
  },
  {
    timeStamp: 1687366426.443,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 197,
      Y: 222,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2ce",
  },
  {
    timeStamp: 1687366427.049,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 344,
      Y: 350,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2cf",
  },
  {
    timeStamp: 1687366427.487,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 51,
      Y: 351,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#000"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2d0",
  },
  {
    timeStamp: 1687366427.564,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 51,
      Y: 351,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#000"></path></svg>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2d1",
  },
  {
    timeStamp: 1687366427.94,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 260,
      Y: 220,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2d2",
  },
  {
    timeStamp: 1687366429.275,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 643,
      Y: 502,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2d3",
  },
  {
    timeStamp: 1687366430.655,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 38,
      Y: 410,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="29%" height="29%" viewBox="0 0 11 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20.8718C11 26.6068 11 32.2479 11 37.9829C11 38.641 10.812 38.8291 10.1538 38.8291C7.05128 38.8291 3.94872 38.8291 0.846154 38.8291C0.282051 38.8291 0 38.735 0 38.0769C0.0940171 26.6068 0.0940171 15.2308 0.0940171 3.76068C0.0940171 1.41026 1.59829 0 3.8547 0C4.98291 0 6.01709 0 7.1453 0C9.49573 0 11 1.41026 11 3.8547C11 7.99145 11 12.0342 11 16.1709C11 17.7692 11 19.2735 11 20.8718Z" fill="#5B5858"></path><path d="M1.31622 40.2393H9.58973C10.1538 40.2393 10.5299 40.8034 10.3419 41.2735C8.83759 45.5043 7.33332 49.735 5.82904 53.9658C5.73503 54.1539 5.45297 54.1539 5.35896 53.9658C3.85468 49.641 2.25639 45.3162 0.75212 40.9915C0.564086 40.6154 0.846137 40.2393 1.31622 40.2393Z" fill="#5B5858"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2d4",
  },
  {
    timeStamp: 1687366430.749,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 38,
      Y: 410,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="29%" height="29%" viewBox="0 0 11 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20.8718C11 26.6068 11 32.2479 11 37.9829C11 38.641 10.812 38.8291 10.1538 38.8291C7.05128 38.8291 3.94872 38.8291 0.846154 38.8291C0.282051 38.8291 0 38.735 0 38.0769C0.0940171 26.6068 0.0940171 15.2308 0.0940171 3.76068C0.0940171 1.41026 1.59829 0 3.8547 0C4.98291 0 6.01709 0 7.1453 0C9.49573 0 11 1.41026 11 3.8547C11 7.99145 11 12.0342 11 16.1709C11 17.7692 11 19.2735 11 20.8718Z" fill="#000"></path><path d="M1.31622 40.2393H9.58973C10.1538 40.2393 10.5299 40.8034 10.3419 41.2735C8.83759 45.5043 7.33332 49.735 5.82904 53.9658C5.73503 54.1539 5.45297 54.1539 5.35896 53.9658C3.85468 49.641 2.25639 45.3162 0.75212 40.9915C0.564086 40.6154 0.846137 40.2393 1.31622 40.2393Z" fill="#000"></path></svg>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2d5",
  },
  {
    timeStamp: 1687366431.278,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 466,
      Y: 272,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2d6",
  },
  {
    timeStamp: 1687366431.863,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 608,
      Y: 577,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2d7",
  },
  {
    timeStamp: 1687366432.485,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 48,
      Y: 460,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 51 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 24.9C22.5 23.1 23.7 21.3 24.9 19.7C29.7 13.5 35.2 8 41.7 3.4C43.5 2.1 45.4 0.9 47.6 0.3C48 0.1 48.5 0 49 0C50 0 50.8 0.6 50.6 1.6C50.4 2.8 50 4 49.5 5.2C48.2 7.9 46.5 10.2 44.6 12.4C41.1 16.5 37.3 20.4 33.2 23.8C30.9 25.7 28.4 27.6 25.7 29C25.8 29.3 26 29.7 26 30C26.2 30.9 25.9 31.7 25.2 32.2C24.5 32.7 23.5 32.7 22.8 32.2C22.2 31.7 21.7 31.2 21.2 30.6C20.4 29.8 19.6 29 18.8 28.2C17.8 27.2 17.7 26.2 18.4 25.3C19 24.4 20.1 24.2 21.3 24.8C21.2 24.8 21.3 24.9 21.3 24.9Z" fill="#5B5858"></path><path d="M0 44.4C0.9 43.9 1.8 43.4 2.7 42.8C4.2 41.8 4.8 40.2 5.4 38.6C6 36.9 6.5 35.2 7.3 33.6C9 30.1 12.6 29.7 15.6 31C20.6 33.2 21.7 39.3 17.7 43C14.8 45.8 11.3 46.8 7.3 46.4C4.9 46.2 2.6 45.5 0.4 44.6C0.2 44.5 0.1 44.4 0 44.4Z" fill="#5B5858"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2d8",
  },
  {
    timeStamp: 1687366432.594,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 59,
      Y: 462,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="brush" data-toggle="tooltip" data-placement="top" title="Brush" style="border: none; width: 44.7px; height: 58.05px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="40%" height="40%" viewBox="0 0 51 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 24.9C22.5 23.1 23.7 21.3 24.9 19.7C29.7 13.5 35.2 8 41.7 3.4C43.5 2.1 45.4 0.9 47.6 0.3C48 0.1 48.5 0 49 0C50 0 50.8 0.6 50.6 1.6C50.4 2.8 50 4 49.5 5.2C48.2 7.9 46.5 10.2 44.6 12.4C41.1 16.5 37.3 20.4 33.2 23.8C30.9 25.7 28.4 27.6 25.7 29C25.8 29.3 26 29.7 26 30C26.2 30.9 25.9 31.7 25.2 32.2C24.5 32.7 23.5 32.7 22.8 32.2C22.2 31.7 21.7 31.2 21.2 30.6C20.4 29.8 19.6 29 18.8 28.2C17.8 27.2 17.7 26.2 18.4 25.3C19 24.4 20.1 24.2 21.3 24.8C21.2 24.8 21.3 24.9 21.3 24.9Z" fill="#5B5858"></path><path d="M0 44.4C0.9 43.9 1.8 43.4 2.7 42.8C4.2 41.8 4.8 40.2 5.4 38.6C6 36.9 6.5 35.2 7.3 33.6C9 30.1 12.6 29.7 15.6 31C20.6 33.2 21.7 39.3 17.7 43C14.8 45.8 11.3 46.8 7.3 46.4C4.9 46.2 2.6 45.5 0.4 44.6C0.2 44.5 0.1 44.4 0 44.4Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "64932b3f52172c7c1bb9f2d9",
  },
  {
    timeStamp: 1687366432.82,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 437,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2da",
  },
  {
    timeStamp: 1687366434.116,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 298,
      Y: 573,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2db",
  },
  {
    timeStamp: 1687366434.893,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 55,
      Y: 536,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="eraser" data-toggle="tooltip" data-placement="top" title="Eraser" style="border: none; width: 44.7px; height: 58.05px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="40%" height="40%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3576 45.3955C15.7324 45.3955 14.2087 44.7862 12.8881 43.5675C9.12968 39.9115 5.47282 36.1539 1.71437 32.3964C-0.621964 30.0606 -0.520384 25.8968 1.71437 23.4595C2.12069 23.0533 2.52701 22.6471 2.93332 22.2408C9.536 15.6397 16.1387 9.03861 22.6398 2.53906C23.8587 1.21883 25.3824 0.507944 27.2109 0.406389C29.1409 0.304833 30.8677 0.914167 32.2898 2.23439C35.8451 5.78883 39.4004 9.34328 42.9557 12.9993C44.1747 14.2179 44.8857 15.6397 44.9873 17.2646C45.0889 18.9911 44.581 20.6159 43.4636 22.0377C43.1589 22.4439 42.8541 22.7486 42.4478 23.0533C35.8451 29.7559 29.1409 36.4586 22.4366 43.2628C21.0145 44.5831 19.3892 45.3955 17.3576 45.3955ZM15.9355 16.2491C12.3802 19.7019 8.92652 23.1548 5.47282 26.7093C5.26966 26.9124 5.0665 27.3186 4.96492 27.6233C4.76176 28.4357 5.0665 28.9435 5.67597 29.5528C9.12968 33.0057 12.5834 36.4586 16.0371 39.81C17.1545 40.9271 18.0687 40.9271 19.1861 39.81C22.4366 36.5602 25.7887 33.2088 29.0393 29.9591C29.1409 29.8575 29.2425 29.7559 29.344 29.6544C24.7729 25.0844 20.3034 20.6159 15.9355 16.2491Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "64932b3f52172c7c1bb9f2dc",
  },
  {
    timeStamp: 1687366435.119,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 46,
      Y: 526,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3576 45.3955C15.7324 45.3955 14.2087 44.7862 12.8881 43.5675C9.12968 39.9115 5.47282 36.1539 1.71437 32.3964C-0.621964 30.0606 -0.520384 25.8968 1.71437 23.4595C2.12069 23.0533 2.52701 22.6471 2.93332 22.2408C9.536 15.6397 16.1387 9.03861 22.6398 2.53906C23.8587 1.21883 25.3824 0.507944 27.2109 0.406389C29.1409 0.304833 30.8677 0.914167 32.2898 2.23439C35.8451 5.78883 39.4004 9.34328 42.9557 12.9993C44.1747 14.2179 44.8857 15.6397 44.9873 17.2646C45.0889 18.9911 44.581 20.6159 43.4636 22.0377C43.1589 22.4439 42.8541 22.7486 42.4478 23.0533C35.8451 29.7559 29.1409 36.4586 22.4366 43.2628C21.0145 44.5831 19.3892 45.3955 17.3576 45.3955ZM15.9355 16.2491C12.3802 19.7019 8.92652 23.1548 5.47282 26.7093C5.26966 26.9124 5.0665 27.3186 4.96492 27.6233C4.76176 28.4357 5.0665 28.9435 5.67597 29.5528C9.12968 33.0057 12.5834 36.4586 16.0371 39.81C17.1545 40.9271 18.0687 40.9271 19.1861 39.81C22.4366 36.5602 25.7887 33.2088 29.0393 29.9591C29.1409 29.8575 29.2425 29.7559 29.344 29.6544C24.7729 25.0844 20.3034 20.6159 15.9355 16.2491Z" fill="#5B5858"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2dd",
  },
  {
    timeStamp: 1687366435.311,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 46,
      Y: 526,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3576 45.3955C15.7324 45.3955 14.2087 44.7862 12.8881 43.5675C9.12968 39.9115 5.47282 36.1539 1.71437 32.3964C-0.621964 30.0606 -0.520384 25.8968 1.71437 23.4595C2.12069 23.0533 2.52701 22.6471 2.93332 22.2408C9.536 15.6397 16.1387 9.03861 22.6398 2.53906C23.8587 1.21883 25.3824 0.507944 27.2109 0.406389C29.1409 0.304833 30.8677 0.914167 32.2898 2.23439C35.8451 5.78883 39.4004 9.34328 42.9557 12.9993C44.1747 14.2179 44.8857 15.6397 44.9873 17.2646C45.0889 18.9911 44.581 20.6159 43.4636 22.0377C43.1589 22.4439 42.8541 22.7486 42.4478 23.0533C35.8451 29.7559 29.1409 36.4586 22.4366 43.2628C21.0145 44.5831 19.3892 45.3955 17.3576 45.3955ZM15.9355 16.2491C12.3802 19.7019 8.92652 23.1548 5.47282 26.7093C5.26966 26.9124 5.0665 27.3186 4.96492 27.6233C4.76176 28.4357 5.0665 28.9435 5.67597 29.5528C9.12968 33.0057 12.5834 36.4586 16.0371 39.81C17.1545 40.9271 18.0687 40.9271 19.1861 39.81C22.4366 36.5602 25.7887 33.2088 29.0393 29.9591C29.1409 29.8575 29.2425 29.7559 29.344 29.6544C24.7729 25.0844 20.3034 20.6159 15.9355 16.2491Z" fill="black"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2de",
  },
  {
    timeStamp: 1687366435.361,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 46,
      Y: 526,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3576 45.3955C15.7324 45.3955 14.2087 44.7862 12.8881 43.5675C9.12968 39.9115 5.47282 36.1539 1.71437 32.3964C-0.621964 30.0606 -0.520384 25.8968 1.71437 23.4595C2.12069 23.0533 2.52701 22.6471 2.93332 22.2408C9.536 15.6397 16.1387 9.03861 22.6398 2.53906C23.8587 1.21883 25.3824 0.507944 27.2109 0.406389C29.1409 0.304833 30.8677 0.914167 32.2898 2.23439C35.8451 5.78883 39.4004 9.34328 42.9557 12.9993C44.1747 14.2179 44.8857 15.6397 44.9873 17.2646C45.0889 18.9911 44.581 20.6159 43.4636 22.0377C43.1589 22.4439 42.8541 22.7486 42.4478 23.0533C35.8451 29.7559 29.1409 36.4586 22.4366 43.2628C21.0145 44.5831 19.3892 45.3955 17.3576 45.3955ZM15.9355 16.2491C12.3802 19.7019 8.92652 23.1548 5.47282 26.7093C5.26966 26.9124 5.0665 27.3186 4.96492 27.6233C4.76176 28.4357 5.0665 28.9435 5.67597 29.5528C9.12968 33.0057 12.5834 36.4586 16.0371 39.81C17.1545 40.9271 18.0687 40.9271 19.1861 39.81C22.4366 36.5602 25.7887 33.2088 29.0393 29.9591C29.1409 29.8575 29.2425 29.7559 29.344 29.6544C24.7729 25.0844 20.3034 20.6159 15.9355 16.2491Z" fill="black"></path></svg>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2df",
  },
  {
    timeStamp: 1687366435.727,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 424,
      Y: 378,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2e0",
  },
  {
    timeStamp: 1687366437.646,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 340,
      Y: 388,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2e1",
  },
  {
    timeStamp: 1687366438.812,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 41,
      Y: 526,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3576 45.3955C15.7324 45.3955 14.2087 44.7862 12.8881 43.5675C9.12968 39.9115 5.47282 36.1539 1.71437 32.3964C-0.621964 30.0606 -0.520384 25.8968 1.71437 23.4595C2.12069 23.0533 2.52701 22.6471 2.93332 22.2408C9.536 15.6397 16.1387 9.03861 22.6398 2.53906C23.8587 1.21883 25.3824 0.507944 27.2109 0.406389C29.1409 0.304833 30.8677 0.914167 32.2898 2.23439C35.8451 5.78883 39.4004 9.34328 42.9557 12.9993C44.1747 14.2179 44.8857 15.6397 44.9873 17.2646C45.0889 18.9911 44.581 20.6159 43.4636 22.0377C43.1589 22.4439 42.8541 22.7486 42.4478 23.0533C35.8451 29.7559 29.1409 36.4586 22.4366 43.2628C21.0145 44.5831 19.3892 45.3955 17.3576 45.3955ZM15.9355 16.2491C12.3802 19.7019 8.92652 23.1548 5.47282 26.7093C5.26966 26.9124 5.0665 27.3186 4.96492 27.6233C4.76176 28.4357 5.0665 28.9435 5.67597 29.5528C9.12968 33.0057 12.5834 36.4586 16.0371 39.81C17.1545 40.9271 18.0687 40.9271 19.1861 39.81C22.4366 36.5602 25.7887 33.2088 29.0393 29.9591C29.1409 29.8575 29.2425 29.7559 29.344 29.6544C24.7729 25.0844 20.3034 20.6159 15.9355 16.2491Z" fill="black"></path></svg>',
    },
    _id: "64932b3f52172c7c1bb9f2e2",
  },
  {
    timeStamp: 1687366438.879,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 41,
      Y: 526,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3576 45.3955C15.7324 45.3955 14.2087 44.7862 12.8881 43.5675C9.12968 39.9115 5.47282 36.1539 1.71437 32.3964C-0.621964 30.0606 -0.520384 25.8968 1.71437 23.4595C2.12069 23.0533 2.52701 22.6471 2.93332 22.2408C9.536 15.6397 16.1387 9.03861 22.6398 2.53906C23.8587 1.21883 25.3824 0.507944 27.2109 0.406389C29.1409 0.304833 30.8677 0.914167 32.2898 2.23439C35.8451 5.78883 39.4004 9.34328 42.9557 12.9993C44.1747 14.2179 44.8857 15.6397 44.9873 17.2646C45.0889 18.9911 44.581 20.6159 43.4636 22.0377C43.1589 22.4439 42.8541 22.7486 42.4478 23.0533C35.8451 29.7559 29.1409 36.4586 22.4366 43.2628C21.0145 44.5831 19.3892 45.3955 17.3576 45.3955ZM15.9355 16.2491C12.3802 19.7019 8.92652 23.1548 5.47282 26.7093C5.26966 26.9124 5.0665 27.3186 4.96492 27.6233C4.76176 28.4357 5.0665 28.9435 5.67597 29.5528C9.12968 33.0057 12.5834 36.4586 16.0371 39.81C17.1545 40.9271 18.0687 40.9271 19.1861 39.81C22.4366 36.5602 25.7887 33.2088 29.0393 29.9591C29.1409 29.8575 29.2425 29.7559 29.344 29.6544C24.7729 25.0844 20.3034 20.6159 15.9355 16.2491Z" fill="black"></path></svg>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2e3",
  },
  {
    timeStamp: 1687366441.201,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 222,
      Y: 0,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="745" height="645">Canvas</canvas>',
    },
    _id: "64932b3f52172c7c1bb9f2e4",
  },
  {
    timeStamp: 1687366441.84,
    name: "PAGE_EVENT",
    type: "BACK_FORWARD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f2e5",
  },
  {
    timeStamp: 1687366442.628,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "64932b3f52172c7c1bb9f2e6",
  },
  {
    timeStamp: 1687366442.69,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 262,
      Y: 196,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 368px; height: 599px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "64932b3f52172c7c1bb9f2e7",
  },
  {
    timeStamp: 1687366442.762,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 262,
      Y: 196,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 368px; height: 599px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2e8",
  },
  {
    timeStamp: 1687366443.12,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 202,
      Y: 130,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2e9",
  },
  {
    timeStamp: 1687366443.181,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 202,
      Y: 130,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f2ea",
  },
  {
    timeStamp: 1687366443.47,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2eb",
  },
  {
    timeStamp: 1687366443.63,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "D",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ec",
  },
  {
    timeStamp: 1687366443.714,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">D</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ed",
  },
  {
    timeStamp: 1687366443.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">D</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ee",
  },
  {
    timeStamp: 1687366443.806,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">D</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ef",
  },
  {
    timeStamp: 1687366443.843,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Di</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f0",
  },
  {
    timeStamp: 1687366443.874,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f1",
  },
  {
    timeStamp: 1687366443.976,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f2",
  },
  {
    timeStamp: 1687366443.998,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f3",
  },
  {
    timeStamp: 1687366444.124,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f4",
  },
  {
    timeStamp: 1687366444.208,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f5",
  },
  {
    timeStamp: 1687366444.295,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;t</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f6",
  },
  {
    timeStamp: 1687366444.298,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;t</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f7",
  },
  {
    timeStamp: 1687366444.372,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;th</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f8",
  },
  {
    timeStamp: 1687366444.445,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;th</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2f9",
  },
  {
    timeStamp: 1687366444.562,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;tha</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2fa",
  },
  {
    timeStamp: 1687366444.607,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2fb",
  },
  {
    timeStamp: 1687366444.634,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2fc",
  },
  {
    timeStamp: 1687366444.653,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2fd",
  },
  {
    timeStamp: 1687366444.785,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2fe",
  },
  {
    timeStamp: 1687366444.786,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f2ff",
  },
  {
    timeStamp: 1687366444.881,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;w</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f300",
  },
  {
    timeStamp: 1687366444.918,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;wo</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f301",
  },
  {
    timeStamp: 1687366444.942,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;wo</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f302",
  },
  {
    timeStamp: 1687366444.968,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;wo</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f303",
  },
  {
    timeStamp: 1687366445.048,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;wor</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f304",
  },
  {
    timeStamp: 1687366445.076,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f305",
  },
  {
    timeStamp: 1687366445.126,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f306",
  },
  {
    timeStamp: 1687366445.215,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f307",
  },
  {
    timeStamp: 1687366445.34,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f308",
  },
  {
    timeStamp: 1687366445.34,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f309",
  },
  {
    timeStamp: 1687366445.564,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f30a",
  },
  {
    timeStamp: 1687366445.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f30b",
  },
  {
    timeStamp: 1687366445.673,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f30c",
  },
  {
    timeStamp: 1687366445.766,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;??</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f30d",
  },
  {
    timeStamp: 1687366445.824,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;??</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f30e",
  },
  {
    timeStamp: 1687366446.012,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did&nbsp;that&nbsp;work&nbsp;??</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f30f",
  },
  {
    timeStamp: 1687366446.178,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did</span><span class="mtkw">·</span><span class="mtk1">that</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f310",
  },
  {
    timeStamp: 1687366446.18,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Did</span><span class="mtkw">·</span><span class="mtk1">that</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk1">??</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f311",
  },
  {
    timeStamp: 1687366446.292,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f312",
  },
  {
    timeStamp: 1687366446.469,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f313",
  },
  {
    timeStamp: 1687366446.676,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "R",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f314",
  },
  {
    timeStamp: 1687366446.728,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f315",
  },
  {
    timeStamp: 1687366446.777,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f316",
  },
  {
    timeStamp: 1687366446.876,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f317",
  },
  {
    timeStamp: 1687366447.006,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Re</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f318",
  },
  {
    timeStamp: 1687366447.075,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "f",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Re</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f319",
  },
  {
    timeStamp: 1687366447.16,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "f",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Ref</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f31a",
  },
  {
    timeStamp: 1687366447.262,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Ref</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f31b",
  },
  {
    timeStamp: 1687366447.315,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refr</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f31c",
  },
  {
    timeStamp: 1687366447.354,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refre</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f31d",
  },
  {
    timeStamp: 1687366447.4,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refre</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f31e",
  },
  {
    timeStamp: 1687366447.518,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refre</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f31f",
  },
  {
    timeStamp: 1687366447.572,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refres</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f320",
  },
  {
    timeStamp: 1687366447.594,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refresh</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f321",
  },
  {
    timeStamp: 1687366447.658,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refresh</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f322",
  },
  {
    timeStamp: 1687366447.723,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refresh</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f323",
  },
  {
    timeStamp: 1687366447.793,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshi</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f324",
  },
  {
    timeStamp: 1687366447.845,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshin</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f325",
  },
  {
    timeStamp: 1687366447.846,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshin</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f326",
  },
  {
    timeStamp: 1687366447.892,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f327",
  },
  {
    timeStamp: 1687366447.941,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f328",
  },
  {
    timeStamp: 1687366447.944,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f329",
  },
  {
    timeStamp: 1687366448.041,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f32a",
  },
  {
    timeStamp: 1687366448.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f32b",
  },
  {
    timeStamp: 1687366448.368,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f32c",
  },
  {
    timeStamp: 1687366448.373,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f32d",
  },
  {
    timeStamp: 1687366448.484,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f32e",
  },
  {
    timeStamp: 1687366448.484,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f32f",
  },
  {
    timeStamp: 1687366448.57,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;l</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f330",
  },
  {
    timeStamp: 1687366448.612,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;l</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f331",
  },
  {
    timeStamp: 1687366448.705,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;lo</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f332",
  },
  {
    timeStamp: 1687366448.705,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;lo</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f333",
  },
  {
    timeStamp: 1687366448.794,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;lot</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f334",
  },
  {
    timeStamp: 1687366448.796,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Refreshing&nbsp;a&nbsp;lot</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f335",
  },
  {
    timeStamp: 1687366448.891,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement: '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f336",
  },
  {
    timeStamp: 1687366449.128,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement: '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f337",
  },
  {
    timeStamp: 1687366449.229,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;o</span>',
    },
    _id: "64932b3f52172c7c1bb9f338",
  },
  {
    timeStamp: 1687366449.229,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "f",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;o</span>',
    },
    _id: "64932b3f52172c7c1bb9f339",
  },
  {
    timeStamp: 1687366449.322,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "f",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of</span>',
    },
    _id: "64932b3f52172c7c1bb9f33a",
  },
  {
    timeStamp: 1687366449.339,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of</span>',
    },
    _id: "64932b3f52172c7c1bb9f33b",
  },
  {
    timeStamp: 1687366449.445,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f33c",
  },
  {
    timeStamp: 1687366449.446,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f33d",
  },
  {
    timeStamp: 1687366449.484,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "i",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;t</span>',
    },
    _id: "64932b3f52172c7c1bb9f33e",
  },
  {
    timeStamp: 1687366449.529,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "t",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;ti</span>',
    },
    _id: "64932b3f52172c7c1bb9f33f",
  },
  {
    timeStamp: 1687366449.545,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "m",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;ti</span>',
    },
    _id: "64932b3f52172c7c1bb9f340",
  },
  {
    timeStamp: 1687366449.6,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "i",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;tim</span>',
    },
    _id: "64932b3f52172c7c1bb9f341",
  },
  {
    timeStamp: 1687366449.621,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "e",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;tim</span>',
    },
    _id: "64932b3f52172c7c1bb9f342",
  },
  {
    timeStamp: 1687366449.66,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "m",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;time</span>',
    },
    _id: "64932b3f52172c7c1bb9f343",
  },
  {
    timeStamp: 1687366449.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "e",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;time</span>',
    },
    _id: "64932b3f52172c7c1bb9f344",
  },
  {
    timeStamp: 1687366449.844,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "s",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;time</span>',
    },
    _id: "64932b3f52172c7c1bb9f345",
  },
  {
    timeStamp: 1687366449.958,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times</span>',
    },
    _id: "64932b3f52172c7c1bb9f346",
  },
  {
    timeStamp: 1687366449.961,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "s",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times</span>',
    },
    _id: "64932b3f52172c7c1bb9f347",
  },
  {
    timeStamp: 1687366450.032,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "n",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f348",
  },
  {
    timeStamp: 1687366450.049,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;n</span>',
    },
    _id: "64932b3f52172c7c1bb9f349",
  },
  {
    timeStamp: 1687366450.109,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "n",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;n</span>',
    },
    _id: "64932b3f52172c7c1bb9f34a",
  },
  {
    timeStamp: 1687366450.172,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;n</span>',
    },
    _id: "64932b3f52172c7c1bb9f34b",
  },
  {
    timeStamp: 1687366450.232,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: "w",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;no</span>',
    },
    _id: "64932b3f52172c7c1bb9f34c",
  },
  {
    timeStamp: 1687366450.257,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "o",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;now</span>',
    },
    _id: "64932b3f52172c7c1bb9f34d",
  },
  {
    timeStamp: 1687366450.312,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;now</span>',
    },
    _id: "64932b3f52172c7c1bb9f34e",
  },
  {
    timeStamp: 1687366450.339,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: "w",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;now&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f34f",
  },
  {
    timeStamp: 1687366450.42,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 202,
      Y: 130,
      key: " ",
      HTMLElement:
        '<span class="mtk1">Refreshing&nbsp;a&nbsp;lot&nbsp;of&nbsp;times&nbsp;now&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f350",
  },
  {
    timeStamp: 1687366451.713,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f351",
  },
  {
    timeStamp: 1687366452.025,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "64932b3f52172c7c1bb9f352",
  },
  {
    timeStamp: 1687366452.093,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f353",
  },
  {
    timeStamp: 1687366452.474,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f354",
  },
  {
    timeStamp: 1687366452.827,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f355",
  },
  {
    timeStamp: 1687366453.228,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f356",
  },
  {
    timeStamp: 1687366453.556,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f357",
  },
  {
    timeStamp: 1687366453.941,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f358",
  },
  {
    timeStamp: 1687366454.315,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f359",
  },
  {
    timeStamp: 1687366454.634,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f35a",
  },
  {
    timeStamp: 1687366454.977,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f35b",
  },
  {
    timeStamp: 1687366455.317,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f35c",
  },
  {
    timeStamp: 1687366455.634,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64932b3f52172c7c1bb9f35d",
  },
  {
    timeStamp: 1687366456.294,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 130,
      Y: 116,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 471px; height: 580px;"><div data-mprt="3" class="overflow-guard" style="width: 471px; height: 580px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 599px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 599px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 599px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 580px; width: 407px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 368px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:368px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 368px; height: 599px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 354px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 354px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="870" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 580px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 580px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 561px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 418px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 471px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 418px; width: 39px; height: 580px;"><div class="minimap-shadow-hidden" style="height: 580px;"></div><canvas width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><canvas class="minimap-decorations-layer" width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 39px; display: block; top: 0px; height: 40px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 39px; top: 0px; height: 40px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 745px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 745px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 500px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "64932b3f52172c7c1bb9f35e",
  },
  {
    timeStamp: 1687366456.359,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 130,
      Y: 116,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 471px; height: 580px;"><div data-mprt="3" class="overflow-guard" style="width: 471px; height: 580px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 599px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 599px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 599px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 580px; width: 407px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 368px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:368px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 368px; height: 599px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 354px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 354px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="870" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 580px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 580px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 561px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 418px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 471px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 418px; width: 39px; height: 580px;"><div class="minimap-shadow-hidden" style="height: 580px;"></div><canvas width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><canvas class="minimap-decorations-layer" width="58" height="870" style="position: absolute; left: 0px; width: 38.6667px; height: 580px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 39px; display: block; top: 0px; height: 40px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 39px; top: 0px; height: 40px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 745px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 745px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 500px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f35f",
  },
  {
    timeStamp: 1687366456.904,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 128,
      Y: 123,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f360",
  },
  {
    timeStamp: 1687366456.972,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 128,
      Y: 123,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64932b3f52172c7c1bb9f361",
  },
  {
    timeStamp: 1687366457.666,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f362",
  },
  {
    timeStamp: 1687366457.754,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "A",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f363",
  },
  {
    timeStamp: 1687366457.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">A</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f364",
  },
  {
    timeStamp: 1687366457.839,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">A</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f365",
  },
  {
    timeStamp: 1687366457.893,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "b",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">A</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f366",
  },
  {
    timeStamp: 1687366457.988,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "b",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Ab</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f367",
  },
  {
    timeStamp: 1687366458.092,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Ab</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f368",
  },
  {
    timeStamp: 1687366458.169,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "u",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Abo</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f369",
  },
  {
    timeStamp: 1687366458.2,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Abou</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f36a",
  },
  {
    timeStamp: 1687366458.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Abou</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f36b",
  },
  {
    timeStamp: 1687366458.264,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15460:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14845:14)",
    },
    _id: "64932b3f52172c7c1bb9f36c",
  },
  {
    timeStamp: 1687366458.291,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "u",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f36d",
  },
  {
    timeStamp: 1687366458.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f36e",
  },
  {
    timeStamp: 1687366458.362,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f36f",
  },
  {
    timeStamp: 1687366458.485,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f370",
  },
  {
    timeStamp: 1687366458.694,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "1",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About&nbsp;</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f371",
  },
  {
    timeStamp: 1687366458.781,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "1",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About&nbsp;</span><span class="mtk6">1</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f372",
  },
  {
    timeStamp: 1687366458.883,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "0",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">About&nbsp;</span><span class="mtk6">1</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f373",
  },
  {
    timeStamp: 1687366458.953,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "0",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f374",
  },
  {
    timeStamp: 1687366459.495,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f375",
  },
  {
    timeStamp: 1687366459.749,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "+",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f376",
  },
  {
    timeStamp: 1687366459.809,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "+",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f377",
  },
  {
    timeStamp: 1687366459.829,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f378",
  },
  {
    timeStamp: 1687366459.923,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f379",
  },
  {
    timeStamp: 1687366459.998,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "t",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f37a",
  },
  {
    timeStamp: 1687366460.06,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f37b",
  },
  {
    timeStamp: 1687366460.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "i",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f37c",
  },
  {
    timeStamp: 1687366460.089,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "t",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f37d",
  },
  {
    timeStamp: 1687366460.121,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "m",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f37e",
  },
  {
    timeStamp: 1687366460.151,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "i",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f37f",
  },
  {
    timeStamp: 1687366460.212,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "m",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f380",
  },
  {
    timeStamp: 1687366460.212,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f381",
  },
  {
    timeStamp: 1687366460.305,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f382",
  },
  {
    timeStamp: 1687366460.415,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "s",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f383",
  },
  {
    timeStamp: 1687366460.517,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f384",
  },
  {
    timeStamp: 1687366460.522,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "s",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f385",
  },
  {
    timeStamp: 1687366460.637,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f386",
  },
  {
    timeStamp: 1687366460.639,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f387",
  },
  {
    timeStamp: 1687366460.733,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "I",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f388",
  },
  {
    timeStamp: 1687366460.806,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "I",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f389",
  },
  {
    timeStamp: 1687366460.949,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f38a",
  },
  {
    timeStamp: 1687366461.15,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "Backspace",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f38b",
  },
  {
    timeStamp: 1687366461.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "r",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f38c",
  },
  {
    timeStamp: 1687366461.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f38d",
  },
  {
    timeStamp: 1687366461.354,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "r",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f38e",
  },
  {
    timeStamp: 1687366461.43,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f38f",
  },
  {
    timeStamp: 1687366461.45,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "f",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f390",
  },
  {
    timeStamp: 1687366461.538,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "f",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f391",
  },
  {
    timeStamp: 1687366461.645,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "r",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f392",
  },
  {
    timeStamp: 1687366461.706,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f393",
  },
  {
    timeStamp: 1687366461.745,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "r",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f394",
  },
  {
    timeStamp: 1687366461.783,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f395",
  },
  {
    timeStamp: 1687366461.963,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "s",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f396",
  },
  {
    timeStamp: 1687366462.075,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "h",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f397",
  },
  {
    timeStamp: 1687366462.152,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "h",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f398",
  },
  {
    timeStamp: 1687366462.152,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "s",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f399",
  },
  {
    timeStamp: 1687366462.184,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f39a",
  },
  {
    timeStamp: 1687366462.257,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f39b",
  },
  {
    timeStamp: 1687366462.385,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "d",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f39c",
  },
  {
    timeStamp: 1687366462.463,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "d",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f39d",
  },
  {
    timeStamp: 1687366462.527,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f39e",
  },
  {
    timeStamp: 1687366462.644,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f39f",
  },
  {
    timeStamp: 1687366462.757,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "Control",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f3a0",
  },
  {
    timeStamp: 1687366462.87,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "Control",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f3a1",
  },
  {
    timeStamp: 1687366462.922,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "a",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f3a2",
  },
  {
    timeStamp: 1687366463.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f3a3",
  },
  {
    timeStamp: 1687366463.465,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "H",
      HTMLElement: '<span class="mtk6">10</span>',
    },
    _id: "64932b3f52172c7c1bb9f3a4",
  },
  {
    timeStamp: 1687366463.549,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">H</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3a5",
  },
  {
    timeStamp: 1687366463.549,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">H</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3a6",
  },
  {
    timeStamp: 1687366463.779,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">H</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3a7",
  },
  {
    timeStamp: 1687366463.825,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "p",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Ho</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3a8",
  },
  {
    timeStamp: 1687366463.881,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hop</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3a9",
  },
  {
    timeStamp: 1687366463.911,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "p",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hop</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3aa",
  },
  {
    timeStamp: 1687366463.912,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hop</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3ab",
  },
  {
    timeStamp: 1687366464.032,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "e",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hope</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3ac",
  },
  {
    timeStamp: 1687366464.073,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "f",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hope</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3ad",
  },
  {
    timeStamp: 1687366464.179,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "f",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hopef</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3ae",
  },
  {
    timeStamp: 1687366464.287,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "u",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hopef</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3af",
  },
  {
    timeStamp: 1687366464.348,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "u",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hopefu</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3b0",
  },
  {
    timeStamp: 1687366464.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hopefu</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3b1",
  },
  {
    timeStamp: 1687366464.543,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hopeful</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3b2",
  },
  {
    timeStamp: 1687366464.609,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "l",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Hopeful</span></span></div>',
    },
    _id: "64932b3f52172c7c1bb9f3b3",
  },
  {
    timeStamp: 1687366464.688,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "l",
      HTMLElement: '<span class="mtk1">Hopefull</span>',
    },
    _id: "64932b3f52172c7c1bb9f3b4",
  },
  {
    timeStamp: 1687366464.964,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "y",
      HTMLElement: '<span class="mtk1">Hopefull</span>',
    },
    _id: "64932b3f52172c7c1bb9f3b5",
  },
  {
    timeStamp: 1687366465.07,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "y",
      HTMLElement: '<span class="mtk1">Hopefully</span>',
    },
    _id: "64932b3f52172c7c1bb9f3b6",
  },
  {
    timeStamp: 1687366465.175,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk1">Hopefully</span>',
    },
    _id: "64932b3f52172c7c1bb9f3b7",
  },
  {
    timeStamp: 1687366465.318,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: " ",
      HTMLElement: '<span class="mtk1">Hopefully&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f3b8",
  },
  {
    timeStamp: 1687366465.445,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "i",
      HTMLElement: '<span class="mtk1">Hopefully&nbsp;</span>',
    },
    _id: "64932b3f52172c7c1bb9f3b9",
  },
  {
    timeStamp: 1687366465.523,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 130,
      Y: 126,
      key: "i",
      HTMLElement: '<span class="mtk1">Hopefully&nbsp;i</span>',
    },
    _id: "64932b3f52172c7c1bb9f3ba",
  },
  {
    timeStamp: 1687366465.55,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 130,
      Y: 126,
      key: "t",
      HTMLElement: '<span class="mtk1">Hopefully&nbsp;i</span>',
    },
    _id: "64932b3f52172c7c1bb9f3bb",
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
    width: 745,
    height: 645,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  //     await page.evaluate(() => {
  //     const pre = document.createElement("pre");
  //     pre.id = "id-abc_user/7hvqvxz2-uwtz-yu8l-xk25-yx374zan4u1c";
  //     pre.style.fontSize = "0.75rem";
  //     pre.style.pointerEvents = "none";
  //     pre.style.position = "fixed";
  //     pre.style.backgroundColor = "black";
  //     pre.style.borderRadius = "0.2em";
  //     pre.style.padding = "0.2em";
  //     pre.style.color = "white";
  //     pre.style.zIndex = "999";
  //     pre.style.top = "0em";
  //     pre.style.right = "0em";
  //     pre.style.opacity = "0.5";
  //     document.body.appendChild(pre);
  //   });

  //     const updateTimer = () => {
  //         let seconds = 0;

  //         setInterval(() => {
  //         seconds++;
  //         page.evaluate((time) => {
  //             const pre = document.getElementById("id-abc_user/7hvqvxz2-uwtz-yu8l-xk25-yx374zan4u1c");
  //             pre.textContent =
  //             "Session : abc_user/7hvqvxz2-uwtz-yu8l-xk25-yx374zan4u1c \n"  +
  //             "Elapsed : " +
  //             time;
  //         }, seconds);
  //         }, 1000);
  //     };

  //     // Start the timer
  //     updateTimer();

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 16px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
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
