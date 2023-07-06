import {hash,compare} from "../../../services/HashAndCompare.js";
import usermodel from "../../../../DB/model/user.model.js";
import { GenerateToken, verifyToken } from "../../../services/SignAndVery.Token.js";

import { sendEmail } from "../../../services/sendEmail.js";




export const signup = async (req, res,next) => { 
  
  
      const {username,email,password} = req.body;
        
      const user = await usermodel.findOne({email});
      if (user){
        // return res.status(409).json({message:"email already exists"})
        return next(new Error("email already exists"))
      }
      const hashpassword = hash(password);
      
      const token = GenerateToken({email},process.env.EMAIL_TOKEN);
      const link = `http://localhost:3000/auth/confirmEmail/${token}`
      sendEmail(email,"Confirm Your Email",`<a href="${link}">Verify Your Email</a>`);
      const newUser =await usermodel.create({username,email,password:hashpassword});
      return res.status(201).json({message:"user created",newUser}) 
       
  

}   

export const confirmEmail = async (req,res)=>{
   const {token}=req.params;
   const decoded = verifyToken(token,process.env.EMAIL_TOKEN);
   const user = await usermodel.updateOne({email:decoded.email},{confirmEmail:true});
   return res.json({message:"email confirmed"})
}

export const login = async (req, res, next) => {  
  
   

      const {email,password} = req.body;
   const user = await usermodel.findOne({email});
   if(!user){
      //return res.status(404).json({message:"email not found"})
      return next(new Error("email not found"))
   }
   if(!user.confirmEmail){
      return res.status(401).json({message:"please verify your email"})
   }
   const isMatch = compare(password,user.password);
   if(!isMatch){
      return res.json({message:"invalid password"})
   }
   const token = GenerateToken({id:user._id});
   return res.status(200).json({message:"login success",token})
 
}
