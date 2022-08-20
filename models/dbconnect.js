// Exports conn - the database connection?

const { netninja } = require("./passwords.js"); // this path must be relative

const mongoose = require("mongoose");

let dbase = "netninjas";

const mdb = mongoose
  .connect(netninja.getUrl() + dbase)
  .then((result) => {
    console.log(`connected to Atlas dbase : ${dbase}...`);
    return result;
  })
  .catch((e) => {
    console.log(e.message);
    throw e;
  });

module.exports = mdb;
