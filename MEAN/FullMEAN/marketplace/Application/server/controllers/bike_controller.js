const mongoose = require('mongoose');
const Bike = mongoose.model('Bicycle');
const User = mongoose.model('User');

module.exports = {
  all: (req, res, next) => {
        Bike.find({})
        .then((bikes) => { res.json(bikes); })
        .catch((err) => { res.status(450).json(err); });
    },
}
