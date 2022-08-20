// lesson 9 - mongodb
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
const mongoose = require("mongoose");
const Blog = require("./models/blogModel.js");

const server = express();
// regidter view engine after express object created
server.set("view engine", "ejs");
//set folder - default is ./views
server.set("views", "views");

const PORT = 3000;

//server listenner launced only after dbconncetion promise is fulfilled
const mdb = require("./models/dbconnect.js")
  .then((result) => {
    server.listen(PORT, "localhost", () => {
      console.log(`Express listenning on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
    throw e;
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

//L9 - sandbox routes to test our blogs model
server.get("/mdb-newBlog", (req, res) => {
  const blog = new Blog({
    title: "Saturday Title 2",
    snippet: "Saturday Snippet 2",
    body: "Saturday Lorum Ipsum 2 ...",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.log(e);
    });
});

server.get("/mdb-allBlogs", (req, res) => {
  Blog.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.log(e);
    });
});

// Views are handled by ./routes/*.js which call res.render on the .ejs files
//lesson 8 middleware - using 3rd party middleware
server.use(morgan("dev"));

//L8 express built in middleware for static files
// Example styles.css
server.use(express.static("public")); // exposes content of this folder

//route handled by ./routes/root.js
const htmlIndex = require("./routes/root.js");
// redirecting to /blogs
server.get("/", (req, res) => {
  res.redirect("/blogs");
});

//route handled by ./routes/about.js
const htmlAbout = require("./routes/about.js");
server.get("/about", htmlAbout);

//route handled by ./routes/redirect.js
const redirect = require("./routes/redirect.js");
server.get("/about-us", redirect);

//Blog routes
server.get("/blogs", htmlIndex);

//route handled by ./routes/createBlog.js
const createBlog = require("./routes/createBlog");
server.get("/blogs/create", createBlog);

// 404 catchall
const html404 = require("./routes/404.js");
server.use(html404);
