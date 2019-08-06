const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const usersdata = require("./data")
router.get("/", async (req, res) => {
    if (req.cookies.AuthCookie) {
        res.redirect("/private");
    }
    else {
        res.render("index");
    }
});
router.post("/login", async (req, res) => {
    let formData = await req.body;
    const uname = formData["username"];
    const pass = formData["password"];

    let a = false;
    if (uname == usersdata[0].username) {
        a = await bcrypt.compare(pass, usersdata[0].hashedPassword);
        if (a) {
            res.cookie('AuthCookie', uname);
            res.redirect("/private");
        }
        else {
            res.render("index", { error: "Invalid username or password!" });
        }
    }
    else if (uname == usersdata[1].username) {
        a = await bcrypt.compare(pass, usersdata[1].hashedPassword);
        if (a) {
            res.cookie('AuthCookie', uname);
            res.redirect("/private");
        }
        else {
            res.render("index", { error: "Invalid username or password!" });
        }
    }
    else if (uname == usersdata[2].username) {
        a = await bcrypt.compare(pass, usersdata[2].hashedPassword);
        if (a) {
            res.cookie('AuthCookie', uname);
            res.redirect("/private");
        }
        else {
            res.render("index", { error: "Invalid username or password!" });
        }
    }
    else {
        res.render("index", { error: "Invalid username or password!" });
    }

});

router.get("/private", async (req, res) => {

    if (req.cookies.AuthCookie != undefined) {
        if (req.cookies.AuthCookie == "masterdetective123") {
            res.render("info", {
                username: usersdata[0].username,
                firstName: usersdata[0].firstName,
                lastName: usersdata[0].lastName,
                profession: usersdata[0].profession,
                bio: usersdata[0].bio
            });
        }
        if (req.cookies.AuthCookie == "lemon") {
            res.render("info", {
                username: usersdata[1].username,
                firstName: usersdata[1].firstName,
                lastName: usersdata[1].lastName,
                profession: usersdata[1].profession,
                bio: usersdata[1].bio
            });
        }
        if (req.cookies.AuthCookie == "theboywholived") {
            res.render("info", {
                username: usersdata[2].username,
                firstName: usersdata[2].firstName,
                lastName: usersdata[2].lastName,
                profession: usersdata[2].profession,
                bio: usersdata[2].bio
            });
        }
    }
    else {
        res.status(403).render("error");
    }

});

router.get("/logout", async (req, res) => {
    res.clearCookie('AuthCookie');
    res.render("out");
});

module.exports = router;
