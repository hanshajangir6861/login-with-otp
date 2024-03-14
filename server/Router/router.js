import  express  from "express";
import { userregister } from "../controllers/userControllers.js";
const router =  new express.Router()





///////route/////
router.post("/user/register",userregister);



export default router