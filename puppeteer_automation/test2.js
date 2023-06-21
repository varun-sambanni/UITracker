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
    timeStamp: 1687327877.073,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.44640000000037255 },
    _id: "649294e04eb6b1e079b5245b",
  },
  {
    timeStamp: 1687327877.886,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 329, Y: 235, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5245c",
  },
  {
    timeStamp: 1687327878.097,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5245d",
  },
  {
    timeStamp: 1687327878.112,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 329,
      Y: 235,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b5245e",
  },
  {
    timeStamp: 1687327878.208,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5245f",
  },
  {
    timeStamp: 1687327878.238,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52460",
  },
  {
    timeStamp: 1687327878.336,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52461",
  },
  {
    timeStamp: 1687327878.462,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52462",
  },
  {
    timeStamp: 1687327878.5,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52463",
  },
  {
    timeStamp: 1687327878.547,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52464",
  },
  {
    timeStamp: 1687327878.632,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52465",
  },
  {
    timeStamp: 1687327878.719,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52466",
  },
  {
    timeStamp: 1687327878.882,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52467",
  },
  {
    timeStamp: 1687327878.904,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52468",
  },
  {
    timeStamp: 1687327878.93,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52469",
  },
  {
    timeStamp: 1687327878.994,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5246a",
  },
  {
    timeStamp: 1687327879.041,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5246b",
  },
  {
    timeStamp: 1687327879.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5246c",
  },
  {
    timeStamp: 1687327879.303,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5246d",
  },
  {
    timeStamp: 1687327879.344,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5246e",
  },
  {
    timeStamp: 1687327879.393,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5246f",
  },
  {
    timeStamp: 1687327879.416,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "i", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52470",
  },
  {
    timeStamp: 1687327879.478,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "n", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52471",
  },
  {
    timeStamp: 1687327879.532,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "i", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52472",
  },
  {
    timeStamp: 1687327879.554,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52473",
  },
  {
    timeStamp: 1687327879.577,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "n", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52474",
  },
  {
    timeStamp: 1687327879.679,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52475",
  },
  {
    timeStamp: 1687327880.381,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52476",
  },
  {
    timeStamp: 1687327880.485,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52477",
  },
  {
    timeStamp: 1687327880.561,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52478",
  },
  {
    timeStamp: 1687327880.609,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52479",
  },
  {
    timeStamp: 1687327880.61,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5247a",
  },
  {
    timeStamp: 1687327880.664,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5247b",
  },
  {
    timeStamp: 1687327880.861,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5247c",
  },
  {
    timeStamp: 1687327880.97,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5247d",
  },
  {
    timeStamp: 1687327881.013,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5247e",
  },
  {
    timeStamp: 1687327881.072,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5247f",
  },
  {
    timeStamp: 1687327881.183,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52480",
  },
  {
    timeStamp: 1687327881.281,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52481",
  },
  {
    timeStamp: 1687327881.311,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52482",
  },
  {
    timeStamp: 1687327881.374,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52483",
  },
  {
    timeStamp: 1687327881.894,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52484",
  },
  {
    timeStamp: 1687327881.94,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52485",
  },
  {
    timeStamp: 1687327882.003,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 329, Y: 235, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52486",
  },
  {
    timeStamp: 1687327882.026,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52487",
  },
  {
    timeStamp: 1687327882.071,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52488",
  },
  {
    timeStamp: 1687327882.071,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 329, Y: 235, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52489",
  },
  {
    timeStamp: 1687327883.155,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 83,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "649294e04eb6b1e079b5248a",
  },
  {
    timeStamp: 1687327883.38,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 83,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b5248b",
  },
  {
    timeStamp: 1687327884.316,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 78,
      Y: 136,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
      value: "Option 3",
    },
    _id: "649294e04eb6b1e079b5248c",
  },
  {
    timeStamp: 1687327884.316,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 18,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "649294e04eb6b1e079b5248d",
  },
  {
    timeStamp: 1687327885.144,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 161,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "649294e04eb6b1e079b5248e",
  },
  {
    timeStamp: 1687327886.167,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 227,
      Y: 150,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/k4dlh937-h9qm-baep-1j47-vv2vicxyeevs</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "649294e04eb6b1e079b5248f",
  },
  {
    timeStamp: 1687327887.052,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 115,
      Y: 170,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "649294e04eb6b1e079b52490",
  },
  {
    timeStamp: 1687327887.263,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 115,
      Y: 170,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52491",
  },
  {
    timeStamp: 1687327888.637,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 114,
      Y: 182,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
    },
    _id: "649294e04eb6b1e079b52492",
  },
  {
    timeStamp: 1687327895.261,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 114,
      Y: 182,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
      value: "2022-11-24",
    },
    _id: "649294e04eb6b1e079b52493",
  },
  {
    timeStamp: 1687327896.168,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 192,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "649294e04eb6b1e079b52494",
  },
  {
    timeStamp: 1687327896.384,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 192,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52495",
  },
  {
    timeStamp: 1687327897.622,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 190,
      Y: 184,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/k4dlh937-h9qm-baep-1j47-vv2vicxyeevs</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "649294e04eb6b1e079b52496",
  },
  {
    timeStamp: 1687327903.073,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 250,
      Y: 176,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
    },
    _id: "649294e04eb6b1e079b52497",
  },
  {
    timeStamp: 1687327903.074,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 250,
      Y: 176,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
      value: "11:41",
    },
    _id: "649294e04eb6b1e079b52498",
  },
  {
    timeStamp: 1687327903.298,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 250,
      Y: 176,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52499",
  },
  {
    timeStamp: 1687327904.26,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 176,
      Y: 211,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "649294e04eb6b1e079b5249a",
  },
  {
    timeStamp: 1687327904.481,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 176,
      Y: 211,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5249b",
  },
  {
    timeStamp: 1687327904.481,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 176,
      Y: 211,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: true,
    },
    _id: "649294e04eb6b1e079b5249c",
  },
  {
    timeStamp: 1687327905.076,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 176,
      Y: 240,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div>',
    },
    _id: "649294e04eb6b1e079b5249d",
  },
  {
    timeStamp: 1687327905.307,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 176,
      Y: 240,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5249e",
  },
  {
    timeStamp: 1687327905.797,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 174,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
    },
    _id: "649294e04eb6b1e079b5249f",
  },
  {
    timeStamp: 1687327906.006,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 174,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b524a0",
  },
  {
    timeStamp: 1687327906.007,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 174,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      checked: true,
    },
    _id: "649294e04eb6b1e079b524a1",
  },
  {
    timeStamp: 1687327906.894,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 96,
      Y: 216,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
    },
    _id: "649294e04eb6b1e079b524a2",
  },
  {
    timeStamp: 1687327907.122,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 96,
      Y: 216,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b524a3",
  },
  {
    timeStamp: 1687327907.122,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 96,
      Y: 216,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
      checked: true,
    },
    _id: "649294e04eb6b1e079b524a4",
  },
  {
    timeStamp: 1687327908.182,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 324, Y: 232, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524a5",
  },
  {
    timeStamp: 1687327908.403,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 324,
      Y: 232,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b524a6",
  },
  {
    timeStamp: 1687327909.088,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524a7",
  },
  {
    timeStamp: 1687327909.182,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524a8",
  },
  {
    timeStamp: 1687327909.261,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "l", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524a9",
  },
  {
    timeStamp: 1687327909.331,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "l", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524aa",
  },
  {
    timeStamp: 1687327909.405,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "l", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ab",
  },
  {
    timeStamp: 1687327909.475,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "l", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ac",
  },
  {
    timeStamp: 1687327909.541,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ad",
  },
  {
    timeStamp: 1687327909.619,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ae",
  },
  {
    timeStamp: 1687327909.664,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524af",
  },
  {
    timeStamp: 1687327909.746,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b0",
  },
  {
    timeStamp: 1687327909.775,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "h", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b1",
  },
  {
    timeStamp: 1687327909.852,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "h", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b2",
  },
  {
    timeStamp: 1687327910.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b3",
  },
  {
    timeStamp: 1687327910.266,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b4",
  },
  {
    timeStamp: 1687327910.302,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b5",
  },
  {
    timeStamp: 1687327910.349,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b6",
  },
  {
    timeStamp: 1687327910.351,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b7",
  },
  {
    timeStamp: 1687327910.434,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "w", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b8",
  },
  {
    timeStamp: 1687327910.475,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524b9",
  },
  {
    timeStamp: 1687327910.521,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "o", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ba",
  },
  {
    timeStamp: 1687327910.565,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "w", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524bb",
  },
  {
    timeStamp: 1687327910.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "o", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524bc",
  },
  {
    timeStamp: 1687327910.603,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "r", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524bd",
  },
  {
    timeStamp: 1687327910.705,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "k", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524be",
  },
  {
    timeStamp: 1687327910.706,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "r", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524bf",
  },
  {
    timeStamp: 1687327910.79,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "k", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c0",
  },
  {
    timeStamp: 1687327910.79,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c1",
  },
  {
    timeStamp: 1687327910.866,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c2",
  },
  {
    timeStamp: 1687327910.908,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c3",
  },
  {
    timeStamp: 1687327910.975,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c4",
  },
  {
    timeStamp: 1687327910.976,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c5",
  },
  {
    timeStamp: 1687327911.063,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c6",
  },
  {
    timeStamp: 1687327911.063,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c7",
  },
  {
    timeStamp: 1687327911.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c8",
  },
  {
    timeStamp: 1687327911.253,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524c9",
  },
  {
    timeStamp: 1687327911.318,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ca",
  },
  {
    timeStamp: 1687327911.397,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524cb",
  },
  {
    timeStamp: 1687327911.511,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524cc",
  },
  {
    timeStamp: 1687327911.718,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524cd",
  },
  {
    timeStamp: 1687327911.784,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ce",
  },
  {
    timeStamp: 1687327911.852,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 324, Y: 232, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524cf",
  },
  {
    timeStamp: 1687327911.867,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524d0",
  },
  {
    timeStamp: 1687327911.902,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524d1",
  },
  {
    timeStamp: 1687327911.903,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 324, Y: 232, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524d2",
  },
  {
    timeStamp: 1687327912.581,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 569,
      Y: 289,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "649294e04eb6b1e079b524d3",
  },
  {
    timeStamp: 1687327912.806,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 569,
      Y: 289,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b524d4",
  },
  {
    timeStamp: 1687327913.698,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 411,
      Y: 298,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="password">',
    },
    _id: "649294e04eb6b1e079b524d5",
  },
  {
    timeStamp: 1687327913.921,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 411,
      Y: 298,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b524d6",
  },
  {
    timeStamp: 1687327914.034,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524d7",
  },
  {
    timeStamp: 1687327914.065,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "s", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524d8",
  },
  {
    timeStamp: 1687327914.152,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "d", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524d9",
  },
  {
    timeStamp: 1687327914.18,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "j", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524da",
  },
  {
    timeStamp: 1687327914.181,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524db",
  },
  {
    timeStamp: 1687327914.235,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "s", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524dc",
  },
  {
    timeStamp: 1687327914.296,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "d", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524dd",
  },
  {
    timeStamp: 1687327914.296,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524de",
  },
  {
    timeStamp: 1687327914.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "s", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524df",
  },
  {
    timeStamp: 1687327914.426,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "h", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e0",
  },
  {
    timeStamp: 1687327914.428,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "j", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e1",
  },
  {
    timeStamp: 1687327914.429,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "d", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e2",
  },
  {
    timeStamp: 1687327914.43,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "s", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e3",
  },
  {
    timeStamp: 1687327914.43,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e4",
  },
  {
    timeStamp: 1687327914.473,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "h", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e5",
  },
  {
    timeStamp: 1687327914.473,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "j", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e6",
  },
  {
    timeStamp: 1687327914.514,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "j", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e7",
  },
  {
    timeStamp: 1687327914.514,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "d", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e8",
  },
  {
    timeStamp: 1687327914.515,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524e9",
  },
  {
    timeStamp: 1687327914.574,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "d", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524ea",
  },
  {
    timeStamp: 1687327914.605,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524eb",
  },
  {
    timeStamp: 1687327914.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "d", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524ec",
  },
  {
    timeStamp: 1687327914.828,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 411,
      Y: 298,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "649294e04eb6b1e079b524ed",
  },
  {
    timeStamp: 1687327914.907,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524ee",
  },
  {
    timeStamp: 1687327914.963,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 411,
      Y: 298,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "649294e04eb6b1e079b524ef",
  },
  {
    timeStamp: 1687327914.987,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 411,
      Y: 298,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "649294e04eb6b1e079b524f0",
  },
  {
    timeStamp: 1687327915.032,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 298, key: "a", HTMLElement: '<input type="password">' },
    _id: "649294e04eb6b1e079b524f1",
  },
  {
    timeStamp: 1687327915.057,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 411,
      Y: 298,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "649294e04eb6b1e079b524f2",
  },
  {
    timeStamp: 1687327916.009,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 391,
      Y: 362,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<div class="field"><p>Field 1 : </p><input></div>',
    },
    _id: "649294e04eb6b1e079b524f3",
  },
  {
    timeStamp: 1687327916.229,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 391,
      Y: 362,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<div class="field"><p>Field 1 : </p><input></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b524f4",
  },
  {
    timeStamp: 1687327916.681,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 392, Y: 368, scrollX: 0, scrollY: 103, HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524f5",
  },
  {
    timeStamp: 1687327916.916,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 392,
      Y: 368,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b524f6",
  },
  {
    timeStamp: 1687327916.959,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "w", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524f7",
  },
  {
    timeStamp: 1687327917.067,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "o", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524f8",
  },
  {
    timeStamp: 1687327917.108,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "w", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524f9",
  },
  {
    timeStamp: 1687327917.173,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "o", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524fa",
  },
  {
    timeStamp: 1687327917.211,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "r", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524fb",
  },
  {
    timeStamp: 1687327917.305,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "k", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524fc",
  },
  {
    timeStamp: 1687327917.307,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "r", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524fd",
  },
  {
    timeStamp: 1687327917.393,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "k", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524fe",
  },
  {
    timeStamp: 1687327917.459,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "i", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b524ff",
  },
  {
    timeStamp: 1687327917.521,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "n", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52500",
  },
  {
    timeStamp: 1687327917.576,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "i", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52501",
  },
  {
    timeStamp: 1687327917.62,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "n", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52502",
  },
  {
    timeStamp: 1687327917.62,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52503",
  },
  {
    timeStamp: 1687327917.708,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52504",
  },
  {
    timeStamp: 1687327917.709,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "g", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52505",
  },
  {
    timeStamp: 1687327917.801,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52506",
  },
  {
    timeStamp: 1687327917.802,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52507",
  },
  {
    timeStamp: 1687327917.949,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52508",
  },
  {
    timeStamp: 1687327917.979,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52509",
  },
  {
    timeStamp: 1687327918.069,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5250a",
  },
  {
    timeStamp: 1687327918.119,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5250b",
  },
  {
    timeStamp: 1687327918.187,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5250c",
  },
  {
    timeStamp: 1687327918.304,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5250d",
  },
  {
    timeStamp: 1687327918.416,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5250e",
  },
  {
    timeStamp: 1687327918.463,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 368, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b5250f",
  },
  {
    timeStamp: 1687327918.518,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52510",
  },
  {
    timeStamp: 1687327918.518,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52511",
  },
  {
    timeStamp: 1687327918.536,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 368, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52512",
  },
  {
    timeStamp: 1687327919.358,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 400,
      Y: 448,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649294e04eb6b1e079b52513",
  },
  {
    timeStamp: 1687327919.555,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52514",
  },
  {
    timeStamp: 1687327919.574,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 400,
      Y: 448,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b52515",
  },
  {
    timeStamp: 1687327919.659,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52516",
  },
  {
    timeStamp: 1687327919.728,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52517",
  },
  {
    timeStamp: 1687327919.797,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52518",
  },
  {
    timeStamp: 1687327919.822,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52519",
  },
  {
    timeStamp: 1687327919.938,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5251a",
  },
  {
    timeStamp: 1687327919.94,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5251b",
  },
  {
    timeStamp: 1687327919.983,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5251c",
  },
  {
    timeStamp: 1687327920.082,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5251d",
  },
  {
    timeStamp: 1687327920.144,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5251e",
  },
  {
    timeStamp: 1687327920.145,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5251f",
  },
  {
    timeStamp: 1687327920.23,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52520",
  },
  {
    timeStamp: 1687327920.231,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52521",
  },
  {
    timeStamp: 1687327920.267,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52522",
  },
  {
    timeStamp: 1687327920.508,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52523",
  },
  {
    timeStamp: 1687327920.632,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52524",
  },
  {
    timeStamp: 1687327920.761,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52525",
  },
  {
    timeStamp: 1687327920.829,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 400,
      Y: 448,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649294e04eb6b1e079b52526",
  },
  {
    timeStamp: 1687327920.87,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52527",
  },
  {
    timeStamp: 1687327920.934,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52528",
  },
  {
    timeStamp: 1687327920.979,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b52529",
  },
  {
    timeStamp: 1687327921.058,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 400, Y: 448, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5252a",
  },
  {
    timeStamp: 1687327921.099,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 400, Y: 448, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649294e04eb6b1e079b5252b",
  },
  {
    timeStamp: 1687327921.276,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 400,
      Y: 448,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649294e04eb6b1e079b5252c",
  },
  {
    timeStamp: 1687327922.396,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 439,
      Y: 468,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649294e04eb6b1e079b5252d",
  },
  {
    timeStamp: 1687327922.774,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 445,
      Y: 629,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5252e",
  },
  {
    timeStamp: 1687327923.163,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 397,
      Y: 550,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5252f",
  },
  {
    timeStamp: 1687327923.198,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "Control",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52530",
  },
  {
    timeStamp: 1687327923.246,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52531",
  },
  {
    timeStamp: 1687327923.376,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "Control",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52532",
  },
  {
    timeStamp: 1687327923.387,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 397,
      Y: 550,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52533",
  },
  {
    timeStamp: 1687327923.398,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52534",
  },
  {
    timeStamp: 1687327923.861,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "w",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52535",
  },
  {
    timeStamp: 1687327923.949,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "o",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52536",
  },
  {
    timeStamp: 1687327923.993,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "w",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52537",
  },
  {
    timeStamp: 1687327924.027,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "o",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52538",
  },
  {
    timeStamp: 1687327924.072,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "r",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52539",
  },
  {
    timeStamp: 1687327924.142,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "k",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5253a",
  },
  {
    timeStamp: 1687327924.144,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "r",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5253b",
  },
  {
    timeStamp: 1687327924.228,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "k",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5253c",
  },
  {
    timeStamp: 1687327924.339,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "e",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5253d",
  },
  {
    timeStamp: 1687327924.409,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "d",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5253e",
  },
  {
    timeStamp: 1687327924.472,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "e",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5253f",
  },
  {
    timeStamp: 1687327924.528,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: " ",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52540",
  },
  {
    timeStamp: 1687327924.53,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "d",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52541",
  },
  {
    timeStamp: 1687327924.589,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "Shift",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52542",
  },
  {
    timeStamp: 1687327924.613,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: " ",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52543",
  },
  {
    timeStamp: 1687327924.635,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52544",
  },
  {
    timeStamp: 1687327924.681,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52545",
  },
  {
    timeStamp: 1687327924.767,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52546",
  },
  {
    timeStamp: 1687327924.839,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52547",
  },
  {
    timeStamp: 1687327924.903,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "Shift",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52548",
  },
  {
    timeStamp: 1687327925.117,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "Control",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52549",
  },
  {
    timeStamp: 1687327925.196,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5254a",
  },
  {
    timeStamp: 1687327925.23,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 550,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5254b",
  },
  {
    timeStamp: 1687327925.284,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "Control",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5254c",
  },
  {
    timeStamp: 1687327925.284,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5254d",
  },
  {
    timeStamp: 1687327925.31,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 550,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5254e",
  },
  {
    timeStamp: 1687327926.045,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 420,
      Y: 584,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b5254f",
  },
  {
    timeStamp: 1687327926.274,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 420,
      Y: 584,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52550",
  },
  {
    timeStamp: 1687327927.039,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 440,
      Y: 625,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52551",
  },
  {
    timeStamp: 1687327927.773,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 438,
      Y: 476,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<textarea style="height: 43px;"></textarea>',
    },
    _id: "649294e04eb6b1e079b52552",
  },
  {
    timeStamp: 1687327928.463,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 426,
      Y: 555,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="search">',
    },
    _id: "649294e04eb6b1e079b52553",
  },
  {
    timeStamp: 1687327928.683,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 426,
      Y: 555,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52554",
  },
  {
    timeStamp: 1687327929.384,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 554,
      key: "Shift",
      HTMLElement: '<input type="search">',
    },
    _id: "649294e04eb6b1e079b52555",
  },
  {
    timeStamp: 1687327929.515,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "A", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52556",
  },
  {
    timeStamp: 1687327929.585,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "A", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52557",
  },
  {
    timeStamp: 1687327929.609,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 554,
      key: "Shift",
      HTMLElement: '<input type="search">',
    },
    _id: "649294e04eb6b1e079b52558",
  },
  {
    timeStamp: 1687327929.667,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "l", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52559",
  },
  {
    timeStamp: 1687327929.728,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "l", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5255a",
  },
  {
    timeStamp: 1687327929.8,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "l", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5255b",
  },
  {
    timeStamp: 1687327929.878,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "l", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5255c",
  },
  {
    timeStamp: 1687327929.898,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: " ", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5255d",
  },
  {
    timeStamp: 1687327929.967,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "g", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5255e",
  },
  {
    timeStamp: 1687327930.016,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: " ", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5255f",
  },
  {
    timeStamp: 1687327930.073,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "o", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52560",
  },
  {
    timeStamp: 1687327930.075,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "g", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52561",
  },
  {
    timeStamp: 1687327930.129,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "o", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52562",
  },
  {
    timeStamp: 1687327930.188,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "o", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52563",
  },
  {
    timeStamp: 1687327930.25,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "o", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52564",
  },
  {
    timeStamp: 1687327930.274,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "d", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52565",
  },
  {
    timeStamp: 1687327930.379,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: " ", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52566",
  },
  {
    timeStamp: 1687327930.398,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "d", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52567",
  },
  {
    timeStamp: 1687327930.495,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: " ", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b52568",
  },
  {
    timeStamp: 1687327930.56,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 554,
      key: "Shift",
      HTMLElement: '<input type="search">',
    },
    _id: "649294e04eb6b1e079b52569",
  },
  {
    timeStamp: 1687327931.003,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 426, Y: 554, key: "?", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5256a",
  },
  {
    timeStamp: 1687327931.065,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 426, Y: 554, key: "?", HTMLElement: '<input type="search">' },
    _id: "649294e04eb6b1e079b5256b",
  },
  {
    timeStamp: 1687327931.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 554,
      key: "Shift",
      HTMLElement: '<input type="search">',
    },
    _id: "649294e04eb6b1e079b5256c",
  },
  {
    timeStamp: 1687327932.104,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 552,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="search">',
    },
    _id: "649294e04eb6b1e079b5256d",
  },
  {
    timeStamp: 1687327932.331,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 552,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5256e",
  },
  {
    timeStamp: 1687327932.93,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 384,
      Y: 583,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5256f",
  },
  {
    timeStamp: 1687327933.144,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 384,
      Y: 583,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52570",
  },
  {
    timeStamp: 1687327934.49,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52571",
  },
  {
    timeStamp: 1687327934.638,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52572",
  },
  {
    timeStamp: 1687327934.639,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52573",
  },
  {
    timeStamp: 1687327934.769,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52574",
  },
  {
    timeStamp: 1687327934.77,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52575",
  },
  {
    timeStamp: 1687327934.905,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52576",
  },
  {
    timeStamp: 1687327934.915,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52577",
  },
  {
    timeStamp: 1687327935.02,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52578",
  },
  {
    timeStamp: 1687327935.022,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52579",
  },
  {
    timeStamp: 1687327935.15,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5257a",
  },
  {
    timeStamp: 1687327935.153,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5257b",
  },
  {
    timeStamp: 1687327935.305,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5257c",
  },
  {
    timeStamp: 1687327935.307,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5257d",
  },
  {
    timeStamp: 1687327935.443,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5257e",
  },
  {
    timeStamp: 1687327935.445,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5257f",
  },
  {
    timeStamp: 1687327935.573,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52580",
  },
  {
    timeStamp: 1687327935.576,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52581",
  },
  {
    timeStamp: 1687327935.722,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52582",
  },
  {
    timeStamp: 1687327935.724,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52583",
  },
  {
    timeStamp: 1687327935.843,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52584",
  },
  {
    timeStamp: 1687327935.844,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52585",
  },
  {
    timeStamp: 1687327936.001,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52586",
  },
  {
    timeStamp: 1687327936.003,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52587",
  },
  {
    timeStamp: 1687327936.158,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52588",
  },
  {
    timeStamp: 1687327936.161,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52589",
  },
  {
    timeStamp: 1687327936.309,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5258a",
  },
  {
    timeStamp: 1687327936.31,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5258b",
  },
  {
    timeStamp: 1687327936.449,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5258c",
  },
  {
    timeStamp: 1687327936.45,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5258d",
  },
  {
    timeStamp: 1687327936.599,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5258e",
  },
  {
    timeStamp: 1687327936.6,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b5258f",
  },
  {
    timeStamp: 1687327936.742,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52590",
  },
  {
    timeStamp: 1687327936.743,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52591",
  },
  {
    timeStamp: 1687327936.879,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52592",
  },
  {
    timeStamp: 1687327936.881,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52593",
  },
  {
    timeStamp: 1687327937.106,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52594",
  },
  {
    timeStamp: 1687327937.322,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52595",
  },
  {
    timeStamp: 1687327937.592,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52596",
  },
  {
    timeStamp: 1687327937.593,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52597",
  },
  {
    timeStamp: 1687327937.807,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 436,
      Y: 582,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52598",
  },
  {
    timeStamp: 1687327938.447,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 434,
      Y: 594,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b52599",
  },
  {
    timeStamp: 1687327938.662,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 434,
      Y: 594,
      scrollX: 0,
      scrollY: 103,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5259a",
  },
  {
    timeStamp: 1687327939.626,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 486,
      Y: 674,
      scrollX: 0,
      scrollY: 230,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 43px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "649294e04eb6b1e079b5259b",
  },
  {
    timeStamp: 1687327939.853,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 486,
      Y: 674,
      scrollX: 0,
      scrollY: 230,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 43px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b5259c",
  },
  {
    timeStamp: 1687327940.646,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 406,
      Y: 726,
      scrollX: 0,
      scrollY: 230,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "649294e04eb6b1e079b5259d",
  },
  {
    timeStamp: 1687327940.867,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "e89avzpg-4f7u-kqwn-lqlx-okozo5qg2jas",
    },
    _id: "649294e04eb6b1e079b5259e",
  },
  {
    timeStamp: 1687327940.868,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 406,
      Y: 726,
      scrollX: 0,
      scrollY: 230,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b5259f",
  },
  {
    timeStamp: 1687327940.978,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "e89avzpg-4f7u-kqwn-lqlx-okozo5qg2jas",
      duration: 110,
    },
    _id: "649294e04eb6b1e079b525a0",
  },
  {
    timeStamp: 1687327941.657,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 406,
      Y: 726,
      scrollX: 0,
      scrollY: 230,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 43px;"></textarea></div>',
    },
    _id: "649294e04eb6b1e079b525a1",
  },
  {
    timeStamp: 1687327943.085,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 389,
      Y: 766,
      scrollX: 0,
      scrollY: 332,
      HTMLElement: "<button>XMLHttpRequest</button>",
    },
    _id: "649294e04eb6b1e079b525a2",
  },
  {
    timeStamp: 1687327943.315,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "8ef72gyt-g3fp-mk5p-5sfe-2ysf58gx94ln",
    },
    _id: "649294e04eb6b1e079b525a3",
  },
  {
    timeStamp: 1687327943.316,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 389,
      Y: 766,
      scrollX: 0,
      scrollY: 332,
      HTMLElement: "<button>XMLHttpRequest</button>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b525a4",
  },
  {
    timeStamp: 1687327943.372,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 56,
      id: "8ef72gyt-g3fp-mk5p-5sfe-2ysf58gx94ln",
    },
    _id: "649294e04eb6b1e079b525a5",
  },
  {
    timeStamp: 1687327944.942,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 337,
      Y: 54,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div>{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}</div></div>',
    },
    _id: "649294e04eb6b1e079b525a6",
  },
  {
    timeStamp: 1687327947.055,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 379,
      Y: 790,
      scrollX: 0,
      scrollY: 332,
      HTMLElement: "<button>Axios</button>",
    },
    _id: "649294e04eb6b1e079b525a7",
  },
  {
    timeStamp: 1687327947.288,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "xmaxv6ab-o5vl-rmec-10qu-dt8apy862e2d",
    },
    _id: "649294e04eb6b1e079b525a8",
  },
  {
    timeStamp: 1687327947.29,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 379,
      Y: 790,
      scrollX: 0,
      scrollY: 332,
      HTMLElement: "<button>Axios</button>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b525a9",
  },
  {
    timeStamp: 1687327947.322,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 34,
      id: "xmaxv6ab-o5vl-rmec-10qu-dt8apy862e2d",
    },
    _id: "649294e04eb6b1e079b525aa",
  },
  {
    timeStamp: 1687327949.235,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 332,
      Y: 56,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div>{"userId":1,"id":1,"title":"delectus aut autem","completed":false}</div></div>',
    },
    _id: "649294e04eb6b1e079b525ab",
  },
  {
    timeStamp: 1687327951.795,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 441,
      Y: 585,
      scrollX: 0,
      scrollY: 332,
      HTMLElement: '<input type="number">',
    },
    _id: "649294e04eb6b1e079b525ac",
  },
  {
    timeStamp: 1687327952.024,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 441,
      Y: 585,
      scrollX: 0,
      scrollY: 332,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649294e04eb6b1e079b525ad",
  },
  {
    timeStamp: 1687327952.641,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 492,
      Y: 673,
      scrollX: 0,
      scrollY: 332,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 43px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "649294e04eb6b1e079b525ae",
  },
  {
    timeStamp: 1687327952.864,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 492,
      Y: 673,
      scrollX: 0,
      scrollY: 332,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 43px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b525af",
  },
  {
    timeStamp: 1687327954.643,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 380,
      Y: 839,
      scrollX: 0,
      scrollY: 332,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
    },
    _id: "649294e04eb6b1e079b525b0",
  },
  {
    timeStamp: 1687327954.871,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 380,
      Y: 839,
      scrollX: 0,
      scrollY: 332,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
    },
    _id: "649294e04eb6b1e079b525b1",
  },
  {
    timeStamp: 1687327954.871,
    name: "USER_EVENT",
    type: "DOWNLOAD",
    data: {
      X: 380,
      Y: 839,
      scrollX: 0,
      scrollY: 332,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b525b2",
  },
  {
    timeStamp: 1687327954.875,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 77.803 },
    _id: "649294e04eb6b1e079b525b3",
  },
  {
    timeStamp: 1687327955.657,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 380,
      Y: 839,
      scrollX: 0,
      scrollY: 332,
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "649294e04eb6b1e079b525b4",
  },
  {
    timeStamp: 1687327957.118,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 409, Y: 238, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525b5",
  },
  {
    timeStamp: 1687327957.337,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 238,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649294e04eb6b1e079b525b6",
  },
  {
    timeStamp: 1687327957.667,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "w", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525b7",
  },
  {
    timeStamp: 1687327957.808,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "o", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525b8",
  },
  {
    timeStamp: 1687327957.81,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "w", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525b9",
  },
  {
    timeStamp: 1687327957.879,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "o", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ba",
  },
  {
    timeStamp: 1687327957.944,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "r", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525bb",
  },
  {
    timeStamp: 1687327958,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "k", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525bc",
  },
  {
    timeStamp: 1687327958.045,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "r", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525bd",
  },
  {
    timeStamp: 1687327958.093,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "k", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525be",
  },
  {
    timeStamp: 1687327958.14,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525bf",
  },
  {
    timeStamp: 1687327958.242,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c0",
  },
  {
    timeStamp: 1687327958.305,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c1",
  },
  {
    timeStamp: 1687327958.357,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c2",
  },
  {
    timeStamp: 1687327958.358,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c3",
  },
  {
    timeStamp: 1687327958.456,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c4",
  },
  {
    timeStamp: 1687327958.46,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c5",
  },
  {
    timeStamp: 1687327958.593,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c6",
  },
  {
    timeStamp: 1687327958.648,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c7",
  },
  {
    timeStamp: 1687327958.718,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c8",
  },
  {
    timeStamp: 1687327958.804,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525c9",
  },
  {
    timeStamp: 1687327958.841,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ca",
  },
  {
    timeStamp: 1687327958.993,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525cb",
  },
  {
    timeStamp: 1687327959.07,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525cc",
  },
  {
    timeStamp: 1687327959.109,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525cd",
  },
  {
    timeStamp: 1687327959.141,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ce",
  },
  {
    timeStamp: 1687327959.174,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525cf",
  },
  {
    timeStamp: 1687327959.174,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d0",
  },
  {
    timeStamp: 1687327959.783,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d1",
  },
  {
    timeStamp: 1687327960.103,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "T", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d2",
  },
  {
    timeStamp: 1687327960.221,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "T", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d3",
  },
  {
    timeStamp: 1687327960.249,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d4",
  },
  {
    timeStamp: 1687327960.417,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d5",
  },
  {
    timeStamp: 1687327960.511,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d6",
  },
  {
    timeStamp: 1687327960.679,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d7",
  },
  {
    timeStamp: 1687327960.772,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d8",
  },
  {
    timeStamp: 1687327960.828,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525d9",
  },
  {
    timeStamp: 1687327960.899,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525da",
  },
  {
    timeStamp: 1687327960.9,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "t", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525db",
  },
  {
    timeStamp: 1687327961.025,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525dc",
  },
  {
    timeStamp: 1687327961.094,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525dd",
  },
  {
    timeStamp: 1687327961.14,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525de",
  },
  {
    timeStamp: 1687327961.532,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "u", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525df",
  },
  {
    timeStamp: 1687327961.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "u", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e0",
  },
  {
    timeStamp: 1687327961.866,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "c", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e1",
  },
  {
    timeStamp: 1687327961.963,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "c", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e2",
  },
  {
    timeStamp: 1687327962.095,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "c", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e3",
  },
  {
    timeStamp: 1687327962.182,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "c", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e4",
  },
  {
    timeStamp: 1687327962.553,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e5",
  },
  {
    timeStamp: 1687327962.615,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "e", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e6",
  },
  {
    timeStamp: 1687327962.778,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e7",
  },
  {
    timeStamp: 1687327962.831,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e8",
  },
  {
    timeStamp: 1687327962.938,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525e9",
  },
  {
    timeStamp: 1687327963.04,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "s", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ea",
  },
  {
    timeStamp: 1687327963.131,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "f", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525eb",
  },
  {
    timeStamp: 1687327963.225,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "f", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ec",
  },
  {
    timeStamp: 1687327963.262,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "u", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ed",
  },
  {
    timeStamp: 1687327963.348,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "u", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ee",
  },
  {
    timeStamp: 1687327963.469,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "l", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ef",
  },
  {
    timeStamp: 1687327963.547,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "l", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f0",
  },
  {
    timeStamp: 1687327963.669,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f1",
  },
  {
    timeStamp: 1687327963.753,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f2",
  },
  {
    timeStamp: 1687327963.788,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f3",
  },
  {
    timeStamp: 1687327964.155,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f4",
  },
  {
    timeStamp: 1687327964.201,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f5",
  },
  {
    timeStamp: 1687327964.295,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f6",
  },
  {
    timeStamp: 1687327964.349,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f7",
  },
  {
    timeStamp: 1687327964.428,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f8",
  },
  {
    timeStamp: 1687327964.49,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525f9",
  },
  {
    timeStamp: 1687327964.567,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525fa",
  },
  {
    timeStamp: 1687327964.638,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525fb",
  },
  {
    timeStamp: 1687327964.699,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525fc",
  },
  {
    timeStamp: 1687327964.767,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525fd",
  },
  {
    timeStamp: 1687327964.85,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525fe",
  },
  {
    timeStamp: 1687327965.051,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b525ff",
  },
  {
    timeStamp: 1687327965.114,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52600",
  },
  {
    timeStamp: 1687327965.207,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52601",
  },
  {
    timeStamp: 1687327965.234,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 409, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52602",
  },
  {
    timeStamp: 1687327965.237,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52603",
  },
  {
    timeStamp: 1687327965.272,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 409, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "649294e04eb6b1e079b52604",
  },
  {
    timeStamp: 1687327966.013,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 509,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
    },
    _id: "649294e04eb6b1e079b52605",
  },
  {
    timeStamp: 1687327966.242,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 509,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="dateTimeContainer"><input type="date"><input type="time"></div>',
      button: 0,
    },
    _id: "649294e04eb6b1e079b52606",
  },
  {
    timeStamp: 1687327967.746,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 585,
      Y: 2,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<html lang="en"><head>\n    <script type="module">\n      // import UITracker from "./UITracker.js";\n      // const uiTracker = new UITracker();\n      // uiTracker.config({\n      //   // Send data every 10s, do not report immediately on error\n      //   dataTransmissionInterval: 10000,\n      //   reportOnError: false,\n      //   sessionId: `abc_user/${123}`,\n      // });\n\n      // uiTracker.start();\n    </script>\n    <meta charset="utf-8">\n    <link rel="icon" href="/favicon.ico">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="theme-color" content="#000000">\n    <meta name="description" content="Web site created using create-react-app">\n    <link rel="apple-touch-icon" href="/logo192.png">\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="/manifest.json">\n    <!--\n      Notice the use of  in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  <script defer="" src="/static/js/bundle.js"></script><style>\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */</style><style>body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  min-height: 4em;\n  border: 1px solid black;\n}\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4em;\n}\n\np {\n  margin: 0.6em;\n}\n\n.field {\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 0.4em;\n  min-width: 10em;\n  position: relative;\n  top: -6em;\n}\n\n.checkboxContainer {\n  border: 1px solid black;\n  margin: 0.2em;\n  width: 12em;\n  padding: 0.2em;\n}\n\nselect,\n.datalist {\n  margin: 0.75em;\n}\n\n.buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  width: 10em;\n  margin: 0.6em auto;\n  border: 1px solid black;\n  position: relative;\n  top: -6em;\n}\n\n.scrollXContainer {\n  display: flex;\n  overflow-x: auto;\n  border: 1px solid black;\n}\n\n.dateTimeContainer {\n  margin: 0.75em;\n}\n\nbutton {\n  margin: 0.2em;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMC42ZW07XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC40ZW07XG4gIG1pbi13aWR0aDogMTBlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02ZW07XG59XG5cbi5jaGVja2JveENvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDAuMmVtO1xuICB3aWR0aDogMTJlbTtcbiAgcGFkZGluZzogMC4yZW07XG59XG5cbnNlbGVjdCxcbi5kYXRhbGlzdCB7XG4gIG1hcmdpbjogMC43NWVtO1xufVxuXG4uYnV0dG9uc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuNmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZlbTtcbn1cblxuLnNjcm9sbFhDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmRhdGVUaW1lQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjc1ZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */</style></head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"><div class="App"><div class="header"><div>{"userId":1,"id":1,"title":"delectus aut autem","completed":false}</div></div><div>Session ID : abc_user/k4dlh937-h9qm-baep-1j47-vv2vicxyeevs</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 43px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  \n\n</body></html>',
    },
    _id: "649294e04eb6b1e079b52607",
  },
  {
    timeStamp: 1687327968.362,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 91.291 },
    _id: "649294e04eb6b1e079b52608",
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
    "http://localhost:3001/?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 745,
    height: 645,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3001/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const pre = document.createElement("pre");
    pre.id = "id-abc_user/k4dlh937-h9qm-baep-1j47-vv2vicxyeevs";
    pre.style.position = "fixed";
    pre.style.backgroundColor = "black";
    pre.style.borderRadius = "0.4em";
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
          "id-abc_user/k4dlh937-h9qm-baep-1j47-vv2vicxyeevs"
        );
        pre.textContent =
          "Session : abc_user/k4dlh937-h9qm-baep-1j47-vv2vicxyeevs \n" +
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

                  // document.elementFromPoint(X - scrollX, Y - scrollY).checked =
                  //   checked;

                  document.document
                    .elementFromPoint(X - scrollX, Y - scrollY)
                    .dispatchEvent(new Event("change"));
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
