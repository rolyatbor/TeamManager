const mongoose = require('mongoose'),
Player = mongoose.model('Player'),
players = require('../controllers/players.js')

module.exports = app =>{
    app.get('/players', players.showAll);
    app.post('/players', players.create);
}