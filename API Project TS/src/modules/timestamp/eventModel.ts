import { pool } from "../../DB/connection";

interface Events {
    id : number,
    event_name : string,
    event_time : Date;
}

const eventsQuery = {
    getEventDataQuery : async (userTimeZone:string) : Promise<Events[]> => {
        const [result] = await pool.query("SELECT id, event_name, CONVERT_TZ(event_time, '+00:00', ?) AS local_event_time FROM events", [userTimeZone]);
        return result as Events[];
    },

    addEventDataQuery : async (obj : {eventName:string, eventTime:string}) : Promise<Events[]> => {
        const [result] = await pool.query("INSERT INTO events (event_name, event_time) VALUES (?,?)", [obj.eventName, obj.eventTime]);
        return result as Events[];
    }
}

export { eventsQuery };