import "../App.css";
import React, { useEffect, useState } from "react";
import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Autocomplete,
  TextField,
  Paper,
} from "@mui/material";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "white",
  border: "2px solid black",
  padding: "0.4em",
  boxShadow: 24,
  margin: "0 auto",
  overflow: "auto",
};

const EVENT_NAMES = [
  "PAGE_EVENT",
  "USER_EVENT",
  "RESPONSE",
  "REQUEST",
  "ERROR",
];

const EVENTS = {
  // {name : [type]}
  PAGE_EVENT: [
    "RELOAD",
    "TAB_ACTIVE",
    "TAB_HIDDEN",
    "NAVIGATE",
    "BACK_FORWARD",
    "PRERENDER",
  ],
  USER_EVENT: [
    "IDLE",
    "KEYDOWN",
    "KEYUP",
    "CLICK",
    "CONTEXTMENU",
    "MOUSE_DRAG",
    "PAGE_CLOSE",
    "ALERT",
    "CURSOR_MOVE",
    "FORM_SUBMISSION",
    "DOWNLOAD",
  ],
  RESPONSE: ["FETCH", "XMLHttpRequest"],
  REQUEST: ["FETCH", "XMLHttpRequest"],
  ERROR: ["RUNTIME_CRASH", "UNHANDLED_PROMISE_REJECTION", "CONSOLE_ERROR"],
};

let loadedEvents = [];

const EventLog = ({ eventLog, setIsModalOpen, isFromAModal }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("USER_EVENT");
  const [events, setEvents] = useState(eventLog.events);
  loadedEvents = eventLog.events;

  const nameChangeHandler = (value) => {
    let tempEvents = [];
    if (value === null || value === "") {
      setEvents(loadedEvents);
    }
    for (let event of loadedEvents) {
      if (event.name.includes(value) === true) {
        tempEvents.push(event);
      }
    }
    setName(value);
    setEvents(tempEvents);
  };

  const typeChangeHandler = (value) => {
    let tempEvents = [];
    if (value === null || value === "") {
      setEvents(loadedEvents);
    }
    for (let event of loadedEvents) {
      if (event.type.includes(value) === true) {
        tempEvents.push(event);
      }
    }
    setType(value);
    setEvents(tempEvents);
  };

  return (
    <>
      {eventLog !== undefined && (
        <div className="modalDataContainer">
          <Autocomplete
            disablePortal
            disableClearable
            id="combo-box-demo"
            size="small"
            value={name}
            options={EVENT_NAMES}
            onChange={(event, values) => {
              nameChangeHandler(values);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                value={name}
                onChange={(event) => {
                  nameChangeHandler(event.target.value);
                }}
                sx={{ margin: "1em 0em" }}
                {...params}
                label="EVENT"
              />
            )}
          />
          <Autocomplete
            disablePortal
            disableClearable
            id="combo-box-demo"
            size="small"
            value={type}
            options={EVENTS[type]}
            onChange={(event, values) => {
              typeChangeHandler(values);
            }}
            sx={{ width: 300, margin: "1em 0em" }}
            renderInput={(params) => (
              <TextField
                sx={{ textTransform: "uppercase" }}
                {...params}
                label="TYPE"
              />
            )}
          />

          <div className="modalHeader">
            <div className="eventLogModalDetails">
              <div>URL : {eventLog.URL}</div>
              <div>
                Latitude : {eventLog.location.latitude.$numberDecimal}
                <br />
                Longitude : {eventLog.location.longitude.$numberDecimal}
              </div>
              <div>Session ID : {eventLog.sessionId}</div>
              <div>Time stamp : {eventLog.timeStamp}</div>
              <div>IP Address : {eventLog.ipAddress}</div>
              <div>Number of Events : {events.length}</div>
            </div>
            {isFromAModal && (
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            )}
          </div>
          <div>
            <TableContainer
              component={Paper}
              sx={{
                overflow: "auto",
                maxHeight: "80vh",
                border: "1px solid black",
              }}
            >
              <Table>
                <TableHead className="tableHead" aria-label="sticky table">
                  <TableCell className="TableCell">Event No.</TableCell>
                  <TableCell className="TableCell">Name</TableCell>
                  <TableCell className="TableCell">Type</TableCell>
                  <TableCell className="TableCell">Time Stamp</TableCell>
                  <TableCell className="TableCell">Data</TableCell>
                </TableHead>
                <TableBody>
                  {events !== undefined &&
                    events.map((event, index) => {
                      return (
                        <TableRow hover={true} key={index}>
                          <TableCell className="TableCell">
                            {index + 1}
                          </TableCell>
                          <TableCell className="TableCell">
                            {event.name}
                          </TableCell>
                          <TableCell className="TableCell">
                            {event.type}
                          </TableCell>
                          <TableCell className="TableCell">
                            {event.timeStamp}
                          </TableCell>
                          <TableCell className="TableCell">
                            {event &&
                              event.data &&
                              Object.keys(event.data).map((key) => (
                                <div key={key} className="eventLogDataField">
                                  <p className="dataKeyField">{key}:</p>{" "}
                                  {event.data[key]}
                                </div>
                              ))}
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
    </>
  );
};

export default EventLog;
