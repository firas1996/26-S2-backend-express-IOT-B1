const { verify } = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");

exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) nthabtou si el user logged in or not (does he have a token) !
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res.status(401).json({
        message: "You are not logged in !!!!",
      });
    }
    // 2) nthabtou si el token valid or not !
    const decoded = await promisify(verify)(token, process.env.JWT_SECRET);
    // 3) thabtou si el user moula el token still exists !
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "This user is no longer exists !!!!!",
      });
    }
    // 4) chouf si el token tsan3et 9bal waal ba3d e5er pass change !
    // console.log(parseInt(user.last_pass_change_date.getTime() / 1000));
    // console.log(decoded.iat);
    if (parseInt(user.last_pass_change_date.getTime() / 1000) > decoded.iat) {
      return res.status(401).json({
        message: "You must re-loggin !!!",
      });
    }

    next();
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};
