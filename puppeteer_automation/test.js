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
    timeStamp: 1687339358.054,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6492c1754eb6b1e079b71160",
  },
  {
    timeStamp: 1687339358.069,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 704.5 },
    _id: "6492c1754eb6b1e079b71161",
  },
  {
    timeStamp: 1687339359.152,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15402:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14787:14)",
    },
    _id: "6492c1754eb6b1e079b71162",
  },
  {
    timeStamp: 1687339359.217,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 654,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71163",
  },
  {
    timeStamp: 1687339359.438,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 654,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b71164",
  },
  {
    timeStamp: 1687339359.455,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71165",
  },
  {
    timeStamp: 1687339359.566,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "S",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71166",
  },
  {
    timeStamp: 1687339359.66,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "S",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">S</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71167",
  },
  {
    timeStamp: 1687339359.685,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">S</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71168",
  },
  {
    timeStamp: 1687339359.774,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "h",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">S</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71169",
  },
  {
    timeStamp: 1687339359.84,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "h",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Sh</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7116a",
  },
  {
    timeStamp: 1687339359.931,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Sh</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7116b",
  },
  {
    timeStamp: 1687339359.998,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "u",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Sho</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7116c",
  },
  {
    timeStamp: 1687339360.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Shou</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7116d",
  },
  {
    timeStamp: 1687339360.083,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "u",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Shou</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7116e",
  },
  {
    timeStamp: 1687339360.165,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "l",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Shou</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7116f",
  },
  {
    timeStamp: 1687339360.272,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "d",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Shoul</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71170",
  },
  {
    timeStamp: 1687339360.288,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "l",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71171",
  },
  {
    timeStamp: 1687339360.407,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71172",
  },
  {
    timeStamp: 1687339360.414,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "d",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71173",
  },
  {
    timeStamp: 1687339360.465,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71174",
  },
  {
    timeStamp: 1687339360.507,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;w</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71175",
  },
  {
    timeStamp: 1687339360.591,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;w</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71176",
  },
  {
    timeStamp: 1687339360.596,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;w</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71177",
  },
  {
    timeStamp: 1687339360.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;wo</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71178",
  },
  {
    timeStamp: 1687339360.668,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "r",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;wo</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71179",
  },
  {
    timeStamp: 1687339360.752,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "r",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;wor</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7117a",
  },
  {
    timeStamp: 1687339361.758,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 654,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;wor</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7117b",
  },
  {
    timeStamp: 1687339362.112,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "k",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;wor</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7117c",
  },
  {
    timeStamp: 1687339362.191,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "k",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7117d",
  },
  {
    timeStamp: 1687339362.216,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7117e",
  },
  {
    timeStamp: 1687339362.307,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "n",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7117f",
  },
  {
    timeStamp: 1687339362.347,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;n</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71180",
  },
  {
    timeStamp: 1687339362.376,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "n",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;n</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71181",
  },
  {
    timeStamp: 1687339362.435,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;n</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71182",
  },
  {
    timeStamp: 1687339362.48,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;no</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71183",
  },
  {
    timeStamp: 1687339362.512,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "o",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;now</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71184",
  },
  {
    timeStamp: 1687339362.56,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 654,
      Y: 173,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;now</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71185",
  },
  {
    timeStamp: 1687339362.579,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: "w",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;now&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71186",
  },
  {
    timeStamp: 1687339362.692,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 654,
      Y: 173,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Should&nbsp;work&nbsp;now&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71187",
  },
  {
    timeStamp: 1687339363.796,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 783,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "6492c1754eb6b1e079b71188",
  },
  {
    timeStamp: 1687339364.024,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 783,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b71189",
  },
  {
    timeStamp: 1687339364.898,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 783,
      Y: 44,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      value: "18",
    },
    _id: "6492c1754eb6b1e079b7118a",
  },
  {
    timeStamp: 1687339364.898,
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
    _id: "6492c1754eb6b1e079b7118b",
  },
  {
    timeStamp: 1687339365.552,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 938,
      Y: 36,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6492c1754eb6b1e079b7118c",
  },
  {
    timeStamp: 1687339365.775,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 938,
      Y: 36,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b7118d",
  },
  {
    timeStamp: 1687339366.845,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/71",
      method: "GET",
      id: "opyxx1fr-a7qi-344o-ujbz-wvyr2sl6b2m0",
    },
    _id: "6492c1754eb6b1e079b7118e",
  },
  {
    timeStamp: 1687339366.848,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 938,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      value: "python3",
    },
    _id: "6492c1754eb6b1e079b7118f",
  },
  {
    timeStamp: 1687339366.848,
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
    _id: "6492c1754eb6b1e079b71190",
  },
  {
    timeStamp: 1687339367.1,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 255,
      id: "opyxx1fr-a7qi-344o-ujbz-wvyr2sl6b2m0",
    },
    _id: "6492c1754eb6b1e079b71191",
  },
  {
    timeStamp: 1687339367.1,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15402:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14787:14)",
    },
    _id: "6492c1754eb6b1e079b71192",
  },
  {
    timeStamp: 1687339367.65,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 976,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6492c1754eb6b1e079b71193",
  },
  {
    timeStamp: 1687339367.865,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 976,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b71194",
  },
  {
    timeStamp: 1687339369.24,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 942,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6492c1754eb6b1e079b71195",
  },
  {
    timeStamp: 1687339369.353,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/42",
      method: "GET",
      id: "n5zk5utx-ofbl-5lko-7a92-7bqrhb13av0t",
    },
    _id: "6492c1754eb6b1e079b71196",
  },
  {
    timeStamp: 1687339369.356,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 942,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      value: "javascript",
    },
    _id: "6492c1754eb6b1e079b71197",
  },
  {
    timeStamp: 1687339369.356,
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
    _id: "6492c1754eb6b1e079b71198",
  },
  {
    timeStamp: 1687339369.935,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 617,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 691px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk22">Should</span><span class="mtk1">&nbsp;work&nbsp;now&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b71199",
  },
  {
    timeStamp: 1687339370.145,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 792,
      id: "n5zk5utx-ofbl-5lko-7a92-7bqrhb13av0t",
    },
    _id: "6492c1754eb6b1e079b7119a",
  },
  {
    timeStamp: 1687339370.146,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15402:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14787:14)",
    },
    _id: "6492c1754eb6b1e079b7119b",
  },
  {
    timeStamp: 1687339370.159,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 617,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 691px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk22">Should</span><span class="mtk1">&nbsp;work&nbsp;now&nbsp;</span></span></div></div>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b7119c",
  },
  {
    timeStamp: 1687339371.388,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 966,
      Y: 1,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "6492c1754eb6b1e079b7119d",
  },
  {
    timeStamp: 1687339372.92,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 688,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 691px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk22">Should</span><span class="mtk1">&nbsp;work&nbsp;now&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7119e",
  },
  {
    timeStamp: 1687339373.267,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 688,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 691px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span class="mtk22">Should</span><span class="mtk1">&nbsp;work&nbsp;now&nbsp;</span></span></div></div>',
    },
    _id: "6492c1754eb6b1e079b7119f",
  },
  {
    timeStamp: 1687339373.676,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 942,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea>',
    },
    _id: "6492c1754eb6b1e079b711a0",
  },
  {
    timeStamp: 1687339373.904,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 942,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b711a1",
  },
  {
    timeStamp: 1687339374.079,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "w",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea>',
    },
    _id: "6492c1754eb6b1e079b711a2",
  },
  {
    timeStamp: 1687339374.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "o",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">w</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a3",
  },
  {
    timeStamp: 1687339374.212,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "w",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">wo</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a4",
  },
  {
    timeStamp: 1687339374.312,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "o",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">wo</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a5",
  },
  {
    timeStamp: 1687339374.312,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "r",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">wo</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a6",
  },
  {
    timeStamp: 1687339374.412,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "k",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">wor</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a7",
  },
  {
    timeStamp: 1687339374.413,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "r",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">work</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a8",
  },
  {
    timeStamp: 1687339374.476,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "k",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">work</textarea>',
    },
    _id: "6492c1754eb6b1e079b711a9",
  },
  {
    timeStamp: 1687339374.571,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "i",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">work</textarea>',
    },
    _id: "6492c1754eb6b1e079b711aa",
  },
  {
    timeStamp: 1687339374.618,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "n",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">worki</textarea>',
    },
    _id: "6492c1754eb6b1e079b711ab",
  },
  {
    timeStamp: 1687339374.679,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "g",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">workin</textarea>',
    },
    _id: "6492c1754eb6b1e079b711ac",
  },
  {
    timeStamp: 1687339374.708,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "i",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working</textarea>',
    },
    _id: "6492c1754eb6b1e079b711ad",
  },
  {
    timeStamp: 1687339374.709,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "n",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working</textarea>',
    },
    _id: "6492c1754eb6b1e079b711ae",
  },
  {
    timeStamp: 1687339374.773,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: " ",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working</textarea>',
    },
    _id: "6492c1754eb6b1e079b711af",
  },
  {
    timeStamp: 1687339374.809,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "g",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working </textarea>',
    },
    _id: "6492c1754eb6b1e079b711b0",
  },
  {
    timeStamp: 1687339374.9,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "Shift",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working </textarea>',
    },
    _id: "6492c1754eb6b1e079b711b1",
  },
  {
    timeStamp: 1687339374.901,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: " ",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working </textarea>',
    },
    _id: "6492c1754eb6b1e079b711b2",
  },
  {
    timeStamp: 1687339375.033,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "Shift",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working </textarea>',
    },
    _id: "6492c1754eb6b1e079b711b3",
  },
  {
    timeStamp: 1687339375.262,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "n",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working </textarea>',
    },
    _id: "6492c1754eb6b1e079b711b4",
  },
  {
    timeStamp: 1687339375.332,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "n",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working n</textarea>',
    },
    _id: "6492c1754eb6b1e079b711b5",
  },
  {
    timeStamp: 1687339375.373,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "o",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working n</textarea>',
    },
    _id: "6492c1754eb6b1e079b711b6",
  },
  {
    timeStamp: 1687339375.417,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "w",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working no</textarea>',
    },
    _id: "6492c1754eb6b1e079b711b7",
  },
  {
    timeStamp: 1687339375.458,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "o",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now</textarea>',
    },
    _id: "6492c1754eb6b1e079b711b8",
  },
  {
    timeStamp: 1687339375.506,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: " ",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now</textarea>',
    },
    _id: "6492c1754eb6b1e079b711b9",
  },
  {
    timeStamp: 1687339375.534,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "w",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now </textarea>',
    },
    _id: "6492c1754eb6b1e079b711ba",
  },
  {
    timeStamp: 1687339375.631,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "Shift",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now </textarea>',
    },
    _id: "6492c1754eb6b1e079b711bb",
  },
  {
    timeStamp: 1687339375.631,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: " ",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now </textarea>',
    },
    _id: "6492c1754eb6b1e079b711bc",
  },
  {
    timeStamp: 1687339375.879,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "?",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now </textarea>',
    },
    _id: "6492c1754eb6b1e079b711bd",
  },
  {
    timeStamp: 1687339375.925,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "?",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ?</textarea>',
    },
    _id: "6492c1754eb6b1e079b711be",
  },
  {
    timeStamp: 1687339376.007,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "?",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ?</textarea>',
    },
    _id: "6492c1754eb6b1e079b711bf",
  },
  {
    timeStamp: 1687339376.118,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "Shift",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ??</textarea>',
    },
    _id: "6492c1754eb6b1e079b711c0",
  },
  {
    timeStamp: 1687339376.12,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "/",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ??</textarea>',
    },
    _id: "6492c1754eb6b1e079b711c1",
  },
  {
    timeStamp: 1687339376.315,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "Control",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ??</textarea>',
    },
    _id: "6492c1754eb6b1e079b711c2",
  },
  {
    timeStamp: 1687339376.42,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "a",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ??</textarea>',
    },
    _id: "6492c1754eb6b1e079b711c3",
  },
  {
    timeStamp: 1687339376.491,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "Control",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ??</textarea>',
    },
    _id: "6492c1754eb6b1e079b711c4",
  },
  {
    timeStamp: 1687339376.491,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 942,
      Y: 208,
      key: "Backspace",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ...">working now ??</textarea>',
    },
    _id: "6492c1754eb6b1e079b711c5",
  },
  {
    timeStamp: 1687339376.524,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "a",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea>',
    },
    _id: "6492c1754eb6b1e079b711c6",
  },
  {
    timeStamp: 1687339376.543,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 942,
      Y: 208,
      key: "Backspace",
      HTMLElement:
        '<textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea>',
    },
    _id: "6492c1754eb6b1e079b711c7",
  },
  {
    timeStamp: 1687339377.68,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>',
    },
    _id: "6492c1754eb6b1e079b711c8",
  },
  {
    timeStamp: 1687339377.902,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon  moonIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightsStayIcon"><path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b711c9",
  },
  {
    timeStamp: 1687339378.321,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon  moonIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightsStayIcon"><path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>',
    },
    _id: "6492c1754eb6b1e079b711ca",
  },
  {
    timeStamp: 1687339378.552,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b711cb",
  },
  {
    timeStamp: 1687339378.788,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>',
    },
    _id: "6492c1754eb6b1e079b711cc",
  },
  {
    timeStamp: 1687339379.006,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon  moonIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightsStayIcon"><path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b711cd",
  },
  {
    timeStamp: 1687339379.356,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon  moonIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightsStayIcon"><path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>',
    },
    _id: "6492c1754eb6b1e079b711ce",
  },
  {
    timeStamp: 1687339379.579,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1204,
      Y: 35,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>',
      button: 0,
    },
    _id: "6492c1754eb6b1e079b711cf",
  },
  {
    timeStamp: 1687339380.863,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 1104,
      Y: 1,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "6492c1754eb6b1e079b711d0",
  },
  {
    timeStamp: 1687339380.913,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 22.86 },
    _id: "6492c1754eb6b1e079b711d1",
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
    pre.id = "id-abc_user/tx95wnen-mnfi-7xjy-1udb-bzun0h9wluma";
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
          "id-abc_user/tx95wnen-mnfi-7xjy-1udb-bzun0h9wluma"
        );
        pre.textContent =
          "Session : abc_user/tx95wnen-mnfi-7xjy-1udb-bzun0h9wluma \n" +
          "Elapsed : " +
          time;
      }, seconds);
    }, 1000);
  };

  // Start the timer
  updateTimer();

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
