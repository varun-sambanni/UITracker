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
    timeStamp: 1687279750.629,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0.437 },
    _id: "6491d8a76bd7fe9e31259525",
  },
  {
    timeStamp: 1687279751.48,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 665, Y: 175, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259526",
  },
  {
    timeStamp: 1687279751.557,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 665,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6491d8a76bd7fe9e31259527",
  },
  {
    timeStamp: 1687279752.056,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "o", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259528",
  },
  {
    timeStamp: 1687279752.156,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259529",
  },
  {
    timeStamp: 1687279752.179,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "o", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125952a",
  },
  {
    timeStamp: 1687279752.217,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "c", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125952b",
  },
  {
    timeStamp: 1687279752.262,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125952c",
  },
  {
    timeStamp: 1687279752.265,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "e", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125952d",
  },
  {
    timeStamp: 1687279752.339,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "c", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125952e",
  },
  {
    timeStamp: 1687279752.365,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: " ", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125952f",
  },
  {
    timeStamp: 1687279752.385,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "e", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259530",
  },
  {
    timeStamp: 1687279752.477,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: " ", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259531",
  },
  {
    timeStamp: 1687279752.512,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "t", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259532",
  },
  {
    timeStamp: 1687279752.575,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "t", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259533",
  },
  {
    timeStamp: 1687279752.753,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259534",
  },
  {
    timeStamp: 1687279752.83,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259535",
  },
  {
    timeStamp: 1687279752.889,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259536",
  },
  {
    timeStamp: 1687279752.974,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259537",
  },
  {
    timeStamp: 1687279753.138,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "g", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259538",
  },
  {
    timeStamp: 1687279753.223,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "g", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259539",
  },
  {
    timeStamp: 1687279753.224,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125953a",
  },
  {
    timeStamp: 1687279753.279,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "i", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125953b",
  },
  {
    timeStamp: 1687279753.348,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125953c",
  },
  {
    timeStamp: 1687279753.349,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125953d",
  },
  {
    timeStamp: 1687279753.389,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "i", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125953e",
  },
  {
    timeStamp: 1687279753.435,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125953f",
  },
  {
    timeStamp: 1687279753.462,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: " ", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259540",
  },
  {
    timeStamp: 1687279753.579,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: " ", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259541",
  },
  {
    timeStamp: 1687279753.579,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "t", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259542",
  },
  {
    timeStamp: 1687279753.63,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "e", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259543",
  },
  {
    timeStamp: 1687279753.653,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "t", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259544",
  },
  {
    timeStamp: 1687279753.707,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "e", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259545",
  },
  {
    timeStamp: 1687279753.852,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "s", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259546",
  },
  {
    timeStamp: 1687279753.915,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "t", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259547",
  },
  {
    timeStamp: 1687279753.936,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "s", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259548",
  },
  {
    timeStamp: 1687279754.016,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "i", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259549",
  },
  {
    timeStamp: 1687279754.018,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "t", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125954a",
  },
  {
    timeStamp: 1687279754.078,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125954b",
  },
  {
    timeStamp: 1687279754.124,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "g", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125954c",
  },
  {
    timeStamp: 1687279754.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "i", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125954d",
  },
  {
    timeStamp: 1687279754.181,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "n", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125954e",
  },
  {
    timeStamp: 1687279754.223,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "g", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e3125954f",
  },
  {
    timeStamp: 1687279754.372,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "Control", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259550",
  },
  {
    timeStamp: 1687279754.459,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259551",
  },
  {
    timeStamp: 1687279754.527,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "Control", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259552",
  },
  {
    timeStamp: 1687279754.527,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 665, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259553",
  },
  {
    timeStamp: 1687279754.573,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259554",
  },
  {
    timeStamp: 1687279754.573,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 665, Y: 175, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259555",
  },
  {
    timeStamp: 1687279755.683,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 634,
      Y: 259,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "6491d8a76bd7fe9e31259556",
  },
  {
    timeStamp: 1687279755.74,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 634,
      Y: 259,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e31259557",
  },
  {
    timeStamp: 1687279755.832,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 636, Y: 259, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e31259558",
  },
  {
    timeStamp: 1687279755.854,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 636, Y: 264, key: "s", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e31259559",
  },
  {
    timeStamp: 1687279755.908,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 636, Y: 264, key: "d", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e3125955a",
  },
  {
    timeStamp: 1687279755.908,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 636, Y: 264, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e3125955b",
  },
  {
    timeStamp: 1687279755.938,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 636, Y: 264, key: "s", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e3125955c",
  },
  {
    timeStamp: 1687279756.022,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 636, Y: 264, key: "d", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e3125955d",
  },
  {
    timeStamp: 1687279756.022,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 636, Y: 264, key: "s", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e3125955e",
  },
  {
    timeStamp: 1687279756.023,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 636, Y: 264, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491d8a76bd7fe9e3125955f",
  },
  {
    timeStamp: 1687279756.107,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 635, Y: 326, key: "d", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259560",
  },
  {
    timeStamp: 1687279756.109,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 635, Y: 326, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259561",
  },
  {
    timeStamp: 1687279756.121,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 635, Y: 326, key: "s", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259562",
  },
  {
    timeStamp: 1687279756.176,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 635, Y: 326, key: "d", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259563",
  },
  {
    timeStamp: 1687279756.179,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 635, Y: 326, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259564",
  },
  {
    timeStamp: 1687279756.262,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 635,
      Y: 326,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6491d8a76bd7fe9e31259565",
  },
  {
    timeStamp: 1687279756.486,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 635, Y: 375, key: "a", HTMLElement: "<p>Field 2 : </p>" },
    _id: "6491d8a76bd7fe9e31259566",
  },
  {
    timeStamp: 1687279756.503,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 635, Y: 375, key: "s", HTMLElement: "<p>Field 2 : </p>" },
    _id: "6491d8a76bd7fe9e31259567",
  },
  {
    timeStamp: 1687279756.569,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 634, Y: 393, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259568",
  },
  {
    timeStamp: 1687279756.57,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 634, Y: 393, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259569",
  },
  {
    timeStamp: 1687279756.595,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 634, Y: 399, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125956a",
  },
  {
    timeStamp: 1687279756.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 634, Y: 408, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125956b",
  },
  {
    timeStamp: 1687279756.668,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 634, Y: 408, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125956c",
  },
  {
    timeStamp: 1687279756.684,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 634, Y: 408, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125956d",
  },
  {
    timeStamp: 1687279756.74,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 634, Y: 408, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125956e",
  },
  {
    timeStamp: 1687279756.761,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 634, Y: 408, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125956f",
  },
  {
    timeStamp: 1687279756.777,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 634, Y: 408, key: "s", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259570",
  },
  {
    timeStamp: 1687279756.822,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 634,
      Y: 408,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259571",
  },
  {
    timeStamp: 1687279756.838,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 634, Y: 408, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259572",
  },
  {
    timeStamp: 1687279756.898,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 634,
      Y: 408,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6491d8a76bd7fe9e31259573",
  },
  {
    timeStamp: 1687279757.049,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 634,
      Y: 408,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259574",
  },
  {
    timeStamp: 1687279757.14,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 643, Y: 409, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259575",
  },
  {
    timeStamp: 1687279757.21,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 689,
      Y: 415,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259576",
  },
  {
    timeStamp: 1687279757.256,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259577",
  },
  {
    timeStamp: 1687279757.568,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259578",
  },
  {
    timeStamp: 1687279757.691,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259579",
  },
  {
    timeStamp: 1687279757.821,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125957a",
  },
  {
    timeStamp: 1687279757.946,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125957b",
  },
  {
    timeStamp: 1687279757.963,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125957c",
  },
  {
    timeStamp: 1687279758.009,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125957d",
  },
  {
    timeStamp: 1687279758.216,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 702,
      Y: 418,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e3125957e",
  },
  {
    timeStamp: 1687279758.279,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 702,
      Y: 418,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e3125957f",
  },
  {
    timeStamp: 1687279758.363,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 702,
      Y: 418,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259580",
  },
  {
    timeStamp: 1687279758.401,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259581",
  },
  {
    timeStamp: 1687279758.433,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 702,
      Y: 418,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259582",
  },
  {
    timeStamp: 1687279758.45,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259583",
  },
  {
    timeStamp: 1687279758.491,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259584",
  },
  {
    timeStamp: 1687279758.568,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259585",
  },
  {
    timeStamp: 1687279758.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259586",
  },
  {
    timeStamp: 1687279758.654,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259587",
  },
  {
    timeStamp: 1687279758.746,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259588",
  },
  {
    timeStamp: 1687279758.837,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259589",
  },
  {
    timeStamp: 1687279758.837,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125958a",
  },
  {
    timeStamp: 1687279758.886,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125958b",
  },
  {
    timeStamp: 1687279758.925,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125958c",
  },
  {
    timeStamp: 1687279758.978,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125958d",
  },
  {
    timeStamp: 1687279759.302,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125958e",
  },
  {
    timeStamp: 1687279759.427,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e3125958f",
  },
  {
    timeStamp: 1687279760.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 702,
      Y: 418,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259590",
  },
  {
    timeStamp: 1687279760.249,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 702,
      Y: 418,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259591",
  },
  {
    timeStamp: 1687279760.276,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259592",
  },
  {
    timeStamp: 1687279760.37,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 702, Y: 418, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491d8a76bd7fe9e31259593",
  },
  {
    timeStamp: 1687279761.105,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 708,
      Y: 419,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491d8a76bd7fe9e31259594",
  },
  {
    timeStamp: 1687279761.648,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 723,
      Y: 579,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 190px;"></textarea></div>',
    },
    _id: "6491d8a76bd7fe9e31259595",
  },
  {
    timeStamp: 1687279761.878,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e31259596",
  },
  {
    timeStamp: 1687279761.91,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "a",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e31259597",
  },
  {
    timeStamp: 1687279761.988,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e31259598",
  },
  {
    timeStamp: 1687279762.046,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "a",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e31259599",
  },
  {
    timeStamp: 1687279762.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "w",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e3125959a",
  },
  {
    timeStamp: 1687279762.266,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "w",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e3125959b",
  },
  {
    timeStamp: 1687279762.366,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "o",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e3125959c",
  },
  {
    timeStamp: 1687279762.436,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "o",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e3125959d",
  },
  {
    timeStamp: 1687279762.505,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "r",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e3125959e",
  },
  {
    timeStamp: 1687279762.599,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "k",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e3125959f",
  },
  {
    timeStamp: 1687279762.601,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "r",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a0",
  },
  {
    timeStamp: 1687279762.705,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "k",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a1",
  },
  {
    timeStamp: 1687279762.948,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "e",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a2",
  },
  {
    timeStamp: 1687279763.026,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "d",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a3",
  },
  {
    timeStamp: 1687279763.051,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "e",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a4",
  },
  {
    timeStamp: 1687279763.071,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "d",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a5",
  },
  {
    timeStamp: 1687279763.089,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: " ",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a6",
  },
  {
    timeStamp: 1687279763.19,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: " ",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a7",
  },
  {
    timeStamp: 1687279763.202,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Shift",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a8",
  },
  {
    timeStamp: 1687279763.384,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Shift",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595a9",
  },
  {
    timeStamp: 1687279763.52,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595aa",
  },
  {
    timeStamp: 1687279763.613,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "a",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595ab",
  },
  {
    timeStamp: 1687279763.673,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595ac",
  },
  {
    timeStamp: 1687279763.677,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595ad",
  },
  {
    timeStamp: 1687279763.73,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "a",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595ae",
  },
  {
    timeStamp: 1687279763.755,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595af",
  },
  {
    timeStamp: 1687279764.259,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 648,
      Y: 492,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b0",
  },
  {
    timeStamp: 1687279764.317,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 648,
      Y: 492,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b1",
  },
  {
    timeStamp: 1687279765.26,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Escape",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b2",
  },
  {
    timeStamp: 1687279765.551,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b3",
  },
  {
    timeStamp: 1687279765.849,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b4",
  },
  {
    timeStamp: 1687279766.403,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 648,
      Y: 492,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b5",
  },
  {
    timeStamp: 1687279766.479,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 648,
      Y: 492,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595b6",
  },
  {
    timeStamp: 1687279767.206,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b7",
  },
  {
    timeStamp: 1687279767.412,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "z",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b8",
  },
  {
    timeStamp: 1687279767.56,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "z",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595b9",
  },
  {
    timeStamp: 1687279767.684,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595ba",
  },
  {
    timeStamp: 1687279768.646,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "ArrowRight",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595bb",
  },
  {
    timeStamp: 1687279768.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "ArrowRight",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595bc",
  },
  {
    timeStamp: 1687279769.08,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Shift",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595bd",
  },
  {
    timeStamp: 1687279769.153,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "?",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595be",
  },
  {
    timeStamp: 1687279769.215,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "?",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595bf",
  },
  {
    timeStamp: 1687279769.277,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "?",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c0",
  },
  {
    timeStamp: 1687279769.336,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Shift",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c1",
  },
  {
    timeStamp: 1687279769.361,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "/",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c2",
  },
  {
    timeStamp: 1687279769.489,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c3",
  },
  {
    timeStamp: 1687279769.551,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "a",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c4",
  },
  {
    timeStamp: 1687279769.599,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Control",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c5",
  },
  {
    timeStamp: 1687279769.616,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 648,
      Y: 492,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c6",
  },
  {
    timeStamp: 1687279769.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "a",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c7",
  },
  {
    timeStamp: 1687279769.677,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 648,
      Y: 492,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c8",
  },
  {
    timeStamp: 1687279771.192,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 707,
      Y: 579,
      scrollX: 0,
      scrollY: 337.3333435058594,
      HTMLElement: '<textarea style="height: 190px;"></textarea>',
    },
    _id: "6491d8a76bd7fe9e312595c9",
  },
  {
    timeStamp: 1687279771.624,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 697,
      Y: 218,
      scrollX: 0,
      scrollY: 64.66666412353516,
      HTMLElement: "<p>Password : </p>",
    },
    _id: "6491d8a76bd7fe9e312595ca",
  },
  {
    timeStamp: 1687279772.077,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 822,
      Y: 435,
      scrollX: 0,
      scrollY: 64,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 11px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6491d8a76bd7fe9e312595cb",
  },
  {
    timeStamp: 1687279772.166,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 822,
      Y: 435,
      scrollX: 0,
      scrollY: 64,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 11px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595cc",
  },
  {
    timeStamp: 1687279773.016,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 652,
      Y: 656,
      scrollX: 0,
      scrollY: 64,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6491d8a76bd7fe9e312595cd",
  },
  {
    timeStamp: 1687279773.083,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "8mpamtdo-oa73-a5t2-2gss-w90nuba7kdoa",
    },
    _id: "6491d8a76bd7fe9e312595ce",
  },
  {
    timeStamp: 1687279773.084,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 652,
      Y: 656,
      scrollX: 0,
      scrollY: 64,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595cf",
  },
  {
    timeStamp: 1687279773.129,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "8mpamtdo-oa73-a5t2-2gss-w90nuba7kdoa",
      duration: 45,
    },
    _id: "6491d8a76bd7fe9e312595d0",
  },
  {
    timeStamp: 1687279774.513,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 198,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6491d8a76bd7fe9e312595d1",
  },
  {
    timeStamp: 1687279774.63,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 200,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6491d8a76bd7fe9e312595d2",
  },
  {
    timeStamp: 1687279775.03,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 172,
      Y: 169,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6491d8a76bd7fe9e312595d3",
  },
  {
    timeStamp: 1687279775.11,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 172,
      Y: 169,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595d4",
  },
  {
    timeStamp: 1687279775.11,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 172,
      Y: 169,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: true,
    },
    _id: "6491d8a76bd7fe9e312595d5",
  },
  {
    timeStamp: 1687279775.341,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 172,
      Y: 202,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
    },
    _id: "6491d8a76bd7fe9e312595d6",
  },
  {
    timeStamp: 1687279775.422,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 172,
      Y: 202,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595d7",
  },
  {
    timeStamp: 1687279775.422,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 172,
      Y: 202,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
      checked: true,
    },
    _id: "6491d8a76bd7fe9e312595d8",
  },
  {
    timeStamp: 1687279775.714,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 179,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6491d8a76bd7fe9e312595d9",
  },
  {
    timeStamp: 1687279775.796,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 179,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595da",
  },
  {
    timeStamp: 1687279775.797,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 179,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: false,
    },
    _id: "6491d8a76bd7fe9e312595db",
  },
  {
    timeStamp: 1687279776.02,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 180,
      Y: 199,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
    },
    _id: "6491d8a76bd7fe9e312595dc",
  },
  {
    timeStamp: 1687279776.112,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 180,
      Y: 199,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595dd",
  },
  {
    timeStamp: 1687279776.346,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 177,
      Y: 163,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6491d8a76bd7fe9e312595de",
  },
  {
    timeStamp: 1687279776.436,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 177,
      Y: 163,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595df",
  },
  {
    timeStamp: 1687279776.436,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 177,
      Y: 163,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: true,
    },
    _id: "6491d8a76bd7fe9e312595e0",
  },
  {
    timeStamp: 1687279776.86,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 163,
      Y: 165,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div>',
    },
    _id: "6491d8a76bd7fe9e312595e1",
  },
  {
    timeStamp: 1687279776.94,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 163,
      Y: 165,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div>',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595e2",
  },
  {
    timeStamp: 1687279777.012,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 163,
      Y: 165,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div>',
    },
    _id: "6491d8a76bd7fe9e312595e3",
  },
  {
    timeStamp: 1687279777.086,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 163,
      Y: 165,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div>',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595e4",
  },
  {
    timeStamp: 1687279777.373,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 166,
      Y: 164,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6491d8a76bd7fe9e312595e5",
  },
  {
    timeStamp: 1687279777.444,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 166,
      Y: 164,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595e6",
  },
  {
    timeStamp: 1687279777.445,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 166,
      Y: 164,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: false,
    },
    _id: "6491d8a76bd7fe9e312595e7",
  },
  {
    timeStamp: 1687279777.519,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 166,
      Y: 164,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6491d8a76bd7fe9e312595e8",
  },
  {
    timeStamp: 1687279777.601,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 166,
      Y: 164,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595e9",
  },
  {
    timeStamp: 1687279777.601,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 166,
      Y: 164,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: true,
    },
    _id: "6491d8a76bd7fe9e312595ea",
  },
  {
    timeStamp: 1687279778.524,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 62,
      Y: 132,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "6491d8a76bd7fe9e312595eb",
  },
  {
    timeStamp: 1687279778.625,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 62,
      Y: 132,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595ec",
  },
  {
    timeStamp: 1687279779.114,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 60,
      Y: 134,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
      value: "Option 2",
    },
    _id: "6491d8a76bd7fe9e312595ed",
  },
  {
    timeStamp: 1687279779.115,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 18,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "6491d8a76bd7fe9e312595ee",
  },
  {
    timeStamp: 1687279779.799,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 565, Y: 173, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595ef",
  },
  {
    timeStamp: 1687279779.888,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 565,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6491d8a76bd7fe9e312595f0",
  },
  {
    timeStamp: 1687279780.398,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "o", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f1",
  },
  {
    timeStamp: 1687279780.464,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "k", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f2",
  },
  {
    timeStamp: 1687279780.487,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "o", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f3",
  },
  {
    timeStamp: 1687279780.525,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "k", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f4",
  },
  {
    timeStamp: 1687279780.541,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: " ", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f5",
  },
  {
    timeStamp: 1687279780.602,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "Shift", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f6",
  },
  {
    timeStamp: 1687279780.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: " ", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f7",
  },
  {
    timeStamp: 1687279780.681,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "?", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f8",
  },
  {
    timeStamp: 1687279780.743,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "?", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595f9",
  },
  {
    timeStamp: 1687279780.813,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "?", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595fa",
  },
  {
    timeStamp: 1687279780.891,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "?", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595fb",
  },
  {
    timeStamp: 1687279780.961,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "Shift", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595fc",
  },
  {
    timeStamp: 1687279781.172,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595fd",
  },
  {
    timeStamp: 1687279781.298,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595fe",
  },
  {
    timeStamp: 1687279781.546,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e312595ff",
  },
  {
    timeStamp: 1687279781.622,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259600",
  },
  {
    timeStamp: 1687279781.679,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "Control", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259601",
  },
  {
    timeStamp: 1687279781.735,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259602",
  },
  {
    timeStamp: 1687279781.849,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "Control", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259603",
  },
  {
    timeStamp: 1687279781.876,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "a", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259604",
  },
  {
    timeStamp: 1687279781.893,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 565, Y: 173, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259605",
  },
  {
    timeStamp: 1687279781.94,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 565, Y: 173, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491d8a76bd7fe9e31259606",
  },
  {
    timeStamp: 1687279783.507,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 32.878 },
    _id: "6491d8a76bd7fe9e31259607",
  },
];

