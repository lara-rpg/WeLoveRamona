
var frases = ["\"Francamente, querida, me importa un bledo\"","\"Voy a hacerle una oferta que no podrá rechazar\"","\"No lo entiendes. Pude haber tenido clase. Pude haber sido alguien, en lugar de un vago, que eso es lo que soy, aceptémoslo\"","\"Me parece que ya no estamos en Kansas\"","\"Ve con él, Ilsa\"","\"Alégrame el día\"","\"Cuando quieras señor DeMille, estoy lista para rodar\"","\"Que la fuerza te acompañe\"","\"Abróchense los cinturones. Esta va a ser una noche movidita\"","\"¿Hablas conmigo?\"","\"Lo que tenemos es un fallo de comunicación\"","\"Qué delicia oler napalm por la mañana\"","\"Amar significa no tener que decir nunca lo siento\"","\"El material con el que se forjan los sueños\"","\"E.T., teléfono, mi casa\"","\"Me llaman Mister Tibbs\"","\"Rosebud\"","\"Made it, Ma! Top of the world!\"","\"Estoy más que harto y no quiero seguir soportándolo\"","\"Louis, presiento que este es el comienzo de una hermosa amistad\"","\"Uno del censo intentó hacerme una encuesta. Me comí su hígado acompañado de habas y un buen Chianti\"","\"Bond. James Bond\"","\"Se está mejor en casa que en ningún sitio\"","\"¡Yo soy grande! Es el cine ahora ya no lo es\"","\"¡Enséñame la pasta!\"","\"¿Por qué no subes alguna vez y me ves\"","\"¡Estoy caminando aquí! ¡Estoy caminando aquí!\"","\"Tócala, Sam, tócala\"","\"Tú no puedes encajar la verdad\"","\"Quiero estar sola\"","\"Realmente, mañana será otro día\"","\"Arreste a los sospechosos\"","\"Tomaré lo mismo que ella\"","\"¿Sabes silbar, verdad Steve? Solo tienes que juntar los labios y… soplar\"","\"Vas a necesitar un barco muy grande\"","\"¿Insignias? No tenemos. No necesitamos insignias. No tenemos que mostrarle ninguna insignia apestosa\"","\"Volveré\"","\"Hoy yo me considero el hombre más feliz en la faz de la Tierra\"","\"Si lo construyes, vendrá\"","\"Mamá siempre decía: la vida es como una caja de bombones. Nunca sabes lo que te va a tocar\"","\"Atracamos bancos\"","\"Plásticos\"","\"Siempre nos quedará París\"","\"En ocasiones, veo muertos\"","\"¡Stella! ¡Stella!\"","\"Oh, Jerry, no hay que pedir la luna. Tenemos las estrellas\"","\"Shane. Shane. ¡Vuelve!\"","\"Bueno, nadie es perfecto\"","\"¡Está vivo!, ¡está vivo!\"","\"Houston, tenemos un problema\""];
var peliculas = [" - Lo que el viento se llevó"," - El padrino"," - La ley del silencio"," - El mago de Oz"," - Casablanca"," - Impacto súbito"," - El crepúsculo de los dioses"," - La guerra de las galaxias"," - Eva al desnudo"," - Taxi Driver"," - La leyenda del indomable"," - Apocalypse now"," - Love Story"," - El halcón maltés"," - E.T. el extraterrestre"," - En el calor de la noche"," - Ciudadano Kane"," - Al rojo vivo"," - Network, un mundo implacable"," - Casablanca"," - El silencio de los corderos"," - Agente 007 contra el doctor No"," - El mago de Oz"," - El crepúsculo de los dioses"," - Jerry Maguire"," - Lady Lou. Nacida para pecar"," - Cowboy de medianoche"," - Casablanca"," - Algunos hombres buenos"," - Grand Hotel"," - Lo que el viento se llevó"," - Casablanca"," - Cuando Harry encontró a Sally"," - Tener y no tener"," - Tiburón"," - El tesoro de Sierra Madre"," - Terminator"," - El orgullo de los yankees"," - Campo de sueños"," - Forrest Gump"," - Bonnie y Clyde"," - El graduado"," - Casablanca"," - El sexto sentido"," - Un tranvía llamado deseo"," - La extraña pasajera"," - Raíces profundas"," - Con faldas y a lo loco"," - El doctor Frankenstein"," - Apolo 13"];
var unidad = 0;
var unidad2 = 0;

function inicio(){
	setInterval(pasarImagenes, 3000);
	setInterval(pasarFrases, 3000); 
} 

function pasarImagenes(){
	unidad++;
	if(unidad===50){
		unidad = 0;
	}
	document.getElementById('imagenFrase').src = "../../../media/img/frasesPeli_imagenes/img"+(unidad+1)+".png";
}

function pasarFrases(){
	unidad2++;
	if(unidad2===50){
		unidad2 = 0;
	}
	document.getElementById('pFrase').innerHTML = frases[unidad2]+peliculas[unidad2];
}

function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas, por favor, inténtalo próximamente.");
}

function proceso(){
	alert("Proyecto en curso... Estreno de la página proximamente");
}

// Función para fijar el menú al hacer scroll
const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});