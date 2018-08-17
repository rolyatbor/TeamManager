const mongoose = require('mongoose'),
Player = mongoose.model('Player')
path = require('path');

module.exports = {
    showAll: (req, res)=>{
        Player.find({}, (err, players)=>{
            if(err){
                res.json({err})
            } else {
                res.json({players})
            }
        })
    },
    create: (req, res)=>{
        Player.create(req.body, err=>{
            if(err){
                res.json(err);
            } else {
                res.json({message: "Success"})
            }
        })
    }
}