
var express = require('express');

var multer = require('multer');

var router = express.Router();


router.post("/", function(request, response, next){
    console.log(request)

	var storage = multer.diskStorage({

		destination:function(request, file, callback)
		{
			callback(null, './upload');
		},
		filename : function(request, file, callback)
		{
			var temp_file_arr = file.originalname.split(".");

			var temp_file_name = temp_file_arr[0];

			var temp_file_extension = temp_file_arr[1];

			callback(null, temp_file_name + '-' + Date.now() + '.' + temp_file_extension);
		}

	});

	var upload = multer({storage:storage}).single('signiture');

	upload(request, response, function(error){

		if(error)
		{
			return response.end('Error Uploading File'+ error);
		}
		else
		{
			return response.end('File is uploaded successfully');
		}

	});

});

module.exports = router;
