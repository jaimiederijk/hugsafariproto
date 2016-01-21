

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
  checkPage: function(){
    if(this.punten) {
      return false;
    } else {
      return true;
    }
  },
  checkPageTarget: function(){
    if(this.punten||this.name==="Hugsafari") {
      return false;
    } else {
      return true;
    }
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

    if (!$('nav').hasClass("inactive")) {
      $('html, body').addClass("scrollLock");
      console.log("lock")
    }
    else {
      $('html, body').removeClass("scrollLock");
    }
    
    $(".template-container-doelwit").removeClass("down");
    $(".header").removeClass("down");
    $(".target_icon").removeClass("down");
    $(".container").removeClass("down");
    
    $('.menu-top').toggleClass('menu-top-click');
    $('.menu-middle').toggleClass('menu-middle-click');
    $('.menu-bottom').toggleClass('menu-bottom-click'); 
  
},
  'click .main-nav li a': function() {
    console.log("go");

    $('.nav-knop').toggleClass("omhoog");
    $('.overlay').toggleClass("donker");
    $('nav').addClass("inactive");

    $('.menu-top').removeClass('menu-top-click');
    $('.menu-middle').removeClass('menu-middle-click');
    $('.menu-bottom').removeClass('menu-bottom-click'); 

    $('html, body').removeClass("scrollLock");
    $('.overlay').removeClass("donker");
     $('.header').removeClass("header_schuif");
     $('.container').removeClass("body_schuif");
},
'click .template-container-doelwit a' : function() {
  $('html, body').removeClass("scrollLock");
  $(".template-container-doelwit").removeClass("down");
  $(".header").removeClass("down");
  $(".target_icon").removeClass("down");
  $(".container").removeClass("down");
},
	'click .target_icon': function() {
    $('html, body').toggleClass("scrollLock");
    $(".template-container-doelwit").toggleClass("down");
    $(".header").toggleClass("down");
    $(".target_icon").toggleClass("down");
    $(".container").toggleClass("down");
    $('nav').addClass("inactive");

    $('.menu-top').removeClass('menu-top-click');
    $('.menu-middle').removeClass('menu-middle-click');
    $('.menu-bottom').removeClass('menu-bottom-click');

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

    $('.menu-top').removeClass('menu-top-click');
    $('.menu-middle').removeClass('menu-middle-click');
    $('.menu-bottom').removeClass('menu-bottom-click');

    $('html, body').removeClass("scrollLock");
    // $('.nav-knop').removeClass("omhoog");
    // $('.target_icon img').toggleClass("weg");
    $('.container').removeClass("body_schuif");
    $('.header').removeClass("header_schuif");
}
});

// Template.layout.gestures({

// })