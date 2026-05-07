const mongoose = require("mongoose");

const mqttSchema = new mongoose.Schema({
  device_id: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    default: "-200",
  },
  humidity: {
    type: String,
    default: "-200",
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  company_id: {
    type: String,
    default: "Unknown",
  },
});

const Mqtt = mongoose.model("Mqtt", mqttSchema);

module.exports = Mqtt;
