var express = require('express');
var app = express();
//var _allroutes = require('./routes');
const bodyParser = require('body-parser');
const mongoCollections = require("./mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");
const router = express.Router();


app.use(bodyParser.json());
var body = bodyParser.json();
//This is called route handler
app.use(router);

//====================================== ADD METHOD ====================================
router.post("/recipes", async (req, res) => {

    const postCollection = await recipes();
    try {
        const blogPostData = req.body;
        const { title, ingredients, steps } = blogPostData;
        //console.log(title);
        if (typeof title != "string" || title == undefined || title == null || title == "")
            throw "No title provided / Invalid title";
        // check if value is a string, object or number and other things.
        if ((!Array.isArray(ingredients)) || (ingredients == undefined) || (typeof ingredients == "number") || ((typeof ingredients == "object") && (ingredients == {})) || (typeof ingredients == "string") || (ingredients == null)) {
            throw "Invalid ingredient format / Data not provided";
        }
        if ((!Array.isArray(steps)) || (steps == undefined) || (typeof steps == "number") || ((typeof steps == "object") && (steps == {})) || (typeof steps == "string") || (steps == null)) {
            throw "Invalid steps format / Data not provided";
        }
        const newPost = {
            _id: uuid.v4(),
            title: req.body.title,
            ingredients: ingredients,
            steps: req.body.steps
        };
        const newInsertInformation = await postCollection.insertOne(newPost);
        res.json(newPost);
    } catch (e) {
        res.status(500).json({ error: "Invalid url" });
    }
});

//=========================== DISPLAY ALL ELEMENTS WITH ID AND TITLE =======================
router.get("/recipes", async (req, res) => {
    const postCollection = await recipes();
    try {
        //console.log(postCollection);
        const allList = await postCollection.find({}).toArray();

        if (allList == undefined || allList.length == 0) {
            res.json("NO elements in database");
        }
        else {
            var arr = [];
            for (var i = 0; i < allList.length; i++) {
                arr.push({
                    _id: allList[i]._id,
                    title: allList[i].title
                });
            }
            res.json(arr);
        }
    } catch (e) {
        // when something goes wrong with the server!
        res.status(500).send();
    }
});

//==================================== SHOW FULL CONTNET WITH PARTICULAR ID ======================
router.get("/recipes/:id", async (req, res) => {
    const postCollection = await recipes();
    try {
        const allListbyid = await postCollection.findOne({ _id: req.params.id });
        if (allListbyid != null) {
            res.json(allListbyid);
        }
        else {
            res.json("Invalid id / No data present for this id");
        }
    } catch (e) {
        // when something goes wrong with the server!
        res.status(500).send();
    }

});

//==========================  DELETE/REMOVE  ==============================================
router.delete("/recipes/:id", async (req, res) => {
    //console.log(req.params.id);

    const postCollection = await recipes();
    try {
        const deleteinfo = await postCollection.removeOne({ _id: req.params.id });
        if (deleteinfo.deletedCount == 0)
            res.json("NO data present with that id / Not able to delete");
        else
            res.json();
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

//==========================  PUT METHOD  ==============================================
router.put("/recipes/:id", async (req, res) => {
    const postCollection = await recipes();
    // const updatedData = req.body;

    try {
        const find = await postCollection.findOne({ _id: req.params.id });
        if (find != null) {
            const updatedData = req.body;
            const { title, ingredients, steps } = updatedData;
            if (typeof title != "string" || title == undefined || title == null || title == "")
                throw "No title provided / Invalid title";
            // check if value is a string, object or number and other things.
            if ((!Array.isArray(ingredients)) || (ingredients == undefined) || (typeof ingredients == "number") || ((typeof ingredients == "object") && (ingredients == {})) || (typeof ingredients == "string") || (ingredients == null)) {
                throw "Invalid ingredient format / Data not provided";
            }
            if ((!Array.isArray(steps)) || (steps == undefined) || (typeof steps == "number") || ((typeof steps == "object") && (steps == {})) || (typeof steps == "string") || (steps == null)) {
                throw "Invalid steps format / Data not provided";
            }
            const postCollection = await recipes();
            const updatedPostData = {};
            if (updatedData.title) {
                updatedPostData.title = updatedData.title;
            }
            if (updatedData.ingredients) {
                updatedPostData.ingredients = updatedData.ingredients;
            }
            if (updatedData.steps) {
                updatedPostData.steps = updatedData.steps;
            }
            let updatecommand = { $set: updatedPostData };
            const final = await postCollection.updateOne({ _id: req.params.id }, updatecommand);
            //res.json(final);
            const find2 = await postCollection.findOne({ _id: req.params.id });
            res.json(find2);
        }
        else {
            res.json("Invalid id / No data present for this id");
        }


    } catch (e) {
        res.status(404).json({ error: e });
    }
});

//================================ PATCH METHOD ==========================================
router.patch("/recipes/:id", async (req, res) => {
    const postCollection = await recipes();
    const updatedData = req.body;
    //res.json(updatedData);
    try {
        const find = await postCollection.findOne({ _id: req.params.id });
        if (find != null) {
            await postCollection.updateOne({ _id: req.params.id }, { $set: updatedData });
            const find2 = await postCollection.findOne({ _id: req.params.id });
            res.json(find2);
        }
        else {
            res.json("Invalid id / No data present for this id");
        }
    } catch (e) {
        res.status(404).json({ error: e });
    }


});

//==================================== IF INVALID URL ENTERED ===================================
router.get("*", (req, res) => {
    res.json({ error: "Invalid url" });
});
router.post("*", (req, res) => {
    res.json({ error: "Invalid url" });
});
router.patch("*", (req, res) => {
    res.json({ error: "Invalid url" });
});

//Lecture code
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});