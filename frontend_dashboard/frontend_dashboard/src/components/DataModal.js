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
  width: "94vw",
  height: "90vh",
  bgcolor: "white",
  border: "2px solid black",
  padding: "0.4em",
  boxShadow: 24,
  margin: "0 auto",
  overflow: "auto",
};

// isFromAModal -> Is it for a modal or not ?

const DataModal = ({ isModalOpen, setIsModalOpen, data }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      {data !== undefined && (
        <Modal hideBackdrop={true} open={isModalOpen} sx={style}>
          <div>
            {data !== undefined && data.length} length
            <button onClick={() => setIsModalOpen(false)}>Close</button>
            <button onClick={() => setRefresh(!refresh)}>Refresh</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DataModal;
