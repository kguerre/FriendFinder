//LOAD DATA
//=================================================================
var allFriends = require("../data/friends.js");

//ROUTING
//=================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });

  app.post("/api/friends", function(req, res){
    var friendData = req.body;
    //console.log(friendData);
    var friendName = friendData.name;
    //console.log(friendName);
    var friendImage = friendData.photo;
    //console.log(friendImage);
    var friendScore = friendData.scores;
    //console.log(friendScore);
    
    // allFriends.push(friendData);
		// res.json(allFriends);

		var friendMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};

    var totalDifference = 0;
    var diffArray = [];
  

		for(var i = 0; i < allFriends.length; i++){
			console.log(allFriends[i].name);

			for (var j = 0; j < friendScore.length; j++) {
            totalDifference += Math.abs(parseInt(friendScore[j]) - parseInt(allFriends[i].scores[j]));
            console.log("total difference is " + totalDifference);
          
              if (totalDifference < friendMatch.matchDifference){
                // Reset the bestMatch to be the new friend. 
                friendMatch.name = allFriends[i].name;
                friendMatch.photo = allFriends[i].photo;
                friendMatch.matchDifference = totalDifference;
              
                console.log('Closest match found = ' + totalDifference);
                console.log('Friend name = ' + allFriends[i].name);
                console.log('Friend image = ' + allFriends[i].photo);
              };
          }
      }
      
      allFriends.push(friendData);
		  res.json(friendMatch);
	});
};
