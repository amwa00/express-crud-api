import mongoose from "mongoose";

// create blueprint for products
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

// tells mongoose to create a model called Product using the schema
export default mongoose.model("Product", productSchema);
