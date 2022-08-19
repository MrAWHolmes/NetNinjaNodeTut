// lesson 7 template engine <= ejs =>
// lesson 6 adding code from memory to have an express server for routing
// lesson 5 was npm ...
// lesson 4 code added here from memory
// had to lookup res.statusCode = ..
// and redirections:
//    res.writeHead(301,"new url");
//    res.end();
//

const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");

const server = express();

const PORT = 3000;

server.listen(PORT, "localhost", () => {
  console.log(`Express listenning on port ${PORT}`);
});

// basic routing next ..
// https://youtu.be/DQD00NAUPNk?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=779
//  http.get("/", (res) => {
//      res.
//  });

//route handled by ./controller/root.js
const htmlIndex = require("./routes/root.js");
server.get("/", htmlIndex);

//route handled by ./controller/about.js
const htmlAbout = require("./routes/about.js");
server.get("/about", htmlAbout);

//route handled by ./controller/redirect.js
const redirect = require("./routes/redirect.js");
server.get("/about-us", redirect);

// 404 catchall
const html404 = require("./routes/404.js");
server.use(html404);
