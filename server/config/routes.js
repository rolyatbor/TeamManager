const mongoose = require('mongoose'),
Player = mongoose.model('Player'),
players = require('../controllers/players.js')

module.exports = app =>{
    app.get('/playersAll', players.showAll);
    app.post('/playersAdd', players.create);
    app.delete('/players/:id', players.delete);
    app.put('/player/:id', players.updateOne);
}