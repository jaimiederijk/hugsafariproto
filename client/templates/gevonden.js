Template.gevonden.helpers({

});

Template.gevonden.events({
  'change .myFileInput': function(event, template) {
    console.log("change");
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
            var userId = Meteor.userId();
            var imagesURL = {
              "profile.image":  fileObj._id//"/cfs/files/images/" +
            };
            Meteor.users.update(userId, {$set: imagesURL});
            $("button").attr('disabled',false).removeClass("disabled");
            // var teamId = Meteor.user().profile.teamid
            // var number = Teams.findOne(teamId).foundtargets.length
            // var targetTeam = "targetid"//Teams.findOne(teamId).targetteamID  !!!!!!!!!uncomment
            //        // handle success depending what you need to do
            //       //var userId = Meteor.userId();
            // var foundData = {
            // "foundtargets":{  createdBy: Meteor.userId(),
            //                   createdAt: new Date(),
            //                   image:"/cfs/files/images/" + fileObj._id,
            //                   teamid:targetTeam
            //                 }
            // };
          }
        });
     });
   },
   'click .button': function(event, template) {
      var teamId = Meteor.user().profile.teamid
      var number = Teams.findOne(teamId).foundtargets.length
      var targetTeamId = Teams.findOne(teamId).targetteamID

      var targetTeam = Teams.findOne(targetTeamId)
             // handle success depending what you need to do
            //var userId = Meteor.userId();
      
      // update this team wit target info
      var foundData = {
      "foundtargets":{  createdBy: Meteor.userId(),
                        createdAt: new Date(),
                        image:"/cfs/files/images/" + Meteor.user().profile.image,
                        teamid:targetTeamId
                      }
      };
      Teams.update({ _id: teamId },{ $push: foundData})
      //this team score
      Teams.update({_id:teamId},{$inc:{Score:1}})

      // set new target for this team 
      Teams.update({ _id: teamId },{ $set:{"targetteamID":targetTeam.targetteamID}})
      
      // remove target Team
      Teams.update({ _id: targetTeamId },{ $set:{"targetteamID":""}})
      ///////// remove team code
      //Teams.remove(targetTeamId)

      //clear images profile
      var userId = Meteor.userId();
      var imagesURL = {
              "profile.image":  ""
            };
      Meteor.users.update(userId, {$set: imagesURL});
      Router.go('bevestigfound');
   }
});