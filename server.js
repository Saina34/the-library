require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://thelibrary:thelibrary123@cluster0.rlqwcpy.mongodb.net/?retryWrites=true&w=majority"
);

// const db = mongoose.connection();
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to mongoose"));

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
