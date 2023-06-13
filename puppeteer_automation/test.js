const puppeteer = require("puppeteer");

const events = [
  {
    timeStamp: 1686633337.459,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3000/", DOMLoadTime: 0.4422999999523163 },
    _id: "6487fb9efa7c024bc17db428",
  },
  {
    timeStamp: 1686633339.197,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 556,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6487fb9efa7c024bc17db429",
  },
  {
    timeStamp: 1686633339.422,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 556,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db42a",
  },
  {
    timeStamp: 1686633339.789,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 530, Y: 181, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db42b",
  },
  {
    timeStamp: 1686633340.015,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 530,
      Y: 181,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db42c",
  },
  {
    timeStamp: 1686633340.151,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "c", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db42d",
  },
  {
    timeStamp: 1686633340.322,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "c", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db42e",
  },
  {
    timeStamp: 1686633340.364,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "h", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db42f",
  },
  {
    timeStamp: 1686633340.458,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "h", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db430",
  },
  {
    timeStamp: 1686633340.504,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "e", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db431",
  },
  {
    timeStamp: 1686633340.582,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "c", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db432",
  },
  {
    timeStamp: 1686633340.654,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "e", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db433",
  },
  {
    timeStamp: 1686633340.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "c", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db434",
  },
  {
    timeStamp: 1686633340.744,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "k", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db435",
  },
  {
    timeStamp: 1686633340.894,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "k", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db436",
  },
  {
    timeStamp: 1686633341.235,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "i", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db437",
  },
  {
    timeStamp: 1686633341.329,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "n", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db438",
  },
  {
    timeStamp: 1686633341.373,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "i", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db439",
  },
  {
    timeStamp: 1686633341.374,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "n", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db43a",
  },
  {
    timeStamp: 1686633341.374,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "g", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db43b",
  },
  {
    timeStamp: 1686633341.428,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: " ", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db43c",
  },
  {
    timeStamp: 1686633341.472,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "g", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db43d",
  },
  {
    timeStamp: 1686633341.537,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: " ", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db43e",
  },
  {
    timeStamp: 1686633341.675,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db43f",
  },
  {
    timeStamp: 1686633341.794,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db440",
  },
  {
    timeStamp: 1686633341.878,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db441",
  },
  {
    timeStamp: 1686633341.922,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db442",
  },
  {
    timeStamp: 1686633341.923,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db443",
  },
  {
    timeStamp: 1686633341.972,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db444",
  },
  {
    timeStamp: 1686633342.861,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "Tab", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db445",
  },
  {
    timeStamp: 1686633342.986,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "Tab", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db446",
  },
  {
    timeStamp: 1686633343.259,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db447",
  },
  {
    timeStamp: 1686633343.354,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db448",
  },
  {
    timeStamp: 1686633343.469,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "k", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db449",
  },
  {
    timeStamp: 1686633343.471,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "j", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db44a",
  },
  {
    timeStamp: 1686633343.472,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "s", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db44b",
  },
  {
    timeStamp: 1686633343.497,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db44c",
  },
  {
    timeStamp: 1686633343.545,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "j", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db44d",
  },
  {
    timeStamp: 1686633343.545,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "d", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db44e",
  },
  {
    timeStamp: 1686633343.598,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "k", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db44f",
  },
  {
    timeStamp: 1686633343.599,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "s", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db450",
  },
  {
    timeStamp: 1686633343.599,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db451",
  },
  {
    timeStamp: 1686633343.665,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "j", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db452",
  },
  {
    timeStamp: 1686633343.667,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "d", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db453",
  },
  {
    timeStamp: 1686633343.667,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db454",
  },
  {
    timeStamp: 1686633343.727,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "j", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db455",
  },
  {
    timeStamp: 1686633343.764,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "d", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db456",
  },
  {
    timeStamp: 1686633343.766,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db457",
  },
  {
    timeStamp: 1686633343.823,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "d", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db458",
  },
  {
    timeStamp: 1686633343.944,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db459",
  },
  {
    timeStamp: 1686633344.025,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db45a",
  },
  {
    timeStamp: 1686633344.099,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "Control", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db45b",
  },
  {
    timeStamp: 1686633344.099,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 530, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db45c",
  },
  {
    timeStamp: 1686633344.146,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db45d",
  },
  {
    timeStamp: 1686633344.172,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 530, Y: 181, key: "Backspace", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db45e",
  },
  {
    timeStamp: 1686633346.92,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 548,
      Y: 798,
      scrollX: 0,
      scrollY: 260,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6487fb9efa7c024bc17db45f",
  },
  {
    timeStamp: 1686633347.143,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "r2cjauxu-98la-jz5z-k9vo-8i9j6lb9845z",
    },
    _id: "6487fb9efa7c024bc17db460",
  },
  {
    timeStamp: 1686633347.144,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 548,
      Y: 798,
      scrollX: 0,
      scrollY: 260,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db461",
  },
  {
    timeStamp: 1686633347.324,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "r2cjauxu-98la-jz5z-k9vo-8i9j6lb9845z",
      duration: 179,
    },
    _id: "6487fb9efa7c024bc17db462",
  },
  {
    timeStamp: 1686633348.322,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 511, Y: 188, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db463",
  },
  {
    timeStamp: 1686633348.547,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 511,
      Y: 188,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db464",
  },
  {
    timeStamp: 1686633348.582,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "f", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db465",
  },
  {
    timeStamp: 1686633348.676,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db466",
  },
  {
    timeStamp: 1686633348.716,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "f", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db467",
  },
  {
    timeStamp: 1686633348.81,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db468",
  },
  {
    timeStamp: 1686633348.838,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db469",
  },
  {
    timeStamp: 1686633348.901,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db46a",
  },
  {
    timeStamp: 1686633349.112,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "c", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db46b",
  },
  {
    timeStamp: 1686633349.214,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "c", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db46c",
  },
  {
    timeStamp: 1686633349.298,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "h", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db46d",
  },
  {
    timeStamp: 1686633349.375,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db46e",
  },
  {
    timeStamp: 1686633349.398,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "h", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db46f",
  },
  {
    timeStamp: 1686633349.539,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "d", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db470",
  },
  {
    timeStamp: 1686633349.634,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db471",
  },
  {
    timeStamp: 1686633349.671,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "d", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db472",
  },
  {
    timeStamp: 1686633349.699,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db473",
  },
  {
    timeStamp: 1686633349.796,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "Shift", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db474",
  },
  {
    timeStamp: 1686633349.816,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db475",
  },
  {
    timeStamp: 1686633350.027,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "?", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db476",
  },
  {
    timeStamp: 1686633350.097,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "?", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db477",
  },
  {
    timeStamp: 1686633350.171,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "Shift", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db478",
  },
  {
    timeStamp: 1686633350.343,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "Control", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db479",
  },
  {
    timeStamp: 1686633350.473,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db47a",
  },
  {
    timeStamp: 1686633350.543,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "Control", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db47b",
  },
  {
    timeStamp: 1686633350.59,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "a", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db47c",
  },
  {
    timeStamp: 1686633350.621,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 511, Y: 188, key: "Backspace", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db47d",
  },
  {
    timeStamp: 1686633350.706,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 511, Y: 188, key: "Backspace", HTMLElement: "<input>" },
    _id: "6487fb9efa7c024bc17db47e",
  },
  {
    timeStamp: 1686633356.877,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 559,
      Y: 724,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: null,
    },
    _id: "6487fb9efa7c024bc17db47f",
  },
  {
    timeStamp: 1686633357.629,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 559,
      Y: 724,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: "<button>Alert </button>",
    },
    _id: "6487fb9efa7c024bc17db480",
  },
  {
    timeStamp: 1686633357.852,
    name: "USER_EVENT",
    type: "ALERT",
    data: { message: "Alert message" },
    _id: "6487fb9efa7c024bc17db481",
  },
  {
    timeStamp: 1686633359.371,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 559,
      Y: 724,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: "<button>Alert </button>",
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db482",
  },
  {
    timeStamp: 1686633359.372,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 559,
      Y: 724,
      scrollX: 0,
      scrollY: 299.3333435058594,
      HTMLElement: null,
    },
    _id: "6487fb9efa7c024bc17db483",
  },
  {
    timeStamp: 1686633360.694,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 494,
      Y: 452,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6487fb9efa7c024bc17db484",
  },
  {
    timeStamp: 1686633360.892,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 494,
      Y: 452,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db485",
  },
  {
    timeStamp: 1686633360.894,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 494,
      Y: 452,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6487fb9efa7c024bc17db486",
  },
  {
    timeStamp: 1686633361.124,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 494,
      Y: 452,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db487",
  },
  {
    timeStamp: 1686633361.302,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db488",
  },
  {
    timeStamp: 1686633361.437,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "A",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db489",
  },
  {
    timeStamp: 1686633361.513,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db48a",
  },
  {
    timeStamp: 1686633361.536,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db48b",
  },
  {
    timeStamp: 1686633361.651,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "l",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db48c",
  },
  {
    timeStamp: 1686633361.721,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "l",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db48d",
  },
  {
    timeStamp: 1686633361.721,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db48e",
  },
  {
    timeStamp: 1686633361.813,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db48f",
  },
  {
    timeStamp: 1686633361.89,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "e",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db490",
  },
  {
    timeStamp: 1686633361.934,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "r",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db491",
  },
  {
    timeStamp: 1686633362.049,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "t",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db492",
  },
  {
    timeStamp: 1686633362.165,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db493",
  },
  {
    timeStamp: 1686633362.167,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "t",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db494",
  },
  {
    timeStamp: 1686633362.251,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db495",
  },
  {
    timeStamp: 1686633362.272,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: " ",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db496",
  },
  {
    timeStamp: 1686633362.487,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db497",
  },
  {
    timeStamp: 1686633362.518,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db498",
  },
  {
    timeStamp: 1686633362.605,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db499",
  },
  {
    timeStamp: 1686633362.651,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db49a",
  },
  {
    timeStamp: 1686633362.737,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db49b",
  },
  {
    timeStamp: 1686633362.775,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "?",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db49c",
  },
  {
    timeStamp: 1686633362.896,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "Shift",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db49d",
  },
  {
    timeStamp: 1686633363.095,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db49e",
  },
  {
    timeStamp: 1686633363.204,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db49f",
  },
  {
    timeStamp: 1686633363.266,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "Control",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db4a0",
  },
  {
    timeStamp: 1686633363.336,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 494,
      Y: 452,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db4a1",
  },
  {
    timeStamp: 1686633363.338,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db4a2",
  },
  {
    timeStamp: 1686633363.401,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 494,
      Y: 452,
      key: "Backspace",
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div>',
    },
    _id: "6487fb9efa7c024bc17db4a3",
  },
  {
    timeStamp: 1686633364.612,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 562,
      Y: 466,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6487fb9efa7c024bc17db4a4",
  },
  {
    timeStamp: 1686633365.14,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 575,
      Y: 740,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 304px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6487fb9efa7c024bc17db4a5",
  },
  {
    timeStamp: 1686633365.617,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 496,
      Y: 522,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4a6",
  },
  {
    timeStamp: 1686633365.734,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4a7",
  },
  {
    timeStamp: 1686633365.844,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 496,
      Y: 522,
      scrollX: 0,
      scrollY: 133.3333282470703,
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db4a8",
  },
  {
    timeStamp: 1686633365.933,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "D",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4a9",
  },
  {
    timeStamp: 1686633366.001,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4aa",
  },
  {
    timeStamp: 1686633366.049,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "d",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ab",
  },
  {
    timeStamp: 1686633366.142,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "r",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ac",
  },
  {
    timeStamp: 1686633366.219,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "a",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ad",
  },
  {
    timeStamp: 1686633366.25,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "r",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ae",
  },
  {
    timeStamp: 1686633366.326,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "a",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4af",
  },
  {
    timeStamp: 1686633366.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "g",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b0",
  },
  {
    timeStamp: 1686633366.43,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "g",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b1",
  },
  {
    timeStamp: 1686633366.539,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "g",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b2",
  },
  {
    timeStamp: 1686633366.617,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "e",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b3",
  },
  {
    timeStamp: 1686633366.631,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "g",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b4",
  },
  {
    timeStamp: 1686633366.794,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "d",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b5",
  },
  {
    timeStamp: 1686633366.82,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "e",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b6",
  },
  {
    timeStamp: 1686633366.873,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "d",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b7",
  },
  {
    timeStamp: 1686633366.904,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: " ",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b8",
  },
  {
    timeStamp: 1686633366.972,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4b9",
  },
  {
    timeStamp: 1686633367,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: " ",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ba",
  },
  {
    timeStamp: 1686633367.069,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: ">",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4bb",
  },
  {
    timeStamp: 1686633367.149,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: ">",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4bc",
  },
  {
    timeStamp: 1686633367.92,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4bd",
  },
  {
    timeStamp: 1686633367.99,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4be",
  },
  {
    timeStamp: 1686633368.123,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "?",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4bf",
  },
  {
    timeStamp: 1686633368.232,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "?",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c0",
  },
  {
    timeStamp: 1686633368.33,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c1",
  },
  {
    timeStamp: 1686633368.469,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Control",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c2",
  },
  {
    timeStamp: 1686633368.61,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "a",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c3",
  },
  {
    timeStamp: 1686633368.648,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Control",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c4",
  },
  {
    timeStamp: 1686633368.742,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "a",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c5",
  },
  {
    timeStamp: 1686633369.263,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c6",
  },
  {
    timeStamp: 1686633369.657,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c7",
  },
  {
    timeStamp: 1686633369.935,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c8",
  },
  {
    timeStamp: 1686633370.012,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4c9",
  },
  {
    timeStamp: 1686633370.199,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "w",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ca",
  },
  {
    timeStamp: 1686633370.308,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "w",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4cb",
  },
  {
    timeStamp: 1686633370.378,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "o",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4cc",
  },
  {
    timeStamp: 1686633370.449,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "o",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4cd",
  },
  {
    timeStamp: 1686633370.473,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "r",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4ce",
  },
  {
    timeStamp: 1686633370.566,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "k",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4cf",
  },
  {
    timeStamp: 1686633370.567,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "r",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d0",
  },
  {
    timeStamp: 1686633370.629,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "k",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d1",
  },
  {
    timeStamp: 1686633370.675,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "e",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d2",
  },
  {
    timeStamp: 1686633370.757,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "d",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d3",
  },
  {
    timeStamp: 1686633370.796,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "e",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d4",
  },
  {
    timeStamp: 1686633370.866,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "d",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d5",
  },
  {
    timeStamp: 1686633371.089,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d6",
  },
  {
    timeStamp: 1686633371.31,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d7",
  },
  {
    timeStamp: 1686633371.33,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: " ",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d8",
  },
  {
    timeStamp: 1686633371.411,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4d9",
  },
  {
    timeStamp: 1686633371.446,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: " ",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4da",
  },
  {
    timeStamp: 1686633371.5,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "?",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4db",
  },
  {
    timeStamp: 1686633371.601,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "?",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4dc",
  },
  {
    timeStamp: 1686633371.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Shift",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4dd",
  },
  {
    timeStamp: 1686633371.899,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Control",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4de",
  },
  {
    timeStamp: 1686633372.055,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "a",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4df",
  },
  {
    timeStamp: 1686633372.225,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Control",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4e0",
  },
  {
    timeStamp: 1686633372.244,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "a",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4e1",
  },
  {
    timeStamp: 1686633372.423,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 496,
      Y: 522,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4e2",
  },
  {
    timeStamp: 1686633372.525,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 496,
      Y: 522,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 304px;"></textarea>',
    },
    _id: "6487fb9efa7c024bc17db4e3",
  },
  {
    timeStamp: 1686633373.456,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 809,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 304px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6487fb9efa7c024bc17db4e4",
  },
  {
    timeStamp: 1686633373.679,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 809,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 304px;"></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6487fb9efa7c024bc17db4e5",
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
