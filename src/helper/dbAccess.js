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

function tag_search(argument, callback) {
	var l = argument.length;
	var a = [];
	for (var i = 0; i < l; i++){
		a.push(i);
	}
	async.each(a, function (item, callback1) {
		database.ref().child("Tag").child(argument[item]).once('value', function (snapshot) {
			//var res = snapshot.val();
			result.push(snapshot.val());
			// console.log(res);
			callback1();
			return "kit_info"
		});
	}, function (err, results) {
		var first = result[0];
		for (var i = 1; i < l; i++)
			first = intersect(first, result[i]);
		// console.log(first);
		get_kit_info(first, (err, res) => {
			if (!err) {
				callback(false, kit_info);
			}
		});
		// console.log("completed");

	});
}

function get_kit_info(argument, callback11) {
	if(argument == null){
		return kit_info;
	}
	var l = argument.length;
	var a = [];
	for (var i = 0; i < l; i++){
		a.push(i);
	}
	async.each(a, function (item, callback2) {
		database.ref().child("Starter-kit").child(argument[item]).once('value', function (snapshot) {
			kit_info.push(snapshot.val());
			// console.log(kit_info);
			callback2();
		});
	}, function (err, results) {
		// console.log("completed2");
		callback11(false, kit_info)
	});
}

function intersect(a, b) {
	if(b == null) {
		return ""
	}
	var t;
	if (b.length > a.length) {t = b; b = a; a = t;} // indexOf to loop over shorter
	return a.filter(function (e) {
		return b.indexOf(e) > -1;
	});
}

module.exports = { tag_search }