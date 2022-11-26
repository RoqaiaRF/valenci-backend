const express = require("express");
const router = express.Router();
const infoController = require(".././app/controllers/infoController")

router.post("/", function (req, res, next) {
    if (!req.body) {
      return res.status(400).json({
        status: "Bad Request",
        message: "req body cannot be empty!",
      });
    }
    infoController( req.body);
  });

module.exports = router;