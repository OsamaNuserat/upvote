import { model, Schema , mongoose } from "mongoose";

const userSchema = new Schema({

    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password:{ 
        type: String,
        required: true
    },
    confirmEmail:{ 
        type: Boolean,
        default: false
    },
    profileImage:{
        type: String,
    }

},{
    timestamps: true
})
const usermodel = mongoose.models.User ||  model('User',userSchema);
export default usermodel;