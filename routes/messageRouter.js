const { Router } = require("express");
// const messages = require("../data");
const indexController = require("../controllers/indexController");
const messageRouter = Router();
messageRouter.get("/:id", indexController.getMessage);
module.exports = messageRouter;
