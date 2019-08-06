const userRoutes = require("./users");
const path = require("path");
const cookieParser = require("cookie-parser");


const constructorMethod = app => {

    app.use(cookieParser());

    app.use("/", userRoutes);
    
    app.use("/private", userRoutes, cookieParser);

    app.use("/logout", userRoutes);

    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethod;