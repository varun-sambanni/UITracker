const eventLogModel = require("../models/EventLog");

exports.postData = (req, res, next) => {
  console.log("Received ", req.body);

  eventLogModel
    .findOne({ sessionId: req.body.sessionId })
    .then((eventLogData) => {
      if (!eventLogData) {
        const eventLog = new eventLogModel(req.body);
        const ipAddress = req.socket.remoteAddress;
        eventLog.ipAddress = ipAddress;
        return eventLog.save();
      } else {
        eventLogData.localTime = req.body.localTime;
        eventLogData.events = req.body.events;
        return eventLogData.save();
      }
    })
    .then((result) => {
      console.log("Event Log uploaded");
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log("Error uploading event log ", err);
      return res.json({ success: false, msg: "Error uploading event log" });
    });
};

exports.postLastAlive = (req, res, next) => {
  eventLogModel
    .findOne({ sessionId: req.body.sessionId })
    .then((eventLogData) => {
      if (eventLogData) {
        console.log("Updated last alive");
        eventLogData.localTime = req.body.localTime;
        return eventLogData.save();
      } else {
        return res.json({ success: true, msg: "No such session-id present" });
      }
    })
    .then((result) => {
      return res.json({ success: true, msg: "Updated last alive" });
    })
    .catch((err) => {
      console.log("Error updating last alive ", err);
      return res.json({ success: true, msg: "Error updating last alive" });
    });
};

exports.getClear = (req, res, next) => {
  eventLogModel
    .deleteMany({})
    .then((result) => {
      return res.json({ success: true, msg: "DB Cleared" });
    })
    .catch((err) => {
      console.log("Error clearing DB ", err);
      return res.json({ success: true, msg: "Error clearing DB" });
    });
};

exports.getEventLogs = (req, res, next) => {
  eventLogModel
    .find({})
    .then((data) => {
      return res.json({ success: true, data: data });
    })
    .catch((err) => {
      return res.json({ success: false, msg: "Error fetching data" });
    });
};
