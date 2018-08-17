const express = require('express');
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
path = require('path'),
PORT = 8000,
app = express();        

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(PORT, function(){
    console.log("listening on port", PORT);
})