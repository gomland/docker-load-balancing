var express = require('express');
var app = express();
var port = 1000;
var uniqueID = "PID@" + new Date()*1;
 
var server = app.listen(port, function () {
    console.log("Sever Start " + port);
});
 
app.get('/', function (req, res) {	
    res.send("Web Page : " + uniqueID);
});