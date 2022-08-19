// root folder path
const path = require("path");
const express = require("express");

html404 = async (req, res) => {
  //await res.sendFile(path.join(__dirname, "../views/404.html"));
  await res.status(404).render("404", { pgTitle: "404 Page Not Found!" });
};

module.exports = html404;
