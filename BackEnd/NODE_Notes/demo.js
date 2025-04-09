const fs = require('fs');

console.log(1);

fs.readFile("./FSExample/async.txt", "utf-8", (err, result) => {
    if(err) {
        console.log("Error To Read The File" , err);
    } else {
        console.log(result);
    }
});

console.log(2);
console.log(3);
console.log(4);
console.log(5);