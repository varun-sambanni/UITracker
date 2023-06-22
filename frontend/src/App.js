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
  const [selectValue, setSelectValue] = useState("1");

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
    const selectInput = document.getElementById("select-id");
    selectInput.value = "2";
    const event = new Event("change", { bubbles: true });
    selectInput.dispatchEvent(event);

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

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    // Call these functions only when the page DOM has loaded
    const uiTracker = new UITracker();
    uiTracker.config({
      dataTransmissionInterval: 10000,
      reportOnError: false,
      sessionId: `abc_user/${getUID()}`,
    });
    uiTracker.start();
  }, []);

  return (
    <div className="App">
      <div className="header">
        Value : {selectValue}
        <div>{fetchedData}</div>
      </div>
      <div>Session ID : {sessionId}</div>
      <hr />
      <select id="select-id" onChange={handleChange}>
        <option value={"1"}>Option 1</option>
        <option value={"2"}>Option 2</option>
        <option value={"3"}>Option 3</option>
      </select>
      <input type="range"></input>
      <br />
      <div className="dateTimeContainer">
        <input type="date"></input>
        <input type="time"></input>
      </div>
      <div className="inputContainer">
        <div className="checkboxContainer">
          <label htmlFor="checkbox1">Option 1</label>
          <input type="checkbox" id="checkbox1"></input>
          <label htmlFor="checkbox2">Option 2</label>
          <input type="checkbox" id="checkbox2"></input>
        </div>
        <div className="checkboxContainer">
          <label htmlFor="radio1">Option 1</label>
          <input id="radio1" type="radio" name="radio"></input>
          <label htmlFor="radio2">Option 2</label>
          <input id="radio2" type="radio" name="radio"></input>
        </div>

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
        <div className="field" id="testElement">
          <p>Search : </p>
          <input type="search"></input>
        </div>
        <div className="field">
          <input type="number"></input>
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
