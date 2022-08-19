// root folder path
const path = require("path");
const express = require("express");

htmlCreateBlog = async (req, res) => {
  //await res.sendFile(path.join(__dirname, "../views/about.html"));
  await res.render("createBlog", {
    pgTitle: "Create A new Blog",
    atitle: "Title here",
    asnippet: "snippet here...",
    abody: "lorum ipsum...",
  });
};

module.exports = htmlCreateBlog;
