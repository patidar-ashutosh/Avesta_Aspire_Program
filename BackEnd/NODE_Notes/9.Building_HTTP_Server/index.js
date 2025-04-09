// To Create A HTTP Server using NodeJS we first do npm int
// so our package.json file got created

// Now to create an HTTP Server we can use a built in module call http
const http = require('http');
const fs = require("fs");

// in http module we have one method call createServer, and it's create a server using http
// createServer function take a callback function which can handle the Incoming request ,
// and process that request.
// a callback function have two argument request and response
const myServer = http.createServer( (req, res) => {
    console.log(req); // all client side details available in req object

    const log = `${Date.now()} : New Request Received \n`;
    fs.appendFile('./log.txt', log, (err, data) => {
        if(err) {
            res.end("File is not created");
        } else {
            res.end("File is created successfully");
        }
    });

    // res.end("Hello From Server Again");
});


// now we need a port number to run the server
// so we can listen this server using that port number and handle Incoming request and response
myServer.listen(3000, () => {
    console.log("Your Server Is Started...");
    console.log("Click This Link : http://localhost:3000/");
});