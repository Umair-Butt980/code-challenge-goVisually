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

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimeType === "image/jpeg" ||
//     file.mimeType === "image/png" ||
//     file.mimeType === "image/jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Please select png and JPEG files only"), false);
//   }
// };

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
    res.json({
      message: "Files Successfully Uploaded",
    });
  }
);

module.exports = router;
