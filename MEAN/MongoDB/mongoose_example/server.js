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
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// MONGOOSE
mongoose.connect('mongodb://localhost/mongoose_db');
mongoose.Promise = global.Promise;
var MongooseSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 1
   },
   age: {
      type: Number,
      min: 0,
      max: 100
   }
}, {
   timestamps: true
});
mongoose.model('Mongooses', MongooseSchema);
var Mongooses = mongoose.model('Mongooses');

// ROUTING
// root route
app.get('/', function(req, res) {
   console.log('mongoose list/root page route');
   Mongooses.find({}, function(err, data) {
      if (err) {
         console.log('something went wrong root page route');
      } else {
         console.log('succssfully found');
         mongoose = data;
         console.log(mongoose);
         res.render('index', {
            mongoose: mongoose
         });
      }
   });
});

// create mongoose page route
app.get('/create', function(req, res) {
   console.log('create page');
   res.render('create');
});

// individual page route
app.get('/:id', function(req, res) {
   console.log('individual mongoose page');
   Mongooses.find({
      _id: req.params.id
   }, function(err, data) {
      if (err) {
         console.log('something went wrong /:id');
      } else {
         console.log('succssfully found');
         console.log(data);
         res.render('mongoose', {
            mongoose: data[0]
         });
      }
   });
});

// edit form page route
app.get('/edit/:id', function(req, res) {
   console.log('edit form page');
   Mongooses.find({
      _id: req.params.id
   }, function(err, data) {
      if (err) {
         console.log('something went wrong /edit/:id');
      } else {
         console.log('succssfully found');
         console.log(data);
         res.render('edit', {
            mongoose: data[0]
         });
      }
   });
});

// create mongoose form post request
app.post('/create', function(req, res) {
   console.log("POST DATA", req.body);
   var mongoose = new Mongooses(req.body);
   console.log(mongoose);
   mongoose.save(function(err) {
      if (err) {
         console.log('something went wrong posting /create');
      } else {
         console.log('successfully saved');
         res.redirect("/create");
      }
   });
});
// updated mongoose post route
app.post('/edit/:id', function(req, res) {
   console.log("POST DATA", req.body);
   var name = req.body.name;
   var age = req.body.age;

   Mongooses.update({
      _id: req.params.id
   }, {
      name: name,
      age: age
   }, function(err) {
      if (err) {
         console.log();
      } else {
         console.log('successfully updated');
         res.redirect("/");
      }
   });
});

// devared mongoose route
app.post('/edit/delete/:id', function(req, res) {
   Mongooses.deleteOne({
      _id: req.params.id
   }, function(err) {
      if (err) {
         console.log('something went wrong posting /edit/destroy:id');
      } else {
         console.log('successfully deleted');
         res.redirect("/");
      }
   });
});
// PORT
app.listen(8000, function() {
   console.log("listening on port 8000");
});
