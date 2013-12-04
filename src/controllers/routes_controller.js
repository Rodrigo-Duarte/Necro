var mongoose = require('mongoose');
var app = require('../setup').app;
var ObjectId = mongoose.Types.ObjectId;

app.get('/favicon.ico', function(req,res){});

app.get('/', function(req, res) {
  res.render('index');
});

/*
app.get('/newGame', function(req,res) {
  new Game({p1: 'p1', p2: 'p2'}).save(function(err, game) {
    if (err) throw err;
    res.redirect('/' + game._id);
  });
});

app.get('/:gameId', function(req, res) {
  Game.findOne({_id: new ObjectId(req.params.gameId)}, function(err, game){
  	if(err) throw err;
  	console.log(game);
  	if(!game)
  		res.render('index', {err: 'Game not found ' + req.params.gameId});
  	else
  		res.render('game', {gameId: game._id, p1: game.p1, p2: game.p2});
  });
});*/