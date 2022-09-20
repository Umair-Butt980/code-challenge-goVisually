const express = require("express");
const multer = require("multer");
//Using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().getTime()}_${file.originalname}`);
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
//Uploading the images
router.post(
  "/upload-image",
  upload.any("uploaded_images", 30),
  (req, res, next) => {
    res.json({
      message: "Files Successfully Uploaded",
    });
  }
);

module.exports = router;
