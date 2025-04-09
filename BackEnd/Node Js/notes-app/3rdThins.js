// Install The NPM Package
/* Jab hame NPM packages ko apne project me use karna ho to pehle hame NPM ko initialize karna padta hai.
Jiske liye ham ek command run karenge.
npm init
npm init hai wo hamare project ke liye NPM ko initialize karta hai.
npm init hai wo ek file ko create karta hai package.json
joki hamare project ke all dependencies ko manage karta hai joki hamne NPM se install kiye honge.

jab ham npm init command ko run karte hai to wo hame project ki kuch details puchenga jise wo,
package.json file ko create kar sake. */

// Now how to install any package from NPM
// Go to site -> https://www.npmjs.com/
// jese ki example ke liye ham validation ke liye package ko install karte hai.
// command for install -> npm i validator

// jab ham is command ko run karenge to hamari package.json file me ek dependencies add ho jaaye gi,
// or apne project me ek node_modules folder create ho jaayenga jisme validator ka module hoga.

// Ab yadi hame is package ka use karna hai to hame pehle ise require ka use karke import karna pade ga.

let validator = require("validator");
let chalk = require("chalk");

// ab jo validator package hai ussme jobhi methods and property hogi wo store ho jaaye gi validator variable me.
console.log(validator.isEmail("test@gmail.com"));
console.log(validator.isEmail("testgmail.com"));
console.log(validator.isURL("https://www.google.com/"));
console.log(validator.isURL("https:/www.google.com/"));


console.log(chalk.green("Success!"));
console.log(chalk.bold.green("Success!"));
console.log(chalk.green.bold("Success!"));
console.log(chalk.inverse.green.bold("Success!"));