// root folder path
const path = require("path");
const express = require("express");

htmlIndex = async (req, res) => {
  //await res.sendFile(path.join(__dirname, "../views/index.html"));

  let dummyBlogs = [
    { title: "title1", snippet: "snip1", body: "body One" },
    { title: "title2", snippet: "snip2", body: "body Two" },
    { title: "title3", snippet: "snip3", body: "body Three" },
  ];

  let emptyBlog = [];

  await res.render("index", {
    pgTitle: "Our Blog Home Page",
    blogs: dummyBlogs,
  }); //ejs view engine call
};

module.exports = htmlIndex;
