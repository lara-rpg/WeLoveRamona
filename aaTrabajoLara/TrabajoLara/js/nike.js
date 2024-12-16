var imagenesCarrusel = ["../media/dunk_low.jpg", "../media/airforce.jpg", "../media/air_jordan.jpg"];
var contadorCarrusel = 0;
var textos = ["Nike, Inc. fue fundada el 25 de enero de 1964 como Blue Ribbon Sports por Bill Bowerman y Phil Knight. Inicialmente distribuyeron calzado japonés Onitsuka Tiger. En 1971, la empresa cambió su nombre a Nike, inspirado en la diosa griega de la victoria, y adoptó el logotipo 'Swoosh' diseñado por Carolyn Davidson. Desde entonces, Nike se ha convertido en un gigante mundial en ropa y calzado deportivo, conocido por su innovación y campañas publicitarias icónicas.",
				"Nike ha sido fundamental en el deporte, patrocinando a atletas de élite como Michael Jordan, LeBron James, Serena Williams y Cristiano Ronaldo. Con innovaciones tecnológicas y campañas publicitarias influyentes, ha promovido y desarrollado múltiples disciplinas deportivas a nivel mundial.",
				"Hoy en día, Nike es líder mundial en ropa y calzado deportivo, conocida por su innovación y diseños modernos. Con sede en Oregón, patrocina a atletas de élite y promueve la sostenibilidad en su producción. Su logotipo 'Swoosh' es reconocido globalmente y sigue influyendo en la cultura popular.",
				"Las Nike Dunk Low han experimentado un gran resurgimiento en ventas, impulsadas por su popularidad en la cultura del skate y las colaboraciones con marcas y diseñadores famosos. Originalmente lanzadas en 1985, su reciente auge se debe a la nostalgia y a ediciones limitadas que se agotan rápidamente y alcanzan altos precios en el mercado secundario. Este modelo se ha convertido en un ícono de la moda urbana y sigue siendo un producto clave para Nike.", 
				"Las Nike Air Force 1 han mantenido consistentemente altas ventas desde su lanzamiento en 1982. Este modelo, inicialmente diseñado para el baloncesto, ha trascendido su origen deportivo para convertirse en un ícono de la moda urbana. La durabilidad, el diseño clásico y las numerosas colaboraciones y ediciones limitadas han mantenido su popularidad. Las Air Force 1 son uno de los productos más vendidos de Nike, con una presencia fuerte tanto en el mercado de consumo general como en el mercado secundario.", 
				"Las Air Jordan de Nike, lanzadas en 1985, han sido un éxito de ventas constante y se consideran icónicas en el mundo del calzado deportivo y la moda urbana. Su popularidad ha sido impulsada por la asociación con Michael Jordan, así como por numerosas colaboraciones y ediciones limitadas. Las ventas siguen siendo robustas, con muchos lanzamientos agotándose rápidamente y alcanzando altos precios en el mercado secundario. Las Air Jordan siguen siendo un pilar fundamental para Nike, tanto en términos de ingresos como de influencia cultural."];
var titulos = ["DUNK LOW", "AIR FORCE", "AIR JORDAN"];
var intervalo;
var contadorTexto = [0, 0, 0, 0, 0, 0];
//Funciones para el carrusel
function rightArrow () {
	contadorCarrusel++;
	if (contadorCarrusel === 3){
		contadorCarrusel = 0;
	}
	document.getElementById("carrusel").src = imagenesCarrusel[contadorCarrusel];
	document.getElementById("tituloCarrusel").innerHTML = titulos[contadorCarrusel];
	clearInterval(intervalo);
	showText(contadorCarrusel+3); //+3 ya que las tres primeras posiciones son para "NIKE HISTORY"
}

function leftArrow () {
	contadorCarrusel--;
	if (contadorCarrusel === -1){
		contadorCarrusel = 2;
	}
	document.getElementById("carrusel").src = imagenesCarrusel[contadorCarrusel];
	document.getElementById("tituloCarrusel").innerHTML = titulos[contadorCarrusel];
	clearInterval(intervalo);
	showText(contadorCarrusel+3); //+3 ya que las tres primeras posiciones son para "NIKE HISTORY"
}
//Funciones para el efecto de movimiento de los textos
function textMovement (number) {
	if (number > 3){
		document.getElementsByClassName("texts")[3].innerHTML = textos[number].substring(0, contadorTexto[number]);
	}
	else {
		document.getElementsByClassName("texts")[number].innerHTML = textos[number].substring(0, contadorTexto[number]);
	}
	if (textos[number].length === contadorTexto[number]){
		clearInterval(intervalo);
	}
	contadorTexto[number]++;
}

function showText (n) {
	intervalo = setInterval(function () {textMovement(n)}, 50);
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