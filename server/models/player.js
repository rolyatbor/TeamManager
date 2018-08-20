const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please Enter a Name"]},
    position: {type: String, required: [true, "Please Enter a Position"]},
    status: {type: Object}
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);