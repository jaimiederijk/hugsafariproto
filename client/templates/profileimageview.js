Template.profileimage.helpers({
  images: function () {
    if (!$.isEmptyObject(Meteor.user().profile)) {
      return Images.findOne(Meteor.user().profile.image) //Meteor.user().profile.image
    } else {
      return false
    }
  }
});