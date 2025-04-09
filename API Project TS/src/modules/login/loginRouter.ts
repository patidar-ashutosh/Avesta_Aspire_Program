import express from 'express';
import { getLoginInfo } from './loginController';
import { validateLoginDetails } from './loginValidation';

const loginRouter = express.Router();

// api for login user
loginRouter.post("/", validateLoginDetails, getLoginInfo);

export {loginRouter};