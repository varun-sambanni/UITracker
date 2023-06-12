const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: 1686555143.543,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.34060000014305114 },
    _id: "6486ca1cd4e21510407d62e3",
  },
  {
    timeStamp: 1686555143.857,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "6486ca1cd4e21510407d62e4",
  },
  {
    timeStamp: 1686555145.193,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 1335.7999999523163 },
    _id: "6486ca1cd4e21510407d62e5",
  },
  {
    timeStamp: 1686555145.897,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 572,
      Y: 153,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6486ca1cd4e21510407d62e6",
  },
  {
    timeStamp: 1686555145.952,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 572,
      Y: 153,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "6486ca1cd4e21510407d62e7",
  },
  {
    timeStamp: 1686555146.533,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 576, Y: 157, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62e8",
  },
  {
    timeStamp: 1686555146.581,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 576,
      Y: 157,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6486ca1cd4e21510407d62e9",
  },
  {
    timeStamp: 1686555146.968,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "v", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62ea",
  },
  {
    timeStamp: 1686555147.053,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "v", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62eb",
  },
  {
    timeStamp: 1686555147.166,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62ec",
  },
  {
    timeStamp: 1686555147.237,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "r", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62ed",
  },
  {
    timeStamp: 1686555147.298,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62ee",
  },
  {
    timeStamp: 1686555147.353,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "u", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62ef",
  },
  {
    timeStamp: 1686555147.355,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "r", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f0",
  },
  {
    timeStamp: 1686555147.392,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "n", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f1",
  },
  {
    timeStamp: 1686555147.431,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "u", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f2",
  },
  {
    timeStamp: 1686555147.485,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "n", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f3",
  },
  {
    timeStamp: 1686555147.613,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "Control", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f4",
  },
  {
    timeStamp: 1686555147.73,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f5",
  },
  {
    timeStamp: 1686555147.78,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "Control", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f6",
  },
  {
    timeStamp: 1686555147.832,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f7",
  },
  {
    timeStamp: 1686555147.864,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 576, Y: 157, key: "Backspace", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f8",
  },
  {
    timeStamp: 1686555147.941,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 576, Y: 157, key: "Backspace", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d62f9",
  },
  {
    timeStamp: 1686555149.807,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 619,
      Y: 777,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6486ca1cd4e21510407d62fa",
  },
  {
    timeStamp: 1686555149.865,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "p00s3mpa-e2fo-6dsr-5fkz-qu4jghqu5dk5",
    },
    _id: "6486ca1cd4e21510407d62fb",
  },
  {
    timeStamp: 1686555149.866,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 619,
      Y: 777,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6486ca1cd4e21510407d62fc",
  },
  {
    timeStamp: 1686555152.097,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 635,
      Y: 785,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6486ca1cd4e21510407d62fd",
  },
  {
    timeStamp: 1686555152.15,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "czh1p2jj-6sbj-tf5a-1yms-uyjh5vggvwyw",
    },
    _id: "6486ca1cd4e21510407d62fe",
  },
  {
    timeStamp: 1686555152.151,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 635,
      Y: 785,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6486ca1cd4e21510407d62ff",
  },
  {
    timeStamp: 1686555153.256,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "p00s3mpa-e2fo-6dsr-5fkz-qu4jghqu5dk5",
      duration: 3390,
    },
    _id: "6486ca1cd4e21510407d6300",
  },
  {
    timeStamp: 1686555153.537,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 824,
      Y: 674,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6486ca1cd4e21510407d6301",
  },
  {
    timeStamp: 1686555153.577,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 824,
      Y: 429,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6486ca1cd4e21510407d6302",
  },
  {
    timeStamp: 1686555153.674,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 824,
      Y: 429,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6486ca1cd4e21510407d6303",
  },
  {
    timeStamp: 1686555153.702,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "czh1p2jj-6sbj-tf5a-1yms-uyjh5vggvwyw",
      duration: 1552,
    },
    _id: "6486ca1cd4e21510407d6304",
  },
  {
    timeStamp: 1686555154.579,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 824,
      Y: 674,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6486ca1cd4e21510407d6305",
  },
  {
    timeStamp: 1686555154.745,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 768,
      Y: 155,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6486ca1cd4e21510407d6306",
  },
  {
    timeStamp: 1686555154.798,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 768,
      Y: 155,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6486ca1cd4e21510407d6307",
  },
  {
    timeStamp: 1686555156.812,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 633,
      Y: 619,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6486ca1cd4e21510407d6308",
  },
  {
    timeStamp: 1686555156.891,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 633,
      Y: 619,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6486ca1cd4e21510407d6309",
  },
  {
    timeStamp: 1686555157.812,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 633,
      Y: 619,
      scrollX: 0,
      scrollY: 244.6666717529297,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6486ca1cd4e21510407d630a",
  },
  {
    timeStamp: 1686555158.918,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d630b",
  },
  {
    timeStamp: 1686555159.019,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d630c",
  },
  {
    timeStamp: 1686555159.065,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d630d",
  },
  {
    timeStamp: 1686555159.12,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "u", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d630e",
  },
  {
    timeStamp: 1686555159.121,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d630f",
  },
  {
    timeStamp: 1686555159.149,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6310",
  },
  {
    timeStamp: 1686555159.195,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6311",
  },
  {
    timeStamp: 1686555159.234,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "u", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6312",
  },
  {
    timeStamp: 1686555159.234,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6313",
  },
  {
    timeStamp: 1686555159.294,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "u", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6314",
  },
  {
    timeStamp: 1686555159.295,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6315",
  },
  {
    timeStamp: 1686555159.325,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6316",
  },
  {
    timeStamp: 1686555159.363,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6317",
  },
  {
    timeStamp: 1686555159.378,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6318",
  },
  {
    timeStamp: 1686555159.417,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "u", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d6319",
  },
  {
    timeStamp: 1686555159.455,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d631a",
  },
  {
    timeStamp: 1686555159.556,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 633,
      Y: 619,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6486ca1cd4e21510407d631b",
  },
  {
    timeStamp: 1686555159.667,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 633, Y: 619, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d631c",
  },
  {
    timeStamp: 1686555159.762,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 633,
      Y: 619,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6486ca1cd4e21510407d631d",
  },
  {
    timeStamp: 1686555159.762,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 633,
      Y: 619,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6486ca1cd4e21510407d631e",
  },
  {
    timeStamp: 1686555159.78,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 633, Y: 619, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6486ca1cd4e21510407d631f",
  },
  {
    timeStamp: 1686555159.87,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 633,
      Y: 619,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6486ca1cd4e21510407d6320",
  },
  {
    timeStamp: 1686555160.931,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 587, Y: 159, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6321",
  },
  {
    timeStamp: 1686555161.109,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6322",
  },
  {
    timeStamp: 1686555161.142,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 587,
      Y: 159,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6486ca1cd4e21510407d6323",
  },
  {
    timeStamp: 1686555161.235,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6324",
  },
  {
    timeStamp: 1686555161.236,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6325",
  },
  {
    timeStamp: 1686555161.282,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6326",
  },
  {
    timeStamp: 1686555161.387,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6327",
  },
  {
    timeStamp: 1686555161.387,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6328",
  },
  {
    timeStamp: 1686555161.387,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6329",
  },
  {
    timeStamp: 1686555161.439,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d632a",
  },
  {
    timeStamp: 1686555161.44,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "s", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d632b",
  },
  {
    timeStamp: 1686555161.474,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d632c",
  },
  {
    timeStamp: 1686555161.475,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "j", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d632d",
  },
  {
    timeStamp: 1686555161.476,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d632e",
  },
  {
    timeStamp: 1686555161.506,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "j", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d632f",
  },
  {
    timeStamp: 1686555161.506,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "s", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6330",
  },
  {
    timeStamp: 1686555161.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "k", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6331",
  },
  {
    timeStamp: 1686555161.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6332",
  },
  {
    timeStamp: 1686555161.582,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6333",
  },
  {
    timeStamp: 1686555161.604,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "j", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6334",
  },
  {
    timeStamp: 1686555161.641,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6335",
  },
  {
    timeStamp: 1686555161.671,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6336",
  },
  {
    timeStamp: 1686555161.72,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "j", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6337",
  },
  {
    timeStamp: 1686555161.749,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "d", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6338",
  },
  {
    timeStamp: 1686555161.817,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "Control", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d6339",
  },
  {
    timeStamp: 1686555161.923,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d633a",
  },
  {
    timeStamp: 1686555162.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "Control", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d633b",
  },
  {
    timeStamp: 1686555162.085,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 587, Y: 159, key: "Backspace", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d633c",
  },
  {
    timeStamp: 1686555162.088,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "a", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d633d",
  },
  {
    timeStamp: 1686555162.171,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 587, Y: 159, key: "Backspace", HTMLElement: "<input>" },
    _id: "6486ca1cd4e21510407d633e",
  },
  {
    timeStamp: 1686555163.96,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 1026,
      Y: 1,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<html lang="en"><head>\n    <script type="module">\n      // import UITracker from "./UITracker.js";\n      // const uiTracker = new UITracker();\n      // uiTracker.config(600000, false);\n      // uiTracker.start();\n    </script>\n    <meta charset="utf-8">\n    <link rel="icon" href="/favicon.ico">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="theme-color" content="#000000">\n    <meta name="description" content="Web site created using create-react-app">\n    <link rel="apple-touch-icon" href="/logo192.png">\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="/manifest.json">\n    <!--\n      Notice the use of  in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  <script defer="" src="/static/js/bundle.js"></script><style>\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */</style><style>body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  min-height: 4em;\n  border: 1px solid black;\n}\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4em;\n}\n\n.field {\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 0.4em;\n  min-width: 10em;\n}\n\n.buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  width: 10em;\n  margin: 0.6em auto;\n  border: 1px solid black;\n}\n\nbutton {\n  margin: 0.2em;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cblxuLmZpZWxkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgbWluLXdpZHRoOiAxMGVtO1xufVxuXG4uYnV0dG9uc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuNmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */</style></head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"><div class="App"><div class="header"><div>{"userId":1,"id":1,"title":"delectus aut autem","completed":false}</div></div><hr><div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  \n\n</body></html>',
    },
    _id: "6486ca1cd4e21510407d633f",
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
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3001/?session-replay=true", {
    waitUntil: "networkidle0",
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
