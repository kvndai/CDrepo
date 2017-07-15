var mongoose = require('../controllers/mongoose.js');
module.exports = function(app) {
   // root route
   app.get('/', function(req, res) {
      mongoose.index_get(req, res);
   });
   // create mongoose page route
   app.get('/create', function(req, res) {
      mongoose.create_get(req, res);
   });
   // individual page route
   app.get('/:id', function(req, res) {
      mongoose.indv_get(req, res);
   });
   // edit form page route
   app.get('/edit/:id', function(req, res) {
      mongoose.edit_get(req, res);
   });
   // create mongoose form post request
   app.post('/create', function(req, res) {
      mongoose.create_post(req, res);
   });
   // updated mongoose post route
   app.post('/edit/:id', function(req, res) {
      mongoose.update_post(req, res);
   });
   // devared mongoose route
   app.post('/edit/delete/:id', function(req, res) {
      mongoose.delete_post(req, res);
   });
};
