// the mongoose model connected to our blogSchema:

const mongoose = require("mongoose");
const blogSchema = require("./blogSchema.js");

const Blog = mongoose.model(
  "Blog", //mongoose pluralises this
  blogSchema
);

module.exports = Blog;
