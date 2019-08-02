let mongoose = require("mongoose");
require('dotenv').config()


// const host = process.env.DB_HOST;
// const database = process.env.DB_DATABASE;
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// const port = process.env.DB_PORT;

const host = 'localhost';
const database = 'mern';
const username = '';
const password = '';
const port = 27017;


mongoose
  .connect(`mongodb://${username}:${password}@${host}:${port}/${database}`, {
    useNewUrlParser: true, useCreateIndex: true
  })
  .then(() => {
    console.log("Info: Connected to database...");
  })
  .catch(err => {
    console.log("Info: Could not connect to database", err);
  });

