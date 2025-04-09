// http is native to NodeJS. We just have to ask for it
const http = require('http');

// fs = file system module! fs is built into Node. see above
// fs gives node access to THIS computers file system.
const fs = require('fs');

// the http module has a createServer method
// takes 1 arg:
// 1. callback, callback, has 2 args: req, res
const server = http.createServer((req, res)=>{
    console.log(`A request was made to: ${req.url}`)

    // the user wants the home page! we know, because the req object has / in the url property
    // console.log(req)
    // res = our way of responding to the requester
    // http message 
    // 1. start-line - CHECK
    // 2. header
    // 3. body
    // writeHead takes 2 args:
    // 1. status code
    // 2. object for the mime-type
    // res.writeHead(200,{'content-type':'text/html'});
    // res.write('this is server using node');
    // res.end();
    // this same code is run for all the paths

    // if we don't make a different-different routes then what's happen ?
    /* let's supose we create server using 3000 ports,
    so if we make call of any path(URL) so all path(URL) goes to same output,
    because we don't make different-different routes, so all path(URL)
    have hame ports response.
    that's why we need different-different routes */

    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        // res.write('');
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        res.end();
    }else if(req.url === "/node.png"){
        res.writeHead(200,{'content-type':'image/png'});
        const image = fs.readFileSync('node.png')
        res.write(image)
        res.end();
    }else if(req.url === "/styles.css"){
        res.writeHead(200,{'content-type':'text/css'});
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end();        
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write(`<h4>Sorry, this isn't the page you're looking for!</h4>`);
        res.end();        
    }
});

// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
server.listen(3000);