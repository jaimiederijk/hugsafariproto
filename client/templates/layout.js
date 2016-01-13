Template.layout.helpers({
  punten:function(){
    var teamId = Meteor.user().profile.teamid
    return Teams.findOne(teamId).points
  }
});

Template.layout.events({
	'click .nav-knop': function() {
		console.log("go");
    $('nav').toggleClass("inactive");
    $('.nav-knop').toggleClass("omhoog");
    $('.overlay').toggleClass("donker");
    
},
	'click .target_icon img': function() {
		console.log("go")
    $('.overlay').toggleClass("donker");
    $('.target_icon img').toggleClass("normal");
    $('.template-container-doelwit').toggleClass("omlaag");
    $('.template-container-doelwit .target_info').toggleClass("teamnaam_omlaag")
}
});

