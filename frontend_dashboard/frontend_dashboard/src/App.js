import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  TextField,
} from "@mui/material";
import "./App.css";
import React, { useEffect, useState } from "react";
import EventLogModal from "./components/EventLogModal";

let currEventLogsLoaded = [];

function App() {
  const [eventLogs, setEventLogs] = useState([]);
  const [currEventLogViewIndex, setCurrEventLogViewIndex] = useState(0);
  const [isEventLogModalOpen, setIsEventLogModalOpen] = useState(false);
  const [URL, setURL] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  console.log("Ok");
  useEffect(() => {
    fetch("http://localhost:5000/getEventLogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          console.log("Error fetching event logs ", data.msg);
        } else {
          console.log(data);
          currEventLogsLoaded = data.data;
          setEventLogs(data.data);
        }
      })
      .catch((err) => {
        console.log("Error fetching event logs ", err);
      });
  }, []);

  useEffect(() => {
    if (sessionId === "" && URL === "" && ipAddress === "") {
      // No filters applied, load back orignal data
      setEventLogs(currEventLogsLoaded);
      return;
    }
    let tempEventLogs = [];
    for (let eventLog of currEventLogsLoaded) {
      if (
        (sessionId !== "" && eventLog.sessionId.includes(sessionId) === true) ||
        (URL !== "" && eventLog.URL.includes(URL) === true) ||
        (ipAddress !== "" && eventLog.ipAddress.includes(ipAddress) === true)
      ) {
        tempEventLogs.push(eventLog);
      }
    }
    setEventLogs(tempEventLogs);
  }, [sessionId, URL, ipAddress]); // Filtering whenever filter values change

  const TableRowEventHandler = (index) => {
    setCurrEventLogViewIndex(index);
    setIsEventLogModalOpen(true);
  };

  const filterChangeHandler = (e) => {
    setURL(e.target.value);
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
          <TextField
            sx={{ margin: "0.2em" }}
            size="small"
            label="URL"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
          <TextField
            sx={{ margin: "0.2em" }}
            size="small"
            label="Session ID"
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
          />
          <TextField
            sx={{ margin: "0.2em" }}
            size="small"
            label="IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>
        {/* <button>Search</button> */}
      </div>
      <div className="tableContainer">
        <TableContainer>
          <Table>
            <TableHead aria-label="sticky table">
              <TableCell className="TableCell">Log No.</TableCell>
              <TableCell className="TableCell">URL</TableCell>
              <TableCell className="TableCell">Location</TableCell>
              <TableCell className="TableCell">Session ID</TableCell>
              <TableCell className="TableCell">Time Stamp</TableCell>
              <TableCell className="TableCell">IP Address</TableCell>
            </TableHead>
            <TableBody>
              {eventLogs.map((eventLog, index) => {
                return (
                  <TableRow
                    hover={true}
                    key={index}
                    onClick={() => TableRowEventHandler(index)}
                  >
                    <TableCell className="TableCell">{index + 1}</TableCell>
                    <TableCell className="TableCell">{eventLog.URL}</TableCell>
                    <TableCell className="TableCell">
                      <TableRow>
                        Latitude : {eventLog.location.latitude.$numberDecimal}
                        <br />
                        Longitude : {eventLog.location.longitude.$numberDecimal}
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
  );
}

export default App;
