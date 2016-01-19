Template.admin.helpers({
  teamcount: function() {
    return Teams.find().count();
  }
});

Template.admin.events({
  'click .button' : function(event, template){
  	//debugger
  	var teams = Teams.find().fetch()//{'targetteamID': ""}
  	if (teams.length<3) {
  		alert("not enough teams without target")
  		return
  	};
  	var assignedTarget=[];
  	for (var i = 0; i < teams.length; i++) {
  		var targetID="";

  		for (var t = 1; t < teams.length; t++) {
  			if (assignedTarget.indexOf(teams[t]._id)===-1) { // is niet target
	  			if (teams[t]._id!=teams[i]._id) {				// target is niet dit team
	  				if (teams[t].targetteamID!=teams[i]._id) {	// tatgets target is not team
	  					targetID = teams[t]._id
	  					break
	  				};
	  			}
  			};
  		};
  		if (i===teams.length-1) {
  			targetID = teams[0]._id
  		};
  		var teamID = teams[i]._id
  		var target = {
  			'targetteamID':targetID
  		}
  		assignedTarget.push(targetID)
  		teams[i].targetteamID=targetID
  		Teams.update(teamID, {$set: target});
  	};
  }
});
//reset via console
// var teams = Teams.find().fetch()
//   	for (var i = 0; i < teams.length; i++) {
//   		var teamID = teams[i]._id
//   		var target = {
//   			'targetteamID':""
//   		}
//   		//teams[i].targetteamID=targetID
//   		Teams.update(teamID, {$set: target});
//   	};