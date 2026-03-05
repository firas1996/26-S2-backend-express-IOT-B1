exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) nthabtou si el user logged in or not (does he have a token) !
    // 2) nthabtou si el token valid or not !
    // 3) thabtou si el user moula el token still exists !
    // 4) chouf si el token tsan3et 9bal waal ba3d e5er pass change !

    return next();
  } catch (error) {
    res.status(400).json({
      message: "Fail !",
      error: error,
    });
  }
};
