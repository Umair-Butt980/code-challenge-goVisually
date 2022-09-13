const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const imageRoutes = require("./routes/image-route");

const app = express();

app.use(cors());
app.use("/api", imageRoutes);
app.use("/", express.static(path.join(__dirname, "./client/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.listen(5000);
