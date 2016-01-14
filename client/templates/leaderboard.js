Template.leaderboard.helpers({
  teams: function(){
    return Teams.find({},{sort:{Score:-1}})
  },
  challengeTeams: function(){
    return Teams.find({},{sort:{challengescore:-1}})
  },
  findCount: function() {
    return this.foundtargets.length
  },
  points:function(){
    //debugger;

    //var teamId = Meteor.user().profile.teamid
    var teamChallenges=this.challenges;
    var totalPoints=0;
    for (var i = 0; i < teamChallenges.length; i++) { 
      totalPoints += teamChallenges[i].punten
    };
    return totalPoints
  },
  add:function(index) {
    var i=index+1
    return i
  }
});

Template.leaderboard.events({
  'click #challengesleaderbord' :function (event ,template) {
    $('.challengelist').toggleClass("displayNone");
    $('.gevondenlist').toggleClass("displayNone");
    $('#challengesleaderbord').attr('disabled',true).addClass("disabled");
    $('#gevondenleaderbord').attr('disabled',false).removeClass("disabled");
  },
  'click #gevondenleaderbord' :function (event ,template) {
    $('.gevondenlist').toggleClass("displayNone");
    $('.challengelist').toggleClass("displayNone");
    
    $('#challengesleaderbord').attr('disabled',false).removeClass("disabled");
    $('#gevondenleaderbord').attr('disabled',true).addClass("disabled");
  }
});