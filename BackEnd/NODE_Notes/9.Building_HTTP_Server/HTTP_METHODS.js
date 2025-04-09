/* GET : when we want to get some data from the server.
jab hame hamare server data ko get karna hota hai tab ham GET method ka use karte hai.

jabhi ham kisi site ko search karte hai to wo by default get request karta hai, 
us site ke server ko or jo server kota hai wo data ko reaad karke hame response,
me use data ko send kar deta hai.

By default our browser is make a always get request
*/


/* 
POST : when we want to send and mutate(change data) some data in server.

jab hame apne server me kisi data ko send karna hota hai tab ham POST method ka use karte hai.

Examples ke liye jo hamara form hota hai jab ham usse submit karte hai,
to hame us data ko database me store karna hota hai.
To ham ek POST request create karenge jo ki hamare form ke data ko server pe send karega,
or fir ham server ka use karke us data ko database me store kar denge.
*/



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
            if(req.method === "GET") {
                res.end("Welcome to home page \nThis is GET Request");
            }
            break;
                
        case '/login':
            if(req.method === "GET") {
                res.end("Welcome to login page \nThis is GET Request");
            } else if(req.method === "POST") {
                // Logic Related To Store Data In Database
                res.end("Data Successfully Stored..");
            }
            break;
    
        default:
            res.end("404 Page Not Found");
    }
})


myServer.listen(3000, () => {
    console.log("Your Server Is Started...");
    console.log("Click This Link : http://localhost:3000/");
});