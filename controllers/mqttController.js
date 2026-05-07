const Mqtt = require("../models/mqttModel");

exports.createMqtt = async (req, res) => {
  try {
    const newMqtt = await Mqtt.create(req.body);
    res.status(201).json({
      message: "Mqtt Created !!!",
      test: "Hello !",
      data: newMqtt,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};

exports.getMqtts = async (req, res) => {
  try {
    const mqtts = await Mqtt.find();
    res.status(200).json({
      message: "Mqtts Fetched !!!",
      data: {
        nbr: mqtts.length,
        mqtts,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};
