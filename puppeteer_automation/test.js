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
    timeStamp: 1687399674.412,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0.446 },
    _id: "6493ad2052172c7c1bbaa281",
  },
  {
    timeStamp: 1687399675.426,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 629, Y: 222, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa282",
  },
  {
    timeStamp: 1687399675.533,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 629,
      Y: 222,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa283",
  },
  {
    timeStamp: 1687399675.621,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa284",
  },
  {
    timeStamp: 1687399675.795,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "T", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa285",
  },
  {
    timeStamp: 1687399675.876,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa286",
  },
  {
    timeStamp: 1687399675.876,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "t", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa287",
  },
  {
    timeStamp: 1687399675.98,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa288",
  },
  {
    timeStamp: 1687399676.09,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa289",
  },
  {
    timeStamp: 1687399676.113,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "y", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa28a",
  },
  {
    timeStamp: 1687399676.159,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "y", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa28b",
  },
  {
    timeStamp: 1687399676.275,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "i", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa28c",
  },
  {
    timeStamp: 1687399676.343,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "n", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa28d",
  },
  {
    timeStamp: 1687399676.39,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "i", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa28e",
  },
  {
    timeStamp: 1687399676.452,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "n", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa28f",
  },
  {
    timeStamp: 1687399676.535,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa290",
  },
  {
    timeStamp: 1687399676.676,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa291",
  },
  {
    timeStamp: 1687399676.826,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa292",
  },
  {
    timeStamp: 1687399676.897,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa293",
  },
  {
    timeStamp: 1687399676.984,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "g", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa294",
  },
  {
    timeStamp: 1687399677.084,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa295",
  },
  {
    timeStamp: 1687399677.085,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "g", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa296",
  },
  {
    timeStamp: 1687399677.174,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa297",
  },
  {
    timeStamp: 1687399677.174,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "t", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa298",
  },
  {
    timeStamp: 1687399677.268,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa299",
  },
  {
    timeStamp: 1687399677.27,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "t", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa29a",
  },
  {
    timeStamp: 1687399677.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "i", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa29b",
  },
  {
    timeStamp: 1687399677.331,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa29c",
  },
  {
    timeStamp: 1687399677.414,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "i", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa29d",
  },
  {
    timeStamp: 1687399677.414,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "s", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa29e",
  },
  {
    timeStamp: 1687399677.521,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa29f",
  },
  {
    timeStamp: 1687399677.523,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "s", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a0",
  },
  {
    timeStamp: 1687399677.583,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a1",
  },
  {
    timeStamp: 1687399677.601,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a2",
  },
  {
    timeStamp: 1687399677.685,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "g", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a3",
  },
  {
    timeStamp: 1687399677.706,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a4",
  },
  {
    timeStamp: 1687399677.8,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "i", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a5",
  },
  {
    timeStamp: 1687399677.801,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "g", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a6",
  },
  {
    timeStamp: 1687399677.801,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a7",
  },
  {
    timeStamp: 1687399677.846,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "n", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a8",
  },
  {
    timeStamp: 1687399677.885,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "i", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2a9",
  },
  {
    timeStamp: 1687399677.907,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2aa",
  },
  {
    timeStamp: 1687399677.961,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "n", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2ab",
  },
  {
    timeStamp: 1687399678.16,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "Control", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2ac",
  },
  {
    timeStamp: 1687399678.283,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2ad",
  },
  {
    timeStamp: 1687399678.355,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "Control", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2ae",
  },
  {
    timeStamp: 1687399678.404,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2af",
  },
  {
    timeStamp: 1687399678.749,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b0",
  },
  {
    timeStamp: 1687399678.89,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b1",
  },
  {
    timeStamp: 1687399679.046,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b2",
  },
  {
    timeStamp: 1687399679.115,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b3",
  },
  {
    timeStamp: 1687399679.263,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b4",
  },
  {
    timeStamp: 1687399679.322,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b5",
  },
  {
    timeStamp: 1687399679.351,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b6",
  },
  {
    timeStamp: 1687399679.437,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b7",
  },
  {
    timeStamp: 1687399679.468,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "f", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b8",
  },
  {
    timeStamp: 1687399679.554,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "f", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2b9",
  },
  {
    timeStamp: 1687399679.653,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2ba",
  },
  {
    timeStamp: 1687399679.707,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2bb",
  },
  {
    timeStamp: 1687399679.777,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2bc",
  },
  {
    timeStamp: 1687399679.8,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2bd",
  },
  {
    timeStamp: 1687399679.919,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "s", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2be",
  },
  {
    timeStamp: 1687399679.973,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "s", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2bf",
  },
  {
    timeStamp: 1687399680.083,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "s", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c0",
  },
  {
    timeStamp: 1687399680.137,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "s", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c1",
  },
  {
    timeStamp: 1687399680.186,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c2",
  },
  {
    timeStamp: 1687399680.263,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c3",
  },
  {
    timeStamp: 1687399680.714,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c4",
  },
  {
    timeStamp: 1687399680.808,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c5",
  },
  {
    timeStamp: 1687399680.889,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c6",
  },
  {
    timeStamp: 1687399681.015,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c7",
  },
  {
    timeStamp: 1687399681.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 629, Y: 222, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c8",
  },
  {
    timeStamp: 1687399681.251,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 629, Y: 222, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2c9",
  },
  {
    timeStamp: 1687399682.717,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0.02879999999701977 },
    _id: "6493ad2052172c7c1bbaa2ca",
  },
  {
    timeStamp: 1687399683.449,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 582, Y: 221, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2cb",
  },
  {
    timeStamp: 1687399683.543,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 584, Y: 221, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2cc",
  },
  {
    timeStamp: 1687399683.742,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 232, key: "1", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2cd",
  },
  {
    timeStamp: 1687399683.765,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 524,
      Y: 227,
      key: "2",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6493ad2052172c7c1bbaa2ce",
  },
  {
    timeStamp: 1687399683.842,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 305,
      Y: 142,
      key: "3",
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : </div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "6493ad2052172c7c1bbaa2cf",
  },
  {
    timeStamp: 1687399683.884,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 250, Y: 91, key: "1", HTMLElement: "<div>Session ID : </div>" },
    _id: "6493ad2052172c7c1bbaa2d0",
  },
  {
    timeStamp: 1687399683.92,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 230,
      Y: 64,
      key: "2",
      HTMLElement: '<div class="header">Value : 1<div></div></div>',
    },
    _id: "6493ad2052172c7c1bbaa2d1",
  },
  {
    timeStamp: 1687399683.966,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 215,
      Y: 39,
      key: "3",
      HTMLElement: '<div class="header">Value : 1<div></div></div>',
    },
    _id: "6493ad2052172c7c1bbaa2d2",
  },
  {
    timeStamp: 1687399684.762,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0.021899999991059304 },
    _id: "6493ad2052172c7c1bbaa2d3",
  },
  {
    timeStamp: 1687399685.429,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 65,
      Y: 120,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "6493ad2052172c7c1bbaa2d4",
  },
  {
    timeStamp: 1687399685.494,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 65,
      Y: 120,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2d5",
  },
  {
    timeStamp: 1687399685.911,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 66,
      Y: 133,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      value: "2",
    },
    _id: "6493ad2052172c7c1bbaa2d6",
  },
  {
    timeStamp: 1687399685.911,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 18,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "6493ad2052172c7c1bbaa2d7",
  },
  {
    timeStamp: 1687399686.267,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 196,
      Y: 123,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6493ad2052172c7c1bbaa2d8",
  },
  {
    timeStamp: 1687399686.351,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 197,
      Y: 123,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6493ad2052172c7c1bbaa2d9",
  },
  {
    timeStamp: 1687399686.828,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 130,
      Y: 174,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6493ad2052172c7c1bbaa2da",
  },
  {
    timeStamp: 1687399686.881,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 130,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6493ad2052172c7c1bbaa2db",
  },
  {
    timeStamp: 1687399687.794,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 123,
      Y: 180,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      value: "2023-06-06",
    },
    _id: "6493ad2052172c7c1bbaa2dc",
  },
  {
    timeStamp: 1687399688.123,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 190,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "6493ad2052172c7c1bbaa2dd",
  },
  {
    timeStamp: 1687399688.202,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 190,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2de",
  },
  {
    timeStamp: 1687399689.593,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 72,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox1">Option 1</label>',
    },
    _id: "6493ad2052172c7c1bbaa2df",
  },
  {
    timeStamp: 1687399689.594,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 72,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox1">Option 1</label>',
      value: "09:41",
    },
    _id: "6493ad2052172c7c1bbaa2e0",
  },
  {
    timeStamp: 1687399689.635,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 72,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox1">Option 1</label>',
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2e1",
  },
  {
    timeStamp: 1687399689.635,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 72,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox1">Option 1</label>',
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2e2",
  },
  {
    timeStamp: 1687399689.635,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 72,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox1">Option 1</label>',
      checked: true,
    },
    _id: "6493ad2052172c7c1bbaa2e3",
  },
  {
    timeStamp: 1687399690.321,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 166,
      Y: 247,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div>',
    },
    _id: "6493ad2052172c7c1bbaa2e4",
  },
  {
    timeStamp: 1687399690.422,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 174,
      Y: 248,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
    },
    _id: "6493ad2052172c7c1bbaa2e5",
  },
  {
    timeStamp: 1687399691.447,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 180,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
    },
    _id: "6493ad2052172c7c1bbaa2e6",
  },
  {
    timeStamp: 1687399691.532,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 180,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2e7",
  },
  {
    timeStamp: 1687399691.532,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 180,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      checked: true,
    },
    _id: "6493ad2052172c7c1bbaa2e8",
  },
  {
    timeStamp: 1687399692.35,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 701,
      Y: 465,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6493ad2052172c7c1bbaa2e9",
  },
  {
    timeStamp: 1687399692.607,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 716,
      Y: 575,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 141px;"></textarea></div>',
    },
    _id: "6493ad2052172c7c1bbaa2ea",
  },
  {
    timeStamp: 1687399694.22,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 703,
      Y: 577,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 141px;"></textarea>',
    },
    _id: "6493ad2052172c7c1bbaa2eb",
  },
  {
    timeStamp: 1687399694.493,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 701,
      Y: 480,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 44px;"></textarea>',
    },
    _id: "6493ad2052172c7c1bbaa2ec",
  },
  {
    timeStamp: 1687399695.608,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 651,
      Y: 737,
      scrollX: 0,
      scrollY: 296.6666564941406,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6493ad2052172c7c1bbaa2ed",
  },
  {
    timeStamp: 1687399695.699,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 651,
      Y: 737,
      scrollX: 0,
      scrollY: 296.6666564941406,
      HTMLElement: "<button>Fetch</button>",
      value: "2",
    },
    _id: "6493ad2052172c7c1bbaa2ee",
  },
  {
    timeStamp: 1687399695.699,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "m2ezcd1w-xaib-7x7s-ubm7-lpp0qntwx9qi",
    },
    _id: "6493ad2052172c7c1bbaa2ef",
  },
  {
    timeStamp: 1687399695.701,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 651,
      Y: 737,
      scrollX: 0,
      scrollY: 296.6666564941406,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2f0",
  },
  {
    timeStamp: 1687399695.723,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "m2ezcd1w-xaib-7x7s-ubm7-lpp0qntwx9qi",
      duration: 22,
    },
    _id: "6493ad2052172c7c1bbaa2f1",
  },
  {
    timeStamp: 1687399696.46,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 610, Y: 230, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f2",
  },
  {
    timeStamp: 1687399696.54,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 610,
      Y: 230,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa2f3",
  },
  {
    timeStamp: 1687399696.655,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "f", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f4",
  },
  {
    timeStamp: 1687399696.803,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f5",
  },
  {
    timeStamp: 1687399696.818,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "f", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f6",
  },
  {
    timeStamp: 1687399696.952,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f7",
  },
  {
    timeStamp: 1687399697.466,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "c", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f8",
  },
  {
    timeStamp: 1687399697.511,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "c", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2f9",
  },
  {
    timeStamp: 1687399697.753,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2fa",
  },
  {
    timeStamp: 1687399697.83,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2fb",
  },
  {
    timeStamp: 1687399697.831,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2fc",
  },
  {
    timeStamp: 1687399697.922,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2fd",
  },
  {
    timeStamp: 1687399698.094,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "c", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2fe",
  },
  {
    timeStamp: 1687399698.196,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "c", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa2ff",
  },
  {
    timeStamp: 1687399698.731,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa300",
  },
  {
    timeStamp: 1687399698.826,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "d", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa301",
  },
  {
    timeStamp: 1687399698.871,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa302",
  },
  {
    timeStamp: 1687399698.91,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "d", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa303",
  },
  {
    timeStamp: 1687399699.726,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa304",
  },
  {
    timeStamp: 1687399699.788,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa305",
  },
  {
    timeStamp: 1687399699.868,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa306",
  },
  {
    timeStamp: 1687399699.931,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa307",
  },
  {
    timeStamp: 1687399700.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa308",
  },
  {
    timeStamp: 1687399700.46,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "h", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa309",
  },
  {
    timeStamp: 1687399700.46,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa30a",
  },
  {
    timeStamp: 1687399700.53,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "d", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa30b",
  },
  {
    timeStamp: 1687399700.594,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa30c",
  },
  {
    timeStamp: 1687399700.661,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa30d",
  },
  {
    timeStamp: 1687399700.662,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "d", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa30e",
  },
  {
    timeStamp: 1687399700.699,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa30f",
  },
  {
    timeStamp: 1687399700.733,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa310",
  },
  {
    timeStamp: 1687399700.952,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa311",
  },
  {
    timeStamp: 1687399700.99,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa312",
  },
  {
    timeStamp: 1687399701.085,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 610, Y: 230, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa313",
  },
  {
    timeStamp: 1687399701.141,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa314",
  },
  {
    timeStamp: 1687399701.3,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 610, Y: 230, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa315",
  },
  {
    timeStamp: 1687399702.479,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0.021 },
    _id: "6493ad2052172c7c1bbaa316",
  },
  {
    timeStamp: 1687399703.038,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 633,
      Y: 241,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6493ad2052172c7c1bbaa317",
  },
  {
    timeStamp: 1687399703.113,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 633,
      Y: 241,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa318",
  },
  {
    timeStamp: 1687399703.187,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 633,
      Y: 241,
      key: "Shift",
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6493ad2052172c7c1bbaa319",
  },
  {
    timeStamp: 1687399703.472,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 633,
      Y: 241,
      key: "Shift",
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6493ad2052172c7c1bbaa31a",
  },
  {
    timeStamp: 1687399703.933,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 625, Y: 227, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa31b",
  },
  {
    timeStamp: 1687399704.009,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa31c",
  },
  {
    timeStamp: 1687399704.015,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 625,
      Y: 227,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6493ad2052172c7c1bbaa31d",
  },
  {
    timeStamp: 1687399704.135,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "W", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa31e",
  },
  {
    timeStamp: 1687399704.236,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa31f",
  },
  {
    timeStamp: 1687399704.261,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "w", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa320",
  },
  {
    timeStamp: 1687399704.478,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "o", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa321",
  },
  {
    timeStamp: 1687399704.532,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa322",
  },
  {
    timeStamp: 1687399704.549,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "o", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa323",
  },
  {
    timeStamp: 1687399704.636,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "r", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa324",
  },
  {
    timeStamp: 1687399704.886,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "k", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa325",
  },
  {
    timeStamp: 1687399704.932,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "k", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa326",
  },
  {
    timeStamp: 1687399705.008,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa327",
  },
  {
    timeStamp: 1687399705.117,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "d", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa328",
  },
  {
    timeStamp: 1687399705.163,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "e", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa329",
  },
  {
    timeStamp: 1687399705.225,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa32a",
  },
  {
    timeStamp: 1687399705.226,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "d", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa32b",
  },
  {
    timeStamp: 1687399705.264,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa32c",
  },
  {
    timeStamp: 1687399705.319,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: " ", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa32d",
  },
  {
    timeStamp: 1687399705.319,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa32e",
  },
  {
    timeStamp: 1687399705.366,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa32f",
  },
  {
    timeStamp: 1687399705.436,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa330",
  },
  {
    timeStamp: 1687399705.553,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "?", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa331",
  },
  {
    timeStamp: 1687399705.571,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "Shift", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa332",
  },
  {
    timeStamp: 1687399705.8,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "Control", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa333",
  },
  {
    timeStamp: 1687399705.906,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa334",
  },
  {
    timeStamp: 1687399706.019,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "Control", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa335",
  },
  {
    timeStamp: 1687399706.058,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "a", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa336",
  },
  {
    timeStamp: 1687399706.272,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 625, Y: 227, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa337",
  },
  {
    timeStamp: 1687399706.391,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 625, Y: 227, key: "Backspace", HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa338",
  },
  {
    timeStamp: 1687399707.399,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 625, Y: 227, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6493ad2052172c7c1bbaa339",
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

  //     await page.evaluate(() => {
  //     const pre = document.createElement("pre");
  //     pre.id = "id-abc_user/v7pk3sfu-3l29-jy2m-kpkj-npgzgvw3qzgu";
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
  //             const pre = document.getElementById("id-abc_user/v7pk3sfu-3l29-jy2m-kpkj-npgzgvw3qzgu");
  //             pre.textContent =
  //             "Session : abc_user/v7pk3sfu-3l29-jy2m-kpkj-npgzgvw3qzgu \n"  +
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
