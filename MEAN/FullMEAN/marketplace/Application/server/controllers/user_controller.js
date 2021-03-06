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
            console.log(req.session.name, req.session.user_id, "session set");
            res.json(true); })
        .catch((err) => { res.status(409).json(err) });
        console.log(u, "saved into db");
    },
    login: (req, res, next) => {
        User.findOne({email: req.body.email.toLowerCase()})
        .then((user) => {
            console.log(user, "user found in user_controller")
            if (!user) {
                err = {error: "No user registered with that email"};
                res.status(401).json(err);
            }
            else if (!bcrypt.compareSync(req.body.password, user.password)) {
                res.status(402).json({error: "Password is incorrect"});
            }
            else {
                req.session.name = user.first_name;
                req.session.user_id = user._id;
                console.log(req.session.name, req.session.user_id, "sesson set");
                res.json(true);
            }
        })
        .catch((err) => { res.status(409).json(err); });
    },
    logout: (req, res, next) => {
        req.session.destroy();
        res.json(true);
    },
    getInfo: (req, res, next) => {
        User.findById(req.body.id)
        .then((user) => {
            let contactInfo = {};
            contactInfo["name"] = user.first_name;
            contactInfo["email"] = user.email;
            res.json(contactInfo);
        })
        .catch((err) => { res.status(416).json(err); });
    },
    current: (req, res, next) => {
        console.log(req.session.name, req.session.user_id);
        if (req.session.user_id) {
            let curr = {};
            curr.id = req.session.user_id;
            curr.name = req.session.name;
            console.log(curr, "Got user data from session. In user_controller");
            res.json(curr);
        }
        else {
            res.status(400).json({'error': 'Must be logged in to access this page'});
        }
    }
}
