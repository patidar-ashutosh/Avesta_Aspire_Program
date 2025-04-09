import { eventsQuery } from './eventModel';
import { Request, Response, NextFunction } from "express";
import { TimeZone } from '../../middleware/detectTimeZone';

// Handle fetching event data
const fetchEventData = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    const temp = req as unknown as TimeZone;
    try {
        const userTimeZone = temp.userTimeZone;
        const data = await eventsQuery.getEventDataQuery(userTimeZone)
        res.send(data);
    } catch(err){
        next(err);
    }
}

// Hadle adding events
const addEventData = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try {
        const {eventName, eventTime} = req.body;
        const data = await eventsQuery.addEventDataQuery({eventName,eventTime});
        res.send(data);
    } catch(err) {
        next(err);
    }
}

export {
    fetchEventData,
    addEventData
};