Accounts.ui.config({
 passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('images')
Meteor.subscribe('teams')
Meteor.subscribe('userList');

Meteor.subscribe('challenges', function() {
	if (Challenges.find().count()<=0) {
		//repeat this part for more challenges
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			imagesURLS:["/images/hugatree.jpg"],
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
			punten:5
		})
	};
})

Meteor.subscribe('hints', function() {
	if (Hints.find().count()<=0) {
		//repeat this part for more challenges
		Hints.insert({
			createdAt: new Date(),
			name:"Camping",
			tip:"De Koog",
			punten:10
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Locatie",
			tip:"Wersterkeyn",
			punten:30
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Voorstelling",
			tip:"We doen het allemaal wel zelf <span>12:30</span>",
			punten:5
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Selfie",
			tip:"Klik hier om de selfie te bekijken",
			punten:15
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Vraag",
			tip:"Klik hier om de vraag te stellen",
			punten:5
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Voorstelling",
			tip:"De Koog",
			punten:5
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Voorstelling",
			tip:"De Koog",
			punten:5
		})
			Hints.insert({
			createdAt: new Date(),
			name:"Selfie",
			tip:"Klik hier om de selfie te bekijken",
			punten:15
		})		
		Hints.insert({
			createdAt: new Date(),
			name:"Selfie",
			tip:"Klik hier om de selfie te bekijken",
			punten:15
		})		
		Hints.insert({
			createdAt: new Date(),
			name:"Locatie",
			tip:"De betonning",
			punten:30
		})		
		Hints.insert({
			createdAt: new Date(),
			name:"Locatie",
			tip:"Groene strand",
			punten:20
		})
		Hints.insert({
			createdAt: new Date(),
			name:"Locatie",
			tip:"Hartbreak Hotel",
			punten:20
		})		
	};
})