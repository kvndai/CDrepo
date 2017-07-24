var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var fs = require('fs');
var path = require('path')

var promise = mongoose.connect('mongodb://localhost/bicycles', {
  useMongoClient: true
});

promise.then(()=> {
  console.log("SUCCESSFULLY CONNECTED TO DATABASE")
})

// This is a great little function that imports all of our
// models from the model directory, so if you change
// the folder structure you might have to update models_path
const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});
