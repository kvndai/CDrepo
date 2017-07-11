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
 res.render("index");
})

// PORT
var server  = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

// SOCKETS
var messages = ['<p> Chatroom Started </p>'];
var users = {};
var io  =  require('socket.io'). listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Sockets Active");
    console.log(socket.id);
    // all the socket code goes in here!
    
    socket.on('got_new_user', function(data){
        var user = data.name;
        console.log('new user name: '+ user)
        id = socket.id;
        users[id] = user;
        socket.emit('added_user', {messages: messages});
        socket.broadcast.emit('update_chat', {name: user});
    })
    
    socket.on("post_message",function(data){
        console.log('message: '+ data);
        messages.push(`<p> ${data.message} </p>`);
        var chat = data.message;
        io.emit("update_message", {messages: chat})
    })

    socket.on("disconnect", function(){
        console.log('dc user id: '+ socket.id);
        this_name = users[socket.id];
        console.log('dc user name: '+ this_name);
        var dis = `${this_name} has disconnected.`;
        io.emit("update_message", {messages: dis});
    });
})