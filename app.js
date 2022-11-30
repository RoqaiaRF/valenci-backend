const express = require("express");
const bodyParser = require("body-parser");
const app =express();

var cors = require('cors');
  app.use(
    cors({
      allowedHeaders: ["authorization", "Content-Type", 'X-Requested-With'], // you can change the headers
      exposedHeaders: ["authorization", 'X-Requested-With'], // you can change the headers
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false
    })
  );

const helmet = require("helmet");
const morgan = require("morgan");

const indexRouter = require("./routes");
const madeenFiles = require("./routes/madeenFiles")
const info = require("./routes/info");
const address = require("./routes/address");
const work = require("./routes/work");
const car = require("./routes/car");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// adding Helmet to enhance your Rest API's security
app.use(helmet());
app.use(express.static('public'));

app.use("/", indexRouter);
app.use("/info", info);
app.use("/work", work);
app.use("/car", car);
app.use("/address", address);
app.use("/madeenfiles", madeenFiles);

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// starting the server
app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`);
});
