Template.layout.helpers({
  punten:function(){
    var teamId = Meteor.user().profile.teamid
    return Teams.findOne(teamId).points
  },
  paginatitel:function(){
    return this.name
  },
  teamfoto:function(){
    var teamId = Meteor.user().profile.teamid
    var teamImg = Teams.findOne(teamId).imagesURL
    return Images.findOne(teamImg)
  }
});

Template.layout.events({
	'click .nav-knop': function() {
		console.log("go");
    $('nav').toggleClass("inactive");
    $('.nav-knop').toggleClass("omhoog");
    $('.overlay').toggleClass("donker");
    $('.target_icon img').toggleClass("weg");
    
},
'click .main-nav li a': function() {
    console.log("go");
    $('nav').toggleClass("inactive");
    $('.nav-knop').toggleClass("omhoog");
    $('.overlay').toggleClass("donker");
    $('.target_icon img').removeClass("weg");
    
},
	'click .target_icon': function() {
		console.log("go2")
    $('.overlay').toggleClass("donker");
    $('.target_icon img').toggleClass("target_icon_down");
    $('.template-container-doelwit').toggleClass("omlaag");
    
},
    'click .donker': function() {
        console.log("go")
    $('.donker').removeClass("donker");
    $('.target_icon img').removeClass("target_icon_down");
    $('.template-container-doelwit').removeClass("omlaag");
    $('nav').addClass("inactive");
    $('.nav-knop').removeClass("omhoog");
    $('.target_icon img').toggleClass("weg");
}
});

