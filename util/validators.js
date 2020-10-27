const jwt = require("jsonwebtoken")
const { config } = require("../config");


const validJWTNeeded = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      let authorization = req.headers["authorization"].split(" ");
      if (authorization[0] !== "Bearer") {
        return res
          .status(401)
          .send({ status: 401, error: "unathorized, Invalid Token" });
      } else {
        req.jwt = jwt.verify(authorization[1], config.secret);
        return next();
      }
    } catch (err) {
      return res
        .status(403)
        .send({ status: 403, error: "Invalid token signature" });
    }
  } else {
    return res.status(401).send({ status: 401, error: "unathorized" });
  }
};


const assignJwtToken = async (centerNo) => {
    return await jwt.sign(
        {
        payload: {
            centerNo: centerNo,
            sig: "kapson"
            }
        },
        config.secret,
    )
}

module.exports={
    validJWTNeeded,
    assignJwtToken
}