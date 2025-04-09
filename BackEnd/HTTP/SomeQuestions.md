## **1. What is the default http port**
The default HTTP port is 80. When you access a website using a web browser and don't specify a port number, the browser assumes port 80 by default. For example, if you enter "http://www.example.com" in your browser, it is equivalent to "http://www.example.com:80". 


## **2. What is the default https port**
The default port for HTTPS (HTTP Secure) is 443. When you access a website using the HTTPS protocol, your web browser assumes port 443 by default. For example, if you enter "https://www.example.com" in your browser, it is equivalent to "https://www.example.com:443".


## **3. Can two servers listen on the same port?**
No, two servers cannot normally listen on the same port on the same IP address. Ports provide a way for multiple network services on a single host to share the same IP address while directing traffic to the appropriate service.


## **4. What is a hanging request?**
A hanging request, also known as a hanging connection or a long-polling request, refers to a situation where a client sends a request to a server and keeps the connection open, waiting for the server to respond. Unlike traditional short-lived HTTP requests, hanging requests can be maintained for an extended period.


## **5. What is a favicon?**
A favicon (short for "favorite icon") is a small, typically 16x16 pixels square icon associated with a website. It is displayed in the browser's address bar or tab and is used to identify a specific website visually. Favicons are also commonly displayed next to the website's name in bookmarks or favorites lists.

```html
<link rel="icon" href="/path/to/favicon.ico" type="image/x-icon">
```

This code specifies the location and type of the favicon. It's important to note that the file path is relative to the root of your website.

While the standard favicon size is 16x16 pixels, you can also provide larger versions for different use cases, such as 32x32 pixels or 48x48 pixels, by using the following code:

```html
<link rel="icon" href="/path/to/favicon.ico" type="image/x-icon" sizes="16x16 32x32 48x48">
```

Modern browsers support various icon sizes and automatically choose the most appropriate one based on the context in which the favicon is displayed.


## **6. What is a status code?**
A status code is a three-digit numeric code returned by a server in response to a client's request made to the server. These codes are part of the HTTP (Hypertext Transfer Protocol) standard and are included in the header of the HTTP response. The status code provides information about the outcome of the server's attempt to process the client's request.


## **7. What are the different status codes available?**
HTTP status codes are three-digit numbers returned by a web server in response to a client's request made to the server. These status codes indicate the outcome of the server's attempt to process the request. Here are some of the common HTTP status codes:

- **1xx - Informational:** The request was received, continuing process.
- **2xx - Successful:** The request was successfully received, understood, and accepted.
- **3xx - Redirection:** Further action needs to be taken to complete the request.
- **4xx - Client Error:** The request contains bad syntax or cannot be fulfilled.
- **5xx - Server Error:** The server failed to fulfill a valid request.

Each status code carries specific meaning and is used by web servers to communicate the outcome of a request to the client (e.g., web browser).


## **8. What is 404?**
A "404 error" is an HTTP status code that indicates that the server did not find the requested webpage. The number 404 is just the HTTP response code, and it is part of the standard HTTP protocol used to communicate between a web browser and a web server.

When you encounter a 404 error, it means that the server could not locate the requested URL on the server. This can happen for various reasons, including:

1. **Page Not Found:** The URL entered by the user does not correspond to an existing page on the server.

2. **Broken Links:** The webpage might have been moved or deleted, or there could be a typo in the URL.

3. **Incorrect Configuration:** The server may be misconfigured, preventing it from serving the requested content.


## **9. Find out how to access request headers**
In web development, accessing request headers depends on the programming language and web framework you are using.

