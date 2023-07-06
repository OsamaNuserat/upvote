import multer from "multer";

export const HME = (err,req,res,next)=>{
    if(err){
        return res.status(400).json({message:"multer error",err})
    }
    next();
}

function fileupload () {
    const storage = multer.diskStorage({})


    function fileFilter(req,file,cb){
        if(['image/png','image/jpg','image/jpeg'].includes(file.mimetype)){
            cb(null,true)
    }
    else{
        cb("invalid format",false)
    }}

    const upload = multer({fileFilter,storage});
    return upload;
}
export default fileupload;