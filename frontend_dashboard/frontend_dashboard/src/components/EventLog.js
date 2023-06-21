import "../App.css";
import React, { useEffect, useState, createElement, useCallback } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Modal,
  Checkbox,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AutoSearch from "./AutoSearch";
import DataModal from "./DataModal";
import Puppeteer_Template from "../utils/Puppeteer_Template";

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
    "PAGE_CLOSE",
  ],
  USER_EVENT: [
    "IDLE",
    "KEYDOWN",
    "KEYUP",
    "CLICK",
    "CONTEXTMENU",
    "MOUSEDOWN",
    "MOUSEUP",
    "PAGE_CLOSE",
    "ALERT",
    "FORM_SUBMISSION",
    "DOWNLOAD",
    "ON_CHANGE",
  ],
  RESPONSE: ["FETCH", "XMLHttpRequest"],
  REQUEST: ["FETCH", "XMLHttpRequest"],
  ERROR: ["RUNTIME_CRASH", "UNHANDLED_PROMISE_REJECTION", "CONSOLE_ERROR"],
};

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "white",
  border: "2px solid black",
  boxShadow: 24,
  margin: "0 auto",
  overflow: "auto",
};

const diffFormatTimeStamp = (seconds) => {
  var today = new Date(seconds * 1000);
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  return dateTime;
};

let loadedEvents = [],
  loadedRows = [];

const EventLog = ({ eventLog, setIsModalOpen, isFromAModal, sessionId }) => {
  console.log("here >", eventLog.sessionId);
  const [name, setName] = useState("");
  const [events, setEvents] = useState(eventLog.events);
  const [refreshDataGrid, setRefreshDataGrid] = useState(false);
  const [type, setType] = useState("");
  const [rows, setRows] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currDataIndex, setCurrDataIndex] = useState(0);
  const [scriptModalOpen, setScriptModalOpen] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(true);

  const COLUMNS = [
    {
      field: "eventNo",
      width: 150,
      headerClassName: "dataGridHeader",
    },
    {
      field: "name",
      width: 300,
      headerClassName: "dataGridHeader",
    },
    {
      field: "type",
      width: 200,
      headerClassName: "dataGridHeader",
    },
    {
      field: "timeStamp",
      width: 300,
      headerClassName: "dataGridHeader",
    },
    {
      field: "data",
      width: 240,
      headerClassName: "dataGridHeader",
      renderCell: (params) => (
        <div>{params.value && createElement("div", {}, params.value)}</div>
      ),
    },
  ];

  useEffect(() => {
    loadedRows = [];
    loadedEvents = eventLog.events;

    for (let i = 0; i < loadedEvents.length; i++) {
      loadedRows.push({
        id: i + 1,
        eventNo: i + 1,
        name: loadedEvents[i].name,
        type: loadedEvents[i].type,
        timeStamp: timeInSeconds
          ? loadedEvents[i].timeStamp
          : diffFormatTimeStamp(loadedEvents[i].timeStamp),
        data: loadedEvents[i].data && (
          <div>
            <button
              className="viewButton"
              onClick={() => {
                setIsViewModalOpen(true);
                setCurrDataIndex(i);
              }}
            >
              View
            </button>
          </div>
        ),
      });
    }
    setName("");
    setType("");
    setRows(loadedRows);
  }, [refreshDataGrid]);

  useEffect(() => {
    setRefreshDataGrid(!refreshDataGrid);
  }, [sessionId]);

  const timeStampFormatChangeHandler = () => {
    setRefreshDataGrid(!refreshDataGrid);
    setTimeInSeconds(!timeInSeconds);
  };

  const nameChangeHandler = (value) => {
    let tempEvents = [],
      tempRows = [];
    setType("");
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
      <Modal hideBackdrop={true} open={scriptModalOpen} sx={style}>
        <div>
          <div className="closeButtonContainer">
            <span className="fileName">test.js</span>
            <button
              className="Copy"
              onClick={() =>
                navigator.clipboard.writeText(
                  Puppeteer_Template(
                    eventLog.URL,
                    eventLog.height,
                    eventLog.width,
                    eventLog.events,
                    eventLog.scrollBarWidth,
                    eventLog.sessionId
                  )
                )
              }
            >
              Copy
            </button>{" "}
            &nbsp;
            <button onClick={() => setScriptModalOpen(false)}>Close</button>
          </div>
          <pre>
            {Puppeteer_Template(
              eventLog.URL,
              eventLog.height,
              eventLog.width,
              eventLog.events,
              eventLog.scrollBarWidth,
              eventLog.sessionId
            )}
          </pre>
        </div>
      </Modal>

      {loadedEvents &&
        loadedEvents.length &&
        loadedEvents[currDataIndex].data && (
          <DataModal
            isModalOpen={isViewModalOpen}
            setIsModalOpen={setIsViewModalOpen}
            data={loadedEvents[currDataIndex].data}
            name={loadedEvents[currDataIndex].name}
            type={loadedEvents[currDataIndex].type}
          />
        )}

      {/* <Modal hideBackdrop={true} open={isViewModalOpen} sx={style}>
        <div>
          <div className="closeButtonContainer">
            <button onClick={() => setIsViewModalOpen(false)}>Close</button>
          </div>
          <div className="dataContainer">
            {loadedEvents &&
              loadedEvents.length &&
              loadedEvents[currDataIndex].data && (
                <div className="eventLogModalDetailsContainer ">
                  <div className="eventLogModalDetails">
                    {Object.keys(loadedEvents[currDataIndex].data).map(
                      (key) => {
                        return (
                          <div className="containerCard ">
                            <span className="eventLogModalDetailsTitle">
                              {key}:
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="eventLogModalDetails ">
                    {Object.keys(loadedEvents[currDataIndex].data).map(
                      (key) => {
                        return (
                          <div className="containerCard dataDetails">
                            {loadedEvents[currDataIndex].data[key]}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
      </Modal> */}

      <div className="modalHeader ">
        {isFromAModal && (
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        )}
      </div>
      {eventLog !== undefined && (
        <div className="modalDataContainer containerCard">
          <div className="tableName">EVENTS</div>
          Time (HH:MM:SS)
          <Checkbox
            size="small"
            value={timeInSeconds}
            onChange={timeStampFormatChangeHandler}
          ></Checkbox>
          <div className="eventsFilterContainer">
            <button
              className="generateTestButton"
              onClick={() => setScriptModalOpen(true)}
            >
              Generate Test
            </button>
            <div>
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
            </div>
          </div>
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
