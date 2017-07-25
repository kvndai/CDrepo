const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
  register: (req, res, next) => {
    let u = new User(req.body);
    u.save()
    .then((user) => {
      req.session.name = user.first_name;
      req.session.user_id = user._id;
      res.json(true);
      console.log("session set");
    })
    .catch((err) => {
      console.log(err);
      res.status(409).json(err);
    });
    console.log(u, "saved into db")
  },

  login: (req, res, next) => {
        User.findOne({email: req.body.email.toLowerCase()})
        .then((user) => {
            console.log("user found in user_controller")
            if (!user) {
                err = {error: "No user registered with that email"};
                res.status(401).json(err);
            }
            else if (!bcrypt.compareSync(req.body.password, user.password)) {
                err = {error: "Password is incorrect"}
                res.status(402).json(err);
            }
            else {
                req.session.name = user.first_name;
                req.session.user_id = user._id;
                res.json(true);
                console.log("user authenticated, session set in user_controller");
            }
        })
        .catch((err) => { res.status(409).json(err); });

    },

  logout: (req, res, next) => {
    req.session.destroy();
    console.log("User Logged out, Session destroyed");
    res.json(true);
  }

}
