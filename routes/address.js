const express = require("express");
const router = express.Router();
const addressController = require(".././app/controllers/addressController")
const {  addaddressValidation} = require('../middleware/validation/validator/addressValidator');

router.post("/",addaddressValidation,async function  (req, res, next) {

      
        return res.status(200).json({
            status: "check the message",
            message: await addressController (req.body),
          });
 
  });

module.exports = router;