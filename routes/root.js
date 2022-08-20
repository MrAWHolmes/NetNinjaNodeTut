// root folder path
const path = require("path");
const express = require("express");
const Blog = require("../models/blogModel.js");

htmlIndex = async (req, res) => {
  //await res.sendFile(path.join(__dirname, "../views/index.html"));

  let dummyBlogs = [
    { title: "title1", snippet: "snip1", body: "body One" },
    { title: "title2", snippet: "snip2", body: "body Two" },
    { title: "title3", snippet: "snip3", body: "body Three" },
  ];

  let emptyBlog = [];

  // Async call to Blog.find()
  let blogArr = await Blog.find();

  console.log(blogArr);

  await res.render("index", {
    pgTitle: "Our Blog Home Page",
    blogs: blogArr,
  }); //ejs view engine call
};

module.exports = htmlIndex;
