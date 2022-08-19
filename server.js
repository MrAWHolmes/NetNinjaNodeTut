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

const server = http.createServer((req, res) => {
  console.log("Request received...");
  console.log(req.url, req.method);

  //set response content header
  res.setHeader("content-type", "text/html");

  //write output to Document page
  //   res.write("<html><body><h1>home page</h1>");
  //   res.write("Hey!<br>");
  //   res.write("</body></html>");
  //   res.end();

  // native node router - sort of
  let path = req.url;

  switch (path) {
    case "/":
      path = "./views/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = "./views/about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.writeHead(301, { Location: "/about" });
      res.end();
      break;
    default:
      path = "./views/404.html";
      res.statusCode = 404;
  }

  //send html
  fs.promises
    .readFile(path)
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((err) => console.log(err));
});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
  console.log(`http server running on port ${PORT}`);
});

// basic routing next ..
// https://youtu.be/DQD00NAUPNk?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=779
//  http.get("/", (res) => {
//      res.
//  });
