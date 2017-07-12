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
mongoose.connect('mongodb://localhost/quote_db');
var QuoteSchema = new mongoose.Schema({
  name: {
    type: String
  },
  quote: {
    type: String
  }
}, {
  timestamps: true
});
var x = console.console.log();
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;

// ROUTING
// root route
app.get('/', function(req, res) {
  res.render("index");
});
// quote form post request
app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
  var quote = new Quote({
    name: req.body.name,
    quote: req.body.quote
  });
  quote.save(function(err) {
    if (err) {
      console.log('something went wrong');
    } else {
      console.log('successfully saved');
      res.redirect("/quotes");
    }
  });
});
// quote page route
app.get('/quotes', function(req, res) {
  console.log('quote page route');
  Quote.find({}, function(err, data) {
    if (err) {
      console.log('something went wrong quote page route');
    } else {
      console.log('succssfully found');
      quotes = data;
      console.log(quotes);
      res.render('quotes', {
        quotes: quotes
      });
    }
  });
});
// PORT
app.listen(8000, function() {
  console.log("listening on port 8000");
});
