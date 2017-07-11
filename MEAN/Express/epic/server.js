// REQUIRED
var express = require("express");
var path = require("path");
var app = express();
// MIDDLEWARE
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ROUTING
app.get('/', function(req, res) {
 res.render("index",{count: count});
})

// PORT
var server  = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

// // SOCKETS
// var count = 0;
// var io  =  require('socket.io'). listen(server);
// io.sockets.on('connection', function (socket) {
//     console.log("Sockets Active");
//     console.log(socket.id);
//     // all the socket code goes in here!
//     socket.on("user_click", function(){
//         count ++;
//         io.sockets.emit('number', count);
//     })
//     socket.on("user_reset_click", function(){
//         count = 0;
//         io.sockets.emit('reset', count);
//     })
// })