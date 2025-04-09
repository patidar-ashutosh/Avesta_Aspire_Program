/* What is template engine?
template engine ka use karke ham pages ko dynamically render karva sakte hai.

most popular template engine is -> Handlebars
Handlebars ka use karke ham 2 important task perform kar sakte hai.
1. render dynamic document
2. easily create code that we can reuse across pages.

use Handlebars we can install hbs package of npm

link : https://www.npmjs.com/package/hbs */

/* ab hame express ko bata padega ki ham const template engine use kar rahe hai,
jiske liye ham set method ka use karenge,
jisme first parameter me ham key denge joki hai view engine ,
or second parameter me konsa template engine use kar rahe hai uska name. */

const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { error } = require("console");
const { title } = require("process");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

/* ham jitni files ko as a dynamically render karna chahte hai,
une ham ek different folder create karke store karenge. like : views
views hai wo by default location hoti hai jisme hamari reusable file store hoti hai.

IMPORTANT

lekin yadi ham kisi or name se folder create karte hai to hame us folder ka path hai wo express ke config ko provide karna hoga.
like : folderName = templates
const viewPath = path.join(__dirname, "../templates");
ab hame express ko bata na padega ki usse templates vala path follow karna hai.
app.set("views", viewPath);
*/

// define paths for express config
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// create public directory path
const publicDirectoryPath = path.join(__dirname, '../public');

// using use method we can customize the server
// express.static method is serve the static file
app.use(express.static(publicDirectoryPath));

// setup Handlebars
app.set("view engine", 'hbs');
// setup views location
app.set("views", viewPath);
// set partialsPath
hbs.registerPartials(partialsPath);


// creating route for dynamic page
app.get("", (req, res) => {
    // using render method we can render our views
    // first parameter is name if view and,
    // second parameter is data of object that we want to access in view file
    res.render('index', {
        title : "this is dynamic title for index",
        name : "ap"
    });
});

app.get("/about", (req, res) => {
    res.render('about', {
        title : "this is dynamic title for about page",
        name : "patel abouts"
    });
});

app.get("/help", (req, res) => {
    res.render('help', {
        helpMsg : "this is some helpfull text.",
        title : "this is dynamic title for help page",
        name : "ap help"
    });
});

app.get("/help/*", (req, res) => {
    res.render('404Page', {
        title : "404 Page",
        name : "ap help",
        errorMsg : "Help article not found."
    });
});

// set the route with query string parameter
app.get('/products', (req, res) => {

    // all query string parameter is stored in req.query object
    console.log(req.query);

    // check that search query string parameter is present or not
    if(! req.query.search) {
        return res.send({
            error : "You must provide a search term"
        });
    }

    res.send({
        products : []
    });
});

app.get("/weather", (req, res) => {
    // check that address query string parameter is present or not
    if(! req.query.address) {
        return res.send({
            error : "Address is required"
        });
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error });
            }
    
            res.send({
                forecast : forecastData,
                location,
                address : req.query.address
            })
        })   
    })
});

app.get("*", (req, res) => {
    res.render("404Page", {
        title : "404 Page",
        name : "ap",
        errorMsg : "Page not found."
    })
})


// Start the server
app.listen(3000, () => {
    console.log("server is started");
});