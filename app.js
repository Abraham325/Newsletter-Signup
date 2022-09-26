const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { response } = require("express");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));

 app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
 })
 
 app.post ("/", function (req, res) {

    var firstName = req.body.fName;
    var lastname = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastname, email);

    
 })

 app.post("/failure", function(req, res){
   res.redirect("/");
 })


app.listen(3000, function(req, res){
    console.log("server is running on port 3000");
});