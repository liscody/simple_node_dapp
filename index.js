const ethers = require("ethers");
require("dotenv").config();
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ADDRESS = process.env.ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const { abi } = require("./artifacts/contracts/Test.sol/Test.json");
const contractInstance = new ethers.Contract(ADDRESS, abi, signer);

const express = require("express");
const app = express();
app.use(express.json());

app.get("/products/:id", async (req, res) => {
  // http://localhost:3000/products/1

  try {
    const id = req.params.id;
    const result = await contractInstance.getProduct(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/", async (req, res) => {
  // get all products

  try {
    const id = req.params.id;
    const result = await contractInstance.getAllProducts();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/products/", async (req, res) => {
  // http://localhost:3000/products/
  try {
    const { id, name, price, quantity } = req.body;
    const tx = await contractInstance.setProduct(id, name, price, quantity);
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  // http://localhost:3000/products/1
  try {
    const id = req.params.id;
    const { name, price, quantity } = req.body;
    const tx = await contractInstance.updateProduct(id, name, price, quantity);
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
