const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: 1686729814.724,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0 },
    _id: "6489747709c781dc1f4722a3",
  },
  {
    timeStamp: 1686729817.287,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 644, Y: 182, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722a4",
  },
  {
    timeStamp: 1686729817.505,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 644,
      Y: 182,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6489747709c781dc1f4722a5",
  },
  {
    timeStamp: 1686729818.075,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "w", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722a6",
  },
  {
    timeStamp: 1686729818.201,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "w", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722a7",
  },
  {
    timeStamp: 1686729818.29,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "o", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722a8",
  },
  {
    timeStamp: 1686729818.368,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "o", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722a9",
  },
  {
    timeStamp: 1686729818.425,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "r", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722aa",
  },
  {
    timeStamp: 1686729818.499,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "k", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ab",
  },
  {
    timeStamp: 1686729818.502,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "r", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ac",
  },
  {
    timeStamp: 1686729818.562,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "k", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ad",
  },
  {
    timeStamp: 1686729818.682,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "i", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ae",
  },
  {
    timeStamp: 1686729818.768,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "n", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722af",
  },
  {
    timeStamp: 1686729818.79,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "i", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b0",
  },
  {
    timeStamp: 1686729818.812,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "g", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b1",
  },
  {
    timeStamp: 1686729818.85,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "n", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b2",
  },
  {
    timeStamp: 1686729818.908,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b3",
  },
  {
    timeStamp: 1686729818.927,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "g", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b4",
  },
  {
    timeStamp: 1686729818.966,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "Shift", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b5",
  },
  {
    timeStamp: 1686729819.046,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b6",
  },
  {
    timeStamp: 1686729819.334,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b7",
  },
  {
    timeStamp: 1686729819.412,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b8",
  },
  {
    timeStamp: 1686729819.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722b9",
  },
  {
    timeStamp: 1686729819.555,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "Shift", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ba",
  },
  {
    timeStamp: 1686729819.556,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "/", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722bb",
  },
  {
    timeStamp: 1686729819.755,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "Control", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722bc",
  },
  {
    timeStamp: 1686729819.84,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "a", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722bd",
  },
  {
    timeStamp: 1686729819.937,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "Control", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722be",
  },
  {
    timeStamp: 1686729819.938,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 644, Y: 182, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722bf",
  },
  {
    timeStamp: 1686729819.972,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "a", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c0",
  },
  {
    timeStamp: 1686729819.999,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 644, Y: 182, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c1",
  },
  {
    timeStamp: 1686729822.866,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 650,
      Y: 814,
      scrollX: 0,
      scrollY: 288,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6489747709c781dc1f4722c2",
  },
  {
    timeStamp: 1686729823.097,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 650,
      Y: 814,
      scrollX: 0,
      scrollY: 288,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6489747709c781dc1f4722c3",
  },
  {
    timeStamp: 1686729824.644,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 640, Y: 195, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c4",
  },
  {
    timeStamp: 1686729824.881,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 640,
      Y: 195,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6489747709c781dc1f4722c5",
  },
  {
    timeStamp: 1686729824.925,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "f", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c6",
  },
  {
    timeStamp: 1686729825.01,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "f", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c7",
  },
  {
    timeStamp: 1686729825.011,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "e", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c8",
  },
  {
    timeStamp: 1686729825.158,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "e", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722c9",
  },
  {
    timeStamp: 1686729825.331,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "c", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ca",
  },
  {
    timeStamp: 1686729825.403,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "c", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722cb",
  },
  {
    timeStamp: 1686729825.67,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722cc",
  },
  {
    timeStamp: 1686729825.74,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722cd",
  },
  {
    timeStamp: 1686729825.77,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "t", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722ce",
  },
  {
    timeStamp: 1686729825.833,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "t", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722cf",
  },
  {
    timeStamp: 1686729826.01,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "c", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d0",
  },
  {
    timeStamp: 1686729826.032,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "c", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d1",
  },
  {
    timeStamp: 1686729826.074,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "h", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d2",
  },
  {
    timeStamp: 1686729826.152,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "h", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d3",
  },
  {
    timeStamp: 1686729826.24,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "e", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d4",
  },
  {
    timeStamp: 1686729826.325,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "d", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d5",
  },
  {
    timeStamp: 1686729826.38,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "e", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d6",
  },
  {
    timeStamp: 1686729826.426,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "d", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d7",
  },
  {
    timeStamp: 1686729826.451,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d8",
  },
  {
    timeStamp: 1686729826.527,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "Shift", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722d9",
  },
  {
    timeStamp: 1686729826.558,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722da",
  },
  {
    timeStamp: 1686729826.737,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722db",
  },
  {
    timeStamp: 1686729826.791,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722dc",
  },
  {
    timeStamp: 1686729826.895,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "Shift", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722dd",
  },
  {
    timeStamp: 1686729827.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "Control", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722de",
  },
  {
    timeStamp: 1686729827.326,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "a", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722df",
  },
  {
    timeStamp: 1686729827.403,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "Control", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722e0",
  },
  {
    timeStamp: 1686729827.454,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 640, Y: 195, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722e1",
  },
  {
    timeStamp: 1686729827.473,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "a", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722e2",
  },
  {
    timeStamp: 1686729827.515,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 640, Y: 195, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f4722e3",
  },
  {
    timeStamp: 1686729828.622,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 660,
      Y: 445,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6489747709c781dc1f4722e4",
  },
  {
    timeStamp: 1686729828.773,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 660,
      Y: 445,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6489747709c781dc1f4722e5",
  },
  {
    timeStamp: 1686729828.845,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 660,
      Y: 445,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6489747709c781dc1f4722e6",
  },
  {
    timeStamp: 1686729828.883,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "D", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722e7",
  },
  {
    timeStamp: 1686729828.944,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 660,
      Y: 445,
      key: "Shift",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6489747709c781dc1f4722e8",
  },
  {
    timeStamp: 1686729828.983,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722e9",
  },
  {
    timeStamp: 1686729829.505,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722ea",
  },
  {
    timeStamp: 1686729829.598,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722eb",
  },
  {
    timeStamp: 1686729829.621,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722ec",
  },
  {
    timeStamp: 1686729829.729,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722ed",
  },
  {
    timeStamp: 1686729829.731,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722ee",
  },
  {
    timeStamp: 1686729829.815,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722ef",
  },
  {
    timeStamp: 1686729829.902,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f0",
  },
  {
    timeStamp: 1686729829.991,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f1",
  },
  {
    timeStamp: 1686729830.011,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f2",
  },
  {
    timeStamp: 1686729830.044,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f3",
  },
  {
    timeStamp: 1686729830.113,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f4",
  },
  {
    timeStamp: 1686729830.152,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f5",
  },
  {
    timeStamp: 1686729830.183,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f6",
  },
  {
    timeStamp: 1686729830.306,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f7",
  },
  {
    timeStamp: 1686729830.308,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f8",
  },
  {
    timeStamp: 1686729830.439,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722f9",
  },
  {
    timeStamp: 1686729830.607,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722fa",
  },
  {
    timeStamp: 1686729830.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722fb",
  },
  {
    timeStamp: 1686729830.736,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "o", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722fc",
  },
  {
    timeStamp: 1686729830.801,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "o", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722fd",
  },
  {
    timeStamp: 1686729830.925,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722fe",
  },
  {
    timeStamp: 1686729831.057,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f4722ff",
  },
  {
    timeStamp: 1686729831.318,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 660,
      Y: 445,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6489747709c781dc1f472300",
  },
  {
    timeStamp: 1686729831.383,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 660,
      Y: 445,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6489747709c781dc1f472301",
  },
  {
    timeStamp: 1686729831.383,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: "w", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f472302",
  },
  {
    timeStamp: 1686729831.518,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 660, Y: 445, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f472303",
  },
  {
    timeStamp: 1686729831.52,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: "w", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f472304",
  },
  {
    timeStamp: 1686729831.629,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 660, Y: 445, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6489747709c781dc1f472305",
  },
  {
    timeStamp: 1686729832.477,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 739,
      Y: 463,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6489747709c781dc1f472306",
  },
  {
    timeStamp: 1686729832.702,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 739,
      Y: 463,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6489747709c781dc1f472307",
  },
  {
    timeStamp: 1686729834.048,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 707,
      Y: 466,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6489747709c781dc1f472308",
  },
  {
    timeStamp: 1686729835.444,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 717,
      Y: 539,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 104px;"></textarea></div>',
    },
    _id: "6489747709c781dc1f472309",
  },
  {
    timeStamp: 1686729836.249,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 715,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 104px;"></textarea></div>',
    },
    _id: "6489747709c781dc1f47230a",
  },
  {
    timeStamp: 1686729837.044,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 713,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 104px;"></textarea></div>',
    },
    _id: "6489747709c781dc1f47230b",
  },
  {
    timeStamp: 1686729837.659,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 680,
      Y: 499,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47230c",
  },
  {
    timeStamp: 1686729837.894,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 680,
      Y: 499,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
      button: 0,
    },
    _id: "6489747709c781dc1f47230d",
  },
  {
    timeStamp: 1686729838.017,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "Control",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47230e",
  },
  {
    timeStamp: 1686729838.356,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "a",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47230f",
  },
  {
    timeStamp: 1686729838.439,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "Control",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472310",
  },
  {
    timeStamp: 1686729838.495,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "a",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472311",
  },
  {
    timeStamp: 1686729838.639,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "Shift",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472312",
  },
  {
    timeStamp: 1686729838.762,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "D",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472313",
  },
  {
    timeStamp: 1686729838.86,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "Shift",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472314",
  },
  {
    timeStamp: 1686729838.877,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "d",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472315",
  },
  {
    timeStamp: 1686729838.998,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "r",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472316",
  },
  {
    timeStamp: 1686729839.083,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "a",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472317",
  },
  {
    timeStamp: 1686729839.123,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "r",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472318",
  },
  {
    timeStamp: 1686729839.231,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "a",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472319",
  },
  {
    timeStamp: 1686729839.425,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "g",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47231a",
  },
  {
    timeStamp: 1686729839.503,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "g",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47231b",
  },
  {
    timeStamp: 1686729839.871,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "g",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47231c",
  },
  {
    timeStamp: 1686729839.989,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "g",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47231d",
  },
  {
    timeStamp: 1686729840.046,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "e",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47231e",
  },
  {
    timeStamp: 1686729840.201,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "d",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47231f",
  },
  {
    timeStamp: 1686729840.203,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "e",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472320",
  },
  {
    timeStamp: 1686729840.318,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "d",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472321",
  },
  {
    timeStamp: 1686729840.335,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: " ",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472322",
  },
  {
    timeStamp: 1686729840.372,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "Shift",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472323",
  },
  {
    timeStamp: 1686729840.445,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: " ",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472324",
  },
  {
    timeStamp: 1686729840.53,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "?",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472325",
  },
  {
    timeStamp: 1686729840.602,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "?",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472326",
  },
  {
    timeStamp: 1686729840.673,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "Shift",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472327",
  },
  {
    timeStamp: 1686729840.888,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "Control",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472328",
  },
  {
    timeStamp: 1686729840.988,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "a",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f472329",
  },
  {
    timeStamp: 1686729841.059,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "Control",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47232a",
  },
  {
    timeStamp: 1686729841.082,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 680,
      Y: 499,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47232b",
  },
  {
    timeStamp: 1686729841.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47232c",
  },
  {
    timeStamp: 1686729841.14,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 680,
      Y: 499,
      key: "a",
      HTMLElement: '<textarea style="height: 104px;"></textarea>',
    },
    _id: "6489747709c781dc1f47232d",
  },
  {
    timeStamp: 1686729842.66,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 657, Y: 189, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47232e",
  },
  {
    timeStamp: 1686729842.878,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 657,
      Y: 189,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6489747709c781dc1f47232f",
  },
  {
    timeStamp: 1686729843.271,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "o", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472330",
  },
  {
    timeStamp: 1686729843.379,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "o", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472331",
  },
  {
    timeStamp: 1686729843.433,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472332",
  },
  {
    timeStamp: 1686729843.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472333",
  },
  {
    timeStamp: 1686729843.754,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472334",
  },
  {
    timeStamp: 1686729843.833,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472335",
  },
  {
    timeStamp: 1686729843.938,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "k", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472336",
  },
  {
    timeStamp: 1686729844.023,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "k", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472337",
  },
  {
    timeStamp: 1686729844.064,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472338",
  },
  {
    timeStamp: 1686729844.227,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472339",
  },
  {
    timeStamp: 1686729844.228,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "w", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47233a",
  },
  {
    timeStamp: 1686729844.341,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "o", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47233b",
  },
  {
    timeStamp: 1686729844.342,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "w", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47233c",
  },
  {
    timeStamp: 1686729844.418,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "o", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47233d",
  },
  {
    timeStamp: 1686729844.419,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "r", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47233e",
  },
  {
    timeStamp: 1686729844.512,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "k", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47233f",
  },
  {
    timeStamp: 1686729844.513,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "r", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472340",
  },
  {
    timeStamp: 1686729844.583,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "k", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472341",
  },
  {
    timeStamp: 1686729845.004,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "e", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472342",
  },
  {
    timeStamp: 1686729845.138,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "d", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472343",
  },
  {
    timeStamp: 1686729845.168,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "e", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472344",
  },
  {
    timeStamp: 1686729845.247,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "d", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472345",
  },
  {
    timeStamp: 1686729845.275,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "Shift", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472346",
  },
  {
    timeStamp: 1686729845.294,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472347",
  },
  {
    timeStamp: 1686729845.395,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: " ", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472348",
  },
  {
    timeStamp: 1686729845.474,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472349",
  },
  {
    timeStamp: 1686729845.518,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47234a",
  },
  {
    timeStamp: 1686729845.605,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47234b",
  },
  {
    timeStamp: 1686729845.66,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "?", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47234c",
  },
  {
    timeStamp: 1686729845.694,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "Shift", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47234d",
  },
  {
    timeStamp: 1686729845.905,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "Control", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47234e",
  },
  {
    timeStamp: 1686729846.007,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "a", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f47234f",
  },
  {
    timeStamp: 1686729846.107,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "Control", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472350",
  },
  {
    timeStamp: 1686729846.121,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "a", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472351",
  },
  {
    timeStamp: 1686729846.14,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 657, Y: 189, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472352",
  },
  {
    timeStamp: 1686729846.199,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 657, Y: 189, key: "Backspace", HTMLElement: "<input>" },
    _id: "6489747709c781dc1f472353",
  },
  {
    timeStamp: 1686729846.979,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 907,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 104px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6489747709c781dc1f472354",
  },
  {
    timeStamp: 1686729847.208,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 907,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 104px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6489747709c781dc1f472355",
  },
  {
    timeStamp: 1686729847.756,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 33033 },
    _id: "6489747709c781dc1f472356",
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
    "http://localhost:3001/?session-replay=true",
    ["geolocation"]
  );

  await page.setViewport({
    width: 1280,
    height: 667,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3001/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 0px;}",
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
