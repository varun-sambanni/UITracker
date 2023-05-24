import "../App.css";
import React, { useEffect, useState } from "react";
import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
} from "@mui/material";
import Modal from "@mui/material/Modal";

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

const EventLogModal = ({ isModalOpen, setIsModalOpen, eventLog }) => {
  return (
    <>
      {eventLog !== undefined && (
        <Modal hideBackdrop={true} open={isModalOpen} sx={style}>
          <div className="modalDataContainer">
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
                <div>Number of Events : {eventLog.events.length}</div>
              </div>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
            <div>
              <TableContainer
                sx={{
                  overflow: "auto",
                  maxHeight: "80vh",
                  border: "1px solid black",
                }}
              >
                <Table>
                  <TableHead aria-label="sticky table">
                    <TableCell className="TableCell">Event No</TableCell>
                    <TableCell className="TableCell">Name</TableCell>
                    <TableCell className="TableCell">Type</TableCell>
                    <TableCell className="TableCell">Time Stamp</TableCell>
                    <TableCell className="TableCell">Data</TableCell>
                  </TableHead>
                  <TableBody>
                    {eventLog.events.map((event, index) => {
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
                                  {key}: {event.data[key]}
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
        </Modal>
      )}
    </>
  );
};

export default EventLogModal;
