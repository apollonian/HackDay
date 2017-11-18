var firebase = require('firebase');
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
function tag_search(argument) {
	l=argument.length;
	console.log(l);
	for(i=0;i<l;i++){
		database.ref().child("Tag").child(argument[i]).once('value', function(snapshot) {
			temp = i;
		var res = snapshot.val();
        result.push(snapshot.val());
        console.log(res);
        console.log(temp+" "+l);
     	if(temp==l-1)
     	{
     		//console.log(intersect(result[0], result[1]));
     		console.log("done");
     	}
    	});
	}
	//console.log(intersect(result[0],result[1]));
	/*database.ref().child("Tag").child(argument).once('value', function(snapshot) {
    if(snapshot.val()){
        //logs everything that is under /user
         /*snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var res = childSnapshot.val();
        console.log(res);
  });
  	result.push(snapshot.val());

    }
});*/
}
tag_search(['Tag1','Tag2']);
/*
database.ref().child("Tag").child('Tag2').once('value', function(snapshot) {
    if(snapshot.val()){
        //logs everything that is under /user
         /*snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var res = childSnapshot.val();
        console.log(res);
  });
  	result[1] = snapshot.val();
  	intersect(result[0], result[1]);
    }
});
var arr1 = ["mike", "sue", "tom", "kathy", "henry"];
    arr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"];
*/
function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}