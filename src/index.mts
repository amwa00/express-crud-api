import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import productRoutes from "./routes/productRoutes.mjs";

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

// if MONGO_URI doesn't exist, gives an error
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI has not been defined in .env");
}

// connects to mongodb using connection string from env, server starts listening once db connection is successful
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    // if connection fails, log errror and don't start server
    console.error("Failed to connect to MongoDB", err);
  });
