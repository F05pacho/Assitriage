
var config = {
    apiKey: "AIzaSyCNder5AUGugGsImR2YLykkzzssjTQCJWg",
    authDomain: "assistriage.firebaseapp.com",
    databaseURL: "https://assistriage.firebaseio.com",
    projectId: "assistriage",
    storageBucket: "assistriage.appspot.com",
    messagingSenderId: "94990617395",
    appId: "1:94990617395:web:d7abaafaf206d531d60c46",
    measurementId: "G-2HX5QETYE5"
};
firebase.initializeApp(config);


var app = document.getElementById('app')
var dbRef = firebase.database()
var messageRef = dbRef.ref('Usuarios')

messageRef.once('value').then(function(snap) {
    app.innerTextm = snap.val()
});

