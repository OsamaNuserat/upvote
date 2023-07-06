import {Schema,model,Types,mongoose} from "mongoose";

const messageSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    recieverID:{ 
        type: Types.ObjectId,
        required:true
    }
},{timestamps: true});

const messagemodel = mongoose.models.Message || model('Message',messageSchema);
export default messagemodel; 