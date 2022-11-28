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
const uploadFile = require("./routes/uploadFile")

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// adding Helmet to enhance your Rest API's security
app.use(helmet());

app.use("/", indexRouter);

app.use("/uploadfile", uploadFile);

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// starting the server
app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`);
});
