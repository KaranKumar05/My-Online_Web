import express from "express";
import cors from "cors";

import 'dotenv/config'

import Products from './products.mjs'

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
    res.send('Welcome in my Store');
})
app.get('/products', (req, res, next) => {
    res.send(Products);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
