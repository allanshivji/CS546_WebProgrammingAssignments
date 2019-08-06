const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
    // console.log(req.body);
})
router.post("/", async (req, res) => {
    let formData = await req.body;
    if (formData["text-to-test"] == "") {
        res.status(400).render("new2", {title: "ERROR", post: 400 });
    }
    else {
        var out = formData["text-to-test"];
        var string = out.replace(/[\.,-\/#!+$%\^&\*;:@{}=\-_?"'’`~()]/g, "").replace(/\s/g, "").toLowerCase();
        var reverse = string.split('').reverse().join('');
        if (string == reverse && string != "" && reverse != "") {
            // a = "It is pallindrome";
            formData['a'] = true;
        } else {
            // a = "It is not pallindrome";
            formData['a'] = false;
        }
        res.render("new", { title: "The Palindrome Results!", post: formData });
    }
});

module.exports = router;
