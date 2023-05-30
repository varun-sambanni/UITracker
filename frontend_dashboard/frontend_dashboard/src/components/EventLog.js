import "../App.css";
import React, { useEffect, useState, createElement, useCallback } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import AutoSearch from "./AutoSearch";

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

const COLUMNS = [
  {
    field: "eventNo",
    width: 80,
    headerClassName: "dataGridHeader",
  },
  {
    field: "name",
    width: 120,
    headerClassName: "dataGridHeader",
  },
  {
    field: "type",
    width: 140,
    headerClassName: "dataGridHeader",
  },
  {
    field: "timeStamp",
    width: 160,
    headerClassName: "dataGridHeader",
  },
  {
    field: "data",
    width: 760,
    headerClassName: "dataGridHeader",
    renderCell: (params) => (
      <div>{params.value && createElement("div", {}, params.value)}</div>
    ),
  },
];

let loadedEvents = [],
  loadedRows = [];

const EventLog = ({ eventLog, setIsModalOpen, isFromAModal, sessionId }) => {
  const [name, setName] = useState("");
  const [events, setEvents] = useState(eventLog.events);
  const [refreshDataGrid, setRefreshDataGrid] = useState(false);
  const [type, setType] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    loadedRows = [];
    loadedEvents = eventLog.events;

    for (let i = 0; i < loadedEvents.length; i++) {
      loadedRows.push({
        id: i + 1,
        eventNo: i + 1,
        name: loadedEvents[i].name,
        type: loadedEvents[i].type,
        timeStamp: loadedEvents[i].timeStamp,
        data:
          loadedEvents[i].data &&
          Object.keys(loadedEvents[i].data).map((key) => (
            <div key={key} className="eventLogDataField">
              <p className="dataKeyField">{key}:</p> {loadedEvents[i].data[key]}
            </div>
          )),
      });
    }
    setName("");
    setType("");
    setRows(loadedRows);
  }, [refreshDataGrid]);

  useEffect(() => {
    setRefreshDataGrid(!refreshDataGrid);
  }, [sessionId]);

  const nameChangeHandler = (value) => {
    let tempEvents = [],
      tempRows = [];
    if (EVENT_NAMES.includes(name) === false) {
      setType("");
    }
    if (value === null || value === "") {
      setName("");
      setEvents(loadedEvents);
      setRows(loadedRows);
      return;
    }
    for (let i = 0; i < loadedEvents.length; i++) {
      if (loadedEvents[i].name.includes(value) === true) {
        tempEvents.push(loadedEvents[i]);
        tempRows.push(loadedRows[i]);
      }
    }

    setName(value);
    setEvents(tempEvents);
    setRows(tempRows);
  };

  const typeChangeHandler = (value) => {
    let tempEvents = [],
      tempRows = [];
    if (value === null || value === "") {
      for (let i = 0; i < loadedEvents.length; i++) {
        if (loadedEvents[i].name.includes(name) === true || name === "") {
          tempEvents.push(loadedEvents[i]);
          tempRows.push(loadedRows[i]);
          setType(value);
          setEvents(tempEvents);
          setRows(tempRows);
        }
      }
      return;
    }
    for (let i = 0; i < loadedEvents.length; i++) {
      if (
        loadedEvents[i].name.includes(name) === true &&
        loadedEvents[i].type.includes(value) === true
      ) {
        tempEvents.push(loadedEvents[i]);
        tempRows.push(loadedRows[i]);
      }
    }
    setType(value);
    setEvents(tempEvents);
    setRows(tempRows);
  };

  return (
    <>
      <div className="modalHeader ">
        <div className="eventLogModalDetailsContainer containerCard">
          <div className="eventLogModalDetails">
            <div>
              <span className="eventLogModalDetailsTitle">URL</span> :{" "}
            </div>
            <div>
              <span className="eventLogModalDetailsTitle">Latitude</span> :{" "}
              <br />
              <span className="eventLogModalDetailsTitle">
                Longitude
              </span> :{" "}
            </div>
            <div>
              <span className="eventLogModalDetailsTitle">Session ID</span>:{" "}
            </div>
            <div>
              <span className="eventLogModalDetailsTitle">Time Stamp</span> :{" "}
            </div>
            <div>
              <span className="eventLogModalDetailsTitle">IP Address</span> :{" "}
            </div>
            <div>
              <span className="eventLogModalDetailsTitle">
                Number of Events
              </span>
              :{" "}
            </div>
          </div>
          <div className="eventLogModalDetails">
            <div>{eventLog.URL}</div>
            <div>
              {eventLog.location.latitude.$numberDecimal}
              <br />
              {eventLog.location.longitude.$numberDecimal}
            </div>
            <div>{eventLog.sessionId}</div>
            <div>{eventLog.timeStamp}</div>
            <div>{eventLog.ipAddress}</div>
            <div>{rows.length}</div>
          </div>
        </div>
        {isFromAModal && (
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        )}
      </div>
      {eventLog !== undefined && (
        <div className="modalDataContainer containerCard">
          <div className="tableName">EVENTS</div>
          <AutoSearch
            value={name}
            setValue={setName}
            onChangeHandler={nameChangeHandler}
            label={"EVENT"}
            options={EVENT_NAMES}
          />

          {EVENT_NAMES.includes(name) && (
            <FormControl
              variant="outlined"
              size="small"
              style={{ width: "100%", margin: "2em 0em" }}
            >
              <InputLabel id="test-select-label">TYPE</InputLabel>
              <Select
                size="small"
                onChange={(e) => typeChangeHandler(e.target.value)}
                sx={{ width: 400 }}
                label="TYPE"
                value={type}
              >
                {EVENTS[name].map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <div>
            <DataGrid
              sx={{
                minHeight: "45em",
                border: 2,
                margin: "1em 0em",
                maxHeight: "45em",
              }}
              getCellClassName={() => "dataGridCell"}
              getRowHeight={() => "auto"}
              columns={COLUMNS}
              rows={rows.length ? rows : name !== "" ? [] : loadedRows}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20]}
            ></DataGrid>
          </div>
        </div>
      )}
    </>
  );
};

export default EventLog;
