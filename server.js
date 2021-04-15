var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(express.static('resources'));
global.__basedir = __dirname;
 
require('./app/routes/student.route.js')(app);

// Create a Server
var server = app.listen(8081, function () {
  var port = server.address().port
  console.log("Puerto: %s ",port) 
})