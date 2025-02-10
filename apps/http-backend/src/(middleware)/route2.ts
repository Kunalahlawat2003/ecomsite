import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtsecret } from "../config";

export function adminMiddleware (req: Request, res: Response, next: NextFunction) {
    const token : any = req.headers["token"];

    const decoded = jwt.verify(token, jwtsecret);

    if(decoded) {
        //@ts-ignore
        req.adminId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "you are not logged in"
        })
    }
}