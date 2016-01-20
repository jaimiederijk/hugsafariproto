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

Hints = new Mongo.Collection("hints");


Hints.allow({
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
