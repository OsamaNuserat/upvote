import jwt from 'jsonwebtoken'

export const GenerateToken = (payload,signature=process.env.TOKEN_SIGNATURE,expireIN='1h') => {
    return jwt.sign(payload,signature,{expiresIn:expireIN})
}

export const verifyToken = (token,signature=process.env.TOKEN_SIGNATURE) => {
    return jwt.verify(token,signature)
} 