const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User Created !!!",
      test: "Hello !",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users Fetched !!!",
      data: {
        nbr: users.length,
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "User Fetched !!!",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};
