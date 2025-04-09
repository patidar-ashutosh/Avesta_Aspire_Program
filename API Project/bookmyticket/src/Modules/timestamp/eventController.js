import { eventsQuery } from './eventModel.js';

// Handle fetching event data
const fetchEventData = async (req, res, next) => {
    try {
        const userTimeZone = req.userTimeZone;
        const data = await eventsQuery.getEventDataQuery(userTimeZone)
        res.send(data);
    } catch(err){
        next(err);
    }
}

// Hadle adding events
const addEventData = async (req, res, next) => {
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