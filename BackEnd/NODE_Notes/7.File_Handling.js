// we can use the fs module to interact with the file system.
const fs = require('fs');


// fs.mkdir() Method is use for creating a direcotry(folder)
// fs.mkdir("FSExample", (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully!');
//     }
// });

// we can also make nested folder but for that we need to true the recursive value

// fs.mkdir("FSExample/Sync", {recursive: true}, (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully!');
//     }
// });


// fs.writeFile() Method is use for creating a files

// Sync
// fs.writeFileSync("./FSExample/sync.txt", "Hello, This file created using writeFileSync");

// Async
// fs.writeFile("./FSExample/async.txt", "Hello, This file created using writeFile", (err) => {
//     // callback to handle error when it's not able to create a file
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log('File has been written successfully!');
//     }
// });


// fs.readFile() Method is use for reading the files

// Sync
// const result = fs.readFileSync("./FSExample/sync.txt", "utf-8");
// console.log(result);

// Async
// fs.readFile("./FSExample/async.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log("Error To Read The File" , err);
//     } else {
//         console.log(result);
//     }
// });


// fs.appendFile() Method is use to append the new data in exiting file.
// NOTE : if the file is not then fs.appendFile is also create a new file.

// Sync
// fs.appendFileSync("./FSExample/sync.txt", 'This is new data added\n');

// Async
// fs.appendFile("./FSExample/async.txt", "This is new data added\n", (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     } else {
//         console.log('Content has been appended successfully!');
//     }
// });


// fs.cpSync() Metohd ka use ek file ke content ki kisi another file me copy karne ke liye hota hai.
// fs.cpSync("./FSExample/sync.txt", './FSExample/copy.txt');


// fs.unlink() Method ka use kisi bhi file ho delete karne ke liye hota hai
// fs.unlink('./FSExample/copy.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File has been deleted successfully!');
//     }
// });


// fs.statSync() Method give the statices of a file
console.log(fs.statSync("./FSExample/sync.txt"));