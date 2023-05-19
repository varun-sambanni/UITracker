const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const WebSocket = require("ws");
const eventLogModel = require("./models/EventLog");

const app = express();
const wss = new WebSocket.Server({ port: 8082 });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

wss.on("connection", (ws) => {
  console.log("Client connected!");

  ws.on("message", (data, isBinary) => {
    const message = isBinary ? data : data.toString();
    console.log("Client sent : ", JSON.parse(message));

    const eventLog = new eventLogModel(JSON.parse(message));
    eventLog
      .save()
      .then((result) => {
        console.log("Event Log uploaded");
        ws.send(JSON.stringify({ success: true }));
      })
      .catch((err) => {
        console.log("Error uploading event log ", err);
        ws.send(
          JSON.stringify({ success: false, msg: "Error uploading event log" })
        );
      });
  });

  ws.on("close", () => {
    console.log("Client disconnected!");
  });
});

mongoose
  .connect(
    "mongodb+srv://vsambann:IFGfDNd2m8i0tPuJ@uitracker.0vrrhvf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Database connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server listening on port ${process.env.PORT || 5000}...`);
    });
  })
  .catch((err) => {
    console.log("Error establishing connection ", err);
  });
