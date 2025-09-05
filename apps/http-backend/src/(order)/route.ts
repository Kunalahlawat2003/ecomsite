import { prismaClient } from "@repo/db/client";
import express, { Router } from "express";
import { middleware } from "../(middleware)/route";
import { adminMiddleware } from "../(middleware)/route2";


const orderRouter: Router = express.Router();

orderRouter.use(express.json());


orderRouter.post("/add", middleware, async (req, res) => {
    const productId = req.body.productId;
    //@ts-ignore
    const userId = req.userId;
    const quantity = req.body.quantity;

    try{
        await prismaClient.order.create({
            data: {
                productId: productId,
                userId: userId,
                quantity: quantity
            }
        })

        res.status(200).json({
            message: "product ordered successfully"
        })

    }catch(error){
        res.status(403).json({
            error,
            message: "error while ordering product"
        })
    }
})

orderRouter.get("/fetch", middleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;

    try{
        const order = await prismaClient.order.findMany({
            where: {
                userId: userId
            },
            include: {
                product: true
            }
        })

        res.status(200).json({
            message: "orders fetched successfully",
            order
        })
    } catch(error) {
        res.status(403).json({
            message: "error while fetching orders",
            error
        })
    }
})

orderRouter.get("/adminfetch", adminMiddleware, async (req, res) => {

    try{

      const order = await prismaClient.order.findMany({
        include: {
            product: true
        }
      });
  
      res.status(200).json({
          message: "orders fetched successfully",
          order
      })
    } catch(error) {
        res.status(403).json({
            message: "error while fetching orders",
            error
        })
    }
})

orderRouter.delete("/delete", middleware, async (req, res) => {

    const orderId = req.body.orderId;

    try{
        await prismaClient.order.delete({
            where: {
                id: orderId
            }
        })

        res.status(200).json({
            message: "order deleted successfully"
        })
    } catch(error) {
        res.status(403).json({
            message: "error while deleting order",
            error
        })
    }
})

orderRouter.delete("/admindelete", adminMiddleware, async (req, res) => {
    const orderId = req.body.orderId;

    try{
        await prismaClient.order.delete({
            where: {
                id: orderId
            }
        })

        res.status(200).json({
            message: "order deleted successfully"
        })
    } catch(error) {
        res.status(403).json({
            message: "error while deleting order",
            error
        })
    }
})

export {orderRouter}