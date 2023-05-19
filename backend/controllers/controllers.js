const eventLogModel = require("../models/EventLog");

exports.postData = (req, res, next) => {
  console.log("Received ", req.body);
  const eventLog = new eventLogModel(req.body);

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
