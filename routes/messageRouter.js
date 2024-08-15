const { Router } = require("express");
const messages = require("../data");
const messageRouter = Router();
messageRouter.get("/:id", (req, res) => {
  res.render("message", {
    id: req.params.id,
    messageobject: messages[req.params.id],
  });
});
module.exports = messageRouter;
