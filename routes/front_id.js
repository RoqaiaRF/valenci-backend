
var express = require('express');
var multer = require('multer');
var router = express.Router();

var front_idController = require("../app/controllers/front_idController")

router.post("/", function(request, response, next){
    
	var storage = multer.diskStorage({

		destination:function(request, file, callback)
		{
			callback(null, './upload/front_id_image');
        
		},
		filename : function(request, file, callback)
		{
			var temp_file_arr = file.originalname.split(".");

			var temp_file_name = temp_file_arr[0];

			var temp_file_extension = temp_file_arr[1];
        
			callback(null, temp_file_name + Date.now() + '.' +temp_file_extension);
		}

	});

	var upload = multer({storage:storage}).array('front_id');
    
	upload(request, response,async function(error){
		
		response.end( await front_idController (request.files[0].path, request.body.id))


	});
	
});

module.exports = router;
