import "../App.css";
import React from "react";
import { TextField, Autocomplete } from "@mui/material";

// isFromAModal -> Coming from a modal or not ?

const AutoSearch = ({ value, setValue, onChangeHandler, options, label }) => {
  return (
    <div>
      <Autocomplete
        disablePortal={true}
        disableClearable
        id="combo-box-demo"
        size="small"
        value={value}
        options={options}
        onChange={(event, values) => {
          onChangeHandler(values);
        }}
        sx={{ width: 400, fontWeight: 100 }}
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
    </div>
  );
};

export default AutoSearch;
