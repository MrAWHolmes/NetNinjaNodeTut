// Global object

console.log(global);

// We only have a few mthods:

// * {<ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 76.98839998245239,
//       nodeStart: 0.825499951839447,
//       v8Start: 4.62279999256134,
//       bootstrapComplete: 38.86939996480942,
//       environment: 17.955899953842163,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1660578534273.647
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }
//}

//towards async with setTimeout()!

const callBack = () => {
  console.log("I wait for the async code to run");
};

const run = async function () {
  try {
    await setTimeout(() => {
      // syncronouse code goes here
      console.log("run");
      callBack();
    }, 3000);
    //run synchtonous code here
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

// The syncronous code must be in the callback function
// or it does not wait even though there is an await!
const run2 = async function () {
  try {
    await setTimeout(() => {
      console.log("This is run2:");
      console.log("stopping the 'go' interval after 3 seconds");
      clearInterval(go);
    }, 3000);
    // syncronous function call goes here
    console.log("run2");
    callBack();
    console.log("NOT!");
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const go = setInterval(() => {
  console.log("In the interval");
}, 500);

run(); // waits correctly
run2(); //does not wait! But it will clear the interval after 3 seconds
console.log("I dont wait for async code!");

// globals we have access to:
console.log(`__dirname : ${__dirname}`);
console.log(`__filename : ${__filename}`);
