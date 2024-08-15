const { Router } = require("express");

const newRouter = Router();
const messages = require("../data");
newRouter.get("/", (req, res) => {
  res.render("newform");
});
newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = newRouter;
