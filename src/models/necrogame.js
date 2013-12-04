module.exports = function(players, map){
	var events = [];
  var private = {
    initializeMap: function(){
      for(i in players){
        var event = {};
        event.type = 'HeroSpawn';
        event.location = map.startLocations()[i];
        events.push(event);
      }
    }
  };
  private.initializeMap();

	return {events: events};
}