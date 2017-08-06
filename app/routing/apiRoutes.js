//LOAD DATA
//=================================================================
var allFriends = require("../data/friends.js");

//ROUTING
//=================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });

  app.post("/api/friends", function(req, res) {
      allFriends.push(req.body);
      res.json(allFriends);

      var allScores = [];
      for (var i = 0; i < allFriends.length; i++) {
      allScores.push(req.body[i].scores);
      console.log("All Scores: " + allScores);
      }
      
    //compatibility logic goes here
  });

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     allFriends = [];

//     console.log(allFriends);
//   });
 };
