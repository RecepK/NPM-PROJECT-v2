import express from 'express';
import * as controller from '../controllers/MessageController.js';

const router = express.Router();

router
    .route("/")
    .get(controller.temp);

router
    .route("/message")
    .get(controller.getMessage)
    .post(controller.sendMessage);

export default router;