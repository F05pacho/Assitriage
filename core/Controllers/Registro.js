
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
var messageRef = dbRef.ref('sd')

messageRef.once('value').then(function(snap) {
    app.innerTextm = snap.val()
});

$('#Enviar2').click(function() {
    firebase.database().ref("Users").set({
      Nombre: $('#user_login2').val(),
      Cedula: $('#pass_login2').val()
    })
    });
    $('#Registro_guardar').click(function() {
        firebase.database().ref("Usuarios").push({
          Nombre: $('#nombre_registro').val(),
          Primer_Apellido:$('#Apellido_1').val(),
          Segundo_Apellido:$('#Apellido_2').val(),
          Fecha_nacimiento:$('#fecha_nacimiento').val(),
          Telefono:$('#telefono').val(),
          Documento_identidad:$('#documento').val(),
          eps:$('#eps_registro').val(),
          ocupacion:$('#ocupacion_registro').val(),
          direccion:$('#direccion_registro').val(),
          zona_rural:$('#zonarural').val(),
          alegias:$('#alergias').val(),
          Acompañante:$('#nombre_acompañante').val(),
          parentesco:$('#parentesco_registro').val(),
          tel_acompañante:$('#telefono_acompañante').val(),
          contraseña:$('#pass_registro').val()
    
        })
        });