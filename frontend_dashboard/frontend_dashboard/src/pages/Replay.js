import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import "../App.css";
import React, { useEffect, useState, useRef } from "react";

const events = [
  {
    timeStamp: "2023-6-7 14:59:38",
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3000/", DOMLoadTime: 0.0265 },
    _id: "64804e0ca8317b3e6d9e6a85",
  },
  {
    timeStamp: "2023-6-7 14:59:39",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 409,
      Y: 111,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="inputContainer"><div class="field"><p>Name : </p><input></div><div class="field"><p>Password : </p><input type="password"></div><div class="field"><p>Field 1 : </p><input></div><div class="field" id="testElement"><p>Field 2 : </p><textarea></textarea></div><div class="field"><p>Field 3 : </p><input></div><div class="field" id="testElement"><p>Field 4 : </p><textarea></textarea></div><div class="buttonsContainer"><button type="submit">Submit Form</button><button>Alert </button><button>Crash</button><button>Unsuccessful Fetch</button><button>Fetch</button><button>XMLHttpRequest</button><button>Axios</button><button>console.error</button><button><a href="https://www.rapidtables.com/web/html/link/test_file.zip" download="">Download</a></button></div></div>',
      button: 0,
    },
    _id: "64804e0ca8317b3e6d9e6a86",
  },
  {
    timeStamp: "2023-6-7 14:59:40",
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 559,
      Y: 159,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: "<input>",
      button: 0,
    },
    _id: "64804e0ca8317b3e6d9e6a87",
  },
];

function Replay() {
  const url = "http://localhost:3000/Test/?session-replay=true";

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      console.log("Replaying ...");
      const iframe = document.getElementById("iframe-id");
      var iframeWindow = iframe.contentWindow;
      iframeWindow.addEventListener("click", (e) => {
        var x = e.clientX;
        var y = e.clientY;
        console.log("Click at ", e.clientX, e.clientY);
        var element = iframeWindow.document.elementFromPoint(x, y);
        console.log("element ", element);
      });

      iframeWindow.document.elementFromPoint(314, 246).focus();
      iframeWindow.document.elementFromPoint(314, 246).select();
      var event = new KeyboardEvent("keypress", {
        key: "A", // Specify the key you want to trigger (e.g., 'Enter', 'A', '1', etc.)
        keyCode: 13, // The key code for the specified key (13 is the key code for Enter)
        which: 13, // The 'which' property represents the key code for older browsers
      });

      // Dispatch the event on the input element
      iframeWindow.document.elementFromPoint(314, 246).dispatchEvent(event);
      // Dispatch the click event on the input element

      // var keyPressEvent = new KeyboardEvent("keypress", {
      //   key: "A", // Specify the key you want to simulate
      //   bubbles: true,
      //   cancelable: true,
      // });

      // iframeWindow.document
      //   .elementFromPoint(314, 246)
      //   .dispatchEvent(keyPressEvent);

      // iframeWindow.document.elementFromPoint(362, 670).dispatchEvent(
      //   new MouseEvent("click", {
      //     bubbles: true,
      //     cancelable: true,
      //     view: iframeWindow,
      //   })
      // );
      var clickEvent = new MouseEvent("click", {
        bubbles: true, // Set this to true to enable event bubbling
        cancelable: true,
        view: iframeWindow,
        clientX: 335, // Replace x and y with your desired coordinates
        clientY: 670,
      });
      iframeWindow.dispatchEvent(clickEvent);
    }, 2000);
  };

  return (
    <>
      <iframe
        id="iframe-id"
        ref={iframeRef}
        onLoad={handleLoad}
        src={url}
        title="embedded page"
        scrolling="no"
        style={{
          position: "relative",
          border: "none",
          width: "100%",
          minHeight: "200vh",
          overflow: "none",
        }}
      ></iframe>
    </>
  );
}

export default Replay;
