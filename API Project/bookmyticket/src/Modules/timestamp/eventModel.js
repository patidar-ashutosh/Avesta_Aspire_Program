import { pool } from "../../../DB/connection.js";

const eventsQuery = {
    getEventDataQuery : async (userTimeZone) => {
        const [result] = await pool.query("SELECT id, event_name, CONVERT_TZ(event_time, '+00:00', ?) AS local_event_time FROM events", [userTimeZone]);
        return result;
    },

    addEventDataQuery : async (obj) => {
        const [result] = await pool.query("INSERT INTO events (event_name, event_time) VALUES (?,?)", [obj.eventName, obj.eventTime]);
        return result;
    }
}

export { eventsQuery };