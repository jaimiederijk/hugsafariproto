Template.teamAanmelden.helpers({

});

Template.teamAanmelden.events({
  'change .myFileInput': function(event, template) {
    console.log("chang");
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             alert("failed");
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              "profile.image":  fileObj._id//"/cfs/files/images/" +
            };
            Meteor.users.update(userId, {$set: imagesURL});
            $("button").attr('disabled',false).removeClass("disabled");
          }
        });
     });
   },
  'change .teamName': function(event, template) {
    console.log("changtext");
      //debugger
      var userId = Meteor.userId();
      var team = {"profile.teamname":event.target.value};

      Meteor.users.update(userId, {$set: team});

   },
  'click .saveTeam': function(event, template) {
    console.log("save");

    var imagesURL = Meteor.user().profile.image
    if ($.isEmptyObject(Meteor.user().profile.image)) {
      alert("No image")
      return
    };
    var teamName = Meteor.user().profile.teamname
    if ($.isEmptyObject(Meteor.user().profile.teamname)) {
      alert("No Teamname")
      return
    };
    // var team = {"profile.teamname":event.target.value};
    var userId = Meteor.userId();
    // Meteor.users.update(userId, {$set: team});
    Teams.insert({
      Score:0,
      challengescore:0,
      createdBy: Meteor.userId(),
      createdAt: new Date(),
      teamName: teamName ,
      imagesURL: imagesURL,
      targetteamID:"",
      foundtargets:[],
      challenges:[],
      teammembers:[userId],
      points:0 

    }, function (err, fileObj) {
      var userId = Meteor.userId();
      var teamID = {"profile.teamid":fileObj };
     
      var imagesURL = {
              "profile.image":  ""
            };
      Meteor.users.update(userId, {$set: imagesURL});

      Meteor.users.update(userId, {$set: teamID});
      Router.go('teamToevoegen')
    })

   }
});