const allAbout = require("./about");
const allEducation = require("./education");
const allstory = require("./story");

//referred from lecture code
const constructorMethod = app => {
  app.use("/about", allAbout);
  app.use("/education", allEducation);
  app.use("/story", allstory);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Invalid url/Server Not found" });
  });
};

module.exports = constructorMethod;