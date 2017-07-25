const mongoose = require('mongoose');
const Bike = mongoose.model('Bicycle');
const User = mongoose.model('User');

module.exports = {
  all: (req, res, next) => {

    Bike.find({})
      .then((bikes) => {
        console.log("DB data of allBikes returning to client. in bike_controller");
        res.json(bikes);
      })
      .catch((err) => {
        res.status(450).json(err);
      });
  },

  add: (req, res, next) => {
    let b = new Bike(req.body);
    b.user_id = req.session.user_id;
    console.log(b, "Db data of newBike added. in bike_controller");
    b.save()
      .then(() => {
        res.json(true);
      })
      .catch((err) => {
        res.status(501).json(err);
      });
  },

  allUserBikes: (req, res, next) => {
    Bike.find({
        user_id: req.session.user_id
      })
      .then((allBikes) => {
        console.log("Db data of allUserBikes returning to client. in bike_controller");
        res.json(allBikes);
      })
      .catch((err) => {
        res.status(502).json(err);
      });
  },

  edit: (req, res, next) => {
        let b = new Bike(req.body);
        Bike.findByIdAndUpdate(b._id, b)
        .then(() => { res.json(true); })
        .catch((err) => { res.status(503).json(err); })
  },
  destroy: (req, res, next) => {
      let b = new Bike(req.body);
      Bike.remove(b)
      .then(() => { res.json(true); })
      .catch((err) => { res.status(504).json(err); })
  },

}
