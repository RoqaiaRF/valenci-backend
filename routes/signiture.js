var express = require("express");
var multer = require("multer");
var router = express.Router();

var signitureController = require("../app/controllers/signitureController");

router.post("/", function (request, response, next) {
  var storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, "./upload");
    },
    filename: function (request, file, callback) {
      var temp_file_arr = file.originalname.split(".");

      var temp_file_name = temp_file_arr[0];

      var temp_file_extension = temp_file_arr[1];

      callback(null, temp_file_name + Date.now() + "." + temp_file_extension);
    },
  });

  var upload = multer({ storage: storage }).any();
  upload(request, response, async function (error) {
    if (!request.files) {
      response.status(400).json({ message: "files required" });
      return;
    }
    response.end(
      await signitureController(request.files[0].filename, request.body.id)
    );
  });
});

module.exports = router;
