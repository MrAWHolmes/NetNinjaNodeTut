// we call our custom module and use it

const stuff = require("./lesson02_outLibrary.js");

// What is arr?
console.log(stuff.peeps);

// What is proc?
console.log(stuff.sayHi);

// What is func?
console.log(stuff.returnHi);

stuff.sayHi(stuff.peeps[0]);

console.log(stuff.sayHi(stuff.peeps[1]));

// import as a destructured  elements? NB! These must match the export name!
const { peeps, returnHi, sayHi } = require("./lesson02_outLibrary.js");
console.log(peeps);

console.log(returnHi(peeps[3]));

sayHi(peeps[2]);
