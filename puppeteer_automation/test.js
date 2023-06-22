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
    timeStamp: 1687429736.873,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.41170000000298024 },
    _id: "6494228352172c7c1bbb08dc",
  },
  {
    timeStamp: 1687429738.687,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 620,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6494228352172c7c1bbb08dd",
  },
  {
    timeStamp: 1687429738.912,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 620,
      Y: 213,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "6494228352172c7c1bbb08de",
  },
  {
    timeStamp: 1687429739.415,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 612, Y: 228, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08df",
  },
  {
    timeStamp: 1687429739.63,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 612,
      Y: 228,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6494228352172c7c1bbb08e0",
  },
  {
    timeStamp: 1687429740.111,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "v", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e1",
  },
  {
    timeStamp: 1687429740.212,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "v", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e2",
  },
  {
    timeStamp: 1687429740.366,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "a", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e3",
  },
  {
    timeStamp: 1687429740.446,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "r", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e4",
  },
  {
    timeStamp: 1687429740.506,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "a", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e5",
  },
  {
    timeStamp: 1687429740.554,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "r", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e6",
  },
  {
    timeStamp: 1687429740.575,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "u", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e7",
  },
  {
    timeStamp: 1687429740.645,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "n", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e8",
  },
  {
    timeStamp: 1687429740.691,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "u", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08e9",
  },
  {
    timeStamp: 1687429740.73,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "n", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08ea",
  },
  {
    timeStamp: 1687429740.796,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "Control", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08eb",
  },
  {
    timeStamp: 1687429740.899,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "a", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08ec",
  },
  {
    timeStamp: 1687429740.952,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "Control", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08ed",
  },
  {
    timeStamp: 1687429741.008,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "a", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08ee",
  },
  {
    timeStamp: 1687429741.388,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "Delete", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08ef",
  },
  {
    timeStamp: 1687429741.418,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "Delete", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f0",
  },
  {
    timeStamp: 1687429741.744,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "t", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f1",
  },
  {
    timeStamp: 1687429741.822,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "e", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f2",
  },
  {
    timeStamp: 1687429741.884,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "t", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f3",
  },
  {
    timeStamp: 1687429741.914,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "e", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f4",
  },
  {
    timeStamp: 1687429742.04,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "s", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f5",
  },
  {
    timeStamp: 1687429742.115,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "t", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f6",
  },
  {
    timeStamp: 1687429742.164,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "s", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f7",
  },
  {
    timeStamp: 1687429742.212,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "i", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f8",
  },
  {
    timeStamp: 1687429742.213,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "t", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08f9",
  },
  {
    timeStamp: 1687429742.286,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "n", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08fa",
  },
  {
    timeStamp: 1687429742.35,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "i", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08fb",
  },
  {
    timeStamp: 1687429742.35,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "g", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08fc",
  },
  {
    timeStamp: 1687429742.389,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "n", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08fd",
  },
  {
    timeStamp: 1687429742.458,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "g", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08fe",
  },
  {
    timeStamp: 1687429742.624,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "Control", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb08ff",
  },
  {
    timeStamp: 1687429742.736,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "a", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb0900",
  },
  {
    timeStamp: 1687429742.827,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "Control", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb0901",
  },
  {
    timeStamp: 1687429742.898,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "a", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb0902",
  },
  {
    timeStamp: 1687429743.123,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 612, Y: 228, key: "Delete", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb0903",
  },
  {
    timeStamp: 1687429743.185,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 612, Y: 228, key: "Delete", HTMLElement: "<input>" },
    _id: "6494228352172c7c1bbb0904",
  },
  {
    timeStamp: 1687429745.636,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 631,
      Y: 457,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6494228352172c7c1bbb0905",
  },
  {
    timeStamp: 1687429745.761,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0906",
  },
  {
    timeStamp: 1687429745.85,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 631,
      Y: 457,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6494228352172c7c1bbb0907",
  },
  {
    timeStamp: 1687429745.854,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0908",
  },
  {
    timeStamp: 1687429745.932,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0909",
  },
  {
    timeStamp: 1687429746.04,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb090a",
  },
  {
    timeStamp: 1687429746.056,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb090b",
  },
  {
    timeStamp: 1687429746.197,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb090c",
  },
  {
    timeStamp: 1687429746.198,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb090d",
  },
  {
    timeStamp: 1687429746.282,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb090e",
  },
  {
    timeStamp: 1687429746.374,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb090f",
  },
  {
    timeStamp: 1687429746.413,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "e", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0910",
  },
  {
    timeStamp: 1687429746.435,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0911",
  },
  {
    timeStamp: 1687429746.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0912",
  },
  {
    timeStamp: 1687429746.59,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "e", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0913",
  },
  {
    timeStamp: 1687429746.695,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0914",
  },
  {
    timeStamp: 1687429746.879,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 631,
      Y: 457,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6494228352172c7c1bbb0915",
  },
  {
    timeStamp: 1687429746.96,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 631, Y: 457, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0916",
  },
  {
    timeStamp: 1687429747.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 631,
      Y: 457,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6494228352172c7c1bbb0917",
  },
  {
    timeStamp: 1687429747.068,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 631, Y: 457, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6494228352172c7c1bbb0918",
  },
  {
    timeStamp: 1687429747.156,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 631,
      Y: 457,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6494228352172c7c1bbb0919",
  },
  {
    timeStamp: 1687429747.227,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 631,
      Y: 457,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6494228352172c7c1bbb091a",
  },
  {
    timeStamp: 1687429748.559,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 714,
      Y: 463,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6494228352172c7c1bbb091b",
  },
  {
    timeStamp: 1687429748.88,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 725,
      Y: 645,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6494228352172c7c1bbb091c",
  },
  {
    timeStamp: 1687429749.806,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "Shift",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb091d",
  },
  {
    timeStamp: 1687429749.979,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb091e",
  },
  {
    timeStamp: 1687429750.038,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb091f",
  },
  {
    timeStamp: 1687429750.118,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0920",
  },
  {
    timeStamp: 1687429750.172,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "Shift",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0921",
  },
  {
    timeStamp: 1687429750.228,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "/",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0922",
  },
  {
    timeStamp: 1687429750.337,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "Control",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0923",
  },
  {
    timeStamp: 1687429750.43,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "a",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0924",
  },
  {
    timeStamp: 1687429750.467,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "Control",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0925",
  },
  {
    timeStamp: 1687429750.55,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "a",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0926",
  },
  {
    timeStamp: 1687429750.693,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "w",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0927",
  },
  {
    timeStamp: 1687429750.823,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "w",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0928",
  },
  {
    timeStamp: 1687429750.85,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "o",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0929",
  },
  {
    timeStamp: 1687429750.935,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "o",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb092a",
  },
  {
    timeStamp: 1687429750.957,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "r",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb092b",
  },
  {
    timeStamp: 1687429751.049,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "k",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb092c",
  },
  {
    timeStamp: 1687429751.051,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "r",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb092d",
  },
  {
    timeStamp: 1687429751.117,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "k",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb092e",
  },
  {
    timeStamp: 1687429751.117,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "e",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb092f",
  },
  {
    timeStamp: 1687429751.188,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "d",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0930",
  },
  {
    timeStamp: 1687429751.242,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "e",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0931",
  },
  {
    timeStamp: 1687429751.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: " ",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0932",
  },
  {
    timeStamp: 1687429751.332,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "d",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0933",
  },
  {
    timeStamp: 1687429751.442,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "Shift",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0934",
  },
  {
    timeStamp: 1687429751.462,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: " ",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0935",
  },
  {
    timeStamp: 1687429751.54,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0936",
  },
  {
    timeStamp: 1687429751.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0937",
  },
  {
    timeStamp: 1687429751.656,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0938",
  },
  {
    timeStamp: 1687429751.734,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "?",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0939",
  },
  {
    timeStamp: 1687429751.8,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "Shift",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb093a",
  },
  {
    timeStamp: 1687429751.983,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "Control",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb093b",
  },
  {
    timeStamp: 1687429752.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "a",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb093c",
  },
  {
    timeStamp: 1687429752.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "Control",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb093d",
  },
  {
    timeStamp: 1687429752.158,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 629,
      Y: 563,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb093e",
  },
  {
    timeStamp: 1687429752.193,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "a",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb093f",
  },
  {
    timeStamp: 1687429752.251,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 629,
      Y: 563,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 212px;"></textarea>',
    },
    _id: "6494228352172c7c1bbb0940",
  },
  {
    timeStamp: 1687429752.92,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 394,
      Y: 370,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6494228352172c7c1bbb0941",
  },
  {
    timeStamp: 1687429753.146,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 394,
      Y: 370,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6494228352172c7c1bbb0942",
  },
  {
    timeStamp: 1687429754.178,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 124,
      Y: 167,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6494228352172c7c1bbb0943",
  },
  {
    timeStamp: 1687429754.411,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 124,
      Y: 167,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      button: 0,
    },
    _id: "6494228352172c7c1bbb0944",
  },
  {
    timeStamp: 1687429755.576,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 121,
      Y: 178,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      value: "2023-06-06",
    },
    _id: "6494228352172c7c1bbb0945",
  },
  {
    timeStamp: 1687429756.034,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 318,
      Y: 235,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6494228352172c7c1bbb0946",
  },
  {
    timeStamp: 1687429756.26,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 318,
      Y: 235,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6494228352172c7c1bbb0947",
  },
  {
    timeStamp: 1687429756.913,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 194,
      Y: 169,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "6494228352172c7c1bbb0948",
  },
  {
    timeStamp: 1687429757.142,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 194,
      Y: 169,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
      button: 0,
    },
    _id: "6494228352172c7c1bbb0949",
  },
  {
    timeStamp: 1687429758.387,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 189,
      Y: 179,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "6494228352172c7c1bbb094a",
  },
  {
    timeStamp: 1687429759.571,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 322,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/l081ktjj-rhg2-2fy6-ux85-b522qo8ikoae</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "6494228352172c7c1bbb094b",
  },
  {
    timeStamp: 1687429759.571,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 322,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/l081ktjj-rhg2-2fy6-ux85-b522qo8ikoae</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      value: "17:02",
    },
    _id: "6494228352172c7c1bbb094c",
  },
  {
    timeStamp: 1687429759.795,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 322,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/l081ktjj-rhg2-2fy6-ux85-b522qo8ikoae</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      button: 0,
    },
    _id: "6494228352172c7c1bbb094d",
  },
  {
    timeStamp: 1687429760.609,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 63,
      Y: 126,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "6494228352172c7c1bbb094e",
  },
  {
    timeStamp: 1687429760.833,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 63,
      Y: 126,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      button: 0,
    },
    _id: "6494228352172c7c1bbb094f",
  },
  {
    timeStamp: 1687429761.722,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 63,
      Y: 131,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      value: "2",
    },
    _id: "6494228352172c7c1bbb0950",
  },
  {
    timeStamp: 1687429761.722,
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
    _id: "6494228352172c7c1bbb0951",
  },
  {
    timeStamp: 1687429762.264,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 353,
      Y: 241,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6494228352172c7c1bbb0952",
  },
  {
    timeStamp: 1687429762.493,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 353,
      Y: 241,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 212px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6494228352172c7c1bbb0953",
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
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3001/?session-replay=true", {
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
          pre.textContent =
            "Session : abc_user/l081ktjj-rhg2-2fy6-ux85-b522qo8ikoae \n" +
            "Elapsed : " +
            time;
        } else {
          pre.textContent =
            "Session : abc_user/l081ktjj-rhg2-2fy6-ux85-b522qo8ikoae \n" +
            "Elapsed : " +
            time;
        }
      }, seconds);
    }, 1000);
  };

  // Start the timer
  updateTimer();

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
