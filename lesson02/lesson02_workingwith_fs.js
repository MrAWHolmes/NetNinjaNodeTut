// Two cool built in node modules
// fs = file System
// os = operating system
// path = palatform independnt pathing!

//reading files

const fs = require("fs");
const os = require("os");
const path = require("path");

console.log("Start new trace----------------------");

myFileName = path.join(__dirname, "myfile.txt");
console.log(myFileName);

// James Q Quick Async JS !!!
// https://youtu.be/670f71LTWpM 10 Mins!!!!
//

//writing files

const appFile = async (aLine) => {
  try {
    await fs.promises.appendFile(
      myFileName,
      //   { encoding: "UTF-8" },
      aLine + "\n"
    );
    // clg wont wait fort this!
    console.log(`appending to file: ${myFileName}`);
    const filedata = await fs.promises.readFile(myFileName, {
      encoding: "UTF-8",
    });
    //clg wait for filedata?
    console.log("did we wait fro file data or not?");
    console.log("We do wait for the file data!");
    console.log(filedata);
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

//call it
// note the for loop does not garantee synchronouse execution!
let dataArr = ["some", "file", "data", "yay!"];
for (let x = 0; x < dataArr.length; x++) {
  appFile(dataArr[x]);
}

// managing directories
if (!fs.existsSync("./docs")) {
  fs.promises
    .mkdir("./docs")
    .then(() => {
      //console.log(res);
      console.log(path.join(__dirname, "/docs"), "was created");
    })
    .catch((err) => console.log(err));
} else {
  fs.promises
    .rmdir("./docs")
    .then(() => {
      console.log("folder ./docs was removed");
    })
    .catch((e) => console.log(e));
}

// deleting files & folders
// NOTE TO SELF - use fs.unlink() method to delete a file!
//

// REDO this until you jknow it!
// NB! Streams! https://youtu.be/OIBIXYLJjsI?t=1913
// Bloody video is wrong - need to call a .write method! on the writeStream !!!
// Read Streams
// Need a big file - letcs call it bigFile.txt
//

// we create a new stream with the constructor!

const writeStream = fs.createWriteStream("./copyOfBig.txt");
const readStream = fs.createReadStream("./bigFiles.txt", { encoding: "UTF-8" });

console.log(typeof readStream);
console.log(typeof writeStream);

writeStream.write("HI");

readStream.on("data", (buff) => {
  console.log("new chunk--->");
  console.log("writing buffer");
  //console.log(buff);
  writeStream.write("\nnew chunk > \n");
  writeStream.write(buff);
  console.log("<----end of chunk");
});

// now pipe copy
// dont know how to reset the stream so lets just open it again ...
readStream.resume(); // may not work....it does!!!

const writeStream2 = fs.createWriteStream("./BigAgain.txt");
readStream.pipe(writeStream2);
