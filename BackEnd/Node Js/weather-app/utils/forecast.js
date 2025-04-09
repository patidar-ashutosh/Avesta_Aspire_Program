const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=1343256fee2032225d0ae6f80092ebdd&query=${latitude},${longitude}&units=f`;

    // in request package we pass two parameters
    /* first is the option parameter wher we can pass our API url +
    if we want response in json parse format then we can make json : true
    second is callback function wher we have 2 arguments first is error and second is response */

    request({ url, json : true }, (error, {body}) => {
        if(error) { // if error is undefined means it's low-level error(like : no internet)
            callback("Unable to connect to weather service! Please check your internet!", undefined);
        } else if(body.error) {
            callback("Unable to find location. Enter valid location!", undefined);
        } else {
            callback(undefined, body.current.temperature);
        }
    });
}

module.exports = forecast;