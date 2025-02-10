import express, { Router } from "express";
import { prismaClient } from "@repo/db/client";
import { middleware } from "../(middleware)/route";
import { adminMiddleware } from "../(middleware)/route2";


const reviewRouter: Router = express.Router();

reviewRouter.use(express.json());

reviewRouter.post("/add", middleware, async (req, res) => {
    const {productId, title, description, stars, username} = req.body;
    //@ts-ignore
    const userId = req.userId;

    try{
        await prismaClient.review.create({
            data: {
                title: title,
                description: description,
                stars: stars,
                productId: productId,
                userId: userId,
                username: username
            }
        })
        res.status(200).json({
            message: "review submitted"
        })
    }catch(error) {
        res.status(403).json({
            error,
            message: "error while submitting review"
        })
        return;
    }
})

reviewRouter.get("/fetch", async (req, res) => {
    const productId = req.body.productId;

    try{
      const reviews = await prismaClient.review.findMany({
          where: {
              productId: productId
          }
      })
      res.status(200).json({
        message: "successfully fetched reviews",
        reviews
      })
    }catch(error) {
        res.status(403).json({
            error,
            message: "error while fetching reviews"
        })
    }
})

reviewRouter.delete("/delete", middleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId

    try{
        const review = await prismaClient.review.findFirst({
            where: {
                userId: userId
            }
        })

        if(!review) {
            res.status(404).json({
                message: "review do not exist"
            })
        } else {

          await prismaClient.review.delete({
              where: {
                  id: review.id
              }
          })
          res.status(200).json({
              message: "review deleted successfully"
          })
        }

    }catch(error) {
        res.status(403).json({
            error,
            message: "error while deleting review"
        })
    }
})

reviewRouter.delete("/admindelete", adminMiddleware, async (req, res) => {
    const reviewId = req.body.reviewId;

    try{
        await prismaClient.review.delete({
            where: {
                id: reviewId
            }
        })
        res.status(200).json({
            message: "review deleted successfully"
        })
    }catch(error) {
        res.status(403).json({
            error,
            message: "error while deleting review"
        })
    }
})

export {reviewRouter}
