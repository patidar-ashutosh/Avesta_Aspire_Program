Ah, I see. It seems like you are looking for a list of methods provided by the `http` module in Node.js for handling server requests and responses. Here are some commonly used methods along with brief explanations:

1. **createServer(callback):**
   - Creates an HTTP server. The callback function is executed when a request is received.

   ```javascript
   const http = require('http');
   const server = http.createServer((req, res) => {
     // request handling logic
   });
   ```

2. **req (request) object:**
   - Represents the incoming HTTP request.
   - Provides information about the request, such as headers and URL.

   ```javascript
   req.url;       // Requested URL
   req.method;    // HTTP method (GET, POST, etc.)
   req.headers;   // Request headers
   ```

3. **res (response) object:**
   - Represents the HTTP response that the server sends back to the client.

   ```javascript
   res.writeHead(statusCode, headers);   // Set response status code and headers
   res.setHeader(name, value);           // Set a single response header
   res.write(data);                      // Write data to the response body
   res.end([data]);                      // End the response and optionally send data
   ```

   Example:
   ```javascript
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('Hello, World!');
   res.end();
   ```

4. **res.writeHead(statusCode, [statusMessage], [headers]):**
   - Sets the status code, status message, and headers for the response.

   ```javascript
   res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
   ```

5. **res.setHeader(name, value):**
   - Sets a single header for the response.

   ```javascript
   res.setHeader('Content-Type', 'text/html');
   ```

6. **res.write(data):**
   - Writes data to the response body.

   ```javascript
   res.write('Hello, World!');
   ```

7. **res.end([data]):**
   - Ends the response process. Optionally, you can send data as the last part of the response.

   ```javascript
   res.end('Goodbye!');
   ```

These are some of the essential methods provided by the `http` module for handling HTTP requests and responses in a Node.js server. Depending on your use case, you may use other methods and properties available in the `http` module for more advanced functionality.