import express from 'express';
import { fetchEventData, addEventData } from './eventController';
import { detectTimeZone } from '../../middleware/detectTimeZone';
import { validateEvent } from './eventValidation';

const eventRouter = express.Router();

// middleware to detect user timezone
eventRouter.use(detectTimeZone);

// get the event data
eventRouter.get("/", fetchEventData);

// add event data
eventRouter.post("/", validateEvent, addEventData);

export {eventRouter};