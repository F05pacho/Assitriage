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
function session(){

var db = firebase.database();
db.ref("Usuarios").on("child_added", function(s){
  var user = s.val();
      var N = document.getElementById("pass_login").value;
      if( user.Documento_identidad == N){
        window.location="../Assitriage/views/perfil.html";
        window.alert("Bienvenido"); 
        return false;
      }
      else if(user.Nombre == ""){
        window.alert("Por favor ingresar los datos correspondientes");
      }
    });
}
