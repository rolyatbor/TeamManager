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
        var player = new Player({name: req.body.name, position: req.body.position,
            status: {game1: 'undecided', game2: 'undecided', game3: 'undecided'}
        })
        player.save(req.body, err=>{
            if(err){
                res.json(err);
            } else {
                res.json({message: "Success"})
            }
        })
    },
    delete: (req, res)=>{
        Player.remove({_id: req.params.id}, (err, type)=>{
            if(err){
                res.json(err);
            }
            res.json(type)
        })
    },
    updateOne: (req, res)=>{
        console.log(req.body)
        Player.update({_id: req.params.id}, req.body, (err, player) =>{
            res.json(player)
        })
    }
}