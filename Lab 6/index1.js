var express = require('express');
var app = express();

var person = {
    id: 123,
    Fname: "Allan",
    Lname: "Shivji",
    age: 22,
    SHows: ["kjhsgfb", "sgfygs", "hwfhdsv"]
}

//This is called route handler
app.get('/', function(req, res){
   //res.send("Hello world!.");
   res.json(person);
});

//This function is used when an incorrect url is given
//Checked this funtion on Tutorials point
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(3000, function(){
    console.log("Server started on port 3000...");
});