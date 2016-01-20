Meteor.publish("images", function(){ return Images.find(); });
Meteor.publish("hints", function(){ return Hints.find(); });
Meteor.publish("teams", function(){ return Teams.find(); });
Meteor.publish("challenges", function(){ return Challenges.find(); });
Meteor.publish('userList', function (){
  return Meteor.users.find({});
});


