const request = require("request");

const geocode = (address, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=fb858c83394f4f3ead5598aca32a612f`;

    // in request package we pass two parameters
    /* first is the option parameter wher we can pass our API url +
    if we want response in json parse format then we can make json : true
    second is callback function wher we have 2 arguments first is error and second is response */

    request({url : url, json : true}, (error, response) => {
        if(error) { // if error is undefined means it's low-level error(like : no internet)
            callback("Unable to connect to weather service! Please check your internet!", undefined);
        } else if(response.body.results.length === 0) {
            callback("Unable to find location. Enter valid location!", undefined);
        } else {
            callback(undefined , {
                latitude : response.body.results[0].geometry.lat,
                longitude : response.body.results[0].geometry.lng,
                location : response.body.results[0].formatted
            });
        }
    })
}

module.exports = geocode;