/* express librarie hai wo hame ek single function return karta hai.
jisko ham tab call karte hai jab hame new express application create karni ho. */
const express = require("express");

/* jese ki ham ek express application create karte hai.
jise ham app name ke variable me store karte hai. */
const app = express();

// creating a route
app.get('', (req, res) => {
    // res.send("this is home page"); // send normal string

    // res.send("<h1>This is home page</h1>"); // send html

    /*res.send({
        name : "rakesh",
        age : 22
    })*/ // send json data
    // NOTE : jab ham koi object ko response me send karte hai to express hai wo automatically object ko stringify kar deta hai JSON me.

    res.send([
        {name : "vikram"},
        {name : "raju"}
    ]); // send array of object
})

/* get method have 2 arguments. 1st is route path and 2nd is a callback function,
means when the any one visit the url then what we need to do,
callback functions have 2 arguments first i request object and second is response object which have multiples method */

app.get("/about", (req, res) => {
    res.send("<h1>this is about page</h1>");
})

app.get("/help", (req, res) => {
    res.send("this is help page");
})

app.get("/weather", (req, res) => {
    res.send({
        location : "delhi",
        forecast : 22
    });
})

// Start the server
app.listen(3000, () => {
    console.log("server is started");
});