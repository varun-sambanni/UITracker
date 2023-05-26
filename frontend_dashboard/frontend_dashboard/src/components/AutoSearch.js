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
  TextField,
  Autocomplete,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import EventLog from "./EventLog";

// isFromAModal -> Is it for a modal or not ?

const AutoSearch = ({ value, setValue, onChangeHandler, options, label }) => {
  return (
    <Autocomplete
      disablePortal
      disableClearable
      id="combo-box-demo"
      size="small"
      value={value}
      options={options}
      onChange={(event, values) => {
        onChangeHandler(values);
      }}
      sx={{ width: 400 }}
      renderInput={(params) => (
        <TextField
          value={value}
          onChange={(event) => {
            onChangeHandler(event.target.value);
          }}
          sx={{ margin: "1em 0em" }}
          {...params}
          label={label}
        />
      )}
    />
  );
};

export default AutoSearch;
