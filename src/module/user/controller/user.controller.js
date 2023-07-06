import usermodel from "../../../../DB/model/user.model.js";
import cloudinary from "../../../services/cloudinary.js";

export const profile = (req, res) => { 
   return res.json({message:req.id})
    
    }

   
export const profilepic = async (req, res) => {
   if(!req.file){
      return res.status(400).json({message:"please upload a file"})
   }
   const cloud = await cloudinary.uploader.upload(req.file.path,{folder:`saraha/profilepic/${req.id}`});
   const imageURL = cloud.secure_url;
   const user = await usermodel.updateOne({_id:req.id},{profileImage:imageURL});
   return res.status(200).json({message:"profile pic updated"}) 
}