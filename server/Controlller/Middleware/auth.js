const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    console.log("token===>",req.headers.authorization)
    let token;
    if(req.headers.authorization){
        token = req.headers.authorization.slice(7)
        console.log("token===>",token)
    }
  else {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;