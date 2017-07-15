// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
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
// register the schema as a model
mongoose.model('User', UserSchema);
