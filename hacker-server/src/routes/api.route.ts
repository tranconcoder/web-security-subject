import { Router } from "express";
import { HackController } from "../controllers/hack.controller";

// Router
const apiRouter = Router();

apiRouter.post("/session-id", HackController.postSessionId);
apiRouter.post("/cart", HackController.postCart);
apiRouter.post("/cart-sent", HackController.postCartSent);
apiRouter.post("/account", HackController.postAccount);
apiRouter.post("/card", HackController.postCard)

export default apiRouter;
