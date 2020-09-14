const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();
//import routes
const userRoutes = require("./routes/user");

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

//routes middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use("/api", userRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
