Template.admin.helpers({
  teamcount: function() {
    return Teams.find().count();
  }
});

Template.admin.events({
  'click .button' : function(event, template){
  }
});