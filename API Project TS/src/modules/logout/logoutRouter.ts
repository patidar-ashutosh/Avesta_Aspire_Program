import express from 'express';
import { logoutUser } from './logoutController';

const logoutRouter = express.Router();

logoutRouter.post('/', logoutUser);

export {logoutRouter};