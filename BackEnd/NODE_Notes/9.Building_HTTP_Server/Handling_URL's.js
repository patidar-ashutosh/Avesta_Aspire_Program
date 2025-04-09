// What is URL ? 
// URL means Uniform Resource Locator
// like : https://www.google.com/ this is our url
// Now URL have 3 import thing

// 1. what is protocols
// protocols hote hai wo kuch set of rules hote hai joki browser ko bata te hai ki,
// hamare server ke saath communicate kese karna hai.
// like HTTP jo ki ek protocol hai.

// 2. What is domain
// domain hota hai wo ek user friendly name hota hai hamare server ke ip address ka.
// actually kya hota hai ki hamare server ka ek ip address hota hai,
// ab ham every users ko esa ho nahi ke sakte hai ki ye mere ip address hai meri site ko ise visit karna.
// is liye ham ek domain purchase karte hai or us domain ko hamare server ke ip address ke saath link kar dete hai.

// EXAMPLE
// jese ki ham google ka ip address find karte hai. ping google.com
// fir ham us ip ko google me paste karenge to same vahi page open hoga joki google.com se open hota hai.

// 3. path 
// means hame apne domain ke baad jo / ya uske aaje jo bhi hota hai usse bola jaath hai path.
// jo / salsh hota hai wo root path hota hai site ka.
// /about yani ki ye about path hai.
// /project/1 yani ki ye ek nested path hai

// 4. query parameters (optional)
// query parameters yani ki ham koi extra information pass karna chahte hai hamare URL ke saath then we can use query parameters.
// query parameters likhne ke liye ham ? (question mark) ka use karte hai.
// ? (question mark) ke baad jo bhi data hota hai wo hamare query parameters hote hai.
// in query parameters we can pass the value using key and value pairs,
// and for passing multiple data we can use the & sign
// like : /about?userId=1&a=2



const http = require('http');
// we can install url module for parse the url
const url = require('url');

const myServer = http.createServer((req, res) => {
    // we get the url in our request object .url property

    // we parse our url using url module so we get all url data separately
    // we pass true as a second parameters because we need our query parameters as a object
    const myURL = url.parse(req.url, true);

    switch(myURL.pathname) {
        case '/':
            res.end("Welcome to home page");
            break;
        
        case '/about':
            res.end("Welcome to about page");
            break;
        
        case '/login':
            // res.end("Welcome to login page");
            // if we got some query parameters value
            let username = myURL.query.name;
            let password = myURL.query.password;
            res.end(`Login Success With ${username} and ${password}`);
            break;
    
        default:
            res.end("404 Page Not Found");
    }
})


myServer.listen(3000, () => {
    console.log("Your Server Is Started...");
    console.log("Click This Link : http://localhost:3000/");
});