const postRoutes = require("./results");
const path = require("path");

const constructorMethod = app => {
  
  app.use("/results", postRoutes);
  app.get("/", (req, res) => {
    let titleData = "The Best Palindrome Checker in the World!"
    res.render("./index", {title: titleData});
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;