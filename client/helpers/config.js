Accounts.ui.config({
 passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('challenges', function() {
	if (Challenges.find().count()<=0) {
		//repeat this part for more challenges
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
<<<<<<< HEAD
=======
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Wissel van kleren met iemand",
			imagesURLS:["/images/wearingeachotherclothes.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Maak een touw van kleding van 10 meter",
			imagesURLS:["/images/kledingtouw.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga aan een verkeersbord hangen, stripper style",
			imagesURLS:["/images/verkeersbordhangen.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga planken in een supermarkt",
			imagesURLS:["/images/plankingsupermarkt.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga naar het kunstwerk 'proeftoren Camera Batavia', en ga bellenblazen",
			imagesURLS:["/images/bellenblazen.jpg"],
			punten:20
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga met je pjama op straat staan",
			imagesURLS:["/images/pjamaopstraat.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Doe je grote teen in jouw mond",
			imagesURLS:["/images/groteteen.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Maak een groepsfoto waarbij iedereen springt",
			imagesURLS:["/images/springendemensen.jpeg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga naar het kunstwerk 'Hee! Een gat in de dijk?', en leun ertegen",
			imagesURLS:["/images/heegatindedijk.jpg"],
			punten:15
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
>>>>>>> origin/master
			punten:5
		})
	};
})
