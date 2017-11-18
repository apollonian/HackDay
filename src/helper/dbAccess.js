var firebase = require('firebase');
var async = require("async");

var config = {
    apiKey: "AIzaSyB8TCkKdHd0kafz6ahz7RxNbkHSAj2C-bw",
    authDomain: "tidy-vent-97616.firebaseapp.com",
    databaseURL: "https://tidy-vent-97616.firebaseio.com",
    projectId: "tidy-vent-97616",
    storageBucket: "tidy-vent-97616.appspot.com",
    messagingSenderId: "594594645233"
  };
var app = firebase.initializeApp(config);
var database = firebase.database();
var result = [];
var kit_info = [];

function tag_search(argument) {
	l=argument.length;
	var a = [];
	for(i=0;i<l;i++)
		a.push(i);

	async.each(a,function(item, callback1){
		database.ref().child("Tag").child(argument[item]).once('value', function(snapshot) {
			var res = snapshot.val();
	        result.push(snapshot.val());    
	        console.log(res);
	        callback1();   
    	});
	}, function(err, results){
		var first = result[0];
		for(i=1;i<l;i++)
			first = intersect(first,result[i]);
		console.log(first);
		get_kit_info(first);
		console.log("completed");
	});
}

function get_kit_info(argument) {
	l=argument.length;
	var a = [];
	for(i=0;i<l;i++)
		a.push(i);
	async.each(a,function(item, callback2){
	database.ref().child("Starter-kit").child(argument[item]).once('value', function(snapshot) {
	       kit_info.push(snapshot.val());    
	       console.log(kit_info);
	       callback2();   
    	});
	}, function(err, results){
		console.log("completed");
		return kit_info;
	});
}

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

module.exports = {tag_search}