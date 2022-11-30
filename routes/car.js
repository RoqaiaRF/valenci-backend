const express = require("express");
const router = express.Router();
const carController = require(".././app/controllers/carController")

router.post("/",async function  (req, res, next) {

    if (!req.body) {
      return res.status(400).json({
        status: "Bad Request",
        message: "req body cannot be empty!",
      });
    }
    else {
      
        return res.status(200).json({
            status: "check the message",
            message: await carController (req.body),
          });
    }
  });

module.exports = router;