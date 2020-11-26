var express = require("express");
var path = require("path");



var app = express();
var port = 8080;



app.get("/api/notes", function (req, res,) {
    res.sendFile(path.join(__dirname, ""))

})




app.delete("api/notes/" + id,, function (req, res,) {
    res.sendFile(path.join())

})





app.get("*", function (req, res,) {
    res.sendFile(path.join("/public", "index.html"))

})
app.get("/api/notes", function (req, res,) {

})
app.get("/api/notes", function (req, res,) {

})