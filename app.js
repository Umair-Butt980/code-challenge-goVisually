const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const imageRoutes = require("./routes/image-route");

const app = express();

app.use(cors());
app.use("/api", imageRoutes);
app.use("/", express.static(path.join(__dirname, "./client/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});
//Port
app.listen(process.env.PORT || 5000);
