import usermodel from "../../DB/model/user.model.js";
import { verifyToken } from "../services/SignAndVery.Token.js";

export const auth = async (req, res , next) => {
   try{
    const {token} = req.headers;
    if(!token?.startsWith(process.env.BEARERKEY)){
        return res.json({message:"BearerKey not found"})
    }
    const tokenValue = token.split(process.env.BEARERKEY)[1];
    if(!tokenValue){
        return res.json({message:"token not found"})
    }
    const decoded = verifyToken(tokenValue);
    req.id = decoded.id;
    const authuser = await usermodel.findById(req.id).select("username email"); 
    if (!authuser){
        return res.status(401).json({message:"user not found"})
    }
    next();
   }catch(err){
       return res.json({message:err.stack})
   }

}