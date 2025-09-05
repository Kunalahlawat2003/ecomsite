import express, { Request, Response, Router } from "express";
import { prismaClient } from "@repo/db/client";
import { middleware } from "../(middleware)/route";
import { adminMiddleware } from "../(middleware)/route2";


const productRouter : Router = express.Router();

productRouter.use(express.json());

productRouter.post("/addproduct", adminMiddleware, async (req: Request, res: Response) => {

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    //@ts-ignore
    const adminId : any = req.adminId;

    try{
        console.log("adding to db");
        await prismaClient.product.create({
            data: {
                title: title,
                description: description,
                price: price,
                image: image,
                //@ts-ignore
                createdBy: adminId
            }
        })
        console.log("added to db");
        res.status(200).json({
            message: "product added successfully"
        })
    } catch(error) {
        console.log(error);
        res.status(403).json({
          error,
          message: "error while adding product"
        })
        return;
    }
})

productRouter.get("/fetchproduct", async (req: Request, res: Response) => {

    try{
      const content = await prismaClient.product.findMany();
      res.status(200).json({
        content,
        message: "products fetched successfully"
      })
    } catch(error){
        res.status(403).json({
            error,
            message: "error while fetching products"
        })
    }
})

productRouter.delete("/deleteproduct", adminMiddleware, async (req: Request, res: Response) => {
    const productId = req.body.productId;

    try{
        await prismaClient.product.delete({
            where: {
                id : productId
            }
        })
        res.status(200).json({
            message: "product deleted succesfully"
        })
    }catch(error){
        res.status(403).json({
            error,
            message: "error while deleting product"
        })
    }
})

productRouter.put("/updateproduct", adminMiddleware, async (req: Request, res: Response) => {
    const productId = req.body.productId;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    try{

      const updatedproduct = await prismaClient.product.update({
          where: {
              id: productId
          }, 
  
          data: {
              title: title,
              description: description,
              price: price,
              image: image
          }
      }) 

      res.status(200).json({
        updatedproduct,
        message: "product updated successfully"
      })
    }catch(error){
        res.status(403).json({
            error,
            message: "error while updating product"
        })
    }
})

export {productRouter}