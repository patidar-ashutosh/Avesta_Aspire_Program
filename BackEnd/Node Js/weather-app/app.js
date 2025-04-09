const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// in request package we pass two parameters
/* first is the option parameter wher we can pass our API url +
if we want response in json parse format then we can make json : true
second is callback function wher we have 2 arguments first is error and second is response */

const address = process.argv[2];

if(!address) {
    console.log("Please Provide An Address!");
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            console.log(error);
            return;
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                console.log(error);
                return;
            }
    
            console.log(location);
            console.log(forecastData);
        })   
    })
}