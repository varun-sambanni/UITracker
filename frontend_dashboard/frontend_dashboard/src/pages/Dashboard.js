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
import React, { useEffect, useState } from "react";
import EventLogModal from "../components/EventLogModal";
import EventLog from "../components/EventLog";
import AutoSearch from "../components/AutoSearch";

let currEventLogsLoaded = [],
  currURLsLoaded = [], // No duplicates
  sessionIDsUnderURL = []; // No duplicates

function Dashboard() {
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
        console.log("Pushing ", eventLog.sessionId);
        tempEventLogs.push(eventLog);
      }
    }

    setEventLogs(tempEventLogs);
    console.log(tempEventLogs[currEventLogViewIndex]);
    console.log(eventLogs[currEventLogViewIndex]);
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
      <div className="header">
        <div className="headerCiscoDNASpacesContainer">
          <span className="headerCisco">Cisco</span>
          <span className="headerDNASpaces">&nbsp;DNA Spaces&nbsp;</span>
          <span className="headerDivider"></span>
          <span className="headerAppName">Events Dashboard</span>
        </div>
      </div>
      <div className="mainContainer">
        <EventLogModal
          isModalOpen={isEventLogModalOpen}
          setIsModalOpen={setIsEventLogModalOpen}
          eventLog={eventLogs[currEventLogViewIndex]}
        />
        <div className="filterBar containerCard">
          <div>
            <div>Number of Logs : {eventLogs.length}</div>
            <div className="filtersContainer ">
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
          {sessionIDsUnderURL.includes(sessionId) && (
            <div className="eventLogModalDetailsContainer containerCard">
              <div className="eventLogModalDetails">
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">URL: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].URL}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">Latitude: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].location
                      ? eventLogs[0].location.latitude.$numberDecimal
                      : "Unavailable"}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">Longitude:</div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].location
                      ? eventLogs[0].location.longitude.$numberDecimal
                      : "Unavailable"}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">Session ID: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].sessionId}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">Time Stamp: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].timeStamp}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">IP Address: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].ipAddress}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">
                    Number of Events:
                  </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].events.length}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">Width: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].width}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">Height: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].height}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">
                    Scroll Bar Width:
                  </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].scrollBarWidth}
                  </div>
                </div>
                <div className="eventLogDetailRow">
                  <div className="eventLogModalDetailsTitle">User Agent: </div>
                  <div className="eventLogModalDetailsValue">
                    {eventLogs[0].userAgent}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {URL && sessionId && (
          <div>
            {eventLogs && eventLogs.length > 0 && (
              <EventLog
                eventLog={eventLogs[0]}
                isFromAModal={false}
                sessionId={sessionId}
                eventLogs={eventLogs}
                currEventLogViewIndex={currEventLogViewIndex}
              />
            )}
            {false && (
              <div className="containerCard">
                <div className="tableName">EVENT LOGS</div>
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
                      <TableHead
                        className="tableHead"
                        aria-label="sticky table"
                      >
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
                                    Latitude:
                                    {eventLog.location.latitude.$numberDecimal}
                                    <br />
                                    Longitude:
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
        )}
      </div>
    </div>
  );
}

export default Dashboard;
