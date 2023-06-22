import {
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
