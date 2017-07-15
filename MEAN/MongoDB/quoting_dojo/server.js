// REQUIRED
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// MIDDLEWARE
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// MONGOOSE
require('./server/config/mongoose.js');

// ROUTING
var routes = require('./server/config/routes.js')(app);

// PORT
app.listen(8000, function() {
   console.log("listening on port 8000");
});
