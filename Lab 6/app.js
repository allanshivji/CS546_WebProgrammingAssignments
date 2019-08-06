var express = require('express');
var app = express();
var _allroutes = require('./routes');

//This is called route handler
app.get('/', function(req, res){
   res.send("Welcome to Lab 6.");
});

_allroutes(app);

 //Lecture code
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});