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
 }
});

Router.route('/', {name: 'home'});
//Router.route('/team', {name: 'teamAanmelden'});
Router.route('/join', {name: 'teamAansluiten'});

Router.route('/leaderboard', {name: 'leaderboard'});

Router.route('/target', {name: 'targetPagina'});

Router.route('/challenges', {name: 'challenges'});

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
 }
});

Router.route('/admin', {name: 'admin'});


Router.route('/joinfriends', {
    name: 'teamToevoegen',
    waitOn: function() {
        return Meteor.subscribe('userList');
    },
    data: function() {
        return Meteor.users.find({});
    }
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