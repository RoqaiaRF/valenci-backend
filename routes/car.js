const express = require("express");
const router = express.Router();
const carController = require(".././app/controllers/carController")
const {  addcarValidation} = require('../middleware/validation/validator/carValidator');

router.post("/",addcarValidation,async function  (req, res, next) {
      
        return res.status(200).json({
            status: "check the message",
            message: await carController (req.body),
          });

  });

module.exports = router;