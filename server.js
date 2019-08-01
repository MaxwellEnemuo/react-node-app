// let personRoute = require("../src/routes/person");
let usersRoute = require("./routes/users");
let loginRoute = require("./routes/login");
let bodyParser = require("body-parser");
let cors = require("cors");
let express = require("express");
let app = express();
require("./config/db.conn");
const error = require("./middleware/error");
const path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  console.log(`Info: ${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

app.use("/api/users", usersRoute);
app.use("/api/login", loginRoute);
app.use(express.static(path.join(__dirname, "public")));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send("Page not found!");
  // res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
  // res.redirect(404, "/404.html");
  // res.redirect("/404.html");
});

// Handler for Error 500
app.use(error);


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.info(`Info: Server has started on port ${PORT}`));

module.exports = server;