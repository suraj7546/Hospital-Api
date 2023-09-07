const jwt = require("jsonwebtoken");
const KEY = "suraj";
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      tokenParts = token.split(" ")[1];
      const user = jwt.verify(tokenParts, KEY);
      req.userId = user.id;
      req.userName = user.DocterName;
    } else {
      res.status(500).json({ message: "unauthorization user" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unauthorization user" });
  }
};
module.exports = auth;
