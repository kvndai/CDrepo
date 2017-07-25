const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BicycleSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    image: {type: String},
    location: {type: String},
    user_id: {type: String},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {timestamps: true});

var Bicycle = mongoose.model('Bicycle', BicycleSchema);
