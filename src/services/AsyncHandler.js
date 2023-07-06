
export const AsyncHandler = (fn)=>{
    return (req,res,next) =>{
        fn(req,res,next).catch((err)=>{
            return next(new Error(err))
        })
    }
}

export const globalErrorHandler = (err,req,res,next)=>{
    if(err){
        return res.status(500).json({message:err.message})
    }
 }