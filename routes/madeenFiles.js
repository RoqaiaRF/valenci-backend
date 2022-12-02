var express = require("express");
var multer = require("multer");
var router = express.Router();

var madeenFilesController = require("../app/controllers/madeenFilesController");
var madeenFilesValidator = require ("../middleware/validation/validator/madeenFilesValidator")

router.post("/", function (request, response, next) {
  const fileSize = parseInt(request.headers['content-length']);

  if (fileSize > 10485760 ) {
    response.status(400).json({ message: "لا يسمح بحجم ملفات اكبر من 10 ميجا" });
    }
    else {
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
    console.log(request.files)

    const validate = madeenFilesValidator(request.files);
    const isEmpty = Object.keys(validate).length === 0;

    if (! isEmpty) {
      response.status(400).json( madeenFilesValidator(request.files)    );
      return;
    }
       response.end(
      await madeenFilesController(request.files, request.body.id)
    );
  
  });
    }

  
});

module.exports = router;
