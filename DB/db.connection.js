import mongoose from "mongoose";

const DBconnect = async () => { 
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(()=> console.log("DB connected"))
    .catch((err)=> console.log(err));
}

export default DBconnect;