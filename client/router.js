Router.configure({
  	layoutTemplate: 'layout',
  	loadingTemplate: 'loading',
  	waitOn: function () {
	 return Meteor.subscribe('teams')
	}
});

Router.route('/teamAanmelden',{
 waitOn: function () {
 return Meteor.subscribe('images')
 },
 action: function () {
 if (this.ready())
 this.render('teamAanmelden');
 else
 this.render('Loading');
 },
  data: function() { return {"name":"Team aanmelden"} }
});

Router.route('/', {name: 'home',
  data: function() { return {"name":"Start"} }
});
//Router.route('/team', {name: 'teamAanmelden'});
Router.route('/join', {name: 'teamAansluiten',
  data: function() { return {"name":"Aansluiten bij team"} }
});

Router.route('/leaderboard', {name: 'leaderboard',
  data: function() { return {"name":"Leaderboard"} }
});

Router.route('/target', {name: 'targetPagina',
  data: function() { return {"name":"Hugsafari"} }
});

Router.route('/challenges', {name: 'challenges',
  data: function() { return {"name":"Challenges"} }
});

Router.route('/challenges/:_id/challenge', {name: 'challenge',
	data: function() { return Challenges.findOne(this.params._id); }
});

Router.route('/gevonden',{
 waitOn: function () {
 return Meteor.subscribe('images')
 },
 action: function () {
 if (this.ready())
 this.render('gevonden');
 else
 this.render('Loading');
 },
  data: function() { return {"name":"gevonden"} }

});

Router.route('/admin', {name: 'admin',
  data: function() { return {"name":"admin"} }
});


Router.route('/joinfriends', {
    name: 'teamToevoegen',
    waitOn: function() {
        return Meteor.subscribe('userList');
    },
    data: function() { return {"name":"Leden toevoegen"} }
 });


var requireLogin = function() {
	if (! Meteor.user()) {
 		if (Meteor.loggingIn()) {
 			this.render(this.loadingTemplate);
 		} else {
 			Router.go('home');
 		}
 	} else {
 		this.next();
 	}
}

Router.onBeforeAction(requireLogin, {except:'home'});
// Router.onBeforeAction(requireLogin, {only: 'teamToevoegen'});only: 'targetPagina'}