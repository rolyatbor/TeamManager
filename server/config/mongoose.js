const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/players_db', { useNewUrlParser: true });

require('../models/player.js')