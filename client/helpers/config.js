Accounts.ui.config({
 passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('challenges', function() {
	if (Challenges.find().count()<=0) {
		//repeat this part for more challenges
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["images/hugatree.jpg"],
			punten:5
		})
	};
})
