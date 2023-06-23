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
    timeStamp: 1687494957.074,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.09530000001192093 },
    _id: "64952160195cd337eeb5ad02",
  },
  {
    timeStamp: 1687494958.11,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 572, Y: 231, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad03",
  },
  {
    timeStamp: 1687494958.167,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 572,
      Y: 231,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5ad04",
  },
  {
    timeStamp: 1687494958.215,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Shift", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad05",
  },
  {
    timeStamp: 1687494958.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "T", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad06",
  },
  {
    timeStamp: 1687494958.402,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Shift", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad07",
  },
  {
    timeStamp: 1687494958.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad08",
  },
  {
    timeStamp: 1687494958.528,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad09",
  },
  {
    timeStamp: 1687494958.599,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad0a",
  },
  {
    timeStamp: 1687494958.641,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "y", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad0b",
  },
  {
    timeStamp: 1687494958.72,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "y", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad0c",
  },
  {
    timeStamp: 1687494958.783,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad0d",
  },
  {
    timeStamp: 1687494958.844,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad0e",
  },
  {
    timeStamp: 1687494958.885,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad0f",
  },
  {
    timeStamp: 1687494958.905,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad10",
  },
  {
    timeStamp: 1687494958.96,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad11",
  },
  {
    timeStamp: 1687494958.991,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad12",
  },
  {
    timeStamp: 1687494958.992,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad13",
  },
  {
    timeStamp: 1687494959.068,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad14",
  },
  {
    timeStamp: 1687494959.101,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad15",
  },
  {
    timeStamp: 1687494959.138,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "o", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad16",
  },
  {
    timeStamp: 1687494959.158,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad17",
  },
  {
    timeStamp: 1687494959.207,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "o", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad18",
  },
  {
    timeStamp: 1687494959.265,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad19",
  },
  {
    timeStamp: 1687494959.349,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad1a",
  },
  {
    timeStamp: 1687494959.402,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad1b",
  },
  {
    timeStamp: 1687494959.457,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad1c",
  },
  {
    timeStamp: 1687494959.51,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "u", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad1d",
  },
  {
    timeStamp: 1687494959.548,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "u", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad1e",
  },
  {
    timeStamp: 1687494959.7,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "m", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad1f",
  },
  {
    timeStamp: 1687494959.722,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "m", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad20",
  },
  {
    timeStamp: 1687494959.954,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad21",
  },
  {
    timeStamp: 1687494960.007,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad22",
  },
  {
    timeStamp: 1687494960.107,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad23",
  },
  {
    timeStamp: 1687494960.171,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad24",
  },
  {
    timeStamp: 1687494960.259,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad25",
  },
  {
    timeStamp: 1687494960.337,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad26",
  },
  {
    timeStamp: 1687494960.437,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "m", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad27",
  },
  {
    timeStamp: 1687494960.514,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "m", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad28",
  },
  {
    timeStamp: 1687494960.619,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "u", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad29",
  },
  {
    timeStamp: 1687494960.674,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "u", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad2a",
  },
  {
    timeStamp: 1687494960.75,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "l", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad2b",
  },
  {
    timeStamp: 1687494960.844,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "l", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad2c",
  },
  {
    timeStamp: 1687494960.89,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad2d",
  },
  {
    timeStamp: 1687494960.958,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad2e",
  },
  {
    timeStamp: 1687494960.99,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad2f",
  },
  {
    timeStamp: 1687494961.013,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad30",
  },
  {
    timeStamp: 1687494961.069,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad31",
  },
  {
    timeStamp: 1687494961.102,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad32",
  },
  {
    timeStamp: 1687494961.129,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad33",
  },
  {
    timeStamp: 1687494961.226,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad34",
  },
  {
    timeStamp: 1687494962.017,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad35",
  },
  {
    timeStamp: 1687494962.072,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad36",
  },
  {
    timeStamp: 1687494962.109,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad37",
  },
  {
    timeStamp: 1687494962.131,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad38",
  },
  {
    timeStamp: 1687494962.147,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad39",
  },
  {
    timeStamp: 1687494962.232,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad3a",
  },
  {
    timeStamp: 1687494962.257,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad3b",
  },
  {
    timeStamp: 1687494962.335,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad3c",
  },
  {
    timeStamp: 1687494962.393,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "v", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad3d",
  },
  {
    timeStamp: 1687494962.462,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "v", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad3e",
  },
  {
    timeStamp: 1687494962.463,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad3f",
  },
  {
    timeStamp: 1687494962.573,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad40",
  },
  {
    timeStamp: 1687494962.92,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad41",
  },
  {
    timeStamp: 1687494962.981,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad42",
  },
  {
    timeStamp: 1687494963.057,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad43",
  },
  {
    timeStamp: 1687494963.117,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad44",
  },
  {
    timeStamp: 1687494963.158,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad45",
  },
  {
    timeStamp: 1687494963.243,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "v", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad46",
  },
  {
    timeStamp: 1687494963.245,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad47",
  },
  {
    timeStamp: 1687494963.304,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad48",
  },
  {
    timeStamp: 1687494963.325,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "v", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad49",
  },
  {
    timeStamp: 1687494963.435,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad4a",
  },
  {
    timeStamp: 1687494963.436,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad4b",
  },
  {
    timeStamp: 1687494963.512,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad4c",
  },
  {
    timeStamp: 1687494963.512,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad4d",
  },
  {
    timeStamp: 1687494963.597,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad4e",
  },
  {
    timeStamp: 1687494963.664,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad4f",
  },
  {
    timeStamp: 1687494963.743,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad50",
  },
  {
    timeStamp: 1687494963.756,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad51",
  },
  {
    timeStamp: 1687494963.834,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad52",
  },
  {
    timeStamp: 1687494963.861,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad53",
  },
  {
    timeStamp: 1687494963.941,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad54",
  },
  {
    timeStamp: 1687494963.943,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad55",
  },
  {
    timeStamp: 1687494964.019,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad56",
  },
  {
    timeStamp: 1687494964.035,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad57",
  },
  {
    timeStamp: 1687494964.058,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad58",
  },
  {
    timeStamp: 1687494964.114,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad59",
  },
  {
    timeStamp: 1687494964.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad5a",
  },
  {
    timeStamp: 1687494964.159,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad5b",
  },
  {
    timeStamp: 1687494964.205,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad5c",
  },
  {
    timeStamp: 1687494964.367,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad5d",
  },
  {
    timeStamp: 1687494964.43,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad5e",
  },
  {
    timeStamp: 1687494964.431,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad5f",
  },
  {
    timeStamp: 1687494964.452,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad60",
  },
  {
    timeStamp: 1687494964.478,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad61",
  },
  {
    timeStamp: 1687494964.594,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad62",
  },
  {
    timeStamp: 1687494964.822,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad63",
  },
  {
    timeStamp: 1687494964.891,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad64",
  },
  {
    timeStamp: 1687494964.941,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad65",
  },
  {
    timeStamp: 1687494964.968,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad66",
  },
  {
    timeStamp: 1687494964.999,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad67",
  },
  {
    timeStamp: 1687494965.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 572, Y: 231, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad68",
  },
  {
    timeStamp: 1687494965.902,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 564,
      Y: 305,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "64952160195cd337eeb5ad69",
  },
  {
    timeStamp: 1687494965.967,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 564,
      Y: 305,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "64952160195cd337eeb5ad6a",
  },
  {
    timeStamp: 1687494966.025,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 305, key: "s", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad6b",
  },
  {
    timeStamp: 1687494966.027,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 305, key: "a", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad6c",
  },
  {
    timeStamp: 1687494966.094,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 564, Y: 305, key: "a", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad6d",
  },
  {
    timeStamp: 1687494966.116,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 305, key: "d", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad6e",
  },
  {
    timeStamp: 1687494966.117,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 564, Y: 305, key: "s", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad6f",
  },
  {
    timeStamp: 1687494966.192,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 564, Y: 305, key: "d", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad70",
  },
  {
    timeStamp: 1687494966.193,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 305, key: "s", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad71",
  },
  {
    timeStamp: 1687494966.194,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 305, key: "a", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad72",
  },
  {
    timeStamp: 1687494966.276,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 305, key: "d", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad73",
  },
  {
    timeStamp: 1687494966.278,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 564, Y: 305, key: "s", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad74",
  },
  {
    timeStamp: 1687494966.278,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 564, Y: 305, key: "a", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad75",
  },
  {
    timeStamp: 1687494966.362,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 620, Y: 311, key: "d", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad76",
  },
  {
    timeStamp: 1687494966.362,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 620, Y: 311, key: "s", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad77",
  },
  {
    timeStamp: 1687494966.362,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 620, Y: 311, key: "a", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad78",
  },
  {
    timeStamp: 1687494966.397,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 679, Y: 311, key: "s", HTMLElement: '<input type="password">' },
    _id: "64952160195cd337eeb5ad79",
  },
  {
    timeStamp: 1687494966.435,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 736,
      Y: 315,
      key: "d",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad7a",
  },
  {
    timeStamp: 1687494966.435,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 736,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad7b",
  },
  {
    timeStamp: 1687494966.52,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 756,
      Y: 315,
      key: "d",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad7c",
  },
  {
    timeStamp: 1687494966.52,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 756,
      Y: 315,
      key: "s",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad7d",
  },
  {
    timeStamp: 1687494966.522,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 756,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad7e",
  },
  {
    timeStamp: 1687494966.584,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 756,
      Y: 315,
      key: "s",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad7f",
  },
  {
    timeStamp: 1687494966.611,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 756,
      Y: 315,
      key: "d",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad80",
  },
  {
    timeStamp: 1687494966.612,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 756,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad81",
  },
  {
    timeStamp: 1687494966.687,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "d",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad82",
  },
  {
    timeStamp: 1687494966.687,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 757,
      Y: 315,
      key: "s",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad83",
  },
  {
    timeStamp: 1687494966.688,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 757,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad84",
  },
  {
    timeStamp: 1687494966.778,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 757,
      Y: 315,
      key: "d",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad85",
  },
  {
    timeStamp: 1687494966.779,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "s",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad86",
  },
  {
    timeStamp: 1687494966.779,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad87",
  },
  {
    timeStamp: 1687494966.827,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "d",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad88",
  },
  {
    timeStamp: 1687494966.909,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 757,
      Y: 315,
      key: "Control",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad89",
  },
  {
    timeStamp: 1687494967.04,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 757,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad8a",
  },
  {
    timeStamp: 1687494967.078,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "Control",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad8b",
  },
  {
    timeStamp: 1687494967.14,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 757,
      Y: 315,
      key: "Backspace",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad8c",
  },
  {
    timeStamp: 1687494967.141,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "a",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad8d",
  },
  {
    timeStamp: 1687494967.21,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 757,
      Y: 315,
      key: "Backspace",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ad8e",
  },
  {
    timeStamp: 1687494967.724,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 742,
      Y: 107,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "64952160195cd337eeb5ad8f",
  },
  {
    timeStamp: 1687494967.773,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 742,
      Y: 107,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
      button: 0,
    },
    _id: "64952160195cd337eeb5ad90",
  },
  {
    timeStamp: 1687494968.496,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 201,
      Y: 121,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "64952160195cd337eeb5ad91",
  },
  {
    timeStamp: 1687494968.575,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 200,
      Y: 121,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "64952160195cd337eeb5ad92",
  },
  {
    timeStamp: 1687494968.917,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 76,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
    },
    _id: "64952160195cd337eeb5ad93",
  },
  {
    timeStamp: 1687494968.969,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 76,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      button: 0,
    },
    _id: "64952160195cd337eeb5ad94",
  },
  {
    timeStamp: 1687494969.54,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 75,
      Y: 134,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>',
      value: "2",
    },
    _id: "64952160195cd337eeb5ad95",
  },
  {
    timeStamp: 1687494969.54,
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
    _id: "64952160195cd337eeb5ad96",
  },
  {
    timeStamp: 1687494970.398,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 570, Y: 233, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad97",
  },
  {
    timeStamp: 1687494970.472,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 570,
      Y: 233,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5ad98",
  },
  {
    timeStamp: 1687494970.556,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad99",
  },
  {
    timeStamp: 1687494970.649,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad9a",
  },
  {
    timeStamp: 1687494970.741,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad9b",
  },
  {
    timeStamp: 1687494970.843,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad9c",
  },
  {
    timeStamp: 1687494970.959,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad9d",
  },
  {
    timeStamp: 1687494971.086,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad9e",
  },
  {
    timeStamp: 1687494971.407,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ad9f",
  },
  {
    timeStamp: 1687494971.471,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada0",
  },
  {
    timeStamp: 1687494971.528,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada1",
  },
  {
    timeStamp: 1687494971.624,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada2",
  },
  {
    timeStamp: 1687494971.624,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada3",
  },
  {
    timeStamp: 1687494971.663,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada4",
  },
  {
    timeStamp: 1687494971.701,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada5",
  },
  {
    timeStamp: 1687494971.756,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada6",
  },
  {
    timeStamp: 1687494971.877,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada7",
  },
  {
    timeStamp: 1687494971.956,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada8",
  },
  {
    timeStamp: 1687494972.063,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ada9",
  },
  {
    timeStamp: 1687494972.112,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adaa",
  },
  {
    timeStamp: 1687494972.157,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adab",
  },
  {
    timeStamp: 1687494972.204,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adac",
  },
  {
    timeStamp: 1687494972.3,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adad",
  },
  {
    timeStamp: 1687494972.386,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adae",
  },
  {
    timeStamp: 1687494972.387,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adaf",
  },
  {
    timeStamp: 1687494972.456,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb0",
  },
  {
    timeStamp: 1687494973.437,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: ".", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb1",
  },
  {
    timeStamp: 1687494973.485,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: ".", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb2",
  },
  {
    timeStamp: 1687494973.563,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: ".", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb3",
  },
  {
    timeStamp: 1687494973.625,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: ".", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb4",
  },
  {
    timeStamp: 1687494973.726,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 570, Y: 233, key: ".", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb5",
  },
  {
    timeStamp: 1687494973.749,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 570, Y: 233, key: ".", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb6",
  },
  {
    timeStamp: 1687494975.128,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.029900000005960464 },
    _id: "64952160195cd337eeb5adb7",
  },
  {
    timeStamp: 1687494975.95,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 564, Y: 224, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adb8",
  },
  {
    timeStamp: 1687494976.022,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 564,
      Y: 224,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5adb9",
  },
  {
    timeStamp: 1687494976.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 564, Y: 224, key: "1", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adba",
  },
  {
    timeStamp: 1687494976.287,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 564, Y: 224, key: "1", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adbb",
  },
  {
    timeStamp: 1687494976.957,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.024 },
    _id: "64952160195cd337eeb5adbc",
  },
  {
    timeStamp: 1687494977.494,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 557, Y: 233, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adbd",
  },
  {
    timeStamp: 1687494977.537,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 558, Y: 233, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adbe",
  },
  {
    timeStamp: 1687494977.611,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 519,
      Y: 226,
      key: "2",
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5adbf",
  },
  {
    timeStamp: 1687494977.711,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 172, Y: 117, key: "2", HTMLElement: '<input type="range">' },
    _id: "64952160195cd337eeb5adc0",
  },
  {
    timeStamp: 1687494978.424,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.022 },
    _id: "64952160195cd337eeb5adc1",
  },
  {
    timeStamp: 1687494978.901,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 598, Y: 225, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adc2",
  },
  {
    timeStamp: 1687494978.982,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 598,
      Y: 225,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5adc3",
  },
  {
    timeStamp: 1687494979.123,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 296,
      Y: 127,
      key: "3",
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "64952160195cd337eeb5adc4",
  },
  {
    timeStamp: 1687494979.241,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 112,
      Y: 7,
      key: "3",
      HTMLElement:
        '<html lang="en"><head>\n    <script type="module">\n      // import UITracker from "./UITracker.js";\n      // const uiTracker = new UITracker();\n      // uiTracker.config({\n      //   // Send data every 10s, do not report immediately on error\n      //   dataTransmissionInterval: 10000,\n      //   reportOnError: false,\n      //   sessionId: `abc_user/${123}`,\n      // });\n\n      // uiTracker.start();\n    </script>\n    <meta charset="utf-8">\n    <link rel="icon" href="/favicon.ico">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="theme-color" content="#000000">\n    <meta name="description" content="Web site created using create-react-app">\n    <link rel="apple-touch-icon" href="/logo192.png">\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="/manifest.json">\n    <!--\n      Notice the use of  in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  <script defer="" src="/static/js/bundle.js"></script><style>\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */</style><style>body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  min-height: 4em;\n  border: 1px solid black;\n}\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4em;\n}\n\np {\n  margin: 0.6em;\n}\n\n.field {\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 0.4em;\n  min-width: 10em;\n  position: relative;\n  top: -6em;\n}\n\n.checkboxContainer {\n  border: 1px solid black;\n  margin: 0.2em;\n  width: 12em;\n  padding: 0.2em;\n}\n\nselect,\n.datalist {\n  margin: 0.75em;\n}\n\n.buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  width: 10em;\n  margin: 0.6em auto;\n  border: 1px solid black;\n  position: relative;\n  top: -6em;\n}\n\n.scrollXContainer {\n  display: flex;\n  overflow-x: auto;\n  border: 1px solid black;\n}\n\n.dateTimeContainer {\n  margin: 0.75em;\n}\n\nbutton {\n  margin: 0.2em;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMC42ZW07XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC40ZW07XG4gIG1pbi13aWR0aDogMTBlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02ZW07XG59XG5cbi5jaGVja2JveENvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDAuMmVtO1xuICB3aWR0aDogMTJlbTtcbiAgcGFkZGluZzogMC4yZW07XG59XG5cbnNlbGVjdCxcbi5kYXRhbGlzdCB7XG4gIG1hcmdpbjogMC43NWVtO1xufVxuXG4uYnV0dG9uc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuNmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZlbTtcbn1cblxuLnNjcm9sbFhDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmRhdGVUaW1lQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjc1ZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */</style></head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"><div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  \n\n</body></html>',
    },
    _id: "64952160195cd337eeb5adc5",
  },
  {
    timeStamp: 1687494979.616,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.02169999998807907 },
    _id: "64952160195cd337eeb5adc6",
  },
  {
    timeStamp: 1687494980.054,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 574, Y: 236, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adc7",
  },
  {
    timeStamp: 1687494980.131,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 574,
      Y: 236,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5adc8",
  },
  {
    timeStamp: 1687494980.217,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 546,
      Y: 233,
      key: "4",
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "64952160195cd337eeb5adc9",
  },
  {
    timeStamp: 1687494980.309,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 228,
      Y: 82,
      key: "4",
      HTMLElement:
        "<div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div>",
    },
    _id: "64952160195cd337eeb5adca",
  },
  {
    timeStamp: 1687494980.938,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.021 },
    _id: "64952160195cd337eeb5adcb",
  },
  {
    timeStamp: 1687494981.408,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 584, Y: 237, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adcc",
  },
  {
    timeStamp: 1687494981.475,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 584,
      Y: 237,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5adcd",
  },
  {
    timeStamp: 1687494981.972,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 561, Y: 230, key: "5", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adce",
  },
  {
    timeStamp: 1687494982.081,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 273,
      Y: 80,
      key: "5",
      HTMLElement:
        "<div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div>",
    },
    _id: "64952160195cd337eeb5adcf",
  },
  {
    timeStamp: 1687494982.75,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.02230000001192093 },
    _id: "64952160195cd337eeb5add0",
  },
  {
    timeStamp: 1687494983.311,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 651, Y: 232, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5add1",
  },
  {
    timeStamp: 1687494983.378,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 651,
      Y: 232,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5add2",
  },
  {
    timeStamp: 1687494983.726,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 613, Y: 231, key: "6", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5add3",
  },
  {
    timeStamp: 1687494983.812,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 325,
      Y: 139,
      key: "6",
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "64952160195cd337eeb5add4",
  },
  {
    timeStamp: 1687494984.443,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.020399999976158142 },
    _id: "64952160195cd337eeb5add5",
  },
  {
    timeStamp: 1687494985.41,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 658,
      Y: 719,
      scrollX: 0,
      scrollY: 283.3333435058594,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "64952160195cd337eeb5add6",
  },
  {
    timeStamp: 1687494985.485,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 658,
      Y: 719,
      scrollX: 0,
      scrollY: 283.3333435058594,
      HTMLElement: "<button>Fetch</button>",
      value: "2",
    },
    _id: "64952160195cd337eeb5add7",
  },
  {
    timeStamp: 1687494985.485,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "59map4cz-uel7-w7je-lx3s-agxwbr8q47c0",
    },
    _id: "64952160195cd337eeb5add8",
  },
  {
    timeStamp: 1687494985.489,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 658,
      Y: 719,
      scrollX: 0,
      scrollY: 283.3333435058594,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "64952160195cd337eeb5add9",
  },
  {
    timeStamp: 1687494986.121,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "59map4cz-uel7-w7je-lx3s-agxwbr8q47c0",
      duration: 636,
    },
    _id: "64952160195cd337eeb5adda",
  },
  {
    timeStamp: 1687494986.546,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 562, Y: 229, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5addb",
  },
  {
    timeStamp: 1687494986.625,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 562,
      Y: 229,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5addc",
  },
  {
    timeStamp: 1687494987.17,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5addd",
  },
  {
    timeStamp: 1687494987.257,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adde",
  },
  {
    timeStamp: 1687494987.279,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5addf",
  },
  {
    timeStamp: 1687494987.357,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade0",
  },
  {
    timeStamp: 1687494987.387,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade1",
  },
  {
    timeStamp: 1687494987.434,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "t", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade2",
  },
  {
    timeStamp: 1687494987.547,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "c", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade3",
  },
  {
    timeStamp: 1687494987.61,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade4",
  },
  {
    timeStamp: 1687494987.647,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "c", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade5",
  },
  {
    timeStamp: 1687494987.687,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade6",
  },
  {
    timeStamp: 1687494987.73,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade7",
  },
  {
    timeStamp: 1687494987.763,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "d", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade8",
  },
  {
    timeStamp: 1687494987.816,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ade9",
  },
  {
    timeStamp: 1687494987.886,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adea",
  },
  {
    timeStamp: 1687494987.888,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "d", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adeb",
  },
  {
    timeStamp: 1687494987.933,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "Shift", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adec",
  },
  {
    timeStamp: 1687494987.974,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5aded",
  },
  {
    timeStamp: 1687494988.225,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "?", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adee",
  },
  {
    timeStamp: 1687494988.279,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "?", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adef",
  },
  {
    timeStamp: 1687494988.334,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "?", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf0",
  },
  {
    timeStamp: 1687494988.426,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "Shift", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf1",
  },
  {
    timeStamp: 1687494988.428,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "/", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf2",
  },
  {
    timeStamp: 1687494988.649,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf3",
  },
  {
    timeStamp: 1687494988.719,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf4",
  },
  {
    timeStamp: 1687494988.771,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf5",
  },
  {
    timeStamp: 1687494988.797,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 562, Y: 229, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf6",
  },
  {
    timeStamp: 1687494988.823,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf7",
  },
  {
    timeStamp: 1687494988.873,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 562, Y: 229, key: "Backspace", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5adf8",
  },
  {
    timeStamp: 1687494990.995,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 708,
      Y: 467,
      scrollX: 0,
      scrollY: 217.3333282470703,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "64952160195cd337eeb5adf9",
  },
  {
    timeStamp: 1687494991.256,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 702,
      Y: 627,
      scrollX: 0,
      scrollY: 217.3333282470703,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5adfa",
  },
  {
    timeStamp: 1687494991.432,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 637,
      Y: 521,
      scrollX: 0,
      scrollY: 217.3333282470703,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5adfb",
  },
  {
    timeStamp: 1687494991.514,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 637,
      Y: 521,
      scrollX: 0,
      scrollY: 217.3333282470703,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
      button: 0,
    },
    _id: "64952160195cd337eeb5adfc",
  },
  {
    timeStamp: 1687494991.569,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "d",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5adfd",
  },
  {
    timeStamp: 1687494991.661,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "d",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5adfe",
  },
  {
    timeStamp: 1687494991.757,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "r",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5adff",
  },
  {
    timeStamp: 1687494991.88,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "r",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae00",
  },
  {
    timeStamp: 1687494991.88,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae01",
  },
  {
    timeStamp: 1687494992.013,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "g",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae02",
  },
  {
    timeStamp: 1687494992.015,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae03",
  },
  {
    timeStamp: 1687494992.092,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "g",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae04",
  },
  {
    timeStamp: 1687494992.187,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "g",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae05",
  },
  {
    timeStamp: 1687494992.265,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "e",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae06",
  },
  {
    timeStamp: 1687494992.287,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "g",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae07",
  },
  {
    timeStamp: 1687494992.386,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "d",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae08",
  },
  {
    timeStamp: 1687494992.388,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "e",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae09",
  },
  {
    timeStamp: 1687494992.487,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "d",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae0a",
  },
  {
    timeStamp: 1687494992.505,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: " ",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae0b",
  },
  {
    timeStamp: 1687494992.525,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "Shift",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae0c",
  },
  {
    timeStamp: 1687494992.598,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: " ",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae0d",
  },
  {
    timeStamp: 1687494992.644,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae0e",
  },
  {
    timeStamp: 1687494992.69,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae0f",
  },
  {
    timeStamp: 1687494992.759,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae10",
  },
  {
    timeStamp: 1687494992.837,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "?",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae11",
  },
  {
    timeStamp: 1687494992.858,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "Shift",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae12",
  },
  {
    timeStamp: 1687494993.01,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "Control",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae13",
  },
  {
    timeStamp: 1687494993.075,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae14",
  },
  {
    timeStamp: 1687494993.152,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "Control",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae15",
  },
  {
    timeStamp: 1687494993.153,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 636,
      Y: 519,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae16",
  },
  {
    timeStamp: 1687494993.192,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "a",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae17",
  },
  {
    timeStamp: 1687494993.219,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 636,
      Y: 519,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae18",
  },
  {
    timeStamp: 1687494994.421,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 713,
      Y: 631,
      scrollX: 0,
      scrollY: 217.3333282470703,
      HTMLElement: '<textarea style="height: 191px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae19",
  },
  {
    timeStamp: 1687494994.918,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 706,
      Y: 467,
      scrollX: 0,
      scrollY: 217.3333282470703,
      HTMLElement: '<textarea style="height: 27px;"></textarea>',
    },
    _id: "64952160195cd337eeb5ae1a",
  },
  {
    timeStamp: 1687494995.499,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 654,
      Y: 215,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "64952160195cd337eeb5ae1b",
  },
  {
    timeStamp: 1687494995.58,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 654,
      Y: 215,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "64952160195cd337eeb5ae1c",
  },
  {
    timeStamp: 1687494995.78,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 647, Y: 237, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae1d",
  },
  {
    timeStamp: 1687494995.856,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 647,
      Y: 237,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64952160195cd337eeb5ae1e",
  },
  {
    timeStamp: 1687494995.905,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae1f",
  },
  {
    timeStamp: 1687494995.959,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae20",
  },
  {
    timeStamp: 1687494995.989,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae21",
  },
  {
    timeStamp: 1687494996.067,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae22",
  },
  {
    timeStamp: 1687494996.114,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae23",
  },
  {
    timeStamp: 1687494996.223,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "f", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae24",
  },
  {
    timeStamp: 1687494996.55,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae25",
  },
  {
    timeStamp: 1687494996.605,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae26",
  },
  {
    timeStamp: 1687494996.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "r", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae27",
  },
  {
    timeStamp: 1687494996.689,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "e", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae28",
  },
  {
    timeStamp: 1687494996.798,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae29",
  },
  {
    timeStamp: 1687494996.901,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae2a",
  },
  {
    timeStamp: 1687494996.903,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "s", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae2b",
  },
  {
    timeStamp: 1687494996.971,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "h", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae2c",
  },
  {
    timeStamp: 1687494997.038,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae2d",
  },
  {
    timeStamp: 1687494997.104,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae2e",
  },
  {
    timeStamp: 1687494997.145,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae2f",
  },
  {
    timeStamp: 1687494997.145,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae30",
  },
  {
    timeStamp: 1687494997.183,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae31",
  },
  {
    timeStamp: 1687494997.251,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae32",
  },
  {
    timeStamp: 1687494997.251,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae33",
  },
  {
    timeStamp: 1687494997.355,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: " ", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae34",
  },
  {
    timeStamp: 1687494997.407,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae35",
  },
  {
    timeStamp: 1687494997.469,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae36",
  },
  {
    timeStamp: 1687494997.49,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae37",
  },
  {
    timeStamp: 1687494997.582,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae38",
  },
  {
    timeStamp: 1687494997.598,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "g", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae39",
  },
  {
    timeStamp: 1687494997.627,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae3a",
  },
  {
    timeStamp: 1687494997.683,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae3b",
  },
  {
    timeStamp: 1687494997.685,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae3c",
  },
  {
    timeStamp: 1687494997.707,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "i", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae3d",
  },
  {
    timeStamp: 1687494997.744,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "n", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae3e",
  },
  {
    timeStamp: 1687494997.997,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae3f",
  },
  {
    timeStamp: 1687494998.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 647, Y: 237, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae40",
  },
  {
    timeStamp: 1687494998.157,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "Control", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae41",
  },
  {
    timeStamp: 1687494998.181,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 647, Y: 237, key: "a", HTMLElement: "<input>" },
    _id: "64952160195cd337eeb5ae42",
  },
  {
    timeStamp: 1687494998.753,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 977,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 27px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "64952160195cd337eeb5ae43",
  },
  {
    timeStamp: 1687494998.822,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 977,
      Y: 253,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 27px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64952160195cd337eeb5ae44",
  },
  {
    timeStamp: 1687494999.661,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3001/", DOMLoadTime: 0.026400000005960465 },
    _id: "64952160195cd337eeb5ae45",
  },
  {
    timeStamp: 1687494999.99,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 573,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
    },
    _id: "64952160195cd337eeb5ae46",
  },
  {
    timeStamp: 1687495000.032,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 573,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="field"><p>Name : </p><input></div>',
      button: 0,
    },
    _id: "64952160195cd337eeb5ae47",
  },
  {
    timeStamp: 1687495001.577,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 594,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="App"><div class="header">Value : 1<div></div></div><div>Session ID : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf</div><hr><select id="select-id"><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><input type="range"><br><div class="dateTimeContainer"><input type="date"><input type="time"></div><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio" name="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio" name="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div>',
    },
    _id: "64952160195cd337eeb5ae48",
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
            "Session : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf \n" +
            "Elapsed : " +
            time;
        } else {
          pre.textContent =
            "Session : abc_user/odr1mbbl-ydjs-1nye-waem-yh3vc6mbe3pf \n" +
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
