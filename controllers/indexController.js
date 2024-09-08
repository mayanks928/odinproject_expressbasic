const queries = require("../db/queries");
exports.getIndex = async (req, res) => {
  const messages = await queries.getMessages();
  res.render("index", { messages: messages });
};
exports.getMessage = async (req, res) => {
  const message = await queries.getMessage(req.params.id);

  if (!message || message.length == 0) {
    return res.status(404).send("No message with given ID");
  }
  res.render("message", {
    messageobject: message[0],
  });
};
exports.getNewMessageForm = async (req, res) => {
  res.render("newform");
};

exports.postNewMessage = async (req, res) => {
  await queries.addMessage(req.body);
  res.redirect("/");
};
