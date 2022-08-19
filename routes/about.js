// root folder path
const path = require("path");
const express = require("express");

htmlAbout = async (req, res) => {
  //await res.sendFile(path.join(__dirname, "../views/about.html"));
  await res.render("about", { pgTitle: "About our blog" });
};

module.exports = htmlAbout;
