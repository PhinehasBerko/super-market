import express from "express";
import { Request,Response } from "express";

// import * as dotenv from 'dotenv'
import cors from 'cors'

import blogsRouter from "./routes/blogs";
import productRouter from "./routes/products"
import highlightsProdRouter from "./routes/highlights"
import categoriesRouter from "./routes/categories"

// dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


// routes
app.use("/api/v1",blogsRouter)
app.use("/api/v1",productRouter)
app.use("/api/v1",highlightsProdRouter)
app.use("/api/v1",categoriesRouter)
app.use("*",(req:Request,res:Response) =>{
    res.send("You are lost🙄🚶‍♂️")
})
app.get("/",(req:Request,res:Response) =>{
    console.log("home page")
    res.send("home page")
})
app.listen(PORT,()=>{
    console.log(`http://localhost:3000`)
})
