const name = "Yoshi";

console.log(`${name}`);

const greet = function (name) {
  console.log(`hello ${name}`);
};

const greet2 = (name) => {
  console.log(`hello ${name}`);
};

greet("mario");
greet("yoshi");
greet2("Dunbar");

// We have a global object in node - but its not as full as the window object
//   we can do setTimeout(); but not alert();!
