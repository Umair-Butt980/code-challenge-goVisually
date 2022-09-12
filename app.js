const express = require("express");
const bodyParser = require("body-parser");

const imageRoutes = require("./routes/image-route");

const app = express();

app.use(imageRoutes);
app.listen(5000);
