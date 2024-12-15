var imagenesCarrusel = ["../media/campus.png", "../media/superstar.jpg", "../media/samba.jpg"];
var contadorCarrusel = 0;
var textos = ["Adidas fue fundada el 18 de agosto de 1949 por Adolf Dassler en Herzogenaurach, Alemania. Antes de crear Adidas, Dassler ya fabricaba calzado deportivo junto a su hermano Rudolf, quien más tarde fundaría Puma tras su separación. El nombre 'Adidas' proviene de la combinación de su apodo, 'Adi', y las primeras letras de su apellido, 'Das'.Conocida por su icónico logo de tres rayas, la marca ha sido pionera en calzado y ropa deportiva, desarrollando innovaciones como la suela de goma para fútbol y colaborando con atletas y diseñadores de renombre. Hoy, Adidas es un referente global tanto en deporte como en moda urbana.",
				"Adidas ha desempeñado un papel crucial en el mundo del deporte, respaldando a figuras destacadas como Lionel Messi, Muhammad Ali, Zinedine Zidane y Naomi Osaka. Gracias a sus innovaciones en la creación de calzado y equipamiento deportivo, junto con campañas de marketing memorables, ha contribuido significativamente al crecimiento y evolución de numerosas disciplinas deportivas en todo el mundo.",
				"Actualmente, Adidas es uno de los líderes mundiales en ropa y calzado deportivo, reconocido por su innovación y estilo icónico. Con sede en Herzogenaurach, Alemania, la marca apoya a destacados atletas de diversas disciplinas y se compromete con la sostenibilidad a través de materiales reciclados y procesos responsables. Su distintivo logo de las tres rayas es un símbolo global que sigue marcando tendencia e impactando tanto en el deporte como en la cultura popular.",
				"Las Adidas Campus, nacidas en los años 70 como zapatillas de baloncesto, se convirtieron en un ícono de la moda urbana y la cultura juvenil. Con su diseño limpio y materiales de calidad, fueron adoptadas en los años 80 y 90 por movimientos como el hip-hop y los skaters, consolidándose como un clásico.Hoy en día, las Adidas Campus siguen destacando por su comodidad, versatilidad y colaboraciones modernas que respetan su esencia retro, combinando herencia deportiva con un diseño atemporal.", 
				"Las Adidas Superstar debutaron en los años 70 como zapatillas de baloncesto, revolucionando el deporte con su diseño de puntera de concha y estructura de cuero. No tardaron en cruzar la cancha hacia la moda, convirtiéndose en un símbolo del hip-hop en los años 80 gracias a artistas como Run-D.M.C.Actualmente, las Superstar son reconocidas mundialmente como un ícono de estilo. Su diseño atemporal y las frecuentes colaboraciones las han mantenido relevantes por décadas, siendo imprescindibles para cualquier amante de la moda urbana.", 
				"Las Adidas Samba, lanzadas en los años 50, fueron diseñadas originalmente para el fútbol en superficies heladas. Con su suela de goma y su diseño minimalista, no tardaron en convertirse en un fenómeno cultural fuera de los campos. Durante las décadas siguientes, su popularidad creció en la moda urbana, destacando en movimientos como el britpop y el streetwear global.Hoy en día, las Samba siguen siendo un clásico de Adidas, fusionando estilo deportivo y moderno. Su versatilidad y adaptaciones contemporáneas las mantienen como un elemento clave tanto en las calles como en el mundo del diseño."];
var titulos = ["CAMPUS", "SUPERSTAR", "SAMBA"];
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
	showText(contadorCarrusel+3); //+3 ya que las tres primeras posiciones son para "ADIDAS HISTORY"
}

function leftArrow () {
	contadorCarrusel--;
	if (contadorCarrusel === -1){
		contadorCarrusel = 2;
	}
	document.getElementById("carrusel").src = imagenesCarrusel[contadorCarrusel];
	document.getElementById("tituloCarrusel").innerHTML = titulos[contadorCarrusel];
	clearInterval(intervalo);
	showText(contadorCarrusel+3); //+3 ya que las tres primeras posiciones son para "ADIDAS HISTORY"
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
//Funcion para el menu hamburguesa
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