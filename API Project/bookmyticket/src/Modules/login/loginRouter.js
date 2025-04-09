import express from 'express';
import { getLoginInfo } from './loginController.js';
import { validateLoginDetails } from './loginValidation.js'

const loginRouter = express.Router();

// api for login user
loginRouter.post("/", validateLoginDetails, getLoginInfo);

export {loginRouter};