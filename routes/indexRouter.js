const { Router } = require("express");
const indexRouter = Router();
const messages = require("../data");
const indexController = require("../controllers/indexController");
indexRouter.get("/", indexController.getIndex);

module.exports = indexRouter;
