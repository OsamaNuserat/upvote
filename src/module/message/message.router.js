import { Router } from 'express';
import * as messageController from './controller/message.controller.js';
import { auth } from '../../middleware/auth.middleware.js';
const router = Router();

router.get('/',auth, messageController.getMessages);
router.post('/:recieverID', messageController.sendMessage)
router.delete('/:messageID',auth, messageController.deleteMessage)
export default router;