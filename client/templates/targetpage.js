Template.targetPagina.rendered = function() {
  this.autorun(function() {

    var tour = new Tour({
      steps: [
      {
        element: ".template-container-targetPagina .target_foto",
        title: "Doelwit",
        //container:".container",
        placement: 'bottom',
        content: "Dit is jouw doelwit."
      },
      {
        element: ".hints h3",
        container:".hints",
        title: "Hints",
        content: "Spendeer de punten die je verdient met challenges aan hints over je doelwit."
      }
      ,
      {
        element: ".nav-knop",
        container:".header",
        title: "Menu",
        content: "Navigeer de app doormiddel van dit menu."
      }
    ]});
    tour.init(true);

    // Start the tour
    tour.start(true);

  })
};
Template.targetPagina.helpers({
	hints: function () {
	  return Hints.find()
	},
	images: function () {

		if (!$.isEmptyObject(Teams.findOne(Meteor.user().profile.teamid).targetteamID)) {
	  	var targetTeamID = Teams.findOne(Meteor.user().profile.teamid).targetteamID;
	  	var targetTeamImageURL = Teams.findOne(targetTeamID).imagesURL;
	    return "/cfs/files/images/" + targetTeamImageURL;
		} else {
			return "/images/notarget.png";
		}
	},
	teamfoto:function(){
   		var teamId = Meteor.user().profile.teamid
    	var teamImg = Teams.findOne(teamId).imagesURL
    	return Images.findOne(teamImg)
  	},
	teamname: function () {
		return Teams.findOne(Meteor.user().profile.teamid).teamName;
	},
	checkHint : function () {
		var team = Teams.findOne(Meteor.user().profile.teamid)
		for (var i = 0; i < team.hints.length; i++) {
			if (team.hints[i].hintid===this._id) {				
				return 'hint-done'
			};			
		};
	},
	checkPoints: function () {
		var teamPoints = Teams.findOne(Meteor.user().profile.teamid).points
		var hintPoints = this.punten
		if (teamPoints-hintPoints<0) {
			return "hint-disabled"
		};
	}

});

Template.targetPagina.events({
	'click .hints-list li': function(event, template) {
      	var teamId = Meteor.user().profile.teamid
      	var teamPoints = Teams.findOne(teamId).points
		
     	var hintID = event.currentTarget.id

      	var punten = Hints.findOne(hintID).punten
      // debugger
      	if (teamPoints-punten<0) {
			return 
		};
      
		var hints = {
			"hints":{
		  		createdAt: new Date(),
		    	hintid:hintID
			}
		};
		Teams.update({ _id: teamId },{ $push: hints})

		Teams.update({_id:teamId},{$inc:{points:-punten}})


   }
});