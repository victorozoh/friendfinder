// Using strict to make sure our code is good.

var friendData = require('../data/friends.js');

module.exports = function(app){

	// get Requests

	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	// post Requests

	app.post('/api/friends', function(req, res){
		var minDifference = 1000;
		var matchedFriend;
		friendData.forEach(function(friend){
			var difference = 0;
      //use euclidean distance to calculate friend who is the closest match
			for(var i=0; i < friend.scores.length; i++){
				difference += Math.pow((friend.scores[i] - req.body.scores[i]),2);
			}
      difference = Math.sqrt(difference);
      if(difference < minDifference){
				minDifference = difference;
				matchedFriend = friend;
			}
		});

		res.json(matchedFriend);
		friendData.push(req.body);

	});

};
