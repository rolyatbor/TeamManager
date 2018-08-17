const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please Enter a Name"]},
    position: {type: String, required: [true, "Please Enter a Position"]},
    game1: {type: String, default: "undecided"},
    game2: {type: String, default: "undecided"},
    game3: {type: String, default: "undecided"},
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);