const express = require("express");
const router = express.Router();
const infoController = require(".././app/controllers/infoController")
const {  addinfoValidation} = require('../middleware/validation/validator/infoValidator');

router.post("/",addinfoValidation,async function  (req, res, next) {

        return res.status(200).json({
            message: await infoController (req.body),
          });
   
  });

module.exports = router;