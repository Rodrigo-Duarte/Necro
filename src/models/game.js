var mongoose = require('mongoose');
var Schema = mongoos.Schema;
var ObjectId = require('mongoose').Types.ObjectId;

var gameSchema = new Schema({
  players: [ {_id: false, name: {type: String, required: true}} ],
  map: String,
  events: [{
    _id: false,
    character: {type: ObjectId, ref: 'CharacterSchema'},
    type: String,
    time: {type: Number, required: true},
    xp: Number,
    location: Number
  }]  
});

var characterSchema = new Schema({
  name: String,
  level: Number,
  //TODO: Status
  abilities: [{
    _id: false,
    name: String,
    method: String
  }]
});

/*gameSchema.methods.addMove = function(move, callback) {
  var self = this;
  console.log('addMove' + this);
  this.moves.push(move);
  this.update({$push:{moves:move}}, function(err, ret){
    if (err) throw err;
    callback(self.moves);
  });
};
*/

exports.CharacterSchema = mongoose.model('CharacterSchema', characterSchema);
exports.GameSchema = mongoose.model('GameSchema', gameSchema);