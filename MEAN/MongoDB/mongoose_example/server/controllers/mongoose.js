var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');
module.exports = {
   // root route
   index_get: function(req, res) {
      console.log('mongoose list/root page route');
      Mongoose.find({}, function(err, data) {
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
   },
   // create mongoose page route
   create_get: function(req, res) {
      console.log('create page');
      res.render('create');
   },
   // individual page route
   indv_get: function(req, res) {
      console.log('individual mongoose page');
      Mongoose.find({
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
   },
   // edit form page route
   edit_get: function(req, res) {
      console.log('edit form page');
      Mongoose.find({
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
   },
   // create mongoose form post request
   create_post: function(req, res) {
      console.log("POST DATA", req.body);
      var mongoose = new Mongoose(req.body);
      console.log(mongoose);
      mongoose.save(function(err) {
         if (err) {
            console.log('something went wrong posting /create');
         } else {
            console.log('successfully saved');
            res.redirect("/create");
         }
      });
   },
   // updated mongoose post route
   update_post: function(req, res) {
      console.log("POST DATA", req.body);
      var name = req.body.name;
      var age = req.body.age;

      Mongoose.update({
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
   },
   // delete mongoose route
   delete_post: function(req, res) {
      Mongoose.deleteOne({
         _id: req.params.id
      }, function(err) {
         if (err) {
            console.log('something went wrong posting /edit/destroy:id');
         } else {
            console.log('successfully deleted');
            res.redirect("/");
         }
      });
   }
};
