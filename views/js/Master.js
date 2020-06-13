$(document).ready(function () {
AgregarMenu();
AgregarFooter();
});

function AgregarMenu() {
    var menu = document.getElementById("Menu");
    menu.innerHTML = '<header>'+
    '<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">'+
	    '<div class="container">'+
	     '<a class="navbar-brand" href="index.html">AssisTriage</a>'+
	      '<button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">'+
	        '<span class="oi oi-menu"></span> Menú </button>'+
	      '<div class="collapse navbar-collapse" id="ftco-nav">'+
	       '<ul class="navbar-nav nav ml-auto">'+
	        '<li class="nav-item cta mr-md-2"><a class="nav-link" data-toggle="modal" data-target="#Login">Iniciar Sesión</a></li>'+
            '<li class="nav-item cta mr-md-2"><a href="Registro.html" class="nav-link">Registro</a></li>'+
	        '</ul>'+
        '</div>'+
        '<a class="navbar-brand" style="display: none" >Usuario</a>'+
        '<img src="views/images/perfil.png" width="60" height="60"></div>'+
	  '</nav></header>';
}
function AgregarFooter() {
	var footer = document.getElementById("Footer");
	footer.innerHTML = '<footer class="ftco-footer ftco-section img" style="background-image: url(images/footer-bg.jpg);">'+
	'<div class="overlay"></div><div class="container-fluid px-md-5">'+
	'<div class="row mb-5"><div class="col-md">'+
	'<div class="ftco-footer-widget mb-4"><h2 class="ftco-heading-2">AsissTriage</h2>'+
	'<p>SISTEMA PARA LA VALORACIÓN DE TRIAGE EN EL SERVICIO DE URGENCIAS</p>'+
		'<ul class="ftco-footer-social list-unstyled mt-5">'+
	'<li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>'+
	'<li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>'+
	'<li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>'+
	'</ul></div>'+
	'</div>'+
	'<div class="col-md">'+
	'<div class="ftco-footer-widget mb-4">'+
	'<h2 class="ftco-heading-2">Servicios </h2>'+
	'<ul class="list-unstyled">'+
	'<li></span>Prevalorización</li>'+
	'<li></span>Servicio 24 horas</li>'+
	'<li></span>atención automatica</li>'+
	'</ul></div>'+
	'</div>'+
	'<div class="col-md">'+
	'<div class="ftco-footer-widget mb-4">'+
		'<h2 class="ftco-heading-2">Tienes Preguntas?</h2>'+
			'<div class="block-23 mb-3">'+
	 '<ul>'+
		'<li><span class="icon icon-map-marker"></span><span class="text">Casa Tesis, Zipaquirá, Cundinamarca, Colombia</span></li>'+
		'<li><a href="#"><span class="icon icon-phone"></span><span class="text">885 00693</span></a></li>'+
		'<li><a href="#"><span class="icon icon-envelope pr-4"></span><span class="text">assistriage@gmail.com</span></a></li>'+
		'</ul></div>'+
		'</div>'+
	  '</div>'+
	'</div>'+
	'<div class="row">'+
	'<div class="col-md-12 text-center">'+
	'<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados | Esta APP Web está hecha con fines académicos</p>'+
	 '</div></div>'+
  '</div>'+
'</footer>';
}