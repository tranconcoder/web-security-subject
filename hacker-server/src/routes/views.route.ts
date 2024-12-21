import { Router } from "express";
import { SessionModel } from "../config/database/schema/session.schema";

const viewsRouter = Router();

viewsRouter.get("/", async (_, res) => {
    const data = { sessions: await SessionModel.find().lean() };


    res.render("pages/home-page", data);
});

export default viewsRouter;
