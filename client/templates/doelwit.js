Template.doelwit.helpers({
  teamname:function(){
    var teamId = Meteor.user().profile.teamid;
    return Teams.findOne(teamId).teamName
  },
  images:function(){
    var teamId = Meteor.user().profile.teamid;
    var targetID = Teams.findOne(teamId).targetteamID;
    var targetImg = Teams.findOne(targetID).imagesURL;
    return Images.findOne(targetImg)
  }
});