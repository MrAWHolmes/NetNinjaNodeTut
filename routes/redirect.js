// root folder path
const path = require("path");
const express = require("express");

redirect = async (req, res) => {
  await res.redirect("/about");
};

module.exports = redirect;
