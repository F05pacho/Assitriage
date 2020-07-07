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

var db = firebase.database();

var tabla = document.getElementById('tabla');
tabla.innerHTML='';
db.ref("Servicios_salud").on("child_added", function(s){
var user = s.val();
tabla.innerHTML += '<form name="fomul">'+
'Valoración sobre este web:' +
'<select name="miSelect"> '+
'<option value="'+user.Eps+'">'+user.Eps
'</select> '+
'<br> <br> '+
'</form>'
});


