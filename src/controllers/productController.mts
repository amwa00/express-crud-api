import { Request, Response } from "express";
import Product from "../models/Product.mjs";

// GET - get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    // find all products
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Soemthing went wrong" });
  }
};

//GET - get one product
export const getProductById = async (req: Request, res: Response) => {
  try {
    // find product by its id
    const product = await Product.findById(req.params.id);
    // if product is not found, set status to 404 and send message
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    // if product is found, set status 200 and send product
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// POST - create a product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// PUT - update a product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// DELETE - delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    // wait until product has been found and deleted
    const product = await Product.findByIdAndDelete(req.params.id);
    // if product doesnt exist, send message and return
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
