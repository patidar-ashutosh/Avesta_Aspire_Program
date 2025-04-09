/* yadi hame fs module ka use karna hai wo pehle hame usse import karna padega.
kisi bhi module ko import karne ke liye ham require() method ka use karte hai.
joki hame module return karega. jise ham kisi variable me store karke uss module ko use kar sakte hai. */
const fs = require("fs");

// create new file and add data
fs.writeFileSync("test1.txt", "this is my file using node js");

// append the data with existing file
fs.appendFileSync("test2.txt", "this is second data");