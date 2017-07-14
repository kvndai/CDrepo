var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// MIDDLEWARE
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// MONGOOSE
mongoose.connect('mongodb://localhost/message_db');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var messageSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 1
   },
   message_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000
   },
   comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
   }]
}, {
   timestamps: true
});

var commentSchema = new mongoose.Schema({
   _post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
   },
   name: {
      type: String,
      required: true,
      minlength: 1
   },
   comment_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000
   }

});
mongoose.model('Post', messageSchema);
mongoose.model('Comment', commentSchema);
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// ROUTING
app.get('/', function(req, res){
   console.log('root route');
   Post.find({}).populate('comments')
   .exec(function(err, data){
      var post = data;
      if (err){
         console.log("something went wrong finding post");
      } else {
         console.log('successfully found', post);
         res.render('index', {messages: post});
      }
   });
});

app.post('/new', function(req, res){
   console.log('POST DATA', req.body);
   var post = new Post(req.body);
   console.log('1:', post);
   post.save(function(err){
      if (err){
         console.log('something went wrong posting post');
         res.redirect('/');
      } else {
         console.log('successfully posted');
         res.redirect('/');
      }
   });
});

app.post('/new/comment/:id', function(req, res){
   // console.log('req-body: ', req.body);
   Post.findOne({_id: req.params.id}, function(err, post){
      // console.log('post: ', post);
      var comment = new Comment(req.body);
      // console.log('comment: ', comment);
      comment._post = req.params.id;
      post.comments.push(comment);
      comment.save(function(err){
         post.save(function(err){
            if(err) {
               console.log('err');
            } else {
               console.log('successfully posted comment');
               res.redirect('/');
            }
         });
      });
   });
});

app.post('/delete/:id', function(req, res){
   Post.deleteOne({
      _id: req.params.id
   }, function(err){
      if(err){
         console.log('err');
      } else {
         res.redirect('/');
      }
   });
});
// PORT
app.listen(8000, function() {
   console.log("listening on port 8000");
});
