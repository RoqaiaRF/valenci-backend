const express = require("express");
const router = express.Router();
const workController = require(".././app/controllers/workController")
const {  addworkValidation} = require('../middleware/validation/validator/workValidatior');

router.post("/",addworkValidation,async function  (req, res, next) {


        return res.status(200).json({
            status: "check the message",
            message: await workController (req.body),
          });
  });

module.exports = router;

