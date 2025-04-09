/* jab hame kisi another file ko apne current file me use karna ho to jis file ko hame use karna ho,
us file ko hame require ke through import karna padta hai. */
// require("./exportExample.js"); // Uncomment this line

/* NOTE : ham jo bhi file require ke through import karte hai us file me jo variables hote hai,
unne ham access nahi kar sakte hai.
uske liye hame us variable ko jine hame koi another file me use karna hai une export karna padta hai. */
// let name = require("./exportExample.js"); // Uncomment this line
/* yani ki exportExample.js hame jobhi return kare ga wo name variable me store ho jaaye ga.
NOTE : hame name variable ki jagape kuch or bhi name de sakte hai. */

// console.log(name); // Uncomment this line

let sumFunc = require("./exportExample.js");

let ans = sumFunc(10, 20);

console.log(ans);