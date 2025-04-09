import moment from "moment-timezone";
import geoip from 'geoip-lite';

function detectTimeZone(req, res, next) {
    try {
        // get client IP address (supports proxies)
        // const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        // const clientIp = req.ip;
        // const clientIp = "1.159.255.255";
        const clientIp = "104.174.125.138";

        // get geo-location information based on IP
        const geo = geoip.lookup(clientIp);

        req.userTimeZone = geo && geo.timezone ? geo.timezone : 'UTC';

        // convert timezone to timezone offset
        const timezone = req.userTimeZone;
        const currentDateTime = moment();

        // convert current time to the specified timezone
        const zonedTime = currentDateTime.tz(timezone);

        // format the time in ISO format with timezone offset (+00:00)
        // const formattedTime = zonedTime.format("YYYY-MM-DDTHH:mm:ssZ");
        // let userTimeZone = formattedTime.slice(19);

        req.userTimeZone = zonedTime.format("Z");
        next();
    } catch (error) {
        req.userTimeZone = "+00:00";
        res.status(400).send({ error: 'Invalid timezone provided.' });
    }
}

export {detectTimeZone};