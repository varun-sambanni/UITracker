import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  TextField,
  Autocomplete,
  Paper,
} from "@mui/material";
import "./App.css";
import React, { useEffect, useState } from "react";
import EventLogModal from "./components/EventLogModal";
import EventLog from "./components/EventLog";
import AutoSearch from "./components/AutoSearch";

let currEventLogsLoaded = [],
  currURLsLoaded = [], // No duplicates
  sessionIDsUnderURL = []; // No duplicates

function App() {
  const [eventLogs, setEventLogs] = useState([]);
  const [currEventLogViewIndex, setCurrEventLogViewIndex] = useState(0);
  const [isEventLogModalOpen, setIsEventLogModalOpen] = useState(false);
  const [URL, setURL] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [showSessionID, setShowSessionIDs] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/getEventLogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          console.log("Error fetching event logs ", data.msg);
        } else {
          console.log("Data fetched");
          console.log(data);
          data.data.reverse();

          for (let eventLog of data.data) {
            eventLog.events.reverse();
            if (currURLsLoaded.includes(eventLog.URL) === false) {
              currURLsLoaded.push(eventLog.URL);
            }
          }
          currEventLogsLoaded = data.data;
          setEventLogs(data.data);
        }
      })
      .catch((err) => {
        console.log("Error fetching event logs ", err);
      });
  }, []);

  useEffect(() => {
    console.log("filter useEffect");
    if (sessionId === "" && URL === "") {
      // No filters applied, load back orignal data
      setEventLogs(currEventLogsLoaded);
      return;
    }
    let tempEventLogs = [];
    for (let eventLog of currEventLogsLoaded) {
      if (
        (sessionId === "" ||
          (sessionId !== "" &&
            eventLog.sessionId.includes(sessionId) === true)) &&
        (URL === "" || (URL !== "" && eventLog.URL.includes(URL) === true))
      ) {
        tempEventLogs.push(eventLog);
      }
    }
    setEventLogs(tempEventLogs);
  }, [sessionId, URL]); // Filtering whenever filter values change

  const TableRowEventHandler = (index) => {
    setCurrEventLogViewIndex(index);
    setIsEventLogModalOpen(true);
  };

  const urlChangeHandler = (value) => {
    console.log("url changed ");
    setURL(value);
    setShowSessionIDs(true);
    sessionIDsUnderURL = [];
    for (let eventLog of currEventLogsLoaded) {
      if (
        eventLog.URL === value &&
        sessionIDsUnderURL.includes(eventLog.sessionId) === false
      ) {
        sessionIDsUnderURL.push(eventLog.sessionId);
      }
    }
    console.log(sessionIDsUnderURL);
  };

  return (
    <div className="App">
      <div className="header"></div>
      <EventLogModal
        isModalOpen={isEventLogModalOpen}
        setIsModalOpen={setIsEventLogModalOpen}
        eventLog={eventLogs[currEventLogViewIndex]}
      />
      <div>Number of Logs : {eventLogs.length}</div>
      <div className="filterBar">
        <div className="filtersContainer">
          <AutoSearch
            value={URL}
            setValue={setURL}
            onChangeHandler={urlChangeHandler}
            label={"URL"}
            options={currURLsLoaded}
          />
          <AutoSearch
            value={sessionId}
            setValue={setSessionId}
            onChangeHandler={setSessionId}
            label={"Session ID"}
            options={sessionIDsUnderURL}
          />
        </div>
      </div>
      {URL && sessionId && (
        <div>
          {eventLogs && eventLogs.length > 0 && (
            <EventLog eventLog={eventLogs[0]} isFromAModal={false} />
          )}
          <div className="tableContainer">
            <TableContainer
              sx={{
                overflow: "auto",
                maxHeight: "90vh",
                border: "1px solid black",
              }}
              component={Paper}
            >
              <Table>
                <TableHead className="tableHead" aria-label="sticky table">
                  <TableCell className="TableCell">Log No.</TableCell>
                  <TableCell className="TableCell">URL</TableCell>
                  <TableCell className="TableCell">Location</TableCell>
                  <TableCell className="TableCell">Session ID</TableCell>
                  <TableCell className="TableCell">Time Stamp</TableCell>
                  <TableCell className="TableCell">IP Address</TableCell>
                </TableHead>
                <TableBody>
                  {eventLogs.length &&
                    eventLogs.map((eventLog, index) => {
                      return (
                        <TableRow
                          hover={true}
                          key={index}
                          onClick={() => TableRowEventHandler(index)}
                        >
                          <TableCell className="TableCell">
                            {index + 1}
                          </TableCell>
                          <TableCell className="TableCell">
                            {eventLog.URL}
                          </TableCell>
                          <TableCell className="TableCell">
                            <TableRow>
                              Latitude :{" "}
                              {eventLog.location.latitude.$numberDecimal}
                              <br />
                              Longitude :{" "}
                              {eventLog.location.longitude.$numberDecimal}
                            </TableRow>
                          </TableCell>
                          <TableCell className="TableCell">
                            {eventLog.sessionId}
                          </TableCell>
                          <TableCell className="TableCell">
                            {eventLog.timeStamp}
                          </TableCell>
                          <TableCell className="TableCell">
                            {eventLog.ipAddress}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
