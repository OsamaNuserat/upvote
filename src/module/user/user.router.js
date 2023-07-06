import { Router } from 'express';
import * as userController from './controller/user.controller.js';
import { auth } from '../../middleware/auth.middleware.js';
import { AsyncHandler } from '../../services/AsyncHandler.js';
import fileupload, { HME } from '../../services/multer.js';
const router = Router();
router.get('/profile',auth, AsyncHandler(userController.profile));
router.patch('/profilepic',auth,fileupload().single('image'),HME,userController.profilepic);
export default router;