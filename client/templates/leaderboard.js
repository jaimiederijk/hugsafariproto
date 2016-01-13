Template.leaderboard.helpers({
  points:function(){
    //debugger;
    var teamId = Meteor.user().profile.teamid
    var teamChallenges=Teams.findOne(teamId).challenges;
    var totalPoints=0;
    for (var i = 0; i < teamChallenges.length; i++) { 
      totalPoints += teamChallenges[i].punten
    };
    return totalPoints
  }
});

Template.leaderboard.events({

});