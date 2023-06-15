const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: 1686734114.467,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.4393999999910593 },
    _id: "64898548855d8b4c80690828",
  },
  {
    timeStamp: 1686734115.827,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 605, Y: 187, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690829",
  },
  {
    timeStamp: 1686734116.043,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 605,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64898548855d8b4c8069082a",
  },
  {
    timeStamp: 1686734116.836,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 605, Y: 187, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069082b",
  },
  {
    timeStamp: 1686734119.615,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "f", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069082c",
  },
  {
    timeStamp: 1686734119.709,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "f", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069082d",
  },
  {
    timeStamp: 1686734119.786,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "r", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069082e",
  },
  {
    timeStamp: 1686734119.865,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069082f",
  },
  {
    timeStamp: 1686734119.949,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "m", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690830",
  },
  {
    timeStamp: 1686734119.95,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "r", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690831",
  },
  {
    timeStamp: 1686734119.965,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "o", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690832",
  },
  {
    timeStamp: 1686734120.051,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690833",
  },
  {
    timeStamp: 1686734120.052,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "m", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690834",
  },
  {
    timeStamp: 1686734120.223,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: " ", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690835",
  },
  {
    timeStamp: 1686734120.709,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690836",
  },
  {
    timeStamp: 1686734120.779,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690837",
  },
  {
    timeStamp: 1686734120.826,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690838",
  },
  {
    timeStamp: 1686734120.888,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690839",
  },
  {
    timeStamp: 1686734120.979,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "g", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069083a",
  },
  {
    timeStamp: 1686734121.049,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069083b",
  },
  {
    timeStamp: 1686734121.072,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "g", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069083c",
  },
  {
    timeStamp: 1686734121.165,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069083d",
  },
  {
    timeStamp: 1686734121.672,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069083e",
  },
  {
    timeStamp: 1686734121.812,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069083f",
  },
  {
    timeStamp: 1686734121.915,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690840",
  },
  {
    timeStamp: 1686734121.976,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690841",
  },
  {
    timeStamp: 1686734122.298,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "Backspace", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690842",
  },
  {
    timeStamp: 1686734122.361,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "Backspace", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690843",
  },
  {
    timeStamp: 1686734123.367,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 605, Y: 187, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690844",
  },
  {
    timeStamp: 1686734123.443,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "Tab", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690845",
  },
  {
    timeStamp: 1686734123.569,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "Tab", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690846",
  },
  {
    timeStamp: 1686734124.059,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "k", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690847",
  },
  {
    timeStamp: 1686734124.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690848",
  },
  {
    timeStamp: 1686734124.113,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690849",
  },
  {
    timeStamp: 1686734124.161,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069084a",
  },
  {
    timeStamp: 1686734124.176,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "j", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069084b",
  },
  {
    timeStamp: 1686734124.206,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "k", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069084c",
  },
  {
    timeStamp: 1686734124.206,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069084d",
  },
  {
    timeStamp: 1686734124.243,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069084e",
  },
  {
    timeStamp: 1686734124.282,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "j", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069084f",
  },
  {
    timeStamp: 1686734124.282,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690850",
  },
  {
    timeStamp: 1686734124.323,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "k", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690851",
  },
  {
    timeStamp: 1686734124.324,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690852",
  },
  {
    timeStamp: 1686734124.37,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690853",
  },
  {
    timeStamp: 1686734124.423,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "j", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690854",
  },
  {
    timeStamp: 1686734124.424,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690855",
  },
  {
    timeStamp: 1686734124.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690856",
  },
  {
    timeStamp: 1686734124.452,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "k", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690857",
  },
  {
    timeStamp: 1686734124.452,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690858",
  },
  {
    timeStamp: 1686734124.499,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690859",
  },
  {
    timeStamp: 1686734124.52,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069085a",
  },
  {
    timeStamp: 1686734124.543,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069085b",
  },
  {
    timeStamp: 1686734124.575,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069085c",
  },
  {
    timeStamp: 1686734124.628,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "j", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069085d",
  },
  {
    timeStamp: 1686734124.628,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069085e",
  },
  {
    timeStamp: 1686734124.628,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c8069085f",
  },
  {
    timeStamp: 1686734124.72,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 605, Y: 187, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690860",
  },
  {
    timeStamp: 1686734125.899,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 669,
      Y: 268,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c80690861",
  },
  {
    timeStamp: 1686734126.133,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 669,
      Y: 268,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "64898548855d8b4c80690862",
  },
  {
    timeStamp: 1686734126.908,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 669,
      Y: 268,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c80690863",
  },
  {
    timeStamp: 1686734127.288,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 669,
      Y: 268,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c80690864",
  },
  {
    timeStamp: 1686734127.505,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 669,
      Y: 268,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "64898548855d8b4c80690865",
  },
  {
    timeStamp: 1686734128.208,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 627,
      Y: 269,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c80690866",
  },
  {
    timeStamp: 1686734128.357,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 627,
      Y: 269,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c80690867",
  },
  {
    timeStamp: 1686734128.428,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 627,
      Y: 269,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "64898548855d8b4c80690868",
  },
  {
    timeStamp: 1686734128.475,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 627, Y: 269, key: "a", HTMLElement: '<input type="password">' },
    _id: "64898548855d8b4c80690869",
  },
  {
    timeStamp: 1686734128.584,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 627,
      Y: 269,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c8069086a",
  },
  {
    timeStamp: 1686734128.599,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 627, Y: 269, key: "a", HTMLElement: '<input type="password">' },
    _id: "64898548855d8b4c8069086b",
  },
  {
    timeStamp: 1686734129.206,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 627,
      Y: 269,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c8069086c",
  },
  {
    timeStamp: 1686734129.276,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 627,
      Y: 269,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "64898548855d8b4c8069086d",
  },
  {
    timeStamp: 1686734130.428,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 614,
      Y: 459,
      scrollX: 0,
      scrollY: 240,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "64898548855d8b4c8069086e",
  },
  {
    timeStamp: 1686734130.468,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "Shift",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069086f",
  },
  {
    timeStamp: 1686734130.595,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "D",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690870",
  },
  {
    timeStamp: 1686734130.657,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 614,
      Y: 459,
      scrollX: 0,
      scrollY: 240,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "64898548855d8b4c80690871",
  },
  {
    timeStamp: 1686734130.663,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "Shift",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690872",
  },
  {
    timeStamp: 1686734130.719,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "d",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690873",
  },
  {
    timeStamp: 1686734130.821,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "r",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690874",
  },
  {
    timeStamp: 1686734130.906,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "a",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690875",
  },
  {
    timeStamp: 1686734130.945,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "r",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690876",
  },
  {
    timeStamp: 1686734131.038,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "a",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690877",
  },
  {
    timeStamp: 1686734131.055,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "g",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690878",
  },
  {
    timeStamp: 1686734131.132,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "g",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690879",
  },
  {
    timeStamp: 1686734131.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "g",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069087a",
  },
  {
    timeStamp: 1686734131.303,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "i",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069087b",
  },
  {
    timeStamp: 1686734131.304,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "g",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069087c",
  },
  {
    timeStamp: 1686734131.341,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "n",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069087d",
  },
  {
    timeStamp: 1686734131.382,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "i",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069087e",
  },
  {
    timeStamp: 1686734131.402,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: "g",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c8069087f",
  },
  {
    timeStamp: 1686734131.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "n",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690880",
  },
  {
    timeStamp: 1686734131.503,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: "g",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690881",
  },
  {
    timeStamp: 1686734131.535,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 614,
      Y: 459,
      key: " ",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690882",
  },
  {
    timeStamp: 1686734131.581,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 614,
      Y: 459,
      key: " ",
      HTMLElement: '<button type="submit">Submit Form</button>',
    },
    _id: "64898548855d8b4c80690883",
  },
  {
    timeStamp: 1686734132.955,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 686,
      Y: 464,
      scrollX: 0,
      scrollY: 240,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "64898548855d8b4c80690884",
  },
  {
    timeStamp: 1686734133.479,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 690,
      Y: 681,
      scrollX: 0,
      scrollY: 240,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 249px;"></textarea></div>',
    },
    _id: "64898548855d8b4c80690885",
  },
  {
    timeStamp: 1686734133.929,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 621,
      Y: 566,
      scrollX: 0,
      scrollY: 240,
      HTMLElement: '<textarea style="height: 249px;"></textarea>',
    },
    _id: "64898548855d8b4c80690886",
  },
  {
    timeStamp: 1686734134.148,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 621,
      Y: 566,
      scrollX: 0,
      scrollY: 240,
      HTMLElement: '<textarea style="height: 249px;"></textarea>',
      button: 0,
    },
    _id: "64898548855d8b4c80690887",
  },
  {
    timeStamp: 1686734134.652,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "Control", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690888",
  },
  {
    timeStamp: 1686734134.804,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "a", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690889",
  },
  {
    timeStamp: 1686734134.851,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "Control", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069088a",
  },
  {
    timeStamp: 1686734134.907,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "a", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069088b",
  },
  {
    timeStamp: 1686734135.046,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "Shift", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069088c",
  },
  {
    timeStamp: 1686734135.316,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "D", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069088d",
  },
  {
    timeStamp: 1686734135.408,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "Shift", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069088e",
  },
  {
    timeStamp: 1686734135.433,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "d", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069088f",
  },
  {
    timeStamp: 1686734135.532,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "r", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690890",
  },
  {
    timeStamp: 1686734135.679,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "r", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690891",
  },
  {
    timeStamp: 1686734135.679,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "a", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690892",
  },
  {
    timeStamp: 1686734135.798,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "g", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690893",
  },
  {
    timeStamp: 1686734135.82,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "a", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690894",
  },
  {
    timeStamp: 1686734135.898,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "g", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690895",
  },
  {
    timeStamp: 1686734135.984,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "g", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690896",
  },
  {
    timeStamp: 1686734136.045,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "e", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690897",
  },
  {
    timeStamp: 1686734136.06,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "g", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690898",
  },
  {
    timeStamp: 1686734136.17,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "e", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c80690899",
  },
  {
    timeStamp: 1686734136.211,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "d", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069089a",
  },
  {
    timeStamp: 1686734136.321,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "d", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069089b",
  },
  {
    timeStamp: 1686734136.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: " ", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069089c",
  },
  {
    timeStamp: 1686734136.402,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "Shift", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069089d",
  },
  {
    timeStamp: 1686734136.461,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: " ", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069089e",
  },
  {
    timeStamp: 1686734136.515,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c8069089f",
  },
  {
    timeStamp: 1686734136.56,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a0",
  },
  {
    timeStamp: 1686734136.646,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a1",
  },
  {
    timeStamp: 1686734136.709,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a2",
  },
  {
    timeStamp: 1686734136.763,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a3",
  },
  {
    timeStamp: 1686734136.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a4",
  },
  {
    timeStamp: 1686734136.954,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "Shift", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a5",
  },
  {
    timeStamp: 1686734137.288,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "Shift", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a6",
  },
  {
    timeStamp: 1686734137.41,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a7",
  },
  {
    timeStamp: 1686734137.465,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "?", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a8",
  },
  {
    timeStamp: 1686734137.51,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "Shift", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908a9",
  },
  {
    timeStamp: 1686734137.702,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "Control", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908aa",
  },
  {
    timeStamp: 1686734137.796,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 621, Y: 566, key: "a", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908ab",
  },
  {
    timeStamp: 1686734137.897,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "Control", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908ac",
  },
  {
    timeStamp: 1686734137.899,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 621,
      Y: 566,
      key: "Backspace",
      HTMLElement: "<p>Field 4 : </p>",
    },
    _id: "64898548855d8b4c806908ad",
  },
  {
    timeStamp: 1686734137.924,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 621, Y: 566, key: "a", HTMLElement: "<p>Field 4 : </p>" },
    _id: "64898548855d8b4c806908ae",
  },
  {
    timeStamp: 1686734137.958,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 621,
      Y: 566,
      key: "Backspace",
      HTMLElement: "<p>Field 4 : </p>",
    },
    _id: "64898548855d8b4c806908af",
  },
  {
    timeStamp: 1686734139.651,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 620,
      Y: 1021,
      scrollX: 0,
      scrollY: 482,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "64898548855d8b4c806908b0",
  },
  {
    timeStamp: 1686734139.885,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "rfejyj0o-kfdd-f612-gbei-ku95f6e9cxro",
    },
    _id: "64898548855d8b4c806908b1",
  },
  {
    timeStamp: 1686734139.886,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 620,
      Y: 1021,
      scrollX: 0,
      scrollY: 482,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "64898548855d8b4c806908b2",
  },
  {
    timeStamp: 1686734140.112,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "rfejyj0o-kfdd-f612-gbei-ku95f6e9cxro",
      duration: 227,
    },
    _id: "64898548855d8b4c806908b3",
  },
  {
    timeStamp: 1686734141.246,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 598,
      Y: 196,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "64898548855d8b4c806908b4",
  },
  {
    timeStamp: 1686734141.613,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 592, Y: 181, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908b5",
  },
  {
    timeStamp: 1686734141.736,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 592, Y: 181, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908b6",
  },
  {
    timeStamp: 1686734141.868,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908b7",
  },
  {
    timeStamp: 1686734141.968,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 592,
      Y: 181,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64898548855d8b4c806908b8",
  },
  {
    timeStamp: 1686734141.975,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "F", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908b9",
  },
  {
    timeStamp: 1686734142.038,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ba",
  },
  {
    timeStamp: 1686734142.095,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "f", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908bb",
  },
  {
    timeStamp: 1686734142.414,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908bc",
  },
  {
    timeStamp: 1686734142.484,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "t", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908bd",
  },
  {
    timeStamp: 1686734142.546,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908be",
  },
  {
    timeStamp: 1686734142.585,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "t", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908bf",
  },
  {
    timeStamp: 1686734142.711,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "c", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c0",
  },
  {
    timeStamp: 1686734142.782,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "h", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c1",
  },
  {
    timeStamp: 1686734142.811,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "c", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c2",
  },
  {
    timeStamp: 1686734142.827,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "h", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c3",
  },
  {
    timeStamp: 1686734142.904,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c4",
  },
  {
    timeStamp: 1686734142.942,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c5",
  },
  {
    timeStamp: 1686734143.028,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "e", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c6",
  },
  {
    timeStamp: 1686734143.076,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: " ", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c7",
  },
  {
    timeStamp: 1686734143.078,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "d", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c8",
  },
  {
    timeStamp: 1686734143.154,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908c9",
  },
  {
    timeStamp: 1686734143.208,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: " ", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ca",
  },
  {
    timeStamp: 1686734143.278,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908cb",
  },
  {
    timeStamp: 1686734143.308,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908cc",
  },
  {
    timeStamp: 1686734143.394,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908cd",
  },
  {
    timeStamp: 1686734143.441,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ce",
  },
  {
    timeStamp: 1686734143.52,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908cf",
  },
  {
    timeStamp: 1686734143.6,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d0",
  },
  {
    timeStamp: 1686734143.6,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "/", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d1",
  },
  {
    timeStamp: 1686734143.795,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d2",
  },
  {
    timeStamp: 1686734143.909,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d3",
  },
  {
    timeStamp: 1686734143.999,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d4",
  },
  {
    timeStamp: 1686734144.037,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d5",
  },
  {
    timeStamp: 1686734144.607,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "ArrowRight", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d6",
  },
  {
    timeStamp: 1686734144.638,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "ArrowRight", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d7",
  },
  {
    timeStamp: 1686734144.962,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d8",
  },
  {
    timeStamp: 1686734145.278,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908d9",
  },
  {
    timeStamp: 1686734145.332,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908da",
  },
  {
    timeStamp: 1686734145.406,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908db",
  },
  {
    timeStamp: 1686734145.616,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908dc",
  },
  {
    timeStamp: 1686734145.728,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908dd",
  },
  {
    timeStamp: 1686734145.794,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908de",
  },
  {
    timeStamp: 1686734145.841,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908df",
  },
  {
    timeStamp: 1686734145.971,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e0",
  },
  {
    timeStamp: 1686734146.125,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e1",
  },
  {
    timeStamp: 1686734146.195,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e2",
  },
  {
    timeStamp: 1686734146.237,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e3",
  },
  {
    timeStamp: 1686734146.389,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e4",
  },
  {
    timeStamp: 1686734146.618,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "W", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e5",
  },
  {
    timeStamp: 1686734146.68,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e6",
  },
  {
    timeStamp: 1686734146.694,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "w", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e7",
  },
  {
    timeStamp: 1686734146.929,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "o", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e8",
  },
  {
    timeStamp: 1686734147.013,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "o", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908e9",
  },
  {
    timeStamp: 1686734147.013,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "r", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ea",
  },
  {
    timeStamp: 1686734147.107,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "k", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908eb",
  },
  {
    timeStamp: 1686734147.108,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "r", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ec",
  },
  {
    timeStamp: 1686734147.145,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "k", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ed",
  },
  {
    timeStamp: 1686734147.178,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ee",
  },
  {
    timeStamp: 1686734147.287,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "s", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ef",
  },
  {
    timeStamp: 1686734147.479,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f0",
  },
  {
    timeStamp: 1686734147.48,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: " ", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f1",
  },
  {
    timeStamp: 1686734147.581,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: " ", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f2",
  },
  {
    timeStamp: 1686734147.706,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f3",
  },
  {
    timeStamp: 1686734147.76,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f4",
  },
  {
    timeStamp: 1686734147.837,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f5",
  },
  {
    timeStamp: 1686734147.884,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f6",
  },
  {
    timeStamp: 1686734147.954,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f7",
  },
  {
    timeStamp: 1686734148.024,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f8",
  },
  {
    timeStamp: 1686734148.093,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908f9",
  },
  {
    timeStamp: 1686734148.132,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908fa",
  },
  {
    timeStamp: 1686734148.29,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908fb",
  },
  {
    timeStamp: 1686734148.32,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "?", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908fc",
  },
  {
    timeStamp: 1686734148.657,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Shift", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908fd",
  },
  {
    timeStamp: 1686734148.873,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908fe",
  },
  {
    timeStamp: 1686734149.068,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c806908ff",
  },
  {
    timeStamp: 1686734149.172,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690900",
  },
  {
    timeStamp: 1686734149.226,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690901",
  },
  {
    timeStamp: 1686734149.375,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 592, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690902",
  },
  {
    timeStamp: 1686734149.444,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 592, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "64898548855d8b4c80690903",
  },
  {
    timeStamp: 1686734150.174,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 785,
      Y: 179,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 249px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64898548855d8b4c80690904",
  },
  {
    timeStamp: 1686734150.394,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 785,
      Y: 179,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 249px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64898548855d8b4c80690905",
  },
  {
    timeStamp: 1686734151.508,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "64898548855d8b4c80690906",
  },
  {
    timeStamp: 1686734152.289,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 456,
      Y: 5,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<html lang="en"><head>\n    <script type="module">\n      // import UITracker from "./UITracker.js";\n      // const uiTracker = new UITracker();\n      // uiTracker.config(600000, false);\n      // uiTracker.start();\n    </script>\n    <meta charset="utf-8">\n    <link rel="icon" href="/favicon.ico">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="theme-color" content="#000000">\n    <meta name="description" content="Web site created using create-react-app">\n    <link rel="apple-touch-icon" href="/logo192.png">\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="/manifest.json">\n    <!--\n      Notice the use of  in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  <script defer="" src="/static/js/bundle.js"></script><style>\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */</style><style>body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  min-height: 4em;\n  border: 1px solid black;\n}\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4em;\n}\n\n.field {\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 0.4em;\n  min-width: 10em;\n}\n\n.buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  width: 10em;\n  margin: 0.6em auto;\n  border: 1px solid black;\n}\n\nbutton {\n  margin: 0.2em;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cblxuLmZpZWxkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgbWluLXdpZHRoOiAxMGVtO1xufVxuXG4uYnV0dG9uc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuNmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */</style></head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"><div class="App"><div class="header"><div>{"userId":1,"id":1,"title":"delectus aut autem","completed":false}</div></div><div>Session ID : abc_user/jx5e8yix-gch1-cnho-ch1e-juo6sgvdq4dw</div><hr><div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 249px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  \n\n</body></html>',
    },
    _id: "64898548855d8b4c80690907",
  },
  {
    timeStamp: 1686734152.414,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 37948 },
    _id: "64898548855d8b4c80690908",
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
    ignoreDefaultArgs: ["--enable-automation"], //--force-device-scale-factor to change zoom
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
    width: 1225,
    height: 681,
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
