Template.leaderboard.helpers({
  teams: function(){
    return Teams.find()
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