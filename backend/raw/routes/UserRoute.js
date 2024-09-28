import express from 'express';
import * as controller from '../controllers/UserController.js';

const router = express.Router();

router
    .route("/user")
    .get(controller.temp);

/*
router
    .route("/user")
    .get(controller.)
    .post(controller.);
*/

export default router;