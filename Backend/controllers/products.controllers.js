import Product from "../model/product.model.js"
import { isValidObjectId } from "mongoose";

 const getAllProducts =  async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Server side error" });
    }
};

 const createProduct = async (req, res) => {
    const products = req.body;

    if (!products.name || !products.price || !products.image) {
        return res.status(400).json({ success: false, message: "Provide all fields" });
    }

    try {
        const newProduct = await Product.create(products);
        return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server side error" });
    }
};

const updateProductById = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!isValidObjectId(id)) {  
        return res.status(400).json({ success: false, message: "Invalid product ID" });
    }
 
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        return res.status(200).json({ success: true, data: updatedProduct }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server side error" });
    }
};

const deleteProductById =  async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully" }); // Ensure a valid JSON response
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
    
export  { getAllProducts, createProduct, updateProductById, deleteProductById };