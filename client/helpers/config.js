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
			text:"Geef toe, je hebt het altijd al gewild. Een boom knuffelen staat natuurlijk op elke bucketlist.",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Wissel van kleren met iemand",
			text:"Ben jij ook zo benieuwd of jij de kleren van iemand anders past? Probeer het een keer uit!",
			imagesURLS:["/images/wearingeachotherclothes.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Maak een touw van kleding van 10 meter",
			text:"10 meter aan truien, t-shirts, broeken, sokken, schoenen, bh's en onderbroeken. De laatste twee is alleen voor mensen die willen winnen.",
			imagesURLS:["/images/kledingtouw.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga aan een verkeersbord hangen, stripper style",
			text:"Heb jij een strippers workshop gedaan? Zo ja, laat zien wat je kan. Zo niet, laat zien wat je niet kan!",
			imagesURLS:["/images/verkeersbordhangen.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga planken in een supermarkt",
			text:"Een super orginele trend is gaande. Je moet als een plank gaan liggen. Dus horizontaal op de grond met je armen langs je zij.",
			imagesURLS:["/images/plankingsupermarkt.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga naar het kunstwerk 'proeftoren Camera Batavia', en ga bellenblazen",
			text:"Het kunstwerk 'proeftoren Caerma Batavia' in West Terschelling kan wel wat zeep bellen gebruiken. Door jou. Jouw zeep bellen. Doe gewoon",
			imagesURLS:["/images/bellenblazen.jpg"],
			punten:20
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga met je pjama op straat staan",
			text:"Ben jij ook zo blij en trots op jouw onesie? Maar zien mensen het niet vaak? Ga dan op straat staan met je onesie (of een andere pjama) en ontvang complimenten!",
			imagesURLS:["/images/pjamaopstraat.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Doe je grote teen in jouw mond",
			text:"Lik jij andermans tenen altijd af, maar ben je toch benieuwd hoe de jouwe smaakt? Doe je grote teen in jouw eigen mond, en kom erachter!",
			imagesURLS:["/images/groteteen.jpg"],
			punten:10
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Maak een groepsfoto waarbij iedereen springt",
			text:"Wil jij ook de bekende 'zwevende mensen' foto hebben? Dat mag... En kan! Zorg ervoor dat iedereen springt.",
			imagesURLS:["/images/springendemensen.jpeg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Ga naar het kunstwerk 'Hee! Een gat in de dijk?', en leun ertegen",
			text:"Tsja, deze is gewoon simpel. Ga naar het kunstwerk: Hee! Een gat in de dijk? bij de Westerdijk en leun ertegen aan.",
			imagesURLS:["/images/heegatindedijk.jpg"],
			punten:15
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			text:"Geef toe, je hebt het altijd al gewild. Een boom knuffelen staat natuurlijk op elke bucketlist.",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			text:"Geef toe, je hebt het altijd al gewild. Een boom knuffelen staat natuurlijk op elke bucketlist.",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			text:"Geef toe, je hebt het altijd al gewild. Een boom knuffelen staat natuurlijk op elke bucketlist.",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			text:"Geef toe, je hebt het altijd al gewild. Een boom knuffelen staat natuurlijk op elke bucketlist.",
			imagesURLS:["/images/hugatree.jpg"],
			punten:5
		})
		Challenges.insert({
			createdAt: new Date(),
			name:"Knuffel met een boom",
			text:"Geef toe, je hebt het altijd al gewild. Een boom knuffelen staat natuurlijk op elke bucketlist.",
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