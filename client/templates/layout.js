

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
  },
  targetsfound:function() {
    var teamId = Meteor.user().profile.teamid
    return Teams.findOne(teamId).foundtargets.length
  },
  teams: function(){
    return Teams.find({},{sort:{Score:-1}})
  },
  leaderbordpositie:function(index) {
    var teamId = Meteor.user().profile.teamid
    var i=index+1
    if (this._id===teamId) {
        return i
    };
  }
  // templateGestures: {
  //   'swipeleft .target_icon': function (event, templateInstance) {
  //     // event.preventDefault();
  //     console.log("go2")

  //   }
  // }
  
});

Template.layout.events({
	'click .nav-knop': function() {
		console.log("go");
    $('nav').toggleClass("inactive");
    $('.overlay').toggleClass("donker");
    $('.container').toggleClass("body_schuif");
    $('.header').toggleClass("header_schuif");

     $('html, body').removeClass("scrollLock");
    $(".template-container-doelwit").removeClass("down");
    $(".header").removeClass("down");
    $(".target_icon").removeClass("down");
    $(".container").removeClass("down");

    
},
  'click .main-nav li a': function() {
    console.log("go");

    $('.nav-knop').toggleClass("omhoog");
    $('.overlay').toggleClass("donker");
    $('nav').addClass("inactive");
    $('.overlay').removeClass("donker");
     $('.header').removeClass("header_schuif");
     $('.container').removeClass("body_schuif");

   
    // $('.target_icon img').removeClass("weg");
    
},
	'click .target_icon': function() {
      $('html, body').toggleClass("scrollLock");
    $(".template-container-doelwit").toggleClass("down");
    $(".header").toggleClass("down");
    $(".target_icon").toggleClass("down");
    $(".container").toggleClass("down");
    $('nav').addClass("inactive");
    $('.overlay').removeClass("donker");
    $('.container').removeClass("body_schuif");
    $('.header').removeClass("header_schuif");
    
},
    'click .donker': function() {
        console.log("go")
    $('.donker').removeClass("donker");
    // $('.target_icon img').removeClass("target_icon_down");
    // $('.template-container-doelwit').removeClass("omlaag");
    $('nav').addClass("inactive");
    // $('.nav-knop').removeClass("omhoog");
    // $('.target_icon img').toggleClass("weg");
    $('.container').removeClass("body_schuif");
    $('.header').removeClass("header_schuif");
}
});

// Template.layout.gestures({

// })