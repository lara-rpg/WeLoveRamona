var contadorItems = 0;
var precioTotal = 0;
var subpaginas = ["nike.html", "adidas.html", "converse.html"];

document.getElementById("formulario-encuesta").addEventListener("submit", function (event) {
    event.preventDefault();
    var seleccion = document.querySelector('input[name="marca"]:checked').value;
    document.getElementById("resultados-encuesta").textContent = `Gracias por votar. Tu marca favorita es ${seleccion}.`;
});

document.getElementById("formulario-reseñas").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre-reseña").value;
    var comentario = document.getElementById("comentario").value;
    var nuevoComentario = `<p><strong>${nombre}:</strong> ${comentario}</p>`;
    document.getElementById("comentarios").innerHTML += nuevoComentario;
    document.getElementById("formulario-reseñas").reset();
});

// Validación del formulario de contacto
document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
	event.preventDefault();
    // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
    // Validación básica
    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
    }
    else if (!validarEmail(email)) {
        alert("Por favor, introduce un email válido.");
    }
    else {
		// Mostrar mensaje de éxito
		alert("Gracias por contactarnos, " + nombre + ". Hemos recibido tu mensaje.");
	}
	document.getElementById("formulario-contacto").reset();
});

// Función para validar email
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//Funcion para el menu hamburguer
function abrirMenu() {
	var sideNav = document.getElementById("sideNav");
	var boton = document.getElementById("boton");
	if (sideNav.style.left === "-250px") {
		sideNav.style.left = "0px";
	}
	else {
		sideNav.style.left = "-250px";
		boton.style.left = "30px";
	}
}

function abrirCarrito() {
	var sideNav = document.getElementById("carrito");
	var boton = document.getElementById("botonCarrito");
	if (sideNav.style.right === "-250px") {
		sideNav.style.right = "0px";
	}
	else {
		sideNav.style.right = "-250px";
		boton.style.right = "150px";
	}
}

function agregarAlCarrito(nombre, precio){
	if (contadorItems >= 3){
		alert("Máximo 3 items en el carrito");
	}
	else {
		document.getElementsByClassName("item")[contadorItems].innerHTML = nombre + " - " + precio
		precioTotal += precio;
		document.getElementById("total").innerHTML = "Total: " + precioTotal
		contadorItems++;
		document.getElementById("botonPagar").className = "";
		alert("Has añadido al carrito: " + nombre);
	}
}

function pagar(){
	alert("Compra exitosa por el valor de: " + precioTotal);
	for(var i = 0; i < contadorItems; i++){
		document.getElementsByClassName("item")[i].innerHTML = "";
	}
	document.getElementById("total").innerHTML = "";
	document.getElementById("botonPagar").className = "zoom-out";
	contadorItems = 0;
	precioTotal = 0;
}

function cambiarPagina(n){
	location.href = subpaginas[n];
}