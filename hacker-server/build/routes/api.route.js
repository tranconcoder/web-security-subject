"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hack_controller_1 = require("../controllers/hack.controller");
// Router
var apiRouter = (0, express_1.Router)();
apiRouter.post("/session-id", hack_controller_1.HackController.postSessionId);
apiRouter.post("/cart", hack_controller_1.HackController.postCart);
apiRouter.post("/cart-sent", hack_controller_1.HackController.postCartSent);
apiRouter.post("/account", hack_controller_1.HackController.postAccount);
apiRouter.post("/card", hack_controller_1.HackController.postCard);
exports.default = apiRouter;
