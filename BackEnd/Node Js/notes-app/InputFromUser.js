// How to get Input From User
// jab hame user se koi input lena ho wo bhi command line se tab ham command line arguments ka use karenge.

/* command line me ham node + fileName usske baad jo bhi values dete hai wo command line arguments kahe jaata hai.
like : node app.js add --title:"this is text"
Jo add and --title:"this is text" hai wo command line arguments kahe jaayenge.

ab jo command line arguments hai usko file me use karne ke liye Node Js hame jo process object provide karta hai uska use karenge.
process me ek property hoti hai argv jisme ham jitne bhi arguments pass ki hogi wo as a array me mil jaaye gi. */

// Example
// run this command : node InputFromUser.js raju bhai

console.log(process.argv[2]);
console.log(process.argv[3]);

// run this command : node InputFromUser.js raju bhai 1234567890

console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);


// IMPORRANT
/* ab ham jobhi values as arguments pass karte hai to wo values hame parse hoke nahi milti hai,
yani ki ham jis way me command line se pass karenge same ussi way me hamo ko process.argv se mile gi.

lekin hame arguments hai wo as a parse formate me chahiye jise ham usse as a data use karke,
us data ka kuch use kar sake.

ab parse karne ke liye ham kudh ka code likh sakte hai.

lekin ham yaha pe ek npm package ka use karenge jo ki hai :- yargs
*/