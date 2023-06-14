const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: 1686637637.515,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3000/", DOMLoadTime: 0.4074000000953674 },
    _id: "64880c70fa7c024bc17dc1c5",
  },
  {
    timeStamp: 1686637638.307,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 421, Y: 183, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1c6",
  },
  {
    timeStamp: 1686637638.523,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 421,
      Y: 183,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc1c7",
  },
  {
    timeStamp: 1686637638.785,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1c8",
  },
  {
    timeStamp: 1686637639.051,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1c9",
  },
  {
    timeStamp: 1686637639.159,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "c", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ca",
  },
  {
    timeStamp: 1686637639.267,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "h", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1cb",
  },
  {
    timeStamp: 1686637639.268,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "c", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1cc",
  },
  {
    timeStamp: 1686637639.345,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "h", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1cd",
  },
  {
    timeStamp: 1686637639.345,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ce",
  },
  {
    timeStamp: 1686637639.39,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "c", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1cf",
  },
  {
    timeStamp: 1686637639.413,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d0",
  },
  {
    timeStamp: 1686637639.501,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "k", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d1",
  },
  {
    timeStamp: 1686637639.537,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "c", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d2",
  },
  {
    timeStamp: 1686637639.585,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "k", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d3",
  },
  {
    timeStamp: 1686637639.658,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "i", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d4",
  },
  {
    timeStamp: 1686637639.736,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "n", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d5",
  },
  {
    timeStamp: 1686637639.75,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "i", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d6",
  },
  {
    timeStamp: 1686637639.804,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "n", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d7",
  },
  {
    timeStamp: 1686637639.804,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "g", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d8",
  },
  {
    timeStamp: 1686637639.914,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1d9",
  },
  {
    timeStamp: 1686637639.916,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "g", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1da",
  },
  {
    timeStamp: 1686637640.011,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1db",
  },
  {
    timeStamp: 1686637640.012,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "w", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1dc",
  },
  {
    timeStamp: 1686637640.083,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "i", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1dd",
  },
  {
    timeStamp: 1686637640.112,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "w", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1de",
  },
  {
    timeStamp: 1686637640.176,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "i", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1df",
  },
  {
    timeStamp: 1686637640.213,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "t", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e0",
  },
  {
    timeStamp: 1686637640.267,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "h", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e1",
  },
  {
    timeStamp: 1686637640.321,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "t", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e2",
  },
  {
    timeStamp: 1686637640.36,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "h", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e3",
  },
  {
    timeStamp: 1686637640.381,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e4",
  },
  {
    timeStamp: 1686637640.584,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e5",
  },
  {
    timeStamp: 1686637640.585,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e6",
  },
  {
    timeStamp: 1686637640.666,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e7",
  },
  {
    timeStamp: 1686637640.712,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e8",
  },
  {
    timeStamp: 1686637640.806,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1e9",
  },
  {
    timeStamp: 1686637640.911,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "g", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ea",
  },
  {
    timeStamp: 1686637640.973,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1eb",
  },
  {
    timeStamp: 1686637641.022,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "g", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ec",
  },
  {
    timeStamp: 1686637641.08,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ed",
  },
  {
    timeStamp: 1686637641.362,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "Control", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ee",
  },
  {
    timeStamp: 1686637641.463,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1ef",
  },
  {
    timeStamp: 1686637641.537,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 183, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1f0",
  },
  {
    timeStamp: 1686637641.554,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "Control", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1f1",
  },
  {
    timeStamp: 1686637641.597,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1f2",
  },
  {
    timeStamp: 1686637641.598,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 183, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc1f3",
  },
  {
    timeStamp: 1686637645.275,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 562,
      Y: 466,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "64880c70fa7c024bc17dc1f4",
  },
  {
    timeStamp: 1686637646.558,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 558,
      Y: 786,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: '<textarea style="height: 352px;"></textarea>',
    },
    _id: "64880c70fa7c024bc17dc1f5",
  },
  {
    timeStamp: 1686637647.036,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 497,
      Y: 656,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: '<textarea style="height: 352px;"></textarea>',
    },
    _id: "64880c70fa7c024bc17dc1f6",
  },
  {
    timeStamp: 1686637647.104,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "Shift", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1f7",
  },
  {
    timeStamp: 1686637647.246,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "D", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1f8",
  },
  {
    timeStamp: 1686637647.259,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 497,
      Y: 656,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: '<textarea style="height: 352px;"></textarea>',
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc1f9",
  },
  {
    timeStamp: 1686637647.321,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "Shift", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1fa",
  },
  {
    timeStamp: 1686637647.362,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "d", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1fb",
  },
  {
    timeStamp: 1686637647.482,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "r", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1fc",
  },
  {
    timeStamp: 1686637647.573,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "a", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1fd",
  },
  {
    timeStamp: 1686637647.605,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "r", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1fe",
  },
  {
    timeStamp: 1686637647.698,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "a", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc1ff",
  },
  {
    timeStamp: 1686637647.713,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "g", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc200",
  },
  {
    timeStamp: 1686637647.808,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "g", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc201",
  },
  {
    timeStamp: 1686637647.89,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "g", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc202",
  },
  {
    timeStamp: 1686637647.927,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "e", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc203",
  },
  {
    timeStamp: 1686637647.95,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "g", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc204",
  },
  {
    timeStamp: 1686637648.057,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "d", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc205",
  },
  {
    timeStamp: 1686637648.058,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "e", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc206",
  },
  {
    timeStamp: 1686637648.216,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: " ", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc207",
  },
  {
    timeStamp: 1686637648.218,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "d", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc208",
  },
  {
    timeStamp: 1686637648.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "Shift", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc209",
  },
  {
    timeStamp: 1686637648.324,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: " ", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc20a",
  },
  {
    timeStamp: 1686637648.449,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "?", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc20b",
  },
  {
    timeStamp: 1686637648.503,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "?", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc20c",
  },
  {
    timeStamp: 1686637648.581,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "?", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc20d",
  },
  {
    timeStamp: 1686637648.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "?", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc20e",
  },
  {
    timeStamp: 1686637648.705,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "?", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc20f",
  },
  {
    timeStamp: 1686637648.784,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "?", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc210",
  },
  {
    timeStamp: 1686637648.842,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "Shift", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc211",
  },
  {
    timeStamp: 1686637649.036,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "Control", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc212",
  },
  {
    timeStamp: 1686637649.131,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "a", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc213",
  },
  {
    timeStamp: 1686637649.24,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "Control", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc214",
  },
  {
    timeStamp: 1686637649.244,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "a", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc215",
  },
  {
    timeStamp: 1686637649.275,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 497, Y: 656, key: "Backspace", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc216",
  },
  {
    timeStamp: 1686637649.322,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 497, Y: 656, key: "Backspace", HTMLElement: null },
    _id: "64880c70fa7c024bc17dc217",
  },
  {
    timeStamp: 1686637650.025,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 763,
      Y: 726,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 352px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64880c70fa7c024bc17dc218",
  },
  {
    timeStamp: 1686637650.21,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 763,
      Y: 726,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 352px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc219",
  },
  {
    timeStamp: 1686637653.988,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 557,
      Y: 1112,
      scrollX: 0,
      scrollY: 620.6666870117188,
      HTMLElement: null,
    },
    _id: "64880c70fa7c024bc17dc21a",
  },
  {
    timeStamp: 1686637655.317,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 558,
      Y: 1118,
      scrollX: 0,
      scrollY: 620.6666870117188,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "64880c70fa7c024bc17dc21b",
  },
  {
    timeStamp: 1686637655.529,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "6x46ofji-cqsr-o2kv-w0y6-wr1nr021ga27",
    },
    _id: "64880c70fa7c024bc17dc21c",
  },
  {
    timeStamp: 1686637655.529,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 558,
      Y: 1118,
      scrollX: 0,
      scrollY: 620.6666870117188,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc21d",
  },
  {
    timeStamp: 1686637655.757,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "6x46ofji-cqsr-o2kv-w0y6-wr1nr021ga27",
      duration: 227,
    },
    _id: "64880c70fa7c024bc17dc21e",
  },
  {
    timeStamp: 1686637657.059,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 509, Y: 190, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc21f",
  },
  {
    timeStamp: 1686637657.168,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc220",
  },
  {
    timeStamp: 1686637657.246,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "F", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc221",
  },
  {
    timeStamp: 1686637657.288,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 509,
      Y: 190,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc222",
  },
  {
    timeStamp: 1686637657.337,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc223",
  },
  {
    timeStamp: 1686637657.379,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "f", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc224",
  },
  {
    timeStamp: 1686637657.496,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc225",
  },
  {
    timeStamp: 1686637657.652,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "t", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc226",
  },
  {
    timeStamp: 1686637657.675,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc227",
  },
  {
    timeStamp: 1686637657.738,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "t", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc228",
  },
  {
    timeStamp: 1686637657.879,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "c", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc229",
  },
  {
    timeStamp: 1686637657.982,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "h", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc22a",
  },
  {
    timeStamp: 1686637657.983,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "c", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc22b",
  },
  {
    timeStamp: 1686637658.044,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "h", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc22c",
  },
  {
    timeStamp: 1686637658.096,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc22d",
  },
  {
    timeStamp: 1686637658.15,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc22e",
  },
  {
    timeStamp: 1686637658.205,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc22f",
  },
  {
    timeStamp: 1686637658.265,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc230",
  },
  {
    timeStamp: 1686637658.266,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc231",
  },
  {
    timeStamp: 1686637658.318,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc232",
  },
  {
    timeStamp: 1686637658.358,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc233",
  },
  {
    timeStamp: 1686637658.518,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc234",
  },
  {
    timeStamp: 1686637658.564,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc235",
  },
  {
    timeStamp: 1686637658.658,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc236",
  },
  {
    timeStamp: 1686637658.704,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc237",
  },
  {
    timeStamp: 1686637658.75,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc238",
  },
  {
    timeStamp: 1686637658.836,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc239",
  },
  {
    timeStamp: 1686637658.837,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "/", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc23a",
  },
  {
    timeStamp: 1686637658.971,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "Control", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc23b",
  },
  {
    timeStamp: 1686637659.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc23c",
  },
  {
    timeStamp: 1686637659.119,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "Control", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc23d",
  },
  {
    timeStamp: 1686637659.138,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 509, Y: 190, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc23e",
  },
  {
    timeStamp: 1686637659.184,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc23f",
  },
  {
    timeStamp: 1686637659.184,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 509, Y: 190, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc240",
  },
  {
    timeStamp: 1686637661.331,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 407,
      Y: 1041,
      scrollX: 0,
      scrollY: 620.6666870117188,
      HTMLElement: "<button>Alert </button>",
    },
    _id: "64880c70fa7c024bc17dc241",
  },
  {
    timeStamp: 1686637661.551,
    name: "USER_EVENT",
    type: "ALERT",
    data: { message: "Alert message" },
    _id: "64880c70fa7c024bc17dc242",
  },
  {
    timeStamp: 1686637662.802,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 407,
      Y: 1041,
      scrollX: 0,
      scrollY: 620.6666870117188,
      HTMLElement: "<button>Alert </button>",
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc243",
  },
  {
    timeStamp: 1686637662.803,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 407,
      Y: 1041,
      scrollX: 0,
      scrollY: 620.6666870117188,
      HTMLElement: null,
    },
    _id: "64880c70fa7c024bc17dc244",
  },
  {
    timeStamp: 1686637664.041,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 513, Y: 179, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc245",
  },
  {
    timeStamp: 1686637664.102,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc246",
  },
  {
    timeStamp: 1686637664.229,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "A", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc247",
  },
  {
    timeStamp: 1686637664.272,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 513,
      Y: 179,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc248",
  },
  {
    timeStamp: 1686637664.316,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc249",
  },
  {
    timeStamp: 1686637664.33,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc24a",
  },
  {
    timeStamp: 1686637664.571,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "l", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc24b",
  },
  {
    timeStamp: 1686637664.649,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "l", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc24c",
  },
  {
    timeStamp: 1686637664.669,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc24d",
  },
  {
    timeStamp: 1686637664.74,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "r", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc24e",
  },
  {
    timeStamp: 1686637664.801,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc24f",
  },
  {
    timeStamp: 1686637664.84,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "r", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc250",
  },
  {
    timeStamp: 1686637664.985,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc251",
  },
  {
    timeStamp: 1686637665.095,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc252",
  },
  {
    timeStamp: 1686637665.129,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc253",
  },
  {
    timeStamp: 1686637665.263,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc254",
  },
  {
    timeStamp: 1686637665.539,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc255",
  },
  {
    timeStamp: 1686637665.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc256",
  },
  {
    timeStamp: 1686637665.684,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc257",
  },
  {
    timeStamp: 1686637665.728,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "t", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc258",
  },
  {
    timeStamp: 1686637665.756,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc259",
  },
  {
    timeStamp: 1686637665.816,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "t", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc25a",
  },
  {
    timeStamp: 1686637665.816,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc25b",
  },
  {
    timeStamp: 1686637665.923,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "e", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc25c",
  },
  {
    timeStamp: 1686637665.962,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc25d",
  },
  {
    timeStamp: 1686637666.043,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc25e",
  },
  {
    timeStamp: 1686637666.044,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "d", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc25f",
  },
  {
    timeStamp: 1686637666.089,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc260",
  },
  {
    timeStamp: 1686637666.146,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: " ", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc261",
  },
  {
    timeStamp: 1686637666.544,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc262",
  },
  {
    timeStamp: 1686637666.598,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc263",
  },
  {
    timeStamp: 1686637666.665,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc264",
  },
  {
    timeStamp: 1686637667.062,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc265",
  },
  {
    timeStamp: 1686637667.286,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc266",
  },
  {
    timeStamp: 1686637667.327,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc267",
  },
  {
    timeStamp: 1686637667.433,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc268",
  },
  {
    timeStamp: 1686637667.488,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "?", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc269",
  },
  {
    timeStamp: 1686637667.53,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Shift", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc26a",
  },
  {
    timeStamp: 1686637667.721,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Control", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc26b",
  },
  {
    timeStamp: 1686637667.839,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc26c",
  },
  {
    timeStamp: 1686637667.909,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Control", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc26d",
  },
  {
    timeStamp: 1686637667.958,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 513, Y: 179, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc26e",
  },
  {
    timeStamp: 1686637667.959,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "a", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc26f",
  },
  {
    timeStamp: 1686637667.997,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 513, Y: 179, key: "Backspace", HTMLElement: "<input>" },
    _id: "64880c70fa7c024bc17dc270",
  },
  {
    timeStamp: 1686637669.94,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 561,
      Y: 780,
      scrollX: 0,
      scrollY: 218,
      HTMLElement: '<textarea style="height: 352px;"></textarea>',
    },
    _id: "64880c70fa7c024bc17dc271",
  },
  {
    timeStamp: 1686637670.791,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 574,
      Y: 492,
      scrollX: 0,
      scrollY: 218,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 65px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64880c70fa7c024bc17dc272",
  },
  {
    timeStamp: 1686637671.2,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 537,
      Y: 477,
      scrollX: 0,
      scrollY: 218,
      HTMLElement: '<textarea style="height: 65px;"></textarea>',
    },
    _id: "64880c70fa7c024bc17dc273",
  },
  {
    timeStamp: 1686637671.277,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc274",
  },
  {
    timeStamp: 1686637671.364,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "D",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc275",
  },
  {
    timeStamp: 1686637671.426,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc276",
  },
  {
    timeStamp: 1686637671.429,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 537,
      Y: 477,
      scrollX: 0,
      scrollY: 218,
      HTMLElement: '<textarea style="height: 65px;"></textarea>',
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc277",
  },
  {
    timeStamp: 1686637671.483,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc278",
  },
  {
    timeStamp: 1686637671.57,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc279",
  },
  {
    timeStamp: 1686637671.654,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc27a",
  },
  {
    timeStamp: 1686637671.694,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc27b",
  },
  {
    timeStamp: 1686637671.773,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc27c",
  },
  {
    timeStamp: 1686637671.871,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc27d",
  },
  {
    timeStamp: 1686637671.996,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc27e",
  },
  {
    timeStamp: 1686637672.118,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc27f",
  },
  {
    timeStamp: 1686637672.196,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc280",
  },
  {
    timeStamp: 1686637672.357,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc281",
  },
  {
    timeStamp: 1686637672.48,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc282",
  },
  {
    timeStamp: 1686637672.482,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc283",
  },
  {
    timeStamp: 1686637672.553,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc284",
  },
  {
    timeStamp: 1686637672.588,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc285",
  },
  {
    timeStamp: 1686637672.709,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc286",
  },
  {
    timeStamp: 1686637672.769,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc287",
  },
  {
    timeStamp: 1686637672.871,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc288",
  },
  {
    timeStamp: 1686637672.872,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc289",
  },
  {
    timeStamp: 1686637672.965,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "g",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc28a",
  },
  {
    timeStamp: 1686637672.965,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc28b",
  },
  {
    timeStamp: 1686637673.011,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "i",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc28c",
  },
  {
    timeStamp: 1686637673.049,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "n",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc28d",
  },
  {
    timeStamp: 1686637673.1,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "i",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc28e",
  },
  {
    timeStamp: 1686637673.1,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc28f",
  },
  {
    timeStamp: 1686637673.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "n",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc290",
  },
  {
    timeStamp: 1686637673.202,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc291",
  },
  {
    timeStamp: 1686637673.261,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc292",
  },
  {
    timeStamp: 1686637673.314,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc293",
  },
  {
    timeStamp: 1686637673.68,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc294",
  },
  {
    timeStamp: 1686637673.711,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc295",
  },
  {
    timeStamp: 1686637673.789,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc296",
  },
  {
    timeStamp: 1686637673.874,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc297",
  },
  {
    timeStamp: 1686637673.875,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "/",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc298",
  },
  {
    timeStamp: 1686637674.036,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc299",
  },
  {
    timeStamp: 1686637674.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc29a",
  },
  {
    timeStamp: 1686637674.168,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc29b",
  },
  {
    timeStamp: 1686637674.231,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc29c",
  },
  {
    timeStamp: 1686637674.257,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc29d",
  },
  {
    timeStamp: 1686637674.328,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc29e",
  },
  {
    timeStamp: 1686637674.983,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "w",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc29f",
  },
  {
    timeStamp: 1686637675.08,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "o",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a0",
  },
  {
    timeStamp: 1686637675.099,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "w",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a1",
  },
  {
    timeStamp: 1686637675.156,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "o",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a2",
  },
  {
    timeStamp: 1686637675.18,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a3",
  },
  {
    timeStamp: 1686637675.267,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "k",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a4",
  },
  {
    timeStamp: 1686637675.269,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a5",
  },
  {
    timeStamp: 1686637675.328,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "k",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a6",
  },
  {
    timeStamp: 1686637675.407,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "s",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a7",
  },
  {
    timeStamp: 1686637675.504,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a8",
  },
  {
    timeStamp: 1686637675.532,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "s",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2a9",
  },
  {
    timeStamp: 1686637675.628,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2aa",
  },
  {
    timeStamp: 1686637675.629,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2ab",
  },
  {
    timeStamp: 1686637675.768,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2ac",
  },
  {
    timeStamp: 1686637675.838,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2ad",
  },
  {
    timeStamp: 1686637675.916,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2ae",
  },
  {
    timeStamp: 1686637675.962,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2af",
  },
  {
    timeStamp: 1686637676.04,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b0",
  },
  {
    timeStamp: 1686637676.094,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b1",
  },
  {
    timeStamp: 1686637676.145,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b2",
  },
  {
    timeStamp: 1686637676.297,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b3",
  },
  {
    timeStamp: 1686637676.667,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b4",
  },
  {
    timeStamp: 1686637676.796,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b5",
  },
  {
    timeStamp: 1686637676.901,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b6",
  },
  {
    timeStamp: 1686637676.963,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b7",
  },
  {
    timeStamp: 1686637676.989,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b8",
  },
  {
    timeStamp: 1686637677.117,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2b9",
  },
  {
    timeStamp: 1686637677.251,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2ba",
  },
  {
    timeStamp: 1686637677.319,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2bb",
  },
  {
    timeStamp: 1686637677.338,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 537,
      Y: 477,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2bc",
  },
  {
    timeStamp: 1686637677.358,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2bd",
  },
  {
    timeStamp: 1686637677.384,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 537,
      Y: 477,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "64880c70fa7c024bc17dc2be",
  },
  {
    timeStamp: 1686637678.275,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 672,
      Y: 236,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 65px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64880c70fa7c024bc17dc2bf",
  },
  {
    timeStamp: 1686637678.504,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 672,
      Y: 236,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 65px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64880c70fa7c024bc17dc2c0",
  },
  {
    timeStamp: 1686637679.597,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "64880c70fa7c024bc17dc2c1",
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
    width: 981,
    height: 645,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3000/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 17px;}",
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
