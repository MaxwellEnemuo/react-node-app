// let personRoute = require("../src/routes/person");
let usersRoute = require("./routes/users");
let loginRoute = require("./routes/login");
let bodyParser = require("body-parser");
let cors = require("cors");
let express = require("express");
let app = express();
require('./config/db.conn');
const error = require('./middleware/error');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

// app.use(personRoute);
app.use("/api/users", usersRoute);
app.use("/api/login", loginRoute);
app.use(express.static("public/views"));


// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send("We think you are lost!");
});

// Handler for Error 500
app.use(error);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Server has started on port ${PORT}`));
