const { Router } = require("express");

const newRouter = Router();
// const messages = require("../data");
const indexController = require("../controllers/indexController");
newRouter.get("/", indexController.getNewMessageForm);
newRouter.post("/", indexController.postNewMessage);
module.exports = newRouter;
