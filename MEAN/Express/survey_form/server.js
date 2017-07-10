// REQUIRED
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
// MIDDLEWARE
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
var server  = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

// SOCKETS
var io  =  require( 'socket.io'). listen(server);
io.sockets. on( 'connection', function (socket) {
    console. log( "Sockets Active");
    console. log(socket.id);
    // all the socket code goes in here!
    socket. on( "posting_form", function (form_data){
        let form_results = JSON.stringify(form_data);
        let number = Math.floor(Math.random() * 1000) + 1;
        socket.emit('display', form_results);
        socket.emit('lucky', number);
    })
})