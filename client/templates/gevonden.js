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
      var targetTeam = Teams.findOne(teamId).targetteamID
             // handle success depending what you need to do
            //var userId = Meteor.userId();
      var foundData = {
      "foundtargets":{  createdBy: Meteor.userId(),
                        createdAt: new Date(),
                        image:"/cfs/files/images/" + Meteor.user().profile.image,
                        teamid:targetTeam
                      }
      };
      Teams.update({ _id: teamId },{ $push: foundData})

      Teams.update({_id:teamId},{$inc:{Score:1}})

      //clear images profile
      var userId = Meteor.userId();
      var imagesURL = {
              "profile.image":  ""
            };
      Meteor.users.update(userId, {$set: imagesURL});
      Router.go('targetPagina');
   }
});