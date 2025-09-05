import jwt from "jsonwebtoken";
import { jwtpass } from "../config";
import { NextFunction, Request, Response } from "express";


export function middleware (req: Request, res: Response, next: NextFunction) {
    const token : any = req.headers["token"];

    const decoded = jwt.verify(token, jwtpass);

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "you are not logged in"
        })
    }
}