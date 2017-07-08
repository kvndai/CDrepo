// REQUIRED
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
// CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// ROUTING
app.get('/', function(req, res) {

 res.render("index");
})

app.post('/process', function(req, res) {

 console.log("POST DATA", req.body);
 res.render("result", req.body);
})

// PORT
app.listen(8000, function() {
 console.log("listening on port 8000");
});