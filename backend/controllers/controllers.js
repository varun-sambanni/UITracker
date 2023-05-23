const eventLogModel = require("../models/EventLog");

exports.postData = (req, res, next) => {
  console.log("Received ", req.body);
  const eventLog = new eventLogModel(req.body);
  eventLog.ipAddress = ipAddress;
  eventLog
    .save()
    .then((result) => {
      console.log("Event Log uploaded");
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log("Error uploading event log ", err);
      return res.json({ success: false, msg: "Error uploading event log" });
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
