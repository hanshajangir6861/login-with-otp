import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "./db/conn.js"
import router from './Router/router.js';



const app = express()
const PORT = 4000;

app.use(express.json())
app.use(cors())
app.use(router)

// app.get("/" , (req ,res)=>{
//     res.status(200).json("server is started")
// })



app.listen(PORT, ()=>{
 console.log(`server start at port no :${PORT} `)
})