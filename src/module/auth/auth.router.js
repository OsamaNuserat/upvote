import {Router} from 'express'
import * as authController from './controller/auth.controller.js'
import { AsyncHandler } from '../../services/AsyncHandler.js';
import { validate } from '../../middleware/validate.js';
import { loginSchema, signupSchema } from './auth.validate.js';
const router = Router();

router.post('/signup',validate(signupSchema),AsyncHandler(authController.signup))
router.post('/login',validate(loginSchema),AsyncHandler(authController.login))
router.get('/confirmEmail/:token',AsyncHandler(authController.confirmEmail))

export default router;