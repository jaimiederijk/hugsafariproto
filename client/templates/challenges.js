Template.challenges.helpers({
	challenges: function () {
	  return Challenges.find()
	},
	challengesDone : function () {
		var teamId = Meteor.user().profile.teamid;
 		var team = Teams.findOne(teamId)

 		var checkChallenges = function (id) {
 			for (var i = 0; i < team.challenges.length; i++) {
 				if (team.challenges[i].challengeid===id) {
 					return i
 				} 
 			};
 		}
		var index = checkChallenges(this._id);
		if (index>-1) {
			return team.challenges[index].image
		} else {
			return
		}
	}
});