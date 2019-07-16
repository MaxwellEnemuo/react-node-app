const path = require("path");
const winston = require('winston');


const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logFile.log' })
  ]
});

module.exports = (err, req, res, next) => {

    logger.log({
      level: 'error',
      message: err.message
    });
    
    logger.error(err.stack);

    // console.error(err.stack);
    // res.status(500).json(err.stack);
    // res.status(500).sendFile(path.join(__dirname, "public/500.html"));  //send html 500 error page instead
  }