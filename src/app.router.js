import DBconnect from '../DB/db.connection.js';
import authRouter from './module/auth/auth.router.js'
import messageRouter from './module/message/message.router.js'
import userRouter from './module/user/user.router.js'
import { globalErrorHandler } from './services/AsyncHandler.js';


const initApp = (app,express)=>{
    app.use(express.json());
    DBconnect();
   app.get('/',(req,res)=>{
        return res.send("hello")
   })
    app.use('/auth',authRouter)
    app.use('/message',messageRouter)
    app.use('/user',userRouter)
    app.use('*',(req,res)=>{
        return res.json({message:"Page Not Found"}) 
    })
    //global err handler
 app.use(globalErrorHandler)
}
export default initApp; 