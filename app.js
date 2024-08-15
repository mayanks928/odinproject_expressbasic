const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/message", messageRouter);
app.use("/", indexRouter);
app.listen(3000, () => {
  console.log("Running at http://localhost:3000");
});
