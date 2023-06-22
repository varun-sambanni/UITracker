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
    timeStamp: 1687423879.018,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64940bbc52172c7c1bbaee31",
  },
  {
    timeStamp: 1687423879.207,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "a3jtq79d-4op1-7nab-mpnc-8k8753vszo8r",
    },
    _id: "64940bbc52172c7c1bbaee32",
  },
  {
    timeStamp: 1687423879.964,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 757,
      id: "a3jtq79d-4op1-7nab-mpnc-8k8753vszo8r",
    },
    _id: "64940bbc52172c7c1bbaee33",
  },
  {
    timeStamp: 1687423879.965,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15467:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14852:14)",
    },
    _id: "64940bbc52172c7c1bbaee34",
  },
  {
    timeStamp: 1687423881.006,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 638,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee35",
  },
  {
    timeStamp: 1687423881.233,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 638,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee36",
  },
  {
    timeStamp: 1687423881.301,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee37",
  },
  {
    timeStamp: 1687423881.491,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "T",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee38",
  },
  {
    timeStamp: 1687423881.566,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">T</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee39",
  },
  {
    timeStamp: 1687423881.592,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">T</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee3a",
  },
  {
    timeStamp: 1687423881.684,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">T</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee3b",
  },
  {
    timeStamp: 1687423881.761,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tr</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee3c",
  },
  {
    timeStamp: 1687423881.833,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "y",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tr</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee3d",
  },
  {
    timeStamp: 1687423881.895,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "y",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Try</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee3e",
  },
  {
    timeStamp: 1687423882.002,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Try</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee3f",
  },
  {
    timeStamp: 1687423882.056,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tryi</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee40",
  },
  {
    timeStamp: 1687423882.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tryin</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee41",
  },
  {
    timeStamp: 1687423882.134,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tryin</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee42",
  },
  {
    timeStamp: 1687423882.179,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee43",
  },
  {
    timeStamp: 1687423882.212,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee44",
  },
  {
    timeStamp: 1687423882.231,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee45",
  },
  {
    timeStamp: 1687423882.328,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee46",
  },
  {
    timeStamp: 1687423882.351,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee47",
  },
  {
    timeStamp: 1687423882.412,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;t</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee48",
  },
  {
    timeStamp: 1687423882.415,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;t</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee49",
  },
  {
    timeStamp: 1687423882.459,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "h",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;th</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee4a",
  },
  {
    timeStamp: 1687423882.526,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;th</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee4b",
  },
  {
    timeStamp: 1687423882.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;thi</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee4c",
  },
  {
    timeStamp: 1687423882.71,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;thi</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee4d",
  },
  {
    timeStamp: 1687423882.82,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span><span class="mtk8">this</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee4e",
  },
  {
    timeStamp: 1687423882.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "s",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span><span class="mtk8">this</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee4f",
  },
  {
    timeStamp: 1687423882.941,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee50",
  },
  {
    timeStamp: 1687423883.141,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 638,
      Y: 127,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span><span class="mtk8">this</span><span class="mtk1">&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee51",
  },
  {
    timeStamp: 1687423883.297,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying</span><span class="mtkw">·</span><span class="mtk8">this</span><span class="mtkw">·</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee52",
  },
  {
    timeStamp: 1687423883.328,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying</span><span class="mtkw">·</span><span class="mtk8">this</span><span class="mtkw">·</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee53",
  },
  {
    timeStamp: 1687423883.459,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 638,
      Y: 127,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee54",
  },
  {
    timeStamp: 1687423884.228,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 735,
      Y: 51,
      key: "Control",
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "64940bbc52172c7c1bbaee55",
  },
  {
    timeStamp: 1687423884.47,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 776,
      Y: 32,
      key: "Control",
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64940bbc52172c7c1bbaee56",
  },
  {
    timeStamp: 1687423884.64,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 779,
      Y: 32,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64940bbc52172c7c1bbaee57",
  },
  {
    timeStamp: 1687423884.859,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 779,
      Y: 32,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee58",
  },
  {
    timeStamp: 1687423885.659,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 779,
      Y: 48,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      value: "18",
    },
    _id: "64940bbc52172c7c1bbaee59",
  },
  {
    timeStamp: 1687423885.659,
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
    _id: "64940bbc52172c7c1bbaee5a",
  },
  {
    timeStamp: 1687423886.387,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 919,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "64940bbc52172c7c1bbaee5b",
  },
  {
    timeStamp: 1687423887.298,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 929,
      Y: 125,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="subTerminalInput" style="border-bottom: 1px solid white;"><div class="fieldNameInput">Enter Input</div><textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea></div>',
    },
    _id: "64940bbc52172c7c1bbaee5c",
  },
  {
    timeStamp: 1687423887.758,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/71",
      method: "GET",
      id: "02y2b47d-zd1d-fbqp-z55x-0628bo2j4iw2",
    },
    _id: "64940bbc52172c7c1bbaee5d",
  },
  {
    timeStamp: 1687423887.762,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 929,
      Y: 125,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="subTerminalInput" style="border-bottom: 1px solid white;"><div class="fieldNameInput">Enter Input</div><textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea></div>',
      value: "python3",
    },
    _id: "64940bbc52172c7c1bbaee5e",
  },
  {
    timeStamp: 1687423887.762,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 871,
      Y: 19,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="subTerminalInput" style="border-bottom: 1px solid white;"><div class="fieldNameInput">Enter Input</div><textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea></div>',
    },
    _id: "64940bbc52172c7c1bbaee5f",
  },
  {
    timeStamp: 1687423887.92,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 162,
      id: "02y2b47d-zd1d-fbqp-z55x-0628bo2j4iw2",
    },
    _id: "64940bbc52172c7c1bbaee60",
  },
  {
    timeStamp: 1687423887.921,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15467:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14852:14)",
    },
    _id: "64940bbc52172c7c1bbaee61",
  },
  {
    timeStamp: 1687423888.43,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1030,
      Y: 40,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaee62",
  },
  {
    timeStamp: 1687423888.658,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1030,
      Y: 40,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee63",
  },
  {
    timeStamp: 1687423888.697,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/sketch", DOMLoadTime: 0 },
    _id: "64940bbc52172c7c1bbaee64",
  },
  {
    timeStamp: 1687423889.676,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 74,
      Y: 238,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="rectangle" data-toggle="tooltip" data-placement="top" title="Rectangle" style="border: none; width: 76.8px; height: 61.29px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "64940bbc52172c7c1bbaee65",
  },
  {
    timeStamp: 1687423889.907,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 74,
      Y: 238,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="rectangle" data-toggle="tooltip" data-placement="top" title="Rectangle" style="border: none; width: 76.8px; height: 61.29px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#000"></path></svg></button>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee66",
  },
  {
    timeStamp: 1687423890.389,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 279,
      Y: 185,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee67",
  },
  {
    timeStamp: 1687423890.597,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 580,
      Y: 367,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee68",
  },
  {
    timeStamp: 1687423891.746,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 64,
      Y: 307,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "64940bbc52172c7c1bbaee69",
  },
  {
    timeStamp: 1687423891.973,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 64,
      Y: 307,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#000"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee6a",
  },
  {
    timeStamp: 1687423892.431,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 280,
      Y: 153,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee6b",
  },
  {
    timeStamp: 1687423892.666,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 551,
      Y: 379,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee6c",
  },
  {
    timeStamp: 1687423893.555,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 55,
      Y: 360,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#5B5858"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaee6d",
  },
  {
    timeStamp: 1687423893.771,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 55,
      Y: 360,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#000"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee6e",
  },
  {
    timeStamp: 1687423894.274,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 424,
      Y: 218,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee6f",
  },
  {
    timeStamp: 1687423894.504,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 567,
      Y: 301,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee70",
  },
  {
    timeStamp: 1687423895.242,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 526,
      Y: 167,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee71",
  },
  {
    timeStamp: 1687423895.545,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 731,
      Y: 309,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1280" height="681">Canvas</canvas>',
    },
    _id: "64940bbc52172c7c1bbaee72",
  },
  {
    timeStamp: 1687423896.532,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 829,
      Y: 52,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaee73",
  },
  {
    timeStamp: 1687423896.762,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 829,
      Y: 52,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee74",
  },
  {
    timeStamp: 1687423897.924,
    name: "PAGE_EVENT",
    type: "BACK_FORWARD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64940bbc52172c7c1bbaee75",
  },
  {
    timeStamp: 1687423897.944,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "orjfuieb-f1xr-qjo1-uui1-5g1ggflv5px1",
    },
    _id: "64940bbc52172c7c1bbaee76",
  },
  {
    timeStamp: 1687423898.484,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 540,
      id: "orjfuieb-f1xr-qjo1-uui1-5g1ggflv5px1",
    },
    _id: "64940bbc52172c7c1bbaee77",
  },
  {
    timeStamp: 1687423898.484,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15467:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14852:14)",
    },
    _id: "64940bbc52172c7c1bbaee78",
  },
  {
    timeStamp: 1687423898.567,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 418,
      Y: 159,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee79",
  },
  {
    timeStamp: 1687423898.781,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 418,
      Y: 159,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee7a",
  },
  {
    timeStamp: 1687423898.806,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee7b",
  },
  {
    timeStamp: 1687423899.05,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "W",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee7c",
  },
  {
    timeStamp: 1687423899.127,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee7d",
  },
  {
    timeStamp: 1687423899.169,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "w",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee7e",
  },
  {
    timeStamp: 1687423899.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "o",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee7f",
  },
  {
    timeStamp: 1687423899.338,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "o",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee80",
  },
  {
    timeStamp: 1687423899.339,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee81",
  },
  {
    timeStamp: 1687423899.401,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "k",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee82",
  },
  {
    timeStamp: 1687423899.422,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee83",
  },
  {
    timeStamp: 1687423899.463,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "k",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee84",
  },
  {
    timeStamp: 1687423899.523,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee85",
  },
  {
    timeStamp: 1687423899.601,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "d",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worke</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee86",
  },
  {
    timeStamp: 1687423899.648,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee87",
  },
  {
    timeStamp: 1687423899.689,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: " ",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee88",
  },
  {
    timeStamp: 1687423899.716,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "d",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee89",
  },
  {
    timeStamp: 1687423899.799,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee8a",
  },
  {
    timeStamp: 1687423899.799,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: " ",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee8b",
  },
  {
    timeStamp: 1687423899.945,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee8c",
  },
  {
    timeStamp: 1687423899.991,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee8d",
  },
  {
    timeStamp: 1687423900.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee8e",
  },
  {
    timeStamp: 1687423900.115,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee8f",
  },
  {
    timeStamp: 1687423900.186,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee90",
  },
  {
    timeStamp: 1687423900.255,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;???</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee91",
  },
  {
    timeStamp: 1687423900.342,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;???</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee92",
  },
  {
    timeStamp: 1687423900.388,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;????</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee93",
  },
  {
    timeStamp: 1687423900.409,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;????</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee94",
  },
  {
    timeStamp: 1687423900.578,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 418,
      Y: 159,
      key: "Control",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;????</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee95",
  },
  {
    timeStamp: 1687423900.711,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "Control",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked</span><span class="mtkw">·</span><span class="mtk1">????</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee96",
  },
  {
    timeStamp: 1687423900.755,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "a",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 613px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "64940bbc52172c7c1bbaee97",
  },
  {
    timeStamp: 1687423900.782,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 418,
      Y: 159,
      key: "Backspace",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 613px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "64940bbc52172c7c1bbaee98",
  },
  {
    timeStamp: 1687423902.047,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64940bbc52172c7c1bbaee99",
  },
  {
    timeStamp: 1687423902.068,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "no23b0wl-6vfb-mhwp-bsqd-y82dtdyxp21w",
    },
    _id: "64940bbc52172c7c1bbaee9a",
  },
  {
    timeStamp: 1687423902.537,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 234,
      Y: 145,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee9b",
  },
  {
    timeStamp: 1687423902.646,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaee9c",
  },
  {
    timeStamp: 1687423902.703,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 635,
      id: "no23b0wl-6vfb-mhwp-bsqd-y82dtdyxp21w",
    },
    _id: "64940bbc52172c7c1bbaee9d",
  },
  {
    timeStamp: 1687423902.703,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15467:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14852:14)",
    },
    _id: "64940bbc52172c7c1bbaee9e",
  },
  {
    timeStamp: 1687423902.767,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 234,
      Y: 145,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaee9f",
  },
  {
    timeStamp: 1687423902.773,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "R",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea0",
  },
  {
    timeStamp: 1687423902.836,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea1",
  },
  {
    timeStamp: 1687423902.836,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea2",
  },
  {
    timeStamp: 1687423902.955,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">R</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea3",
  },
  {
    timeStamp: 1687423903.088,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Re</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea4",
  },
  {
    timeStamp: 1687423903.221,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "f",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Re</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea5",
  },
  {
    timeStamp: 1687423903.315,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "f",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Ref</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea6",
  },
  {
    timeStamp: 1687423903.411,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Ref</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea7",
  },
  {
    timeStamp: 1687423903.471,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refr</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea8",
  },
  {
    timeStamp: 1687423903.495,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refre</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeea9",
  },
  {
    timeStamp: 1687423903.525,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refre</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeaa",
  },
  {
    timeStamp: 1687423903.645,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "s",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refre</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeab",
  },
  {
    timeStamp: 1687423903.739,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refres</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeac",
  },
  {
    timeStamp: 1687423903.792,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "h",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refrese</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeead",
  },
  {
    timeStamp: 1687423903.797,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "s",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refrese</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeae",
  },
  {
    timeStamp: 1687423903.854,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "h",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreseh</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeaf",
  },
  {
    timeStamp: 1687423903.854,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreseh</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb0",
  },
  {
    timeStamp: 1687423904.364,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "Backspace",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refrese</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb1",
  },
  {
    timeStamp: 1687423904.503,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "Backspace",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refres</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb2",
  },
  {
    timeStamp: 1687423904.637,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "h",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refres</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb3",
  },
  {
    timeStamp: 1687423904.699,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "h",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refresh</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb4",
  },
  {
    timeStamp: 1687423904.731,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refresh</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb5",
  },
  {
    timeStamp: 1687423904.786,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "d",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshe</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb6",
  },
  {
    timeStamp: 1687423904.833,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb7",
  },
  {
    timeStamp: 1687423904.894,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: " ",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb8",
  },
  {
    timeStamp: 1687423904.899,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "d",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeb9",
  },
  {
    timeStamp: 1687423904.985,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeba",
  },
  {
    timeStamp: 1687423905.012,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: " ",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeebb",
  },
  {
    timeStamp: 1687423905.153,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeebc",
  },
  {
    timeStamp: 1687423905.199,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeebd",
  },
  {
    timeStamp: 1687423905.262,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeebe",
  },
  {
    timeStamp: 1687423905.372,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeebf",
  },
  {
    timeStamp: 1687423905.372,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "/",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeec0",
  },
  {
    timeStamp: 1687423905.58,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 234,
      Y: 145,
      key: "Control",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeec1",
  },
  {
    timeStamp: 1687423905.632,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 234,
      Y: 145,
      key: "Control",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Refreshed&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeec2",
  },
  {
    timeStamp: 1687423906.774,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64940bbc52172c7c1bbaeec3",
  },
  {
    timeStamp: 1687423906.798,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "xwlcam29-2wpt-7dht-yeig-ym2x6nee452r",
    },
    _id: "64940bbc52172c7c1bbaeec4",
  },
  {
    timeStamp: 1687423907.286,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 246,
      Y: 145,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeec5",
  },
  {
    timeStamp: 1687423907.336,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 538,
      id: "xwlcam29-2wpt-7dht-yeig-ym2x6nee452r",
    },
    _id: "64940bbc52172c7c1bbaeec6",
  },
  {
    timeStamp: 1687423907.336,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15467:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14852:14)",
    },
    _id: "64940bbc52172c7c1bbaeec7",
  },
  {
    timeStamp: 1687423907.509,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 246,
      Y: 145,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeec8",
  },
  {
    timeStamp: 1687423907.816,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeec9",
  },
  {
    timeStamp: 1687423907.887,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "W",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeca",
  },
  {
    timeStamp: 1687423908.003,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeecb",
  },
  {
    timeStamp: 1687423908.004,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "w",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeecc",
  },
  {
    timeStamp: 1687423908.056,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "o",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeecd",
  },
  {
    timeStamp: 1687423908.125,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "o",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeece",
  },
  {
    timeStamp: 1687423908.173,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wo</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeecf",
  },
  {
    timeStamp: 1687423908.258,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "k",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed0",
  },
  {
    timeStamp: 1687423908.262,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "r",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Wor</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed1",
  },
  {
    timeStamp: 1687423908.312,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "k",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed2",
  },
  {
    timeStamp: 1687423908.568,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Work</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed3",
  },
  {
    timeStamp: 1687423908.678,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "d",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worke</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed4",
  },
  {
    timeStamp: 1687423908.724,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "e",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed5",
  },
  {
    timeStamp: 1687423908.781,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: " ",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed6",
  },
  {
    timeStamp: 1687423908.801,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "d",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed7",
  },
  {
    timeStamp: 1687423908.87,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed8",
  },
  {
    timeStamp: 1687423908.872,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: " ",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeed9",
  },
  {
    timeStamp: 1687423908.975,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeeda",
  },
  {
    timeStamp: 1687423909.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeedb",
  },
  {
    timeStamp: 1687423909.091,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 246,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeedc",
  },
  {
    timeStamp: 1687423909.146,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "?",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeedd",
  },
  {
    timeStamp: 1687423909.337,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 246,
      Y: 145,
      key: "Shift",
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">Worked&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeede",
  },
  {
    timeStamp: 1687423910.186,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 782,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "64940bbc52172c7c1bbaeedf",
  },
  {
    timeStamp: 1687423910.384,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 782,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeee0",
  },
  {
    timeStamp: 1687423911.248,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 782,
      Y: 41,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
      value: "18",
    },
    _id: "64940bbc52172c7c1bbaeee1",
  },
  {
    timeStamp: 1687423911.248,
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
    _id: "64940bbc52172c7c1bbaeee2",
  },
  {
    timeStamp: 1687423911.748,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 604,
      Y: 147,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">Worked&nbsp;??</span></span></div>',
    },
    _id: "64940bbc52172c7c1bbaeee3",
  },
  {
    timeStamp: 1687423911.97,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 604,
      Y: 147,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:24px;height:24px;" class="view-line"><span><span class="mtk1">Worked&nbsp;??</span></span></div>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeee4",
  },
  {
    timeStamp: 1687423913.25,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "64940bbc52172c7c1bbaeee5",
  },
  {
    timeStamp: 1687423913.271,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "7y5p22vo-8xcu-2tjz-j4hk-bgv4bxrfzred",
    },
    _id: "64940bbc52172c7c1bbaeee6",
  },
  {
    timeStamp: 1687423913.772,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 500,
      id: "7y5p22vo-8xcu-2tjz-j4hk-bgv4bxrfzred",
    },
    _id: "64940bbc52172c7c1bbaeee7",
  },
  {
    timeStamp: 1687423913.772,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15467:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14852:14)",
    },
    _id: "64940bbc52172c7c1bbaeee8",
  },
  {
    timeStamp: 1687423919.499,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaeee9",
  },
  {
    timeStamp: 1687423919.68,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeeea",
  },
  {
    timeStamp: 1687423919.686,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaeeeb",
  },
  {
    timeStamp: 1687423919.832,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeeec",
  },
  {
    timeStamp: 1687423919.836,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaeeed",
  },
  {
    timeStamp: 1687423919.978,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeeee",
  },
  {
    timeStamp: 1687423919.982,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaeeef",
  },
  {
    timeStamp: 1687423920.11,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeef0",
  },
  {
    timeStamp: 1687423920.113,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaeef1",
  },
  {
    timeStamp: 1687423920.245,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeef2",
  },
  {
    timeStamp: 1687423920.248,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaeef3",
  },
  {
    timeStamp: 1687423920.379,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeef4",
  },
  {
    timeStamp: 1687423920.382,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaeef5",
  },
  {
    timeStamp: 1687423920.536,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeef6",
  },
  {
    timeStamp: 1687423920.54,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaeef7",
  },
  {
    timeStamp: 1687423920.686,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeef8",
  },
  {
    timeStamp: 1687423920.692,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaeef9",
  },
  {
    timeStamp: 1687423920.815,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeefa",
  },
  {
    timeStamp: 1687423920.818,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaeefb",
  },
  {
    timeStamp: 1687423920.951,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeefc",
  },
  {
    timeStamp: 1687423920.953,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaeefd",
  },
  {
    timeStamp: 1687423921.079,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaeefe",
  },
  {
    timeStamp: 1687423921.082,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaeeff",
  },
  {
    timeStamp: 1687423921.253,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaef00",
  },
  {
    timeStamp: 1687423921.256,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaef01",
  },
  {
    timeStamp: 1687423921.395,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaef02",
  },
  {
    timeStamp: 1687423921.398,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaef03",
  },
  {
    timeStamp: 1687423921.509,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaef04",
  },
  {
    timeStamp: 1687423921.513,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "64940bbc52172c7c1bbaef05",
  },
  {
    timeStamp: 1687423921.652,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaef06",
  },
  {
    timeStamp: 1687423921.656,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>',
    },
    _id: "64940bbc52172c7c1bbaef07",
  },
  {
    timeStamp: 1687423921.877,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1215,
      Y: 29,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "64940bbc52172c7c1bbaef08",
  },
  {
    timeStamp: 1687423924.521,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 672,
      Y: 320,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 689px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "64940bbc52172c7c1bbaef09",
  },
  {
    timeStamp: 1687423932.568,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 926,
      Y: 1,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "64940bbc52172c7c1bbaef0a",
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
    args: ["--start-maximized", "--force-device-scale-factor=1"],
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
          pre.textContent = "Session : abc_user/123 \n" + "Elapsed : " + time;
        } else {
          pre.textContent = "Session : abc_user/123 \n" + "Elapsed : " + time;
        }
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
