import bcrypt from 'bcryptjs';

export const hash = (plaintext , salt = process.env.SALT)=>{
    return bcrypt.hashSync(plaintext,parseInt(salt));
}

export const compare = (password,hashvalue)=>{ 
    return bcrypt.compareSync(password,hashvalue);
}