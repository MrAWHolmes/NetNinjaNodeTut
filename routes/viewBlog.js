// root folder path
const path = require("path");
const express = require("express");

htmlViewBlog = async (req, res, result) => {
  //await res.sendFile(path.join(__dirname, "../views/about.html"));
  await res.render("viewBlog", {
    pgTitle: "Viewing A selected Blog",
    blog : result,
      });
};

module.exports = htmlViewBlog;
