const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwtPrivateKey = process.env.jwtPrivateKey;


module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, jwtPrivateKey);
    req.user = decoded; 
    next();
  }
  catch (ex) {
    res.status(400).json('Invalid token.');
  }
}