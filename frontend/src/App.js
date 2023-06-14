import "./App.css";
import UITracker from "./lib/UITracker";
import { useState, useEffect } from "react";
import axios from "axios";

/* 
  React Strict Mode commented : Page render only once
*/

function App() {
  const [fetchedData, setFetchedData] = useState("");
  const [sessionId, setSessionId] = useState("");

  const submitHandler = (e) => {
    window.location.replace("/");
  };

  const unreachableServerHandler = () => {
    fetch("https://www.somerandomurlsajksdjkad.com/")
      .then((res) => res.json())
      .then((data) => {});
  };

  const alertHandler = () => {
    window.alert("Alert message");
  };

  const crashHandler = () => {
    throw new Error("APP CRASHED");
  };

  const httpRequestHandlerFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setFetchedData(JSON.stringify(json)))
      .catch((err) => {
        console.log("Error fetching data\n", err);
      });
  };

  const httpRequestHandlerXML = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setFetchedData(xhttp.responseText);
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
  };

  const httpRequestHandlerAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setFetchedData(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log("Error fetching data \n");
      });
  };

  const consoleErrorHandler = () => {
    console.error("Console error message \n");
  };

  const getUID = () => {
    const alphaNum = Array.from(Array(26)).map((e, i) =>
      String.fromCharCode(i + 97)
    );
    for (let i = 0; i < 10; i++) {
      alphaNum.push(i.toString());
    }
    const format = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
    let uuid = "";
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "-") {
        uuid += "-";
        continue;
      }
      let dt = new Date().getTime();
      const num = Math.floor(Math.random() * 36);
      uuid += alphaNum[(dt + num) % 36];
    }
    return uuid;
  };

  useEffect(() => {
    // Call these functions only when the page DOM has loaded
    const uiTracker = new UITracker();

    uiTracker.config({
      dataTransmissionInterval: 2000000,
      reportOnError: false,
      sessionId: `abc_user/${getUID()}`,
    });

    uiTracker.start();
    setSessionId(sessionStorage.getItem("session-id"));
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div>{fetchedData}</div>
      </div>
      <div>Session ID : {sessionId}</div>
      <hr />
      <div className="inputContainer">
        <div className="field">
          <p>Name : </p>
          <input></input>
        </div>
        <div className="field">
          <p>Password : </p>
          <input type="password"></input>
        </div>
        <div className="field">
          <p>Field 1 : </p>
          <input></input>
        </div>

        <div className="field" id="testElement">
          <p>Field 2 : </p>
          <textarea></textarea>
        </div>
        <div className="field">
          <p>Field 3 : </p>
          <input></input>
        </div>

        <div className="field" id="testElement">
          <p>Field 4 : </p>
          <textarea></textarea>
        </div>
        <div className="buttonsContainer">
          <button type="submit" onClick={submitHandler}>
            Submit Form
          </button>
          <button onClick={alertHandler}>Alert </button>
          <button onClick={crashHandler}>Crash</button>
          <button onClick={unreachableServerHandler}>Unsuccessful Fetch</button>
          <button onClick={httpRequestHandlerFetch}>Fetch</button>
          <button onClick={httpRequestHandlerXML}>XMLHttpRequest</button>
          <button onClick={httpRequestHandlerAxios}>Axios</button>
          <button onClick={consoleErrorHandler}>console.error</button>
          <button>
            <a
              href="https://www.rapidtables.com/web/html/link/test_file.zip"
              download
            >
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
