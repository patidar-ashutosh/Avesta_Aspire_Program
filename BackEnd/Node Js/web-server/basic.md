## What is Express Js ?
Express hai wo ek NPM librarie hai jiska use karke ham web servers create kar sakte hai using Node.

Express.js is a fast, unopinionated, and minimalist web application framework for Node.js.

Express.js is widely used for backend development due to its simplicity, flexibility, and extensive middleware support.

## What is web servers ?
A web server is a computer system and software that stores and delivers web content to users over the internet.

### To install Express.Js package first we need to install npm.
``npm init -y``

### after we can install express using
``npm i express``

### EXAMPLE OF WEB SERVER
    /* express librarie hai wo hame ek single function return karta hai.
    jisko ham tab call karte hai jab hame new express application create karni ho. */
    const express = require("express");

    /* jese ki ham ek express application create karte hai.
    jise ham app name ke variable me store karte hai. */
    const app = express();

    // creating a route
    app.get('', (req, res) => {
        res.send("this is home page");
    })
    /* get method have 2 arguments. 1st is route path and 2nd is a callback function,
    means when the any one visit the url then what we need to do,
    callback functions have 2 arguments first i request object and second is response object which have multiples method */

    // Start the server
    app.listen(3000, () => {
        console.log("server is started");
    });