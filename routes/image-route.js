const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    //acceptiing files upto 5MB
    fileSize: 1024 * 1024 * 5,
  },
});

const router = express.Router();

router.post(
  "/upload-image",
  upload.array("uploaded_images"),
  (req, res, next) => {
    console.log(req.file, "this is the request");
    res.json({
      message: "Files Successfully Uploaded",
    });
  }
);

module.exports = router;
