import Admin from "../models/admin.model.js";
import bycrypt from 'bcrypt'
import { errorhandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



export const adminSignup=async(req,res)=>{
    try {
       const {name,email,password}=req.body
       const hashedpassword=bycrypt.hashSync(password,10)
       const admin = new Admin({name,email,password:hashedpassword})

      await admin.save()
      res.status(201).json(admin+"Successfully  Ticket Raised")
    } catch (error) {
        console.log(error.message);
          
    }
}

export const adminSignin=async(req,res)=>{
    const {email,password}=req.body
    try {
        const validUser= await Admin.findOne({email})
        if(!validUser) return console.log("user not ");
        
            const validPassword=bycrypt.compareSync(password,validUser.password)
        if(!validPassword) return console.log("password credential");
        
            const token=jwt.sign({id:validUser._id},process.env.JWT_SECRECT)
            const {password:hashedpassword,...rest}=validUser._doc
const expiredate=new Date(Date.now()+3600000)
        res.cookie("access_token",token,{httpOnly:true, expires:expiredate}).status(200).json(rest)
    } catch (error) {
        console.log(error);
        
    }

} 
