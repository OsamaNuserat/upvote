import messagemodel from "../../../../DB/model/message.model.js";
import usermodel from "../../../../DB/model/user.model.js";

export const getMessages = async (req, res) => { 

    const messageList = await messagemodel.find({recieverID:req.id})
    return res.status(200).json({message:"success",messageList})

}

export const sendMessage = async (req,res)=>{
    const {recieverID} = req.params;
    const {message} = req.body;

    const user = await usermodel.findById(recieverID);
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    const newMessage = await messagemodel.create({message,recieverID}); 
    return res.status(201).json({message:"message sent",newMessage})
}

export const deleteMessage = async (req,res)=>{
    const {messageID} = req.params;
    const id = req.id;
    const message = await messagemodel.deleteOne({_id:messageID,recieverID:id});
    if(message.deletedCount === 0){
        return res.status(404).json({message:"message not found"})
    }
    return res.status(200).json({message:"message deleted"}) 
}