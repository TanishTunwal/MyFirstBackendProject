import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.routes.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();

// Middleware to parse JSON
app.use(express.json());

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Frontend/dist")));//__dirname denote go to root

    app.get("*", (req, res) => { 
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    }
)};

app.listen(process.env.PORT || 5000, () => {
    connectDB();
    console.log("Server running at http://localhost:5000");
});
