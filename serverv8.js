// lesson 8 - middleware ... its the response that terminates the chain!
// lesson 7 template engine <% ejs %>
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
const morgan = require("morgan");

const server = express();
// regidter view engine after express object created
server.set("view engine", "ejs");
//set folder - default is ./views
server.set("views", "views");

const PORT = 3000;

server.listen(PORT, "localhost", () => {
  console.log(`Express listenning on port ${PORT}`);
});

// basic routing next ..
// https://youtu.be/DQD00NAUPNk?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=779
//  http.get("/", (res) => {
//      res.
//  });

//lesson 8 middleware
server.use((req, res, next) => {
  console.log("New request :");
  console.log(`\thost:\t${req.hostname}`);
  console.log(`\tpath:\t${req.path}`);
  console.log(`\tmethod:\t${req.method}`);
  next();
});

//lesson 8 middleware - using 3rd party middleware
server.use(morgan("dev"));

//L8 express built in middleware for static files
// Example styles.css
server.use(express.static("public")); // exposes content of this folder

//route handled by ./routes/root.js
const htmlIndex = require("./routes/root.js");
server.get("/", htmlIndex);

//route handled by ./routes/about.js
const htmlAbout = require("./routes/about.js");
server.get("/about", htmlAbout);

//route handled by ./routes/redirect.js
const redirect = require("./routes/redirect.js");
server.get("/about-us", redirect);

//route handled by ./routes/createBlog.js
const createBlog = require("./routes/createBlog");
server.get("/blogs/create", createBlog);

// 404 catchall
const html404 = require("./routes/404.js");
server.use(html404);
