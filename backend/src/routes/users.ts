import  express,{Request,Response,Router} from "express";
import User from "../models/user";
import { json } from "stream/consumers";
import jwt from "jsonwebtoken";
//import validationResult } from "express-validator";
//import {check,validationResult,body} from "express-validator";
//import { check } from "express-validator";
//import { check, validationResult } from "express-validator";
//import { ExpressValidator, validationResult,body } from "express-validator";
import {check as validationCheck,validationResult} from "express-validator";
 const router=express.Router();

 router.post("/register", [
    
        validationCheck("firstName", "First Name is required").isString(),
        validationCheck("lastName", "LastName is required").isString(),
        validationCheck("email", "Email is Required ").isEmail(),
        validationCheck("password", "Password with 6 or more Characters required").isLength({ min: 6 }),
 ]
 ,async (req:Request,res:Response)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }
    try{
        let user=await User.findOne({
            email:req.body.email,
        });

        if(user){
            return res.status(400).json({message:"user already Exists"})
        }
        user=new User(req.body)
        await user.save();
    const token = jwt.sign({userId: user.id},process.env.JWT_SECRET_KEY  as string,{
        expiresIn:"1d",
    });

    res.cookie("auth_token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        maxAge:86400000,
    })
    return res.status(200).send({message: "User Registered Sucessfully"});
    

    }    catch(error){
        console.log(error)
            res.status(500).send({messgae:"Soemthing went wrong"})
        }
        
 });
 export default router;

function check(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
}
