/* static web pages yani ese web pages jisme data hoga wo static hoga.
data hai wo change nahi hoga. */
const path = require("path");
const express = require("express");

const app = express();

// create public directory path
const publicDirectoryPath = path.join(__dirname, '../public');

// using use method we can customize the server
// express.static method is serve the static file
app.use(express.static(publicDirectoryPath));

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