### Node.js with Express:
In a Node.js application using the Express framework, you can access request headers through the `req.headers` object. Here's an example:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Accessing request headers
  const userAgent = req.headers['user-agent'];
  const contentType = req.headers['content-type'];

  // Print or use the headers as needed
  console.log('User-Agent:', userAgent);
  console.log('Content-Type:', contentType);

  res.send('Hello, World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

## **10. Find out how to set response headers**
In JavaScript, you can set HTTP response headers using different methods depending on the context in which you are working. Here are some common scenarios:

**Node.js (server-side):**
If you are working with Node.js on the server side, you can set response headers using the `response.setHeader()` method or by directly manipulating the `response` object. Here's an example:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Custom-Header', 'Custom-Value');

    // Send the response
    res.end('Hello, World!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```


## **11. What values do we give the Content-Type header?**
The `Content-Type` header in HTTP requests and responses specifies the media type of the resource or data. It indicates how the content should be interpreted. Here are some common values for the `Content-Type` header:

1. **Text Content:**
   - **Plain Text:** `text/plain`
   - **HTML:** `text/html`
   - **CSS:** `text/css`
   - **JavaScript:** `application/javascript` or `text/javascript`

2. **Structured Data:**
   - **JSON:** `application/json`
   - **XML:** `application/xml` or `text/xml`

3. **Form Data:**
   - **Form URL-encoded:** `application/x-www-form-urlencoded`
   - **Multipart form data:** `multipart/form-data`

4. **Binary Data:**
   - **Binary Data:** `application/octet-stream`
   - **Images:** `image/jpeg`, `image/png`, etc.
   - **Audio:** `audio/mpeg`, `audio/wav`, etc.
   - **Video:** `video/mp4`, `video/webm`, etc.

5. **Fonts:**
   - **TrueType Font:** `font/ttf`
   - **OpenType Font:** `font/otf`
   - **Web Open Font Format (WOFF):** `font/woff` or `font/woff2`

6. **Compressed Data:**
   - **ZIP:** `application/zip`
   - **GZIP:** `application/gzip`

7. **Application-Specific Types:**
   - **PDF:** `application/pdf`
   - **Excel:** `application/vnd.ms-excel`
   - **Word:** `application/msword`
   - **JavaScript Object Notation JSON-LD:** `application/ld+json`

These are just a few examples, and there are many other media types. The appropriate `Content-Type` value depends on the nature of the content you are sending or receiving. It's crucial to set the correct `Content-Type` to ensure that the recipient interprets the data correctly.


## **12. What are the 7 most used headers?**
The most commonly used HTTP headers can vary depending on the context (request or response) and the specific requirements of the application. However, some headers are frequently used across various scenarios. Here are seven headers that are commonly used:

1. **`Content-Type`:**
   - **Purpose:** Specifies the media type of the resource or data.
   - **Example:** `Content-Type: application/json` for JSON data.

2. **`Content-Length`:**
   - **Purpose:** Indicates the size of the message body in octets (8-bit bytes).
   - **Example:** `Content-Length: 1024` for a message body of 1024 bytes.

3. **`Cache-Control`:**
   - **Purpose:** Directs caching mechanisms on how to cache the content.
   - **Example:** `Cache-Control: no-cache` to indicate that the response should not be cached.

4. **`Authorization`:**
   - **Purpose:** Contains credentials for authenticating the client with the server.
   - **Example:** `Authorization: Bearer <token>` for token-based authentication.

5. **`User-Agent`:**
   - **Purpose:** Identifies the user agent (browser or client) making the request.
   - **Example:** `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`

6. **`Accept`:**
   - **Purpose:** In a request, indicates the media types that the client can process.
   - **Example:** `Accept: application/json` to indicate that the client prefers JSON responses.

7. **`Location`:**
   - **Purpose:** In a response with a status code 3xx (redirection), indicates the new location of the resource.
   - **Example:** `Location: https://example.com/new-location` for redirection.

These headers cover a range of functionalities, including content type negotiation, authentication, caching directives, and more. Keep in mind that the headers used can vary based on the specific use case and requirements of your application.


## **13. What are the different HTTP methods such as GET, POST, etc?**
HTTP (Hypertext Transfer Protocol) defines several methods or verbs that indicate the desired action to be performed on a resource. The most commonly used HTTP methods are:

1. **GET:**
   - **Purpose:** Retrieve data from the server.
   - **Example:** Retrieve information about a user by requesting `GET /users/123`.

2. **POST:**
   - **Purpose:** Submit data to the server to create a new resource.
   - **Example:** Create a new user by submitting data to `POST /users`.

3. **PUT:**
   - **Purpose:** Update a resource on the server with the provided data.
   - **Example:** Update information about a user by sending data to `PUT /users/123`.

4. **PATCH:**
   - **Purpose:** Partially update a resource on the server.
   - **Example:** Update only the email address of a user with `PATCH /users/123`.

5. **DELETE:**
   - **Purpose:** Delete a resource on the server.
   - **Example:** Delete a user by making a request to `DELETE /users/123`.

6. **OPTIONS:**
   - **Purpose:** Used to describe the communication options for the target resource.
   - **Example:** Retrieve information about the communication options for a resource with `OPTIONS /resource`.

7. **HEAD:**
   - **Purpose:** Similar to GET but retrieves only the headers and no message body.
   - **Example:** Retrieve headers for a resource without retrieving its content using `HEAD /resource`.

8. **TRACE:**
   - **Purpose:** Echoes back the received request for diagnostic purposes.
   - **Note:** It is often disabled for security reasons.

9. **CONNECT:**
   - **Purpose:** Used to establish a network connection to a resource.
   - **Example:** Used in the context of the HTTP CONNECT method for establishing a tunnel to the server identified by a given URI.

These HTTP methods provide a standardized way for clients to interact with resources on the web server. The choice of method depends on the action you want to perform on the resource (e.g., retrieving, creating, updating, or deleting data).



## **14. What is utf-8 and where is it used and why?**
UTF-8, which stands for "Unicode Transformation Format - 8-bit," is a variable-width character encoding that can represent every character in the Unicode character set. Unicode is a standardized character encoding system that aims to cover all the characters used by the world's various writing systems.

Here are some key points about UTF-8:

1. **Variable-width Encoding:**
   - UTF-8 is a variable-width encoding, meaning that different characters may require different numbers of bytes to represent. Commonly used characters, such as those in the ASCII character set, are represented with a single byte, while less common characters and symbols may require more bytes.

2. **Compatibility with ASCII:**
   - UTF-8 is designed to be backward compatible with ASCII (American Standard Code for Information Interchange). ASCII characters use the same encoding in UTF-8, ensuring that text that was encoded in ASCII remains valid UTF-8.

3. **Unicode Support:**
   - UTF-8 can represent any character in the Unicode standard, which includes characters from virtually all writing systems used around the world. This makes UTF-8 a widely adopted and versatile character encoding.

4. **Web and Email:**
   - UTF-8 is the dominant character encoding on the internet. It is used extensively in web pages, URLs, and email to support the diverse range of languages and characters used globally.

5. **Programming Languages:**
   - Many programming languages and platforms use UTF-8 as the default character encoding. This includes languages like Python, JavaScript, Java, and more. It ensures that developers can work with text data in different languages seamlessly.

6. **Database Storage:**
   - UTF-8 is commonly used for storing text data in databases to support multilingual content. It provides a standardized way to handle characters from different writing systems.

7. **File Formats:**
   - UTF-8 is often used as the character encoding for text files. It is the default encoding for many programming environments and text editors.

8. **Interoperability:**
   - UTF-8 facilitates interoperability between systems and applications that may use different character encodings. Its widespread adoption helps avoid issues related to character set mismatches.

In summary, UTF-8 is a widely adopted and versatile character encoding that supports the representation of characters from various writing systems. Its use ensures interoperability, compatibility, and the ability to work with text data in multiple languages on the web, in programming, databases, and other digital communication contexts.