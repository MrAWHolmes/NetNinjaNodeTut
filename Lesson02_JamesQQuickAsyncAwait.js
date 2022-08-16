// James Q Quick Async JS !!!
// https://youtu.be/670f71LTWpM 10 Mins!!!!
//

const fs = require("fs");
//const fetch = require("node-fetch"); //NB! node-fetch not just fetch!
// See doc : https://www.npmjs.com/package/node-fetch common JS
const fetch = () => import("node-fetch").then(({ default: fetch }) => fetch());

// oh my node-fetch is soooooooo jankkyyyyyy
// ref: https://www.npmjs.com/package/axios
const axios = require("axios").default;

const path = require("path");

const myFileName = path.join(__dirname, "notafile.txt");

// callbacks :https://youtu.be/670f71LTWpM?t=75

// setTimeout
setTimeout(() => {
  console.log("I waited for 1 second");
}, 1000);

// Nested setTimeouts .. callback hell!
setTimeout(() => {
  console.log("3");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("1");
    }, 1000);
  }, 1000);
}, 1000);

//error first callback https://youtu.be/670f71LTWpM?t=211
fs.readFile(myFileName, { encoding: "UTF-8" }, (err, data) => {
  console.log("trace: fs.readFile(callback):");
  if (err) {
    console.log(err.message);
    throw err;
  }
  console.log(data);
});

// promises :
const myPromise = new Promise((resolve, reject) => {
  // replicating random error/ failure

  const rand = Math.floor(Math.random() * 2);
  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});

// Note to self - NOTE the promise is run first
p = myPromise
  .then(() => {
    console.log("promise success");
    return { data: "success" };
  })
  .catch((err) => {
    console.log("promise failed");
    return { data: "Failure" };
  });

// value of promise as pending is logged first!
console.log(p);

//Using fs.promises
fs.promises
  .readFile(myFileName, { encoding: "UTF-8" })
  .then((data) => {
    console.log("fs.promises.then() callback");
    console.log(data);
  })
  .catch((err) => {
    console.log("fs.promises.catch() callback");
    console.log(err.message);
    throw err;
  });

// fetch API with promises:
// similar format to fs.promises but data from th einternet via na API
//NODEJS fetch returns a promise!

//garbage..>>> Cool FREE APIs https://rapidapi.com/collection/list-of-free-apis

// use this : https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

// node-fetch is so janky now using axios instead...

axios("https://v2.jokeapi.dev/joke/Any")
  .then((res) => {
    console.log("axios.promises.then() callback");
    console.log("returning res.data");
    //console.log(res.data); // we want the data part of the rresponse only
    return res.data; // this throws data as a promist so the next .then() can catch it
  })
  .then((data) => {
    console.log("promised data:");
    console.log(data);
  })
  .catch((err) => {
    console.log("axios.promises.catch() callback");
    console.log(err.message);
    //throw err;
  });

// async await :
// redoing file stuff using async await
// Step 1 - create an async function - lets call it loadFile()

const loadFile = async () => {
  // Step2 : use await in a try block
  try {
    // Step 3 run async code with await
    console.log(`loadFile() reading file ${myFileName}`);
    const data = await fs.promises.readFile(myFileName, { encoding: "UTF-8" });

    // return wont wait!
    return data;
  } catch (e) {
    // step 4 catch error
    console.log(e);
  }
};

// In theory data will not be undefined
// aha a pending promise! How do we retunr the data????
console.log(loadFile());

//Lets call it as a .then() promise?
loadFile()
  .then((data) => {
    console.log("calling loadFile().then():");
    console.log(data);
  })
  .catch((err) => console.log(err));

//
// axios using async await instead of promise?
//

const getJoke = async () => {
  try {
    const res = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const data = await res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

getJoke()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// this may run first even though it called last
console.log("Sync Code Main console log");
