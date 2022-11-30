const express = require("express");
const router = express.Router();
const infoController = require(".././app/controllers/infoController")

router.post("/",async function  (req, res, next) {

    if (!req.body) {
      return res.status(400).json({
        status: "Bad Request",
        message: "req body cannot be empty!",
      });
    }
    else {
      
        return res.status(200).json({
            message: await infoController (req.body),
          });
    }
  });

module.exports = router;