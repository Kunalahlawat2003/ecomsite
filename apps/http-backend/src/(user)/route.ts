import { Request, Response, Router } from "express";
import express from "express";
import {z} from "zod";
import bcrypt from "bcrypt";
import { prismaClient } from "@repo/db/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const jwtpass: string = process.env.JWT_SECRET as string;

const userRouter: Router = express.Router();

userRouter.use(express.json());

userRouter.post("/signup", async (req: Request, res:Response)=> {
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
        const account = await prismaClient.user.findFirst({
            where: {
                username: username
            }
        })
        if (account) {
            res.status(417).json({
                message: "user already exists"
            })
            return;
        }
        await prismaClient.user.create({
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
userRouter.post("/signin", async (req: Request, res:Response) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
      const existingUser = await prismaClient.user.findFirst({
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
      const name = existingUser?.username as string;
  
      if(passwordmatch) {
          const token = jwt.sign({
              id: existingUser?.id
          }, jwtpass);
  
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

export {userRouter}