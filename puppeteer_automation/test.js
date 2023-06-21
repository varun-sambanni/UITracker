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
    timeStamp: 1687328518.617,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.4291000000014901 },
    _id: "649297444eb6b1e079b53bec",
  },
  {
    timeStamp: 1687328519.314,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 361, Y: 223, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bed",
  },
  {
    timeStamp: 1687328519.528,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 361,
      Y: 223,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53bee",
  },
  {
    timeStamp: 1687328519.577,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bef",
  },
  {
    timeStamp: 1687328519.66,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf0",
  },
  {
    timeStamp: 1687328519.738,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf1",
  },
  {
    timeStamp: 1687328519.832,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf2",
  },
  {
    timeStamp: 1687328519.93,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "g", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf3",
  },
  {
    timeStamp: 1687328520.007,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf4",
  },
  {
    timeStamp: 1687328520.062,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "g", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf5",
  },
  {
    timeStamp: 1687328520.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: " ", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf6",
  },
  {
    timeStamp: 1687328520.123,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf7",
  },
  {
    timeStamp: 1687328520.209,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "t", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf8",
  },
  {
    timeStamp: 1687328520.242,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: " ", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bf9",
  },
  {
    timeStamp: 1687328520.285,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bfa",
  },
  {
    timeStamp: 1687328520.332,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "t", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bfb",
  },
  {
    timeStamp: 1687328520.37,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bfc",
  },
  {
    timeStamp: 1687328520.495,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "s", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bfd",
  },
  {
    timeStamp: 1687328520.537,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "t", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bfe",
  },
  {
    timeStamp: 1687328520.58,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "s", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53bff",
  },
  {
    timeStamp: 1687328520.597,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "i", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c00",
  },
  {
    timeStamp: 1687328520.641,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "n", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c01",
  },
  {
    timeStamp: 1687328520.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "t", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c02",
  },
  {
    timeStamp: 1687328520.682,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "i", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c03",
  },
  {
    timeStamp: 1687328520.733,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "n", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c04",
  },
  {
    timeStamp: 1687328520.733,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "g", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c05",
  },
  {
    timeStamp: 1687328520.812,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: " ", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c06",
  },
  {
    timeStamp: 1687328520.833,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "g", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c07",
  },
  {
    timeStamp: 1687328520.947,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: " ", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c08",
  },
  {
    timeStamp: 1687328520.972,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "2", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c09",
  },
  {
    timeStamp: 1687328521.082,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "2", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c0a",
  },
  {
    timeStamp: 1687328521.175,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: ".", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c0b",
  },
  {
    timeStamp: 1687328521.331,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: ".", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c0c",
  },
  {
    timeStamp: 1687328521.467,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "0", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c0d",
  },
  {
    timeStamp: 1687328521.546,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "0", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c0e",
  },
  {
    timeStamp: 1687328521.64,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "Control", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c0f",
  },
  {
    timeStamp: 1687328521.719,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c10",
  },
  {
    timeStamp: 1687328521.802,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "Control", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c11",
  },
  {
    timeStamp: 1687328521.835,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 361, Y: 223, key: "Backspace", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c12",
  },
  {
    timeStamp: 1687328521.836,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c13",
  },
  {
    timeStamp: 1687328521.889,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 361, Y: 223, key: "Backspace", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c14",
  },
  {
    timeStamp: 1687328523.031,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 71,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "649297444eb6b1e079b53c15",
  },
  {
    timeStamp: 1687328523.246,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 71,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53c16",
  },
  {
    timeStamp: 1687328524.136,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 68,
      Y: 139,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      value: "Option 3",
    },
    _id: "649297444eb6b1e079b53c17",
  },
  {
    timeStamp: 1687328524.137,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 18,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "649297444eb6b1e079b53c18",
  },
  {
    timeStamp: 1687328525.04,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 170,
      Y: 118,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "649297444eb6b1e079b53c19",
  },
  {
    timeStamp: 1687328525.331,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 301,
      Y: 112,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "649297444eb6b1e079b53c1a",
  },
  {
    timeStamp: 1687328526.485,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 120,
      Y: 170,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "649297444eb6b1e079b53c1b",
  },
  {
    timeStamp: 1687328526.708,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 120,
      Y: 170,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c1c",
  },
  {
    timeStamp: 1687328527.916,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 120,
      Y: 183,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "649297444eb6b1e079b53c1d",
  },
  {
    timeStamp: 1687328527.965,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 120,
      Y: 183,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      value: "2023-06-05",
    },
    _id: "649297444eb6b1e079b53c1e",
  },
  {
    timeStamp: 1687328528.496,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 230,
      Y: 197,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "649297444eb6b1e079b53c1f",
  },
  {
    timeStamp: 1687328528.708,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 230,
      Y: 197,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c20",
  },
  {
    timeStamp: 1687328529.821,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 194,
      Y: 170,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "649297444eb6b1e079b53c21",
  },
  {
    timeStamp: 1687328530.036,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 194,
      Y: 170,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c22",
  },
  {
    timeStamp: 1687328531.388,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 193,
      Y: 181,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "649297444eb6b1e079b53c23",
  },
  {
    timeStamp: 1687328531.632,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 243,
      Y: 134,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "649297444eb6b1e079b53c24",
  },
  {
    timeStamp: 1687328531.633,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 243,
      Y: 134,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      value: "12:52",
    },
    _id: "649297444eb6b1e079b53c25",
  },
  {
    timeStamp: 1687328531.844,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 243,
      Y: 134,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c26",
  },
  {
    timeStamp: 1687328532.568,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 97,
      Y: 214,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
    },
    _id: "649297444eb6b1e079b53c27",
  },
  {
    timeStamp: 1687328532.784,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 97,
      Y: 214,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c28",
  },
  {
    timeStamp: 1687328532.785,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 97,
      Y: 214,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
      checked: true,
    },
    _id: "649297444eb6b1e079b53c29",
  },
  {
    timeStamp: 1687328533.504,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 96,
      Y: 246,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio1" type="radio" name="radio">',
    },
    _id: "649297444eb6b1e079b53c2a",
  },
  {
    timeStamp: 1687328533.718,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 96,
      Y: 246,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio1" type="radio" name="radio">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c2b",
  },
  {
    timeStamp: 1687328533.718,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 96,
      Y: 246,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio1" type="radio" name="radio">',
      checked: true,
    },
    _id: "649297444eb6b1e079b53c2c",
  },
  {
    timeStamp: 1687328534.56,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 173,
      Y: 212,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "649297444eb6b1e079b53c2d",
  },
  {
    timeStamp: 1687328534.79,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 173,
      Y: 212,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c2e",
  },
  {
    timeStamp: 1687328534.79,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 173,
      Y: 212,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: true,
    },
    _id: "649297444eb6b1e079b53c2f",
  },
  {
    timeStamp: 1687328535.461,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 175,
      Y: 252,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
    },
    _id: "649297444eb6b1e079b53c30",
  },
  {
    timeStamp: 1687328535.689,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 175,
      Y: 252,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c31",
  },
  {
    timeStamp: 1687328535.689,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 175,
      Y: 252,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      checked: true,
    },
    _id: "649297444eb6b1e079b53c32",
  },
  {
    timeStamp: 1687328536.189,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 336, Y: 226, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c33",
  },
  {
    timeStamp: 1687328536.414,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 336,
      Y: 226,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53c34",
  },
  {
    timeStamp: 1687328536.439,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "w", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c35",
  },
  {
    timeStamp: 1687328536.571,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "o", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c36",
  },
  {
    timeStamp: 1687328536.572,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "w", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c37",
  },
  {
    timeStamp: 1687328536.626,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "o", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c38",
  },
  {
    timeStamp: 1687328536.671,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "r", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c39",
  },
  {
    timeStamp: 1687328536.755,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "k", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c3a",
  },
  {
    timeStamp: 1687328536.757,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "r", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c3b",
  },
  {
    timeStamp: 1687328536.811,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "k", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c3c",
  },
  {
    timeStamp: 1687328536.835,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c3d",
  },
  {
    timeStamp: 1687328536.906,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c3e",
  },
  {
    timeStamp: 1687328536.973,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "e", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c3f",
  },
  {
    timeStamp: 1687328537.048,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: " ", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c40",
  },
  {
    timeStamp: 1687328537.05,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c41",
  },
  {
    timeStamp: 1687328537.154,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "Shift", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c42",
  },
  {
    timeStamp: 1687328537.182,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: " ", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c43",
  },
  {
    timeStamp: 1687328537.289,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "?", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c44",
  },
  {
    timeStamp: 1687328537.327,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "?", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c45",
  },
  {
    timeStamp: 1687328537.413,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "?", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c46",
  },
  {
    timeStamp: 1687328537.469,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "Shift", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c47",
  },
  {
    timeStamp: 1687328537.469,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "/", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c48",
  },
  {
    timeStamp: 1687328537.58,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "Control", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c49",
  },
  {
    timeStamp: 1687328537.668,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c4a",
  },
  {
    timeStamp: 1687328537.75,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "Control", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c4b",
  },
  {
    timeStamp: 1687328537.751,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 336, Y: 226, key: "Backspace", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c4c",
  },
  {
    timeStamp: 1687328537.778,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "Backspace", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c4d",
  },
  {
    timeStamp: 1687328537.778,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 336, Y: 226, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c4e",
  },
  {
    timeStamp: 1687328538.75,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 356,
      Y: 301,
      scrollX: 0,
      scrollY: 58,
      HTMLElement: '<input type="password">',
    },
    _id: "649297444eb6b1e079b53c4f",
  },
  {
    timeStamp: 1687328538.87,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c50",
  },
  {
    timeStamp: 1687328538.917,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "s", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c51",
  },
  {
    timeStamp: 1687328538.956,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "d", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c52",
  },
  {
    timeStamp: 1687328538.98,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 356,
      Y: 301,
      scrollX: 0,
      scrollY: 58,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53c53",
  },
  {
    timeStamp: 1687328539.01,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "s", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c54",
  },
  {
    timeStamp: 1687328539.01,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c55",
  },
  {
    timeStamp: 1687328539.078,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "d", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c56",
  },
  {
    timeStamp: 1687328539.111,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "k", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c57",
  },
  {
    timeStamp: 1687328539.112,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c58",
  },
  {
    timeStamp: 1687328539.171,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "s", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c59",
  },
  {
    timeStamp: 1687328539.193,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c5a",
  },
  {
    timeStamp: 1687328539.216,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "d", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c5b",
  },
  {
    timeStamp: 1687328539.217,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "s", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c5c",
  },
  {
    timeStamp: 1687328539.248,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "k", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c5d",
  },
  {
    timeStamp: 1687328539.291,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "d", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c5e",
  },
  {
    timeStamp: 1687328539.292,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c5f",
  },
  {
    timeStamp: 1687328539.306,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "s", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c60",
  },
  {
    timeStamp: 1687328539.421,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "k", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c61",
  },
  {
    timeStamp: 1687328539.423,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "j", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c62",
  },
  {
    timeStamp: 1687328539.424,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "d", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c63",
  },
  {
    timeStamp: 1687328539.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "s", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c64",
  },
  {
    timeStamp: 1687328539.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c65",
  },
  {
    timeStamp: 1687328539.436,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "k", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c66",
  },
  {
    timeStamp: 1687328539.489,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "d", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c67",
  },
  {
    timeStamp: 1687328539.513,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "j", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c68",
  },
  {
    timeStamp: 1687328539.655,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 356,
      Y: 301,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "649297444eb6b1e079b53c69",
  },
  {
    timeStamp: 1687328539.794,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c6a",
  },
  {
    timeStamp: 1687328539.87,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 356,
      Y: 301,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "649297444eb6b1e079b53c6b",
  },
  {
    timeStamp: 1687328539.902,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 356,
      Y: 301,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "649297444eb6b1e079b53c6c",
  },
  {
    timeStamp: 1687328539.903,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 356, Y: 301, key: "a", HTMLElement: '<input type="password">' },
    _id: "649297444eb6b1e079b53c6d",
  },
  {
    timeStamp: 1687328539.96,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 356,
      Y: 301,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "649297444eb6b1e079b53c6e",
  },
  {
    timeStamp: 1687328540.745,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 352, Y: 374, scrollX: 0, scrollY: 58, HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c6f",
  },
  {
    timeStamp: 1687328540.972,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 352,
      Y: 374,
      scrollX: 0,
      scrollY: 58,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53c70",
  },
  {
    timeStamp: 1687328541.037,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c71",
  },
  {
    timeStamp: 1687328541.106,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "s", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c72",
  },
  {
    timeStamp: 1687328541.138,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c73",
  },
  {
    timeStamp: 1687328541.159,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c74",
  },
  {
    timeStamp: 1687328541.175,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "s", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c75",
  },
  {
    timeStamp: 1687328541.267,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c76",
  },
  {
    timeStamp: 1687328541.268,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c77",
  },
  {
    timeStamp: 1687328541.308,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "k", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c78",
  },
  {
    timeStamp: 1687328541.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "j", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c79",
  },
  {
    timeStamp: 1687328541.375,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c7a",
  },
  {
    timeStamp: 1687328541.376,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c7b",
  },
  {
    timeStamp: 1687328541.415,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "k", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c7c",
  },
  {
    timeStamp: 1687328541.444,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c7d",
  },
  {
    timeStamp: 1687328541.468,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c7e",
  },
  {
    timeStamp: 1687328541.537,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c7f",
  },
  {
    timeStamp: 1687328541.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c80",
  },
  {
    timeStamp: 1687328541.623,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "j", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c81",
  },
  {
    timeStamp: 1687328541.654,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "d", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c82",
  },
  {
    timeStamp: 1687328541.782,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "Control", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c83",
  },
  {
    timeStamp: 1687328541.846,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c84",
  },
  {
    timeStamp: 1687328541.883,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 374, key: "Backspace", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c85",
  },
  {
    timeStamp: 1687328541.917,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "Control", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c86",
  },
  {
    timeStamp: 1687328541.964,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "Backspace", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c87",
  },
  {
    timeStamp: 1687328541.965,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 374, key: "a", HTMLElement: "<input>" },
    _id: "649297444eb6b1e079b53c88",
  },
  {
    timeStamp: 1687328542.979,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 392,
      Y: 455,
      scrollX: 0,
      scrollY: 148,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649297444eb6b1e079b53c89",
  },
  {
    timeStamp: 1687328543.207,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 392,
      Y: 455,
      scrollX: 0,
      scrollY: 148,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53c8a",
  },
  {
    timeStamp: 1687328543.305,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 392,
      Y: 455,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649297444eb6b1e079b53c8b",
  },
  {
    timeStamp: 1687328543.422,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "W", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c8c",
  },
  {
    timeStamp: 1687328543.524,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 392,
      Y: 455,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649297444eb6b1e079b53c8d",
  },
  {
    timeStamp: 1687328543.539,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "w", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c8e",
  },
  {
    timeStamp: 1687328543.574,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "o", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c8f",
  },
  {
    timeStamp: 1687328543.674,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "o", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c90",
  },
  {
    timeStamp: 1687328543.695,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c91",
  },
  {
    timeStamp: 1687328543.783,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "k", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c92",
  },
  {
    timeStamp: 1687328543.784,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c93",
  },
  {
    timeStamp: 1687328543.852,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "k", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c94",
  },
  {
    timeStamp: 1687328543.949,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c95",
  },
  {
    timeStamp: 1687328543.995,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c96",
  },
  {
    timeStamp: 1687328544.05,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c97",
  },
  {
    timeStamp: 1687328544.051,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c98",
  },
  {
    timeStamp: 1687328544.079,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c99",
  },
  {
    timeStamp: 1687328544.155,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c9a",
  },
  {
    timeStamp: 1687328544.157,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c9b",
  },
  {
    timeStamp: 1687328544.2,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 392,
      Y: 455,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649297444eb6b1e079b53c9c",
  },
  {
    timeStamp: 1687328544.236,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c9d",
  },
  {
    timeStamp: 1687328544.47,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c9e",
  },
  {
    timeStamp: 1687328544.524,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53c9f",
  },
  {
    timeStamp: 1687328544.594,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 392, Y: 455, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53ca0",
  },
  {
    timeStamp: 1687328544.64,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 392, Y: 455, key: "?", HTMLElement: "<textarea></textarea>" },
    _id: "649297444eb6b1e079b53ca1",
  },
  {
    timeStamp: 1687328544.737,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 392,
      Y: 455,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649297444eb6b1e079b53ca2",
  },
  {
    timeStamp: 1687328545.847,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 440,
      Y: 472,
      scrollX: 0,
      scrollY: 148,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "649297444eb6b1e079b53ca3",
  },
  {
    timeStamp: 1687328546.212,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 455, Y: 851, scrollX: 0, scrollY: 148, HTMLElement: null },
    _id: "649297444eb6b1e079b53ca4",
  },
  {
    timeStamp: 1687328547.944,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 402,
      Y: 614,
      scrollX: 0,
      scrollY: 338,
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53ca5",
  },
  {
    timeStamp: 1687328547.992,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 402,
      Y: 614,
      key: "Control",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53ca6",
  },
  {
    timeStamp: 1687328548.087,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 402,
      Y: 614,
      key: "s",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53ca7",
  },
  {
    timeStamp: 1687328548.179,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 402,
      Y: 614,
      key: "s",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53ca8",
  },
  {
    timeStamp: 1687328548.24,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 402,
      Y: 614,
      key: "Control",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53ca9",
  },
  {
    timeStamp: 1687328548.298,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 402,
      Y: 614,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53caa",
  },
  {
    timeStamp: 1687328548.379,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 402,
      Y: 614,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cab",
  },
  {
    timeStamp: 1687328549.386,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 402,
      Y: 614,
      scrollX: 0,
      scrollY: 338,
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cac",
  },
  {
    timeStamp: 1687328550.266,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 416,
      Y: 525,
      scrollX: 0,
      scrollY: 338,
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cad",
  },
  {
    timeStamp: 1687328550.481,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 416,
      Y: 525,
      scrollX: 0,
      scrollY: 338,
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cae",
  },
  {
    timeStamp: 1687328550.559,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 416,
      Y: 525,
      key: "Control",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53caf",
  },
  {
    timeStamp: 1687328550.953,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 416,
      Y: 525,
      key: "a",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cb0",
  },
  {
    timeStamp: 1687328551.047,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 416,
      Y: 525,
      key: "a",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cb1",
  },
  {
    timeStamp: 1687328551.128,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 416,
      Y: 525,
      key: "Control",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cb2",
  },
  {
    timeStamp: 1687328551.128,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 416,
      Y: 525,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cb3",
  },
  {
    timeStamp: 1687328551.182,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 416,
      Y: 525,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cb4",
  },
  {
    timeStamp: 1687328552.771,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 848,
      scrollX: 0,
      scrollY: 338,
      HTMLElement: '<textarea style="height: 410px;"></textarea>',
    },
    _id: "649297444eb6b1e079b53cb5",
  },
  {
    timeStamp: 1687328553.738,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 460,
      Y: 390,
      scrollX: 0,
      scrollY: 300,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 11px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "649297444eb6b1e079b53cb6",
  },
  {
    timeStamp: 1687328554.707,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 387,
      Y: 523,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="search">',
    },
    _id: "649297444eb6b1e079b53cb7",
  },
  {
    timeStamp: 1687328554.924,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 387,
      Y: 523,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cb8",
  },
  {
    timeStamp: 1687328555.567,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 523, key: "g", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cb9",
  },
  {
    timeStamp: 1687328555.664,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 523, key: "o", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cba",
  },
  {
    timeStamp: 1687328555.665,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 523, key: "g", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cbb",
  },
  {
    timeStamp: 1687328555.703,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 523, key: "o", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cbc",
  },
  {
    timeStamp: 1687328555.773,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 523, key: "o", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cbd",
  },
  {
    timeStamp: 1687328555.833,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 523, key: "o", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cbe",
  },
  {
    timeStamp: 1687328555.834,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 523, key: "d", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cbf",
  },
  {
    timeStamp: 1687328555.928,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 523, key: " ", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cc0",
  },
  {
    timeStamp: 1687328555.948,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 523, key: "d", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cc1",
  },
  {
    timeStamp: 1687328556,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 387,
      Y: 523,
      key: "Shift",
      HTMLElement: '<input type="search">',
    },
    _id: "649297444eb6b1e079b53cc2",
  },
  {
    timeStamp: 1687328556.019,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 523, key: " ", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cc3",
  },
  {
    timeStamp: 1687328556.058,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 523, key: "?", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cc4",
  },
  {
    timeStamp: 1687328556.135,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 523, key: "?", HTMLElement: '<input type="search">' },
    _id: "649297444eb6b1e079b53cc5",
  },
  {
    timeStamp: 1687328556.219,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 387,
      Y: 523,
      key: "Shift",
      HTMLElement: '<input type="search">',
    },
    _id: "649297444eb6b1e079b53cc6",
  },
  {
    timeStamp: 1687328557.368,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 437,
      Y: 522,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="search">',
    },
    _id: "649297444eb6b1e079b53cc7",
  },
  {
    timeStamp: 1687328557.592,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 437,
      Y: 522,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cc8",
  },
  {
    timeStamp: 1687328558.166,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 395,
      Y: 570,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<div class="field"><input type="number"></div>',
    },
    _id: "649297444eb6b1e079b53cc9",
  },
  {
    timeStamp: 1687328558.969,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cca",
  },
  {
    timeStamp: 1687328559.137,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 436,
      Y: 548,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ccb",
  },
  {
    timeStamp: 1687328559.262,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ccc",
  },
  {
    timeStamp: 1687328559.267,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ccd",
  },
  {
    timeStamp: 1687328559.391,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cce",
  },
  {
    timeStamp: 1687328559.394,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ccf",
  },
  {
    timeStamp: 1687328559.534,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cd0",
  },
  {
    timeStamp: 1687328559.537,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cd1",
  },
  {
    timeStamp: 1687328559.663,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cd2",
  },
  {
    timeStamp: 1687328559.666,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cd3",
  },
  {
    timeStamp: 1687328559.813,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cd4",
  },
  {
    timeStamp: 1687328559.82,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cd5",
  },
  {
    timeStamp: 1687328559.935,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cd6",
  },
  {
    timeStamp: 1687328559.936,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cd7",
  },
  {
    timeStamp: 1687328560.106,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cd8",
  },
  {
    timeStamp: 1687328560.108,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cd9",
  },
  {
    timeStamp: 1687328560.24,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cda",
  },
  {
    timeStamp: 1687328560.243,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cdb",
  },
  {
    timeStamp: 1687328560.387,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cdc",
  },
  {
    timeStamp: 1687328560.389,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cdd",
  },
  {
    timeStamp: 1687328560.529,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cde",
  },
  {
    timeStamp: 1687328560.532,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cdf",
  },
  {
    timeStamp: 1687328560.679,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53ce0",
  },
  {
    timeStamp: 1687328560.679,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ce1",
  },
  {
    timeStamp: 1687328560.837,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53ce2",
  },
  {
    timeStamp: 1687328560.84,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ce3",
  },
  {
    timeStamp: 1687328560.993,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53ce4",
  },
  {
    timeStamp: 1687328560.995,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ce5",
  },
  {
    timeStamp: 1687328561.162,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53ce6",
  },
  {
    timeStamp: 1687328561.165,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ce7",
  },
  {
    timeStamp: 1687328561.327,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53ce8",
  },
  {
    timeStamp: 1687328561.329,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ce9",
  },
  {
    timeStamp: 1687328561.469,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cea",
  },
  {
    timeStamp: 1687328561.47,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ceb",
  },
  {
    timeStamp: 1687328561.619,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cec",
  },
  {
    timeStamp: 1687328561.621,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53ced",
  },
  {
    timeStamp: 1687328561.775,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cee",
  },
  {
    timeStamp: 1687328561.776,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cef",
  },
  {
    timeStamp: 1687328561.994,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cf0",
  },
  {
    timeStamp: 1687328562.156,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cf1",
  },
  {
    timeStamp: 1687328562.414,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cf2",
  },
  {
    timeStamp: 1687328562.414,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cf3",
  },
  {
    timeStamp: 1687328562.639,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "649297444eb6b1e079b53cf4",
  },
  {
    timeStamp: 1687328563.441,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 438,
      Y: 549,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: '<input type="number">',
    },
    _id: "649297444eb6b1e079b53cf5",
  },
  {
    timeStamp: 1687328565.536,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 369,
      Y: 713,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "649297444eb6b1e079b53cf6",
  },
  {
    timeStamp: 1687328565.767,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "opxc7bl4-7jv5-4exc-jrwf-bcfmr6s212es",
    },
    _id: "649297444eb6b1e079b53cf7",
  },
  {
    timeStamp: 1687328565.769,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 369,
      Y: 713,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53cf8",
  },
  {
    timeStamp: 1687328565.941,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "opxc7bl4-7jv5-4exc-jrwf-bcfmr6s212es",
      duration: 174,
    },
    _id: "649297444eb6b1e079b53cf9",
  },
  {
    timeStamp: 1687328566.537,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 369,
      Y: 713,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<p>Field 2 : </p>",
    },
    _id: "649297444eb6b1e079b53cfa",
  },
  {
    timeStamp: 1687328567.905,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 395,
      Y: 729,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>XMLHttpRequest</button>",
    },
    _id: "649297444eb6b1e079b53cfb",
  },
  {
    timeStamp: 1687328568.135,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "24ia1xnr-cq70-6hfp-gh81-3idhfdhiya0u",
    },
    _id: "649297444eb6b1e079b53cfc",
  },
  {
    timeStamp: 1687328568.135,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 395,
      Y: 729,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>XMLHttpRequest</button>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53cfd",
  },
  {
    timeStamp: 1687328568.173,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 38,
      id: "24ia1xnr-cq70-6hfp-gh81-3idhfdhiya0u",
    },
    _id: "649297444eb6b1e079b53cfe",
  },
  {
    timeStamp: 1687328569.701,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 292,
      Y: 5,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<html lang="en"><head>\n    <script type="module">\n      // import UITracker from "./UITracker.js";\n      // const uiTracker = new UITracker();\n      // uiTracker.config({\n      //   // Send data every 10s, do not report immediately on error\n      //   dataTransmissionInterval: 10000,\n      //   reportOnError: false,\n      //   sessionId: `abc_user/${123}`,\n      // });\n\n      // uiTracker.start();\n    </script>\n    <meta charset="utf-8">\n    <link rel="icon" href="/favicon.ico">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="theme-color" content="#000000">\n    <meta name="description" content="Web site created using create-react-app">\n    <link rel="apple-touch-icon" href="/logo192.png">\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="/manifest.json">\n    <!--\n      Notice the use of  in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  <script defer="" src="/static/js/bundle.js"></script><style>\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */</style><style>body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  min-height: 4em;\n  border: 1px solid black;\n}\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4em;\n}\n\np {\n  margin: 0.6em;\n}\n\n.field {\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 0.4em;\n  min-width: 10em;\n  position: relative;\n  top: -6em;\n}\n\n.checkboxContainer {\n  border: 1px solid black;\n  margin: 0.2em;\n  width: 12em;\n  padding: 0.2em;\n}\n\nselect,\n.datalist {\n  margin: 0.75em;\n}\n\n.buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  width: 10em;\n  margin: 0.6em auto;\n  border: 1px solid black;\n  position: relative;\n  top: -6em;\n}\n\n.scrollXContainer {\n  display: flex;\n  overflow-x: auto;\n  border: 1px solid black;\n}\n\n.dateTimeContainer {\n  margin: 0.75em;\n}\n\nbutton {\n  margin: 0.2em;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMC42ZW07XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC40ZW07XG4gIG1pbi13aWR0aDogMTBlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02ZW07XG59XG5cbi5jaGVja2JveENvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDAuMmVtO1xuICB3aWR0aDogMTJlbTtcbiAgcGFkZGluZzogMC4yZW07XG59XG5cbnNlbGVjdCxcbi5kYXRhbGlzdCB7XG4gIG1hcmdpbjogMC43NWVtO1xufVxuXG4uYnV0dG9uc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuNmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZlbTtcbn1cblxuLnNjcm9sbFhDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmRhdGVUaW1lQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjc1ZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */</style></head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"><div class="App"><div class="header"><div>{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}</div></div><div>Session ID : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 11px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  \n\n</body></html>',
    },
    _id: "649297444eb6b1e079b53cff",
  },
  {
    timeStamp: 1687328572.319,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 376,
      Y: 754,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>Axios</button>",
    },
    _id: "649297444eb6b1e079b53d00",
  },
  {
    timeStamp: 1687328572.545,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "rxpsc0pm-m7kx-8x0k-1twj-pswwg6xgtnqc",
    },
    _id: "649297444eb6b1e079b53d01",
  },
  {
    timeStamp: 1687328572.546,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 376,
      Y: 754,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>Axios</button>",
      button: 0,
    },
    _id: "649297444eb6b1e079b53d02",
  },
  {
    timeStamp: 1687328572.601,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 56,
      id: "rxpsc0pm-m7kx-8x0k-1twj-pswwg6xgtnqc",
    },
    _id: "649297444eb6b1e079b53d03",
  },
  {
    timeStamp: 1687328574.148,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 334,
      Y: 180,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "649297444eb6b1e079b53d04",
  },
  {
    timeStamp: 1687328577.508,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 374,
      Y: 640,
      scrollX: 0,
      scrollY: 300,
      HTMLElement: "<button>Crash</button>",
    },
    _id: "649297444eb6b1e079b53d05",
  },
  {
    timeStamp: 1687328577.754,
    name: "ERROR",
    type: "RUNTIME_CRASH",
    data: {
      errorMessage: "Uncaught Error: APP CRASHED",
      source: "http://localhost:3001/static/js/bundle.js",
      lineNo: 49,
      colNo: 5,
    },
    _id: "649297444eb6b1e079b53d06",
  },
  {
    timeStamp: 1687328577.755,
    name: "ERROR",
    type: "RUNTIME_CRASH",
    data: {
      errorMessage: "Uncaught Error: APP CRASHED",
      source: "http://localhost:3001/static/js/bundle.js",
      lineNo: 12389,
      colNo: 9,
    },
    _id: "649297444eb6b1e079b53d07",
  },
  {
    timeStamp: 1687328577.756,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 374,
      Y: 640,
      scrollX: 0,
      scrollY: 300,
      HTMLElement:
        '<iframe id="webpack-dev-server-client-overlay" src="about:blank" style="position: fixed; inset: 0px; width: 100vw; height: 100vh; border: none; z-index: 2147483647;"></iframe>',
      button: 0,
    },
    _id: "649297444eb6b1e079b53d08",
  },
  {
    timeStamp: 1687328578.508,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 374,
      Y: 640,
      scrollX: 0,
      scrollY: 300,
      HTMLElement:
        '<iframe id="webpack-dev-server-client-overlay" src="about:blank" style="position: fixed; inset: 0px; width: 100vw; height: 100vh; border: none; z-index: 2147483647;"></iframe>',
    },
    _id: "649297444eb6b1e079b53d09",
  },
  {
    timeStamp: 1687328580.567,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 61.951 },
    _id: "649297444eb6b1e079b53d0a",
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
    pre.id = "id-abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2";
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
          "id-abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2"
        );
        pre.textContent =
          "Session : abc_user/u6n079k6-i68u-xb02-0ijg-5i48kezqaog2 \n" +
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

                  document.elementFromPoint(X - scrollX, Y - scrollY).checked =
                    checked;

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
