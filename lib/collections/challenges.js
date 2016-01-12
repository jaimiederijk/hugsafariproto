Challenges = new Mongo.Collection("challenges");


Challenges.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 }
});

