console.log("this is exportExample.js file running");

let name = 10;

// jese ki hame name variable ko another file me use karna hai wo hame name ko export karna pade ga.
// module.exports = name; // Uncomment this line
/* yani ki ab jaha pe bhi exportExample.js file ko require kiya jaaye ga to wo module.exports se jo return,
kiya hai yani ki name variable ki value return kare ga. */

// export the function
const sumOfTwoNumber = function (a,b) {
    return a + b;
}

module.exports = sumOfTwoNumber;