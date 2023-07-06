const datamethods = ['body','query','params'];

export const validate = (schema) =>{
    return (req,res,next) => {
       const validationArray =[];
         datamethods.forEach(method=>{
            if(schema[method]){
                const validationResult = schema[method].validate(req[method],{abortEarly:false});
                if(validationResult.error){
                    validationArray.push(validationResult.error.details)
                }
            }
         })
         if(validationArray.length > 0){
            return res.status(400).json({message:"validation error",validationArray})
         }
         next();
    }
  
}