import joi from 'joi'

export const signupSchema = 
{
    body : joi.object({
        username: joi.string().alphanum().min(2).max(20).required().messages({
            "any.required": "username is required",
            "string.empty": "username is not allowed to be empty",
        }),
        email: joi.string().email({maxDomainSegments:2,tlds:{allow:['com','net']}}).required(),
        password: joi.string().required(),
        cPassword:joi.string().valid(joi.ref('password')).required(),
        age:joi.number().integer().min(18).max(80).required(),
        
    }).required(),

    
}

export const loginSchema = 
{
    body :joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    }).required(),
}