function isClickPresentAhead(events, i) {
  for (let j = i; j < events.length; j++) {
    if (events[j].name === "USER_EVENT") {
      if (events[j].type === "CLICK") {
        return true;
      } else if (events[j].type === "MOUSEUP") {
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
    "http://localhost:3002/?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const pre = document.createElement("pre");
    pre.id = "id-abc_user/envdi0nw-xvn4-y1af-cd4t-miblw0ca6qa0";
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
          "id-abc_user/envdi0nw-xvn4-y1af-cd4t-miblw0ca6qa0"
        );
        pre.textContent =
          "Playing Session : abc_user/envdi0nw-xvn4-y1af-cd4t-miblw0ca6qa0 \n" +
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
              async (scrollX, scrollY, X, Y, value, checked, htmlElement) => {
                await new Promise((resolve) => {
                  window.scrollTo(scrollX, scrollY);

                  if (htmlElement.includes("<select")) {
                    document.elementFromPoint(X - scrollX, Y - scrollY).value =
                      value;
                  } else {
                    document.elementFromPoint(
                      X - scrollX,
                      Y - scrollY
                    ).checked = checked;
                  }
                  document.document
                    .elementFromPoint(X - scrollX, Y - scrollY)
                    .dispatchEvent(new Event("change"));
                  resolve();
                });
              },
              scrollX,
              scrollY,
              X,
              Y,
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
