# Express CRUD API – Product Management System

## 📌 Overview
This is a simple REST API built with Express and MongoDB as an individual assignment. The main goal of the project was to learn how to build a backend using Node.js, structure an Express app properly, and connect it to a database using Mongoose.

The API lets you create, read, update, and delete products that are stored in a MongoDB database. It focuses mainly on understanding backend structure and working with async database operations.

## 🚀 Features

- 📦 Create new products
- 🔍 Get all products
- 🧾 Get a single product by ID
- ✏️ Update products
- 🗑️ Delete products
- 🌐 Basic REST API structure
- ⚡ MongoDB database with Mongoose

## 🛠️ Tech Stack

- Express.js
- TypeScript
- MongoDB (NoSQL database)
- Mongoose
- Dotenv

## 🧠 Architecture

This project follows a simple structure:

### 📁 Routes
Handles the API endpoints

### 📁 Controllers
Handles the logic for each request

### 📁 Models
Defines how the data looks in MongoDB using Mongoose schemas

### 📁 Server Setup
Sets up Express and connects to the database

## 🧩 API Endpoints

### 📦 Products

- GET _/products_ → Get all products
- GET _/products/:id_ → Get single product
- POST _/products_ → Create new product
- PUT _/products/:id_ → Update product
- DELETE _/products/:id_ → Delete product

## 🧠 My Approach

In this project I focused on learning how to build a backend from scratch and understand how Express applications are structured.

I worked on:
- 📌 Setting up routes using Express Router
- 📌 Writing controller functions for handling requests
- 📌 Connecting MongoDB with Mongoose
- 📌 Creating a simple data model for products
- 📌 Handling async database operations
- 📌 Basic error handling for API requests

## 📚 Challenges & Learnings

### Challenges
- Understanding how to structure an Express project properly
- Working with async/await in database calls
- Figuring out how routes, controllers, and models connect

### Key Learnings
- How to build a REST API using Express
- Separation between routes, controllers, and models
- Working with MongoDB through Mongoose
- How to handle basic CRUD operations

## 🌱 Future Improvements
- Add better validation for incoming data
- Improve error handling
- Add search or filtering for products
- Add pagination for large data sets
- Add authentication (like login with JWT)
- Build a simple frontend so the API can be used through UI instead of only testing in Postman

## 📎 Project Context
This project was made as an individual assignment to practice backend development with Express and MongoDB. The focus was mainly on learning how a backend API is structured and how data flows between routes, controllers, and the database.
