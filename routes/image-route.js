const express = require("express");

const router = express.Router();

router.get("/upload-image", (req, res, next) => {
  console.log("get request in place");
  res.json({ message: "WOrking working , <=========Checking===============" });
});

module.exports = router;
