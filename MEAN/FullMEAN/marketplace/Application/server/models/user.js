const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String}
}, {timestamps: true});

UserSchema.pre('save', function(done) {
    this.email = this.email.toLowerCase();
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    done();
});

var User = mongoose.model('User', UserSchema);
