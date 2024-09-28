import express from 'express';
import * as controller from '../controllers/UserController.js';

const router = express.Router();

router
    .route("/user")
    .get(controller.temp)
    .post(controller.createUser);

export default router;