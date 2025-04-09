import express from 'express';
import { logoutUser } from './logoutController.js';

const logoutRouter = express.Router();

logoutRouter.post('/', logoutUser);

export {logoutRouter};