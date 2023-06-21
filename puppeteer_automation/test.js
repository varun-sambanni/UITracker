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
    timeStamp: 1687336297.661,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.4003999999985099 },
    _id: "6492b5b14eb6b1e079b65b4d",
  },
  {
    timeStamp: 1687336298.476,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 280, Y: 230, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b4e",
  },
  {
    timeStamp: 1687336298.703,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 280,
      Y: 230,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65b4f",
  },
  {
    timeStamp: 1687336298.839,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b50",
  },
  {
    timeStamp: 1687336298.908,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b51",
  },
  {
    timeStamp: 1687336298.951,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b52",
  },
  {
    timeStamp: 1687336299.074,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b53",
  },
  {
    timeStamp: 1687336299.624,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b54",
  },
  {
    timeStamp: 1687336299.693,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b55",
  },
  {
    timeStamp: 1687336299.76,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b56",
  },
  {
    timeStamp: 1687336299.846,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b57",
  },
  {
    timeStamp: 1687336299.867,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "r", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b58",
  },
  {
    timeStamp: 1687336299.948,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b59",
  },
  {
    timeStamp: 1687336299.974,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "r", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b5a",
  },
  {
    timeStamp: 1687336300.023,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b5b",
  },
  {
    timeStamp: 1687336300.138,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "u", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b5c",
  },
  {
    timeStamp: 1687336300.208,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "u", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b5d",
  },
  {
    timeStamp: 1687336300.231,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "b", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b5e",
  },
  {
    timeStamp: 1687336300.293,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "b", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b5f",
  },
  {
    timeStamp: 1687336300.991,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "u", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b60",
  },
  {
    timeStamp: 1687336301.069,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "u", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b61",
  },
  {
    timeStamp: 1687336301.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b62",
  },
  {
    timeStamp: 1687336301.242,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b63",
  },
  {
    timeStamp: 1687336301.279,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b64",
  },
  {
    timeStamp: 1687336301.334,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b65",
  },
  {
    timeStamp: 1687336301.335,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b66",
  },
  {
    timeStamp: 1687336301.457,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b67",
  },
  {
    timeStamp: 1687336301.457,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b68",
  },
  {
    timeStamp: 1687336301.488,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b69",
  },
  {
    timeStamp: 1687336301.544,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b6a",
  },
  {
    timeStamp: 1687336301.564,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b6b",
  },
  {
    timeStamp: 1687336301.72,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b6c",
  },
  {
    timeStamp: 1687336301.838,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b6d",
  },
  {
    timeStamp: 1687336302.112,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b6e",
  },
  {
    timeStamp: 1687336302.258,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b6f",
  },
  {
    timeStamp: 1687336302.372,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b70",
  },
  {
    timeStamp: 1687336302.492,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b71",
  },
  {
    timeStamp: 1687336302.651,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "r", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b72",
  },
  {
    timeStamp: 1687336302.745,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "r", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b73",
  },
  {
    timeStamp: 1687336303.036,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b74",
  },
  {
    timeStamp: 1687336303.113,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b75",
  },
  {
    timeStamp: 1687336303.17,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "b", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b76",
  },
  {
    timeStamp: 1687336303.241,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "b", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b77",
  },
  {
    timeStamp: 1687336303.332,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "u", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b78",
  },
  {
    timeStamp: 1687336303.41,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "u", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b79",
  },
  {
    timeStamp: 1687336303.524,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b7a",
  },
  {
    timeStamp: 1687336303.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b7b",
  },
  {
    timeStamp: 1687336303.639,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b7c",
  },
  {
    timeStamp: 1687336303.714,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b7d",
  },
  {
    timeStamp: 1687336303.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b7e",
  },
  {
    timeStamp: 1687336303.826,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b7f",
  },
  {
    timeStamp: 1687336303.826,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b80",
  },
  {
    timeStamp: 1687336303.896,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b81",
  },
  {
    timeStamp: 1687336303.934,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b82",
  },
  {
    timeStamp: 1687336304.003,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b83",
  },
  {
    timeStamp: 1687336304.17,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b84",
  },
  {
    timeStamp: 1687336304.265,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b85",
  },
  {
    timeStamp: 1687336304.31,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b86",
  },
  {
    timeStamp: 1687336304.327,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b87",
  },
  {
    timeStamp: 1687336304.374,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "i", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b88",
  },
  {
    timeStamp: 1687336304.419,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "n", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b89",
  },
  {
    timeStamp: 1687336304.481,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "i", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b8a",
  },
  {
    timeStamp: 1687336304.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "g", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b8b",
  },
  {
    timeStamp: 1687336304.522,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "n", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b8c",
  },
  {
    timeStamp: 1687336304.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b8d",
  },
  {
    timeStamp: 1687336304.589,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "g", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b8e",
  },
  {
    timeStamp: 1687336304.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b8f",
  },
  {
    timeStamp: 1687336304.668,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "w", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b90",
  },
  {
    timeStamp: 1687336304.744,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "i", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b91",
  },
  {
    timeStamp: 1687336304.772,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "w", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b92",
  },
  {
    timeStamp: 1687336304.813,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "i", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b93",
  },
  {
    timeStamp: 1687336304.853,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b94",
  },
  {
    timeStamp: 1687336304.917,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "h", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b95",
  },
  {
    timeStamp: 1687336304.947,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b96",
  },
  {
    timeStamp: 1687336305.01,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "h", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b97",
  },
  {
    timeStamp: 1687336305.026,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b98",
  },
  {
    timeStamp: 1687336305.119,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b99",
  },
  {
    timeStamp: 1687336305.119,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "c", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b9a",
  },
  {
    timeStamp: 1687336305.218,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "c", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b9b",
  },
  {
    timeStamp: 1687336305.288,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "h", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b9c",
  },
  {
    timeStamp: 1687336305.333,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "r", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b9d",
  },
  {
    timeStamp: 1687336305.364,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "h", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b9e",
  },
  {
    timeStamp: 1687336305.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "r", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65b9f",
  },
  {
    timeStamp: 1687336305.538,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba0",
  },
  {
    timeStamp: 1687336305.614,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "m", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba1",
  },
  {
    timeStamp: 1687336305.661,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba2",
  },
  {
    timeStamp: 1687336305.69,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba3",
  },
  {
    timeStamp: 1687336305.713,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "m", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba4",
  },
  {
    timeStamp: 1687336305.791,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba5",
  },
  {
    timeStamp: 1687336306.029,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba6",
  },
  {
    timeStamp: 1687336306.164,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba7",
  },
  {
    timeStamp: 1687336306.263,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba8",
  },
  {
    timeStamp: 1687336306.264,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 280, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ba9",
  },
  {
    timeStamp: 1687336306.313,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65baa",
  },
  {
    timeStamp: 1687336306.313,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 280, Y: 230, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bab",
  },
  {
    timeStamp: 1687336307.444,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 54,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "6492b5b14eb6b1e079b65bac",
  },
  {
    timeStamp: 1687336307.665,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 54,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bad",
  },
  {
    timeStamp: 1687336308.292,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 55,
      Y: 135,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      value: "2",
    },
    _id: "6492b5b14eb6b1e079b65bae",
  },
  {
    timeStamp: 1687336308.293,
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
    _id: "6492b5b14eb6b1e079b65baf",
  },
  {
    timeStamp: 1687336309.056,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 72,
      Y: 123,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "6492b5b14eb6b1e079b65bb0",
  },
  {
    timeStamp: 1687336309.533,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 57,
      Y: 180,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6492b5b14eb6b1e079b65bb1",
  },
  {
    timeStamp: 1687336309.957,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 57,
      Y: 180,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      value: "3",
    },
    _id: "6492b5b14eb6b1e079b65bb2",
  },
  {
    timeStamp: 1687336309.958,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 18,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6492b5b14eb6b1e079b65bb3",
  },
  {
    timeStamp: 1687336310.624,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 192,
      Y: 120,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6492b5b14eb6b1e079b65bb4",
  },
  {
    timeStamp: 1687336310.85,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 192,
      Y: 120,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bb5",
  },
  {
    timeStamp: 1687336311.454,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 68,
      Y: 126,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "6492b5b14eb6b1e079b65bb6",
  },
  {
    timeStamp: 1687336311.653,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 68,
      Y: 126,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bb7",
  },
  {
    timeStamp: 1687336312.296,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 68,
      Y: 134,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      value: "2",
    },
    _id: "6492b5b14eb6b1e079b65bb8",
  },
  {
    timeStamp: 1687336312.297,
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
    _id: "6492b5b14eb6b1e079b65bb9",
  },
  {
    timeStamp: 1687336313.001,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 328, Y: 230, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bba",
  },
  {
    timeStamp: 1687336313.227,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 328,
      Y: 230,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bbb",
  },
  {
    timeStamp: 1687336313.911,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 114,
      Y: 222,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox2">Option 2</label>',
    },
    _id: "6492b5b14eb6b1e079b65bbc",
  },
  {
    timeStamp: 1687336314.128,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 114,
      Y: 222,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox2">Option 2</label>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bbd",
  },
  {
    timeStamp: 1687336314.129,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 114,
      Y: 222,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox2">Option 2</label>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bbe",
  },
  {
    timeStamp: 1687336314.129,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 114,
      Y: 222,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<label for="checkbox2">Option 2</label>',
      checked: true,
    },
    _id: "6492b5b14eb6b1e079b65bbf",
  },
  {
    timeStamp: 1687336314.82,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 90,
      Y: 214,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
    },
    _id: "6492b5b14eb6b1e079b65bc0",
  },
  {
    timeStamp: 1687336315.051,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 90,
      Y: 214,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bc1",
  },
  {
    timeStamp: 1687336315.052,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 90,
      Y: 214,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox1">',
      checked: true,
    },
    _id: "6492b5b14eb6b1e079b65bc2",
  },
  {
    timeStamp: 1687336315.787,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 169,
      Y: 256,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
    },
    _id: "6492b5b14eb6b1e079b65bc3",
  },
  {
    timeStamp: 1687336316.009,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 169,
      Y: 256,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bc4",
  },
  {
    timeStamp: 1687336316.01,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 169,
      Y: 256,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio" name="radio">',
      checked: true,
    },
    _id: "6492b5b14eb6b1e079b65bc5",
  },
  {
    timeStamp: 1687336316.562,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 174,
      Y: 210,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div>',
    },
    _id: "6492b5b14eb6b1e079b65bc6",
  },
  {
    timeStamp: 1687336316.788,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 174,
      Y: 210,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bc7",
  },
  {
    timeStamp: 1687336317.993,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 169,
      Y: 211,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6492b5b14eb6b1e079b65bc8",
  },
  {
    timeStamp: 1687336318.221,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 169,
      Y: 211,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bc9",
  },
  {
    timeStamp: 1687336318.221,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 169,
      Y: 211,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: false,
    },
    _id: "6492b5b14eb6b1e079b65bca",
  },
  {
    timeStamp: 1687336318.9,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 108,
      Y: 163,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6492b5b14eb6b1e079b65bcb",
  },
  {
    timeStamp: 1687336319.124,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 108,
      Y: 163,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bcc",
  },
  {
    timeStamp: 1687336319.628,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 117,
      Y: 168,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
    },
    _id: "6492b5b14eb6b1e079b65bcd",
  },
  {
    timeStamp: 1687336319.847,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 117,
      Y: 168,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bce",
  },
  {
    timeStamp: 1687336320.896,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 118,
      Y: 176,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="date">',
      value: "2023-06-07",
    },
    _id: "6492b5b14eb6b1e079b65bcf",
  },
  {
    timeStamp: 1687336321.807,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 190,
      Y: 171,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "6492b5b14eb6b1e079b65bd0",
  },
  {
    timeStamp: 1687336322.039,
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
    _id: "6492b5b14eb6b1e079b65bd1",
  },
  {
    timeStamp: 1687336323.303,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 188,
      Y: 180,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="time">',
    },
    _id: "6492b5b14eb6b1e079b65bd2",
  },
  {
    timeStamp: 1687336324.222,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 325,
      Y: 184,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "6492b5b14eb6b1e079b65bd3",
  },
  {
    timeStamp: 1687336324.223,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 325,
      Y: 184,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      value: "17:05",
    },
    _id: "6492b5b14eb6b1e079b65bd4",
  },
  {
    timeStamp: 1687336324.435,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 325,
      Y: 184,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bd5",
  },
  {
    timeStamp: 1687336325.41,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 331,
      Y: 308,
      scrollX: 0,
      scrollY: 90,
      HTMLElement: '<input type="password">',
    },
    _id: "6492b5b14eb6b1e079b65bd6",
  },
  {
    timeStamp: 1687336325.56,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bd7",
  },
  {
    timeStamp: 1687336325.638,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 331,
      Y: 308,
      scrollX: 0,
      scrollY: 90,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bd8",
  },
  {
    timeStamp: 1687336325.653,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "d", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bd9",
  },
  {
    timeStamp: 1687336325.654,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "s", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bda",
  },
  {
    timeStamp: 1687336325.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bdb",
  },
  {
    timeStamp: 1687336325.746,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "s", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bdc",
  },
  {
    timeStamp: 1687336325.798,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "d", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bdd",
  },
  {
    timeStamp: 1687336325.798,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bde",
  },
  {
    timeStamp: 1687336325.874,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "s", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bdf",
  },
  {
    timeStamp: 1687336325.883,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "d", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be0",
  },
  {
    timeStamp: 1687336325.952,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "s", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be1",
  },
  {
    timeStamp: 1687336325.952,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be2",
  },
  {
    timeStamp: 1687336325.97,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "k", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be3",
  },
  {
    timeStamp: 1687336326.011,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "j", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be4",
  },
  {
    timeStamp: 1687336326.038,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "d", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be5",
  },
  {
    timeStamp: 1687336326.067,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be6",
  },
  {
    timeStamp: 1687336326.146,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "k", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be7",
  },
  {
    timeStamp: 1687336326.147,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "j", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be8",
  },
  {
    timeStamp: 1687336326.147,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "d", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65be9",
  },
  {
    timeStamp: 1687336326.206,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "s", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bea",
  },
  {
    timeStamp: 1687336326.252,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65beb",
  },
  {
    timeStamp: 1687336326.267,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "d", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bec",
  },
  {
    timeStamp: 1687336326.291,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "s", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bed",
  },
  {
    timeStamp: 1687336326.4,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 331,
      Y: 308,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "6492b5b14eb6b1e079b65bee",
  },
  {
    timeStamp: 1687336326.543,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bef",
  },
  {
    timeStamp: 1687336326.637,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 331,
      Y: 308,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "6492b5b14eb6b1e079b65bf0",
  },
  {
    timeStamp: 1687336326.638,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 331,
      Y: 308,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "6492b5b14eb6b1e079b65bf1",
  },
  {
    timeStamp: 1687336326.669,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 331, Y: 308, key: "a", HTMLElement: '<input type="password">' },
    _id: "6492b5b14eb6b1e079b65bf2",
  },
  {
    timeStamp: 1687336326.699,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 331,
      Y: 308,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "6492b5b14eb6b1e079b65bf3",
  },
  {
    timeStamp: 1687336327.704,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 301,
      Y: 380,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: "<input>",
    },
    _id: "6492b5b14eb6b1e079b65bf4",
  },
  {
    timeStamp: 1687336327.939,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 301,
      Y: 380,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65bf5",
  },
  {
    timeStamp: 1687336328.168,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bf6",
  },
  {
    timeStamp: 1687336328.201,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "k", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bf7",
  },
  {
    timeStamp: 1687336328.237,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bf8",
  },
  {
    timeStamp: 1687336328.268,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bf9",
  },
  {
    timeStamp: 1687336328.311,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bfa",
  },
  {
    timeStamp: 1687336328.338,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "j", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bfb",
  },
  {
    timeStamp: 1687336328.34,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bfc",
  },
  {
    timeStamp: 1687336328.359,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "k", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bfd",
  },
  {
    timeStamp: 1687336328.359,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "j", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bfe",
  },
  {
    timeStamp: 1687336328.402,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65bff",
  },
  {
    timeStamp: 1687336328.402,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c00",
  },
  {
    timeStamp: 1687336328.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "j", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c01",
  },
  {
    timeStamp: 1687336328.483,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c02",
  },
  {
    timeStamp: 1687336328.484,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c03",
  },
  {
    timeStamp: 1687336328.533,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "s", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c04",
  },
  {
    timeStamp: 1687336328.533,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c05",
  },
  {
    timeStamp: 1687336328.555,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "j", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c06",
  },
  {
    timeStamp: 1687336328.594,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c07",
  },
  {
    timeStamp: 1687336328.67,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c08",
  },
  {
    timeStamp: 1687336328.773,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c09",
  },
  {
    timeStamp: 1687336328.837,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 301, Y: 380, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c0a",
  },
  {
    timeStamp: 1687336328.855,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c0b",
  },
  {
    timeStamp: 1687336328.905,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c0c",
  },
  {
    timeStamp: 1687336328.905,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 301, Y: 380, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c0d",
  },
  {
    timeStamp: 1687336330.224,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 413,
      Y: 465,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6492b5b14eb6b1e079b65c0e",
  },
  {
    timeStamp: 1687336330.555,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 422,
      Y: 594,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 160px;"></textarea></div>',
    },
    _id: "6492b5b14eb6b1e079b65c0f",
  },
  {
    timeStamp: 1687336330.966,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 342,
      Y: 520,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c10",
  },
  {
    timeStamp: 1687336331.11,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "d",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c11",
  },
  {
    timeStamp: 1687336331.191,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 342,
      Y: 520,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c12",
  },
  {
    timeStamp: 1687336331.236,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "d",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c13",
  },
  {
    timeStamp: 1687336331.366,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "r",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c14",
  },
  {
    timeStamp: 1687336331.423,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "a",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c15",
  },
  {
    timeStamp: 1687336331.471,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "r",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c16",
  },
  {
    timeStamp: 1687336331.56,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "a",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c17",
  },
  {
    timeStamp: 1687336331.576,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "g",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c18",
  },
  {
    timeStamp: 1687336331.678,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "g",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c19",
  },
  {
    timeStamp: 1687336331.777,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "g",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c1a",
  },
  {
    timeStamp: 1687336331.862,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "e",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c1b",
  },
  {
    timeStamp: 1687336331.877,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "g",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c1c",
  },
  {
    timeStamp: 1687336332.002,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "d",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c1d",
  },
  {
    timeStamp: 1687336332.002,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "e",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c1e",
  },
  {
    timeStamp: 1687336332.098,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: " ",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c1f",
  },
  {
    timeStamp: 1687336332.099,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "d",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c20",
  },
  {
    timeStamp: 1687336332.16,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "Shift",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c21",
  },
  {
    timeStamp: 1687336332.198,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: " ",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c22",
  },
  {
    timeStamp: 1687336332.268,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "?",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c23",
  },
  {
    timeStamp: 1687336332.33,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "?",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c24",
  },
  {
    timeStamp: 1687336332.365,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "Shift",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c25",
  },
  {
    timeStamp: 1687336332.486,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "Control",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c26",
  },
  {
    timeStamp: 1687336332.577,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "a",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c27",
  },
  {
    timeStamp: 1687336332.612,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 342,
      Y: 520,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c28",
  },
  {
    timeStamp: 1687336332.669,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "Control",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c29",
  },
  {
    timeStamp: 1687336332.669,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c2a",
  },
  {
    timeStamp: 1687336332.692,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 342,
      Y: 520,
      key: "a",
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c2b",
  },
  {
    timeStamp: 1687336334.188,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 415,
      Y: 601,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<textarea style="height: 160px;"></textarea>',
    },
    _id: "6492b5b14eb6b1e079b65c2c",
  },
  {
    timeStamp: 1687336334.766,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 422,
      Y: 480,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 39px;"></textarea></div>',
    },
    _id: "6492b5b14eb6b1e079b65c2d",
  },
  {
    timeStamp: 1687336335.815,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 377,
      Y: 549,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="search">',
    },
    _id: "6492b5b14eb6b1e079b65c2e",
  },
  {
    timeStamp: 1687336336.041,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 377,
      Y: 549,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c2f",
  },
  {
    timeStamp: 1687336336.154,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "a", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c30",
  },
  {
    timeStamp: 1687336336.193,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "s", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c31",
  },
  {
    timeStamp: 1687336336.225,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "d", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c32",
  },
  {
    timeStamp: 1687336336.276,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "k", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c33",
  },
  {
    timeStamp: 1687336336.278,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "s", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c34",
  },
  {
    timeStamp: 1687336336.278,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "a", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c35",
  },
  {
    timeStamp: 1687336336.355,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "d", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c36",
  },
  {
    timeStamp: 1687336336.376,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "a", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c37",
  },
  {
    timeStamp: 1687336336.454,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "j", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c38",
  },
  {
    timeStamp: 1687336336.456,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "d", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c39",
  },
  {
    timeStamp: 1687336336.457,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "s", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c3a",
  },
  {
    timeStamp: 1687336336.483,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "a", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c3b",
  },
  {
    timeStamp: 1687336336.515,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "j", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c3c",
  },
  {
    timeStamp: 1687336336.515,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "s", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c3d",
  },
  {
    timeStamp: 1687336336.538,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "k", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c3e",
  },
  {
    timeStamp: 1687336336.565,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "d", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c3f",
  },
  {
    timeStamp: 1687336336.565,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "a", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c40",
  },
  {
    timeStamp: 1687336336.635,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 377, Y: 549, key: "d", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c41",
  },
  {
    timeStamp: 1687336336.664,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "a", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c42",
  },
  {
    timeStamp: 1687336336.736,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 377, Y: 549, key: "d", HTMLElement: '<input type="search">' },
    _id: "6492b5b14eb6b1e079b65c43",
  },
  {
    timeStamp: 1687336338.267,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 410,
      Y: 553,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="search">',
    },
    _id: "6492b5b14eb6b1e079b65c44",
  },
  {
    timeStamp: 1687336338.479,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 410,
      Y: 553,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c45",
  },
  {
    timeStamp: 1687336339.159,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 386,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c46",
  },
  {
    timeStamp: 1687336339.386,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 386,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c47",
  },
  {
    timeStamp: 1687336340.092,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c48",
  },
  {
    timeStamp: 1687336340.236,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c49",
  },
  {
    timeStamp: 1687336340.237,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c4a",
  },
  {
    timeStamp: 1687336340.372,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c4b",
  },
  {
    timeStamp: 1687336340.373,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c4c",
  },
  {
    timeStamp: 1687336340.528,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c4d",
  },
  {
    timeStamp: 1687336340.529,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c4e",
  },
  {
    timeStamp: 1687336340.658,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c4f",
  },
  {
    timeStamp: 1687336340.659,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c50",
  },
  {
    timeStamp: 1687336340.814,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c51",
  },
  {
    timeStamp: 1687336340.816,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c52",
  },
  {
    timeStamp: 1687336340.95,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c53",
  },
  {
    timeStamp: 1687336340.951,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c54",
  },
  {
    timeStamp: 1687336341.086,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c55",
  },
  {
    timeStamp: 1687336341.088,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c56",
  },
  {
    timeStamp: 1687336341.228,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c57",
  },
  {
    timeStamp: 1687336341.231,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c58",
  },
  {
    timeStamp: 1687336341.36,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c59",
  },
  {
    timeStamp: 1687336341.364,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c5a",
  },
  {
    timeStamp: 1687336341.497,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c5b",
  },
  {
    timeStamp: 1687336341.499,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c5c",
  },
  {
    timeStamp: 1687336341.647,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c5d",
  },
  {
    timeStamp: 1687336341.649,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c5e",
  },
  {
    timeStamp: 1687336341.772,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c5f",
  },
  {
    timeStamp: 1687336341.774,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c60",
  },
  {
    timeStamp: 1687336341.941,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c61",
  },
  {
    timeStamp: 1687336341.943,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c62",
  },
  {
    timeStamp: 1687336342.076,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c63",
  },
  {
    timeStamp: 1687336342.077,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c64",
  },
  {
    timeStamp: 1687336342.244,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c65",
  },
  {
    timeStamp: 1687336342.246,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c66",
  },
  {
    timeStamp: 1687336342.399,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c67",
  },
  {
    timeStamp: 1687336342.4,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c68",
  },
  {
    timeStamp: 1687336342.627,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c69",
  },
  {
    timeStamp: 1687336342.866,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c6a",
  },
  {
    timeStamp: 1687336343.119,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c6b",
  },
  {
    timeStamp: 1687336343.119,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c6c",
  },
  {
    timeStamp: 1687336343.341,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c6d",
  },
  {
    timeStamp: 1687336343.418,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
    },
    _id: "6492b5b14eb6b1e079b65c6e",
  },
  {
    timeStamp: 1687336343.636,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 578,
      scrollX: 0,
      scrollY: 139.3333282470703,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c6f",
  },
  {
    timeStamp: 1687336346.496,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 330,
      Y: 730,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6492b5b14eb6b1e079b65c70",
  },
  {
    timeStamp: 1687336346.726,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 330,
      Y: 730,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>Fetch</button>",
      value: "2",
    },
    _id: "6492b5b14eb6b1e079b65c71",
  },
  {
    timeStamp: 1687336346.726,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "s8e2ceej-x823-4krb-tvbu-xgg3s98r5hkx",
    },
    _id: "6492b5b14eb6b1e079b65c72",
  },
  {
    timeStamp: 1687336346.728,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 330,
      Y: 730,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c73",
  },
  {
    timeStamp: 1687336346.886,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "s8e2ceej-x823-4krb-tvbu-xgg3s98r5hkx",
      duration: 159,
    },
    _id: "6492b5b14eb6b1e079b65c74",
  },
  {
    timeStamp: 1687336349.642,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 320,
      Y: 758,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>XMLHttpRequest</button>",
    },
    _id: "6492b5b14eb6b1e079b65c75",
  },
  {
    timeStamp: 1687336349.86,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "u6a747x7-ktou-mf8i-xqw1-gpvyw0ddf8f2",
    },
    _id: "6492b5b14eb6b1e079b65c76",
  },
  {
    timeStamp: 1687336349.861,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 320,
      Y: 758,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>XMLHttpRequest</button>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c77",
  },
  {
    timeStamp: 1687336349.996,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 137,
      id: "u6a747x7-ktou-mf8i-xqw1-gpvyw0ddf8f2",
    },
    _id: "6492b5b14eb6b1e079b65c78",
  },
  {
    timeStamp: 1687336350.643,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 320,
      Y: 758,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<p>Field 1 : </p>",
    },
    _id: "6492b5b14eb6b1e079b65c79",
  },
  {
    timeStamp: 1687336351.532,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 322,
      Y: 722,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6492b5b14eb6b1e079b65c7a",
  },
  {
    timeStamp: 1687336351.765,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 322,
      Y: 722,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>Fetch</button>",
      value: "2",
    },
    _id: "6492b5b14eb6b1e079b65c7b",
  },
  {
    timeStamp: 1687336351.765,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "czkesf1y-l78d-x1ix-bmq7-bu04v6ddeaqd",
    },
    _id: "6492b5b14eb6b1e079b65c7c",
  },
  {
    timeStamp: 1687336351.765,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 322,
      Y: 722,
      scrollX: 0,
      scrollY: 416,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c7d",
  },
  {
    timeStamp: 1687336351.803,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "czkesf1y-l78d-x1ix-bmq7-bu04v6ddeaqd",
      duration: 36,
    },
    _id: "6492b5b14eb6b1e079b65c7e",
  },
  {
    timeStamp: 1687336353.171,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 320, Y: 235, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c7f",
  },
  {
    timeStamp: 1687336353.392,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 320,
      Y: 235,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c80",
  },
  {
    timeStamp: 1687336353.419,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "f", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c81",
  },
  {
    timeStamp: 1687336353.497,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c82",
  },
  {
    timeStamp: 1687336353.536,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "f", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c83",
  },
  {
    timeStamp: 1687336353.621,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c84",
  },
  {
    timeStamp: 1687336353.676,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c85",
  },
  {
    timeStamp: 1687336353.706,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "t", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c86",
  },
  {
    timeStamp: 1687336353.838,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "c", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c87",
  },
  {
    timeStamp: 1687336353.905,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "h", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c88",
  },
  {
    timeStamp: 1687336353.934,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "c", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c89",
  },
  {
    timeStamp: 1687336353.982,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "h", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c8a",
  },
  {
    timeStamp: 1687336354.083,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c8b",
  },
  {
    timeStamp: 1687336354.167,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c8c",
  },
  {
    timeStamp: 1687336354.221,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "e", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c8d",
  },
  {
    timeStamp: 1687336354.309,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c8e",
  },
  {
    timeStamp: 1687336354.31,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c8f",
  },
  {
    timeStamp: 1687336354.444,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "Shift", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c90",
  },
  {
    timeStamp: 1687336354.444,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c91",
  },
  {
    timeStamp: 1687336354.51,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c92",
  },
  {
    timeStamp: 1687336354.58,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c93",
  },
  {
    timeStamp: 1687336354.659,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c94",
  },
  {
    timeStamp: 1687336354.752,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c95",
  },
  {
    timeStamp: 1687336354.772,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "Shift", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c96",
  },
  {
    timeStamp: 1687336354.923,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c97",
  },
  {
    timeStamp: 1687336355.002,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c98",
  },
  {
    timeStamp: 1687336355.072,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c99",
  },
  {
    timeStamp: 1687336355.074,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 320, Y: 235, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c9a",
  },
  {
    timeStamp: 1687336355.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c9b",
  },
  {
    timeStamp: 1687336355.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 320, Y: 235, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65c9c",
  },
  {
    timeStamp: 1687336357.752,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 352,
      Y: 842,
      scrollX: 0,
      scrollY: 416,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
    },
    _id: "6492b5b14eb6b1e079b65c9d",
  },
  {
    timeStamp: 1687336357.972,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 352,
      Y: 842,
      scrollX: 0,
      scrollY: 416,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
    },
    _id: "6492b5b14eb6b1e079b65c9e",
  },
  {
    timeStamp: 1687336357.972,
    name: "USER_EVENT",
    type: "DOWNLOAD",
    data: {
      X: 352,
      Y: 842,
      scrollX: 0,
      scrollY: 416,
      HTMLElement:
        '<a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65c9f",
  },
  {
    timeStamp: 1687336357.975,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 60.315 },
    _id: "6492b5b14eb6b1e079b65ca0",
  },
  {
    timeStamp: 1687336360.014,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 352, Y: 238, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca1",
  },
  {
    timeStamp: 1687336360.234,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 352,
      Y: 238,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65ca2",
  },
  {
    timeStamp: 1687336360.235,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca3",
  },
  {
    timeStamp: 1687336360.399,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca4",
  },
  {
    timeStamp: 1687336360.508,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca5",
  },
  {
    timeStamp: 1687336360.585,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca6",
  },
  {
    timeStamp: 1687336360.613,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "w", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca7",
  },
  {
    timeStamp: 1687336360.687,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "n", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca8",
  },
  {
    timeStamp: 1687336360.714,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "w", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ca9",
  },
  {
    timeStamp: 1687336360.778,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "n", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65caa",
  },
  {
    timeStamp: 1687336360.891,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "l", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cab",
  },
  {
    timeStamp: 1687336360.984,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cac",
  },
  {
    timeStamp: 1687336361.168,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "l", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cad",
  },
  {
    timeStamp: 1687336361.168,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "o", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cae",
  },
  {
    timeStamp: 1687336361.169,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65caf",
  },
  {
    timeStamp: 1687336361.17,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb0",
  },
  {
    timeStamp: 1687336361.17,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb1",
  },
  {
    timeStamp: 1687336361.212,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb2",
  },
  {
    timeStamp: 1687336361.241,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb3",
  },
  {
    timeStamp: 1687336361.308,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb4",
  },
  {
    timeStamp: 1687336361.342,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb5",
  },
  {
    timeStamp: 1687336361.427,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb6",
  },
  {
    timeStamp: 1687336361.483,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb7",
  },
  {
    timeStamp: 1687336361.567,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb8",
  },
  {
    timeStamp: 1687336361.652,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cb9",
  },
  {
    timeStamp: 1687336361.652,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "/", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cba",
  },
  {
    timeStamp: 1687336361.826,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cbb",
  },
  {
    timeStamp: 1687336361.951,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cbc",
  },
  {
    timeStamp: 1687336362.465,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cbd",
  },
  {
    timeStamp: 1687336362.534,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cbe",
  },
  {
    timeStamp: 1687336362.612,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cbf",
  },
  {
    timeStamp: 1687336362.666,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc0",
  },
  {
    timeStamp: 1687336362.752,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc1",
  },
  {
    timeStamp: 1687336362.798,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc2",
  },
  {
    timeStamp: 1687336362.895,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc3",
  },
  {
    timeStamp: 1687336362.941,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc4",
  },
  {
    timeStamp: 1687336363.07,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc5",
  },
  {
    timeStamp: 1687336363.123,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc6",
  },
  {
    timeStamp: 1687336363.199,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc7",
  },
  {
    timeStamp: 1687336363.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc8",
  },
  {
    timeStamp: 1687336363.316,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cc9",
  },
  {
    timeStamp: 1687336363.363,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "d", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cca",
  },
  {
    timeStamp: 1687336363.509,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ccb",
  },
  {
    timeStamp: 1687336363.597,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ccc",
  },
  {
    timeStamp: 1687336363.633,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: " ", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ccd",
  },
  {
    timeStamp: 1687336363.701,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cce",
  },
  {
    timeStamp: 1687336363.74,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65ccf",
  },
  {
    timeStamp: 1687336363.825,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd0",
  },
  {
    timeStamp: 1687336363.891,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "?", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd1",
  },
  {
    timeStamp: 1687336363.922,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Shift", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd2",
  },
  {
    timeStamp: 1687336364.104,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd3",
  },
  {
    timeStamp: 1687336364.174,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd4",
  },
  {
    timeStamp: 1687336364.241,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Control", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd5",
  },
  {
    timeStamp: 1687336364.267,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd6",
  },
  {
    timeStamp: 1687336364.297,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "Backspace", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd7",
  },
  {
    timeStamp: 1687336364.297,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 352, Y: 238, key: "a", HTMLElement: "<input>" },
    _id: "6492b5b14eb6b1e079b65cd8",
  },
  {
    timeStamp: 1687336365.045,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 476,
      Y: 290,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 39px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6492b5b14eb6b1e079b65cd9",
  },
  {
    timeStamp: 1687336365.261,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 476,
      Y: 290,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 39px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6492b5b14eb6b1e079b65cda",
  },
  {
    timeStamp: 1687336369.865,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 72.205 },
    _id: "6492b5b14eb6b1e079b65cdb",
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
    width: 684,
    height: 500,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3001/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const pre = document.createElement("pre");
    pre.id = "id-abc_user/dvkx5d8f-klna-t7e4-h4xz-s5ql2vkszp9r";
    pre.style.fontSize = "0.75rem";
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
          "id-abc_user/dvkx5d8f-klna-t7e4-h4xz-s5ql2vkszp9r"
        );
        pre.textContent =
          "Session : abc_user/dvkx5d8f-klna-t7e4-h4xz-s5ql2vkszp9r \n" +
          "Elapsed : " +
          time;
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
