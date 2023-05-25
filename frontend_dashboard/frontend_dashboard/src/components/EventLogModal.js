import "../App.css";
import React, { useEffect, useState } from "react";
import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import EventLog from "./EventLog";

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

// isFromAModal -> Is it for a modal or not ?

const EventLogModal = ({ isModalOpen, setIsModalOpen, eventLog }) => {
  return (
    <>
      {eventLog !== undefined && (
        <Modal hideBackdrop={true} open={isModalOpen} sx={style}>
          <EventLog
            isFromAModal={true}
            setIsModalOpen={setIsModalOpen}
            eventLog={eventLog}
          />
        </Modal>
      )}
    </>
  );
};

export default EventLogModal;
