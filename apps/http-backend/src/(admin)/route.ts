import express, { Router } from "express";
import jwt from "jsonwebtoken";
import { prismaClient } from "@repo/db/client";
import {z} from "zod";
import bcrypt from "bcrypt";
import dotenv from "dotenv"
dotenv.config();
import { jwtsecret } from "../config";


const adminRouter: Router = express.Router();

adminRouter.use(express.json());

adminRouter.post("/signup", async (req, res) => {
    const requirebody = z.object({
            email: z.string().min(3).max(100).email(),
            password: z.string().min(8).max(20).regex(/[A-Z]/).regex(/[!@#$%^&*(),.?":{}|<>]/),
            username: z.string().min(3).max(100)
    })
    
    const parseData = requirebody.safeParse(req.body);
    
    if(!parseData.success) {
        res.status(411).json({
            message: "incorrect format",
            error: parseData.error
        })
        return;
    }
    
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        const account = await prismaClient.admin.findFirst({
            where: {
                username: username
            }
        })
        if (account) {
            res.status(417).json({
                message: "admin already exists"
            })
            return;
        }
        await prismaClient.admin.create({
            data: {
                email: email,
                password: hashedPassword,
                username: username
            }
        });
    
        res.status(200).json({
            message: "your are signed up"
        })
    } catch(error) {
        res.status(403).json({
            message: "errror while signing up",
            error
        })
        return;
    }
})

//@ts-ignore
adminRouter.post("/signin", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    try{
        const existingUser = await prismaClient.admin.findFirst({
            where: {
                username
            }
        })
      
        if(!existingUser) {
            res.status(403).json({
                message: "user does not exist"
            })
        }
      
        const passwordmatch = await bcrypt.compare(password, existingUser?.password as string)
        const name = existingUser?.username;
      
        if(passwordmatch) {
            const token = jwt.sign({
                id: existingUser?.id
            }, jwtsecret);
      
            res.status(200).json({
                message: "you are signed in",
                token,
                name
            })
        } else {
            return res.status(402).json({
                message: "incorrect credentials"
            })
        }
    } catch(error) {
        res.status(404).json({
            message: "error while signing in",
            error
        })
    }
})

export {adminRouter}