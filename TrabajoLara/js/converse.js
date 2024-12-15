var imagenesCarrusel = ["../media/chuck_taylor.jpg", "../media/RunStarTrainer.png", "../media/RunStarHike.jpg"];
var contadorCarrusel = 0;
var textos = ["Converse ha sido un ícono en el mundo del deporte y la moda, dejando su huella en disciplinas como el baloncesto y el skate. Asociada históricamente con figuras legendarias como Chuck Taylor y equipos de baloncesto en sus inicios, ha mantenido su relevancia gracias a colaboraciones innovadoras y diseños atemporales que trascienden generaciones. Su influencia ha ido más allá del deporte, convirtiéndose en un símbolo cultural a nivel global.",
				"Converse ha sido un ícono en el mundo del deporte y la cultura, destacando especialmente en disciplinas como el baloncesto, donde figuras legendarias como Chuck Taylor ayudaron a popularizar su calzado. A lo largo de los años, la marca ha trascendido las canchas para convertirse en un símbolo de autoexpresión en la música, el arte y la moda. Con diseños clásicos que se reinventan constantemente y colaboraciones influyentes, Converse sigue inspirando a nuevas generaciones y dejando su huella en múltiples ámbitos deportivos y culturales a nivel global.",
				"Hoy en día, Converse es una marca icónica en el mundo del calzado y la moda, conocida por su estilo atemporal y su influencia en la cultura urbana. Con sede en Boston, Massachusetts, es famosa por su modelo clásico *Chuck Taylor All Star*, que ha trascendido generaciones. La marca ha colaborado con artistas y creativos de todo el mundo, manteniéndose relevante y adaptándose a las tendencias actuales. Su estrella distintiva sigue siendo un símbolo global de originalidad y autoexpresión.",
				"Las Converse Chuck Taylor All Star han tenido un renacimiento en popularidad, impulsadas por su fuerte presencia en la cultura urbana y colaboraciones con artistas y diseñadores reconocidos.Lanzadas originalmente en 1917 como zapatillas de baloncesto, su reciente éxito se debe a la mezcla de nostalgia, versatilidad y ediciones especiales que se convierten rápidamente en piezas de colección, con alta demanda en el mercado secundario.", 
				"Las Converse Run Star Trainer, lanzadas en 2022, rápidamente se posicionaron como un modelo innovador dentro del catálogo de la marca. Inspiradas en la estética futurista y las tendencias urbanas, este diseño destaca por su suela llamativa y detalles que combinan funcionalidad con un estilo audaz. Desde su llegada al mercado, las Run Star Trainer han captado la atención de un público joven y creativo, impulsadas por colaboraciones especiales y ediciones limitadas. Este modelo ha consolidado su popularidad tanto en las tiendas como en el mercado secundario, convirtiéndose en una pieza clave para Converse en la moda contemporánea.", 
				"Las Run Star Hike de Converse, lanzadas en 2019, se han convertido en un éxito rotundo, combinando el diseño clásico de las Chuck Taylor con una suela moderna y robusta que marca tendencia. Su popularidad ha crecido gracias a su estética única, que conecta la moda urbana con un estilo vanguardista. Con frecuentes colaboraciones y ediciones especiales, este modelo se ha consolidado como uno de los favoritos entre los amantes del calzado. Las Run Star Hike continúan siendo un elemento clave para Converse, destacando por su impacto tanto en ventas como en la cultura contemporánea."];
var titulos = ["CHUCK TAYLOR", "RUN  STAR TRAINER", "RUN STAR HIKE"];
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