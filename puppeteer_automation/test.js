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
    timeStamp: 1687270889.658,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6491b62b6bd7fe9e31253ad7",
  },
  {
    timeStamp: 1687270891.245,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 419, Y: 188, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ad8",
  },
  {
    timeStamp: 1687270891.326,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 419,
      Y: 188,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253ad9",
  },
  {
    timeStamp: 1687270891.643,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ada",
  },
  {
    timeStamp: 1687270891.744,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253adb",
  },
  {
    timeStamp: 1687270891.855,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "o", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253adc",
  },
  {
    timeStamp: 1687270891.909,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "o", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253add",
  },
  {
    timeStamp: 1687270891.944,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "b", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ade",
  },
  {
    timeStamp: 1687270892.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "b", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253adf",
  },
  {
    timeStamp: 1687270892.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae0",
  },
  {
    timeStamp: 1687270892.193,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae1",
  },
  {
    timeStamp: 1687270892.231,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae2",
  },
  {
    timeStamp: 1687270892.396,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae3",
  },
  {
    timeStamp: 1687270892.414,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae4",
  },
  {
    timeStamp: 1687270892.533,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae5",
  },
  {
    timeStamp: 1687270892.534,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae6",
  },
  {
    timeStamp: 1687270892.667,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae7",
  },
  {
    timeStamp: 1687270892.716,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae8",
  },
  {
    timeStamp: 1687270892.802,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253ae9",
  },
  {
    timeStamp: 1687270892.841,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aea",
  },
  {
    timeStamp: 1687270892.886,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aeb",
  },
  {
    timeStamp: 1687270893.03,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aec",
  },
  {
    timeStamp: 1687270893.139,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aed",
  },
  {
    timeStamp: 1687270893.14,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aee",
  },
  {
    timeStamp: 1687270893.194,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aef",
  },
  {
    timeStamp: 1687270893.614,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af0",
  },
  {
    timeStamp: 1687270893.729,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af1",
  },
  {
    timeStamp: 1687270893.748,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af2",
  },
  {
    timeStamp: 1687270893.806,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af3",
  },
  {
    timeStamp: 1687270893.827,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "i", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af4",
  },
  {
    timeStamp: 1687270893.889,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "n", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af5",
  },
  {
    timeStamp: 1687270893.928,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "i", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af6",
  },
  {
    timeStamp: 1687270894.012,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "n", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af7",
  },
  {
    timeStamp: 1687270894.013,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "g", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af8",
  },
  {
    timeStamp: 1687270894.037,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253af9",
  },
  {
    timeStamp: 1687270894.073,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "g", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253afa",
  },
  {
    timeStamp: 1687270894.177,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253afb",
  },
  {
    timeStamp: 1687270894.334,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "w", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253afc",
  },
  {
    timeStamp: 1687270894.39,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "i", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253afd",
  },
  {
    timeStamp: 1687270894.42,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "w", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253afe",
  },
  {
    timeStamp: 1687270894.468,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "i", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253aff",
  },
  {
    timeStamp: 1687270894.521,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b00",
  },
  {
    timeStamp: 1687270894.569,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "h", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b01",
  },
  {
    timeStamp: 1687270894.606,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b02",
  },
  {
    timeStamp: 1687270894.639,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b03",
  },
  {
    timeStamp: 1687270894.667,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "h", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b04",
  },
  {
    timeStamp: 1687270894.761,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b05",
  },
  {
    timeStamp: 1687270894.778,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b06",
  },
  {
    timeStamp: 1687270894.87,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b07",
  },
  {
    timeStamp: 1687270894.905,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "i", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b08",
  },
  {
    timeStamp: 1687270894.974,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "i", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b09",
  },
  {
    timeStamp: 1687270894.974,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b0a",
  },
  {
    timeStamp: 1687270895.035,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b0b",
  },
  {
    timeStamp: 1687270895.074,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b0c",
  },
  {
    timeStamp: 1687270895.112,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b0d",
  },
  {
    timeStamp: 1687270895.168,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b0e",
  },
  {
    timeStamp: 1687270895.277,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "o", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b0f",
  },
  {
    timeStamp: 1687270895.278,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b10",
  },
  {
    timeStamp: 1687270895.357,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "o", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b11",
  },
  {
    timeStamp: 1687270895.385,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "x", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b12",
  },
  {
    timeStamp: 1687270895.494,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "x", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b13",
  },
  {
    timeStamp: 1687270895.72,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "Control", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b14",
  },
  {
    timeStamp: 1687270895.822,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "a", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b15",
  },
  {
    timeStamp: 1687270895.892,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "Control", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b16",
  },
  {
    timeStamp: 1687270895.915,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "a", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b17",
  },
  {
    timeStamp: 1687270896.315,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 419, Y: 188, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b18",
  },
  {
    timeStamp: 1687270896.432,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 419, Y: 188, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253b19",
  },
  {
    timeStamp: 1687270897.893,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 57,
      Y: 120,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "6491b62b6bd7fe9e31253b1a",
  },
  {
    timeStamp: 1687270897.966,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 0,
      Y: 0,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "6491b62b6bd7fe9e31253b1b",
  },
  {
    timeStamp: 1687270899.044,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 0,
      Y: 0,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
    _id: "6491b62b6bd7fe9e31253b1c",
  },
  {
    timeStamp: 1687270899.044,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 57,
      Y: 137,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
      value: "Option 2",
    },
    _id: "6491b62b6bd7fe9e31253b1d",
  },
  {
    timeStamp: 1687270899.044,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 0,
      Y: 0,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<html lang="en"><head>\n    <script type="module">\n      // import UITracker from "./UITracker.js";\n      // const uiTracker = new UITracker();\n      // uiTracker.config({\n      //   // Send data every 10s, do not report immediately on error\n      //   dataTransmissionInterval: 10000,\n      //   reportOnError: false,\n      //   sessionId: `abc_user/${123}`,\n      // });\n\n      // uiTracker.start();\n    </script>\n    <meta charset="utf-8">\n    <link rel="icon" href="/favicon.ico">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="theme-color" content="#000000">\n    <meta name="description" content="Web site created using create-react-app">\n    <link rel="apple-touch-icon" href="/logo192.png">\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="/manifest.json">\n    <!--\n      Notice the use of  in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  <script defer="" src="/static/js/bundle.js"></script><style>\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */</style><style>body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n  min-height: 4em;\n  border: 1px solid black;\n}\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4em;\n}\n\np {\n  margin: 0.6em;\n}\n\n.field {\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 0.4em;\n  min-width: 10em;\n  position: relative;\n  top: -6em;\n}\n\n.checkboxContainer {\n  border: 1px solid black;\n  margin: 0.2em;\n  width: 12em;\n  padding: 0.2em;\n}\n\nselect,\n.datalist {\n  margin: 0.75em;\n}\n\n.buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  width: 10em;\n  margin: 0.6em auto;\n  border: 1px solid black;\n  position: relative;\n  top: -6em;\n}\n\nbutton {\n  margin: 0.2em;\n  cursor: pointer;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMC42ZW07XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC40ZW07XG4gIG1pbi13aWR0aDogMTBlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02ZW07XG59XG5cbi5jaGVja2JveENvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDAuMmVtO1xuICB3aWR0aDogMTJlbTtcbiAgcGFkZGluZzogMC4yZW07XG59XG5cbnNlbGVjdCxcbi5kYXRhbGlzdCB7XG4gIG1hcmdpbjogMC43NWVtO1xufVxuXG4uYnV0dG9uc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDAuNmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZlbTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */</style></head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"><div class="App"><div class="header"><div></div></div><div>Session ID : abc_user/z28wk943-iha3-mtlw-qmam-r5innznrloc4</div><hr><select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><input type="range"><br><div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div></div></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  \n\n</body></html>',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b1e",
  },
  {
    timeStamp: 1687270899.98,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 185,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6491b62b6bd7fe9e31253b1f",
  },
  {
    timeStamp: 1687270901.033,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 256,
      Y: 124,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="range">',
    },
    _id: "6491b62b6bd7fe9e31253b20",
  },
  {
    timeStamp: 1687270901.731,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 176,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
    },
    _id: "6491b62b6bd7fe9e31253b21",
  },
  {
    timeStamp: 1687270901.805,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 176,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b22",
  },
  {
    timeStamp: 1687270901.805,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 176,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="checkbox" id="checkbox2">',
      checked: true,
    },
    _id: "6491b62b6bd7fe9e31253b23",
  },
  {
    timeStamp: 1687270902.153,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 176,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
    },
    _id: "6491b62b6bd7fe9e31253b24",
  },
  {
    timeStamp: 1687270902.222,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 176,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b25",
  },
  {
    timeStamp: 1687270902.223,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 176,
      Y: 208,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input id="radio2" type="radio">',
      checked: true,
    },
    _id: "6491b62b6bd7fe9e31253b26",
  },
  {
    timeStamp: 1687270902.833,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 381,
      Y: 258,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
    },
    _id: "6491b62b6bd7fe9e31253b27",
  },
  {
    timeStamp: 1687270902.903,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 381,
      Y: 258,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<input type="password">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b28",
  },
  {
    timeStamp: 1687270903.35,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "k", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b29",
  },
  {
    timeStamp: 1687270903.351,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b2a",
  },
  {
    timeStamp: 1687270903.37,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "s", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b2b",
  },
  {
    timeStamp: 1687270903.386,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "h", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b2c",
  },
  {
    timeStamp: 1687270903.487,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "k", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b2d",
  },
  {
    timeStamp: 1687270903.487,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "h", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b2e",
  },
  {
    timeStamp: 1687270903.488,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b2f",
  },
  {
    timeStamp: 1687270903.489,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b30",
  },
  {
    timeStamp: 1687270903.506,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "s", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b31",
  },
  {
    timeStamp: 1687270903.53,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b32",
  },
  {
    timeStamp: 1687270903.707,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "h", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b33",
  },
  {
    timeStamp: 1687270903.708,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b34",
  },
  {
    timeStamp: 1687270903.709,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "h", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b35",
  },
  {
    timeStamp: 1687270903.733,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "d", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b36",
  },
  {
    timeStamp: 1687270903.817,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 258,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "6491b62b6bd7fe9e31253b37",
  },
  {
    timeStamp: 1687270903.929,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 381, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b38",
  },
  {
    timeStamp: 1687270903.974,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 258,
      key: "Control",
      HTMLElement: '<input type="password">',
    },
    _id: "6491b62b6bd7fe9e31253b39",
  },
  {
    timeStamp: 1687270903.993,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 381,
      Y: 258,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "6491b62b6bd7fe9e31253b3a",
  },
  {
    timeStamp: 1687270904.02,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 381, Y: 258, key: "a", HTMLElement: '<input type="password">' },
    _id: "6491b62b6bd7fe9e31253b3b",
  },
  {
    timeStamp: 1687270904.078,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 381,
      Y: 258,
      key: "Backspace",
      HTMLElement: '<input type="password">',
    },
    _id: "6491b62b6bd7fe9e31253b3c",
  },
  {
    timeStamp: 1687270905.006,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 387,
      Y: 415,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b3d",
  },
  {
    timeStamp: 1687270905.089,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 387,
      Y: 415,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b3e",
  },
  {
    timeStamp: 1687270905.29,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b3f",
  },
  {
    timeStamp: 1687270905.39,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b40",
  },
  {
    timeStamp: 1687270905.477,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b41",
  },
  {
    timeStamp: 1687270905.53,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b42",
  },
  {
    timeStamp: 1687270905.569,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b43",
  },
  {
    timeStamp: 1687270905.686,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b44",
  },
  {
    timeStamp: 1687270905.853,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b45",
  },
  {
    timeStamp: 1687270905.916,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b46",
  },
  {
    timeStamp: 1687270906.015,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b47",
  },
  {
    timeStamp: 1687270906.076,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b48",
  },
  {
    timeStamp: 1687270906.25,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b49",
  },
  {
    timeStamp: 1687270906.305,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b4a",
  },
  {
    timeStamp: 1687270906.329,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b4b",
  },
  {
    timeStamp: 1687270906.399,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b4c",
  },
  {
    timeStamp: 1687270906.43,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b4d",
  },
  {
    timeStamp: 1687270906.476,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b4e",
  },
  {
    timeStamp: 1687270906.744,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b4f",
  },
  {
    timeStamp: 1687270906.799,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b50",
  },
  {
    timeStamp: 1687270906.885,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b51",
  },
  {
    timeStamp: 1687270906.923,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b52",
  },
  {
    timeStamp: 1687270907.001,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b53",
  },
  {
    timeStamp: 1687270907.07,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b54",
  },
  {
    timeStamp: 1687270907.599,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b55",
  },
  {
    timeStamp: 1687270907.661,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b56",
  },
  {
    timeStamp: 1687270907.713,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b57",
  },
  {
    timeStamp: 1687270907.713,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b58",
  },
  {
    timeStamp: 1687270907.743,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b59",
  },
  {
    timeStamp: 1687270907.813,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b5a",
  },
  {
    timeStamp: 1687270908.037,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 387,
      Y: 415,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b5b",
  },
  {
    timeStamp: 1687270908.126,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 387, Y: 415, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b5c",
  },
  {
    timeStamp: 1687270908.217,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 387,
      Y: 415,
      key: "Control",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b5d",
  },
  {
    timeStamp: 1687270908.218,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 387, Y: 415, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253b5e",
  },
  {
    timeStamp: 1687270908.268,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b5f",
  },
  {
    timeStamp: 1687270908.331,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 387,
      Y: 415,
      key: "Backspace",
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253b60",
  },
  {
    timeStamp: 1687270909.113,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 563,
      Y: 413,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6491b62b6bd7fe9e31253b61",
  },
  {
    timeStamp: 1687270909.19,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 563,
      Y: 413,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b62",
  },
  {
    timeStamp: 1687270910.504,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 420,
      Y: 485,
      scrollX: 0,
      scrollY: 95,
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b63",
  },
  {
    timeStamp: 1687270910.581,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 420,
      Y: 485,
      scrollX: 0,
      scrollY: 95,
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b64",
  },
  {
    timeStamp: 1687270910.741,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 411,
      Y: 496,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b65",
  },
  {
    timeStamp: 1687270910.827,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 411,
      Y: 496,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b66",
  },
  {
    timeStamp: 1687270910.969,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 496, key: "a", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b67",
  },
  {
    timeStamp: 1687270910.984,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 496, key: "s", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b68",
  },
  {
    timeStamp: 1687270911.061,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 411, Y: 496, key: "d", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b69",
  },
  {
    timeStamp: 1687270911.061,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 496, key: "a", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b6a",
  },
  {
    timeStamp: 1687270911.124,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 411, Y: 496, key: "s", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b6b",
  },
  {
    timeStamp: 1687270911.192,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 412, Y: 500, key: "d", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b6c",
  },
  {
    timeStamp: 1687270911.193,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 412, Y: 500, key: "s", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b6d",
  },
  {
    timeStamp: 1687270911.193,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 412, Y: 500, key: "a", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b6e",
  },
  {
    timeStamp: 1687270911.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 420, Y: 506, key: "d", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b6f",
  },
  {
    timeStamp: 1687270911.261,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 420, Y: 506, key: "s", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b70",
  },
  {
    timeStamp: 1687270911.261,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 420, Y: 506, key: "a", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b71",
  },
  {
    timeStamp: 1687270911.329,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 437,
      Y: 511,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b72",
  },
  {
    timeStamp: 1687270911.352,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 439,
      Y: 512,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b73",
  },
  {
    timeStamp: 1687270911.406,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 449,
      Y: 512,
      key: "s",
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b74",
  },
  {
    timeStamp: 1687270911.421,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 451,
      Y: 512,
      key: "d",
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b75",
  },
  {
    timeStamp: 1687270911.458,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 457,
      Y: 512,
      key: "s",
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b76",
  },
  {
    timeStamp: 1687270911.458,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 457,
      Y: 512,
      key: "a",
      HTMLElement:
        '<div class="field" id="testElement"><p>Search : </p><input type="search"></div>',
    },
    _id: "6491b62b6bd7fe9e31253b77",
  },
  {
    timeStamp: 1687270911.537,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 465, Y: 509, key: "d", HTMLElement: '<input type="search">' },
    _id: "6491b62b6bd7fe9e31253b78",
  },
  {
    timeStamp: 1687270912.871,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 463,
      Y: 497,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b79",
  },
  {
    timeStamp: 1687270912.961,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 463,
      Y: 497,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b7a",
  },
  {
    timeStamp: 1687270913.314,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 469,
      Y: 503,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b7b",
  },
  {
    timeStamp: 1687270913.411,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 471,
      Y: 503,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b7c",
  },
  {
    timeStamp: 1687270913.667,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 463,
      Y: 503,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b7d",
  },
  {
    timeStamp: 1687270913.734,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 463,
      Y: 503,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b7e",
  },
  {
    timeStamp: 1687270913.883,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 463,
      Y: 503,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b7f",
  },
  {
    timeStamp: 1687270913.965,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 463,
      Y: 503,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="search">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b80",
  },
  {
    timeStamp: 1687270914.636,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 463,
      Y: 503,
      key: "Backspace",
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b81",
  },
  {
    timeStamp: 1687270914.714,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 463,
      Y: 503,
      key: "Backspace",
      HTMLElement: '<input type="search">',
    },
    _id: "6491b62b6bd7fe9e31253b82",
  },
  {
    timeStamp: 1687270915.645,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 424,
      Y: 530,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b83",
  },
  {
    timeStamp: 1687270915.72,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 424,
      Y: 530,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b84",
  },
  {
    timeStamp: 1687270917.344,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b85",
  },
  {
    timeStamp: 1687270917.421,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b86",
  },
  {
    timeStamp: 1687270917.627,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b87",
  },
  {
    timeStamp: 1687270917.7,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b88",
  },
  {
    timeStamp: 1687270917.89,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b89",
  },
  {
    timeStamp: 1687270917.945,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b8a",
  },
  {
    timeStamp: 1687270918.112,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b8b",
  },
  {
    timeStamp: 1687270918.201,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b8c",
  },
  {
    timeStamp: 1687270918.324,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b8d",
  },
  {
    timeStamp: 1687270918.4,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b8e",
  },
  {
    timeStamp: 1687270918.529,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b8f",
  },
  {
    timeStamp: 1687270918.613,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b90",
  },
  {
    timeStamp: 1687270918.737,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b91",
  },
  {
    timeStamp: 1687270918.813,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b92",
  },
  {
    timeStamp: 1687270918.961,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b93",
  },
  {
    timeStamp: 1687270919.022,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b94",
  },
  {
    timeStamp: 1687270919.138,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b95",
  },
  {
    timeStamp: 1687270919.205,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b96",
  },
  {
    timeStamp: 1687270919.343,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b97",
  },
  {
    timeStamp: 1687270919.407,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b98",
  },
  {
    timeStamp: 1687270919.529,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b99",
  },
  {
    timeStamp: 1687270919.609,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b9a",
  },
  {
    timeStamp: 1687270919.719,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b9b",
  },
  {
    timeStamp: 1687270919.782,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b9c",
  },
  {
    timeStamp: 1687270919.917,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b9d",
  },
  {
    timeStamp: 1687270919.999,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253b9e",
  },
  {
    timeStamp: 1687270920.11,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253b9f",
  },
  {
    timeStamp: 1687270920.18,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253ba0",
  },
  {
    timeStamp: 1687270920.289,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253ba1",
  },
  {
    timeStamp: 1687270920.356,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253ba2",
  },
  {
    timeStamp: 1687270920.469,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253ba3",
  },
  {
    timeStamp: 1687270920.538,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253ba4",
  },
  {
    timeStamp: 1687270920.655,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253ba5",
  },
  {
    timeStamp: 1687270920.729,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253ba6",
  },
  {
    timeStamp: 1687270921.015,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253ba7",
  },
  {
    timeStamp: 1687270921.091,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253ba8",
  },
  {
    timeStamp: 1687270921.273,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253ba9",
  },
  {
    timeStamp: 1687270921.377,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253baa",
  },
  {
    timeStamp: 1687270921.552,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bab",
  },
  {
    timeStamp: 1687270921.647,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 461,
      Y: 528,
      scrollX: 0,
      scrollY: 95,
      HTMLElement: '<input type="number">',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bac",
  },
  {
    timeStamp: 1687270922.628,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 539,
      key: "Control",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bad",
  },
  {
    timeStamp: 1687270922.916,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 539,
      key: "Control",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bae",
  },
  {
    timeStamp: 1687270923.648,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 539,
      key: "Backspace",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253baf",
  },
  {
    timeStamp: 1687270923.708,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 539,
      key: "Backspace",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bb0",
  },
  {
    timeStamp: 1687270923.769,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 539,
      key: "Backspace",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bb1",
  },
  {
    timeStamp: 1687270923.83,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 539,
      key: "Backspace",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bb2",
  },
  {
    timeStamp: 1687270924.248,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 539,
      key: "Control",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bb3",
  },
  {
    timeStamp: 1687270924.342,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 433, Y: 539, key: "z", HTMLElement: '<input type="number">' },
    _id: "6491b62b6bd7fe9e31253bb4",
  },
  {
    timeStamp: 1687270924.428,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 433, Y: 539, key: "z", HTMLElement: '<input type="number">' },
    _id: "6491b62b6bd7fe9e31253bb5",
  },
  {
    timeStamp: 1687270924.459,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 539,
      key: "Control",
      HTMLElement: '<input type="number">',
    },
    _id: "6491b62b6bd7fe9e31253bb6",
  },
  {
    timeStamp: 1687270924.737,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 508,
      Y: 510,
      scrollX: 0,
      scrollY: 95,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6491b62b6bd7fe9e31253bb7",
  },
  {
    timeStamp: 1687270924.796,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 508,
      Y: 510,
      scrollX: 0,
      scrollY: 95,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bb8",
  },
  {
    timeStamp: 1687270926.792,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 407,
      Y: 679,
      scrollX: 0,
      scrollY: 211,
      HTMLElement: "<button>Fetch</button>",
    },
    _id: "6491b62b6bd7fe9e31253bb9",
  },
  {
    timeStamp: 1687270926.866,
    name: "REQUEST",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "lnffrgt5-bj36-xhxt-zbry-23fmmo5rbg45",
    },
    _id: "6491b62b6bd7fe9e31253bba",
  },
  {
    timeStamp: 1687270926.866,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 407,
      Y: 679,
      scrollX: 0,
      scrollY: 211,
      HTMLElement: "<button>Fetch</button>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bbb",
  },
  {
    timeStamp: 1687270927.157,
    name: "RESPONSE",
    type: "FETCH",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      id: "lnffrgt5-bj36-xhxt-zbry-23fmmo5rbg45",
      duration: 292,
    },
    _id: "6491b62b6bd7fe9e31253bbc",
  },
  {
    timeStamp: 1687270929.601,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 406,
      Y: 719,
      scrollX: 0,
      scrollY: 312,
      HTMLElement: "<button>XMLHttpRequest</button>",
    },
    _id: "6491b62b6bd7fe9e31253bbd",
  },
  {
    timeStamp: 1687270929.686,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "q3xwhc65-c6aw-evzn-4bkn-vrywggs0rp8f",
    },
    _id: "6491b62b6bd7fe9e31253bbe",
  },
  {
    timeStamp: 1687270929.687,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 406,
      Y: 719,
      scrollX: 0,
      scrollY: 312,
      HTMLElement: "<button>XMLHttpRequest</button>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bbf",
  },
  {
    timeStamp: 1687270929.69,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 4,
      id: "q3xwhc65-c6aw-evzn-4bkn-vrywggs0rp8f",
    },
    _id: "6491b62b6bd7fe9e31253bc0",
  },
  {
    timeStamp: 1687270931.855,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 53,
      Y: 47,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div>{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}</div></div>',
    },
    _id: "6491b62b6bd7fe9e31253bc1",
  },
  {
    timeStamp: 1687270932.895,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 392,
      Y: 744,
      scrollX: 0,
      scrollY: 312,
      HTMLElement: "<button>Axios</button>",
    },
    _id: "6491b62b6bd7fe9e31253bc2",
  },
  {
    timeStamp: 1687270932.979,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: "u8lba032-vn5r-6yo2-gim7-oe1x3qnexedk",
    },
    _id: "6491b62b6bd7fe9e31253bc3",
  },
  {
    timeStamp: 1687270932.98,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 392,
      Y: 744,
      scrollX: 0,
      scrollY: 312,
      HTMLElement: "<button>Axios</button>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bc4",
  },
  {
    timeStamp: 1687270932.984,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "https://jsonplaceholder.typicode.com/todos/1",
      status: 200,
      responseData:
        '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
      duration: 5,
      id: "u8lba032-vn5r-6yo2-gim7-oe1x3qnexedk",
    },
    _id: "6491b62b6bd7fe9e31253bc5",
  },
  {
    timeStamp: 1687270935.19,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 421,
      Y: 409,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253bc6",
  },
  {
    timeStamp: 1687270935.264,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 421,
      Y: 409,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bc7",
  },
  {
    timeStamp: 1687270935.791,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bc8",
  },
  {
    timeStamp: 1687270935.904,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "d", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bc9",
  },
  {
    timeStamp: 1687270935.993,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bca",
  },
  {
    timeStamp: 1687270936.075,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bcb",
  },
  {
    timeStamp: 1687270936.116,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "r", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bcc",
  },
  {
    timeStamp: 1687270936.231,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bcd",
  },
  {
    timeStamp: 1687270936.233,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "a", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bce",
  },
  {
    timeStamp: 1687270936.312,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bcf",
  },
  {
    timeStamp: 1687270936.4,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd0",
  },
  {
    timeStamp: 1687270936.464,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd1",
  },
  {
    timeStamp: 1687270936.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd2",
  },
  {
    timeStamp: 1687270936.535,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd3",
  },
  {
    timeStamp: 1687270936.588,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "i", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd4",
  },
  {
    timeStamp: 1687270936.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd5",
  },
  {
    timeStamp: 1687270936.635,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "n", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd6",
  },
  {
    timeStamp: 1687270936.71,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: "g", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd7",
  },
  {
    timeStamp: 1687270937.029,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 421, Y: 409, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd8",
  },
  {
    timeStamp: 1687270937.147,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 421, Y: 409, key: " ", HTMLElement: "<textarea></textarea>" },
    _id: "6491b62b6bd7fe9e31253bd9",
  },
  {
    timeStamp: 1687270938.721,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 470,
      Y: 423,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<textarea></textarea>",
    },
    _id: "6491b62b6bd7fe9e31253bda",
  },
  {
    timeStamp: 1687270939.432,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 470,
      Y: 560,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bdb",
  },
  {
    timeStamp: 1687270939.631,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 435,
      Y: 482,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bdc",
  },
  {
    timeStamp: 1687270939.697,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 435,
      Y: 482,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253bdd",
  },
  {
    timeStamp: 1687270939.751,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "Control",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bde",
  },
  {
    timeStamp: 1687270939.838,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "a",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bdf",
  },
  {
    timeStamp: 1687270939.959,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "Control",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be0",
  },
  {
    timeStamp: 1687270939.978,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "a",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be1",
  },
  {
    timeStamp: 1687270940.791,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "d",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be2",
  },
  {
    timeStamp: 1687270940.893,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "d",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be3",
  },
  {
    timeStamp: 1687270940.968,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "r",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be4",
  },
  {
    timeStamp: 1687270941.041,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "a",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be5",
  },
  {
    timeStamp: 1687270941.081,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "r",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be6",
  },
  {
    timeStamp: 1687270941.172,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "g",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be7",
  },
  {
    timeStamp: 1687270941.174,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "a",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be8",
  },
  {
    timeStamp: 1687270941.251,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "g",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253be9",
  },
  {
    timeStamp: 1687270941.345,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "g",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bea",
  },
  {
    timeStamp: 1687270941.394,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "e",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253beb",
  },
  {
    timeStamp: 1687270941.441,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "g",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bec",
  },
  {
    timeStamp: 1687270941.746,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "d",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bed",
  },
  {
    timeStamp: 1687270941.8,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "e",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bee",
  },
  {
    timeStamp: 1687270941.892,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: " ",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bef",
  },
  {
    timeStamp: 1687270941.892,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "d",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf0",
  },
  {
    timeStamp: 1687270941.92,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "Shift",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf1",
  },
  {
    timeStamp: 1687270941.959,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: " ",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf2",
  },
  {
    timeStamp: 1687270942.01,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf3",
  },
  {
    timeStamp: 1687270942.073,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf4",
  },
  {
    timeStamp: 1687270942.151,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf5",
  },
  {
    timeStamp: 1687270942.206,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf6",
  },
  {
    timeStamp: 1687270942.322,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf7",
  },
  {
    timeStamp: 1687270942.353,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf8",
  },
  {
    timeStamp: 1687270942.629,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bf9",
  },
  {
    timeStamp: 1687270942.684,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "?",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bfa",
  },
  {
    timeStamp: 1687270942.803,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "Shift",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bfb",
  },
  {
    timeStamp: 1687270943.011,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "Control",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bfc",
  },
  {
    timeStamp: 1687270943.083,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "a",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bfd",
  },
  {
    timeStamp: 1687270943.136,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "Control",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bfe",
  },
  {
    timeStamp: 1687270943.155,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 435,
      Y: 482,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253bff",
  },
  {
    timeStamp: 1687270943.18,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "a",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253c00",
  },
  {
    timeStamp: 1687270943.231,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 435,
      Y: 482,
      key: "Backspace",
      HTMLElement: '<textarea style="height: 168px;"></textarea>',
    },
    _id: "6491b62b6bd7fe9e31253c01",
  },
  {
    timeStamp: 1687270944.233,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 394, Y: 184, scrollX: 0, scrollY: 0, HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c02",
  },
  {
    timeStamp: 1687270944.315,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 394,
      Y: 184,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253c03",
  },
  {
    timeStamp: 1687270944.51,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "w", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c04",
  },
  {
    timeStamp: 1687270944.635,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "w", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c05",
  },
  {
    timeStamp: 1687270944.797,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "o", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c06",
  },
  {
    timeStamp: 1687270944.867,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "o", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c07",
  },
  {
    timeStamp: 1687270944.905,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c08",
  },
  {
    timeStamp: 1687270945.005,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "k", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c09",
  },
  {
    timeStamp: 1687270945.006,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "r", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c0a",
  },
  {
    timeStamp: 1687270945.076,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "k", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c0b",
  },
  {
    timeStamp: 1687270945.167,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c0c",
  },
  {
    timeStamp: 1687270945.279,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c0d",
  },
  {
    timeStamp: 1687270945.28,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c0e",
  },
  {
    timeStamp: 1687270945.372,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c0f",
  },
  {
    timeStamp: 1687270945.372,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c10",
  },
  {
    timeStamp: 1687270945.46,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c11",
  },
  {
    timeStamp: 1687270945.502,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c12",
  },
  {
    timeStamp: 1687270945.574,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c13",
  },
  {
    timeStamp: 1687270945.659,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c14",
  },
  {
    timeStamp: 1687270945.678,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c15",
  },
  {
    timeStamp: 1687270945.893,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Control", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c16",
  },
  {
    timeStamp: 1687270945.956,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "a", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c17",
  },
  {
    timeStamp: 1687270946.008,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Control", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c18",
  },
  {
    timeStamp: 1687270946.047,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "a", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c19",
  },
  {
    timeStamp: 1687270946.076,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c1a",
  },
  {
    timeStamp: 1687270946.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c1b",
  },
  {
    timeStamp: 1687270946.235,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c1c",
  },
  {
    timeStamp: 1687270946.52,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c1d",
  },
  {
    timeStamp: 1687270946.655,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c1e",
  },
  {
    timeStamp: 1687270946.793,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "T", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c1f",
  },
  {
    timeStamp: 1687270946.838,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c20",
  },
  {
    timeStamp: 1687270946.871,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c21",
  },
  {
    timeStamp: 1687270946.948,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c22",
  },
  {
    timeStamp: 1687270947.018,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c23",
  },
  {
    timeStamp: 1687270947.156,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c24",
  },
  {
    timeStamp: 1687270947.219,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c25",
  },
  {
    timeStamp: 1687270947.28,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c26",
  },
  {
    timeStamp: 1687270947.314,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c27",
  },
  {
    timeStamp: 1687270947.315,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "t", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c28",
  },
  {
    timeStamp: 1687270947.435,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c29",
  },
  {
    timeStamp: 1687270947.436,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c2a",
  },
  {
    timeStamp: 1687270947.519,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c2b",
  },
  {
    timeStamp: 1687270947.688,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c2c",
  },
  {
    timeStamp: 1687270947.765,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c2d",
  },
  {
    timeStamp: 1687270947.765,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "c", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c2e",
  },
  {
    timeStamp: 1687270947.858,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "c", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c2f",
  },
  {
    timeStamp: 1687270947.943,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "c", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c30",
  },
  {
    timeStamp: 1687270948.068,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c31",
  },
  {
    timeStamp: 1687270948.089,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "c", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c32",
  },
  {
    timeStamp: 1687270948.147,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "e", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c33",
  },
  {
    timeStamp: 1687270948.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c34",
  },
  {
    timeStamp: 1687270948.355,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c35",
  },
  {
    timeStamp: 1687270948.356,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "s", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c36",
  },
  {
    timeStamp: 1687270948.387,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c37",
  },
  {
    timeStamp: 1687270948.462,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c38",
  },
  {
    timeStamp: 1687270948.564,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c39",
  },
  {
    timeStamp: 1687270948.565,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "f", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c3a",
  },
  {
    timeStamp: 1687270948.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c3b",
  },
  {
    timeStamp: 1687270948.754,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "l", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c3c",
  },
  {
    timeStamp: 1687270948.816,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "l", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c3d",
  },
  {
    timeStamp: 1687270948.865,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c3e",
  },
  {
    timeStamp: 1687270948.914,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c3f",
  },
  {
    timeStamp: 1687270948.957,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c40",
  },
  {
    timeStamp: 1687270949.324,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c41",
  },
  {
    timeStamp: 1687270949.452,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c42",
  },
  {
    timeStamp: 1687270949.505,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c43",
  },
  {
    timeStamp: 1687270949.597,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c44",
  },
  {
    timeStamp: 1687270949.642,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c45",
  },
  {
    timeStamp: 1687270949.722,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c46",
  },
  {
    timeStamp: 1687270949.761,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c47",
  },
  {
    timeStamp: 1687270949.827,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c48",
  },
  {
    timeStamp: 1687270949.887,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c49",
  },
  {
    timeStamp: 1687270950.15,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c4a",
  },
  {
    timeStamp: 1687270950.211,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "u", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c4b",
  },
  {
    timeStamp: 1687270950.338,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "l", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c4c",
  },
  {
    timeStamp: 1687270950.404,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "l", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c4d",
  },
  {
    timeStamp: 1687270950.469,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "l", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c4e",
  },
  {
    timeStamp: 1687270950.539,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c4f",
  },
  {
    timeStamp: 1687270950.54,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "l", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c50",
  },
  {
    timeStamp: 1687270950.604,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c51",
  },
  {
    timeStamp: 1687270950.647,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: " ", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c52",
  },
  {
    timeStamp: 1687270950.842,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c53",
  },
  {
    timeStamp: 1687270950.889,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c54",
  },
  {
    timeStamp: 1687270950.966,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c55",
  },
  {
    timeStamp: 1687270951.028,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "?", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c56",
  },
  {
    timeStamp: 1687270951.08,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Shift", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c57",
  },
  {
    timeStamp: 1687270951.32,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Control", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c58",
  },
  {
    timeStamp: 1687270951.408,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "a", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c59",
  },
  {
    timeStamp: 1687270951.48,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Control", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c5a",
  },
  {
    timeStamp: 1687270951.505,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c5b",
  },
  {
    timeStamp: 1687270951.506,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "a", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c5c",
  },
  {
    timeStamp: 1687270951.547,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 394, Y: 184, key: "Backspace", HTMLElement: "<input>" },
    _id: "6491b62b6bd7fe9e31253c5d",
  },
  {
    timeStamp: 1687270952.457,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 568,
      Y: 178,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 168px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6491b62b6bd7fe9e31253c5e",
  },
  {
    timeStamp: 1687270952.561,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 568,
      Y: 178,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 168px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "6491b62b6bd7fe9e31253c5f",
  },
  {
    timeStamp: 1687270954.193,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 560,
      Y: 178,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="checkboxContainer"><label for="checkbox1">Option 1</label><input type="checkbox" id="checkbox1"><label for="checkbox2">Option 2</label><input type="checkbox" id="checkbox2"></div><div class="checkboxContainer"><label for="radio1">Option 1</label><input id="radio1" type="radio"><label for="radio2">Option 2</label><input id="radio2" type="radio"></div><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea style="height: 168px;"></textarea></div><div class="field" id="testElement"><p>Search : </p><input type="search"></div><div class="field"><input type="number"></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
    },
    _id: "6491b62b6bd7fe9e31253c60",
  },
  {
    timeStamp: 1687270955.607,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 65.951 },
    _id: "6491b62b6bd7fe9e31253c61",
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
    width: 815,
    height: 619,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 0px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
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
