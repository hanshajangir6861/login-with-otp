import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import mongoose from "mongoose";



const app = express()
const PORT = 4000;


app.use(cors())
app.use(express.json())

// app.get("/" , (req ,res)=>{
//     res.status(200).json("server is started")
// })



app.listen(PORT, ()=>{
 console.log(`server start at port no :${PORT} `)
})