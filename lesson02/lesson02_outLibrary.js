// Our custom library

const peeps = ["yoshi", "ryu", "chun-li", "mario"];

const sayHi = function (name) {
  console.log("Hello", name);
};

const returnHi = function (name) {
  return "Hello " + name;
};

module.exports = { peeps, sayHi, returnHi };
