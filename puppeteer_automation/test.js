const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: 1686807297.535,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3000/", DOMLoadTime: 0.10809999999403953 },
    _id: "648aa31ca64c3744514d2f82",
  },
  {
    timeStamp: 1686807298.603,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 124,
      Y: 490,
      scrollX: 0,
      scrollY: 263.3333435058594,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "648aa31ca64c3744514d2f83",
  },
  {
    timeStamp: 1686807300.469,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 318, Y: 175, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f84",
  },
  {
    timeStamp: 1686807300.69,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 318,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "648aa31ca64c3744514d2f85",
  },
  {
    timeStamp: 1686807300.817,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "v", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f86",
  },
  {
    timeStamp: 1686807300.926,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "v", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f87",
  },
  {
    timeStamp: 1686807301.029,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f88",
  },
  {
    timeStamp: 1686807301.155,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f89",
  },
  {
    timeStamp: 1686807301.175,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "u", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f8a",
  },
  {
    timeStamp: 1686807301.245,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f8b",
  },
  {
    timeStamp: 1686807301.277,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "u", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f8c",
  },
  {
    timeStamp: 1686807301.345,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f8d",
  },
  {
    timeStamp: 1686807301.603,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f8e",
  },
  {
    timeStamp: 1686807301.698,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f8f",
  },
  {
    timeStamp: 1686807301.777,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f90",
  },
  {
    timeStamp: 1686807301.878,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f91",
  },
  {
    timeStamp: 1686807301.878,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "r", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f92",
  },
  {
    timeStamp: 1686807301.968,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "r", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f93",
  },
  {
    timeStamp: 1686807302.031,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "u", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f94",
  },
  {
    timeStamp: 1686807302.101,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f95",
  },
  {
    timeStamp: 1686807302.132,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "u", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f96",
  },
  {
    timeStamp: 1686807302.178,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f97",
  },
  {
    timeStamp: 1686807302.336,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f98",
  },
  {
    timeStamp: 1686807302.448,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f99",
  },
  {
    timeStamp: 1686807302.516,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f9a",
  },
  {
    timeStamp: 1686807302.565,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f9b",
  },
  {
    timeStamp: 1686807302.567,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f9c",
  },
  {
    timeStamp: 1686807302.675,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f9d",
  },
  {
    timeStamp: 1686807303.153,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "w", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f9e",
  },
  {
    timeStamp: 1686807303.241,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "o", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2f9f",
  },
  {
    timeStamp: 1686807303.277,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "w", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa0",
  },
  {
    timeStamp: 1686807303.341,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "o", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa1",
  },
  {
    timeStamp: 1686807303.403,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "r", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa2",
  },
  {
    timeStamp: 1686807303.505,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "k", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa3",
  },
  {
    timeStamp: 1686807303.506,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "r", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa4",
  },
  {
    timeStamp: 1686807303.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "k", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa5",
  },
  {
    timeStamp: 1686807303.674,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "s", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa6",
  },
  {
    timeStamp: 1686807303.798,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "s", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa7",
  },
  {
    timeStamp: 1686807303.833,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: " ", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa8",
  },
  {
    timeStamp: 1686807303.883,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fa9",
  },
  {
    timeStamp: 1686807303.934,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: " ", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2faa",
  },
  {
    timeStamp: 1686807304.019,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fab",
  },
  {
    timeStamp: 1686807304.08,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fac",
  },
  {
    timeStamp: 1686807304.184,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fad",
  },
  {
    timeStamp: 1686807304.24,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fae",
  },
  {
    timeStamp: 1686807304.241,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "/", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2faf",
  },
  {
    timeStamp: 1686807304.415,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fb0",
  },
  {
    timeStamp: 1686807304.516,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fb1",
  },
  {
    timeStamp: 1686807304.609,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fb2",
  },
  {
    timeStamp: 1686807304.609,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fb3",
  },
  {
    timeStamp: 1686807304.632,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fb4",
  },
  {
    timeStamp: 1686807304.682,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 318, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fb5",
  },
  {
    timeStamp: 1686807307.031,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 350,
      Y: 467,
      scrollX: 0,
      scrollY: 102,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "648aa31ca64c3744514d2fb6",
  },
  {
    timeStamp: 1686807307.44,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 353,
      Y: 461,
      scrollX: 0,
      scrollY: 102,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "648aa31ca64c3744514d2fb7",
  },
  {
    timeStamp: 1686807307.626,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 353,
      Y: 461,
      scrollX: 0,
      scrollY: 102,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "648aa31ca64c3744514d2fb8",
  },
  {
    timeStamp: 1686807308.094,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 361,
      Y: 657,
      scrollX: 0,
      scrollY: 102,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fb9",
  },
  {
    timeStamp: 1686807308.469,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 306,
      Y: 565,
      scrollX: 0,
      scrollY: 102,
      HTMLElement: '<textarea style="height: 227px;"></textarea>',
    },
    _id: "648aa31ca64c3744514d2fba",
  },
  {
    timeStamp: 1686807308.498,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fbb",
  },
  {
    timeStamp: 1686807308.602,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "D",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fbc",
  },
  {
    timeStamp: 1686807308.695,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fbd",
  },
  {
    timeStamp: 1686807308.697,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 306,
      Y: 565,
      scrollX: 0,
      scrollY: 102,
      HTMLElement: '<textarea style="height: 227px;"></textarea>',
      button: 0,
    },
    _id: "648aa31ca64c3744514d2fbe",
  },
  {
    timeStamp: 1686807308.71,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fbf",
  },
  {
    timeStamp: 1686807308.832,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc0",
  },
  {
    timeStamp: 1686807308.909,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc1",
  },
  {
    timeStamp: 1686807308.94,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc2",
  },
  {
    timeStamp: 1686807309.04,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc3",
  },
  {
    timeStamp: 1686807309.281,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc4",
  },
  {
    timeStamp: 1686807309.374,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc5",
  },
  {
    timeStamp: 1686807309.442,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc6",
  },
  {
    timeStamp: 1686807309.523,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc7",
  },
  {
    timeStamp: 1686807309.535,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc8",
  },
  {
    timeStamp: 1686807309.644,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fc9",
  },
  {
    timeStamp: 1686807309.675,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fca",
  },
  {
    timeStamp: 1686807309.787,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fcb",
  },
  {
    timeStamp: 1686807309.788,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fcc",
  },
  {
    timeStamp: 1686807309.888,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fcd",
  },
  {
    timeStamp: 1686807309.953,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "t",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fce",
  },
  {
    timeStamp: 1686807310.053,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "h",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fcf",
  },
  {
    timeStamp: 1686807310.055,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "t",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd0",
  },
  {
    timeStamp: 1686807310.116,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "h",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd1",
  },
  {
    timeStamp: 1686807310.178,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "i",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd2",
  },
  {
    timeStamp: 1686807310.254,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "i",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd3",
  },
  {
    timeStamp: 1686807310.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "s",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd4",
  },
  {
    timeStamp: 1686807310.348,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd5",
  },
  {
    timeStamp: 1686807310.349,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "s",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd6",
  },
  {
    timeStamp: 1686807310.471,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd7",
  },
  {
    timeStamp: 1686807310.489,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd8",
  },
  {
    timeStamp: 1686807310.888,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fd9",
  },
  {
    timeStamp: 1686807311.039,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "w",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fda",
  },
  {
    timeStamp: 1686807311.147,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "o",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fdb",
  },
  {
    timeStamp: 1686807311.149,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "w",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fdc",
  },
  {
    timeStamp: 1686807311.204,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "o",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fdd",
  },
  {
    timeStamp: 1686807311.276,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fde",
  },
  {
    timeStamp: 1686807311.362,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "k",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fdf",
  },
  {
    timeStamp: 1686807311.363,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe0",
  },
  {
    timeStamp: 1686807311.424,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "k",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe1",
  },
  {
    timeStamp: 1686807311.453,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe2",
  },
  {
    timeStamp: 1686807311.538,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe3",
  },
  {
    timeStamp: 1686807311.561,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe4",
  },
  {
    timeStamp: 1686807311.665,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe5",
  },
  {
    timeStamp: 1686807311.667,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe6",
  },
  {
    timeStamp: 1686807311.683,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe7",
  },
  {
    timeStamp: 1686807311.726,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe8",
  },
  {
    timeStamp: 1686807311.795,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fe9",
  },
  {
    timeStamp: 1686807311.843,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fea",
  },
  {
    timeStamp: 1686807311.936,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2feb",
  },
  {
    timeStamp: 1686807311.998,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fec",
  },
  {
    timeStamp: 1686807312.016,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fed",
  },
  {
    timeStamp: 1686807312.2,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fee",
  },
  {
    timeStamp: 1686807312.281,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2fef",
  },
  {
    timeStamp: 1686807312.36,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2ff0",
  },
  {
    timeStamp: 1686807312.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 306,
      Y: 565,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2ff1",
  },
  {
    timeStamp: 1686807312.39,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2ff2",
  },
  {
    timeStamp: 1686807312.39,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 306,
      Y: 565,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 227px;"></textarea></div>',
    },
    _id: "648aa31ca64c3744514d2ff3",
  },
  {
    timeStamp: 1686807314.039,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 322,
      Y: 1005,
      scrollX: 0,
      scrollY: 460,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "648aa31ca64c3744514d2ff4",
  },
  {
    timeStamp: 1686807314.268,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "frljtx6o-0hsn-50iw-zjiw-183jgembwwuy",
    },
    _id: "648aa31ca64c3744514d2ff5",
  },
  {
    timeStamp: 1686807314.27,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 322,
      Y: 1005,
      scrollX: 0,
      scrollY: 460,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "648aa31ca64c3744514d2ff6",
  },
  {
    timeStamp: 1686807314.466,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "frljtx6o-0hsn-50iw-zjiw-183jgembwwuy",
      duration: 197,
    },
    _id: "648aa31ca64c3744514d2ff7",
  },
  {
    timeStamp: 1686807317.551,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 255, Y: 191, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2ff8",
  },
  {
    timeStamp: 1686807317.779,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 255,
      Y: 191,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "648aa31ca64c3744514d2ff9",
  },
  {
    timeStamp: 1686807317.813,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "f", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2ffa",
  },
  {
    timeStamp: 1686807317.898,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "e", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2ffb",
  },
  {
    timeStamp: 1686807317.922,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "f", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2ffc",
  },
  {
    timeStamp: 1686807318.007,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "t", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2ffd",
  },
  {
    timeStamp: 1686807318.03,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "e", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2ffe",
  },
  {
    timeStamp: 1686807318.084,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "t", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d2fff",
  },
  {
    timeStamp: 1686807318.198,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "c", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3000",
  },
  {
    timeStamp: 1686807318.246,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "h", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3001",
  },
  {
    timeStamp: 1686807318.29,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "c", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3002",
  },
  {
    timeStamp: 1686807318.314,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "h", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3003",
  },
  {
    timeStamp: 1686807318.365,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "e", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3004",
  },
  {
    timeStamp: 1686807318.412,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "d", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3005",
  },
  {
    timeStamp: 1686807318.451,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "e", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3006",
  },
  {
    timeStamp: 1686807318.522,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: " ", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3007",
  },
  {
    timeStamp: 1686807318.522,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "d", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3008",
  },
  {
    timeStamp: 1686807318.58,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3009",
  },
  {
    timeStamp: 1686807318.646,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: " ", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d300a",
  },
  {
    timeStamp: 1686807318.732,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d300b",
  },
  {
    timeStamp: 1686807318.793,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d300c",
  },
  {
    timeStamp: 1686807318.872,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d300d",
  },
  {
    timeStamp: 1686807318.926,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d300e",
  },
  {
    timeStamp: 1686807319.003,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d300f",
  },
  {
    timeStamp: 1686807319.05,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3010",
  },
  {
    timeStamp: 1686807319.135,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3011",
  },
  {
    timeStamp: 1686807319.182,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3012",
  },
  {
    timeStamp: 1686807319.259,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3013",
  },
  {
    timeStamp: 1686807319.314,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3014",
  },
  {
    timeStamp: 1686807319.368,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3015",
  },
  {
    timeStamp: 1686807319.446,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3016",
  },
  {
    timeStamp: 1686807319.474,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3017",
  },
  {
    timeStamp: 1686807319.64,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3018",
  },
  {
    timeStamp: 1686807319.743,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3019",
  },
  {
    timeStamp: 1686807319.804,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d301a",
  },
  {
    timeStamp: 1686807319.804,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d301b",
  },
  {
    timeStamp: 1686807319.847,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d301c",
  },
  {
    timeStamp: 1686807319.872,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d301d",
  },
  {
    timeStamp: 1686807320.092,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "w", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d301e",
  },
  {
    timeStamp: 1686807320.197,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "o", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d301f",
  },
  {
    timeStamp: 1686807320.232,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "w", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3020",
  },
  {
    timeStamp: 1686807320.274,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "o", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3021",
  },
  {
    timeStamp: 1686807320.303,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "r", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3022",
  },
  {
    timeStamp: 1686807320.366,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "k", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3023",
  },
  {
    timeStamp: 1686807320.395,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "r", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3024",
  },
  {
    timeStamp: 1686807320.443,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "k", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3025",
  },
  {
    timeStamp: 1686807320.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "s", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3026",
  },
  {
    timeStamp: 1686807320.605,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: " ", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3027",
  },
  {
    timeStamp: 1686807320.607,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "s", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3028",
  },
  {
    timeStamp: 1686807320.698,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3029",
  },
  {
    timeStamp: 1686807320.717,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: " ", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d302a",
  },
  {
    timeStamp: 1686807320.747,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d302b",
  },
  {
    timeStamp: 1686807320.794,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d302c",
  },
  {
    timeStamp: 1686807320.879,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d302d",
  },
  {
    timeStamp: 1686807320.949,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d302e",
  },
  {
    timeStamp: 1686807321.045,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d302f",
  },
  {
    timeStamp: 1686807321.108,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3030",
  },
  {
    timeStamp: 1686807321.171,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3031",
  },
  {
    timeStamp: 1686807321.487,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3032",
  },
  {
    timeStamp: 1686807322,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3033",
  },
  {
    timeStamp: 1686807322.031,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3034",
  },
  {
    timeStamp: 1686807322.067,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3035",
  },
  {
    timeStamp: 1686807322.1,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3036",
  },
  {
    timeStamp: 1686807322.133,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3037",
  },
  {
    timeStamp: 1686807322.168,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3038",
  },
  {
    timeStamp: 1686807322.201,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3039",
  },
  {
    timeStamp: 1686807322.236,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d303a",
  },
  {
    timeStamp: 1686807322.269,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d303b",
  },
  {
    timeStamp: 1686807322.303,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d303c",
  },
  {
    timeStamp: 1686807322.335,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d303d",
  },
  {
    timeStamp: 1686807322.37,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d303e",
  },
  {
    timeStamp: 1686807322.404,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d303f",
  },
  {
    timeStamp: 1686807322.438,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3040",
  },
  {
    timeStamp: 1686807322.468,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3041",
  },
  {
    timeStamp: 1686807322.522,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "?", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3042",
  },
  {
    timeStamp: 1686807322.589,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Shift", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3043",
  },
  {
    timeStamp: 1686807322.798,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3044",
  },
  {
    timeStamp: 1686807322.895,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3045",
  },
  {
    timeStamp: 1686807322.976,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Control", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3046",
  },
  {
    timeStamp: 1686807323.007,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "a", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3047",
  },
  {
    timeStamp: 1686807323.04,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 255, Y: 191, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3048",
  },
  {
    timeStamp: 1686807323.103,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 255, Y: 191, key: "Backspace", HTMLElement: "<input>" },
    _id: "648aa31ca64c3744514d3049",
  },
  {
    timeStamp: 1686807324.693,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 535,
      Y: 77,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<div>Session ID : abc_user/x9tog0vt-pvt9-fbkj-a7r6-nwk9r0966sep</div>",
    },
    _id: "648aa31ca64c3744514d304a",
  },
  {
    timeStamp: 1686807324.881,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 27347 },
    _id: "648aa31ca64c3744514d304b",
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
  const context = browser.defaultBrowserContext();
  await context.overridePermissions(
    "http://localhost:3000/?session-replay=true",
    ["geolocation"]
  );

  await page.setViewport({
    width: 563,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3000/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 17px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
  });

  let prevTimeStamp = events[0].timeStamp;

  for (let event of events) {
    if (event.name === "USER_EVENT") {
      let scrollX = event.data.scrollX,
        scrollY = event.data.scrollY;
      let X = event.data.X,
        Y = event.data.Y;
      const delay = event.timeStamp - prevTimeStamp;

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
          await page.mouse.up();
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
          await page.mouse.up();
          await page.mouse.click(X - scrollX, Y - scrollY, { button: "right" });
          break;
      }
    }
    prevTimeStamp = event.timeStamp;
  }

  await browser.close();
}

start();
