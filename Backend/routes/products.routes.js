import express from "express";
import { createProduct, deleteProductById, getAllProducts, updateProductById } from "../controllers/products.controllers.js";

const Router = express.Router();

Router.post("/", createProduct);

Router.delete("/:id",deleteProductById);

Router.get("/",getAllProducts);

Router.put("/:id", updateProductById);

export default Router;
