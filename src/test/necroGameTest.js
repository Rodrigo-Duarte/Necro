var assert = require("assert");
var sinon = require("sinon");
var NecroGame = require("../models/necrogame");

describe('Game', function(){
  describe('#newGame', function(){
    it('should spawn 2 heroes on startlocation for 2 players on a new game', function(){
      var map = {startLocations: function(){return [20,50]}};
      var game = new NecroGame(['pA', 'pB'],map);
      assert.equal(2, game.events.length);
      var event = game.events[0];
      assert.equal('HeroSpawn', event.type);
      assert.equal(20, event.location);
      event = game.events[1];
      assert.equal('HeroSpawn', event.type);
      assert.equal(50, event.location);
    });
  });
});