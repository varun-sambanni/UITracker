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
  const url = "http://localhost:3000/";

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    window.addEventListener("message", (event) => {
      console.log("message ", event);
    });
    async function start() {
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
      //window.scrollTo(0, 244);

      await delay(2000);
      console.log("ok 1");
      await delay(2000);
      console.log("ok 2");
    }
    start();
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      const iframe = iframeRef.current.contentWindow;
      const element = iframe.elementFromPoint(598, 158);
      console.log("element", element);
      iframe.parent.postMessage("iframe postmessage", "*");
    }, 100);
  };

  return (
    <>
      <iframe
        id="iframe-id"
        ref={iframeRef}
        src={url}
        onLoad={handleLoad}
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
