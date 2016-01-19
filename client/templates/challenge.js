Template.challenge.helpers({
  challenge: function () {
    return this
  },
  images:function() {
  	var count = this.imagesURLS.length
  	var random = Math.floor(Math.random() * (count)) ;
  	return this.imagesURLS[random];
  },
  profimage:function() {
    if (!$.isEmptyObject(Meteor.user().profile.image)) {
      return Images.findOne(Meteor.user().profile.image) //Meteor.user().profile.image
    } else {
      return false
    }
  }
});

Template.challenge.events({
	'click .submitchallenge': function(event, template) {
		 $('.imageView').toggleClass("showUpload");
	},
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
            $("button").attr('disabled',false).removeClass("disabled display_none");
            $("label button").addClass("uploaded");
          }
        });
     });
   },
    'click .button': function(event, template) {
      var teamId = Meteor.user().profile.teamid
      var challengeID = this._id
      var points = this.punten
      var challengeData = {
      "challenges":{  createdBy: Meteor.userId(),
                        createdAt: new Date(),
                        image:"/cfs/files/images/" + Meteor.user().profile.image,
                        punten:points
                      }
      };
      Teams.update({ _id: teamId },{ $push: challengeData})

      var currentPoints={
      	"points" : Teams.findOne(teamId).points + points
      }

      Teams.update({ _id: teamId },{ $set: currentPoints})

      var pointsScore = {
        "challengescore":points
      }
      Teams.update({ _id: teamId },{ $inc: pointsScore})

      var img = {
      "imagesURLS":"/cfs/files/images/" + Meteor.user().profile.image                     
                      };
    
      Challenges.update({ _id: challengeID },{ $push: img})

      //clear images profile
      var userId = Meteor.userId();
      var imagesURL = {
              "profile.image":  ""
            };
      Meteor.users.update(userId, {$set: imagesURL});
      Router.go('challenges');
   }
});