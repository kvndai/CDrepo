var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
// CONFIGURATION
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(session({secret: 'wombatseatbottlessmartly52you!'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    if (req.session.count >= 0){
        req.session.count ++;
    }
    else{
        req.session.count = 0;
    }
 res.render("index", {count: req.session.count});
})

// post route for adding a user
app.post('/count', function(req, res) {
    
 console.log("POST DATA", req.body);
 res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});