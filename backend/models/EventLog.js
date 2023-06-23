const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  latitude: {
    type: mongoose.Types.Decimal128,
  },
  longitude: {
    type: mongoose.Types.Decimal128,
  },
});

const eventSchema = new Schema({
  timeStamp: {
    type: Number,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  data: {},
});

const eventLogSchema = new Schema({
  URL: {
    type: String,
  },
  location: {
    type: locationSchema,
  },
  sessionId: {
    type: String,
  },
  timeStamp: {
    type: String,
  },
  ipAddress: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  scrollBarWidth: {
    type: Number,
  },
  userAgent: {
    type: String,
  },
  offSet: {
    type: String,
  },
  events: [eventSchema],
});

module.exports = mongoose.model("eventLog", eventLogSchema);
